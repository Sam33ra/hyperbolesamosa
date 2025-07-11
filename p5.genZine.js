/**@preserve ==========================================================
 *
 * p5.(gen)Zine
 * Copyright (c) 2023 Munus Shih, Iley Cao, https://github.com/munusshih
 *
 * Licensed under GNU General Public License.
 * https://www.gnu.org/licenses
 ====================================================================*/

// HTML-----------------------------------------
document.body.innerHTML += `

<base target="_blank">
<nav>
    <div class="title">
    <h1 id="genTitle">GenZ(ine)</h1>
    <h2 id="author">by Munus Shih</h2>
  </div>
</nav>

  <div class="desktop">
    <input type="button" value="*download .jpg*" onclick="downloadJPG()"
      class="button alt" />
    <input type="button" value="*download .pdf*" onclick="downloadPDF()"
      class="button alt" />
  </div>


<div class="label" id="nav-label"><a href="https://github.com/munusshih/p5.genzine" target="_blank" rel="noopener noreferrer">>made with
    p5.(gen)zine</a></div>

<div id="myCanvas"></div>
<div id="myCanvasPoster"></div>

<footer>
  <div class="label" id="footer-label">
    This zine is about...
  </div>

  <p id="des">
    This zine is about...
  </p>

</footer>`;

// css------------------------------------------
const styless = `
  @import url('https://fonts.googleapis.com/css2?family=Averia+Libre&family=Bebas+Neue&family=Bungee+Shade&family=Faster+One&family=Inconsolata&family=Playfair+Display:ital@1&family=Rubik+Puddles&family=Ultra&display=swap');
@font-face {
  font-family: "Bluu";
  src: url("https://munusshih.github.io/p5.zine/assets/BluuNext-Bold.otf");
}

html[data-theme=light] {
  --color-text: #333;
  --accent-color: #ed225d;
  --line-color: #ddd;
  --color-background: #fff;
}

html[data-theme=dark] {
  --color-text: #fff;
  --accent-color: #ed225d;
  --line-color: #ddd;
  --color-background: #000;
}

* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  padding-top: 30px;
  background: url(https://munusshih.github.io/p5.genzine/bg.png) no-repeat fixed var(--color-background);
  scroll-behavior: smooth;
  transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 420ms !important;
  transition-delay: 0 !important;
}

canvas {
  display: block;
}

p {
  text-align: center;
  font-family: "Inconsolata", monospace;
  color: var(--accent-color);
  font-size: 12px;
  letter-spacing: -0.1px;
  overflow-wrap: break-word;
}

nav {
  position: fixed;
  background: none;
  width: 100%;
  text-align: left;
  top: 0px;
  padding-bottom: 0.5em;
  padding-left: 1em;
}
.desktop {
  position: fixed;
  bottom: 0em;
  padding-right: .5em;
  width: 100%;
  height: 2.5em;
  text-align: right;
  padding-top: .5em;
  padding-bottom: 3.25em;
  border-top: 1px solid var(--accent-color);
  background: var(--color-background);
  color: var(--color-text);
  margin-top: 0.5em;
  margin-right: 0.5em;
}
nav .title {
  display: inline-block;
  text-align: left;
  margin: 0px;
}
nav .title h1 {
  display: inline-block;
  color: var(--accent-color);
  font-family: "Bluu";
  font-size: 1.8em;
  line-height: 1;
  padding-top: 20px;
  margin: 0;
  margin-right: 10px;
  vertical-align: text-bottom;
}
nav .title h2 {
  display: inline-block;
  margin-right: 20px;
  color: var(--color-text);
  font-weight: 100;
  font-family: monospace;
  font-size: 1em;
}
nav .title h2 a {
  color: var(--color-text);
}
nav .title h2 a:hover {
  color: var(--line-color);
}

.label {
  position: fixed;
  background: var(--accent-color);
  padding: 0.5em;
  font-family: monospace;
}
.label a {
  text-decoration: none;
  color: white;
}

#nav-label {
  position: fixed;
  right: 0em;
  top: 0em;
}

#footer-label {
  position: relative;
  text-align: left;
  width: 15em;
  padding-left: 0.5em;
  color: white;
  left: 0em;
  top: -3.7em;
}

footer {
  width: 100%;
  text-align: center;
  padding: 20px;
  border-top: 1px solid var(--accent-color);
  margin-bottom: 6em;
}
footer p {
  margin: auto;
  text-align: center;
  max-width: 700px;
}

.button {
  // background: var(--color-background);
  border: 0px solid var(--accent-color);
  color: var(--accent-color);
  text-align: center;
  text-decoration: none;
  vertical-align: super;
  display: inline-block;
  font-size: 13px;
  margin: 4px 10px;
  height: 40px;
  min-width: 40px;
  line-height: 40px;
  font-family: "Inconsolata", monospace;
border: 1px solid var(--accent-color);
}
.button:hover {
  color: var(--accent-color);
  cursor: pointer;
  border-bottom: 1px dashed var(--accent-color);
}

.alt {
  background: var(--color-background);
  color: var(--accent-color);

  margin: 0em;
  margin-top: 0.3em;
  margin-left:.3em;
  // border-right: 1px solid var(--color-background);
  border-radius:20px;
}
.alt:hover {
background: var(--accent-color);
  color: white;

  cursor: pointer;

}

hr {
  margin-top: 50px;
  margin-bottom: 50px;
  border: 0.1px solid var(--accent-color);
}

#doc,
#doc p {
  text-align: left;
}

h2 {
  font-family: "Bluu";
}

h3 {
  font-family: "Inconsolata", monospace;
}

h3 {
  color: var(--accent-color);
  font-size: 20px;
}

p {
  font-size: 20px;
}

span {
  color: grey;
}

@media screen and (max-width: 500px) {
  canvas {
    margin-top: 4em;
  }
}/*# sourceMappingURL=styles.css.map */`;

let colorScheme;

const styleSheet = document.createElement("style");
styleSheet.innerText = styless;
document.head.appendChild(styleSheet);

// dark mode
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  colorScheme === "dark";
  document.documentElement.setAttribute("data-theme", "dark");
} else {
  colorScheme === "light";
  document.documentElement.setAttribute("data-theme", "light");
}

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    colorScheme = event.matches ? "dark" : "light";

    if (colorScheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  });

// jspdf
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : (t.jspdf = e());
})(this, function () {
  "use strict";
  var t =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          },
    e =
      ((function () {
        function t(t) {
          this.value = t;
        }
        function e(e) {
          function n(t, e) {
            return new Promise(function (n, i) {
              var s = { key: t, arg: e, resolve: n, reject: i, next: null };
              a ? (a = a.next = s) : ((o = a = s), r(t, e));
            });
          }
          function r(n, o) {
            try {
              var a = e[n](o),
                s = a.value;
              s instanceof t
                ? Promise.resolve(s.value).then(
                    function (t) {
                      r("next", t);
                    },
                    function (t) {
                      r("throw", t);
                    }
                  )
                : i(a.done ? "return" : "normal", a.value);
            } catch (t) {
              i("throw", t);
            }
          }
          function i(t, e) {
            switch (t) {
              case "return":
                o.resolve({ value: e, done: !0 });
                break;
              case "throw":
                o.reject(e);
                break;
              default:
                o.resolve({ value: e, done: !1 });
            }
            (o = o.next), o ? r(o.key, o.arg) : (a = null);
          }
          var o, a;
          (this._invoke = n),
            "function" != typeof e.return && (this.return = void 0);
        }
        return (
          "function" == typeof Symbol &&
            Symbol.asyncIterator &&
            (e.prototype[Symbol.asyncIterator] = function () {
              return this;
            }),
          (e.prototype.next = function (t) {
            return this._invoke("next", t);
          }),
          (e.prototype.throw = function (t) {
            return this._invoke("throw", t);
          }),
          (e.prototype.return = function (t) {
            return this._invoke("return", t);
          }),
          {
            wrap: function (t) {
              return function () {
                return new e(t.apply(this, arguments));
              };
            },
            await: function (e) {
              return new t(e);
            },
          }
        );
      })(),
      (function (e) {
        function n(t) {
          var n = {};
          (this.subscribe = function (t, e, r) {
            if ("function" != typeof e) return !1;
            n.hasOwnProperty(t) || (n[t] = {});
            var i = Math.random().toString(35);
            return (n[t][i] = [e, !!r]), i;
          }),
            (this.unsubscribe = function (t) {
              for (var e in n) if (n[e][t]) return delete n[e][t], !0;
              return !1;
            }),
            (this.publish = function (r) {
              if (n.hasOwnProperty(r)) {
                var i = Array.prototype.slice.call(arguments, 1),
                  o = [];
                for (var a in n[r]) {
                  var s = n[r][a];
                  try {
                    s[0].apply(t, i);
                  } catch (t) {
                    e.console &&
                      console.error("jsPDF PubSub Error", t.message, t);
                  }
                  s[1] && o.push(a);
                }
                o.length && o.forEach(this.unsubscribe);
              }
            });
        }
        function r(c, l, u, h) {
          var f = {};
          "object" === ("undefined" == typeof c ? "undefined" : t(c)) &&
            ((f = c),
            (c = f.orientation),
            (l = f.unit || l),
            (u = f.format || u),
            (h = f.compress || f.compressPdf || h)),
            (l = l || "mm"),
            (u = u || "a4"),
            (c = ("" + (c || "P")).toLowerCase());
          var d,
            p,
            g,
            m,
            w,
            y,
            v,
            b,
            x,
            k =
              (("" + u).toLowerCase(), !!h && "function" == typeof Uint8Array),
            _ = f.textColor || "0 g",
            C = f.drawColor || "0 G",
            A = f.fontSize || 16,
            S = f.lineHeight || 1.15,
            q = f.lineWidth || 0.200025,
            T = 2,
            P = !1,
            I = [],
            E = {},
            O = {},
            F = 0,
            R = [],
            B = [],
            D = [],
            j = [],
            z = [],
            N = 0,
            L = 0,
            M = 0,
            U = {
              title: "",
              subject: "",
              author: "",
              keywords: "",
              creator: "",
            },
            H = {},
            W = new n(H),
            X = function (t) {
              return t.toFixed(2);
            },
            V = function (t) {
              return t.toFixed(3);
            },
            Y = function (t) {
              return ("0" + parseInt(t)).slice(-2);
            },
            G = function (t) {
              P ? R[m].push(t) : ((M += t.length + 1), j.push(t));
            },
            J = function () {
              return T++, (I[T] = M), G(T + " 0 obj"), T;
            },
            Q = function () {
              var t = 2 * R.length + 1;
              t += z.length;
              var e = { objId: t, content: "" };
              return z.push(e), e;
            },
            K = function () {
              return (
                T++,
                (I[T] = function () {
                  return M;
                }),
                T
              );
            },
            $ = function (t) {
              I[t] = M;
            },
            Z = function (t) {
              G("stream"), G(t), G("endstream");
            },
            tt = function () {
              var t,
                n,
                i,
                o,
                s,
                c,
                l,
                u,
                h,
                f = [];
              for (
                l = e.adler32cs || r.adler32cs,
                  k && "undefined" == typeof l && (k = !1),
                  t = 1;
                t <= F;
                t++
              ) {
                if (
                  (f.push(J()),
                  (u = (w = D[t].width) * p),
                  (h = (y = D[t].height) * p),
                  G("<</Type /Page"),
                  G("/Parent 1 0 R"),
                  G("/Resources 2 0 R"),
                  G("/MediaBox [0 0 " + X(u) + " " + X(h) + "]"),
                  W.publish("putPage", { pageNumber: t, page: R[t] }),
                  G("/Contents " + (T + 1) + " 0 R"),
                  G(">>"),
                  G("endobj"),
                  (n = R[t].join("\n")),
                  J(),
                  k)
                ) {
                  for (i = [], o = n.length; o--; ) i[o] = n.charCodeAt(o);
                  (c = l.from(n)),
                    (s = new a(6)),
                    s.append(new Uint8Array(i)),
                    (n = s.flush()),
                    (i = new Uint8Array(n.length + 6)),
                    i.set(new Uint8Array([120, 156])),
                    i.set(n, 2),
                    i.set(
                      new Uint8Array([
                        255 & c,
                        (c >> 8) & 255,
                        (c >> 16) & 255,
                        (c >> 24) & 255,
                      ]),
                      n.length + 2
                    ),
                    (n = String.fromCharCode.apply(null, i)),
                    G("<</Length " + n.length + " /Filter [/FlateDecode]>>");
                } else G("<</Length " + n.length + ">>");
                Z(n), G("endobj");
              }
              (I[1] = M), G("1 0 obj"), G("<</Type /Pages");
              var d = "/Kids [";
              for (o = 0; o < F; o++) d += f[o] + " 0 R ";
              G(d + "]"),
                G("/Count " + F),
                G(">>"),
                G("endobj"),
                W.publish("postPutPages");
            },
            et = function (t) {
              (t.objectNumber = J()),
                G("<</BaseFont/" + t.PostScriptName + "/Type/Font"),
                "string" == typeof t.encoding && G("/Encoding/" + t.encoding),
                G("/Subtype/Type1>>"),
                G("endobj");
            },
            nt = function () {
              for (var t in E) E.hasOwnProperty(t) && et(E[t]);
            },
            rt = function () {
              W.publish("putXobjectDict");
            },
            it = function () {
              G("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), G("/Font <<");
              for (var t in E)
                E.hasOwnProperty(t) &&
                  G("/" + t + " " + E[t].objectNumber + " 0 R");
              G(">>"), G("/XObject <<"), rt(), G(">>");
            },
            ot = function () {
              nt(),
                W.publish("putResources"),
                (I[2] = M),
                G("2 0 obj"),
                G("<<"),
                it(),
                G(">>"),
                G("endobj"),
                W.publish("postPutResources");
            },
            at = function () {
              W.publish("putAdditionalObjects");
              for (var t = 0; t < z.length; t++) {
                var e = z[t];
                (I[e.objId] = M),
                  G(e.objId + " 0 obj"),
                  G(e.content),
                  G("endobj");
              }
              (T += z.length), W.publish("postPutAdditionalObjects");
            },
            st = function (t, e, n) {
              O.hasOwnProperty(e) || (O[e] = {}), (O[e][n] = t);
            },
            ct = function (t, e, n, r) {
              var i = "F" + (Object.keys(E).length + 1).toString(10),
                o = (E[i] = {
                  id: i,
                  PostScriptName: t,
                  fontName: e,
                  fontStyle: n,
                  encoding: r,
                  metadata: {},
                });
              return st(i, e, n), W.publish("addFont", o), i;
            },
            lt = function () {
              for (
                var t = "helvetica",
                  e = "times",
                  n = "courier",
                  r = "normal",
                  i = "bold",
                  o = "italic",
                  a = "bolditalic",
                  s = "StandardEncoding",
                  c = "zapfdingbats",
                  l = [
                    ["Helvetica", t, r],
                    ["Helvetica-Bold", t, i],
                    ["Helvetica-Oblique", t, o],
                    ["Helvetica-BoldOblique", t, a],
                    ["Courier", n, r],
                    ["Courier-Bold", n, i],
                    ["Courier-Oblique", n, o],
                    ["Courier-BoldOblique", n, a],
                    ["Times-Roman", e, r],
                    ["Times-Bold", e, i],
                    ["Times-Italic", e, o],
                    ["Times-BoldItalic", e, a],
                    ["ZapfDingbats", c],
                  ],
                  u = 0,
                  h = l.length;
                u < h;
                u++
              ) {
                var f = ct(l[u][0], l[u][1], l[u][2], s),
                  d = l[u][0].split("-");
                st(f, d[0], d[1] || "");
              }
              W.publish("addFonts", { fonts: E, dictionary: O });
            },
            ut = function (t) {
              return (
                (t.foo = function () {
                  try {
                    return t.apply(this, arguments);
                  } catch (t) {
                    var n = t.stack || "";
                    ~n.indexOf(" at ") && (n = n.split(" at ")[1]);
                    var r =
                      "Error in function " +
                      n.split("\n")[0].split("<")[0] +
                      ": " +
                      t.message;
                    if (!e.console) throw new Error(r);
                    e.console.error(r, t), e.alert && alert(r);
                  }
                }),
                (t.foo.bar = t),
                t.foo
              );
            },
            ht = function (t, e) {
              var n, r, i, o, a, s, c, l, u;
              if (
                ((e = e || {}),
                (i = e.sourceEncoding || "Unicode"),
                (a = e.outputEncoding),
                (e.autoencode || a) &&
                  E[d].metadata &&
                  E[d].metadata[i] &&
                  E[d].metadata[i].encoding &&
                  ((o = E[d].metadata[i].encoding),
                  !a && E[d].encoding && (a = E[d].encoding),
                  !a && o.codePages && (a = o.codePages[0]),
                  "string" == typeof a && (a = o[a]),
                  a))
              ) {
                for (c = !1, s = [], n = 0, r = t.length; n < r; n++)
                  (l = a[t.charCodeAt(n)]),
                    l ? s.push(String.fromCharCode(l)) : s.push(t[n]),
                    s[n].charCodeAt(0) >> 8 && (c = !0);
                t = s.join("");
              }
              for (n = t.length; void 0 === c && 0 !== n; )
                t.charCodeAt(n - 1) >> 8 && (c = !0), n--;
              if (!c) return t;
              for (
                s = e.noBOM ? [] : [254, 255], n = 0, r = t.length;
                n < r;
                n++
              ) {
                if (((l = t.charCodeAt(n)), (u = l >> 8), u >> 8))
                  throw new Error(
                    "Character at position " +
                      n +
                      " of string '" +
                      t +
                      "' exceeds 16bits. Cannot be encoded into UCS-2 BE"
                  );
                s.push(u), s.push(l - (u << 8));
              }
              return String.fromCharCode.apply(void 0, s);
            },
            ft = function (t, e) {
              return ht(t, e)
                .replace(/\\/g, "\\\\")
                .replace(/\(/g, "\\(")
                .replace(/\)/g, "\\)");
            },
            dt = function () {
              G("/Producer (jsPDF " + r.version + ")");
              for (var t in U)
                U.hasOwnProperty(t) &&
                  U[t] &&
                  G(
                    "/" +
                      t.substr(0, 1).toUpperCase() +
                      t.substr(1) +
                      " (" +
                      ft(U[t]) +
                      ")"
                  );
              var e = new Date(),
                n = e.getTimezoneOffset(),
                i = n < 0 ? "+" : "-",
                o = Math.floor(Math.abs(n / 60)),
                a = Math.abs(n % 60),
                s = [i, Y(o), "'", Y(a), "'"].join("");
              G(
                [
                  "/CreationDate (D:",
                  e.getFullYear(),
                  Y(e.getMonth() + 1),
                  Y(e.getDate()),
                  Y(e.getHours()),
                  Y(e.getMinutes()),
                  Y(e.getSeconds()),
                  s,
                  ")",
                ].join("")
              );
            },
            pt = function () {
              switch (
                (G("/Type /Catalog"),
                G("/Pages 1 0 R"),
                b || (b = "fullwidth"),
                b)
              ) {
                case "fullwidth":
                  G("/OpenAction [3 0 R /FitH null]");
                  break;
                case "fullheight":
                  G("/OpenAction [3 0 R /FitV null]");
                  break;
                case "fullpage":
                  G("/OpenAction [3 0 R /Fit]");
                  break;
                case "original":
                  G("/OpenAction [3 0 R /XYZ null null 1]");
                  break;
                default:
                  var t = "" + b;
                  "%" === t.substr(t.length - 1) && (b = parseInt(b) / 100),
                    "number" == typeof b &&
                      G("/OpenAction [3 0 R /XYZ null null " + X(b) + "]");
              }
              switch ((x || (x = "continuous"), x)) {
                case "continuous":
                  G("/PageLayout /OneColumn");
                  break;
                case "single":
                  G("/PageLayout /SinglePage");
                  break;
                case "two":
                case "twoleft":
                  G("/PageLayout /TwoColumnLeft");
                  break;
                case "tworight":
                  G("/PageLayout /TwoColumnRight");
              }
              v && G("/PageMode /" + v), W.publish("putCatalog");
            },
            gt = function () {
              G("/Size " + (T + 1)),
                G("/Root " + T + " 0 R"),
                G("/Info " + (T - 1) + " 0 R");
            },
            mt = function (t, e) {
              var n = "string" == typeof e && e.toLowerCase();
              if ("string" == typeof t) {
                var r = t.toLowerCase();
                s.hasOwnProperty(r) && ((t = s[r][0] / p), (e = s[r][1] / p));
              }
              if ((Array.isArray(t) && ((e = t[1]), (t = t[0])), n)) {
                switch (n.substr(0, 1)) {
                  case "l":
                    e > t && (n = "s");
                    break;
                  case "p":
                    t > e && (n = "s");
                }
                "s" === n && ((g = t), (t = e), (e = g));
              }
              (P = !0),
                (R[++F] = []),
                (D[F] = { width: Number(t) || w, height: Number(e) || y }),
                (B[F] = {}),
                vt(F);
            },
            wt = function () {
              mt.apply(this, arguments),
                G(X(q * p) + " w"),
                G(C),
                0 !== N && G(N + " J"),
                0 !== L && G(L + " j"),
                W.publish("addPage", { pageNumber: F });
            },
            yt = function (t) {
              t > 0 &&
                t <= F &&
                (R.splice(t, 1),
                D.splice(t, 1),
                F--,
                m > F && (m = F),
                this.setPage(m));
            },
            vt = function (t) {
              t > 0 && t <= F && ((m = t), (w = D[t].width), (y = D[t].height));
            },
            bt = function (t, e) {
              var n;
              switch (
                ((t = void 0 !== t ? t : E[d].fontName),
                (e = void 0 !== e ? e : E[d].fontStyle),
                void 0 !== t && (t = t.toLowerCase()),
                t)
              ) {
                case "sans-serif":
                case "verdana":
                case "arial":
                case "helvetica":
                  t = "helvetica";
                  break;
                case "fixed":
                case "monospace":
                case "terminal":
                case "courier":
                  t = "courier";
                  break;
                case "serif":
                case "cursive":
                case "fantasy":
                default:
                  t = "times";
              }
              try {
                n = O[t][e];
              } catch (t) {}
              return (
                n || ((n = O.times[e]), null == n && (n = O.times.normal)), n
              );
            },
            xt = function () {
              (P = !1),
                (T = 2),
                (M = 0),
                (j = []),
                (I = []),
                (z = []),
                W.publish("buildDocument"),
                G("%PDF-" + o),
                tt(),
                at(),
                ot(),
                J(),
                G("<<"),
                dt(),
                G(">>"),
                G("endobj"),
                J(),
                G("<<"),
                pt(),
                G(">>"),
                G("endobj");
              var t,
                e = M,
                n = "0000000000";
              for (
                G("xref"), G("0 " + (T + 1)), G(n + " 65535 f "), t = 1;
                t <= T;
                t++
              ) {
                var r = I[t];
                G(
                  "function" == typeof r
                    ? (n + I[t]()).slice(-10) + " 00000 n "
                    : (n + I[t]).slice(-10) + " 00000 n "
                );
              }
              return (
                G("trailer"),
                G("<<"),
                gt(),
                G(">>"),
                G("startxref"),
                G("" + e),
                G("%%EOF"),
                (P = !0),
                j.join("\n")
              );
            },
            kt = function (t) {
              var e = "S";
              return (
                "F" === t
                  ? (e = "f")
                  : "FD" === t || "DF" === t
                  ? (e = "B")
                  : ("f" !== t && "f*" !== t && "B" !== t && "B*" !== t) ||
                    (e = t),
                e
              );
            },
            _t = function () {
              for (
                var t = xt(),
                  e = t.length,
                  n = new ArrayBuffer(e),
                  r = new Uint8Array(n);
                e--;

              )
                r[e] = t.charCodeAt(e);
              return n;
            },
            Ct = function () {
              return new Blob([_t()], { type: "application/pdf" });
            },
            At = ut(function (t, n) {
              var r =
                "dataur" === ("" + t).substr(0, 6)
                  ? "data:application/pdf;base64," + btoa(xt())
                  : 0;
              switch (t) {
                case void 0:
                  return xt();
                case "save":
                  if (
                    navigator.getUserMedia &&
                    (void 0 === e.URL || void 0 === e.URL.createObjectURL)
                  )
                    return H.output("dataurlnewwindow");
                  i(Ct(), n),
                    "function" == typeof i.unload &&
                      e.setTimeout &&
                      setTimeout(i.unload, 911);
                  break;
                case "arraybuffer":
                  return _t();
                case "blob":
                  return Ct();
                case "bloburi":
                case "bloburl":
                  return (e.URL && e.URL.createObjectURL(Ct())) || void 0;
                case "datauristring":
                case "dataurlstring":
                  return r;
                case "dataurlnewwindow":
                  var o = e.open(r);
                  if (o || "undefined" == typeof safari) return o;
                case "datauri":
                case "dataurl":
                  return (e.document.location.href = r);
                default:
                  throw new Error('Output type "' + t + '" is not supported.');
              }
            });
          switch (l) {
            case "pt":
              p = 1;
              break;
            case "mm":
              p = 72 / 25.4000508;
              break;
            case "cm":
              p = 72 / 2.54000508;
              break;
            case "in":
              p = 72;
              break;
            case "px":
              p = 96 / 72;
              break;
            case "pc":
              p = 12;
              break;
            case "em":
              p = 12;
              break;
            case "ex":
              p = 6;
              break;
            default:
              throw "Invalid unit: " + l;
          }
          (H.internal = {
            pdfEscape: ft,
            getStyle: kt,
            getFont: function () {
              return E[bt.apply(H, arguments)];
            },
            getFontSize: function () {
              return A;
            },
            getLineHeight: function () {
              return A * S;
            },
            write: function (t) {
              G(
                1 === arguments.length
                  ? t
                  : Array.prototype.join.call(arguments, " ")
              );
            },
            getCoordinateString: function (t) {
              return X(t * p);
            },
            getVerticalCoordinateString: function (t) {
              return X((y - t) * p);
            },
            collections: {},
            newObject: J,
            newAdditionalObject: Q,
            newObjectDeferred: K,
            newObjectDeferredBegin: $,
            putStream: Z,
            events: W,
            scaleFactor: p,
            pageSize: {
              get width() {
                return w;
              },
              get height() {
                return y;
              },
            },
            output: function (t, e) {
              return At(t, e);
            },
            getNumberOfPages: function () {
              return R.length - 1;
            },
            pages: R,
            out: G,
            f2: X,
            getPageInfo: function (t) {
              var e = 2 * (t - 1) + 3;
              return { objId: e, pageNumber: t, pageContext: B[t] };
            },
            getCurrentPageInfo: function () {
              var t = 2 * (m - 1) + 3;
              return { objId: t, pageNumber: m, pageContext: B[m] };
            },
            getPDFVersion: function () {
              return o;
            },
          }),
            (H.addPage = function () {
              return wt.apply(this, arguments), this;
            }),
            (H.setPage = function () {
              return vt.apply(this, arguments), this;
            }),
            (H.insertPage = function (t) {
              return this.addPage(), this.movePage(m, t), this;
            }),
            (H.movePage = function (t, e) {
              if (t > e) {
                for (var n = R[t], r = D[t], i = B[t], o = t; o > e; o--)
                  (R[o] = R[o - 1]), (D[o] = D[o - 1]), (B[o] = B[o - 1]);
                (R[e] = n), (D[e] = r), (B[e] = i), this.setPage(e);
              } else if (t < e) {
                for (var n = R[t], r = D[t], i = B[t], o = t; o < e; o++)
                  (R[o] = R[o + 1]), (D[o] = D[o + 1]), (B[o] = B[o + 1]);
                (R[e] = n), (D[e] = r), (B[e] = i), this.setPage(e);
              }
              return this;
            }),
            (H.deletePage = function () {
              return yt.apply(this, arguments), this;
            }),
            (H.setDisplayMode = function (t, e, n) {
              (b = t), (x = e), (v = n);
              var r = [
                void 0,
                null,
                "UseNone",
                "UseOutlines",
                "UseThumbs",
                "FullScreen",
              ];
              if (r.indexOf(n) == -1)
                throw new Error(
                  'Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' +
                    n +
                    '" is not recognized.'
                );
              return this;
            }),
            (H.text = function (t, e, n, r, i, o) {
              function a(t) {
                return (
                  (t = t.split("\t").join(Array(f.TabLen || 9).join(" "))),
                  ft(t, r)
                );
              }
              "number" == typeof t && ((g = n), (n = e), (e = t), (t = g)),
                "string" == typeof t &&
                  (t = t.match(/[\n\r]/) ? t.split(/\r\n|\r|\n/g) : [t]),
                "string" == typeof i && ((o = i), (i = null)),
                "string" == typeof r && ((o = r), (r = null)),
                "number" == typeof r && ((i = r), (r = null));
              var s,
                c = "",
                l = "Td";
              if (i) {
                i *= Math.PI / 180;
                var u = Math.cos(i),
                  h = Math.sin(i);
                (c = [X(u), X(h), X(h * -1), X(u), ""].join(" ")), (l = "Tm");
              }
              (r = r || {}),
                "noBOM" in r || (r.noBOM = !0),
                "autoencode" in r || (r.autoencode = !0);
              var m = "",
                w = this.internal.getCurrentPageInfo().pageContext;
              if (
                (!0 === r.stroke
                  ? w.lastTextWasStroke !== !0 &&
                    ((m = "1 Tr\n"), (w.lastTextWasStroke = !0))
                  : (w.lastTextWasStroke && (m = "0 Tr\n"),
                    (w.lastTextWasStroke = !1)),
                "undefined" == typeof this._runningPageHeight &&
                  (this._runningPageHeight = 0),
                "string" == typeof t)
              )
                t = a(t);
              else {
                if ("[object Array]" !== Object.prototype.toString.call(t))
                  throw new Error(
                    'Type of text must be string or Array. "' +
                      t +
                      '" is not recognized.'
                  );
                for (var v = t.concat(), b = [], x = v.length; x--; )
                  b.push(a(v.shift()));
                var k = Math.ceil(
                  ((y - n - this._runningPageHeight) * p) / (A * S)
                );
                if ((0 <= k && k < b.length + 1, o)) {
                  var C,
                    q,
                    T,
                    P = A * S,
                    I = t.map(function (t) {
                      return (this.getStringUnitWidth(t) * A) / p;
                    }, this);
                  if (((T = Math.max.apply(Math, I)), "center" === o))
                    (C = e - T / 2), (e -= I[0] / 2);
                  else {
                    if ("right" !== o)
                      throw new Error(
                        'Unrecognized alignment option, use "center" or "right".'
                      );
                    (C = e - T), (e -= I[0]);
                  }
                  (q = e), (t = b[0]);
                  for (var E = 1, x = b.length; E < x; E++) {
                    var O = T - I[E];
                    "center" === o && (O /= 2),
                      (t += ") Tj\n" + (C - q + O) + " -" + P + " Td (" + b[E]),
                      (q = C + O);
                  }
                } else t = b.join(") Tj\nT* (");
              }
              var F;
              return (
                s || (F = X((y - n) * p)),
                G(
                  "BT\n/" +
                    d +
                    " " +
                    A +
                    " Tf\n" +
                    A * S +
                    " TL\n" +
                    m +
                    _ +
                    "\n" +
                    c +
                    X(e * p) +
                    " " +
                    F +
                    " " +
                    l +
                    "\n(" +
                    t +
                    ") Tj\nET"
                ),
                s && this.text(s, e, n),
                this
              );
            }),
            (H.lstext = function (t, e, n, r) {
              console.warn("jsPDF.lstext is deprecated");
              for (var i = 0, o = t.length; i < o; i++, e += r)
                this.text(t[i], e, n);
              return this;
            }),
            (H.line = function (t, e, n, r) {
              return this.lines([[n - t, r - e]], t, e);
            }),
            (H.clip = function () {
              G("W"), G("S");
            }),
            (H.clip_fixed = function (t) {
              G("evenodd" === t ? "W*" : "W"), G("n");
            }),
            (H.lines = function (t, e, n, r, i, o) {
              var a, s, c, l, u, h, f, d, m, w, v;
              for (
                "number" == typeof t && ((g = n), (n = e), (e = t), (t = g)),
                  r = r || [1, 1],
                  G(V(e * p) + " " + V((y - n) * p) + " m "),
                  a = r[0],
                  s = r[1],
                  l = t.length,
                  w = e,
                  v = n,
                  c = 0;
                c < l;
                c++
              )
                (u = t[c]),
                  2 === u.length
                    ? ((w = u[0] * a + w),
                      (v = u[1] * s + v),
                      G(V(w * p) + " " + V((y - v) * p) + " l"))
                    : ((h = u[0] * a + w),
                      (f = u[1] * s + v),
                      (d = u[2] * a + w),
                      (m = u[3] * s + v),
                      (w = u[4] * a + w),
                      (v = u[5] * s + v),
                      G(
                        V(h * p) +
                          " " +
                          V((y - f) * p) +
                          " " +
                          V(d * p) +
                          " " +
                          V((y - m) * p) +
                          " " +
                          V(w * p) +
                          " " +
                          V((y - v) * p) +
                          " c"
                      ));
              return o && G(" h"), null !== i && G(kt(i)), this;
            }),
            (H.rect = function (t, e, n, r, i) {
              kt(i);
              return (
                G(
                  [X(t * p), X((y - e) * p), X(n * p), X(-r * p), "re"].join(
                    " "
                  )
                ),
                null !== i && G(kt(i)),
                this
              );
            }),
            (H.triangle = function (t, e, n, r, i, o, a) {
              return (
                this.lines(
                  [
                    [n - t, r - e],
                    [i - n, o - r],
                    [t - i, e - o],
                  ],
                  t,
                  e,
                  [1, 1],
                  a,
                  !0
                ),
                this
              );
            }),
            (H.roundedRect = function (t, e, n, r, i, o, a) {
              var s = (4 / 3) * (Math.SQRT2 - 1);
              return (
                this.lines(
                  [
                    [n - 2 * i, 0],
                    [i * s, 0, i, o - o * s, i, o],
                    [0, r - 2 * o],
                    [0, o * s, -(i * s), o, -i, o],
                    [-n + 2 * i, 0],
                    [-(i * s), 0, -i, -(o * s), -i, -o],
                    [0, -r + 2 * o],
                    [0, -(o * s), i * s, -o, i, -o],
                  ],
                  t + i,
                  e,
                  [1, 1],
                  a
                ),
                this
              );
            }),
            (H.ellipse = function (t, e, n, r, i) {
              var o = (4 / 3) * (Math.SQRT2 - 1) * n,
                a = (4 / 3) * (Math.SQRT2 - 1) * r;
              return (
                G(
                  [
                    X((t + n) * p),
                    X((y - e) * p),
                    "m",
                    X((t + n) * p),
                    X((y - (e - a)) * p),
                    X((t + o) * p),
                    X((y - (e - r)) * p),
                    X(t * p),
                    X((y - (e - r)) * p),
                    "c",
                  ].join(" ")
                ),
                G(
                  [
                    X((t - o) * p),
                    X((y - (e - r)) * p),
                    X((t - n) * p),
                    X((y - (e - a)) * p),
                    X((t - n) * p),
                    X((y - e) * p),
                    "c",
                  ].join(" ")
                ),
                G(
                  [
                    X((t - n) * p),
                    X((y - (e + a)) * p),
                    X((t - o) * p),
                    X((y - (e + r)) * p),
                    X(t * p),
                    X((y - (e + r)) * p),
                    "c",
                  ].join(" ")
                ),
                G(
                  [
                    X((t + o) * p),
                    X((y - (e + r)) * p),
                    X((t + n) * p),
                    X((y - (e + a)) * p),
                    X((t + n) * p),
                    X((y - e) * p),
                    "c",
                  ].join(" ")
                ),
                null !== i && G(kt(i)),
                this
              );
            }),
            (H.circle = function (t, e, n, r) {
              return this.ellipse(t, e, n, n, r);
            }),
            (H.setProperties = function (t) {
              for (var e in U) U.hasOwnProperty(e) && t[e] && (U[e] = t[e]);
              return this;
            }),
            (H.setFontSize = function (t) {
              return (A = t), this;
            }),
            (H.setFont = function (t, e) {
              return (d = bt(t, e)), this;
            }),
            (H.setFontStyle = H.setFontType =
              function (t) {
                return (d = bt(void 0, t)), this;
              }),
            (H.getFontList = function () {
              var t,
                e,
                n,
                r = {};
              for (t in O)
                if (O.hasOwnProperty(t)) {
                  r[t] = n = [];
                  for (e in O[t]) O[t].hasOwnProperty(e) && n.push(e);
                }
              return r;
            }),
            (H.addFont = function (t, e, n) {
              ct(t, e, n, "StandardEncoding");
            }),
            (H.setLineWidth = function (t) {
              return G((t * p).toFixed(2) + " w"), this;
            }),
            (H.setDrawColor = function (t, e, n, r) {
              var i;
              return (
                (i =
                  void 0 === e || (void 0 === r && (t === e) === n)
                    ? "string" == typeof t
                      ? t + " G"
                      : X(t / 255) + " G"
                    : void 0 === r
                    ? "string" == typeof t
                      ? [t, e, n, "RG"].join(" ")
                      : [X(t / 255), X(e / 255), X(n / 255), "RG"].join(" ")
                    : "string" == typeof t
                    ? [t, e, n, r, "K"].join(" ")
                    : [X(t), X(e), X(n), X(r), "K"].join(" ")),
                G(i),
                this
              );
            }),
            (H.setFillColor = function (e, n, r, i) {
              var o;
              return (
                void 0 === n || (void 0 === i && (e === n) === r)
                  ? (o = "string" == typeof e ? e + " g" : X(e / 255) + " g")
                  : void 0 === i ||
                    "object" === ("undefined" == typeof i ? "undefined" : t(i))
                  ? ((o =
                      "string" == typeof e
                        ? [e, n, r, "rg"].join(" ")
                        : [X(e / 255), X(n / 255), X(r / 255), "rg"].join(" ")),
                    i &&
                      0 === i.a &&
                      (o = ["255", "255", "255", "rg"].join(" ")))
                  : (o =
                      "string" == typeof e
                        ? [e, n, r, i, "k"].join(" ")
                        : [X(e), X(n), X(r), X(i), "k"].join(" ")),
                G(o),
                this
              );
            }),
            (H.setTextColor = function (t, e, n) {
              if ("string" == typeof t && /^#[0-9A-Fa-f]{6}$/.test(t)) {
                var r = parseInt(t.substr(1), 16);
                (t = (r >> 16) & 255), (e = (r >> 8) & 255), (n = 255 & r);
              }
              return (
                (_ =
                  (0 === t && 0 === e && 0 === n) || "undefined" == typeof e
                    ? V(t / 255) + " g"
                    : [V(t / 255), V(e / 255), V(n / 255), "rg"].join(" ")),
                this
              );
            }),
            (H.CapJoinStyles = {
              0: 0,
              butt: 0,
              but: 0,
              miter: 0,
              1: 1,
              round: 1,
              rounded: 1,
              circle: 1,
              2: 2,
              projecting: 2,
              project: 2,
              square: 2,
              bevel: 2,
            }),
            (H.setLineCap = function (t) {
              var e = this.CapJoinStyles[t];
              if (void 0 === e)
                throw new Error(
                  "Line cap style of '" +
                    t +
                    "' is not recognized. See or extend .CapJoinStyles property for valid styles"
                );
              return (N = e), G(e + " J"), this;
            }),
            (H.setLineJoin = function (t) {
              var e = this.CapJoinStyles[t];
              if (void 0 === e)
                throw new Error(
                  "Line join style of '" +
                    t +
                    "' is not recognized. See or extend .CapJoinStyles property for valid styles"
                );
              return (L = e), G(e + " j"), this;
            }),
            (H.output = At),
            (H.save = function (t) {
              H.output("save", t);
            });
          for (var St in r.API)
            r.API.hasOwnProperty(St) &&
              ("events" === St && r.API.events.length
                ? !(function (t, e) {
                    var n, r, i;
                    for (i = e.length - 1; i !== -1; i--)
                      (n = e[i][0]),
                        (r = e[i][1]),
                        t.subscribe.apply(
                          t,
                          [n].concat("function" == typeof r ? [r] : r)
                        );
                  })(W, r.API.events)
                : (H[St] = r.API[St]));
          return lt(), (d = "F1"), wt(u, c), W.publish("initialized"), H;
        }
        var o = "1.3",
          s = {
            a0: [2383.94, 3370.39],
            a1: [1683.78, 2383.94],
            a2: [1190.55, 1683.78],
            a3: [841.89, 1190.55],
            a4: [595.28, 841.89],
            a5: [419.53, 595.28],
            a6: [297.64, 419.53],
            a7: [209.76, 297.64],
            a8: [147.4, 209.76],
            a9: [104.88, 147.4],
            a10: [73.7, 104.88],
            b0: [2834.65, 4008.19],
            b1: [2004.09, 2834.65],
            b2: [1417.32, 2004.09],
            b3: [1000.63, 1417.32],
            b4: [708.66, 1000.63],
            b5: [498.9, 708.66],
            b6: [354.33, 498.9],
            b7: [249.45, 354.33],
            b8: [175.75, 249.45],
            b9: [124.72, 175.75],
            b10: [87.87, 124.72],
            c0: [2599.37, 3676.54],
            c1: [1836.85, 2599.37],
            c2: [1298.27, 1836.85],
            c3: [918.43, 1298.27],
            c4: [649.13, 918.43],
            c5: [459.21, 649.13],
            c6: [323.15, 459.21],
            c7: [229.61, 323.15],
            c8: [161.57, 229.61],
            c9: [113.39, 161.57],
            c10: [79.37, 113.39],
            dl: [311.81, 623.62],
            letter: [612, 792],
            "government-letter": [576, 756],
            legal: [612, 1008],
            "junior-legal": [576, 360],
            ledger: [1224, 792],
            tabloid: [792, 1224],
            "credit-card": [153, 243],
          };
        return (
          (r.API = { events: [] }),
          (r.version = "1.x-master"),
          "function" == typeof define && define.amd
            ? define("jsPDF", function () {
                return r;
              })
            : "undefined" != typeof module && module.exports
            ? (module.exports = r)
            : (e.jsPDF = r),
          r
        );
      })(
        ("undefined" != typeof self && self) ||
          ("undefined" != typeof window && window) ||
          void 0
      ));
  /**
   * jsPDF AcroForm Plugin
   * Copyright (c) 2016 Alexander Weidt, https://github.com/BiggA94
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
  (window.AcroForm = function (t) {
    var n = window.AcroForm;
    (n.scale = function (t) {
      return t * (r.internal.scaleFactor / 1);
    }),
      (n.antiScale = function (t) {
        return (1 / r.internal.scaleFactor) * t;
      });
    var r = {
      fields: [],
      xForms: [],
      acroFormDictionaryRoot: null,
      printedOut: !1,
      internal: null,
    };
    e.API.acroformPlugin = r;
    var i = function () {
        for (var t in this.acroformPlugin.acroFormDictionaryRoot.Fields) {
          var e = this.acroformPlugin.acroFormDictionaryRoot.Fields[t];
          e.hasAnnotation && a.call(this, e);
        }
      },
      o = function () {
        if (this.acroformPlugin.acroFormDictionaryRoot)
          throw new Error("Exception while creating AcroformDictionary");
        (this.acroformPlugin.acroFormDictionaryRoot =
          new n.AcroFormDictionary()),
          (this.acroformPlugin.internal = this.internal),
          (this.acroformPlugin.acroFormDictionaryRoot._eventID =
            this.internal.events.subscribe("postPutResources", l)),
          this.internal.events.subscribe("buildDocument", i),
          this.internal.events.subscribe("putCatalog", c),
          this.internal.events.subscribe("postPutPages", u);
      },
      a = function (t) {
        var n = { type: "reference", object: t };
        e.API.annotationPlugin.annotations[
          this.internal.getPageInfo(t.page).pageNumber
        ].push(n);
      },
      s = function (t) {
        this.acroformPlugin.printedOut &&
          ((this.acroformPlugin.printedOut = !1),
          (this.acroformPlugin.acroFormDictionaryRoot = null)),
          this.acroformPlugin.acroFormDictionaryRoot || o.call(this),
          this.acroformPlugin.acroFormDictionaryRoot.Fields.push(t);
      },
      c = function () {
        "undefined" != typeof this.acroformPlugin.acroFormDictionaryRoot
          ? this.internal.write(
              "/AcroForm " +
                this.acroformPlugin.acroFormDictionaryRoot.objId +
                " 0 R"
            )
          : console.log("Root missing...");
      },
      l = function () {
        this.internal.events.unsubscribe(
          this.acroformPlugin.acroFormDictionaryRoot._eventID
        ),
          delete this.acroformPlugin.acroFormDictionaryRoot._eventID,
          (this.acroformPlugin.printedOut = !0);
      },
      u = function (t) {
        var e = !t;
        t ||
          (this.internal.newObjectDeferredBegin(
            this.acroformPlugin.acroFormDictionaryRoot.objId
          ),
          this.internal.out(
            this.acroformPlugin.acroFormDictionaryRoot.getString()
          ));
        var t = t || this.acroformPlugin.acroFormDictionaryRoot.Kids;
        for (var r in t) {
          var i = t[r],
            o = i.Rect;
          i.Rect &&
            (i.Rect = n.internal.calculateCoordinates.call(this, i.Rect)),
            this.internal.newObjectDeferredBegin(i.objId);
          var a = "";
          if (
            ((a += i.objId + " 0 obj\n"),
            (a += "<<\n" + i.getContent()),
            (i.Rect = o),
            i.hasAppearanceStream && !i.appearanceStreamContent)
          ) {
            var s = n.internal.calculateAppearanceStream.call(this, i);
            (a += "/AP << /N " + s + " >>\n"),
              this.acroformPlugin.xForms.push(s);
          }
          if (i.appearanceStreamContent) {
            a += "/AP << ";
            for (var c in i.appearanceStreamContent) {
              var l = i.appearanceStreamContent[c];
              if (
                ((a += "/" + c + " "),
                (a += "<< "),
                Object.keys(l).length >= 1 || Array.isArray(l))
              )
                for (var r in l) {
                  var u = l[r];
                  "function" == typeof u && (u = u.call(this, i)),
                    (a += "/" + r + " " + u + " "),
                    this.acroformPlugin.xForms.indexOf(u) >= 0 ||
                      this.acroformPlugin.xForms.push(u);
                }
              else {
                var u = l;
                "function" == typeof u && (u = u.call(this, i)),
                  (a += "/" + r + " " + u + " \n"),
                  this.acroformPlugin.xForms.indexOf(u) >= 0 ||
                    this.acroformPlugin.xForms.push(u);
              }
              a += " >>\n";
            }
            a += ">>\n";
          }
          (a += ">>\nendobj\n"), this.internal.out(a);
        }
        e && h.call(this, this.acroformPlugin.xForms);
      },
      h = function (t) {
        for (var e in t) {
          var n = e,
            r = t[e];
          this.internal.newObjectDeferredBegin(r && r.objId);
          var i = "";
          (i += r ? r.getString() : ""), this.internal.out(i), delete t[n];
        }
      };
    t.addField = function (t) {
      return (
        t instanceof n.TextField
          ? d.call(this, t)
          : t instanceof n.ChoiceField
          ? p.call(this, t)
          : t instanceof n.Button
          ? f.call(this, t)
          : t instanceof n.ChildClass
          ? s.call(this, t)
          : t && s.call(this, t),
        (t.page = this.acroformPlugin.internal.getCurrentPageInfo().pageNumber),
        this
      );
    };
    var f = function (t) {
        var t = t || new n.Field();
        t.FT = "/Btn";
        var e = t.Ff || 0;
        t.pushbutton &&
          ((e = n.internal.setBitPosition(e, 17)), delete t.pushbutton),
          t.radio && ((e = n.internal.setBitPosition(e, 16)), delete t.radio),
          t.noToggleToOff && (e = n.internal.setBitPosition(e, 15)),
          (t.Ff = e),
          s.call(this, t);
      },
      d = function (t) {
        var t = t || new n.Field();
        t.FT = "/Tx";
        var e = t.Ff || 0;
        t.multiline && (e = 4096 | e),
          t.password && (e = 8192 | e),
          t.fileSelect && (e |= 1 << 20),
          t.doNotSpellCheck && (e |= 1 << 22),
          t.doNotScroll && (e |= 1 << 23),
          (t.Ff = t.Ff || e),
          s.call(this, t);
      },
      p = function (t) {
        var e = t || new n.Field();
        e.FT = "/Ch";
        var r = e.Ff || 0;
        e.combo && ((r = n.internal.setBitPosition(r, 18)), delete e.combo),
          e.edit && ((r = n.internal.setBitPosition(r, 19)), delete e.edit),
          e.sort && ((r = n.internal.setBitPosition(r, 20)), delete e.sort),
          e.multiSelect &&
            this.internal.getPDFVersion() >= 1.4 &&
            ((r = n.internal.setBitPosition(r, 22)), delete e.multiSelect),
          e.doNotSpellCheck &&
            this.internal.getPDFVersion() >= 1.4 &&
            ((r = n.internal.setBitPosition(r, 23)), delete e.doNotSpellCheck),
          (e.Ff = r),
          s.call(this, e);
      };
  })(e.API);
  var n = window.AcroForm;
  (n.internal = {}),
    (n.createFormXObject = function (t) {
      var e = new n.FormXObject(),
        r = n.Appearance.internal.getHeight(t) || 0,
        i = n.Appearance.internal.getWidth(t) || 0;
      return (e.BBox = [0, 0, i, r]), e;
    }),
    (n.Appearance = {
      CheckBox: {
        createAppearanceStream: function () {
          var t = {
            N: { On: n.Appearance.CheckBox.YesNormal },
            D: {
              On: n.Appearance.CheckBox.YesPushDown,
              Off: n.Appearance.CheckBox.OffPushDown,
            },
          };
          return t;
        },
        createMK: function () {
          return "<< /CA (3)>>";
        },
        YesPushDown: function (t) {
          var e = n.createFormXObject(t),
            r = "";
          t.Q = 1;
          var i = n.internal.calculateX(t, "3", "ZapfDingbats", 50);
          return (
            (r +=
              "0.749023 g\n             0 0 " +
              n.Appearance.internal.getWidth(t) +
              " " +
              n.Appearance.internal.getHeight(t) +
              " re\n             f\n             BMC\n             q\n             0 0 1 rg\n             /F13 " +
              i.fontSize +
              " Tf 0 g\n             BT\n"),
            (r += i.text),
            (r += "ET\n             Q\n             EMC\n"),
            (e.stream = r),
            e
          );
        },
        YesNormal: function (t) {
          var e = n.createFormXObject(t),
            r = "";
          t.Q = 1;
          var i = n.internal.calculateX(
            t,
            "3",
            "ZapfDingbats",
            0.9 * n.Appearance.internal.getHeight(t)
          );
          return (
            (r +=
              "1 g\n0 0 " +
              n.Appearance.internal.getWidth(t) +
              " " +
              n.Appearance.internal.getHeight(t) +
              " re\nf\nq\n0 0 1 rg\n0 0 " +
              (n.Appearance.internal.getWidth(t) - 1) +
              " " +
              (n.Appearance.internal.getHeight(t) - 1) +
              " re\nW\nn\n0 g\nBT\n/F13 " +
              i.fontSize +
              " Tf 0 g\n"),
            (r += i.text),
            (r += "ET\n             Q\n"),
            (e.stream = r),
            e
          );
        },
        OffPushDown: function (t) {
          var e = n.createFormXObject(t),
            r = "";
          return (
            (r +=
              "0.749023 g\n            0 0 " +
              n.Appearance.internal.getWidth(t) +
              " " +
              n.Appearance.internal.getHeight(t) +
              " re\n            f\n"),
            (e.stream = r),
            e
          );
        },
      },
      RadioButton: {
        Circle: {
          createAppearanceStream: function (t) {
            var e = {
              D: { Off: n.Appearance.RadioButton.Circle.OffPushDown },
              N: {},
            };
            return (
              (e.N[t] = n.Appearance.RadioButton.Circle.YesNormal),
              (e.D[t] = n.Appearance.RadioButton.Circle.YesPushDown),
              e
            );
          },
          createMK: function () {
            return "<< /CA (l)>>";
          },
          YesNormal: function (t) {
            var e = n.createFormXObject(t),
              r = "",
              i =
                n.Appearance.internal.getWidth(t) <=
                n.Appearance.internal.getHeight(t)
                  ? n.Appearance.internal.getWidth(t) / 4
                  : n.Appearance.internal.getHeight(t) / 4;
            i *= 0.9;
            var o = n.Appearance.internal.Bezier_C;
            return (
              (r +=
                "q\n1 0 0 1 " +
                n.Appearance.internal.getWidth(t) / 2 +
                " " +
                n.Appearance.internal.getHeight(t) / 2 +
                " cm\n" +
                i +
                " 0 m\n" +
                i +
                " " +
                i * o +
                " " +
                i * o +
                " " +
                i +
                " 0 " +
                i +
                " c\n-" +
                i * o +
                " " +
                i +
                " -" +
                i +
                " " +
                i * o +
                " -" +
                i +
                " 0 c\n-" +
                i +
                " -" +
                i * o +
                " -" +
                i * o +
                " -" +
                i +
                " 0 -" +
                i +
                " c\n" +
                i * o +
                " -" +
                i +
                " " +
                i +
                " -" +
                i * o +
                " " +
                i +
                " 0 c\nf\nQ\n"),
              (e.stream = r),
              e
            );
          },
          YesPushDown: function (t) {
            var e = n.createFormXObject(t),
              r = "",
              i =
                n.Appearance.internal.getWidth(t) <=
                n.Appearance.internal.getHeight(t)
                  ? n.Appearance.internal.getWidth(t) / 4
                  : n.Appearance.internal.getHeight(t) / 4;
            i *= 0.9;
            var o = 2 * i,
              a = o * n.Appearance.internal.Bezier_C,
              s = i * n.Appearance.internal.Bezier_C;
            return (
              (r +=
                "0.749023 g\n            q\n           1 0 0 1 " +
                n.Appearance.internal.getWidth(t) / 2 +
                " " +
                n.Appearance.internal.getHeight(t) / 2 +
                " cm\n" +
                o +
                " 0 m\n" +
                o +
                " " +
                a +
                " " +
                a +
                " " +
                o +
                " 0 " +
                o +
                " c\n-" +
                a +
                " " +
                o +
                " -" +
                o +
                " " +
                a +
                " -" +
                o +
                " 0 c\n-" +
                o +
                " -" +
                a +
                " -" +
                a +
                " -" +
                o +
                " 0 -" +
                o +
                " c\n" +
                a +
                " -" +
                o +
                " " +
                o +
                " -" +
                a +
                " " +
                o +
                " 0 c\n            f\n            Q\n            0 g\n            q\n            1 0 0 1 " +
                n.Appearance.internal.getWidth(t) / 2 +
                " " +
                n.Appearance.internal.getHeight(t) / 2 +
                " cm\n" +
                i +
                " 0 m\n" +
                i +
                " " +
                s +
                " " +
                s +
                " " +
                i +
                " 0 " +
                i +
                " c\n-" +
                s +
                " " +
                i +
                " -" +
                i +
                " " +
                s +
                " -" +
                i +
                " 0 c\n-" +
                i +
                " -" +
                s +
                " -" +
                s +
                " -" +
                i +
                " 0 -" +
                i +
                " c\n" +
                s +
                " -" +
                i +
                " " +
                i +
                " -" +
                s +
                " " +
                i +
                " 0 c\n            f\n            Q\n"),
              (e.stream = r),
              e
            );
          },
          OffPushDown: function (t) {
            var e = n.createFormXObject(t),
              r = "",
              i =
                n.Appearance.internal.getWidth(t) <=
                n.Appearance.internal.getHeight(t)
                  ? n.Appearance.internal.getWidth(t) / 4
                  : n.Appearance.internal.getHeight(t) / 4;
            i *= 0.9;
            var o = 2 * i,
              a = o * n.Appearance.internal.Bezier_C;
            return (
              (r +=
                "0.749023 g\n            q\n 1 0 0 1 " +
                n.Appearance.internal.getWidth(t) / 2 +
                " " +
                n.Appearance.internal.getHeight(t) / 2 +
                " cm\n" +
                o +
                " 0 m\n" +
                o +
                " " +
                a +
                " " +
                a +
                " " +
                o +
                " 0 " +
                o +
                " c\n-" +
                a +
                " " +
                o +
                " -" +
                o +
                " " +
                a +
                " -" +
                o +
                " 0 c\n-" +
                o +
                " -" +
                a +
                " -" +
                a +
                " -" +
                o +
                " 0 -" +
                o +
                " c\n" +
                a +
                " -" +
                o +
                " " +
                o +
                " -" +
                a +
                " " +
                o +
                " 0 c\n            f\n            Q\n"),
              (e.stream = r),
              e
            );
          },
        },
        Cross: {
          createAppearanceStream: function (t) {
            var e = {
              D: { Off: n.Appearance.RadioButton.Cross.OffPushDown },
              N: {},
            };
            return (
              (e.N[t] = n.Appearance.RadioButton.Cross.YesNormal),
              (e.D[t] = n.Appearance.RadioButton.Cross.YesPushDown),
              e
            );
          },
          createMK: function () {
            return "<< /CA (8)>>";
          },
          YesNormal: function (t) {
            var e = n.createFormXObject(t),
              r = "",
              i = n.Appearance.internal.calculateCross(t);
            return (
              (r +=
                "q\n            1 1 " +
                (n.Appearance.internal.getWidth(t) - 2) +
                " " +
                (n.Appearance.internal.getHeight(t) - 2) +
                " re\n            W\n            n\n            " +
                i.x1.x +
                " " +
                i.x1.y +
                " m\n            " +
                i.x2.x +
                " " +
                i.x2.y +
                " l\n            " +
                i.x4.x +
                " " +
                i.x4.y +
                " m\n            " +
                i.x3.x +
                " " +
                i.x3.y +
                " l\n            s\n            Q\n"),
              (e.stream = r),
              e
            );
          },
          YesPushDown: function (t) {
            var e = n.createFormXObject(t),
              r = n.Appearance.internal.calculateCross(t),
              i = "";
            return (
              (i +=
                "0.749023 g\n            0 0 " +
                n.Appearance.internal.getWidth(t) +
                " " +
                n.Appearance.internal.getHeight(t) +
                " re\n            f\n            q\n            1 1 " +
                (n.Appearance.internal.getWidth(t) - 2) +
                " " +
                (n.Appearance.internal.getHeight(t) - 2) +
                " re\n            W\n            n\n            " +
                r.x1.x +
                " " +
                r.x1.y +
                " m\n            " +
                r.x2.x +
                " " +
                r.x2.y +
                " l\n            " +
                r.x4.x +
                " " +
                r.x4.y +
                " m\n            " +
                r.x3.x +
                " " +
                r.x3.y +
                " l\n            s\n            Q\n"),
              (e.stream = i),
              e
            );
          },
          OffPushDown: function (t) {
            var e = n.createFormXObject(t),
              r = "";
            return (
              (r +=
                "0.749023 g\n            0 0 " +
                n.Appearance.internal.getWidth(t) +
                " " +
                n.Appearance.internal.getHeight(t) +
                " re\n            f\n"),
              (e.stream = r),
              e
            );
          },
        },
      },
      createDefaultAppearanceStream: function (t) {
        var e = "";
        return (e += "/Helv 0 Tf 0 g");
      },
    }),
    (n.Appearance.internal = {
      Bezier_C: 0.551915024494,
      calculateCross: function (t) {
        var e = function (t, e) {
            return t > e ? e : t;
          },
          r = n.Appearance.internal.getWidth(t),
          i = n.Appearance.internal.getHeight(t),
          o = e(r, i),
          a = {
            x1: { x: (r - o) / 2, y: (i - o) / 2 + o },
            x2: { x: (r - o) / 2 + o, y: (i - o) / 2 },
            x3: { x: (r - o) / 2, y: (i - o) / 2 },
            x4: { x: (r - o) / 2 + o, y: (i - o) / 2 + o },
          };
        return a;
      },
    }),
    (n.Appearance.internal.getWidth = function (t) {
      return t.Rect[2];
    }),
    (n.Appearance.internal.getHeight = function (t) {
      return t.Rect[3];
    }),
    (n.internal.inherit = function (t, e) {
      Object.create ||
        function (t) {
          var e = function () {};
          return (e.prototype = t), new e();
        };
      (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t);
    }),
    (n.internal.arrayToPdfArray = function (t) {
      if (Array.isArray(t)) {
        var e = " [";
        for (var n in t) {
          var r = t[n].toString();
          (e += r), (e += n < t.length - 1 ? " " : "");
        }
        return (e += "]");
      }
    }),
    (n.internal.toPdfString = function (t) {
      return (
        (t = t || ""),
        0 !== t.indexOf("(") && (t = "(" + t),
        ")" != t.substring(t.length - 1) && (t += "("),
        t
      );
    }),
    (n.PDFObject = function () {
      var t;
      Object.defineProperty(this, "objId", {
        get: function () {
          return (
            t ||
              (this.internal
                ? (t = this.internal.newObjectDeferred())
                : e.API.acroformPlugin.internal &&
                  (t = e.API.acroformPlugin.internal.newObjectDeferred())),
            t || console.log("Couldn't create Object ID"),
            t
          );
        },
        configurable: !1,
      });
    }),
    (n.PDFObject.prototype.toString = function () {
      return this.objId + " 0 R";
    }),
    (n.PDFObject.prototype.getString = function () {
      var t = this.objId + " 0 obj\n<<",
        e = this.getContent();
      return (
        (t += e + ">>\n"),
        this.stream &&
          ((t += "stream\n"), (t += this.stream), (t += "endstream\n")),
        (t += "endobj\n")
      );
    }),
    (n.PDFObject.prototype.getContent = function () {
      var t = function (t) {
          var e = "",
            r = Object.keys(t).filter(function (t) {
              return (
                "content" != t &&
                "appearanceStreamContent" != t &&
                "_" != t.substring(0, 1)
              );
            });
          for (var i in r) {
            var o = r[i],
              a = t[o];
            a &&
              (e += Array.isArray(a)
                ? "/" + o + " " + n.internal.arrayToPdfArray(a) + "\n"
                : a instanceof n.PDFObject
                ? "/" + o + " " + a.objId + " 0 R\n"
                : "/" + o + " " + a + "\n");
          }
          return e;
        },
        e = "";
      return (e += t(this));
    }),
    (n.FormXObject = function () {
      n.PDFObject.call(this),
        (this.Type = "/XObject"),
        (this.Subtype = "/Form"),
        (this.FormType = 1),
        this.BBox,
        this.Matrix,
        (this.Resources = "2 0 R"),
        this.PieceInfo;
      var t;
      Object.defineProperty(this, "Length", {
        enumerable: !0,
        get: function () {
          return void 0 !== t ? t.length : 0;
        },
      }),
        Object.defineProperty(this, "stream", {
          enumerable: !1,
          set: function (e) {
            t = e;
          },
          get: function () {
            return t ? t : null;
          },
        });
    }),
    n.internal.inherit(n.FormXObject, n.PDFObject),
    (n.AcroFormDictionary = function () {
      n.PDFObject.call(this);
      var t = [];
      Object.defineProperty(this, "Kids", {
        enumerable: !1,
        configurable: !0,
        get: function () {
          return t.length > 0 ? t : void 0;
        },
      }),
        Object.defineProperty(this, "Fields", {
          enumerable: !0,
          configurable: !0,
          get: function () {
            return t;
          },
        }),
        this.DA;
    }),
    n.internal.inherit(n.AcroFormDictionary, n.PDFObject),
    (n.Field = function () {
      n.PDFObject.call(this);
      var t;
      Object.defineProperty(this, "Rect", {
        enumerable: !0,
        configurable: !1,
        get: function () {
          if (t) {
            var e = t;
            return e;
          }
        },
        set: function (e) {
          t = e;
        },
      });
      var e = "";
      Object.defineProperty(this, "FT", {
        enumerable: !0,
        set: function (t) {
          e = t;
        },
        get: function () {
          return e;
        },
      });
      var r;
      Object.defineProperty(this, "T", {
        enumerable: !0,
        configurable: !1,
        set: function (t) {
          r = t;
        },
        get: function () {
          if (!r || r.length < 1) {
            if (this instanceof n.ChildClass) return;
            return "(FieldObject" + n.Field.FieldNum++ + ")";
          }
          return "(" == r.substring(0, 1) && r.substring(r.length - 1)
            ? r
            : "(" + r + ")";
        },
      });
      var i;
      Object.defineProperty(this, "DA", {
        enumerable: !0,
        get: function () {
          if (i) return "(" + i + ")";
        },
        set: function (t) {
          i = t;
        },
      });
      var o;
      Object.defineProperty(this, "DV", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          if (o) return o;
        },
        set: function (t) {
          o = t;
        },
      }),
        Object.defineProperty(this, "Type", {
          enumerable: !0,
          get: function () {
            return this.hasAnnotation ? "/Annot" : null;
          },
        }),
        Object.defineProperty(this, "Subtype", {
          enumerable: !0,
          get: function () {
            return this.hasAnnotation ? "/Widget" : null;
          },
        }),
        this.BG,
        Object.defineProperty(this, "hasAnnotation", {
          enumerable: !1,
          get: function () {
            return !!(this.Rect || this.BC || this.BG);
          },
        }),
        Object.defineProperty(this, "hasAppearanceStream", {
          enumerable: !1,
          configurable: !0,
          writable: !0,
        }),
        Object.defineProperty(this, "page", {
          enumerable: !1,
          configurable: !0,
          writable: !0,
        });
    }),
    (n.Field.FieldNum = 0),
    n.internal.inherit(n.Field, n.PDFObject),
    (n.ChoiceField = function () {
      n.Field.call(this),
        (this.FT = "/Ch"),
        (this.Opt = []),
        (this.V = "()"),
        (this.TI = 0),
        (this.combo = !1),
        Object.defineProperty(this, "edit", {
          enumerable: !0,
          set: function (t) {
            1 == t ? ((this._edit = !0), (this.combo = !0)) : (this._edit = !1);
          },
          get: function () {
            return !!this._edit && this._edit;
          },
          configurable: !1,
        }),
        (this.hasAppearanceStream = !0),
        Object.defineProperty(this, "V", {
          get: function () {
            n.internal.toPdfString();
          },
        });
    }),
    n.internal.inherit(n.ChoiceField, n.Field),
    (window.ChoiceField = n.ChoiceField),
    (n.ListBox = function () {
      n.ChoiceField.call(this);
    }),
    n.internal.inherit(n.ListBox, n.ChoiceField),
    (window.ListBox = n.ListBox),
    (n.ComboBox = function () {
      n.ListBox.call(this), (this.combo = !0);
    }),
    n.internal.inherit(n.ComboBox, n.ListBox),
    (window.ComboBox = n.ComboBox),
    (n.EditBox = function () {
      n.ComboBox.call(this), (this.edit = !0);
    }),
    n.internal.inherit(n.EditBox, n.ComboBox),
    (window.EditBox = n.EditBox),
    (n.Button = function () {
      n.Field.call(this), (this.FT = "/Btn");
    }),
    n.internal.inherit(n.Button, n.Field),
    (window.Button = n.Button),
    (n.PushButton = function () {
      n.Button.call(this), (this.pushbutton = !0);
    }),
    n.internal.inherit(n.PushButton, n.Button),
    (window.PushButton = n.PushButton),
    (n.RadioButton = function () {
      n.Button.call(this), (this.radio = !0);
      var t = [];
      Object.defineProperty(this, "Kids", {
        enumerable: !0,
        get: function () {
          if (t.length > 0) return t;
        },
      }),
        Object.defineProperty(this, "__Kids", {
          get: function () {
            return t;
          },
        });
      var e;
      Object.defineProperty(this, "noToggleToOff", {
        enumerable: !1,
        get: function () {
          return e;
        },
        set: function (t) {
          e = t;
        },
      });
    }),
    n.internal.inherit(n.RadioButton, n.Button),
    (window.RadioButton = n.RadioButton),
    (n.ChildClass = function (t, e) {
      n.Field.call(this),
        (this.Parent = t),
        (this._AppearanceType = n.Appearance.RadioButton.Circle),
        (this.appearanceStreamContent =
          this._AppearanceType.createAppearanceStream(e)),
        (this.F = n.internal.setBitPosition(this.F, 3, 1)),
        (this.MK = this._AppearanceType.createMK()),
        (this.AS = "/Off"),
        (this._Name = e);
    }),
    n.internal.inherit(n.ChildClass, n.Field),
    (n.RadioButton.prototype.setAppearance = function (t) {
      if (!("createAppearanceStream" in t && "createMK" in t))
        return void console.log(
          "Couldn't assign Appearance to RadioButton. Appearance was Invalid!"
        );
      for (var e in this.__Kids) {
        var n = this.__Kids[e];
        (n.appearanceStreamContent = t.createAppearanceStream(n._Name)),
          (n.MK = t.createMK());
      }
    }),
    (n.RadioButton.prototype.createOption = function (t) {
      var r = this,
        i = (this.__Kids.length, new n.ChildClass(r, t));
      return this.__Kids.push(i), e.API.addField(i), i;
    }),
    (n.CheckBox = function () {
      Button.call(this),
        (this.appearanceStreamContent =
          n.Appearance.CheckBox.createAppearanceStream()),
        (this.MK = n.Appearance.CheckBox.createMK()),
        (this.AS = "/On"),
        (this.V = "/On");
    }),
    n.internal.inherit(n.CheckBox, n.Button),
    (window.CheckBox = n.CheckBox),
    (n.TextField = function () {
      n.Field.call(this),
        (this.DA = n.Appearance.createDefaultAppearanceStream()),
        (this.F = 4);
      var t;
      Object.defineProperty(this, "V", {
        get: function () {
          return t ? "(" + t + ")" : t;
        },
        enumerable: !0,
        set: function (e) {
          t = e;
        },
      });
      var e;
      Object.defineProperty(this, "DV", {
        get: function () {
          return e ? "(" + e + ")" : e;
        },
        enumerable: !0,
        set: function (t) {
          e = t;
        },
      });
      var r = !1;
      Object.defineProperty(this, "multiline", {
        enumerable: !1,
        get: function () {
          return r;
        },
        set: function (t) {
          r = t;
        },
      });
      var i = !1;
      Object.defineProperty(this, "MaxLen", {
        enumerable: !0,
        get: function () {
          return i;
        },
        set: function (t) {
          i = t;
        },
      }),
        Object.defineProperty(this, "hasAppearanceStream", {
          enumerable: !1,
          get: function () {
            return this.V || this.DV;
          },
        });
    }),
    n.internal.inherit(n.TextField, n.Field),
    (window.TextField = n.TextField),
    (n.PasswordField = function () {
      TextField.call(this),
        Object.defineProperty(this, "password", {
          value: !0,
          enumerable: !1,
          configurable: !1,
          writable: !1,
        });
    }),
    n.internal.inherit(n.PasswordField, n.TextField),
    (window.PasswordField = n.PasswordField),
    (n.internal.calculateFontSpace = function (t, e, r) {
      var r = r || "helvetica",
        i =
          n.internal.calculateFontSpace.canvas ||
          (n.internal.calculateFontSpace.canvas =
            document.createElement("canvas")),
        o = i.getContext("2d");
      o.save();
      var a = e + " " + r;
      o.font = a;
      var s = o.measureText(t);
      o.fontcolor = "black";
      var o = i.getContext("2d");
      (s.height = 1.5 * o.measureText("3").width), o.restore();
      s.width;
      return s;
    }),
    (n.internal.calculateX = function (t, e, r, i) {
      var i = i || 12,
        r = r || "helvetica",
        o = { text: "", fontSize: "" };
      (e = "(" == e.substr(0, 1) ? e.substr(1) : e),
        (e = ")" == e.substr(e.length - 1) ? e.substr(0, e.length - 1) : e);
      var a = e.split(" "),
        s = i,
        c = 2,
        l = 2,
        u = n.Appearance.internal.getHeight(t) || 0;
      u = u < 0 ? -u : u;
      var h = n.Appearance.internal.getWidth(t) || 0;
      h = h < 0 ? -h : h;
      var f = function (t, e, i) {
        if (t + 1 < a.length) {
          var o = e + " " + a[t + 1],
            s = n.internal.calculateFontSpace(o, i + "px", r).width,
            c = h - 2 * l;
          return s <= c;
        }
        return !1;
      };
      s++;
      t: for (;;) {
        var e = "";
        s--;
        var d = n.internal.calculateFontSpace("3", s + "px", r).height,
          p = t.multiline ? u - s : (u - d) / 2;
        p += c;
        var g = -l,
          m = g,
          w = p,
          y = 0,
          v = 0,
          b = 0;
        if (0 == s) {
          (s = 12),
            (e = "(...) Tj\n"),
            (e +=
              "% Width of Text: " +
              n.internal.calculateFontSpace(e, "1px").width +
              ", FieldWidth:" +
              h +
              "\n");
          break;
        }
        b = n.internal.calculateFontSpace(a[0] + " ", s + "px", r).width;
        var x = "",
          k = 0;
        for (var _ in a) {
          (x += a[_] + " "),
            (x = " " == x.substr(x.length - 1) ? x.substr(0, x.length - 1) : x);
          var C = parseInt(_);
          b = n.internal.calculateFontSpace(x + " ", s + "px", r).width;
          var A = f(C, x, s),
            S = _ >= a.length - 1;
          if (!A || S) {
            if (A || S) {
              if (S) v = C;
              else if (t.multiline && (d + c) * (k + 2) + c > u) continue t;
            } else {
              if (!t.multiline) continue t;
              if ((d + c) * (k + 2) + c > u) continue t;
              v = C;
            }
            for (var q = "", T = y; T <= v; T++) q += a[T] + " ";
            switch (
              ((q =
                " " == q.substr(q.length - 1) ? q.substr(0, q.length - 1) : q),
              (b = n.internal.calculateFontSpace(q, s + "px", r).width),
              t.Q)
            ) {
              case 2:
                g = h - b - l;
                break;
              case 1:
                g = (h - b) / 2;
                break;
              case 0:
              default:
                g = l;
            }
            (e += g + " " + w + " Td\n"),
              (e += "(" + q + ") Tj\n"),
              (e += -g + " 0 Td\n"),
              (w = -(s + c)),
              (m = g),
              (b = 0),
              (y = v + 1),
              k++,
              (x = "");
          } else x += " ";
        }
        break;
      }
      return (o.text = e), (o.fontSize = s), o;
    }),
    (n.internal.calculateAppearanceStream = function (t) {
      if (t.appearanceStreamContent) return t.appearanceStreamContent;
      if (t.V || t.DV) {
        var e = "",
          r = t.V || t.DV,
          i = n.internal.calculateX(t, r);
        (e += "/Tx BMC\nq\n/F1 " + i.fontSize + " Tf\n1 0 0 1 0 0 Tm\n"),
          (e += "BT\n"),
          (e += i.text),
          (e += "ET\n"),
          (e += "Q\nEMC\n");
        var o = new n.createFormXObject(t);
        o.stream = e;
        return o;
      }
    }),
    (n.internal.calculateCoordinates = function (t, e, r, i) {
      var o = {};
      if (this.internal) {
        var a = function (t) {
          return t * this.internal.scaleFactor;
        };
        Array.isArray(t)
          ? ((t[0] = n.scale(t[0])),
            (t[1] = n.scale(t[1])),
            (t[2] = n.scale(t[2])),
            (t[3] = n.scale(t[3])),
            (o.lowerLeft_X = t[0] || 0),
            (o.lowerLeft_Y =
              a.call(this, this.internal.pageSize.height) - t[3] - t[1] || 0),
            (o.upperRight_X = t[0] + t[2] || 0),
            (o.upperRight_Y =
              a.call(this, this.internal.pageSize.height) - t[1] || 0))
          : ((t = n.scale(t)),
            (e = n.scale(e)),
            (r = n.scale(r)),
            (i = n.scale(i)),
            (o.lowerLeft_X = t || 0),
            (o.lowerLeft_Y = this.internal.pageSize.height - e || 0),
            (o.upperRight_X = t + r || 0),
            (o.upperRight_Y = this.internal.pageSize.height - e + i || 0));
      } else
        Array.isArray(t)
          ? ((o.lowerLeft_X = t[0] || 0),
            (o.lowerLeft_Y = t[1] || 0),
            (o.upperRight_X = t[0] + t[2] || 0),
            (o.upperRight_Y = t[1] + t[3] || 0))
          : ((o.lowerLeft_X = t || 0),
            (o.lowerLeft_Y = e || 0),
            (o.upperRight_X = t + r || 0),
            (o.upperRight_Y = e + i || 0));
      return [o.lowerLeft_X, o.lowerLeft_Y, o.upperRight_X, o.upperRight_Y];
    }),
    (n.internal.calculateColor = function (t, e, n) {
      var r = new Array(3);
      return (r.r = 0 | t), (r.g = 0 | e), (r.b = 0 | n), r;
    }),
    (n.internal.getBitPosition = function (t, e) {
      t = t || 0;
      var n = 1;
      return (n <<= e - 1), t | n;
    }),
    (n.internal.setBitPosition = function (t, e, n) {
      (t = t || 0), (n = n || 1);
      var r = 1;
      if (((r <<= e - 1), 1 == n)) var t = t | r;
      else var t = t & ~r;
      return t;
    }),
    /**
     * jsPDF addHTML PlugIn
     * Copyright (c) 2014 Diego Casorran
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */ (function (t) {
      t.addHTML = function (t, e, n, r, i) {
        if (
          "undefined" == typeof html2canvas &&
          "undefined" == typeof rasterizeHTML
        )
          throw new Error(
            "You need either https://github.com/niklasvh/html2canvas or https://github.com/cburgmer/rasterizeHTML.js"
          );
        "number" != typeof e && ((r = e), (i = n)),
          "function" == typeof r && ((i = r), (r = null));
        var o = this.internal,
          a = o.scaleFactor,
          s = o.pageSize.width,
          c = o.pageSize.height;
        if (
          ((r = r || {}),
          (r.onrendered = function (t) {
            (e = parseInt(e) || 0), (n = parseInt(n) || 0);
            var o = r.dim || {},
              l = o.h || 0,
              u = o.w || Math.min(s, t.width / a) - e,
              h = "JPEG";
            if ((r.format && (h = r.format), t.height > c && r.pagesplit)) {
              var f = function () {
                for (var r = 0; ; ) {
                  var o = document.createElement("canvas");
                  (o.width = Math.min(s * a, t.width)),
                    (o.height = Math.min(c * a, t.height - r));
                  var l = o.getContext("2d");
                  l.drawImage(
                    t,
                    0,
                    r,
                    t.width,
                    o.height,
                    0,
                    0,
                    o.width,
                    o.height
                  );
                  var f = [
                    o,
                    e,
                    r ? 0 : n,
                    o.width / a,
                    o.height / a,
                    h,
                    null,
                    "SLOW",
                  ];
                  if (
                    (this.addImage.apply(this, f),
                    (r += o.height),
                    r >= t.height)
                  )
                    break;
                  this.addPage();
                }
                i(u, r, null, f);
              }.bind(this);
              if ("CANVAS" === t.nodeName) {
                var d = new Image();
                (d.onload = f), (d.src = t.toDataURL("image/png")), (t = d);
              } else f();
            } else {
              var p = Math.random().toString(35),
                g = [t, e, n, u, l, h, p, "SLOW"];
              this.addImage.apply(this, g), i(u, l, p, g);
            }
          }.bind(this)),
          "undefined" != typeof html2canvas && !r.rstz)
        )
          return html2canvas(t, r);
        if ("undefined" != typeof rasterizeHTML) {
          var l = "drawDocument";
          return (
            "string" == typeof t &&
              (l = /^http/.test(t) ? "drawURL" : "drawHTML"),
            (r.width = r.width || s * a),
            rasterizeHTML[l](t, void 0, r).then(
              function (t) {
                r.onrendered(t.image);
              },
              function (t) {
                i(null, t);
              }
            )
          );
        }
        return null;
      };
    })(e.API),
    /** @preserve
     * jsPDF addImage plugin
     * Copyright (c) 2012 Jason Siefken, https://github.com/siefkenj/
     *               2013 Chris Dowling, https://github.com/gingerchris
     *               2013 Trinh Ho, https://github.com/ineedfat
     *               2013 Edwin Alejandro Perez, https://github.com/eaparango
     *               2013 Norah Smith, https://github.com/burnburnrocket
     *               2014 Diego Casorran, https://github.com/diegocr
     *               2014 James Robb, https://github.com/jamesbrobb
     *
     *
     */ (function (e) {
      var n = "addImage_",
        r = ["jpeg", "jpg", "png"],
        i = function t(e) {
          var n = this.internal.newObject(),
            r = this.internal.write,
            i = this.internal.putStream;
          if (
            ((e.n = n),
            r("<</Type /XObject"),
            r("/Subtype /Image"),
            r("/Width " + e.w),
            r("/Height " + e.h),
            e.cs === this.color_spaces.INDEXED
              ? r(
                  "/ColorSpace [/Indexed /DeviceRGB " +
                    (e.pal.length / 3 - 1) +
                    " " +
                    ("smask" in e ? n + 2 : n + 1) +
                    " 0 R]"
                )
              : (r("/ColorSpace /" + e.cs),
                e.cs === this.color_spaces.DEVICE_CMYK &&
                  r("/Decode [1 0 1 0 1 0 1 0]")),
            r("/BitsPerComponent " + e.bpc),
            "f" in e && r("/Filter /" + e.f),
            "dp" in e && r("/DecodeParms <<" + e.dp + ">>"),
            "trns" in e && e.trns.constructor == Array)
          ) {
            for (var o = "", a = 0, s = e.trns.length; a < s; a++)
              o += e.trns[a] + " " + e.trns[a] + " ";
            r("/Mask [" + o + "]");
          }
          if (
            ("smask" in e && r("/SMask " + (n + 1) + " 0 R"),
            r("/Length " + e.data.length + ">>"),
            i(e.data),
            r("endobj"),
            "smask" in e)
          ) {
            var c =
                "/Predictor " +
                e.p +
                " /Colors 1 /BitsPerComponent " +
                e.bpc +
                " /Columns " +
                e.w,
              l = {
                w: e.w,
                h: e.h,
                cs: "DeviceGray",
                bpc: e.bpc,
                dp: c,
                data: e.smask,
              };
            "f" in e && (l.f = e.f), t.call(this, l);
          }
          e.cs === this.color_spaces.INDEXED &&
            (this.internal.newObject(),
            r("<< /Length " + e.pal.length + ">>"),
            i(this.arrayBufferToBinaryString(new Uint8Array(e.pal))),
            r("endobj"));
        },
        o = function () {
          var t = this.internal.collections[n + "images"];
          for (var e in t) i.call(this, t[e]);
        },
        a = function () {
          var t,
            e = this.internal.collections[n + "images"],
            r = this.internal.write;
          for (var i in e) (t = e[i]), r("/I" + t.i, t.n, "0", "R");
        },
        s = function (t) {
          return (
            t && "string" == typeof t && (t = t.toUpperCase()),
            t in e.image_compression ? t : e.image_compression.NONE
          );
        },
        c = function () {
          var t = this.internal.collections[n + "images"];
          return (
            t ||
              ((this.internal.collections[n + "images"] = t = {}),
              this.internal.events.subscribe("putResources", o),
              this.internal.events.subscribe("putXobjectDict", a)),
            t
          );
        },
        l = function (t) {
          var e = 0;
          return (
            t &&
              (e = Object.keys
                ? Object.keys(t).length
                : (function (t) {
                    var e = 0;
                    for (var n in t) t.hasOwnProperty(n) && e++;
                    return e;
                  })(t)),
            e
          );
        },
        u = function (t) {
          return "undefined" == typeof t || null === t;
        },
        h = function (t) {
          return "string" == typeof t && e.sHashCode(t);
        },
        f = function (t) {
          return r.indexOf(t) === -1;
        },
        d = function (t) {
          return "function" != typeof e["process" + t.toUpperCase()];
        },
        p = function (e) {
          return (
            "object" === ("undefined" == typeof e ? "undefined" : t(e)) &&
            1 === e.nodeType
          );
        },
        g = function (e, n, r) {
          if ("IMG" === e.nodeName && e.hasAttribute("src")) {
            var i = "" + e.getAttribute("src");
            if (!r && 0 === i.indexOf("data:image/")) return i;
            !n && /\.png(?:[?#].*)?$/i.test(i) && (n = "png");
          }
          if ("CANVAS" === e.nodeName) var o = e;
          else {
            var o = document.createElement("canvas");
            (o.width = e.clientWidth || e.width),
              (o.height = e.clientHeight || e.height);
            var a = o.getContext("2d");
            if (!a)
              throw "addImage requires canvas to be supported by browser.";
            if (r) {
              var s,
                c,
                l,
                u,
                h,
                f,
                d,
                p,
                g = Math.PI / 180;
              "object" === ("undefined" == typeof r ? "undefined" : t(r)) &&
                ((s = r.x), (c = r.y), (l = r.bg), (r = r.angle)),
                (p = r * g),
                (u = Math.abs(Math.cos(p))),
                (h = Math.abs(Math.sin(p))),
                (f = o.width),
                (d = o.height),
                (o.width = d * h + f * u),
                (o.height = d * u + f * h),
                isNaN(s) && (s = o.width / 2),
                isNaN(c) && (c = o.height / 2),
                a.clearRect(0, 0, o.width, o.height),
                (a.fillStyle = l || "white"),
                a.fillRect(0, 0, o.width, o.height),
                a.save(),
                a.translate(s, c),
                a.rotate(p),
                a.drawImage(e, -(f / 2), -(d / 2)),
                a.rotate(-p),
                a.translate(-s, -c),
                a.restore();
            } else a.drawImage(e, 0, 0, o.width, o.height);
          }
          return o.toDataURL(
            "png" == ("" + n).toLowerCase() ? "image/png" : "image/jpeg"
          );
        },
        m = function (t, e) {
          var n;
          if (e)
            for (var r in e)
              if (t === e[r].alias) {
                n = e[r];
                break;
              }
          return n;
        },
        w = function (t, e, n) {
          return (
            t || e || ((t = -96), (e = -96)),
            t < 0 && (t = (-1 * n.w * 72) / t / this.internal.scaleFactor),
            e < 0 && (e = (-1 * n.h * 72) / e / this.internal.scaleFactor),
            0 === t && (t = (e * n.w) / n.h),
            0 === e && (e = (t * n.h) / n.w),
            [t, e]
          );
        },
        y = function (t, e, n, r, i, o, a) {
          var s = w.call(this, n, r, i),
            c = this.internal.getCoordinateString,
            l = this.internal.getVerticalCoordinateString;
          (n = s[0]),
            (r = s[1]),
            (a[o] = i),
            this.internal.write(
              "q",
              c(n),
              "0 0",
              c(r),
              c(t),
              l(e + r),
              "cm /I" + i.i,
              "Do Q"
            );
        };
      (e.color_spaces = {
        DEVICE_RGB: "DeviceRGB",
        DEVICE_GRAY: "DeviceGray",
        DEVICE_CMYK: "DeviceCMYK",
        CAL_GREY: "CalGray",
        CAL_RGB: "CalRGB",
        LAB: "Lab",
        ICC_BASED: "ICCBased",
        INDEXED: "Indexed",
        PATTERN: "Pattern",
        SEPARATION: "Separation",
        DEVICE_N: "DeviceN",
      }),
        (e.decode = {
          DCT_DECODE: "DCTDecode",
          FLATE_DECODE: "FlateDecode",
          LZW_DECODE: "LZWDecode",
          JPX_DECODE: "JPXDecode",
          JBIG2_DECODE: "JBIG2Decode",
          ASCII85_DECODE: "ASCII85Decode",
          ASCII_HEX_DECODE: "ASCIIHexDecode",
          RUN_LENGTH_DECODE: "RunLengthDecode",
          CCITT_FAX_DECODE: "CCITTFaxDecode",
        }),
        (e.image_compression = {
          NONE: "NONE",
          FAST: "FAST",
          MEDIUM: "MEDIUM",
          SLOW: "SLOW",
        }),
        (e.sHashCode = function (t) {
          return (
            Array.prototype.reduce &&
            t.split("").reduce(function (t, e) {
              return (t = (t << 5) - t + e.charCodeAt(0)), t & t;
            }, 0)
          );
        }),
        (e.isString = function (t) {
          return "string" == typeof t;
        }),
        (e.extractInfoFromBase64DataURI = function (t) {
          return /^data:([\w]+?\/([\w]+?));base64,(.+?)$/g.exec(t);
        }),
        (e.supportsArrayBuffer = function () {
          return (
            "undefined" != typeof ArrayBuffer &&
            "undefined" != typeof Uint8Array
          );
        }),
        (e.isArrayBuffer = function (t) {
          return !!this.supportsArrayBuffer() && t instanceof ArrayBuffer;
        }),
        (e.isArrayBufferView = function (t) {
          return (
            !!this.supportsArrayBuffer() &&
            "undefined" != typeof Uint32Array &&
            (t instanceof Int8Array ||
              t instanceof Uint8Array ||
              ("undefined" != typeof Uint8ClampedArray &&
                t instanceof Uint8ClampedArray) ||
              t instanceof Int16Array ||
              t instanceof Uint16Array ||
              t instanceof Int32Array ||
              t instanceof Uint32Array ||
              t instanceof Float32Array ||
              t instanceof Float64Array)
          );
        }),
        (e.binaryStringToUint8Array = function (t) {
          for (var e = t.length, n = new Uint8Array(e), r = 0; r < e; r++)
            n[r] = t.charCodeAt(r);
          return n;
        }),
        (e.arrayBufferToBinaryString = function (t) {
          this.isArrayBuffer(t) && (t = new Uint8Array(t));
          for (var e = "", n = t.byteLength, r = 0; r < n; r++)
            e += String.fromCharCode(t[r]);
          return e;
        }),
        (e.arrayBufferToBase64 = function (t) {
          for (
            var e,
              n,
              r,
              i,
              o,
              a = "",
              s =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              c = new Uint8Array(t),
              l = c.byteLength,
              u = l % 3,
              h = l - u,
              f = 0;
            f < h;
            f += 3
          )
            (o = (c[f] << 16) | (c[f + 1] << 8) | c[f + 2]),
              (e = (16515072 & o) >> 18),
              (n = (258048 & o) >> 12),
              (r = (4032 & o) >> 6),
              (i = 63 & o),
              (a += s[e] + s[n] + s[r] + s[i]);
          return (
            1 == u
              ? ((o = c[h]),
                (e = (252 & o) >> 2),
                (n = (3 & o) << 4),
                (a += s[e] + s[n] + "=="))
              : 2 == u &&
                ((o = (c[h] << 8) | c[h + 1]),
                (e = (64512 & o) >> 10),
                (n = (1008 & o) >> 4),
                (r = (15 & o) << 2),
                (a += s[e] + s[n] + s[r] + "=")),
            a
          );
        }),
        (e.createImageInfo = function (t, e, n, r, i, o, a, s, c, l, u, h, f) {
          var d = { alias: s, w: e, h: n, cs: r, bpc: i, i: a, data: t };
          return (
            o && (d.f = o),
            c && (d.dp = c),
            l && (d.trns = l),
            u && (d.pal = u),
            h && (d.smask = h),
            f && (d.p = f),
            d
          );
        }),
        (e.addImage = function (e, n, i, o, a, w, v, b, x) {
          if ("string" != typeof n) {
            var k = w;
            (w = a), (a = o), (o = i), (i = n), (n = k);
          }
          if (
            "object" === ("undefined" == typeof e ? "undefined" : t(e)) &&
            !p(e) &&
            "imageData" in e
          ) {
            var _ = e;
            (e = _.imageData),
              (n = _.format || n),
              (i = _.x || i || 0),
              (o = _.y || o || 0),
              (a = _.w || a),
              (w = _.h || w),
              (v = _.alias || v),
              (b = _.compression || b),
              (x = _.rotation || _.angle || x);
          }
          if (isNaN(i) || isNaN(o))
            throw (
              (console.error("jsPDF.addImage: Invalid coordinates", arguments),
              new Error("Invalid coordinates passed to jsPDF.addImage"))
            );
          var C,
            A = c.call(this);
          if (!(C = m(e, A))) {
            var S;
            if (
              (p(e) && (e = g(e, n, x)), u(v) && (v = h(e)), !(C = m(v, A)))
            ) {
              if (this.isString(e)) {
                var q = this.extractInfoFromBase64DataURI(e);
                q
                  ? ((n = q[2]), (e = atob(q[3])))
                  : 137 === e.charCodeAt(0) &&
                    80 === e.charCodeAt(1) &&
                    78 === e.charCodeAt(2) &&
                    71 === e.charCodeAt(3) &&
                    (n = "png");
              }
              if (((n = (n || "JPEG").toLowerCase()), f(n)))
                throw new Error(
                  "addImage currently only supports formats " +
                    r +
                    ", not '" +
                    n +
                    "'"
                );
              if (d(n))
                throw new Error(
                  "please ensure that the plugin for '" +
                    n +
                    "' support is added"
                );
              if (
                (this.supportsArrayBuffer() &&
                  (e instanceof Uint8Array ||
                    ((S = e), (e = this.binaryStringToUint8Array(e)))),
                (C = this["process" + n.toUpperCase()](e, l(A), v, s(b), S)),
                !C)
              )
                throw new Error(
                  "An unkwown error occurred whilst processing the image"
                );
            }
          }
          return y.call(this, i, o, a, w, C, C.i, A), this;
        });
      var v = function (t) {
          var e, n, r;
          if (
            255 === !t.charCodeAt(0) ||
            216 === !t.charCodeAt(1) ||
            255 === !t.charCodeAt(2) ||
            224 === !t.charCodeAt(3) ||
            !t.charCodeAt(6) === "J".charCodeAt(0) ||
            !t.charCodeAt(7) === "F".charCodeAt(0) ||
            !t.charCodeAt(8) === "I".charCodeAt(0) ||
            !t.charCodeAt(9) === "F".charCodeAt(0) ||
            0 === !t.charCodeAt(10)
          )
            throw new Error("getJpegSize requires a binary string jpeg file");
          for (
            var i = 256 * t.charCodeAt(4) + t.charCodeAt(5),
              o = 4,
              a = t.length;
            o < a;

          ) {
            if (((o += i), 255 !== t.charCodeAt(o)))
              throw new Error(
                "getJpegSize could not find the size of the image"
              );
            if (
              192 === t.charCodeAt(o + 1) ||
              193 === t.charCodeAt(o + 1) ||
              194 === t.charCodeAt(o + 1) ||
              195 === t.charCodeAt(o + 1) ||
              196 === t.charCodeAt(o + 1) ||
              197 === t.charCodeAt(o + 1) ||
              198 === t.charCodeAt(o + 1) ||
              199 === t.charCodeAt(o + 1)
            )
              return (
                (n = 256 * t.charCodeAt(o + 5) + t.charCodeAt(o + 6)),
                (e = 256 * t.charCodeAt(o + 7) + t.charCodeAt(o + 8)),
                (r = t.charCodeAt(o + 9)),
                [e, n, r]
              );
            (o += 2), (i = 256 * t.charCodeAt(o) + t.charCodeAt(o + 1));
          }
        },
        b = function (t) {
          var e = (t[0] << 8) | t[1];
          if (65496 !== e) throw new Error("Supplied data is not a JPEG");
          for (
            var n, r, i, o, a = t.length, s = (t[4] << 8) + t[5], c = 4;
            c < a;

          ) {
            if (
              ((c += s),
              (n = x(t, c)),
              (s = (n[2] << 8) + n[3]),
              (192 === n[1] || 194 === n[1]) && 255 === n[0] && s > 7)
            )
              return (
                (n = x(t, c + 5)),
                (r = (n[2] << 8) + n[3]),
                (i = (n[0] << 8) + n[1]),
                (o = n[4]),
                { width: r, height: i, numcomponents: o }
              );
            c += 2;
          }
          throw new Error(
            "getJpegSizeFromBytes could not find the size of the image"
          );
        },
        x = function (t, e) {
          return t.subarray(e, e + 5);
        };
      (e.processJPEG = function (t, e, n, r, i) {
        var o,
          a = this.color_spaces.DEVICE_RGB,
          s = this.decode.DCT_DECODE,
          c = 8;
        return this.isString(t)
          ? ((o = v(t)),
            this.createImageInfo(
              t,
              o[0],
              o[1],
              1 == o[3] ? this.color_spaces.DEVICE_GRAY : a,
              c,
              s,
              e,
              n
            ))
          : (this.isArrayBuffer(t) && (t = new Uint8Array(t)),
            this.isArrayBufferView(t)
              ? ((o = b(t)),
                (t = i || this.arrayBufferToBinaryString(t)),
                this.createImageInfo(
                  t,
                  o.width,
                  o.height,
                  1 == o.numcomponents ? this.color_spaces.DEVICE_GRAY : a,
                  c,
                  s,
                  e,
                  n
                ))
              : null);
      }),
        (e.processJPG = function () {
          return this.processJPEG.apply(this, arguments);
        });
    })(e.API),
    /**
     * jsPDF Annotations PlugIn
     * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */ (function (t) {
      var n = {
        annotations: [],
        f2: function (t) {
          return t.toFixed(2);
        },
        notEmpty: function (t) {
          if ("undefined" != typeof t && "" != t) return !0;
        },
      };
      return (
        (e.API.annotationPlugin = n),
        e.API.events.push([
          "addPage",
          function (t) {
            this.annotationPlugin.annotations[t.pageNumber] = [];
          },
        ]),
        t.events.push([
          "putPage",
          function (t) {
            for (
              var e = this.annotationPlugin.annotations[t.pageNumber],
                r = !1,
                i = 0;
              i < e.length && !r;
              i++
            ) {
              var o = e[i];
              switch (o.type) {
                case "link":
                  if (
                    n.notEmpty(o.options.url) ||
                    n.notEmpty(o.options.pageNumber)
                  ) {
                    r = !0;
                    break;
                  }
                case "reference":
                case "text":
                case "freetext":
                  r = !0;
              }
            }
            if (0 != r) {
              this.internal.write("/Annots [");
              for (
                var a = this.annotationPlugin.f2,
                  s = this.internal.scaleFactor,
                  c = this.internal.pageSize.height,
                  l = this.internal.getPageInfo(t.pageNumber),
                  i = 0;
                i < e.length;
                i++
              ) {
                var o = e[i];
                switch (o.type) {
                  case "reference":
                    this.internal.write(" " + o.object.objId + " 0 R ");
                    break;
                  case "text":
                    var u = this.internal.newAdditionalObject(),
                      h = this.internal.newAdditionalObject(),
                      f = o.title || "Note",
                      d =
                        "/Rect [" +
                        a(o.bounds.x * s) +
                        " " +
                        a(c - (o.bounds.y + o.bounds.h) * s) +
                        " " +
                        a((o.bounds.x + o.bounds.w) * s) +
                        " " +
                        a((c - o.bounds.y) * s) +
                        "] ";
                    (y =
                      "<</Type /Annot /Subtype /Text " +
                      d +
                      "/Contents (" +
                      o.contents +
                      ")"),
                      (y += " /Popup " + h.objId + " 0 R"),
                      (y += " /P " + l.objId + " 0 R"),
                      (y += " /T (" + f + ") >>"),
                      (u.content = y);
                    var p = u.objId + " 0 R",
                      g = 30,
                      d =
                        "/Rect [" +
                        a((o.bounds.x + g) * s) +
                        " " +
                        a(c - (o.bounds.y + o.bounds.h) * s) +
                        " " +
                        a((o.bounds.x + o.bounds.w + g) * s) +
                        " " +
                        a((c - o.bounds.y) * s) +
                        "] ";
                    (y =
                      "<</Type /Annot /Subtype /Popup " + d + " /Parent " + p),
                      o.open && (y += " /Open true"),
                      (y += " >>"),
                      (h.content = y),
                      this.internal.write(u.objId, "0 R", h.objId, "0 R");
                    break;
                  case "freetext":
                    var d =
                        "/Rect [" +
                        a(o.bounds.x * s) +
                        " " +
                        a((c - o.bounds.y) * s) +
                        " " +
                        a(o.bounds.x + o.bounds.w * s) +
                        " " +
                        a(c - (o.bounds.y + o.bounds.h) * s) +
                        "] ",
                      m = o.color || "#000000";
                    (y =
                      "<</Type /Annot /Subtype /FreeText " +
                      d +
                      "/Contents (" +
                      o.contents +
                      ")"),
                      (y +=
                        " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" +
                        m +
                        ")"),
                      (y += " /Border [0 0 0]"),
                      (y += " >>"),
                      this.internal.write(y);
                    break;
                  case "link":
                    if (o.options.name) {
                      var w = this.annotations._nameMap[o.options.name];
                      (o.options.pageNumber = w.page), (o.options.top = w.y);
                    } else o.options.top || (o.options.top = 0);
                    var d =
                        "/Rect [" +
                        a(o.x * s) +
                        " " +
                        a((c - o.y) * s) +
                        " " +
                        a(o.x + o.w * s) +
                        " " +
                        a(c - (o.y + o.h) * s) +
                        "] ",
                      y = "";
                    if (o.options.url)
                      y =
                        "<</Type /Annot /Subtype /Link " +
                        d +
                        "/Border [0 0 0] /A <</S /URI /URI (" +
                        o.options.url +
                        ") >>";
                    else if (o.options.pageNumber) {
                      var t = this.internal.getPageInfo(o.options.pageNumber);
                      switch (
                        ((y =
                          "<</Type /Annot /Subtype /Link " +
                          d +
                          "/Border [0 0 0] /Dest [" +
                          t.objId +
                          " 0 R"),
                        (o.options.magFactor = o.options.magFactor || "XYZ"),
                        o.options.magFactor)
                      ) {
                        case "Fit":
                          y += " /Fit]";
                          break;
                        case "FitH":
                          y += " /FitH " + o.options.top + "]";
                          break;
                        case "FitV":
                          (o.options.left = o.options.left || 0),
                            (y += " /FitV " + o.options.left + "]");
                          break;
                        case "XYZ":
                        default:
                          var v = a((c - o.options.top) * s);
                          (o.options.left = o.options.left || 0),
                            "undefined" == typeof o.options.zoom &&
                              (o.options.zoom = 0),
                            (y +=
                              " /XYZ " +
                              o.options.left +
                              " " +
                              v +
                              " " +
                              o.options.zoom +
                              "]");
                      }
                    }
                    "" != y && ((y += " >>"), this.internal.write(y));
                }
              }
              this.internal.write("]");
            }
          },
        ]),
        (t.createAnnotation = function (t) {
          switch (t.type) {
            case "link":
              this.link(t.bounds.x, t.bounds.y, t.bounds.w, t.bounds.h, t);
              break;
            case "text":
            case "freetext":
              this.annotationPlugin.annotations[
                this.internal.getCurrentPageInfo().pageNumber
              ].push(t);
          }
        }),
        (t.link = function (t, e, n, r, i) {
          this.annotationPlugin.annotations[
            this.internal.getCurrentPageInfo().pageNumber
          ].push({ x: t, y: e, w: n, h: r, options: i, type: "link" });
        }),
        (t.link = function (t, e, n, r, i) {
          this.annotationPlugin.annotations[
            this.internal.getCurrentPageInfo().pageNumber
          ].push({ x: t, y: e, w: n, h: r, options: i, type: "link" });
        }),
        (t.textWithLink = function (t, e, n, r) {
          var i = this.getTextWidth(t),
            o = this.internal.getLineHeight();
          return (
            this.text(t, e, n), (n += 0.2 * o), this.link(e, n - o, i, o, r), i
          );
        }),
        (t.getTextWidth = function (t) {
          var e = this.internal.getFontSize(),
            n = (this.getStringUnitWidth(t) * e) / this.internal.scaleFactor;
          return n;
        }),
        (t.getLineHeight = function () {
          return this.internal.getLineHeight();
        }),
        this
      );
    })(e.API),
    (function (t) {
      t.autoPrint = function () {
        var t;
        return (
          this.internal.events.subscribe("postPutResources", function () {
            (t = this.internal.newObject()),
              this.internal.write(
                "<< /S/Named /Type/Action /N/Print >>",
                "endobj"
              );
          }),
          this.internal.events.subscribe("putCatalog", function () {
            this.internal.write("/OpenAction " + t + " 0 R");
          }),
          this
        );
      };
    })(e.API),
    /**
     * jsPDF Canvas PlugIn
     * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */ (function (t) {
      return (
        t.events.push([
          "initialized",
          function () {
            this.canvas.pdf = this;
          },
        ]),
        (t.canvas = {
          getContext: function (t) {
            return (this.pdf.context2d._canvas = this), this.pdf.context2d;
          },
          style: {},
        }),
        Object.defineProperty(t.canvas, "width", {
          get: function () {
            return this._width;
          },
          set: function (t) {
            (this._width = t), (this.getContext("2d").pageWrapX = t + 1);
          },
        }),
        Object.defineProperty(t.canvas, "height", {
          get: function () {
            return this._height;
          },
          set: function (t) {
            (this._height = t), (this.getContext("2d").pageWrapY = t + 1);
          },
        }),
        this
      );
    })(e.API),
    /** ====================================================================
     * jsPDF Cell plugin
     * Copyright (c) 2013 Youssef Beddad, youssef.beddad@gmail.com
     *               2013 Eduardo Menezes de Morais, eduardo.morais@usp.br
     *               2013 Lee Driscoll, https://github.com/lsdriscoll
     *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
     *               2014 James Hall, james@parall.ax
     *               2014 Diego Casorran, https://github.com/diegocr
     *
     *
     * ====================================================================
     */
    (function (t) {
      var e,
        n,
        r,
        i,
        o = 3,
        a = 13,
        s = { x: void 0, y: void 0, w: void 0, h: void 0, ln: void 0 },
        c = 1,
        l = function (t, e, n, r, i) {
          s = { x: t, y: e, w: n, h: r, ln: i };
        },
        u = function () {
          return s;
        },
        h = { left: 0, top: 0, bottom: 0 };
      (t.setHeaderFunction = function (t) {
        i = t;
      }),
        (t.getTextDimensions = function (t) {
          (e = this.internal.getFont().fontName),
            (n = this.table_font_size || this.internal.getFontSize()),
            (r = this.internal.getFont().fontStyle);
          var i,
            o,
            a = 19.049976 / 25.4;
          (o = document.createElement("font")), (o.id = "jsPDFCell");
          try {
            o.style.fontStyle = r;
          } catch (t) {
            o.style.fontWeight = r;
          }
          (o.style.fontName = e), (o.style.fontSize = n + "pt");
          try {
            o.textContent = t;
          } catch (e) {
            o.innerText = t;
          }
          return (
            document.body.appendChild(o),
            (i = { w: (o.offsetWidth + 1) * a, h: (o.offsetHeight + 1) * a }),
            document.body.removeChild(o),
            i
          );
        }),
        (t.cellAddPage = function () {
          var t = this.margins || h;
          this.addPage(), l(t.left, t.top, void 0, void 0), (c += 1);
        }),
        (t.cellInitialize = function () {
          (s = { x: void 0, y: void 0, w: void 0, h: void 0, ln: void 0 }),
            (c = 1);
        }),
        (t.cell = function (t, e, n, r, i, s, c) {
          var f = u(),
            d = !1;
          if (void 0 !== f.ln)
            if (f.ln === s) (t = f.x + f.w), (e = f.y);
            else {
              var p = this.margins || h;
              f.y + f.h + r + a >= this.internal.pageSize.height - p.bottom &&
                (this.cellAddPage(),
                (d = !0),
                this.printHeaders &&
                  this.tableHeaderRow &&
                  this.printHeaderRow(s, !0)),
                (e = u().y + u().h),
                d && (e = a + 10);
            }
          if (void 0 !== i[0])
            if (
              (this.printingHeaderRow
                ? this.rect(t, e, n, r, "FD")
                : this.rect(t, e, n, r),
              "right" === c)
            ) {
              i instanceof Array || (i = [i]);
              for (var g = 0; g < i.length; g++) {
                var m = i[g],
                  w = this.getStringUnitWidth(m) * this.internal.getFontSize();
                this.text(
                  m,
                  t + n - w - o,
                  e + this.internal.getLineHeight() * (g + 1)
                );
              }
            } else this.text(i, t + o, e + this.internal.getLineHeight());
          return l(t, e, n, r, s), this;
        }),
        (t.arrayMax = function (t, e) {
          var n,
            r,
            i,
            o = t[0];
          for (n = 0, r = t.length; n < r; n += 1)
            (i = t[n]), e ? e(o, i) === -1 && (o = i) : i > o && (o = i);
          return o;
        }),
        (t.table = function (e, n, r, i, o) {
          if (!r) throw "No data for PDF table";
          var a,
            l,
            u,
            f,
            d,
            p,
            g,
            m,
            w,
            y,
            v = [],
            b = [],
            x = {},
            k = {},
            _ = [],
            C = [],
            A = !1,
            S = !0,
            q = 12,
            T = h;
          if (
            ((T.width = this.internal.pageSize.width),
            o &&
              (o.autoSize === !0 && (A = !0),
              o.printHeaders === !1 && (S = !1),
              o.fontSize && (q = o.fontSize),
              o.css &&
                "undefined" != typeof o.css["font-size"] &&
                (q = 16 * o.css["font-size"]),
              o.margins && (T = o.margins)),
            (this.lnMod = 0),
            (s = { x: void 0, y: void 0, w: void 0, h: void 0, ln: void 0 }),
            (c = 1),
            (this.printHeaders = S),
            (this.margins = T),
            this.setFontSize(q),
            (this.table_font_size = q),
            void 0 === i || null === i)
          )
            v = Object.keys(r[0]);
          else if (i[0] && "string" != typeof i[0]) {
            var P = 19.049976 / 25.4;
            for (l = 0, u = i.length; l < u; l += 1)
              (a = i[l]),
                v.push(a.name),
                b.push(a.prompt),
                (k[a.name] = a.width * P);
          } else v = i;
          if (A)
            for (
              y = function (t) {
                return t[a];
              },
                l = 0,
                u = v.length;
              l < u;
              l += 1
            ) {
              for (
                a = v[l],
                  x[a] = r.map(y),
                  _.push(this.getTextDimensions(b[l] || a).w),
                  p = x[a],
                  g = 0,
                  f = p.length;
                g < f;
                g += 1
              )
                (d = p[g]), _.push(this.getTextDimensions(d).w);
              (k[a] = t.arrayMax(_)), (_ = []);
            }
          if (S) {
            var I = this.calculateLineHeight(v, k, b.length ? b : v);
            for (l = 0, u = v.length; l < u; l += 1)
              (a = v[l]), C.push([e, n, k[a], I, String(b.length ? b[l] : a)]);
            this.setTableHeaderRow(C), this.printHeaderRow(1, !1);
          }
          for (l = 0, u = r.length; l < u; l += 1) {
            var I;
            for (
              m = r[l],
                I = this.calculateLineHeight(v, k, m),
                g = 0,
                w = v.length;
              g < w;
              g += 1
            )
              (a = v[g]), this.cell(e, n, k[a], I, m[a], l + 2, a.align);
          }
          return (
            (this.lastCellPos = s), (this.table_x = e), (this.table_y = n), this
          );
        }),
        (t.calculateLineHeight = function (t, e, n) {
          for (var r, i = 0, a = 0; a < t.length; a++) {
            (r = t[a]), (n[r] = this.splitTextToSize(String(n[r]), e[r] - o));
            var s = this.internal.getLineHeight() * n[r].length + o;
            s > i && (i = s);
          }
          return i;
        }),
        (t.setTableHeaderRow = function (t) {
          this.tableHeaderRow = t;
        }),
        (t.printHeaderRow = function (t, e) {
          if (!this.tableHeaderRow)
            throw "Property tableHeaderRow does not exist.";
          var n, r, o, s;
          if (((this.printingHeaderRow = !0), void 0 !== i)) {
            var u = i(this, c);
            l(u[0], u[1], u[2], u[3], -1);
          }
          this.setFontStyle("bold");
          var h = [];
          for (o = 0, s = this.tableHeaderRow.length; o < s; o += 1)
            this.setFillColor(200, 200, 200),
              (n = this.tableHeaderRow[o]),
              e &&
                ((this.margins.top = a),
                (n[1] = (this.margins && this.margins.top) || 0),
                h.push(n)),
              (r = [].concat(n)),
              this.cell.apply(this, r.concat(t));
          h.length > 0 && this.setTableHeaderRow(h),
            this.setFontStyle("normal"),
            (this.printingHeaderRow = !1);
        });
    })(e.API),
    /**
     * jsPDF Context2D PlugIn Copyright (c) 2014 Steven Spungin (TwelveTone LLC) steven@twelvetone.tv
     *
     * Licensed under the MIT License. http://opensource.org/licenses/mit-license
     */ (function (t) {
      function e() {
        (this._isStrokeTransparent = !1),
          (this._strokeOpacity = 1),
          (this.strokeStyle = "#000000"),
          (this.fillStyle = "#000000"),
          (this._isFillTransparent = !1),
          (this._fillOpacity = 1),
          (this.font = "12pt times"),
          (this.textBaseline = "alphabetic"),
          (this.textAlign = "start"),
          (this.lineWidth = 1),
          (this.lineJoin = "miter"),
          (this.lineCap = "butt"),
          (this._transform = [1, 0, 0, 1, 0, 0]),
          (this.globalCompositeOperation = "normal"),
          (this.globalAlpha = 1),
          (this._clip_path = []),
          (this.ignoreClearRect = !1),
          (this.copy = function (t) {
            (this._isStrokeTransparent = t._isStrokeTransparent),
              (this._strokeOpacity = t._strokeOpacity),
              (this.strokeStyle = t.strokeStyle),
              (this._isFillTransparent = t._isFillTransparent),
              (this._fillOpacity = t._fillOpacity),
              (this.fillStyle = t.fillStyle),
              (this.font = t.font),
              (this.lineWidth = t.lineWidth),
              (this.lineJoin = t.lineJoin),
              (this.lineCap = t.lineCap),
              (this.textBaseline = t.textBaseline),
              (this.textAlign = t.textAlign),
              (this._fontSize = t._fontSize),
              (this._transform = t._transform.slice(0)),
              (this.globalCompositeOperation = t.globalCompositeOperation),
              (this.globalAlpha = t.globalAlpha),
              (this._clip_path = t._clip_path.slice(0)),
              (this.ignoreClearRect = t.ignoreClearRect);
          });
      }
      t.events.push([
        "initialized",
        function () {
          (this.context2d.pdf = this),
            (this.context2d.internal.pdf = this),
            (this.context2d.ctx = new e()),
            (this.context2d.ctxStack = []),
            (this.context2d.path = []);
        },
      ]),
        (t.context2d = {
          pageWrapXEnabled: !1,
          pageWrapYEnabled: !1,
          pageWrapX: 9999999,
          pageWrapY: 9999999,
          ctx: new e(),
          f2: function (t) {
            return t.toFixed(2);
          },
          fillRect: function (t, e, n, r) {
            if (!this._isFillTransparent()) {
              (t = this._wrapX(t)), (e = this._wrapY(e));
              var i = this._matrix_map_rect(this.ctx._transform, {
                x: t,
                y: e,
                w: n,
                h: r,
              });
              this.pdf.rect(i.x, i.y, i.w, i.h, "f");
            }
          },
          strokeRect: function (t, e, n, r) {
            if (!this._isStrokeTransparent()) {
              (t = this._wrapX(t)), (e = this._wrapY(e));
              var i = this._matrix_map_rect(this.ctx._transform, {
                x: t,
                y: e,
                w: n,
                h: r,
              });
              this.pdf.rect(i.x, i.y, i.w, i.h, "s");
            }
          },
          clearRect: function (t, e, n, r) {
            if (!this.ctx.ignoreClearRect) {
              (t = this._wrapX(t)), (e = this._wrapY(e));
              var i = this._matrix_map_rect(this.ctx._transform, {
                x: t,
                y: e,
                w: n,
                h: r,
              });
              this.save(),
                this.setFillStyle("#ffffff"),
                this.pdf.rect(i.x, i.y, i.w, i.h, "f"),
                this.restore();
            }
          },
          save: function () {
            this.ctx._fontSize = this.pdf.internal.getFontSize();
            var t = new e();
            t.copy(this.ctx), this.ctxStack.push(this.ctx), (this.ctx = t);
          },
          restore: function () {
            (this.ctx = this.ctxStack.pop()),
              this.setFillStyle(this.ctx.fillStyle),
              this.setStrokeStyle(this.ctx.strokeStyle),
              this.setFont(this.ctx.font),
              this.pdf.setFontSize(this.ctx._fontSize),
              this.setLineCap(this.ctx.lineCap),
              this.setLineWidth(this.ctx.lineWidth),
              this.setLineJoin(this.ctx.lineJoin);
          },
          rect: function (t, e, n, r) {
            this.moveTo(t, e),
              this.lineTo(t + n, e),
              this.lineTo(t + n, e + r),
              this.lineTo(t, e + r),
              this.lineTo(t, e),
              this.closePath();
          },
          beginPath: function () {
            this.path = [];
          },
          closePath: function () {
            this.path.push({ type: "close" });
          },
          _getRgba: function (t) {
            var e = {};
            if (this.internal.rxTransparent.test(t))
              (e.r = 0), (e.g = 0), (e.b = 0), (e.a = 0);
            else {
              var n = this.internal.rxRgb.exec(t);
              null != n
                ? ((e.r = parseInt(n[1])),
                  (e.g = parseInt(n[2])),
                  (e.b = parseInt(n[3])),
                  (e.a = 1))
                : ((n = this.internal.rxRgba.exec(t)),
                  null != n
                    ? ((e.r = parseInt(n[1])),
                      (e.g = parseInt(n[2])),
                      (e.b = parseInt(n[3])),
                      (e.a = parseFloat(n[4])))
                    : ((e.a = 1),
                      "#" != t.charAt(0) &&
                        ((t = o.colorNameToHex(t)), t || (t = "#000000")),
                      4 === t.length
                        ? ((e.r = t.substring(1, 2)),
                          (e.r += r),
                          (e.g = t.substring(2, 3)),
                          (e.g += g),
                          (e.b = t.substring(3, 4)),
                          (e.b += b))
                        : ((e.r = t.substring(1, 3)),
                          (e.g = t.substring(3, 5)),
                          (e.b = t.substring(5, 7))),
                      (e.r = parseInt(e.r, 16)),
                      (e.g = parseInt(e.g, 16)),
                      (e.b = parseInt(e.b, 16))));
            }
            return (e.style = t), e;
          },
          setFillStyle: function (t) {
            var e, n, r, i;
            if (this.internal.rxTransparent.test(t))
              (e = 0), (n = 0), (r = 0), (i = 0);
            else {
              var a = this.internal.rxRgb.exec(t);
              null != a
                ? ((e = parseInt(a[1])),
                  (n = parseInt(a[2])),
                  (r = parseInt(a[3])),
                  (i = 1))
                : ((a = this.internal.rxRgba.exec(t)),
                  null != a
                    ? ((e = parseInt(a[1])),
                      (n = parseInt(a[2])),
                      (r = parseInt(a[3])),
                      (i = parseFloat(a[4])))
                    : ((i = 1),
                      "#" != t.charAt(0) &&
                        ((t = o.colorNameToHex(t)), t || (t = "#000000")),
                      4 === t.length
                        ? ((e = t.substring(1, 2)),
                          (e += e),
                          (n = t.substring(2, 3)),
                          (n += n),
                          (r = t.substring(3, 4)),
                          (r += r))
                        : ((e = t.substring(1, 3)),
                          (n = t.substring(3, 5)),
                          (r = t.substring(5, 7))),
                      (e = parseInt(e, 16)),
                      (n = parseInt(n, 16)),
                      (r = parseInt(r, 16))));
            }
            (this.ctx.fillStyle = t),
              (this.ctx._isFillTransparent = 0 == i),
              (this.ctx._fillOpacity = i),
              this.pdf.setFillColor(e, n, r, { a: i }),
              this.pdf.setTextColor(e, n, r, { a: i });
          },
          setStrokeStyle: function (t) {
            var e = this._getRgba(t);
            (this.ctx.strokeStyle = e.style),
              (this.ctx._isStrokeTransparent = 0 == e.a),
              (this.ctx._strokeOpacity = e.a),
              0 === e.a
                ? this.pdf.setDrawColor(255, 255, 255)
                : 1 === e.a
                ? this.pdf.setDrawColor(e.r, e.g, e.b)
                : this.pdf.setDrawColor(e.r, e.g, e.b);
          },
          fillText: function (t, e, n, r) {
            if (!this._isFillTransparent()) {
              (e = this._wrapX(e)), (n = this._wrapY(n));
              var i = this._matrix_map_point(this.ctx._transform, [e, n]);
              (e = i[0]), (n = i[1]);
              var o = this._matrix_rotation(this.ctx._transform),
                a = 57.2958 * o;
              if (this.ctx._clip_path.length > 0) {
                var s;
                (s = window.outIntercept
                  ? "group" === window.outIntercept.type
                    ? window.outIntercept.stream
                    : window.outIntercept
                  : this.internal.getCurrentPage()),
                  s.push("q");
                var c = this.path;
                (this.path = this.ctx._clip_path),
                  (this.ctx._clip_path = []),
                  this._fill(null, !0),
                  (this.ctx._clip_path = this.path),
                  (this.path = c);
              }
              var l;
              if (
                ((l =
                  this.pdf.hotfix && this.pdf.hotfix.scale_text
                    ? this._getTransform()[0]
                    : 1),
                l < 0.01)
              )
                this.pdf.text(t, e, this._getBaseline(n), null, a);
              else {
                var u = this.pdf.internal.getFontSize();
                this.pdf.setFontSize(u * l),
                  this.pdf.text(t, e, this._getBaseline(n), null, a),
                  this.pdf.setFontSize(u);
              }
              this.ctx._clip_path.length > 0 && s.push("Q");
            }
          },
          strokeText: function (t, e, n, r) {
            if (!this._isStrokeTransparent()) {
              (e = this._wrapX(e)), (n = this._wrapY(n));
              var i = this._matrix_map_point(this.ctx._transform, [e, n]);
              (e = i[0]), (n = i[1]);
              var o = this._matrix_rotation(this.ctx._transform),
                a = 57.2958 * o;
              if (this.ctx._clip_path.length > 0) {
                var s;
                (s = window.outIntercept
                  ? "group" === window.outIntercept.type
                    ? window.outIntercept.stream
                    : window.outIntercept
                  : this.internal.getCurrentPage()),
                  s.push("q");
                var c = this.path;
                (this.path = this.ctx._clip_path),
                  (this.ctx._clip_path = []),
                  this._fill(null, !0),
                  (this.ctx._clip_path = this.path),
                  (this.path = c);
              }
              var l;
              if (
                ((l =
                  this.pdf.hotfix && this.pdf.hotfix.scale_text
                    ? this._getTransform()[0]
                    : 1),
                1 === l)
              )
                this.pdf.text(t, e, this._getBaseline(n), { stroke: !0 }, a);
              else {
                var u = this.pdf.internal.getFontSize();
                this.pdf.setFontSize(u * l),
                  this.pdf.text(t, e, this._getBaseline(n), { stroke: !0 }, a),
                  this.pdf.setFontSize(u);
              }
              this.ctx._clip_path.length > 0 && s.push("Q");
            }
          },
          setFont: function (t) {
            this.ctx.font = t;
            var e = /\s*(\w+)\s+(\w+)\s+(\w+)\s+([\d\.]+)(px|pt|em)\s+(.*)?/;
            if (((h = e.exec(t)), null != h)) {
              var n = h[1],
                r = (h[2], h[3]),
                i = h[4],
                o = h[5],
                a = h[6];
              (i =
                "px" === o
                  ? Math.floor(parseFloat(i))
                  : "em" === o
                  ? Math.floor(parseFloat(i) * this.pdf.getFontSize())
                  : Math.floor(parseFloat(i))),
                this.pdf.setFontSize(i),
                "bold" === r || "700" === r
                  ? this.pdf.setFontStyle("bold")
                  : "italic" === n
                  ? this.pdf.setFontStyle("italic")
                  : this.pdf.setFontStyle("normal");
              var s,
                c = a,
                l = c.toLowerCase().split(/\s*,\s*/);
              s =
                l.indexOf("arial") != -1
                  ? "Arial"
                  : l.indexOf("verdana") != -1
                  ? "Verdana"
                  : l.indexOf("helvetica") != -1
                  ? "Helvetica"
                  : l.indexOf("sans-serif") != -1
                  ? "sans-serif"
                  : l.indexOf("fixed") != -1
                  ? "Fixed"
                  : l.indexOf("monospace") != -1
                  ? "Monospace"
                  : l.indexOf("terminal") != -1
                  ? "Terminal"
                  : l.indexOf("courier") != -1
                  ? "Courier"
                  : l.indexOf("times") != -1
                  ? "Times"
                  : l.indexOf("cursive") != -1
                  ? "Cursive"
                  : l.indexOf("fantasy") != -1
                  ? "Fantasy"
                  : (l.indexOf("serif") != -1, "Serif");
              var u;
              (u = "bold" === r ? "bold" : "normal"), this.pdf.setFont(s, u);
            } else {
              var e = /(\d+)(pt|px|em)\s+(\w+)\s*(\w+)?/,
                h = e.exec(t);
              if (null != h) {
                var f = h[1],
                  c = (h[2], h[3]),
                  u = h[4];
                u || (u = "normal"),
                  (f =
                    "em" === o
                      ? Math.floor(parseFloat(i) * this.pdf.getFontSize())
                      : Math.floor(parseFloat(f))),
                  this.pdf.setFontSize(f),
                  this.pdf.setFont(c, u);
              }
            }
          },
          setTextBaseline: function (t) {
            this.ctx.textBaseline = t;
          },
          getTextBaseline: function () {
            return this.ctx.textBaseline;
          },
          setTextAlign: function (t) {
            this.ctx.textAlign = t;
          },
          getTextAlign: function () {
            return this.ctx.textAlign;
          },
          setLineWidth: function (t) {
            (this.ctx.lineWidth = t), this.pdf.setLineWidth(t);
          },
          setLineCap: function (t) {
            (this.ctx.lineCap = t), this.pdf.setLineCap(t);
          },
          setLineJoin: function (t) {
            (this.ctx.lineJoin = t), this.pdf.setLineJoin(t);
          },
          moveTo: function (t, e) {
            (t = this._wrapX(t)), (e = this._wrapY(e));
            var n = this._matrix_map_point(this.ctx._transform, [t, e]);
            (t = n[0]), (e = n[1]);
            var r = { type: "mt", x: t, y: e };
            this.path.push(r);
          },
          _wrapX: function (t) {
            return this.pageWrapXEnabled ? t % this.pageWrapX : t;
          },
          _wrapY: function (t) {
            return this.pageWrapYEnabled
              ? (this._gotoPage(this._page(t)),
                (t - this.lastBreak) % this.pageWrapY)
              : t;
          },
          transform: function (t, e, n, r, i, o) {
            this.ctx._transform = [t, e, n, r, i, o];
          },
          setTransform: function (t, e, n, r, i, o) {
            this.ctx._transform = [t, e, n, r, i, o];
          },
          _getTransform: function () {
            return this.ctx._transform;
          },
          lastBreak: 0,
          pageBreaks: [],
          _page: function (t) {
            if (this.pageWrapYEnabled) {
              this.lastBreak = 0;
              for (var e = 0, n = 0, r = 0; r < this.pageBreaks.length; r++)
                if (t >= this.pageBreaks[r]) {
                  e++, 0 === this.lastBreak && n++;
                  var i = this.pageBreaks[r] - this.lastBreak;
                  this.lastBreak = this.pageBreaks[r];
                  var o = Math.floor(i / this.pageWrapY);
                  n += o;
                }
              if (0 === this.lastBreak) {
                var o = Math.floor(t / this.pageWrapY) + 1;
                n += o;
              }
              return n + e;
            }
            return this.pdf.internal.getCurrentPageInfo().pageNumber;
          },
          _gotoPage: function (t) {},
          lineTo: function (t, e) {
            (t = this._wrapX(t)), (e = this._wrapY(e));
            var n = this._matrix_map_point(this.ctx._transform, [t, e]);
            (t = n[0]), (e = n[1]);
            var r = { type: "lt", x: t, y: e };
            this.path.push(r);
          },
          bezierCurveTo: function (t, e, n, r, i, o) {
            (t = this._wrapX(t)),
              (e = this._wrapY(e)),
              (n = this._wrapX(n)),
              (r = this._wrapY(r)),
              (i = this._wrapX(i)),
              (o = this._wrapY(o));
            var a;
            (a = this._matrix_map_point(this.ctx._transform, [i, o])),
              (i = a[0]),
              (o = a[1]),
              (a = this._matrix_map_point(this.ctx._transform, [t, e])),
              (t = a[0]),
              (e = a[1]),
              (a = this._matrix_map_point(this.ctx._transform, [n, r])),
              (n = a[0]),
              (r = a[1]);
            var s = { type: "bct", x1: t, y1: e, x2: n, y2: r, x: i, y: o };
            this.path.push(s);
          },
          quadraticCurveTo: function (t, e, n, r) {
            (t = this._wrapX(t)),
              (e = this._wrapY(e)),
              (n = this._wrapX(n)),
              (r = this._wrapY(r));
            var i;
            (i = this._matrix_map_point(this.ctx._transform, [n, r])),
              (n = i[0]),
              (r = i[1]),
              (i = this._matrix_map_point(this.ctx._transform, [t, e])),
              (t = i[0]),
              (e = i[1]);
            var o = { type: "qct", x1: t, y1: e, x: n, y: r };
            this.path.push(o);
          },
          arc: function (t, e, n, r, i, o) {
            if (
              ((t = this._wrapX(t)),
              (e = this._wrapY(e)),
              !this._matrix_is_identity(this.ctx._transform))
            ) {
              var a = this._matrix_map_point(this.ctx._transform, [t, e]);
              (t = a[0]), (e = a[1]);
              var s = this._matrix_map_point(this.ctx._transform, [0, 0]),
                c = this._matrix_map_point(this.ctx._transform, [0, n]);
              n = Math.sqrt(
                Math.pow(c[0] - s[0], 2) + Math.pow(c[1] - s[1], 2)
              );
            }
            var l = {
              type: "arc",
              x: t,
              y: e,
              radius: n,
              startAngle: r,
              endAngle: i,
              anticlockwise: o,
            };
            this.path.push(l);
          },
          drawImage: function (t, e, n, r, i, o, a, s, c) {
            void 0 !== o && ((e = o), (n = a), (r = s), (i = c)),
              (e = this._wrapX(e)),
              (n = this._wrapY(n));
            var l,
              u = this._matrix_map_rect(this.ctx._transform, {
                x: e,
                y: n,
                w: r,
                h: i,
              }),
              h =
                (this._matrix_map_rect(this.ctx._transform, {
                  x: o,
                  y: a,
                  w: s,
                  h: c,
                }),
                /data:image\/(\w+).*/i),
              f = h.exec(t);
            (l = null != f ? f[1] : "png"),
              this.pdf.addImage(t, l, u.x, u.y, u.w, u.h);
          },
          _matrix_multiply: function (t, e) {
            var n = e[0],
              r = e[1],
              i = e[2],
              o = e[3],
              a = e[4],
              s = e[5],
              c = n * t[0] + r * t[2],
              l = i * t[0] + o * t[2],
              u = a * t[0] + s * t[2] + t[4];
            return (
              (r = n * t[1] + r * t[3]),
              (o = i * t[1] + o * t[3]),
              (s = a * t[1] + s * t[3] + t[5]),
              (n = c),
              (i = l),
              (a = u),
              [n, r, i, o, a, s]
            );
          },
          _matrix_rotation: function (t) {
            return Math.atan2(t[2], t[0]);
          },
          _matrix_decompose: function (t) {
            var e = t[0],
              n = t[1],
              r = t[2],
              i = t[3],
              o = Math.sqrt(e * e + n * n);
            (e /= o), (n /= o);
            var a = e * r + n * i;
            (r -= e * a), (i -= n * a);
            var s = Math.sqrt(r * r + i * i);
            return (
              (r /= s),
              (i /= s),
              (a /= s),
              e * i < n * r && ((e = -e), (n = -n), (a = -a), (o = -o)),
              {
                scale: [o, 0, 0, s, 0, 0],
                translate: [1, 0, 0, 1, t[4], t[5]],
                rotate: [e, n, -n, e, 0, 0],
                skew: [1, 0, a, 1, 0, 0],
              }
            );
          },
          _matrix_map_point: function (t, e) {
            var n = t[0],
              r = t[1],
              i = t[2],
              o = t[3],
              a = t[4],
              s = t[5],
              c = e[0],
              l = e[1],
              u = c * n + l * i + a,
              h = c * r + l * o + s;
            return [u, h];
          },
          _matrix_map_point_obj: function (t, e) {
            var n = this._matrix_map_point(t, [e.x, e.y]);
            return { x: n[0], y: n[1] };
          },
          _matrix_map_rect: function (t, e) {
            var n = this._matrix_map_point(t, [e.x, e.y]),
              r = this._matrix_map_point(t, [e.x + e.w, e.y + e.h]);
            return { x: n[0], y: n[1], w: r[0] - n[0], h: r[1] - n[1] };
          },
          _matrix_is_identity: function (t) {
            return (
              1 == t[0] &&
              0 == t[1] &&
              0 == t[2] &&
              1 == t[3] &&
              0 == t[4] &&
              0 == t[5]
            );
          },
          rotate: function (t) {
            var e = [Math.cos(t), Math.sin(t), -Math.sin(t), Math.cos(t), 0, 0];
            this.ctx._transform = this._matrix_multiply(this.ctx._transform, e);
          },
          scale: function (t, e) {
            var n = [t, 0, 0, e, 0, 0];
            this.ctx._transform = this._matrix_multiply(this.ctx._transform, n);
          },
          translate: function (t, e) {
            var n = [1, 0, 0, 1, t, e];
            this.ctx._transform = this._matrix_multiply(this.ctx._transform, n);
          },
          stroke: function () {
            if (this.ctx._clip_path.length > 0) {
              var t;
              (t = window.outIntercept
                ? "group" === window.outIntercept.type
                  ? window.outIntercept.stream
                  : window.outIntercept
                : this.internal.getCurrentPage()),
                t.push("q");
              var e = this.path;
              (this.path = this.ctx._clip_path),
                (this.ctx._clip_path = []),
                this._stroke(!0),
                (this.ctx._clip_path = this.path),
                (this.path = e),
                this._stroke(!1),
                t.push("Q");
            } else this._stroke(!1);
          },
          _stroke: function (t) {
            if (t || !this._isStrokeTransparent()) {
              for (
                var e = [], n = !1, r = this.path, i = 0;
                i < r.length;
                i++
              ) {
                var o = r[i];
                switch (o.type) {
                  case "mt":
                    e.push({ start: o, deltas: [], abs: [] });
                    break;
                  case "lt":
                    var a = [o.x - r[i - 1].x, o.y - r[i - 1].y];
                    e[e.length - 1].deltas.push(a), e[e.length - 1].abs.push(o);
                    break;
                  case "bct":
                    var a = [
                      o.x1 - r[i - 1].x,
                      o.y1 - r[i - 1].y,
                      o.x2 - r[i - 1].x,
                      o.y2 - r[i - 1].y,
                      o.x - r[i - 1].x,
                      o.y - r[i - 1].y,
                    ];
                    e[e.length - 1].deltas.push(a);
                    break;
                  case "qct":
                    var s = r[i - 1].x + (2 / 3) * (o.x1 - r[i - 1].x),
                      c = r[i - 1].y + (2 / 3) * (o.y1 - r[i - 1].y),
                      l = o.x + (2 / 3) * (o.x1 - o.x),
                      u = o.y + (2 / 3) * (o.y1 - o.y),
                      h = o.x,
                      f = o.y,
                      a = [
                        s - r[i - 1].x,
                        c - r[i - 1].y,
                        l - r[i - 1].x,
                        u - r[i - 1].y,
                        h - r[i - 1].x,
                        f - r[i - 1].y,
                      ];
                    e[e.length - 1].deltas.push(a);
                    break;
                  case "arc":
                    0 == e.length &&
                      e.push({ start: { x: 0, y: 0 }, deltas: [], abs: [] }),
                      (e[e.length - 1].arc = !0),
                      e[e.length - 1].abs.push(o);
                    break;
                  case "close":
                    n = !0;
                }
              }
              for (var i = 0; i < e.length; i++) {
                var d;
                if (((d = i == e.length - 1 ? "s" : null), e[i].arc))
                  for (var p = e[i].abs, g = 0; g < p.length; g++) {
                    var m = p[g],
                      w = (360 * m.startAngle) / (2 * Math.PI),
                      y = (360 * m.endAngle) / (2 * Math.PI),
                      v = m.x,
                      b = m.y;
                    this.internal.arc2(
                      this,
                      v,
                      b,
                      m.radius,
                      w,
                      y,
                      m.anticlockwise,
                      d,
                      t
                    );
                  }
                else {
                  var v = e[i].start.x,
                    b = e[i].start.y;
                  t
                    ? (this.pdf.lines(e[i].deltas, v, b, null, null),
                      this.pdf.clip_fixed())
                    : this.pdf.lines(e[i].deltas, v, b, null, d);
                }
              }
            }
          },
          _isFillTransparent: function () {
            return this.ctx._isFillTransparent || 0 == this.globalAlpha;
          },
          _isStrokeTransparent: function () {
            return this.ctx._isStrokeTransparent || 0 == this.globalAlpha;
          },
          fill: function (t) {
            if (this.ctx._clip_path.length > 0) {
              var e;
              (e = window.outIntercept
                ? "group" === window.outIntercept.type
                  ? window.outIntercept.stream
                  : window.outIntercept
                : this.internal.getCurrentPage()),
                e.push("q");
              var n = this.path;
              (this.path = this.ctx._clip_path),
                (this.ctx._clip_path = []),
                this._fill(t, !0),
                (this.ctx._clip_path = this.path),
                (this.path = n),
                this._fill(t, !1),
                e.push("Q");
            } else this._fill(t, !1);
          },
          _fill: function (t, e) {
            if (!this._isFillTransparent()) {
              var r,
                i = "function" == typeof this.pdf.internal.newObject2;
              r = window.outIntercept
                ? "group" === window.outIntercept.type
                  ? window.outIntercept.stream
                  : window.outIntercept
                : this.internal.getCurrentPage();
              var o = [],
                a = window.outIntercept;
              if (i)
                switch (this.ctx.globalCompositeOperation) {
                  case "normal":
                  case "source-over":
                    break;
                  case "destination-in":
                  case "destination-out":
                    var s = this.pdf.internal.newStreamObject(),
                      c = this.pdf.internal.newObject2();
                    c.push("<</Type /ExtGState"),
                      c.push("/SMask <</S /Alpha /G " + s.objId + " 0 R>>"),
                      c.push(">>");
                    var l = "MASK" + c.objId;
                    this.pdf.internal.addGraphicsState(l, c.objId);
                    var u = "/" + l + " gs";
                    r.splice(0, 0, "q"),
                      r.splice(1, 0, u),
                      r.push("Q"),
                      (window.outIntercept = s);
                    break;
                  default:
                    var h =
                      "/" +
                      this.pdf.internal.blendModeMap[
                        this.ctx.globalCompositeOperation.toUpperCase()
                      ];
                    h && this.pdf.internal.out(h + " gs");
                }
              var f = this.ctx.globalAlpha;
              if (
                (this.ctx._fillOpacity < 1 && (f = this.ctx._fillOpacity), i)
              ) {
                var d = this.pdf.internal.newObject2();
                d.push("<</Type /ExtGState"),
                  d.push("/CA " + f),
                  d.push("/ca " + f),
                  d.push(">>");
                var l = "GS_O_" + d.objId;
                this.pdf.internal.addGraphicsState(l, d.objId),
                  this.pdf.internal.out("/" + l + " gs");
              }
              for (var p = this.path, g = 0; g < p.length; g++) {
                var m = p[g];
                switch (m.type) {
                  case "mt":
                    o.push({ start: m, deltas: [], abs: [] });
                    break;
                  case "lt":
                    var w = [m.x - p[g - 1].x, m.y - p[g - 1].y];
                    o[o.length - 1].deltas.push(w), o[o.length - 1].abs.push(m);
                    break;
                  case "bct":
                    var w = [
                      m.x1 - p[g - 1].x,
                      m.y1 - p[g - 1].y,
                      m.x2 - p[g - 1].x,
                      m.y2 - p[g - 1].y,
                      m.x - p[g - 1].x,
                      m.y - p[g - 1].y,
                    ];
                    o[o.length - 1].deltas.push(w);
                    break;
                  case "qct":
                    var y = p[g - 1].x + (2 / 3) * (m.x1 - p[g - 1].x),
                      v = p[g - 1].y + (2 / 3) * (m.y1 - p[g - 1].y),
                      b = m.x + (2 / 3) * (m.x1 - m.x),
                      x = m.y + (2 / 3) * (m.y1 - m.y),
                      k = m.x,
                      _ = m.y,
                      w = [
                        y - p[g - 1].x,
                        v - p[g - 1].y,
                        b - p[g - 1].x,
                        x - p[g - 1].y,
                        k - p[g - 1].x,
                        _ - p[g - 1].y,
                      ];
                    o[o.length - 1].deltas.push(w);
                    break;
                  case "arc":
                    0 === o.length && o.push({ deltas: [], abs: [] }),
                      (o[o.length - 1].arc = !0),
                      o[o.length - 1].abs.push(m);
                    break;
                  case "close":
                    o.push({ close: !0 });
                }
              }
              for (var g = 0; g < o.length; g++) {
                var C;
                if (
                  (g == o.length - 1
                    ? ((C = "f"), "evenodd" === t && (C += "*"))
                    : (C = null),
                  o[g].close)
                )
                  this.pdf.internal.out("h"), this.pdf.internal.out("f");
                else if (o[g].arc) {
                  o[g].start &&
                    this.internal.move2(this, o[g].start.x, o[g].start.y);
                  for (var A = o[g].abs, S = 0; S < A.length; S++) {
                    var q = A[S];
                    if ("undefined" != typeof q.startAngle) {
                      var T = (360 * q.startAngle) / (2 * Math.PI),
                        P = (360 * q.endAngle) / (2 * Math.PI),
                        I = q.x,
                        E = q.y;
                      if (
                        (0 === S && this.internal.move2(this, I, E),
                        this.internal.arc2(
                          this,
                          I,
                          E,
                          q.radius,
                          T,
                          P,
                          q.anticlockwise,
                          null,
                          e
                        ),
                        S === A.length - 1 && o[g].start)
                      ) {
                        var I = o[g].start.x,
                          E = o[g].start.y;
                        this.internal.line2(n, I, E);
                      }
                    } else this.internal.line2(n, q.x, q.y);
                  }
                } else {
                  var I = o[g].start.x,
                    E = o[g].start.y;
                  e
                    ? (this.pdf.lines(o[g].deltas, I, E, null, null),
                      this.pdf.clip_fixed())
                    : this.pdf.lines(o[g].deltas, I, E, null, C);
                }
              }
              window.outIntercept = a;
            }
          },
          pushMask: function () {
            var t = "function" == typeof this.pdf.internal.newObject2;
            if (!t) return void console.log("jsPDF v2 not enabled");
            var e = this.pdf.internal.newStreamObject(),
              n = this.pdf.internal.newObject2();
            n.push("<</Type /ExtGState"),
              n.push("/SMask <</S /Alpha /G " + e.objId + " 0 R>>"),
              n.push(">>");
            var r = "MASK" + n.objId;
            this.pdf.internal.addGraphicsState(r, n.objId);
            var i = "/" + r + " gs";
            this.pdf.internal.out(i);
          },
          clip: function () {
            if (this.ctx._clip_path.length > 0)
              for (var t = 0; t < this.path.length; t++)
                this.ctx._clip_path.push(this.path[t]);
            else this.ctx._clip_path = this.path;
            this.path = [];
          },
          measureText: function (t) {
            var e = this.pdf;
            return {
              getWidth: function () {
                var n = e.internal.getFontSize(),
                  r = (e.getStringUnitWidth(t) * n) / e.internal.scaleFactor;
                return (r *= 1.3333);
              },
              get width() {
                return this.getWidth(t);
              },
            };
          },
          _getBaseline: function (t) {
            var e = parseInt(this.pdf.internal.getFontSize()),
              n = 0.25 * e;
            switch (this.ctx.textBaseline) {
              case "bottom":
                return t - n;
              case "top":
                return t + e;
              case "hanging":
                return t + e - n;
              case "middle":
                return t + e / 2 - n;
              case "ideographic":
                return t;
              case "alphabetic":
              default:
                return t;
            }
          },
        });
      var n = t.context2d;
      return (
        Object.defineProperty(n, "fillStyle", {
          set: function (t) {
            this.setFillStyle(t);
          },
          get: function () {
            return this.ctx.fillStyle;
          },
        }),
        Object.defineProperty(n, "strokeStyle", {
          set: function (t) {
            this.setStrokeStyle(t);
          },
          get: function () {
            return this.ctx.strokeStyle;
          },
        }),
        Object.defineProperty(n, "lineWidth", {
          set: function (t) {
            this.setLineWidth(t);
          },
          get: function () {
            return this.ctx.lineWidth;
          },
        }),
        Object.defineProperty(n, "lineCap", {
          set: function (t) {
            this.setLineCap(t);
          },
          get: function () {
            return this.ctx.lineCap;
          },
        }),
        Object.defineProperty(n, "lineJoin", {
          set: function (t) {
            this.setLineJoin(t);
          },
          get: function () {
            return this.ctx.lineJoin;
          },
        }),
        Object.defineProperty(n, "miterLimit", {
          set: function (t) {
            this.ctx.miterLimit = t;
          },
          get: function () {
            return this.ctx.miterLimit;
          },
        }),
        Object.defineProperty(n, "textBaseline", {
          set: function (t) {
            this.setTextBaseline(t);
          },
          get: function () {
            return this.getTextBaseline();
          },
        }),
        Object.defineProperty(n, "textAlign", {
          set: function (t) {
            this.setTextAlign(t);
          },
          get: function () {
            return this.getTextAlign();
          },
        }),
        Object.defineProperty(n, "font", {
          set: function (t) {
            this.setFont(t);
          },
          get: function () {
            return this.ctx.font;
          },
        }),
        Object.defineProperty(n, "globalCompositeOperation", {
          set: function (t) {
            this.ctx.globalCompositeOperation = t;
          },
          get: function () {
            return this.ctx.globalCompositeOperation;
          },
        }),
        Object.defineProperty(n, "globalAlpha", {
          set: function (t) {
            this.ctx.globalAlpha = t;
          },
          get: function () {
            return this.ctx.globalAlpha;
          },
        }),
        Object.defineProperty(n, "ignoreClearRect", {
          set: function (t) {
            this.ctx.ignoreClearRect = t;
          },
          get: function () {
            return this.ctx.ignoreClearRect;
          },
        }),
        (n.internal = {}),
        (n.internal.rxRgb = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/),
        (n.internal.rxRgba =
          /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d\.]+)\s*\)/),
        (n.internal.rxTransparent =
          /transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/),
        (n.internal.arc = function (t, e, n, r, i, o, a, s) {
          for (
            var c = !0,
              l = this.pdf.internal.scaleFactor,
              u = this.pdf.internal.pageSize.height,
              h = this.pdf.internal.f2,
              f = i * (Math.PI / 180),
              d = o * (Math.PI / 180),
              p = this.createArc(r, f, d, a),
              g = 0;
            g < p.length;
            g++
          ) {
            var m = p[g];
            c && 0 === g
              ? this.pdf.internal.out(
                  [
                    h((m.x1 + e) * l),
                    h((u - (m.y1 + n)) * l),
                    "m",
                    h((m.x2 + e) * l),
                    h((u - (m.y2 + n)) * l),
                    h((m.x3 + e) * l),
                    h((u - (m.y3 + n)) * l),
                    h((m.x4 + e) * l),
                    h((u - (m.y4 + n)) * l),
                    "c",
                  ].join(" ")
                )
              : this.pdf.internal.out(
                  [
                    h((m.x2 + e) * l),
                    h((u - (m.y2 + n)) * l),
                    h((m.x3 + e) * l),
                    h((u - (m.y3 + n)) * l),
                    h((m.x4 + e) * l),
                    h((u - (m.y4 + n)) * l),
                    "c",
                  ].join(" ")
                ),
              (t._lastPoint = { x: e, y: n });
          }
          null !== s && this.pdf.internal.out(this.pdf.internal.getStyle(s));
        }),
        (n.internal.arc2 = function (t, e, n, r, i, o, a, s, c) {
          var l = e,
            u = n;
          c
            ? (this.arc(t, l, u, r, i, o, a, null), this.pdf.clip_fixed())
            : this.arc(t, l, u, r, i, o, a, s);
        }),
        (n.internal.move2 = function (t, e, n) {
          var r = this.pdf.internal.scaleFactor,
            i = this.pdf.internal.pageSize.height,
            o = this.pdf.internal.f2;
          this.pdf.internal.out([o(e * r), o((i - n) * r), "m"].join(" ")),
            (t._lastPoint = { x: e, y: n });
        }),
        (n.internal.line2 = function (t, e, n) {
          var r = this.pdf.internal.scaleFactor,
            i = this.pdf.internal.pageSize.height,
            o = this.pdf.internal.f2,
            a = { x: e, y: n };
          this.pdf.internal.out([o(a.x * r), o((i - a.y) * r), "l"].join(" ")),
            (t._lastPoint = a);
        }),
        (n.internal.createArc = function (t, e, n, r) {
          var i = 1e-5,
            o = 2 * Math.PI,
            a = Math.PI / 2,
            s = e;
          for ((s < o || s > o) && (s %= o), s < 0 && (s = o + s); e > n; )
            e -= o;
          var c = Math.abs(n - e);
          c < o && r && (c = o - c);
          for (var l = [], u = r ? -1 : 1, h = s; c > i; ) {
            var f = u * Math.min(c, a),
              d = h + f;
            l.push(this.createSmallArc(t, h, d)),
              (c -= Math.abs(d - h)),
              (h = d);
          }
          return l;
        }),
        (n.internal.getCurrentPage = function () {
          return this.pdf.internal.pages[
            this.pdf.internal.getCurrentPageInfo().pageNumber
          ];
        }),
        (n.internal.createSmallArc = function (t, e, n) {
          var r = (n - e) / 2,
            i = t * Math.cos(r),
            o = t * Math.sin(r),
            a = i,
            s = -o,
            c = a * a + s * s,
            l = c + a * i + s * o,
            u = ((4 / 3) * (Math.sqrt(2 * c * l) - l)) / (a * o - s * i),
            h = a - u * s,
            f = s + u * a,
            d = h,
            p = -f,
            g = r + e,
            m = Math.cos(g),
            w = Math.sin(g);
          return {
            x1: t * Math.cos(e),
            y1: t * Math.sin(e),
            x2: h * m - f * w,
            y2: h * w + f * m,
            x3: d * m - p * w,
            y3: d * w + p * m,
            x4: t * Math.cos(n),
            y4: t * Math.sin(n),
          };
        }),
        this
      );
    })(e.API),
    /** @preserve
     * jsPDF fromHTML plugin. BETA stage. API subject to change. Needs browser
     * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
     *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
     *               2014 Diego Casorran, https://github.com/diegocr
     *               2014 Daniel Husar, https://github.com/danielhusar
     *               2014 Wolfgang Gassler, https://github.com/woolfg
     *               2014 Steven Spungin, https://github.com/flamenco
     *
     *
     * ====================================================================
     */ (function (e) {
      var n, r, i, a, s, c, l, u, h, f, d, p, g, m, w, y, v, b, x, k;
      (n = (function () {
        function t() {}
        return function (e) {
          return (t.prototype = e), new t();
        };
      })()),
        (f = function (t) {
          var e, n, r, i, o, a, s;
          for (n = 0, r = t.length, e = void 0, i = !1, a = !1; !i && n !== r; )
            (e = t[n] = t[n].trimLeft()), e && (i = !0), n++;
          for (n = r - 1; r && !a && n !== -1; )
            (e = t[n] = t[n].trimRight()), e && (a = !0), n--;
          for (o = /\s+$/g, s = !0, n = 0; n !== r; )
            "\u2028" != t[n] &&
              ((e = t[n].replace(/\s+/g, " ")),
              s && (e = e.trimLeft()),
              e && (s = o.test(e)),
              (t[n] = e)),
              n++;
          return t;
        }),
        (d = function (t, e, n, r) {
          return (
            (this.pdf = t),
            (this.x = e),
            (this.y = n),
            (this.settings = r),
            (this.watchFunctions = []),
            this.init(),
            this
          );
        }),
        (p = function (t) {
          var e, n, r;
          for (e = void 0, r = t.split(","), n = r.shift(); !e && n; )
            (e = i[n.trim().toLowerCase()]), (n = r.shift());
          return e;
        }),
        (g = function (t) {
          (t = "auto" === t ? "0px" : t),
            t.indexOf("em") > -1 &&
              !isNaN(Number(t.replace("em", ""))) &&
              (t = 18.719 * Number(t.replace("em", "")) + "px"),
            t.indexOf("pt") > -1 &&
              !isNaN(Number(t.replace("pt", ""))) &&
              (t = 1.333 * Number(t.replace("pt", "")) + "px");
          var e, n, r;
          return (
            (n = void 0),
            (e = 16),
            (r = m[t])
              ? r
              : ((r = {
                  "xx-small": 9,
                  "x-small": 11,
                  small: 13,
                  medium: 16,
                  large: 19,
                  "x-large": 23,
                  "xx-large": 28,
                  auto: 0,
                }[{ css_line_height_string: t }]),
                r !== n
                  ? (m[t] = r / e)
                  : (r = parseFloat(t))
                  ? (m[t] = r / e)
                  : ((r = t.match(/([\d\.]+)(px)/)),
                    3 === r.length
                      ? (m[t] = parseFloat(r[1]) / e)
                      : (m[t] = 1)))
          );
        }),
        (h = function (t) {
          var e, n, r;
          return (
            (r = (function (t) {
              var e;
              return (
                (e = (function (t) {
                  return document.defaultView &&
                    document.defaultView.getComputedStyle
                    ? document.defaultView.getComputedStyle(t, null)
                    : t.currentStyle
                    ? t.currentStyle
                    : t.style;
                })(t)),
                function (t) {
                  return (
                    (t = t.replace(/-\D/g, function (t) {
                      return t.charAt(1).toUpperCase();
                    })),
                    e[t]
                  );
                }
              );
            })(t)),
            (e = {}),
            (n = void 0),
            (e["font-family"] = p(r("font-family")) || "times"),
            (e["font-style"] = a[r("font-style")] || "normal"),
            (e["text-align"] = s[r("text-align")] || "left"),
            (n = c[r("font-weight")] || "normal"),
            "bold" === n &&
              ("normal" === e["font-style"]
                ? (e["font-style"] = n)
                : (e["font-style"] = n + e["font-style"])),
            (e["font-size"] = g(r("font-size")) || 1),
            (e["line-height"] = g(r("line-height")) || 1),
            (e.display = "inline" === r("display") ? "inline" : "block"),
            (n = "block" === e.display),
            (e["margin-top"] = (n && g(r("margin-top"))) || 0),
            (e["margin-bottom"] = (n && g(r("margin-bottom"))) || 0),
            (e["padding-top"] = (n && g(r("padding-top"))) || 0),
            (e["padding-bottom"] = (n && g(r("padding-bottom"))) || 0),
            (e["margin-left"] = (n && g(r("margin-left"))) || 0),
            (e["margin-right"] = (n && g(r("margin-right"))) || 0),
            (e["padding-left"] = (n && g(r("padding-left"))) || 0),
            (e["padding-right"] = (n && g(r("padding-right"))) || 0),
            (e["page-break-before"] = r("page-break-before") || "auto"),
            (e.float = l[r("cssFloat")] || "none"),
            (e.clear = u[r("clear")] || "none"),
            (e.color = r("color")),
            e
          );
        }),
        (w = function (t, e, n) {
          var r, i, o, a, s;
          if (
            ((o = !1),
            (i = void 0),
            (a = void 0),
            (s = void 0),
            (r = n["#" + t.id]))
          )
            if ("function" == typeof r) o = r(t, e);
            else
              for (i = 0, a = r.length; !o && i !== a; ) (o = r[i](t, e)), i++;
          if (((r = n[t.nodeName]), !o && r))
            if ("function" == typeof r) o = r(t, e);
            else
              for (i = 0, a = r.length; !o && i !== a; ) (o = r[i](t, e)), i++;
          return o;
        }),
        (k = function (t, e) {
          var n, r, i, o, a, s, c, l, u, h;
          for (
            n = [],
              r = [],
              i = 0,
              h = t.rows[0].cells.length,
              l = t.clientWidth;
            i < h;

          )
            (u = t.rows[0].cells[i]),
              (r[i] = {
                name: u.textContent.toLowerCase().replace(/\s+/g, ""),
                prompt: u.textContent.replace(/\r?\n/g, ""),
                width: (u.clientWidth / l) * e.pdf.internal.pageSize.width,
              }),
              i++;
          for (i = 1; i < t.rows.length; ) {
            for (s = t.rows[i], a = {}, o = 0; o < s.cells.length; )
              (a[r[o].name] = s.cells[o].textContent.replace(/\r?\n/g, "")),
                o++;
            n.push(a), i++;
          }
          return (c = { rows: n, headers: r });
        });
      var _ = {
          SCRIPT: 1,
          STYLE: 1,
          NOSCRIPT: 1,
          OBJECT: 1,
          EMBED: 1,
          SELECT: 1,
        },
        C = 1;
      (r = function (e, i, o) {
        var a, s, c, l, u, f, d, p, g;
        for (
          s = e.childNodes,
            a = void 0,
            c = h(e),
            u = "block" === c.display,
            u && (i.setBlockBoundary(), i.setBlockStyle(c)),
            d = 19.049976 / 25.4,
            l = 0,
            f = s.length;
          l < f;

        ) {
          if (
            ((a = s[l]),
            "object" === ("undefined" == typeof a ? "undefined" : t(a)))
          ) {
            if (
              (i.executeWatchFunctions(a),
              1 === a.nodeType && "HEADER" === a.nodeName)
            ) {
              var m = a,
                v = i.pdf.margins_doc.top;
              i.pdf.internal.events.subscribe(
                "addPage",
                function (t) {
                  (i.y = v),
                    r(m, i, o),
                    (i.pdf.margins_doc.top = i.y + 10),
                    (i.y += 10);
                },
                !1
              );
            }
            if (8 === a.nodeType && "#comment" === a.nodeName)
              ~a.textContent.indexOf("ADD_PAGE") &&
                (i.pdf.addPage(), (i.y = i.pdf.margins_doc.top));
            else if (1 !== a.nodeType || _[a.nodeName])
              if (3 === a.nodeType) {
                var b = a.nodeValue;
                if (a.nodeValue && "LI" === a.parentNode.nodeName)
                  if ("OL" === a.parentNode.parentNode.nodeName)
                    b = C++ + ". " + b;
                  else {
                    var x = c["font-size"],
                      A = (3 - 0.75 * x) * i.pdf.internal.scaleFactor,
                      S = 0.75 * x * i.pdf.internal.scaleFactor,
                      q = (1.74 * x) / i.pdf.internal.scaleFactor;
                    g = function (t, e) {
                      this.pdf.circle(t + A, e + S, q, "FD");
                    };
                  }
                16 & a.ownerDocument.body.compareDocumentPosition(a) &&
                  i.addText(b, c);
              } else "string" == typeof a && i.addText(a, c);
            else {
              var T;
              if ("IMG" === a.nodeName) {
                var P = a.getAttribute("src");
                T = y[i.pdf.sHashCode(P) || P];
              }
              if (T) {
                i.pdf.internal.pageSize.height - i.pdf.margins_doc.bottom <
                  i.y + a.height &&
                  i.y > i.pdf.margins_doc.top &&
                  (i.pdf.addPage(),
                  (i.y = i.pdf.margins_doc.top),
                  i.executeWatchFunctions(a));
                var I = h(a),
                  E = i.x,
                  O = 12 / i.pdf.internal.scaleFactor,
                  F = (I["margin-left"] + I["padding-left"]) * O,
                  R = (I["margin-right"] + I["padding-right"]) * O,
                  B = (I["margin-top"] + I["padding-top"]) * O,
                  D = (I["margin-bottom"] + I["padding-bottom"]) * O;
                (E +=
                  void 0 !== I.float && "right" === I.float
                    ? i.settings.width - a.width - R
                    : F),
                  i.pdf.addImage(T, E, i.y + B, a.width, a.height),
                  (T = void 0),
                  "right" === I.float || "left" === I.float
                    ? (i.watchFunctions.push(
                        function (t, e, n, r) {
                          return i.y >= e
                            ? ((i.x += t), (i.settings.width += n), !0)
                            : !!(
                                r &&
                                1 === r.nodeType &&
                                !_[r.nodeName] &&
                                i.x + r.width >
                                  i.pdf.margins_doc.left +
                                    i.pdf.margins_doc.width
                              ) &&
                                ((i.x += t),
                                (i.y = e),
                                (i.settings.width += n),
                                !0);
                        }.bind(
                          this,
                          "left" === I.float ? -a.width - F - R : 0,
                          i.y + a.height + B + D,
                          a.width
                        )
                      ),
                      i.watchFunctions.push(
                        function (t, e, n) {
                          return (
                            !(
                              i.y < t && e === i.pdf.internal.getNumberOfPages()
                            ) ||
                            (1 === n.nodeType &&
                              "both" === h(n).clear &&
                              ((i.y = t), !0))
                          );
                        }.bind(
                          this,
                          i.y + a.height,
                          i.pdf.internal.getNumberOfPages()
                        )
                      ),
                      (i.settings.width -= a.width + F + R),
                      "left" === I.float && (i.x += a.width + F + R))
                    : (i.y += a.height + B + D);
              } else if ("TABLE" === a.nodeName)
                (p = k(a, i)),
                  (i.y += 10),
                  i.pdf.table(i.x, i.y, p.rows, p.headers, {
                    autoSize: !1,
                    printHeaders: o.printHeaders,
                    margins: i.pdf.margins_doc,
                    css: h(a),
                  }),
                  (i.y = i.pdf.lastCellPos.y + i.pdf.lastCellPos.h + 20);
              else if ("OL" === a.nodeName || "UL" === a.nodeName)
                (C = 1), w(a, i, o) || r(a, i, o), (i.y += 10);
              else if ("LI" === a.nodeName) {
                var j = i.x;
                (i.x += 20 / i.pdf.internal.scaleFactor),
                  (i.y += 3),
                  w(a, i, o) || r(a, i, o),
                  (i.x = j);
              } else
                "BR" === a.nodeName
                  ? ((i.y += c["font-size"] * i.pdf.internal.scaleFactor),
                    i.addText("\u2028", n(c)))
                  : w(a, i, o) || r(a, i, o);
            }
          }
          l++;
        }
        if (((o.outY = i.y), u)) return i.setBlockBoundary(g);
      }),
        (y = {}),
        (v = function (t, e, n, r) {
          function i() {
            e.pdf.internal.events.publish("imagesLoaded"), r(a);
          }
          function o(t, n, r) {
            if (t) {
              var o = new Image();
              (a = ++l),
                (o.crossOrigin = ""),
                (o.onerror = o.onload =
                  function () {
                    if (
                      o.complete &&
                      (0 === o.src.indexOf("data:image/") &&
                        ((o.width = n || o.width || 0),
                        (o.height = r || o.height || 0)),
                      o.width + o.height)
                    ) {
                      var a = e.pdf.sHashCode(t) || t;
                      y[a] = y[a] || o;
                    }
                    --l || i();
                  }),
                (o.src = t);
            }
          }
          for (
            var a, s = t.getElementsByTagName("img"), c = s.length, l = 0;
            c--;

          )
            o(s[c].getAttribute("src"), s[c].width, s[c].height);
          return l || i();
        }),
        (b = function (t, e, n) {
          var i = t.getElementsByTagName("footer");
          if (i.length > 0) {
            i = i[0];
            var o = e.pdf.internal.write,
              a = e.y;
            (e.pdf.internal.write = function () {}), r(i, e, n);
            var s = Math.ceil(e.y - a) + 5;
            (e.y = a),
              (e.pdf.internal.write = o),
              (e.pdf.margins_doc.bottom += s);
            for (
              var c = function (t) {
                  var o = void 0 !== t ? t.pageNumber : 1,
                    a = e.y;
                  (e.y =
                    e.pdf.internal.pageSize.height - e.pdf.margins_doc.bottom),
                    (e.pdf.margins_doc.bottom -= s);
                  for (
                    var c = i.getElementsByTagName("span"), l = 0;
                    l < c.length;
                    ++l
                  )
                    (" " + c[l].className + " ")
                      .replace(/[\n\t]/g, " ")
                      .indexOf(" pageCounter ") > -1 && (c[l].innerHTML = o),
                      (" " + c[l].className + " ")
                        .replace(/[\n\t]/g, " ")
                        .indexOf(" totalPages ") > -1 &&
                        (c[l].innerHTML = "###jsPDFVarTotalPages###");
                  r(i, e, n), (e.pdf.margins_doc.bottom += s), (e.y = a);
                },
                l = i.getElementsByTagName("span"),
                u = 0;
              u < l.length;
              ++u
            )
              (" " + l[u].className + " ")
                .replace(/[\n\t]/g, " ")
                .indexOf(" totalPages ") > -1 &&
                e.pdf.internal.events.subscribe(
                  "htmlRenderingFinished",
                  e.pdf.putTotalPages.bind(e.pdf, "###jsPDFVarTotalPages###"),
                  !0
                );
            e.pdf.internal.events.subscribe("addPage", c, !1),
              c(),
              (_.FOOTER = 1);
          }
        }),
        (x = function (t, e, n, i, o, a) {
          if (!e) return !1;
          "string" == typeof e || e.parentNode || (e = "" + e.innerHTML),
            "string" == typeof e &&
              (e = (function (t) {
                var e, n, r, i;
                return (
                  (r =
                    "jsPDFhtmlText" +
                    Date.now().toString() +
                    (1e3 * Math.random()).toFixed(0)),
                  (i =
                    "position: absolute !important;clip: rect(1px 1px 1px 1px); /* IE6, IE7 */clip: rect(1px, 1px, 1px, 1px);padding:0 !important;border:0 !important;height: 1px !important;width: 1px !important; top:auto;left:-100px;overflow: hidden;"),
                  (n = document.createElement("div")),
                  (n.style.cssText = i),
                  (n.innerHTML =
                    '<iframe style="height:1px;width:1px" name="' + r + '" />'),
                  document.body.appendChild(n),
                  (e = window.frames[r]),
                  e.document.open(),
                  e.document.writeln(t),
                  e.document.close(),
                  e.document.body
                );
              })(e.replace(/<\/?script[^>]*?>/gi, "")));
          var s,
            c = new d(t, n, i, o);
          return (
            v.call(this, e, c, o.elementHandlers, function (t) {
              b(e, c, o.elementHandlers),
                r(e, c, o.elementHandlers),
                c.pdf.internal.events.publish("htmlRenderingFinished"),
                (s = c.dispose()),
                "function" == typeof a
                  ? a(s)
                  : t &&
                    console.error(
                      "jsPDF Warning: rendering issues? provide a callback to fromHTML!"
                    );
            }),
            s || { x: c.x, y: c.y }
          );
        }),
        (d.prototype.init = function () {
          return (
            (this.paragraph = { text: [], style: [] }),
            this.pdf.internal.write("q")
          );
        }),
        (d.prototype.dispose = function () {
          return (
            this.pdf.internal.write("Q"), { x: this.x, y: this.y, ready: !0 }
          );
        }),
        (d.prototype.executeWatchFunctions = function (t) {
          var e = !1,
            n = [];
          if (this.watchFunctions.length > 0) {
            for (var r = 0; r < this.watchFunctions.length; ++r)
              this.watchFunctions[r](t) === !0
                ? (e = !0)
                : n.push(this.watchFunctions[r]);
            this.watchFunctions = n;
          }
          return e;
        }),
        (d.prototype.splitFragmentsIntoLines = function (t, e) {
          var r, i, o, a, s, c, l, u, h, f, d, p, g, m, w;
          for (
            i = 12,
              d = this.pdf.internal.scaleFactor,
              s = {},
              o = void 0,
              f = void 0,
              a = void 0,
              c = void 0,
              w = void 0,
              h = void 0,
              u = void 0,
              l = void 0,
              p = [],
              g = [p],
              r = 0,
              m = this.settings.width;
            t.length;

          )
            if (((c = t.shift()), (w = e.shift()), c))
              if (
                ((o = w["font-family"]),
                (f = w["font-style"]),
                (a = s[o + f]),
                a ||
                  ((a = this.pdf.internal.getFont(o, f).metadata.Unicode),
                  (s[o + f] = a)),
                (h = {
                  widths: a.widths,
                  kerning: a.kerning,
                  fontSize: w["font-size"] * i,
                  textIndent: r,
                }),
                (u = (this.pdf.getStringUnitWidth(c, h) * h.fontSize) / d),
                "\u2028" == c)
              )
                (p = []), g.push(p);
              else if (r + u > m) {
                for (
                  l = this.pdf.splitTextToSize(c, m, h), p.push([l.shift(), w]);
                  l.length;

                )
                  (p = [[l.shift(), w]]), g.push(p);
                r = (this.pdf.getStringUnitWidth(p[0][0], h) * h.fontSize) / d;
              } else p.push([c, w]), (r += u);
          if (
            void 0 !== w["text-align"] &&
            ("center" === w["text-align"] ||
              "right" === w["text-align"] ||
              "justify" === w["text-align"])
          )
            for (var y = 0; y < g.length; ++y) {
              var v =
                (this.pdf.getStringUnitWidth(g[y][0][0], h) * h.fontSize) / d;
              y > 0 && (g[y][0][1] = n(g[y][0][1]));
              var b = m - v;
              if ("right" === w["text-align"]) g[y][0][1]["margin-left"] = b;
              else if ("center" === w["text-align"])
                g[y][0][1]["margin-left"] = b / 2;
              else if ("justify" === w["text-align"]) {
                var x = g[y][0][0].split(" ").length - 1;
                (g[y][0][1]["word-spacing"] = b / x),
                  y === g.length - 1 && (g[y][0][1]["word-spacing"] = 0);
              }
            }
          return g;
        }),
        (d.prototype.RenderTextFragment = function (t, e) {
          var n, r, i;
          (i = 0),
            (n = 12),
            this.pdf.internal.pageSize.height - this.pdf.margins_doc.bottom <
              this.y + this.pdf.internal.getFontSize() &&
              (this.pdf.internal.write("ET", "Q"),
              this.pdf.addPage(),
              (this.y = this.pdf.margins_doc.top),
              this.pdf.internal.write(
                "q",
                "BT 0 g",
                this.pdf.internal.getCoordinateString(this.x),
                this.pdf.internal.getVerticalCoordinateString(this.y),
                e.color,
                "Td"
              ),
              (i = Math.max(i, e["line-height"], e["font-size"])),
              this.pdf.internal.write(0, (-1 * n * i).toFixed(2), "Td")),
            (r = this.pdf.internal.getFont(e["font-family"], e["font-style"]));
          var o = this.getPdfColor(e.color);
          o !== this.lastTextColor &&
            (this.pdf.internal.write(o), (this.lastTextColor = o)),
            void 0 !== e["word-spacing"] &&
              e["word-spacing"] > 0 &&
              this.pdf.internal.write(e["word-spacing"].toFixed(2), "Tw"),
            this.pdf.internal.write(
              "/" + r.id,
              (n * e["font-size"]).toFixed(2),
              "Tf",
              "(" + this.pdf.internal.pdfEscape(t) + ") Tj"
            ),
            void 0 !== e["word-spacing"] && this.pdf.internal.write(0, "Tw");
        }),
        (d.prototype.getPdfColor = function (t) {
          var e,
            n,
            r,
            i,
            a = /rgb\s*\(\s*(\d+),\s*(\d+),\s*(\d+\s*)\)/,
            s = a.exec(t);
          if (
            (null != s
              ? ((n = parseInt(s[1])),
                (r = parseInt(s[2])),
                (i = parseInt(s[3])))
              : ("#" != t.charAt(0) &&
                  ((t = o.colorNameToHex(t)), t || (t = "#000000")),
                (n = t.substring(1, 3)),
                (n = parseInt(n, 16)),
                (r = t.substring(3, 5)),
                (r = parseInt(r, 16)),
                (i = t.substring(5, 7)),
                (i = parseInt(i, 16))),
            "string" == typeof n && /^#[0-9A-Fa-f]{6}$/.test(n))
          ) {
            var c = parseInt(n.substr(1), 16);
            (n = (c >> 16) & 255), (r = (c >> 8) & 255), (i = 255 & c);
          }
          var l = this.f3;
          return (e =
            (0 === n && 0 === r && 0 === i) || "undefined" == typeof r
              ? l(n / 255) + " g"
              : [l(n / 255), l(r / 255), l(i / 255), "rg"].join(" "));
        }),
        (d.prototype.f3 = function (t) {
          return t.toFixed(3);
        }),
        (d.prototype.renderParagraph = function (t) {
          var e, n, r, i, o, a, s, c, l, u, h, d, p, g, m;
          if (
            ((i = f(this.paragraph.text)),
            (g = this.paragraph.style),
            (e = this.paragraph.blockstyle),
            (p = this.paragraph.priorblockstyle || {}),
            (this.paragraph = {
              text: [],
              style: [],
              blockstyle: {},
              priorblockstyle: e,
            }),
            i.join("").trim())
          ) {
            (c = this.splitFragmentsIntoLines(i, g)),
              (s = void 0),
              (l = void 0),
              (n = 12),
              (r = n / this.pdf.internal.scaleFactor),
              (this.priorMarginBottom = this.priorMarginBottom || 0),
              (d =
                (Math.max((e["margin-top"] || 0) - this.priorMarginBottom, 0) +
                  (e["padding-top"] || 0)) *
                r),
              (h =
                ((e["margin-bottom"] || 0) + (e["padding-bottom"] || 0)) * r),
              (this.priorMarginBottom = e["margin-bottom"] || 0),
              "always" === e["page-break-before"] &&
                (this.pdf.addPage(),
                (this.y = 0),
                (d = ((e["margin-top"] || 0) + (e["padding-top"] || 0)) * r)),
              (u = this.pdf.internal.write),
              (o = void 0),
              (a = void 0),
              (this.y += d),
              u(
                "q",
                "BT 0 g",
                this.pdf.internal.getCoordinateString(this.x),
                this.pdf.internal.getVerticalCoordinateString(this.y),
                "Td"
              );
            for (var w = 0; c.length; ) {
              for (s = c.shift(), l = 0, o = 0, a = s.length; o !== a; )
                s[o][0].trim() &&
                  ((l = Math.max(
                    l,
                    s[o][1]["line-height"],
                    s[o][1]["font-size"]
                  )),
                  (m = 7 * s[o][1]["font-size"])),
                  o++;
              var y = 0,
                v = 0;
              void 0 !== s[0][1]["margin-left"] &&
                s[0][1]["margin-left"] > 0 &&
                ((v = this.pdf.internal.getCoordinateString(
                  s[0][1]["margin-left"]
                )),
                (y = v - w),
                (w = v));
              var b = Math.max(e["margin-left"] || 0, 0) * r;
              for (
                u(y + b, (-1 * n * l).toFixed(2), "Td"), o = 0, a = s.length;
                o !== a;

              )
                s[o][0] && this.RenderTextFragment(s[o][0], s[o][1]), o++;
              if (
                ((this.y += l * r),
                this.executeWatchFunctions(s[0][1]) && c.length > 0)
              ) {
                var x = [],
                  k = [];
                c.forEach(function (t) {
                  for (var e = 0, n = t.length; e !== n; )
                    t[e][0] && (x.push(t[e][0] + " "), k.push(t[e][1])), ++e;
                }),
                  (c = this.splitFragmentsIntoLines(f(x), k)),
                  u("ET", "Q"),
                  u(
                    "q",
                    "BT 0 g",
                    this.pdf.internal.getCoordinateString(this.x),
                    this.pdf.internal.getVerticalCoordinateString(this.y),
                    "Td"
                  );
              }
            }
            return (
              t &&
                "function" == typeof t &&
                t.call(this, this.x - 9, this.y - m / 2),
              u("ET", "Q"),
              (this.y += h)
            );
          }
        }),
        (d.prototype.setBlockBoundary = function (t) {
          return this.renderParagraph(t);
        }),
        (d.prototype.setBlockStyle = function (t) {
          return (this.paragraph.blockstyle = t);
        }),
        (d.prototype.addText = function (t, e) {
          return this.paragraph.text.push(t), this.paragraph.style.push(e);
        }),
        (i = {
          helvetica: "helvetica",
          "sans-serif": "helvetica",
          "times new roman": "times",
          serif: "times",
          times: "times",
          monospace: "courier",
          courier: "courier",
        }),
        (c = {
          100: "normal",
          200: "normal",
          300: "normal",
          400: "normal",
          500: "bold",
          600: "bold",
          700: "bold",
          800: "bold",
          900: "bold",
          normal: "normal",
          bold: "bold",
          bolder: "bold",
          lighter: "normal",
        }),
        (a = { normal: "normal", italic: "italic", oblique: "italic" }),
        (s = {
          left: "left",
          right: "right",
          center: "center",
          justify: "justify",
        }),
        (l = { none: "none", right: "right", left: "left" }),
        (u = { none: "none", both: "both" }),
        (m = { normal: 1 }),
        (e.fromHTML = function (t, e, n, r, i, o) {
          return (
            (this.margins_doc = o || { top: 0, bottom: 0 }),
            r || (r = {}),
            r.elementHandlers || (r.elementHandlers = {}),
            x(this, t, isNaN(e) ? 4 : e, isNaN(n) ? 4 : n, r, i)
          );
        });
    })(e.API),
    /** ====================================================================
     * jsPDF JavaScript plugin
     * Copyright (c) 2013 Youssef Beddad, youssef.beddad@gmail.com
     *
     *
     * ====================================================================
     */ (function (t) {
      var e, n, r;
      t.addJS = function (t) {
        return (
          (r = t),
          this.internal.events.subscribe("postPutResources", function (t) {
            (e = this.internal.newObject()),
              this.internal.write(
                "<< /Names [(EmbeddedJS) " + (e + 1) + " 0 R] >>",
                "endobj"
              ),
              (n = this.internal.newObject()),
              this.internal.write(
                "<< /S /JavaScript /JS (",
                r,
                ") >>",
                "endobj"
              );
          }),
          this.internal.events.subscribe("putCatalog", function () {
            void 0 !== e &&
              void 0 !== n &&
              this.internal.write("/Names <</JavaScript " + e + " 0 R>>");
          }),
          this
        );
      };
    })(e.API),
    /**
     * jsPDF Outline PlugIn
     * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */ (function (t) {
      return (
        t.events.push([
          "postPutResources",
          function () {
            var t = this,
              e = /^(\d+) 0 obj$/;
            if (this.outline.root.children.length > 0)
              for (
                var n = t.outline.render().split(/\r\n/), r = 0;
                r < n.length;
                r++
              ) {
                var i = n[r],
                  o = e.exec(i);
                if (null != o) {
                  var a = o[1];
                  t.internal.newObjectDeferredBegin(a);
                }
                t.internal.write(i);
              }
            if (this.outline.createNamedDestinations) {
              for (
                var s = this.internal.pages.length, c = [], r = 0;
                r < s;
                r++
              ) {
                var l = t.internal.newObject();
                c.push(l);
                var u = t.internal.getPageInfo(r + 1);
                t.internal.write(
                  "<< /D[" + u.objId + " 0 R /XYZ null null null]>> endobj"
                );
              }
              var h = t.internal.newObject();
              t.internal.write("<< /Names [ ");
              for (var r = 0; r < c.length; r++)
                t.internal.write("(page_" + (r + 1) + ")" + c[r] + " 0 R");
              t.internal.write(" ] >>", "endobj");
              t.internal.newObject();
              t.internal.write("<< /Dests " + h + " 0 R"),
                t.internal.write(">>", "endobj");
            }
          },
        ]),
        t.events.push([
          "putCatalog",
          function () {
            var t = this;
            t.outline.root.children.length > 0 &&
              (t.internal.write(
                "/Outlines",
                this.outline.makeRef(this.outline.root)
              ),
              this.outline.createNamedDestinations &&
                t.internal.write("/Names " + namesOid + " 0 R"));
          },
        ]),
        t.events.push([
          "initialized",
          function () {
            var t = this;
            t.outline = { createNamedDestinations: !1, root: { children: [] } };
            (t.outline.add = function (t, e, n) {
              var r = { title: e, options: n, children: [] };
              return null == t && (t = this.root), t.children.push(r), r;
            }),
              (t.outline.render = function () {
                return (
                  (this.ctx = {}),
                  (this.ctx.val = ""),
                  (this.ctx.pdf = t),
                  this.genIds_r(this.root),
                  this.renderRoot(this.root),
                  this.renderItems(this.root),
                  this.ctx.val
                );
              }),
              (t.outline.genIds_r = function (e) {
                e.id = t.internal.newObjectDeferred();
                for (var n = 0; n < e.children.length; n++)
                  this.genIds_r(e.children[n]);
              }),
              (t.outline.renderRoot = function (t) {
                this.objStart(t),
                  this.line("/Type /Outlines"),
                  t.children.length > 0 &&
                    (this.line("/First " + this.makeRef(t.children[0])),
                    this.line(
                      "/Last " + this.makeRef(t.children[t.children.length - 1])
                    )),
                  this.line("/Count " + this.count_r({ count: 0 }, t)),
                  this.objEnd();
              }),
              (t.outline.renderItems = function (e) {
                for (var n = 0; n < e.children.length; n++) {
                  var r = e.children[n];
                  this.objStart(r),
                    this.line("/Title " + this.makeString(r.title)),
                    this.line("/Parent " + this.makeRef(e)),
                    n > 0 &&
                      this.line("/Prev " + this.makeRef(e.children[n - 1])),
                    n < e.children.length - 1 &&
                      this.line("/Next " + this.makeRef(e.children[n + 1])),
                    r.children.length > 0 &&
                      (this.line("/First " + this.makeRef(r.children[0])),
                      this.line(
                        "/Last " +
                          this.makeRef(r.children[r.children.length - 1])
                      ));
                  var i = (this.count = this.count_r({ count: 0 }, r));
                  if (
                    (i > 0 && this.line("/Count " + i),
                    r.options && r.options.pageNumber)
                  ) {
                    var o = t.internal.getPageInfo(r.options.pageNumber);
                    this.line(
                      "/Dest [" +
                        o.objId +
                        " 0 R /XYZ 0 " +
                        this.ctx.pdf.internal.pageSize.height +
                        " 0]"
                    );
                  }
                  this.objEnd();
                }
                for (var n = 0; n < e.children.length; n++) {
                  var r = e.children[n];
                  this.renderItems(r);
                }
              }),
              (t.outline.line = function (t) {
                this.ctx.val += t + "\r\n";
              }),
              (t.outline.makeRef = function (t) {
                return t.id + " 0 R";
              }),
              (t.outline.makeString = function (e) {
                return "(" + t.internal.pdfEscape(e) + ")";
              }),
              (t.outline.objStart = function (t) {
                this.ctx.val += "\r\n" + t.id + " 0 obj\r\n<<\r\n";
              }),
              (t.outline.objEnd = function (t) {
                this.ctx.val += ">> \r\nendobj\r\n";
              }),
              (t.outline.count_r = function (t, e) {
                for (var n = 0; n < e.children.length; n++)
                  t.count++, this.count_r(t, e.children[n]);
                return t.count;
              });
          },
        ]),
        this
      );
    })(e.API),
    /**@preserve
     *  ====================================================================
     * jsPDF PNG PlugIn
     * Copyright (c) 2014 James Robb, https://github.com/jamesbrobb
     *
     *
     * ====================================================================
     */ (function (t) {
      var e = function () {
          return "function" != typeof PNG || "function" != typeof c;
        },
        n = function (e) {
          return e !== t.image_compression.NONE && r();
        },
        r = function () {
          var t = "function" == typeof a;
          if (!t) throw new Error("requires deflate.js for compression");
          return t;
        },
        i = function (e, n, r, i) {
          var c = 5,
            u = f;
          switch (i) {
            case t.image_compression.FAST:
              (c = 3), (u = h);
              break;
            case t.image_compression.MEDIUM:
              (c = 6), (u = d);
              break;
            case t.image_compression.SLOW:
              (c = 9), (u = p);
          }
          e = l(e, n, r, u);
          var g = new Uint8Array(o(c)),
            m = s(e),
            w = new a(c),
            y = w.append(e),
            v = w.flush(),
            b = g.length + y.length + v.length,
            x = new Uint8Array(b + 4);
          return (
            x.set(g),
            x.set(y, g.length),
            x.set(v, g.length + y.length),
            (x[b++] = (m >>> 24) & 255),
            (x[b++] = (m >>> 16) & 255),
            (x[b++] = (m >>> 8) & 255),
            (x[b++] = 255 & m),
            t.arrayBufferToBinaryString(x)
          );
        },
        o = function (t, e) {
          var n = 8,
            r = Math.LOG2E * Math.log(32768) - 8,
            i = (r << 4) | n,
            o = i << 8,
            a = Math.min(3, ((e - 1) & 255) >> 1);
          return (
            (o |= a << 6), (o |= 0), (o += 31 - (o % 31)), [i, 255 & o & 255]
          );
        },
        s = function (t, e) {
          for (
            var n,
              r = 1,
              i = 65535 & r,
              o = (r >>> 16) & 65535,
              a = t.length,
              s = 0;
            a > 0;

          ) {
            (n = a > e ? e : a), (a -= n);
            do (i += t[s++]), (o += i);
            while (--n);
            (i %= 65521), (o %= 65521);
          }
          return ((o << 16) | i) >>> 0;
        },
        l = function (t, e, n, r) {
          for (
            var i,
              o,
              a,
              s = t.length / e,
              c = new Uint8Array(t.length + s),
              l = m(),
              u = 0;
            u < s;
            u++
          ) {
            if (((a = u * e), (i = t.subarray(a, a + e)), r))
              c.set(r(i, n, o), a + u);
            else {
              for (var h = 0, f = l.length, d = []; h < f; h++)
                d[h] = l[h](i, n, o);
              var p = w(d.concat());
              c.set(d[p], a + u);
            }
            o = i;
          }
          return c;
        },
        u = function (t, e, n) {
          var r = Array.apply([], t);
          return r.unshift(0), r;
        },
        h = function (t, e, n) {
          var r,
            i = [],
            o = 0,
            a = t.length;
          for (i[0] = 1; o < a; o++)
            (r = t[o - e] || 0), (i[o + 1] = (t[o] - r + 256) & 255);
          return i;
        },
        f = function (t, e, n) {
          var r,
            i = [],
            o = 0,
            a = t.length;
          for (i[0] = 2; o < a; o++)
            (r = (n && n[o]) || 0), (i[o + 1] = (t[o] - r + 256) & 255);
          return i;
        },
        d = function (t, e, n) {
          var r,
            i,
            o = [],
            a = 0,
            s = t.length;
          for (o[0] = 3; a < s; a++)
            (r = t[a - e] || 0),
              (i = (n && n[a]) || 0),
              (o[a + 1] = (t[a] + 256 - ((r + i) >>> 1)) & 255);
          return o;
        },
        p = function (t, e, n) {
          var r,
            i,
            o,
            a,
            s = [],
            c = 0,
            l = t.length;
          for (s[0] = 4; c < l; c++)
            (r = t[c - e] || 0),
              (i = (n && n[c]) || 0),
              (o = (n && n[c - e]) || 0),
              (a = g(r, i, o)),
              (s[c + 1] = (t[c] - a + 256) & 255);
          return s;
        },
        g = function (t, e, n) {
          var r = t + e - n,
            i = Math.abs(r - t),
            o = Math.abs(r - e),
            a = Math.abs(r - n);
          return i <= o && i <= a ? t : o <= a ? e : n;
        },
        m = function () {
          return [u, h, f, d, p];
        },
        w = function (t) {
          for (var e, n, r, i = 0, o = t.length; i < o; )
            (e = y(t[i].slice(1))), (e < n || !n) && ((n = e), (r = i)), i++;
          return r;
        },
        y = function (t) {
          for (var e = 0, n = t.length, r = 0; e < n; ) r += Math.abs(t[e++]);
          return r;
        },
        v = function (e) {
          var n;
          switch (e) {
            case t.image_compression.FAST:
              n = 11;
              break;
            case t.image_compression.MEDIUM:
              n = 13;
              break;
            case t.image_compression.SLOW:
              n = 14;
              break;
            default:
              n = 12;
          }
          return n;
        };
      t.processPNG = function (t, r, o, a, s) {
        var c,
          l,
          u,
          h,
          f,
          d,
          p = this.color_spaces.DEVICE_RGB,
          g = this.decode.FLATE_DECODE,
          m = 8;
        if (
          (this.isArrayBuffer(t) && (t = new Uint8Array(t)),
          this.isArrayBufferView(t))
        ) {
          if (e()) throw new Error("PNG support requires png.js and zlib.js");
          if (
            ((c = new PNG(t)),
            (t = c.imgData),
            (m = c.bits),
            (p = c.colorSpace),
            (h = c.colors),
            [4, 6].indexOf(c.colorType) !== -1)
          ) {
            if (8 === c.bits)
              for (
                var w,
                  y,
                  b =
                    32 == c.pixelBitlength
                      ? new Uint32Array(c.decodePixels().buffer)
                      : 16 == c.pixelBitlength
                      ? new Uint16Array(c.decodePixels().buffer)
                      : new Uint8Array(c.decodePixels().buffer),
                  x = b.length,
                  k = new Uint8Array(x * c.colors),
                  _ = new Uint8Array(x),
                  C = c.pixelBitlength - c.bits,
                  A = 0,
                  S = 0;
                A < x;
                A++
              ) {
                for (w = b[A], y = 0; y < C; )
                  (k[S++] = (w >>> y) & 255), (y += c.bits);
                _[A] = (w >>> y) & 255;
              }
            if (16 === c.bits) {
              for (
                var w,
                  b = new Uint32Array(c.decodePixels().buffer),
                  x = b.length,
                  k = new Uint8Array(x * (32 / c.pixelBitlength) * c.colors),
                  _ = new Uint8Array(x * (32 / c.pixelBitlength)),
                  q = c.colors > 1,
                  A = 0,
                  S = 0,
                  T = 0;
                A < x;

              )
                (w = b[A++]),
                  (k[S++] = (w >>> 0) & 255),
                  q &&
                    ((k[S++] = (w >>> 16) & 255),
                    (w = b[A++]),
                    (k[S++] = (w >>> 0) & 255)),
                  (_[T++] = (w >>> 16) & 255);
              m = 8;
            }
            n(a)
              ? ((t = i(k, c.width * c.colors, c.colors, a)),
                (d = i(_, c.width, 1, a)))
              : ((t = k), (d = _), (g = null));
          }
          if (
            3 === c.colorType &&
            ((p = this.color_spaces.INDEXED),
            (f = c.palette),
            c.transparency.indexed)
          ) {
            for (
              var P = c.transparency.indexed, I = 0, A = 0, x = P.length;
              A < x;
              ++A
            )
              I += P[A];
            if (((I /= 255), I === x - 1 && P.indexOf(0) !== -1))
              u = [P.indexOf(0)];
            else if (I !== x) {
              for (
                var b = c.decodePixels(),
                  _ = new Uint8Array(b.length),
                  A = 0,
                  x = b.length;
                A < x;
                A++
              )
                _[A] = P[b[A]];
              d = i(_, c.width, 1);
            }
          }
          var E = v(a);
          return (
            (l =
              g === this.decode.FLATE_DECODE
                ? "/Predictor " +
                  E +
                  " /Colors " +
                  h +
                  " /BitsPerComponent " +
                  m +
                  " /Columns " +
                  c.width
                : "/Colors " +
                  h +
                  " /BitsPerComponent " +
                  m +
                  " /Columns " +
                  c.width),
            (this.isArrayBuffer(t) || this.isArrayBufferView(t)) &&
              (t = this.arrayBufferToBinaryString(t)),
            ((d && this.isArrayBuffer(d)) || this.isArrayBufferView(d)) &&
              (d = this.arrayBufferToBinaryString(d)),
            this.createImageInfo(
              t,
              c.width,
              c.height,
              p,
              m,
              g,
              r,
              o,
              l,
              u,
              f,
              d,
              E
            )
          );
        }
        throw new Error("Unsupported PNG image data, try using JPEG instead.");
      };
    })(e.API),
    (function (t) {
      t.autoPrint = function () {
        var t;
        return (
          this.internal.events.subscribe("postPutResources", function () {
            (t = this.internal.newObject()),
              this.internal.write(
                "<< /S/Named /Type/Action /N/Print >>",
                "endobj"
              );
          }),
          this.internal.events.subscribe("putCatalog", function () {
            this.internal.write("/OpenAction " + t + " 0 R");
          }),
          this
        );
      };
    })(e.API),
    /** @preserve
     * jsPDF split_text_to_size plugin - MIT license.
     * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
     *               2014 Diego Casorran, https://github.com/diegocr
     */ (function (t) {
      var e = (t.getCharWidthsArray = function (t, e) {
          e || (e = {});
          var n,
            r,
            i,
            o = e.widths
              ? e.widths
              : this.internal.getFont().metadata.Unicode.widths,
            a = o.fof ? o.fof : 1,
            s = e.kerning
              ? e.kerning
              : this.internal.getFont().metadata.Unicode.kerning,
            c = s.fof ? s.fof : 1,
            l = 0,
            u = o[0] || a,
            h = [];
          for (n = 0, r = t.length; n < r; n++)
            (i = t.charCodeAt(n)),
              h.push((o[i] || u) / a + ((s[i] && s[i][l]) || 0) / c),
              (l = i);
          return h;
        }),
        n = function (t) {
          for (var e = t.length, n = 0; e; ) e--, (n += t[e]);
          return n;
        },
        r = (t.getStringUnitWidth = function (t, r) {
          return n(e.call(this, t, r));
        }),
        i = function (t, e, n, r) {
          for (
            var i = [], o = 0, a = t.length, s = 0;
            o !== a && s + e[o] < n;

          )
            (s += e[o]), o++;
          i.push(t.slice(0, o));
          var c = o;
          for (s = 0; o !== a; )
            s + e[o] > r && (i.push(t.slice(c, o)), (s = 0), (c = o)),
              (s += e[o]),
              o++;
          return c !== o && i.push(t.slice(c, o)), i;
        },
        o = function (t, o, a) {
          a || (a = {});
          var s,
            c,
            l,
            u,
            h,
            f,
            d = [],
            p = [d],
            g = a.textIndent || 0,
            m = 0,
            w = 0,
            y = t.split(" "),
            v = e(" ", a)[0];
          if ((f = a.lineIndent === -1 ? y[0].length + 2 : a.lineIndent || 0)) {
            var b = Array(f).join(" "),
              x = [];
            y.map(function (t) {
              (t = t.split(/\s*\n/)),
                t.length > 1
                  ? (x = x.concat(
                      t.map(function (t, e) {
                        return (e && t.length ? "\n" : "") + t;
                      })
                    ))
                  : x.push(t[0]);
            }),
              (y = x),
              (f = r(b, a));
          }
          for (l = 0, u = y.length; l < u; l++) {
            var k = 0;
            if (
              ((s = y[l]),
              f && "\n" == s[0] && ((s = s.substr(1)), (k = 1)),
              (c = e(s, a)),
              (w = n(c)),
              g + m + w > o || k)
            ) {
              if (w > o) {
                for (
                  h = i(s, c, o - (g + m), o), d.push(h.shift()), d = [h.pop()];
                  h.length;

                )
                  p.push([h.shift()]);
                w = n(c.slice(s.length - d[0].length));
              } else d = [s];
              p.push(d), (g = w + f), (m = v);
            } else d.push(s), (g += m + w), (m = v);
          }
          if (f)
            var _ = function (t, e) {
              return (e ? b : "") + t.join(" ");
            };
          else
            var _ = function (t) {
              return t.join(" ");
            };
          return p.map(_);
        };
      t.splitTextToSize = function (t, e, n) {
        n || (n = {});
        var r,
          i = n.fontSize || this.internal.getFontSize(),
          a = function (t) {
            var e = { 0: 1 },
              n = {};
            if (t.widths && t.kerning)
              return { widths: t.widths, kerning: t.kerning };
            var r = this.internal.getFont(t.fontName, t.fontStyle),
              i = "Unicode";
            return r.metadata[i]
              ? {
                  widths: r.metadata[i].widths || e,
                  kerning: r.metadata[i].kerning || n,
                }
              : { widths: e, kerning: n };
          }.call(this, n);
        r = Array.isArray(t) ? t : t.split(/\r?\n/);
        var s = (1 * this.internal.scaleFactor * e) / i;
        (a.textIndent = n.textIndent
          ? (1 * n.textIndent * this.internal.scaleFactor) / i
          : 0),
          (a.lineIndent = n.lineIndent);
        var c,
          l,
          u = [];
        for (c = 0, l = r.length; c < l; c++) u = u.concat(o(r[c], s, a));
        return u;
      };
    })(e.API) /** @preserve
jsPDF standard_fonts_metrics plugin
Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
MIT license.
*/,
    (function (t) {
      var e = function (t) {
          for (
            var e = "0123456789abcdef", n = "klmnopqrstuvwxyz", r = {}, i = 0;
            i < n.length;
            i++
          )
            r[n[i]] = e[i];
          var o,
            a,
            s,
            c,
            l,
            u = {},
            h = 1,
            f = u,
            d = [],
            p = "",
            g = "",
            m = t.length - 1;
          for (i = 1; i != m; )
            (l = t[i]),
              (i += 1),
              "'" == l
                ? a
                  ? ((c = a.join("")), (a = o))
                  : (a = [])
                : a
                ? a.push(l)
                : "{" == l
                ? (d.push([f, c]), (f = {}), (c = o))
                : "}" == l
                ? ((s = d.pop()), (s[0][s[1]] = f), (c = o), (f = s[0]))
                : "-" == l
                ? (h = -1)
                : c === o
                ? r.hasOwnProperty(l)
                  ? ((p += r[l]), (c = parseInt(p, 16) * h), (h = 1), (p = ""))
                  : (p += l)
                : r.hasOwnProperty(l)
                ? ((g += r[l]),
                  (f[c] = parseInt(g, 16) * h),
                  (h = 1),
                  (c = o),
                  (g = ""))
                : (g += l);
          return u;
        },
        n = {
          codePages: ["WinAnsiEncoding"],
          WinAnsiEncoding: e(
            "{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}"
          ),
        },
        r = {
          Unicode: {
            Courier: n,
            "Courier-Bold": n,
            "Courier-BoldOblique": n,
            "Courier-Oblique": n,
            Helvetica: n,
            "Helvetica-Bold": n,
            "Helvetica-BoldOblique": n,
            "Helvetica-Oblique": n,
            "Times-Roman": n,
            "Times-Bold": n,
            "Times-BoldItalic": n,
            "Times-Italic": n,
          },
        },
        i = {
          Unicode: {
            "Courier-Oblique": e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
            "Times-BoldItalic": e(
              "{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"
            ),
            "Helvetica-Bold": e(
              "{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"
            ),
            Courier: e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
            "Courier-BoldOblique": e(
              "{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"
            ),
            "Times-Bold": e(
              "{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"
            ),
            Helvetica: e(
              "{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"
            ),
            "Helvetica-BoldOblique": e(
              "{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"
            ),
            "Courier-Bold": e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
            "Times-Italic": e(
              "{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"
            ),
            "Times-Roman": e(
              "{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"
            ),
            "Helvetica-Oblique": e(
              "{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"
            ),
          },
        };
      t.events.push([
        "addFont",
        function (t) {
          var e,
            n,
            o,
            a = "Unicode";
          (e = i[a][t.PostScriptName]),
            e &&
              ((n = t.metadata[a] ? t.metadata[a] : (t.metadata[a] = {})),
              (n.widths = e.widths),
              (n.kerning = e.kerning)),
            (o = r[a][t.PostScriptName]),
            o &&
              ((n = t.metadata[a] ? t.metadata[a] : (t.metadata[a] = {})),
              (n.encoding = o),
              o.codePages &&
                o.codePages.length &&
                (t.encoding = o.codePages[0]));
        },
      ]);
    })(e.API),
    /** @preserve
jsPDF SVG plugin
Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
*/
    (function (t) {
      t.addSVG = function (t, e, n, r, i) {
        function o(t, e) {
          var n = e.createElement("style");
          (n.type = "text/css"),
            n.styleSheet
              ? (n.styleSheet.cssText = t)
              : n.appendChild(e.createTextNode(t)),
            e.getElementsByTagName("head")[0].appendChild(n);
        }
        function a(t) {
          var e = "childframe",
            n = t.createElement("iframe");
          return (
            o(".jsPDF_sillysvg_iframe {display:none;position:absolute;}", t),
            (n.name = e),
            n.setAttribute("width", 0),
            n.setAttribute("height", 0),
            n.setAttribute("frameborder", "0"),
            n.setAttribute("scrolling", "no"),
            n.setAttribute("seamless", "seamless"),
            n.setAttribute("class", "jsPDF_sillysvg_iframe"),
            t.body.appendChild(n),
            n
          );
        }
        function s(t, e) {
          var n = (e.contentWindow || e.contentDocument).document;
          return n.write(t), n.close(), n.getElementsByTagName("svg")[0];
        }
        function c(t) {
          for (
            var e = parseFloat(t[1]),
              n = parseFloat(t[2]),
              r = [],
              i = 3,
              o = t.length;
            i < o;

          )
            "c" === t[i]
              ? (r.push([
                  parseFloat(t[i + 1]),
                  parseFloat(t[i + 2]),
                  parseFloat(t[i + 3]),
                  parseFloat(t[i + 4]),
                  parseFloat(t[i + 5]),
                  parseFloat(t[i + 6]),
                ]),
                (i += 7))
              : "l" === t[i]
              ? (r.push([parseFloat(t[i + 1]), parseFloat(t[i + 2])]), (i += 3))
              : (i += 1);
          return [e, n, r];
        }
        var l;
        if (e === l || n === l)
          throw new Error("addSVG needs values for 'x' and 'y'");
        var u = a(document),
          h = s(t, u),
          f = [1, 1],
          d = parseFloat(h.getAttribute("width")),
          p = parseFloat(h.getAttribute("height"));
        d &&
          p &&
          (r && i
            ? (f = [r / d, i / p])
            : r
            ? (f = [r / d, r / d])
            : i && (f = [i / p, i / p]));
        var g,
          m,
          w,
          y,
          v = h.childNodes;
        for (g = 0, m = v.length; g < m; g++)
          (w = v[g]),
            w.tagName &&
              "PATH" === w.tagName.toUpperCase() &&
              ((y = c(w.getAttribute("d").split(" "))),
              (y[0] = y[0] * f[0] + e),
              (y[1] = y[1] * f[1] + n),
              this.lines.call(this, y[2], y[0], y[1], f));
        return this;
      };
    })(e.API),
    /** ====================================================================
     * jsPDF total_pages plugin
     * Copyright (c) 2013 Eduardo Menezes de Morais, eduardo.morais@usp.br
     *
     *
     * ====================================================================
     */
    (function (t) {
      t.putTotalPages = function (t) {
        for (
          var e = new RegExp(t, "g"), n = 1;
          n <= this.internal.getNumberOfPages();
          n++
        )
          for (var r = 0; r < this.internal.pages[n].length; r++)
            this.internal.pages[n][r] = this.internal.pages[n][r].replace(
              e,
              this.internal.getNumberOfPages()
            );
        return this;
      };
    })(e.API),
    /** ====================================================================
     * jsPDF XMP metadata plugin
     * Copyright (c) 2016 Jussi Utunen, u-jussi@suomi24.fi
     *
     *
     * ====================================================================
     */ (function (t) {
      var e = "",
        n = "",
        r = "";
      t.addMetadata = function (t, i) {
        return (
          (n = i || "http://jspdf.default.namespaceuri/"),
          (e = t),
          this.internal.events.subscribe("postPutResources", function () {
            if (e) {
              var t = '<x:xmpmeta xmlns:x="adobe:ns:meta/">',
                i =
                  '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' +
                  n +
                  '"><jspdf:metadata>',
                o = "</jspdf:metadata></rdf:Description></rdf:RDF>",
                a = "</x:xmpmeta>",
                s = unescape(encodeURIComponent(t)),
                c = unescape(encodeURIComponent(i)),
                l = unescape(encodeURIComponent(e)),
                u = unescape(encodeURIComponent(o)),
                h = unescape(encodeURIComponent(a)),
                f = c.length + l.length + u.length + s.length + h.length;
              (r = this.internal.newObject()),
                this.internal.write(
                  "<< /Type /Metadata /Subtype /XML /Length " + f + " >>"
                ),
                this.internal.write("stream"),
                this.internal.write(s + c + l + u + h),
                this.internal.write("endstream"),
                this.internal.write("endobj");
            } else r = "";
          }),
          this.internal.events.subscribe("putCatalog", function () {
            r && this.internal.write("/Metadata " + r + " 0 R");
          }),
          this
        );
      };
    })(e.API),
    (function (t) {
      if (((t.URL = t.URL || t.webkitURL), t.Blob && t.URL))
        try {
          return void new Blob();
        } catch (t) {}
      var e =
        t.BlobBuilder ||
        t.WebKitBlobBuilder ||
        t.MozBlobBuilder ||
        (function (t) {
          var e = function (t) {
              return Object.prototype.toString
                .call(t)
                .match(/^\[object\s(.*)\]$/)[1];
            },
            n = function () {
              this.data = [];
            },
            r = function (t, e, n) {
              (this.data = t),
                (this.size = t.length),
                (this.type = e),
                (this.encoding = n);
            },
            i = n.prototype,
            o = r.prototype,
            a = t.FileReaderSync,
            s = function (t) {
              this.code = this[(this.name = t)];
            },
            c =
              "NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR".split(
                " "
              ),
            l = c.length,
            u = t.URL || t.webkitURL || t,
            h = u.createObjectURL,
            f = u.revokeObjectURL,
            d = u,
            p = t.btoa,
            g = t.atob,
            m = t.ArrayBuffer,
            w = t.Uint8Array,
            y = /^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;
          for (r.fake = o.fake = !0; l--; ) s.prototype[c[l]] = l + 1;
          return (
            u.createObjectURL ||
              (d = t.URL =
                function (t) {
                  var e,
                    n = document.createElementNS(
                      "http://www.w3.org/1999/xhtml",
                      "a"
                    );
                  return (
                    (n.href = t),
                    "origin" in n ||
                      ("data:" === n.protocol.toLowerCase()
                        ? (n.origin = null)
                        : ((e = t.match(y)), (n.origin = e && e[1]))),
                    n
                  );
                }),
            (d.createObjectURL = function (t) {
              var e,
                n = t.type;
              return (
                null === n && (n = "application/octet-stream"),
                t instanceof r
                  ? ((e = "data:" + n),
                    "base64" === t.encoding
                      ? e + ";base64," + t.data
                      : "URI" === t.encoding
                      ? e + "," + decodeURIComponent(t.data)
                      : p
                      ? e + ";base64," + p(t.data)
                      : e + "," + encodeURIComponent(t.data))
                  : h
                  ? h.call(u, t)
                  : void 0
              );
            }),
            (d.revokeObjectURL = function (t) {
              "data:" !== t.substring(0, 5) && f && f.call(u, t);
            }),
            (i.append = function (t) {
              var n = this.data;
              if (w && (t instanceof m || t instanceof w)) {
                for (var i = "", o = new w(t), c = 0, l = o.length; c < l; c++)
                  i += String.fromCharCode(o[c]);
                n.push(i);
              } else if ("Blob" === e(t) || "File" === e(t)) {
                if (!a) throw new s("NOT_READABLE_ERR");
                var u = new a();
                n.push(u.readAsBinaryString(t));
              } else
                t instanceof r
                  ? "base64" === t.encoding && g
                    ? n.push(g(t.data))
                    : "URI" === t.encoding
                    ? n.push(decodeURIComponent(t.data))
                    : "raw" === t.encoding && n.push(t.data)
                  : ("string" != typeof t && (t += ""),
                    n.push(unescape(encodeURIComponent(t))));
            }),
            (i.getBlob = function (t) {
              return (
                arguments.length || (t = null),
                new r(this.data.join(""), t, "raw")
              );
            }),
            (i.toString = function () {
              return "[object BlobBuilder]";
            }),
            (o.slice = function (t, e, n) {
              var i = arguments.length;
              return (
                i < 3 && (n = null),
                new r(
                  this.data.slice(t, i > 1 ? e : this.data.length),
                  n,
                  this.encoding
                )
              );
            }),
            (o.toString = function () {
              return "[object Blob]";
            }),
            (o.close = function () {
              (this.size = 0), delete this.data;
            }),
            n
          );
        })(t);
      t.Blob = function (t, n) {
        var r = n ? n.type || "" : "",
          i = new e();
        if (t)
          for (var o = 0, a = t.length; o < a; o++)
            Uint8Array && t[o] instanceof Uint8Array
              ? i.append(t[o].buffer)
              : i.append(t[o]);
        var s = i.getBlob(r);
        return !s.slice && s.webkitSlice && (s.slice = s.webkitSlice), s;
      };
      var n =
        Object.getPrototypeOf ||
        function (t) {
          return t.__proto__;
        };
      t.Blob.prototype = n(new t.Blob());
    })(
      ("undefined" != typeof self && self) ||
        ("undefined" != typeof window && window) ||
        (void 0).content ||
        void 0
    );
  var i =
    i ||
    (function (t) {
      if (
        "undefined" == typeof navigator ||
        !/MSIE [1-9]\./.test(navigator.userAgent)
      ) {
        var e = t.document,
          n = function () {
            return t.URL || t.webkitURL || t;
          },
          r = e.createElementNS("http://www.w3.org/1999/xhtml", "a"),
          i = "download" in r,
          o = function (t) {
            var e = new MouseEvent("click");
            t.dispatchEvent(e);
          },
          a = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
          s = t.webkitRequestFileSystem,
          c = t.requestFileSystem || s || t.mozRequestFileSystem,
          l = function (e) {
            (t.setImmediate || t.setTimeout)(function () {
              throw e;
            }, 0);
          },
          u = "application/octet-stream",
          h = 0,
          f = 500,
          d = function (e) {
            var r = function () {
              "string" == typeof e ? n().revokeObjectURL(e) : e.remove();
            };
            t.chrome ? r() : setTimeout(r, f);
          },
          p = function (t, e, n) {
            e = [].concat(e);
            for (var r = e.length; r--; ) {
              var i = t["on" + e[r]];
              if ("function" == typeof i)
                try {
                  i.call(t, n || t);
                } catch (t) {
                  l(t);
                }
            }
          },
          g = function (t) {
            return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
              t.type
            )
              ? new Blob(["\ufeff", t], { type: t.type })
              : t;
          },
          m = function (e, l, f) {
            f || (e = g(e));
            var m,
              w,
              y,
              v = this,
              b = e.type,
              x = !1,
              k = function () {
                p(v, "writestart progress write writeend".split(" "));
              },
              _ = function () {
                if (w && a && "undefined" != typeof FileReader) {
                  var r = new FileReader();
                  return (
                    (r.onloadend = function () {
                      var t = r.result;
                      (w.location.href =
                        "data:attachment/file" + t.slice(t.search(/[,;]/))),
                        (v.readyState = v.DONE),
                        k();
                    }),
                    r.readAsDataURL(e),
                    void (v.readyState = v.INIT)
                  );
                }
                if (((!x && m) || (m = n().createObjectURL(e)), w))
                  w.location.href = m;
                else {
                  var i = t.open(m, "_blank");
                  void 0 == i && a && (t.location.href = m);
                }
                (v.readyState = v.DONE), k(), d(m);
              },
              C = function (t) {
                return function () {
                  if (v.readyState !== v.DONE) return t.apply(this, arguments);
                };
              },
              A = { create: !0, exclusive: !1 };
            return (
              (v.readyState = v.INIT),
              l || (l = "download"),
              i
                ? ((m = n().createObjectURL(e)),
                  void setTimeout(function () {
                    (r.href = m),
                      (r.download = l),
                      o(r),
                      k(),
                      d(m),
                      (v.readyState = v.DONE);
                  }))
                : (t.chrome &&
                    b &&
                    b !== u &&
                    ((y = e.slice || e.webkitSlice),
                    (e = y.call(e, 0, e.size, u)),
                    (x = !0)),
                  s && "download" !== l && (l += ".download"),
                  (b === u || s) && (w = t),
                  c
                    ? ((h += e.size),
                      void c(
                        t.TEMPORARY,
                        h,
                        C(function (t) {
                          t.root.getDirectory(
                            "saved",
                            A,
                            C(function (t) {
                              var n = function () {
                                t.getFile(
                                  l,
                                  A,
                                  C(function (t) {
                                    t.createWriter(
                                      C(function (n) {
                                        (n.onwriteend = function (e) {
                                          (w.location.href = t.toURL()),
                                            (v.readyState = v.DONE),
                                            p(v, "writeend", e),
                                            d(t);
                                        }),
                                          (n.onerror = function () {
                                            var t = n.error;
                                            t.code !== t.ABORT_ERR && _();
                                          }),
                                          "writestart progress write abort"
                                            .split(" ")
                                            .forEach(function (t) {
                                              n["on" + t] = v["on" + t];
                                            }),
                                          n.write(e),
                                          (v.abort = function () {
                                            n.abort(), (v.readyState = v.DONE);
                                          }),
                                          (v.readyState = v.WRITING);
                                      }),
                                      _
                                    );
                                  }),
                                  _
                                );
                              };
                              t.getFile(
                                l,
                                { create: !1 },
                                C(function (t) {
                                  t.remove(), n();
                                }),
                                C(function (t) {
                                  t.code === t.NOT_FOUND_ERR ? n() : _();
                                })
                              );
                            }),
                            _
                          );
                        }),
                        _
                      ))
                    : void _())
            );
          },
          w = m.prototype,
          y = function (t, e, n) {
            return new m(t, e, n);
          };
        return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob
          ? function (t, e, n) {
              return (
                n || (t = g(t)), navigator.msSaveOrOpenBlob(t, e || "download")
              );
            }
          : ((w.abort = function () {
              var t = this;
              (t.readyState = t.DONE), p(t, "abort");
            }),
            (w.readyState = w.INIT = 0),
            (w.WRITING = 1),
            (w.DONE = 2),
            (w.error =
              w.onwritestart =
              w.onprogress =
              w.onwrite =
              w.onabort =
              w.onerror =
              w.onwriteend =
                null),
            y);
      }
    })(
      ("undefined" != typeof self && self) ||
        ("undefined" != typeof window && window) ||
        (void 0).content
    );
  "undefined" != typeof module && module.exports
    ? (module.exports.saveAs = i)
    : "undefined" != typeof define &&
      null !== define &&
      null != define.amd &&
      define([], function () {
        return i;
      }),
    /*
     * Copyright (c) 2012 chick307 <chick307@gmail.com>
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
    void (function (t, e) {
      "object" == typeof module
        ? (module.exports = e())
        : "function" == typeof define
        ? define(e)
        : (t.adler32cs = e());
    })(e, function () {
      var t =
          "function" == typeof ArrayBuffer && "function" == typeof Uint8Array,
        e = null,
        n = (function () {
          if (!t)
            return function () {
              return !1;
            };
          try {
            var n = {};
            "function" == typeof n.Buffer && (e = n.Buffer);
          } catch (t) {}
          return function (t) {
            return t instanceof ArrayBuffer || (null !== e && t instanceof e);
          };
        })(),
        r = (function () {
          return null !== e
            ? function (t) {
                return new e(t, "utf8").toString("binary");
              }
            : function (t) {
                return unescape(encodeURIComponent(t));
              };
        })(),
        i = 65521,
        o = function (t, e) {
          for (var n = 65535 & t, r = t >>> 16, o = 0, a = e.length; o < a; o++)
            (n = (n + (255 & e.charCodeAt(o))) % i), (r = (r + n) % i);
          return ((r << 16) | n) >>> 0;
        },
        a = function (t, e) {
          for (var n = 65535 & t, r = t >>> 16, o = 0, a = e.length; o < a; o++)
            (n = (n + e[o]) % i), (r = (r + n) % i);
          return ((r << 16) | n) >>> 0;
        },
        s = {},
        c = (s.Adler32 = (function () {
          var e = function (t) {
              if (!(this instanceof e))
                throw new TypeError(
                  "Constructor cannot called be as a function."
                );
              if (!isFinite((t = null == t ? 1 : +t)))
                throw new Error("First arguments needs to be a finite number.");
              this.checksum = t >>> 0;
            },
            i = (e.prototype = {});
          return (
            (i.constructor = e),
            (e.from = (function (t) {
              return (t.prototype = i), t;
            })(function (t) {
              if (!(this instanceof e))
                throw new TypeError(
                  "Constructor cannot called be as a function."
                );
              if (null == t)
                throw new Error("First argument needs to be a string.");
              this.checksum = o(1, t.toString());
            })),
            (e.fromUtf8 = (function (t) {
              return (t.prototype = i), t;
            })(function (t) {
              if (!(this instanceof e))
                throw new TypeError(
                  "Constructor cannot called be as a function."
                );
              if (null == t)
                throw new Error("First argument needs to be a string.");
              var n = r(t.toString());
              this.checksum = o(1, n);
            })),
            t &&
              (e.fromBuffer = (function (t) {
                return (t.prototype = i), t;
              })(function (t) {
                if (!(this instanceof e))
                  throw new TypeError(
                    "Constructor cannot called be as a function."
                  );
                if (!n(t))
                  throw new Error("First argument needs to be ArrayBuffer.");
                var r = new Uint8Array(t);
                return (this.checksum = a(1, r));
              })),
            (i.update = function (t) {
              if (null == t)
                throw new Error("First argument needs to be a string.");
              return (t = t.toString()), (this.checksum = o(this.checksum, t));
            }),
            (i.updateUtf8 = function (t) {
              if (null == t)
                throw new Error("First argument needs to be a string.");
              var e = r(t.toString());
              return (this.checksum = o(this.checksum, e));
            }),
            t &&
              (i.updateBuffer = function (t) {
                if (!n(t))
                  throw new Error("First argument needs to be ArrayBuffer.");
                var e = new Uint8Array(t);
                return (this.checksum = a(this.checksum, e));
              }),
            (i.clone = function () {
              return new c(this.checksum);
            }),
            e
          );
        })());
      return (
        (s.from = function (t) {
          if (null == t)
            throw new Error("First argument needs to be a string.");
          return o(1, t.toString());
        }),
        (s.fromUtf8 = function (t) {
          if (null == t)
            throw new Error("First argument needs to be a string.");
          var e = r(t.toString());
          return o(1, e);
        }),
        t &&
          (s.fromBuffer = function (t) {
            if (!n(t))
              throw new Error("First argument need to be ArrayBuffer.");
            var e = new Uint8Array(t);
            return a(1, e);
          }),
        s
      );
    });
  /**
   * CssColors
   * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
  var o = {};
  (o._colorsTable = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    "indianred ": "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgrey: "#d3d3d3",
    lightgreen: "#90ee90",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370d8",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#d87093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32",
  }),
    (o.colorNameToHex = function (t) {
      return (
        (t = t.toLowerCase()),
        "undefined" != typeof this._colorsTable[t] && this._colorsTable[t]
      );
    }); /*
 Deflate.js - https://github.com/gildas-lormeau/zip.js
 Copyright (c) 2013 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright
 notice, this list of conditions and the following disclaimer in
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
  var a = (function (t) {
    function e() {
      function t(t) {
        var e,
          n,
          i,
          o,
          a,
          c,
          l = r.dyn_tree,
          u = r.stat_desc.static_tree,
          h = r.stat_desc.extra_bits,
          f = r.stat_desc.extra_base,
          p = r.stat_desc.max_length,
          g = 0;
        for (o = 0; o <= s; o++) t.bl_count[o] = 0;
        for (l[2 * t.heap[t.heap_max] + 1] = 0, e = t.heap_max + 1; e < d; e++)
          (n = t.heap[e]),
            (o = l[2 * l[2 * n + 1] + 1] + 1),
            o > p && ((o = p), g++),
            (l[2 * n + 1] = o),
            n > r.max_code ||
              (t.bl_count[o]++,
              (a = 0),
              n >= f && (a = h[n - f]),
              (c = l[2 * n]),
              (t.opt_len += c * (o + a)),
              u && (t.static_len += c * (u[2 * n + 1] + a)));
        if (0 !== g) {
          do {
            for (o = p - 1; 0 === t.bl_count[o]; ) o--;
            t.bl_count[o]--,
              (t.bl_count[o + 1] += 2),
              t.bl_count[p]--,
              (g -= 2);
          } while (g > 0);
          for (o = p; 0 !== o; o--)
            for (n = t.bl_count[o]; 0 !== n; )
              (i = t.heap[--e]),
                i > r.max_code ||
                  (l[2 * i + 1] != o &&
                    ((t.opt_len += (o - l[2 * i + 1]) * l[2 * i]),
                    (l[2 * i + 1] = o)),
                  n--);
        }
      }
      function e(t, e) {
        var n = 0;
        do (n |= 1 & t), (t >>>= 1), (n <<= 1);
        while (--e > 0);
        return n >>> 1;
      }
      function n(t, n, r) {
        var i,
          o,
          a,
          c = [],
          l = 0;
        for (i = 1; i <= s; i++) c[i] = l = (l + r[i - 1]) << 1;
        for (o = 0; o <= n; o++)
          (a = t[2 * o + 1]), 0 !== a && (t[2 * o] = e(c[a]++, a));
      }
      var r = this;
      r.build_tree = function (e) {
        var i,
          o,
          a,
          s = r.dyn_tree,
          c = r.stat_desc.static_tree,
          l = r.stat_desc.elems,
          u = -1;
        for (e.heap_len = 0, e.heap_max = d, i = 0; i < l; i++)
          0 !== s[2 * i]
            ? ((e.heap[++e.heap_len] = u = i), (e.depth[i] = 0))
            : (s[2 * i + 1] = 0);
        for (; e.heap_len < 2; )
          (a = e.heap[++e.heap_len] = u < 2 ? ++u : 0),
            (s[2 * a] = 1),
            (e.depth[a] = 0),
            e.opt_len--,
            c && (e.static_len -= c[2 * a + 1]);
        for (r.max_code = u, i = Math.floor(e.heap_len / 2); i >= 1; i--)
          e.pqdownheap(s, i);
        a = l;
        do
          (i = e.heap[1]),
            (e.heap[1] = e.heap[e.heap_len--]),
            e.pqdownheap(s, 1),
            (o = e.heap[1]),
            (e.heap[--e.heap_max] = i),
            (e.heap[--e.heap_max] = o),
            (s[2 * a] = s[2 * i] + s[2 * o]),
            (e.depth[a] = Math.max(e.depth[i], e.depth[o]) + 1),
            (s[2 * i + 1] = s[2 * o + 1] = a),
            (e.heap[1] = a++),
            e.pqdownheap(s, 1);
        while (e.heap_len >= 2);
        (e.heap[--e.heap_max] = e.heap[1]), t(e), n(s, r.max_code, e.bl_count);
      };
    }
    function n(t, e, n, r, i) {
      var o = this;
      (o.static_tree = t),
        (o.extra_bits = e),
        (o.extra_base = n),
        (o.elems = r),
        (o.max_length = i);
    }
    function r(t, e, n, r, i) {
      var o = this;
      (o.good_length = t),
        (o.max_lazy = e),
        (o.nice_length = n),
        (o.max_chain = r),
        (o.func = i);
    }
    function i(t, e, n, r) {
      var i = t[2 * e],
        o = t[2 * n];
      return i < o || (i == o && r[e] <= r[n]);
    }
    function o() {
      function t() {
        var t;
        for (It = 2 * St, Ot[Rt - 1] = 0, t = 0; t < Rt - 1; t++) Ot[t] = 0;
        (Yt = L[Gt].max_lazy),
          (Qt = L[Gt].good_length),
          (Kt = L[Gt].nice_length),
          (Vt = L[Gt].max_chain),
          (Ut = 0),
          (zt = 0),
          (Wt = 0),
          (Nt = Xt = tt - 1),
          (Mt = 0),
          (Ft = 0);
      }
      function r() {
        var t;
        for (t = 0; t < f; t++) $t[2 * t] = 0;
        for (t = 0; t < c; t++) Zt[2 * t] = 0;
        for (t = 0; t < l; t++) te[2 * t] = 0;
        ($t[2 * p] = 1), (ee.opt_len = ee.static_len = 0), (se = le = 0);
      }
      function o() {
        (ne.dyn_tree = $t),
          (ne.stat_desc = n.static_l_desc),
          (re.dyn_tree = Zt),
          (re.stat_desc = n.static_d_desc),
          (ie.dyn_tree = te),
          (ie.stat_desc = n.static_bl_desc),
          (he = 0),
          (fe = 0),
          (ue = 8),
          r();
      }
      function a(t, e) {
        var n,
          r,
          i = -1,
          o = t[1],
          a = 0,
          s = 7,
          c = 4;
        for (
          0 === o && ((s = 138), (c = 3)), t[2 * (e + 1) + 1] = 65535, n = 0;
          n <= e;
          n++
        )
          (r = o),
            (o = t[2 * (n + 1) + 1]),
            (++a < s && r == o) ||
              (a < c
                ? (te[2 * r] += a)
                : 0 !== r
                ? (r != i && te[2 * r]++, te[2 * m]++)
                : a <= 10
                ? te[2 * w]++
                : te[2 * y]++,
              (a = 0),
              (i = r),
              0 === o
                ? ((s = 138), (c = 3))
                : r == o
                ? ((s = 6), (c = 3))
                : ((s = 7), (c = 4)));
      }
      function s() {
        var t;
        for (
          a($t, ne.max_code), a(Zt, re.max_code), ie.build_tree(ee), t = l - 1;
          t >= 3 && 0 === te[2 * e.bl_order[t] + 1];
          t--
        );
        return (ee.opt_len += 3 * (t + 1) + 5 + 5 + 4), t;
      }
      function u(t) {
        ee.pending_buf[ee.pending++] = t;
      }
      function d(t) {
        u(255 & t), u((t >>> 8) & 255);
      }
      function g(t) {
        u((t >> 8) & 255), u(255 & t & 255);
      }
      function R(t, e) {
        var n,
          r = e;
        fe > v - r
          ? ((n = t),
            (he |= (n << fe) & 65535),
            d(he),
            (he = n >>> (v - fe)),
            (fe += r - v))
          : ((he |= (t << fe) & 65535), (fe += r));
      }
      function rt(t, e) {
        var n = 2 * t;
        R(65535 & e[n], 65535 & e[n + 1]);
      }
      function it(t, e) {
        var n,
          r,
          i = -1,
          o = t[1],
          a = 0,
          s = 7,
          c = 4;
        for (0 === o && ((s = 138), (c = 3)), n = 0; n <= e; n++)
          if (((r = o), (o = t[2 * (n + 1) + 1]), !(++a < s && r == o))) {
            if (a < c) {
              do rt(r, te);
              while (0 !== --a);
            } else
              0 !== r
                ? (r != i && (rt(r, te), a--), rt(m, te), R(a - 3, 2))
                : a <= 10
                ? (rt(w, te), R(a - 3, 3))
                : (rt(y, te), R(a - 11, 7));
            (a = 0),
              (i = r),
              0 === o
                ? ((s = 138), (c = 3))
                : r == o
                ? ((s = 6), (c = 3))
                : ((s = 7), (c = 4));
          }
      }
      function ot(t, n, r) {
        var i;
        for (R(t - 257, 5), R(n - 1, 5), R(r - 4, 4), i = 0; i < r; i++)
          R(te[2 * e.bl_order[i] + 1], 3);
        it($t, t - 1), it(Zt, n - 1);
      }
      function at() {
        16 == fe
          ? (d(he), (he = 0), (fe = 0))
          : fe >= 8 && (u(255 & he), (he >>>= 8), (fe -= 8));
      }
      function st() {
        R($ << 1, 3),
          rt(p, n.static_ltree),
          at(),
          1 + ue + 10 - fe < 9 && (R($ << 1, 3), rt(p, n.static_ltree), at()),
          (ue = 7);
      }
      function ct(t, n) {
        var r, i, o;
        if (
          ((ee.pending_buf[ce + 2 * se] = (t >>> 8) & 255),
          (ee.pending_buf[ce + 2 * se + 1] = 255 & t),
          (ee.pending_buf[oe + se] = 255 & n),
          se++,
          0 === t
            ? $t[2 * n]++
            : (le++,
              t--,
              $t[2 * (e._length_code[n] + h + 1)]++,
              Zt[2 * e.d_code(t)]++),
          0 === (8191 & se) && Gt > 2)
        ) {
          for (r = 8 * se, i = Ut - zt, o = 0; o < c; o++)
            r += Zt[2 * o] * (5 + e.extra_dbits[o]);
          if (((r >>>= 3), le < Math.floor(se / 2) && r < Math.floor(i / 2)))
            return !0;
        }
        return se == ae - 1;
      }
      function lt(t, n) {
        var r,
          i,
          o,
          a,
          s = 0;
        if (0 !== se)
          do
            (r =
              ((ee.pending_buf[ce + 2 * s] << 8) & 65280) |
              (255 & ee.pending_buf[ce + 2 * s + 1])),
              (i = 255 & ee.pending_buf[oe + s]),
              s++,
              0 === r
                ? rt(i, t)
                : ((o = e._length_code[i]),
                  rt(o + h + 1, t),
                  (a = e.extra_lbits[o]),
                  0 !== a && ((i -= e.base_length[o]), R(i, a)),
                  r--,
                  (o = e.d_code(r)),
                  rt(o, n),
                  (a = e.extra_dbits[o]),
                  0 !== a && ((r -= e.base_dist[o]), R(r, a)));
          while (s < se);
        rt(p, t), (ue = t[2 * p + 1]);
      }
      function ut() {
        fe > 8 ? d(he) : fe > 0 && u(255 & he), (he = 0), (fe = 0);
      }
      function ht(t, e, n) {
        ut(),
          (ue = 8),
          n && (d(e), d(~e)),
          ee.pending_buf.set(Pt.subarray(t, t + e), ee.pending),
          (ee.pending += e);
      }
      function ft(t, e, n) {
        R((K << 1) + (n ? 1 : 0), 3), ht(t, e, !0);
      }
      function dt(t, e, i) {
        var o,
          a,
          c = 0;
        Gt > 0
          ? (ne.build_tree(ee),
            re.build_tree(ee),
            (c = s()),
            (o = (ee.opt_len + 3 + 7) >>> 3),
            (a = (ee.static_len + 3 + 7) >>> 3),
            a <= o && (o = a))
          : (o = a = e + 5),
          e + 4 <= o && t != -1
            ? ft(t, e, i)
            : a == o
            ? (R(($ << 1) + (i ? 1 : 0), 3), lt(n.static_ltree, n.static_dtree))
            : (R((Z << 1) + (i ? 1 : 0), 3),
              ot(ne.max_code + 1, re.max_code + 1, c + 1),
              lt($t, Zt)),
          r(),
          i && ut();
      }
      function pt(t) {
        dt(zt >= 0 ? zt : -1, Ut - zt, t), (zt = Ut), xt.flush_pending();
      }
      function gt() {
        var t, e, n, r;
        do {
          if (((r = It - Wt - Ut), 0 === r && 0 === Ut && 0 === Wt)) r = St;
          else if (r == -1) r--;
          else if (Ut >= St + St - nt) {
            Pt.set(Pt.subarray(St, St + St), 0),
              (Ht -= St),
              (Ut -= St),
              (zt -= St),
              (t = Rt),
              (n = t);
            do (e = 65535 & Ot[--n]), (Ot[n] = e >= St ? e - St : 0);
            while (0 !== --t);
            (t = St), (n = t);
            do (e = 65535 & Et[--n]), (Et[n] = e >= St ? e - St : 0);
            while (0 !== --t);
            r += St;
          }
          if (0 === xt.avail_in) return;
          (t = xt.read_buf(Pt, Ut + Wt, r)),
            (Wt += t),
            Wt >= tt &&
              ((Ft = 255 & Pt[Ut]),
              (Ft = ((Ft << jt) ^ (255 & Pt[Ut + 1])) & Dt));
        } while (Wt < nt && 0 !== xt.avail_in);
      }
      function mt(t) {
        var e,
          n = 65535;
        for (n > _t - 5 && (n = _t - 5); ; ) {
          if (Wt <= 1) {
            if ((gt(), 0 === Wt && t == C)) return U;
            if (0 === Wt) break;
          }
          if (
            ((Ut += Wt),
            (Wt = 0),
            (e = zt + n),
            (0 === Ut || Ut >= e) &&
              ((Wt = Ut - e), (Ut = e), pt(!1), 0 === xt.avail_out))
          )
            return U;
          if (Ut - zt >= St - nt && (pt(!1), 0 === xt.avail_out)) return U;
        }
        return (
          pt(t == q), 0 === xt.avail_out ? (t == q ? W : U) : t == q ? X : H
        );
      }
      function wt(t) {
        var e,
          n,
          r = Vt,
          i = Ut,
          o = Xt,
          a = Ut > St - nt ? Ut - (St - nt) : 0,
          s = Kt,
          c = Tt,
          l = Ut + et,
          u = Pt[i + o - 1],
          h = Pt[i + o];
        Xt >= Qt && (r >>= 2), s > Wt && (s = Wt);
        do
          if (
            ((e = t),
            Pt[e + o] == h &&
              Pt[e + o - 1] == u &&
              Pt[e] == Pt[i] &&
              Pt[++e] == Pt[i + 1])
          ) {
            (i += 2), e++;
            do;
            while (
              Pt[++i] == Pt[++e] &&
              Pt[++i] == Pt[++e] &&
              Pt[++i] == Pt[++e] &&
              Pt[++i] == Pt[++e] &&
              Pt[++i] == Pt[++e] &&
              Pt[++i] == Pt[++e] &&
              Pt[++i] == Pt[++e] &&
              Pt[++i] == Pt[++e] &&
              i < l
            );
            if (((n = et - (l - i)), (i = l - et), n > o)) {
              if (((Ht = t), (o = n), n >= s)) break;
              (u = Pt[i + o - 1]), (h = Pt[i + o]);
            }
          }
        while ((t = 65535 & Et[t & c]) > a && 0 !== --r);
        return o <= Wt ? o : Wt;
      }
      function yt(t) {
        for (var e, n = 0; ; ) {
          if (Wt < nt) {
            if ((gt(), Wt < nt && t == C)) return U;
            if (0 === Wt) break;
          }
          if (
            (Wt >= tt &&
              ((Ft = ((Ft << jt) ^ (255 & Pt[Ut + (tt - 1)])) & Dt),
              (n = 65535 & Ot[Ft]),
              (Et[Ut & Tt] = Ot[Ft]),
              (Ot[Ft] = Ut)),
            0 !== n && ((Ut - n) & 65535) <= St - nt && Jt != k && (Nt = wt(n)),
            Nt >= tt)
          )
            if (
              ((e = ct(Ut - Ht, Nt - tt)), (Wt -= Nt), Nt <= Yt && Wt >= tt)
            ) {
              Nt--;
              do
                Ut++,
                  (Ft = ((Ft << jt) ^ (255 & Pt[Ut + (tt - 1)])) & Dt),
                  (n = 65535 & Ot[Ft]),
                  (Et[Ut & Tt] = Ot[Ft]),
                  (Ot[Ft] = Ut);
              while (0 !== --Nt);
              Ut++;
            } else
              (Ut += Nt),
                (Nt = 0),
                (Ft = 255 & Pt[Ut]),
                (Ft = ((Ft << jt) ^ (255 & Pt[Ut + 1])) & Dt);
          else (e = ct(0, 255 & Pt[Ut])), Wt--, Ut++;
          if (e && (pt(!1), 0 === xt.avail_out)) return U;
        }
        return (
          pt(t == q), 0 === xt.avail_out ? (t == q ? W : U) : t == q ? X : H
        );
      }
      function vt(t) {
        for (var e, n, r = 0; ; ) {
          if (Wt < nt) {
            if ((gt(), Wt < nt && t == C)) return U;
            if (0 === Wt) break;
          }
          if (
            (Wt >= tt &&
              ((Ft = ((Ft << jt) ^ (255 & Pt[Ut + (tt - 1)])) & Dt),
              (r = 65535 & Ot[Ft]),
              (Et[Ut & Tt] = Ot[Ft]),
              (Ot[Ft] = Ut)),
            (Xt = Nt),
            (Lt = Ht),
            (Nt = tt - 1),
            0 !== r &&
              Xt < Yt &&
              ((Ut - r) & 65535) <= St - nt &&
              (Jt != k && (Nt = wt(r)),
              Nt <= 5 &&
                (Jt == x || (Nt == tt && Ut - Ht > 4096)) &&
                (Nt = tt - 1)),
            Xt >= tt && Nt <= Xt)
          ) {
            (n = Ut + Wt - tt),
              (e = ct(Ut - 1 - Lt, Xt - tt)),
              (Wt -= Xt - 1),
              (Xt -= 2);
            do
              ++Ut <= n &&
                ((Ft = ((Ft << jt) ^ (255 & Pt[Ut + (tt - 1)])) & Dt),
                (r = 65535 & Ot[Ft]),
                (Et[Ut & Tt] = Ot[Ft]),
                (Ot[Ft] = Ut));
            while (0 !== --Xt);
            if (
              ((Mt = 0), (Nt = tt - 1), Ut++, e && (pt(!1), 0 === xt.avail_out))
            )
              return U;
          } else if (0 !== Mt) {
            if (
              ((e = ct(0, 255 & Pt[Ut - 1])),
              e && pt(!1),
              Ut++,
              Wt--,
              0 === xt.avail_out)
            )
              return U;
          } else (Mt = 1), Ut++, Wt--;
        }
        return (
          0 !== Mt && ((e = ct(0, 255 & Pt[Ut - 1])), (Mt = 0)),
          pt(t == q),
          0 === xt.avail_out ? (t == q ? W : U) : t == q ? X : H
        );
      }
      function bt(e) {
        return (
          (e.total_in = e.total_out = 0),
          (e.msg = null),
          (ee.pending = 0),
          (ee.pending_out = 0),
          (kt = G),
          (At = C),
          o(),
          t(),
          T
        );
      }
      var xt,
        kt,
        _t,
        Ct,
        At,
        St,
        qt,
        Tt,
        Pt,
        It,
        Et,
        Ot,
        Ft,
        Rt,
        Bt,
        Dt,
        jt,
        zt,
        Nt,
        Lt,
        Mt,
        Ut,
        Ht,
        Wt,
        Xt,
        Vt,
        Yt,
        Gt,
        Jt,
        Qt,
        Kt,
        $t,
        Zt,
        te,
        ee = this,
        ne = new e(),
        re = new e(),
        ie = new e();
      ee.depth = [];
      var oe, ae, se, ce, le, ue, he, fe;
      (ee.bl_count = []),
        (ee.heap = []),
        ($t = []),
        (Zt = []),
        (te = []),
        (ee.pqdownheap = function (t, e) {
          for (
            var n = ee.heap, r = n[e], o = e << 1;
            o <= ee.heap_len &&
            (o < ee.heap_len && i(t, n[o + 1], n[o], ee.depth) && o++,
            !i(t, r, n[o], ee.depth));

          )
            (n[e] = n[o]), (e = o), (o <<= 1);
          n[e] = r;
        }),
        (ee.deflateInit = function (t, e, n, r, i, o) {
          return (
            r || (r = Q),
            i || (i = D),
            o || (o = _),
            (t.msg = null),
            e == b && (e = 6),
            i < 1 ||
            i > B ||
            r != Q ||
            n < 9 ||
            n > 15 ||
            e < 0 ||
            e > 9 ||
            o < 0 ||
            o > k
              ? E
              : ((t.dstate = ee),
                (qt = n),
                (St = 1 << qt),
                (Tt = St - 1),
                (Bt = i + 7),
                (Rt = 1 << Bt),
                (Dt = Rt - 1),
                (jt = Math.floor((Bt + tt - 1) / tt)),
                (Pt = new Uint8Array(2 * St)),
                (Et = []),
                (Ot = []),
                (ae = 1 << (i + 6)),
                (ee.pending_buf = new Uint8Array(4 * ae)),
                (_t = 4 * ae),
                (ce = Math.floor(ae / 2)),
                (oe = 3 * ae),
                (Gt = e),
                (Jt = o),
                (Ct = 255 & r),
                bt(t))
          );
        }),
        (ee.deflateEnd = function () {
          return kt != Y && kt != G && kt != J
            ? E
            : ((ee.pending_buf = null),
              (Ot = null),
              (Et = null),
              (Pt = null),
              (ee.dstate = null),
              kt == G ? O : T);
        }),
        (ee.deflateParams = function (t, e, n) {
          var r = T;
          return (
            e == b && (e = 6),
            e < 0 || e > 9 || n < 0 || n > k
              ? E
              : (L[Gt].func != L[e].func &&
                  0 !== t.total_in &&
                  (r = t.deflate(A)),
                Gt != e &&
                  ((Gt = e),
                  (Yt = L[Gt].max_lazy),
                  (Qt = L[Gt].good_length),
                  (Kt = L[Gt].nice_length),
                  (Vt = L[Gt].max_chain)),
                (Jt = n),
                r)
          );
        }),
        (ee.deflateSetDictionary = function (t, e, n) {
          var r,
            i = n,
            o = 0;
          if (!e || kt != Y) return E;
          if (i < tt) return T;
          for (
            i > St - nt && ((i = St - nt), (o = n - i)),
              Pt.set(e.subarray(o, o + i), 0),
              Ut = i,
              zt = i,
              Ft = 255 & Pt[0],
              Ft = ((Ft << jt) ^ (255 & Pt[1])) & Dt,
              r = 0;
            r <= i - tt;
            r++
          )
            (Ft = ((Ft << jt) ^ (255 & Pt[r + (tt - 1)])) & Dt),
              (Et[r & Tt] = Ot[Ft]),
              (Ot[Ft] = r);
          return T;
        }),
        (ee.deflate = function (t, e) {
          var n, r, i, o, a;
          if (e > q || e < 0) return E;
          if (
            !t.next_out ||
            (!t.next_in && 0 !== t.avail_in) ||
            (kt == J && e != q)
          )
            return (t.msg = M[I - E]), E;
          if (0 === t.avail_out) return (t.msg = M[I - F]), F;
          if (
            ((xt = t),
            (o = At),
            (At = e),
            kt == Y &&
              ((r = (Q + ((qt - 8) << 4)) << 8),
              (i = ((Gt - 1) & 255) >> 1),
              i > 3 && (i = 3),
              (r |= i << 6),
              0 !== Ut && (r |= V),
              (r += 31 - (r % 31)),
              (kt = G),
              g(r)),
            0 !== ee.pending)
          ) {
            if ((xt.flush_pending(), 0 === xt.avail_out)) return (At = -1), T;
          } else if (0 === xt.avail_in && e <= o && e != q)
            return (xt.msg = M[I - F]), F;
          if (kt == J && 0 !== xt.avail_in) return (t.msg = M[I - F]), F;
          if (0 !== xt.avail_in || 0 !== Wt || (e != C && kt != J)) {
            switch (((a = -1), L[Gt].func)) {
              case j:
                a = mt(e);
                break;
              case z:
                a = yt(e);
                break;
              case N:
                a = vt(e);
            }
            if (((a != W && a != X) || (kt = J), a == U || a == W))
              return 0 === xt.avail_out && (At = -1), T;
            if (a == H) {
              if (e == A) st();
              else if ((ft(0, 0, !1), e == S))
                for (n = 0; n < Rt; n++) Ot[n] = 0;
              if ((xt.flush_pending(), 0 === xt.avail_out)) return (At = -1), T;
            }
          }
          return e != q ? T : P;
        });
    }
    function a() {
      var t = this;
      (t.next_in_index = 0),
        (t.next_out_index = 0),
        (t.avail_in = 0),
        (t.total_in = 0),
        (t.avail_out = 0),
        (t.total_out = 0);
    }
    var s = 15,
      c = 30,
      l = 19,
      u = 29,
      h = 256,
      f = h + 1 + u,
      d = 2 * f + 1,
      p = 256,
      g = 7,
      m = 16,
      w = 17,
      y = 18,
      v = 16,
      b = -1,
      x = 1,
      k = 2,
      _ = 0,
      C = 0,
      A = 1,
      S = 3,
      q = 4,
      T = 0,
      P = 1,
      I = 2,
      E = -2,
      O = -3,
      F = -5,
      R = [
        0, 1, 2, 3, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8,
        9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
        10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
        11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
        12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13,
        13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13,
        13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14,
        14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14,
        14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14,
        14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14,
        14, 14, 14, 14, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
        15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
        15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
        15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 0, 0, 16, 17,
        18, 18, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22,
        22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24,
        24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
        25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26,
        26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26,
        26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27,
        27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28, 28,
        28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
        28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
        28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
        28, 28, 28, 28, 28, 28, 28, 28, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29,
        29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29,
        29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29,
        29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29,
      ];
    (e._length_code = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 12, 12, 13,
      13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16,
      16, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 19,
      19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
      20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
      21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
      22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24,
      24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
      24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25,
      25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
      25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26,
      26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26,
      26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27,
      27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27,
      28,
    ]),
      (e.base_length = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56,
        64, 80, 96, 112, 128, 160, 192, 224, 0,
      ]),
      (e.base_dist = [
        0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384,
        512, 768, 1024, 1536, 2048, 3072, 4096, 6144, 8192, 12288, 16384, 24576,
      ]),
      (e.d_code = function (t) {
        return t < 256 ? R[t] : R[256 + (t >>> 7)];
      }),
      (e.extra_lbits = [
        0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4,
        5, 5, 5, 5, 0,
      ]),
      (e.extra_dbits = [
        0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
        10, 11, 11, 12, 12, 13, 13,
      ]),
      (e.extra_blbits = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7,
      ]),
      (e.bl_order = [
        16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
      ]),
      (n.static_ltree = [
        12, 8, 140, 8, 76, 8, 204, 8, 44, 8, 172, 8, 108, 8, 236, 8, 28, 8, 156,
        8, 92, 8, 220, 8, 60, 8, 188, 8, 124, 8, 252, 8, 2, 8, 130, 8, 66, 8,
        194, 8, 34, 8, 162, 8, 98, 8, 226, 8, 18, 8, 146, 8, 82, 8, 210, 8, 50,
        8, 178, 8, 114, 8, 242, 8, 10, 8, 138, 8, 74, 8, 202, 8, 42, 8, 170, 8,
        106, 8, 234, 8, 26, 8, 154, 8, 90, 8, 218, 8, 58, 8, 186, 8, 122, 8,
        250, 8, 6, 8, 134, 8, 70, 8, 198, 8, 38, 8, 166, 8, 102, 8, 230, 8, 22,
        8, 150, 8, 86, 8, 214, 8, 54, 8, 182, 8, 118, 8, 246, 8, 14, 8, 142, 8,
        78, 8, 206, 8, 46, 8, 174, 8, 110, 8, 238, 8, 30, 8, 158, 8, 94, 8, 222,
        8, 62, 8, 190, 8, 126, 8, 254, 8, 1, 8, 129, 8, 65, 8, 193, 8, 33, 8,
        161, 8, 97, 8, 225, 8, 17, 8, 145, 8, 81, 8, 209, 8, 49, 8, 177, 8, 113,
        8, 241, 8, 9, 8, 137, 8, 73, 8, 201, 8, 41, 8, 169, 8, 105, 8, 233, 8,
        25, 8, 153, 8, 89, 8, 217, 8, 57, 8, 185, 8, 121, 8, 249, 8, 5, 8, 133,
        8, 69, 8, 197, 8, 37, 8, 165, 8, 101, 8, 229, 8, 21, 8, 149, 8, 85, 8,
        213, 8, 53, 8, 181, 8, 117, 8, 245, 8, 13, 8, 141, 8, 77, 8, 205, 8, 45,
        8, 173, 8, 109, 8, 237, 8, 29, 8, 157, 8, 93, 8, 221, 8, 61, 8, 189, 8,
        125, 8, 253, 8, 19, 9, 275, 9, 147, 9, 403, 9, 83, 9, 339, 9, 211, 9,
        467, 9, 51, 9, 307, 9, 179, 9, 435, 9, 115, 9, 371, 9, 243, 9, 499, 9,
        11, 9, 267, 9, 139, 9, 395, 9, 75, 9, 331, 9, 203, 9, 459, 9, 43, 9,
        299, 9, 171, 9, 427, 9, 107, 9, 363, 9, 235, 9, 491, 9, 27, 9, 283, 9,
        155, 9, 411, 9, 91, 9, 347, 9, 219, 9, 475, 9, 59, 9, 315, 9, 187, 9,
        443, 9, 123, 9, 379, 9, 251, 9, 507, 9, 7, 9, 263, 9, 135, 9, 391, 9,
        71, 9, 327, 9, 199, 9, 455, 9, 39, 9, 295, 9, 167, 9, 423, 9, 103, 9,
        359, 9, 231, 9, 487, 9, 23, 9, 279, 9, 151, 9, 407, 9, 87, 9, 343, 9,
        215, 9, 471, 9, 55, 9, 311, 9, 183, 9, 439, 9, 119, 9, 375, 9, 247, 9,
        503, 9, 15, 9, 271, 9, 143, 9, 399, 9, 79, 9, 335, 9, 207, 9, 463, 9,
        47, 9, 303, 9, 175, 9, 431, 9, 111, 9, 367, 9, 239, 9, 495, 9, 31, 9,
        287, 9, 159, 9, 415, 9, 95, 9, 351, 9, 223, 9, 479, 9, 63, 9, 319, 9,
        191, 9, 447, 9, 127, 9, 383, 9, 255, 9, 511, 9, 0, 7, 64, 7, 32, 7, 96,
        7, 16, 7, 80, 7, 48, 7, 112, 7, 8, 7, 72, 7, 40, 7, 104, 7, 24, 7, 88,
        7, 56, 7, 120, 7, 4, 7, 68, 7, 36, 7, 100, 7, 20, 7, 84, 7, 52, 7, 116,
        7, 3, 8, 131, 8, 67, 8, 195, 8, 35, 8, 163, 8, 99, 8, 227, 8,
      ]),
      (n.static_dtree = [
        0, 5, 16, 5, 8, 5, 24, 5, 4, 5, 20, 5, 12, 5, 28, 5, 2, 5, 18, 5, 10, 5,
        26, 5, 6, 5, 22, 5, 14, 5, 30, 5, 1, 5, 17, 5, 9, 5, 25, 5, 5, 5, 21, 5,
        13, 5, 29, 5, 3, 5, 19, 5, 11, 5, 27, 5, 7, 5, 23, 5,
      ]),
      (n.static_l_desc = new n(n.static_ltree, e.extra_lbits, h + 1, f, s)),
      (n.static_d_desc = new n(n.static_dtree, e.extra_dbits, 0, c, s)),
      (n.static_bl_desc = new n(null, e.extra_blbits, 0, l, g));
    var B = 9,
      D = 8,
      j = 0,
      z = 1,
      N = 2,
      L = [
        new r(0, 0, 0, 0, j),
        new r(4, 4, 8, 4, z),
        new r(4, 5, 16, 8, z),
        new r(4, 6, 32, 32, z),
        new r(4, 4, 16, 16, N),
        new r(8, 16, 32, 32, N),
        new r(8, 16, 128, 128, N),
        new r(8, 32, 128, 256, N),
        new r(32, 128, 258, 1024, N),
        new r(32, 258, 258, 4096, N),
      ],
      M = [
        "need dictionary",
        "stream end",
        "",
        "",
        "stream error",
        "data error",
        "",
        "buffer error",
        "",
        "",
      ],
      U = 0,
      H = 1,
      W = 2,
      X = 3,
      V = 32,
      Y = 42,
      G = 113,
      J = 666,
      Q = 8,
      K = 0,
      $ = 1,
      Z = 2,
      tt = 3,
      et = 258,
      nt = et + tt + 1;
    return (
      (a.prototype = {
        deflateInit: function (t, e) {
          var n = this;
          return (
            (n.dstate = new o()), e || (e = s), n.dstate.deflateInit(n, t, e)
          );
        },
        deflate: function (t) {
          var e = this;
          return e.dstate ? e.dstate.deflate(e, t) : E;
        },
        deflateEnd: function () {
          var t = this;
          if (!t.dstate) return E;
          var e = t.dstate.deflateEnd();
          return (t.dstate = null), e;
        },
        deflateParams: function (t, e) {
          var n = this;
          return n.dstate ? n.dstate.deflateParams(n, t, e) : E;
        },
        deflateSetDictionary: function (t, e) {
          var n = this;
          return n.dstate ? n.dstate.deflateSetDictionary(n, t, e) : E;
        },
        read_buf: function (t, e, n) {
          var r = this,
            i = r.avail_in;
          return (
            i > n && (i = n),
            0 === i
              ? 0
              : ((r.avail_in -= i),
                t.set(
                  r.next_in.subarray(r.next_in_index, r.next_in_index + i),
                  e
                ),
                (r.next_in_index += i),
                (r.total_in += i),
                i)
          );
        },
        flush_pending: function () {
          var t = this,
            e = t.dstate.pending;
          e > t.avail_out && (e = t.avail_out),
            0 !== e &&
              (t.next_out.set(
                t.dstate.pending_buf.subarray(
                  t.dstate.pending_out,
                  t.dstate.pending_out + e
                ),
                t.next_out_index
              ),
              (t.next_out_index += e),
              (t.dstate.pending_out += e),
              (t.total_out += e),
              (t.avail_out -= e),
              (t.dstate.pending -= e),
              0 === t.dstate.pending && (t.dstate.pending_out = 0));
        },
      }),
      function (t) {
        var e = this,
          n = new a(),
          r = 512,
          i = C,
          o = new Uint8Array(r);
        "undefined" == typeof t && (t = b),
          n.deflateInit(t),
          (n.next_out = o),
          (e.append = function (t, e) {
            var a,
              s,
              c = [],
              l = 0,
              u = 0,
              h = 0;
            if (t.length) {
              (n.next_in_index = 0), (n.next_in = t), (n.avail_in = t.length);
              do {
                if (
                  ((n.next_out_index = 0),
                  (n.avail_out = r),
                  (a = n.deflate(i)),
                  a != T)
                )
                  throw "deflating: " + n.msg;
                n.next_out_index &&
                  (n.next_out_index == r
                    ? c.push(new Uint8Array(o))
                    : c.push(new Uint8Array(o.subarray(0, n.next_out_index)))),
                  (h += n.next_out_index),
                  e &&
                    n.next_in_index > 0 &&
                    n.next_in_index != l &&
                    (e(n.next_in_index), (l = n.next_in_index));
              } while (n.avail_in > 0 || 0 === n.avail_out);
              return (
                (s = new Uint8Array(h)),
                c.forEach(function (t) {
                  s.set(t, u), (u += t.length);
                }),
                s
              );
            }
          }),
          (e.flush = function () {
            var t,
              e,
              i = [],
              a = 0,
              s = 0;
            do {
              if (
                ((n.next_out_index = 0),
                (n.avail_out = r),
                (t = n.deflate(q)),
                t != P && t != T)
              )
                throw "deflating: " + n.msg;
              r - n.avail_out > 0 &&
                i.push(new Uint8Array(o.subarray(0, n.next_out_index))),
                (s += n.next_out_index);
            } while (n.avail_in > 0 || 0 === n.avail_out);
            return (
              n.deflateEnd(),
              (e = new Uint8Array(s)),
              i.forEach(function (t) {
                e.set(t, a), (a += t.length);
              }),
              e
            );
          });
      }
    );
  })(void 0); /*
  html2canvas 0.5.0-beta3 <http://html2canvas.hertzen.com>
  Copyright (c) 2016 Niklas von Hertzen

  Released under  License
*/
  !(function (t) {
    if ("object" == typeof exports && "undefined" != typeof module)
      module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
      var e;
      "undefined" != typeof window
        ? (e = window)
        : "undefined" != typeof global
        ? (e = global)
        : "undefined" != typeof self && (e = self),
        (e.html2canvas = t());
    }
  })(function () {
    var t;
    return (function t(e, n, r) {
      function i(a, s) {
        if (!n[a]) {
          if (!e[a]) {
            var c = "function" == typeof require && require;
            if (!s && c) return c(a, !0);
            if (o) return o(a, !0);
            var l = new Error("Cannot find module '" + a + "'");
            throw ((l.code = "MODULE_NOT_FOUND"), l);
          }
          var u = (n[a] = { exports: {} });
          e[a][0].call(
            u.exports,
            function (t) {
              var n = e[a][1][t];
              return i(n ? n : t);
            },
            u,
            u.exports,
            t,
            e,
            n,
            r
          );
        }
        return n[a].exports;
      }
      for (
        var o = "function" == typeof require && require, a = 0;
        a < r.length;
        a++
      )
        i(r[a]);
      return i;
    })(
      {
        1: [
          function (e, n, r) {
            (function (e) {
              !(function (i) {
                function o(t) {
                  throw RangeError(R[t]);
                }
                function a(t, e) {
                  for (var n = t.length; n--; ) t[n] = e(t[n]);
                  return t;
                }
                function s(t, e) {
                  return a(t.split(F), e).join(".");
                }
                function c(t) {
                  for (var e, n, r = [], i = 0, o = t.length; i < o; )
                    (e = t.charCodeAt(i++)),
                      e >= 55296 && e <= 56319 && i < o
                        ? ((n = t.charCodeAt(i++)),
                          56320 == (64512 & n)
                            ? r.push(((1023 & e) << 10) + (1023 & n) + 65536)
                            : (r.push(e), i--))
                        : r.push(e);
                  return r;
                }
                function l(t) {
                  return a(t, function (t) {
                    var e = "";
                    return (
                      t > 65535 &&
                        ((t -= 65536),
                        (e += j(((t >>> 10) & 1023) | 55296)),
                        (t = 56320 | (1023 & t))),
                      (e += j(t))
                    );
                  }).join("");
                }
                function u(t) {
                  return t - 48 < 10
                    ? t - 22
                    : t - 65 < 26
                    ? t - 65
                    : t - 97 < 26
                    ? t - 97
                    : _;
                }
                function h(t, e) {
                  return t + 22 + 75 * (t < 26) - ((0 != e) << 5);
                }
                function f(t, e, n) {
                  var r = 0;
                  for (
                    t = n ? D(t / q) : t >> 1, t += D(t / e);
                    t > (B * A) >> 1;
                    r += _
                  )
                    t = D(t / B);
                  return D(r + ((B + 1) * t) / (t + S));
                }
                function d(t) {
                  var e,
                    n,
                    r,
                    i,
                    a,
                    s,
                    c,
                    h,
                    d,
                    p,
                    g = [],
                    m = t.length,
                    w = 0,
                    y = P,
                    v = T;
                  for (
                    n = t.lastIndexOf(I), n < 0 && (n = 0), r = 0;
                    r < n;
                    ++r
                  )
                    t.charCodeAt(r) >= 128 && o("not-basic"),
                      g.push(t.charCodeAt(r));
                  for (i = n > 0 ? n + 1 : 0; i < m; ) {
                    for (
                      a = w, s = 1, c = _;
                      i >= m && o("invalid-input"),
                        (h = u(t.charCodeAt(i++))),
                        (h >= _ || h > D((k - w) / s)) && o("overflow"),
                        (w += h * s),
                        (d = c <= v ? C : c >= v + A ? A : c - v),
                        !(h < d);
                      c += _
                    )
                      (p = _ - d), s > D(k / p) && o("overflow"), (s *= p);
                    (e = g.length + 1),
                      (v = f(w - a, e, 0 == a)),
                      D(w / e) > k - y && o("overflow"),
                      (y += D(w / e)),
                      (w %= e),
                      g.splice(w++, 0, y);
                  }
                  return l(g);
                }
                function p(t) {
                  var e,
                    n,
                    r,
                    i,
                    a,
                    s,
                    l,
                    u,
                    d,
                    p,
                    g,
                    m,
                    w,
                    y,
                    v,
                    b = [];
                  for (
                    t = c(t), m = t.length, e = P, n = 0, a = T, s = 0;
                    s < m;
                    ++s
                  )
                    (g = t[s]), g < 128 && b.push(j(g));
                  for (r = i = b.length, i && b.push(I); r < m; ) {
                    for (l = k, s = 0; s < m; ++s)
                      (g = t[s]), g >= e && g < l && (l = g);
                    for (
                      w = r + 1,
                        l - e > D((k - n) / w) && o("overflow"),
                        n += (l - e) * w,
                        e = l,
                        s = 0;
                      s < m;
                      ++s
                    )
                      if (
                        ((g = t[s]), g < e && ++n > k && o("overflow"), g == e)
                      ) {
                        for (
                          u = n, d = _;
                          (p = d <= a ? C : d >= a + A ? A : d - a), !(u < p);
                          d += _
                        )
                          (v = u - p),
                            (y = _ - p),
                            b.push(j(h(p + (v % y), 0))),
                            (u = D(v / y));
                        b.push(j(h(u, 0))), (a = f(n, w, r == i)), (n = 0), ++r;
                      }
                    ++n, ++e;
                  }
                  return b.join("");
                }
                function g(t) {
                  return s(t, function (t) {
                    return E.test(t) ? d(t.slice(4).toLowerCase()) : t;
                  });
                }
                function m(t) {
                  return s(t, function (t) {
                    return O.test(t) ? "xn--" + p(t) : t;
                  });
                }
                var w = "object" == typeof r && r,
                  y = "object" == typeof n && n && n.exports == w && n,
                  v = "object" == typeof e && e;
                (v.global !== v && v.window !== v) || (i = v);
                var b,
                  x,
                  k = 2147483647,
                  _ = 36,
                  C = 1,
                  A = 26,
                  S = 38,
                  q = 700,
                  T = 72,
                  P = 128,
                  I = "-",
                  E = /^xn--/,
                  O = /[^ -~]/,
                  F = /\x2E|\u3002|\uFF0E|\uFF61/g,
                  R = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic":
                      "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input",
                  },
                  B = _ - C,
                  D = Math.floor,
                  j = String.fromCharCode;
                if (
                  ((b = {
                    version: "1.2.4",
                    ucs2: { decode: c, encode: l },
                    decode: d,
                    encode: p,
                    toASCII: m,
                    toUnicode: g,
                  }),
                  "function" == typeof t && "object" == typeof t.amd && t.amd)
                )
                  t("punycode", function () {
                    return b;
                  });
                else if (w && !w.nodeType)
                  if (y) y.exports = b;
                  else for (x in b) b.hasOwnProperty(x) && (w[x] = b[x]);
                else i.punycode = b;
              })(this);
            }).call(
              this,
              "undefined" != typeof global
                ? global
                : "undefined" != typeof self
                ? self
                : "undefined" != typeof window
                ? window
                : {}
            );
          },
          {},
        ],
        2: [
          function (t, e, n) {
            function r(t, e, n) {
              !t.defaultView ||
                (e === t.defaultView.pageXOffset &&
                  n === t.defaultView.pageYOffset) ||
                t.defaultView.scrollTo(e, n);
            }
            function i(t, e) {
              try {
                e &&
                  ((e.width = t.width),
                  (e.height = t.height),
                  e
                    .getContext("2d")
                    .putImageData(
                      t.getContext("2d").getImageData(0, 0, t.width, t.height),
                      0,
                      0
                    ));
              } catch (e) {
                s("Unable to copy canvas content from", t, e);
              }
            }
            function o(t, e) {
              for (
                var n =
                    3 === t.nodeType
                      ? document.createTextNode(t.nodeValue)
                      : t.cloneNode(!1),
                  r = t.firstChild;
                r;

              )
                (e !== !0 && 1 === r.nodeType && "SCRIPT" === r.nodeName) ||
                  n.appendChild(o(r, e)),
                  (r = r.nextSibling);
              return (
                1 === t.nodeType &&
                  ((n._scrollTop = t.scrollTop),
                  (n._scrollLeft = t.scrollLeft),
                  "CANVAS" === t.nodeName
                    ? i(t, n)
                    : ("TEXTAREA" !== t.nodeName && "SELECT" !== t.nodeName) ||
                      (n.value = t.value)),
                n
              );
            }
            function a(t) {
              if (1 === t.nodeType) {
                (t.scrollTop = t._scrollTop), (t.scrollLeft = t._scrollLeft);
                for (var e = t.firstChild; e; ) a(e), (e = e.nextSibling);
              }
            }
            var s = t("./log");
            e.exports = function (t, e, n, i, s, c, l) {
              var u = o(t.documentElement, s.javascriptEnabled),
                h = e.createElement("iframe");
              return (
                (h.className = "html2canvas-container"),
                (h.style.visibility = "hidden"),
                (h.style.position = "fixed"),
                (h.style.left = "-10000px"),
                (h.style.top = "0px"),
                (h.style.border = "0"),
                (h.width = n),
                (h.height = i),
                (h.scrolling = "no"),
                e.body.appendChild(h),
                new Promise(function (e) {
                  var n = h.contentWindow.document;
                  (h.contentWindow.onload = h.onload =
                    function () {
                      var t = setInterval(function () {
                        n.body.childNodes.length > 0 &&
                          (a(n.documentElement),
                          clearInterval(t),
                          "view" === s.type &&
                            (h.contentWindow.scrollTo(c, l),
                            !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) ||
                              (h.contentWindow.scrollY === l &&
                                h.contentWindow.scrollX === c) ||
                              ((n.documentElement.style.top = -l + "px"),
                              (n.documentElement.style.left = -c + "px"),
                              (n.documentElement.style.position = "absolute"))),
                          e(h));
                      }, 50);
                    }),
                    n.open(),
                    n.write("<!DOCTYPE html><html></html>"),
                    r(t, c, l),
                    n.replaceChild(n.adoptNode(u), n.documentElement),
                    n.close();
                })
              );
            };
          },
          { "./log": 13 },
        ],
        3: [
          function (t, e, n) {
            function r(t) {
              (this.r = 0), (this.g = 0), (this.b = 0), (this.a = null);
              this.fromArray(t) ||
                this.namedColor(t) ||
                this.rgb(t) ||
                this.rgba(t) ||
                this.hex6(t) ||
                this.hex3(t);
            }
            (r.prototype.darken = function (t) {
              var e = 1 - t;
              return new r([
                Math.round(this.r * e),
                Math.round(this.g * e),
                Math.round(this.b * e),
                this.a,
              ]);
            }),
              (r.prototype.isTransparent = function () {
                return 0 === this.a;
              }),
              (r.prototype.isBlack = function () {
                return 0 === this.r && 0 === this.g && 0 === this.b;
              }),
              (r.prototype.fromArray = function (t) {
                return (
                  Array.isArray(t) &&
                    ((this.r = Math.min(t[0], 255)),
                    (this.g = Math.min(t[1], 255)),
                    (this.b = Math.min(t[2], 255)),
                    t.length > 3 && (this.a = t[3])),
                  Array.isArray(t)
                );
              });
            var i = /^#([a-f0-9]{3})$/i;
            r.prototype.hex3 = function (t) {
              var e = null;
              return (
                null !== (e = t.match(i)) &&
                  ((this.r = parseInt(e[1][0] + e[1][0], 16)),
                  (this.g = parseInt(e[1][1] + e[1][1], 16)),
                  (this.b = parseInt(e[1][2] + e[1][2], 16))),
                null !== e
              );
            };
            var o = /^#([a-f0-9]{6})$/i;
            r.prototype.hex6 = function (t) {
              var e = null;
              return (
                null !== (e = t.match(o)) &&
                  ((this.r = parseInt(e[1].substring(0, 2), 16)),
                  (this.g = parseInt(e[1].substring(2, 4), 16)),
                  (this.b = parseInt(e[1].substring(4, 6), 16))),
                null !== e
              );
            };
            var a = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
            r.prototype.rgb = function (t) {
              var e = null;
              return (
                null !== (e = t.match(a)) &&
                  ((this.r = Number(e[1])),
                  (this.g = Number(e[2])),
                  (this.b = Number(e[3]))),
                null !== e
              );
            };
            var s =
              /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/;
            (r.prototype.rgba = function (t) {
              var e = null;
              return (
                null !== (e = t.match(s)) &&
                  ((this.r = Number(e[1])),
                  (this.g = Number(e[2])),
                  (this.b = Number(e[3])),
                  (this.a = Number(e[4]))),
                null !== e
              );
            }),
              (r.prototype.toString = function () {
                return null !== this.a && 1 !== this.a
                  ? "rgba(" + [this.r, this.g, this.b, this.a].join(",") + ")"
                  : "rgb(" + [this.r, this.g, this.b].join(",") + ")";
              }),
              (r.prototype.namedColor = function (t) {
                t = t.toLowerCase();
                var e = c[t];
                if (e) (this.r = e[0]), (this.g = e[1]), (this.b = e[2]);
                else if ("transparent" === t)
                  return (this.r = this.g = this.b = this.a = 0), !0;
                return !!e;
              }),
              (r.prototype.isColor = !0);
            var c = {
              aliceblue: [240, 248, 255],
              antiquewhite: [250, 235, 215],
              aqua: [0, 255, 255],
              aquamarine: [127, 255, 212],
              azure: [240, 255, 255],
              beige: [245, 245, 220],
              bisque: [255, 228, 196],
              black: [0, 0, 0],
              blanchedalmond: [255, 235, 205],
              blue: [0, 0, 255],
              blueviolet: [138, 43, 226],
              brown: [165, 42, 42],
              burlywood: [222, 184, 135],
              cadetblue: [95, 158, 160],
              chartreuse: [127, 255, 0],
              chocolate: [210, 105, 30],
              coral: [255, 127, 80],
              cornflowerblue: [100, 149, 237],
              cornsilk: [255, 248, 220],
              crimson: [220, 20, 60],
              cyan: [0, 255, 255],
              darkblue: [0, 0, 139],
              darkcyan: [0, 139, 139],
              darkgoldenrod: [184, 134, 11],
              darkgray: [169, 169, 169],
              darkgreen: [0, 100, 0],
              darkgrey: [169, 169, 169],
              darkkhaki: [189, 183, 107],
              darkmagenta: [139, 0, 139],
              darkolivegreen: [85, 107, 47],
              darkorange: [255, 140, 0],
              darkorchid: [153, 50, 204],
              darkred: [139, 0, 0],
              darksalmon: [233, 150, 122],
              darkseagreen: [143, 188, 143],
              darkslateblue: [72, 61, 139],
              darkslategray: [47, 79, 79],
              darkslategrey: [47, 79, 79],
              darkturquoise: [0, 206, 209],
              darkviolet: [148, 0, 211],
              deeppink: [255, 20, 147],
              deepskyblue: [0, 191, 255],
              dimgray: [105, 105, 105],
              dimgrey: [105, 105, 105],
              dodgerblue: [30, 144, 255],
              firebrick: [178, 34, 34],
              floralwhite: [255, 250, 240],
              forestgreen: [34, 139, 34],
              fuchsia: [255, 0, 255],
              gainsboro: [220, 220, 220],
              ghostwhite: [248, 248, 255],
              gold: [255, 215, 0],
              goldenrod: [218, 165, 32],
              gray: [128, 128, 128],
              green: [0, 128, 0],
              greenyellow: [173, 255, 47],
              grey: [128, 128, 128],
              honeydew: [240, 255, 240],
              hotpink: [255, 105, 180],
              indianred: [205, 92, 92],
              indigo: [75, 0, 130],
              ivory: [255, 255, 240],
              khaki: [240, 230, 140],
              lavender: [230, 230, 250],
              lavenderblush: [255, 240, 245],
              lawngreen: [124, 252, 0],
              lemonchiffon: [255, 250, 205],
              lightblue: [173, 216, 230],
              lightcoral: [240, 128, 128],
              lightcyan: [224, 255, 255],
              lightgoldenrodyellow: [250, 250, 210],
              lightgray: [211, 211, 211],
              lightgreen: [144, 238, 144],
              lightgrey: [211, 211, 211],
              lightpink: [255, 182, 193],
              lightsalmon: [255, 160, 122],
              lightseagreen: [32, 178, 170],
              lightskyblue: [135, 206, 250],
              lightslategray: [119, 136, 153],
              lightslategrey: [119, 136, 153],
              lightsteelblue: [176, 196, 222],
              lightyellow: [255, 255, 224],
              lime: [0, 255, 0],
              limegreen: [50, 205, 50],
              linen: [250, 240, 230],
              magenta: [255, 0, 255],
              maroon: [128, 0, 0],
              mediumaquamarine: [102, 205, 170],
              mediumblue: [0, 0, 205],
              mediumorchid: [186, 85, 211],
              mediumpurple: [147, 112, 219],
              mediumseagreen: [60, 179, 113],
              mediumslateblue: [123, 104, 238],
              mediumspringgreen: [0, 250, 154],
              mediumturquoise: [72, 209, 204],
              mediumvioletred: [199, 21, 133],
              midnightblue: [25, 25, 112],
              mintcream: [245, 255, 250],
              mistyrose: [255, 228, 225],
              moccasin: [255, 228, 181],
              navajowhite: [255, 222, 173],
              navy: [0, 0, 128],
              oldlace: [253, 245, 230],
              olive: [128, 128, 0],
              olivedrab: [107, 142, 35],
              orange: [255, 165, 0],
              orangered: [255, 69, 0],
              orchid: [218, 112, 214],
              palegoldenrod: [238, 232, 170],
              palegreen: [152, 251, 152],
              paleturquoise: [175, 238, 238],
              palevioletred: [219, 112, 147],
              papayawhip: [255, 239, 213],
              peachpuff: [255, 218, 185],
              peru: [205, 133, 63],
              pink: [255, 192, 203],
              plum: [221, 160, 221],
              powderblue: [176, 224, 230],
              purple: [128, 0, 128],
              rebeccapurple: [102, 51, 153],
              red: [255, 0, 0],
              rosybrown: [188, 143, 143],
              royalblue: [65, 105, 225],
              saddlebrown: [139, 69, 19],
              salmon: [250, 128, 114],
              sandybrown: [244, 164, 96],
              seagreen: [46, 139, 87],
              seashell: [255, 245, 238],
              sienna: [160, 82, 45],
              silver: [192, 192, 192],
              skyblue: [135, 206, 235],
              slateblue: [106, 90, 205],
              slategray: [112, 128, 144],
              slategrey: [112, 128, 144],
              snow: [255, 250, 250],
              springgreen: [0, 255, 127],
              steelblue: [70, 130, 180],
              tan: [210, 180, 140],
              teal: [0, 128, 128],
              thistle: [216, 191, 216],
              tomato: [255, 99, 71],
              turquoise: [64, 224, 208],
              violet: [238, 130, 238],
              wheat: [245, 222, 179],
              white: [255, 255, 255],
              whitesmoke: [245, 245, 245],
              yellow: [255, 255, 0],
              yellowgreen: [154, 205, 50],
            };
            e.exports = r;
          },
          {},
        ],
        4: [
          function (e, n, r) {
            function i(t, e) {
              var n = _++;
              if (
                ((e = e || {}),
                e.logging &&
                  ((w.options.logging = !0), (w.options.start = Date.now())),
                (e.async = "undefined" == typeof e.async || e.async),
                (e.allowTaint =
                  "undefined" != typeof e.allowTaint && e.allowTaint),
                (e.removeContainer =
                  "undefined" == typeof e.removeContainer || e.removeContainer),
                (e.javascriptEnabled =
                  "undefined" != typeof e.javascriptEnabled &&
                  e.javascriptEnabled),
                (e.imageTimeout =
                  "undefined" == typeof e.imageTimeout ? 1e4 : e.imageTimeout),
                (e.renderer = "function" == typeof e.renderer ? e.renderer : d),
                (e.strict = !!e.strict),
                "string" == typeof t)
              ) {
                if ("string" != typeof e.proxy)
                  return Promise.reject(
                    "Proxy must be used when rendering url"
                  );
                var r = null != e.width ? e.width : window.innerWidth,
                  i = null != e.height ? e.height : window.innerHeight;
                return b(h(t), e.proxy, document, r, i, e).then(function (t) {
                  return a(
                    t.contentWindow.document.documentElement,
                    t,
                    e,
                    r,
                    i
                  );
                });
              }
              var s = (
                void 0 === t ? [document.documentElement] : t.length ? t : [t]
              )[0];
              return (
                s.setAttribute(k + n, n),
                o(
                  s.ownerDocument,
                  e,
                  s.ownerDocument.defaultView.innerWidth,
                  s.ownerDocument.defaultView.innerHeight,
                  n
                ).then(function (t) {
                  return (
                    "function" == typeof e.onrendered &&
                      (w(
                        "options.onrendered is deprecated, html2canvas returns a Promise containing the canvas"
                      ),
                      e.onrendered(t)),
                    t
                  );
                })
              );
            }
            function o(t, e, n, r, i) {
              return v(
                t,
                t,
                n,
                r,
                e,
                t.defaultView.pageXOffset,
                t.defaultView.pageYOffset
              ).then(function (o) {
                w("Document cloned");
                var s = k + i,
                  c = "[" + s + "='" + i + "']";
                t.querySelector(c).removeAttribute(s);
                var l = o.contentWindow,
                  u = l.document.querySelector(c),
                  h =
                    "function" == typeof e.onclone
                      ? Promise.resolve(e.onclone(l.document))
                      : Promise.resolve(!0);
                return h.then(function () {
                  return a(u, o, e, n, r);
                });
              });
            }
            function a(t, e, n, r, i) {
              var o = e.contentWindow,
                a = new f(o.document),
                h = new p(n, a),
                d = x(t),
                m = "view" === n.type ? r : l(o.document),
                y = "view" === n.type ? i : u(o.document),
                v = new n.renderer(m, y, h, n, document),
                b = new g(t, v, a, h, n);
              return b.ready.then(function () {
                w("Finished rendering");
                var r;
                return (
                  (r =
                    "view" === n.type
                      ? c(v.canvas, {
                          width: v.canvas.width,
                          height: v.canvas.height,
                          top: 0,
                          left: 0,
                          x: 0,
                          y: 0,
                        })
                      : t === o.document.body ||
                        t === o.document.documentElement ||
                        null != n.canvas
                      ? v.canvas
                      : c(v.canvas, {
                          width: null != n.width ? n.width : d.width,
                          height: null != n.height ? n.height : d.height,
                          top: d.top,
                          left: d.left,
                          x: 0,
                          y: 0,
                        })),
                  s(e, n),
                  r
                );
              });
            }
            function s(t, e) {
              e.removeContainer &&
                (t.parentNode.removeChild(t), w("Cleaned up container"));
            }
            function c(t, e) {
              var n = document.createElement("canvas"),
                r = Math.min(t.width - 1, Math.max(0, e.left)),
                i = Math.min(t.width, Math.max(1, e.left + e.width)),
                o = Math.min(t.height - 1, Math.max(0, e.top)),
                a = Math.min(t.height, Math.max(1, e.top + e.height));
              (n.width = e.width), (n.height = e.height);
              var s = i - r,
                c = a - o;
              return (
                w(
                  "Cropping canvas at:",
                  "left:",
                  e.left,
                  "top:",
                  e.top,
                  "width:",
                  s,
                  "height:",
                  c
                ),
                w(
                  "Resulting crop with width",
                  e.width,
                  "and height",
                  e.height,
                  "with x",
                  r,
                  "and y",
                  o
                ),
                n.getContext("2d").drawImage(t, r, o, s, c, e.x, e.y, s, c),
                n
              );
            }
            function l(t) {
              return Math.max(
                Math.max(t.body.scrollWidth, t.documentElement.scrollWidth),
                Math.max(t.body.offsetWidth, t.documentElement.offsetWidth),
                Math.max(t.body.clientWidth, t.documentElement.clientWidth)
              );
            }
            function u(t) {
              return Math.max(
                Math.max(t.body.scrollHeight, t.documentElement.scrollHeight),
                Math.max(t.body.offsetHeight, t.documentElement.offsetHeight),
                Math.max(t.body.clientHeight, t.documentElement.clientHeight)
              );
            }
            function h(t) {
              var e = document.createElement("a");
              return (e.href = t), (e.href = e.href), e;
            }
            var f = e("./support"),
              d = e("./renderers/canvas"),
              p = e("./imageloader"),
              g = e("./nodeparser"),
              m = e("./nodecontainer"),
              w = e("./log"),
              y = e("./utils"),
              v = e("./clone"),
              b = e("./proxy").loadUrlDocument,
              x = y.getBounds,
              k = "data-html2canvas-node",
              _ = 0;
            (i.CanvasRenderer = d),
              (i.NodeContainer = m),
              (i.log = w),
              (i.utils = y);
            var C =
              "undefined" == typeof document ||
              "function" != typeof Object.create ||
              "function" != typeof document.createElement("canvas").getContext
                ? function () {
                    return Promise.reject("No canvas support");
                  }
                : i;
            (n.exports = C),
              "function" == typeof t &&
                t.amd &&
                t("html2canvas", [], function () {
                  return C;
                });
          },
          {
            "./clone": 2,
            "./imageloader": 11,
            "./log": 13,
            "./nodecontainer": 14,
            "./nodeparser": 15,
            "./proxy": 16,
            "./renderers/canvas": 20,
            "./support": 22,
            "./utils": 26,
          },
        ],
        5: [
          function (t, e, n) {
            function r(t) {
              if (
                ((this.src = t),
                i("DummyImageContainer for", t),
                !this.promise || !this.image)
              ) {
                i("Initiating DummyImageContainer"),
                  (r.prototype.image = new Image());
                var e = this.image;
                r.prototype.promise = new Promise(function (t, n) {
                  (e.onload = t),
                    (e.onerror = n),
                    (e.src = o()),
                    e.complete === !0 && t(e);
                });
              }
            }
            var i = t("./log"),
              o = t("./utils").smallImage;
            e.exports = r;
          },
          { "./log": 13, "./utils": 26 },
        ],
        6: [
          function (t, e, n) {
            function r(t, e) {
              var n,
                r,
                o = document.createElement("div"),
                a = document.createElement("img"),
                s = document.createElement("span"),
                c = "Hidden Text";
              (o.style.visibility = "hidden"),
                (o.style.fontFamily = t),
                (o.style.fontSize = e),
                (o.style.margin = 0),
                (o.style.padding = 0),
                document.body.appendChild(o),
                (a.src = i()),
                (a.width = 1),
                (a.height = 1),
                (a.style.margin = 0),
                (a.style.padding = 0),
                (a.style.verticalAlign = "baseline"),
                (s.style.fontFamily = t),
                (s.style.fontSize = e),
                (s.style.margin = 0),
                (s.style.padding = 0),
                s.appendChild(document.createTextNode(c)),
                o.appendChild(s),
                o.appendChild(a),
                (n = a.offsetTop - s.offsetTop + 1),
                o.removeChild(s),
                o.appendChild(document.createTextNode(c)),
                (o.style.lineHeight = "normal"),
                (a.style.verticalAlign = "super"),
                (r = a.offsetTop - o.offsetTop + 1),
                document.body.removeChild(o),
                (this.baseline = n),
                (this.lineWidth = 1),
                (this.middle = r);
            }
            var i = t("./utils").smallImage;
            e.exports = r;
          },
          { "./utils": 26 },
        ],
        7: [
          function (t, e, n) {
            function r() {
              this.data = {};
            }
            var i = t("./font");
            (r.prototype.getMetrics = function (t, e) {
              return (
                void 0 === this.data[t + "-" + e] &&
                  (this.data[t + "-" + e] = new i(t, e)),
                this.data[t + "-" + e]
              );
            }),
              (e.exports = r);
          },
          { "./font": 6 },
        ],
        8: [
          function (t, e, n) {
            function r(e, n, r) {
              (this.image = null), (this.src = e);
              var i = this,
                a = o(e);
              this.promise = (
                n
                  ? new Promise(function (t) {
                      "about:blank" === e.contentWindow.document.URL ||
                      null == e.contentWindow.document.documentElement
                        ? (e.contentWindow.onload = e.onload =
                            function () {
                              t(e);
                            })
                        : t(e);
                    })
                  : this.proxyLoad(r.proxy, a, r)
              )
                .then(function (e) {
                  var n = t("./core");
                  return n(e.contentWindow.document.documentElement, {
                    type: "view",
                    width: e.width,
                    height: e.height,
                    proxy: r.proxy,
                    javascriptEnabled: r.javascriptEnabled,
                    removeContainer: r.removeContainer,
                    allowTaint: r.allowTaint,
                    imageTimeout: r.imageTimeout / 2,
                  });
                })
                .then(function (t) {
                  return (i.image = t);
                });
            }
            var i = t("./utils"),
              o = i.getBounds,
              a = t("./proxy").loadUrlDocument;
            (r.prototype.proxyLoad = function (t, e, n) {
              var r = this.src;
              return a(r.src, t, r.ownerDocument, e.width, e.height, n);
            }),
              (e.exports = r);
          },
          { "./core": 4, "./proxy": 16, "./utils": 26 },
        ],
        9: [
          function (t, e, n) {
            function r(t) {
              (this.src = t.value),
                (this.colorStops = []),
                (this.type = null),
                (this.x0 = 0.5),
                (this.y0 = 0.5),
                (this.x1 = 0.5),
                (this.y1 = 0.5),
                (this.promise = Promise.resolve(!0));
            }
            (r.TYPES = { LINEAR: 1, RADIAL: 2 }),
              (r.REGEXP_COLORSTOP =
                /^\s*(rgba?\(\s*\d{1,3},\s*\d{1,3},\s*\d{1,3}(?:,\s*[0-9\.]+)?\s*\)|[a-z]{3,20}|#[a-f0-9]{3,6})(?:\s+(\d{1,3}(?:\.\d+)?)(%|px)?)?(?:\s|$)/i),
              (e.exports = r);
          },
          {},
        ],
        10: [
          function (t, e, n) {
            function r(t, e) {
              (this.src = t), (this.image = new Image());
              var n = this;
              (this.tainted = null),
                (this.promise = new Promise(function (r, i) {
                  (n.image.onload = r),
                    (n.image.onerror = i),
                    e && (n.image.crossOrigin = "anonymous"),
                    (n.image.src = t),
                    n.image.complete === !0 && r(n.image);
                }));
            }
            e.exports = r;
          },
          {},
        ],
        11: [
          function (t, e, n) {
            function r(t, e) {
              (this.link = null),
                (this.options = t),
                (this.support = e),
                (this.origin = this.getOrigin(window.location.href));
            }
            var i = t("./log"),
              o = t("./imagecontainer"),
              a = t("./dummyimagecontainer"),
              s = t("./proxyimagecontainer"),
              c = t("./framecontainer"),
              l = t("./svgcontainer"),
              u = t("./svgnodecontainer"),
              h = t("./lineargradientcontainer"),
              f = t("./webkitgradientcontainer"),
              d = t("./utils").bind;
            (r.prototype.findImages = function (t) {
              var e = [];
              return (
                t
                  .reduce(function (t, e) {
                    switch (e.node.nodeName) {
                      case "IMG":
                        return t.concat([
                          { args: [e.node.src], method: "url" },
                        ]);
                      case "svg":
                      case "IFRAME":
                        return t.concat([
                          { args: [e.node], method: e.node.nodeName },
                        ]);
                    }
                    return t;
                  }, [])
                  .forEach(this.addImage(e, this.loadImage), this),
                e
              );
            }),
              (r.prototype.findBackgroundImage = function (t, e) {
                return (
                  e
                    .parseBackgroundImages()
                    .filter(this.hasImageBackground)
                    .forEach(this.addImage(t, this.loadImage), this),
                  t
                );
              }),
              (r.prototype.addImage = function (t, e) {
                return function (n) {
                  n.args.forEach(function (r) {
                    this.imageExists(t, r) ||
                      (t.splice(0, 0, e.call(this, n)),
                      i(
                        "Added image #" + t.length,
                        "string" == typeof r ? r.substring(0, 100) : r
                      ));
                  }, this);
                };
              }),
              (r.prototype.hasImageBackground = function (t) {
                return "none" !== t.method;
              }),
              (r.prototype.loadImage = function (t) {
                if ("url" === t.method) {
                  var e = t.args[0];
                  return !this.isSVG(e) ||
                    this.support.svg ||
                    this.options.allowTaint
                    ? e.match(/data:image\/.*;base64,/i)
                      ? new o(e.replace(/url\(['"]{0,}|['"]{0,}\)$/gi, ""), !1)
                      : this.isSameOrigin(e) ||
                        this.options.allowTaint === !0 ||
                        this.isSVG(e)
                      ? new o(e, !1)
                      : this.support.cors &&
                        !this.options.allowTaint &&
                        this.options.useCORS
                      ? new o(e, !0)
                      : this.options.proxy
                      ? new s(e, this.options.proxy)
                      : new a(e)
                    : new l(e);
                }
                return "linear-gradient" === t.method
                  ? new h(t)
                  : "gradient" === t.method
                  ? new f(t)
                  : "svg" === t.method
                  ? new u(t.args[0], this.support.svg)
                  : "IFRAME" === t.method
                  ? new c(
                      t.args[0],
                      this.isSameOrigin(t.args[0].src),
                      this.options
                    )
                  : new a(t);
              }),
              (r.prototype.isSVG = function (t) {
                return (
                  "svg" === t.substring(t.length - 3).toLowerCase() ||
                  l.prototype.isInline(t)
                );
              }),
              (r.prototype.imageExists = function (t, e) {
                return t.some(function (t) {
                  return t.src === e;
                });
              }),
              (r.prototype.isSameOrigin = function (t) {
                return this.getOrigin(t) === this.origin;
              }),
              (r.prototype.getOrigin = function (t) {
                var e = this.link || (this.link = document.createElement("a"));
                return (
                  (e.href = t),
                  (e.href = e.href),
                  e.protocol + e.hostname + e.port
                );
              }),
              (r.prototype.getPromise = function (t) {
                return this.timeout(t, this.options.imageTimeout).catch(
                  function () {
                    var e = new a(t.src);
                    return e.promise.then(function (e) {
                      t.image = e;
                    });
                  }
                );
              }),
              (r.prototype.get = function (t) {
                var e = null;
                return this.images.some(function (n) {
                  return (e = n).src === t;
                })
                  ? e
                  : null;
              }),
              (r.prototype.fetch = function (t) {
                return (
                  (this.images = t.reduce(
                    d(this.findBackgroundImage, this),
                    this.findImages(t)
                  )),
                  this.images.forEach(function (t, e) {
                    t.promise.then(
                      function () {
                        i("Succesfully loaded image #" + (e + 1), t);
                      },
                      function (n) {
                        i("Failed loading image #" + (e + 1), t, n);
                      }
                    );
                  }),
                  (this.ready = Promise.all(
                    this.images.map(this.getPromise, this)
                  )),
                  i("Finished searching images"),
                  this
                );
              }),
              (r.prototype.timeout = function (t, e) {
                var n,
                  r = Promise.race([
                    t.promise,
                    new Promise(function (r, o) {
                      n = setTimeout(function () {
                        i("Timed out loading image", t), o(t);
                      }, e);
                    }),
                  ]).then(function (t) {
                    return clearTimeout(n), t;
                  });
                return (
                  r.catch(function () {
                    clearTimeout(n);
                  }),
                  r
                );
              }),
              (e.exports = r);
          },
          {
            "./dummyimagecontainer": 5,
            "./framecontainer": 8,
            "./imagecontainer": 10,
            "./lineargradientcontainer": 12,
            "./log": 13,
            "./proxyimagecontainer": 17,
            "./svgcontainer": 23,
            "./svgnodecontainer": 24,
            "./utils": 26,
            "./webkitgradientcontainer": 27,
          },
        ],
        12: [
          function (t, e, n) {
            function r(t) {
              i.apply(this, arguments), (this.type = i.TYPES.LINEAR);
              var e =
                r.REGEXP_DIRECTION.test(t.args[0]) ||
                !i.REGEXP_COLORSTOP.test(t.args[0]);
              e
                ? t.args[0]
                    .split(/\s+/)
                    .reverse()
                    .forEach(function (t, e) {
                      switch (t) {
                        case "left":
                          (this.x0 = 0), (this.x1 = 1);
                          break;
                        case "top":
                          (this.y0 = 0), (this.y1 = 1);
                          break;
                        case "right":
                          (this.x0 = 1), (this.x1 = 0);
                          break;
                        case "bottom":
                          (this.y0 = 1), (this.y1 = 0);
                          break;
                        case "to":
                          var n = this.y0,
                            r = this.x0;
                          (this.y0 = this.y1),
                            (this.x0 = this.x1),
                            (this.x1 = r),
                            (this.y1 = n);
                          break;
                        case "center":
                          break;
                        default:
                          var i = 0.01 * parseFloat(t, 10);
                          if (isNaN(i)) break;
                          0 === e
                            ? ((this.y0 = i), (this.y1 = 1 - this.y0))
                            : ((this.x0 = i), (this.x1 = 1 - this.x0));
                      }
                    }, this)
                : ((this.y0 = 0), (this.y1 = 1)),
                (this.colorStops = t.args.slice(e ? 1 : 0).map(function (t) {
                  var e = t.match(i.REGEXP_COLORSTOP),
                    n = +e[2],
                    r = 0 === n ? "%" : e[3];
                  return {
                    color: new o(e[1]),
                    stop: "%" === r ? n / 100 : null,
                  };
                })),
                null === this.colorStops[0].stop &&
                  (this.colorStops[0].stop = 0),
                null === this.colorStops[this.colorStops.length - 1].stop &&
                  (this.colorStops[this.colorStops.length - 1].stop = 1),
                this.colorStops.forEach(function (t, e) {
                  null === t.stop &&
                    this.colorStops.slice(e).some(function (n, r) {
                      return (
                        null !== n.stop &&
                        ((t.stop =
                          (n.stop - this.colorStops[e - 1].stop) / (r + 1) +
                          this.colorStops[e - 1].stop),
                        !0)
                      );
                    }, this);
                }, this);
            }
            var i = t("./gradientcontainer"),
              o = t("./color");
            (r.prototype = Object.create(i.prototype)),
              (r.REGEXP_DIRECTION =
                /^\s*(?:to|left|right|top|bottom|center|\d{1,3}(?:\.\d+)?%?)(?:\s|$)/i),
              (e.exports = r);
          },
          { "./color": 3, "./gradientcontainer": 9 },
        ],
        13: [
          function (t, e, n) {
            var r = function () {
              r.options.logging &&
                window.console &&
                window.console.log &&
                Function.prototype.bind
                  .call(window.console.log, window.console)
                  .apply(
                    window.console,
                    [
                      Date.now() - r.options.start + "ms",
                      "html2canvas:",
                    ].concat([].slice.call(arguments, 0))
                  );
            };
            (r.options = { logging: !1 }), (e.exports = r);
          },
          {},
        ],
        14: [
          function (t, e, n) {
            function r(t, e) {
              (this.node = t),
                (this.parent = e),
                (this.stack = null),
                (this.bounds = null),
                (this.borders = null),
                (this.clip = []),
                (this.backgroundClip = []),
                (this.offsetBounds = null),
                (this.visible = null),
                (this.computedStyles = null),
                (this.colors = {}),
                (this.styles = {}),
                (this.backgroundImages = null),
                (this.transformData = null),
                (this.transformMatrix = null),
                (this.isPseudoElement = !1),
                (this.opacity = null);
            }
            function i(t) {
              var e = t.options[t.selectedIndex || 0];
              return e ? e.text || "" : "";
            }
            function o(t) {
              if (t && "matrix" === t[1])
                return t[2].split(",").map(function (t) {
                  return parseFloat(t.trim());
                });
              if (t && "matrix3d" === t[1]) {
                var e = t[2].split(",").map(function (t) {
                  return parseFloat(t.trim());
                });
                return [e[0], e[1], e[4], e[5], e[12], e[13]];
              }
            }
            function a(t) {
              return t.toString().indexOf("%") !== -1;
            }
            function s(t) {
              return t.replace("px", "");
            }
            function c(t) {
              return parseFloat(t);
            }
            var l = t("./color"),
              u = t("./utils"),
              h = u.getBounds,
              f = u.parseBackgrounds,
              d = u.offsetBounds;
            (r.prototype.cloneTo = function (t) {
              (t.visible = this.visible),
                (t.borders = this.borders),
                (t.bounds = this.bounds),
                (t.clip = this.clip),
                (t.backgroundClip = this.backgroundClip),
                (t.computedStyles = this.computedStyles),
                (t.styles = this.styles),
                (t.backgroundImages = this.backgroundImages),
                (t.opacity = this.opacity);
            }),
              (r.prototype.getOpacity = function () {
                return null === this.opacity
                  ? (this.opacity = this.cssFloat("opacity"))
                  : this.opacity;
              }),
              (r.prototype.assignStack = function (t) {
                (this.stack = t), t.children.push(this);
              }),
              (r.prototype.isElementVisible = function () {
                return this.node.nodeType === Node.TEXT_NODE
                  ? this.parent.visible
                  : "none" !== this.css("display") &&
                      "hidden" !== this.css("visibility") &&
                      !this.node.hasAttribute("data-html2canvas-ignore") &&
                      ("INPUT" !== this.node.nodeName ||
                        "hidden" !== this.node.getAttribute("type"));
              }),
              (r.prototype.css = function (t) {
                return (
                  this.computedStyles ||
                    (this.computedStyles = this.isPseudoElement
                      ? this.parent.computedStyle(
                          this.before ? ":before" : ":after"
                        )
                      : this.computedStyle(null)),
                  this.styles[t] || (this.styles[t] = this.computedStyles[t])
                );
              }),
              (r.prototype.prefixedCss = function (t) {
                var e = ["webkit", "moz", "ms", "o"],
                  n = this.css(t);
                return (
                  void 0 === n &&
                    e.some(function (e) {
                      return (
                        (n = this.css(
                          e + t.substr(0, 1).toUpperCase() + t.substr(1)
                        )),
                        void 0 !== n
                      );
                    }, this),
                  void 0 === n ? null : n
                );
              }),
              (r.prototype.computedStyle = function (t) {
                return this.node.ownerDocument.defaultView.getComputedStyle(
                  this.node,
                  t
                );
              }),
              (r.prototype.cssInt = function (t) {
                var e = parseInt(this.css(t), 10);
                return isNaN(e) ? 0 : e;
              }),
              (r.prototype.color = function (t) {
                return this.colors[t] || (this.colors[t] = new l(this.css(t)));
              }),
              (r.prototype.cssFloat = function (t) {
                var e = parseFloat(this.css(t));
                return isNaN(e) ? 0 : e;
              }),
              (r.prototype.fontWeight = function () {
                var t = this.css("fontWeight");
                switch (parseInt(t, 10)) {
                  case 401:
                    t = "bold";
                    break;
                  case 400:
                    t = "normal";
                }
                return t;
              }),
              (r.prototype.parseClip = function () {
                var t = this.css("clip").match(this.CLIP);
                return t
                  ? {
                      top: parseInt(t[1], 10),
                      right: parseInt(t[2], 10),
                      bottom: parseInt(t[3], 10),
                      left: parseInt(t[4], 10),
                    }
                  : null;
              }),
              (r.prototype.parseBackgroundImages = function () {
                return (
                  this.backgroundImages ||
                  (this.backgroundImages = f(this.css("backgroundImage")))
                );
              }),
              (r.prototype.cssList = function (t, e) {
                var n = (this.css(t) || "").split(",");
                return (
                  (n = n[e || 0] || n[0] || "auto"),
                  (n = n.trim().split(" ")),
                  1 === n.length && (n = [n[0], a(n[0]) ? "auto" : n[0]]),
                  n
                );
              }),
              (r.prototype.parseBackgroundSize = function (t, e, n) {
                var r,
                  i,
                  o = this.cssList("backgroundSize", n);
                if (a(o[0])) r = (t.width * parseFloat(o[0])) / 100;
                else {
                  if (/contain|cover/.test(o[0])) {
                    var s = t.width / t.height,
                      c = e.width / e.height;
                    return (s < c) ^ ("contain" === o[0])
                      ? { width: t.height * c, height: t.height }
                      : { width: t.width, height: t.width / c };
                  }
                  r = parseInt(o[0], 10);
                }
                return (
                  (i =
                    "auto" === o[0] && "auto" === o[1]
                      ? e.height
                      : "auto" === o[1]
                      ? (r / e.width) * e.height
                      : a(o[1])
                      ? (t.height * parseFloat(o[1])) / 100
                      : parseInt(o[1], 10)),
                  "auto" === o[0] && (r = (i / e.height) * e.width),
                  { width: r, height: i }
                );
              }),
              (r.prototype.parseBackgroundPosition = function (t, e, n, r) {
                var i,
                  o,
                  s = this.cssList("backgroundPosition", n);
                return (
                  (i = a(s[0])
                    ? (t.width - (r || e).width) * (parseFloat(s[0]) / 100)
                    : parseInt(s[0], 10)),
                  (o =
                    "auto" === s[1]
                      ? (i / e.width) * e.height
                      : a(s[1])
                      ? ((t.height - (r || e).height) * parseFloat(s[1])) / 100
                      : parseInt(s[1], 10)),
                  "auto" === s[0] && (i = (o / e.height) * e.width),
                  { left: i, top: o }
                );
              }),
              (r.prototype.parseBackgroundRepeat = function (t) {
                return this.cssList("backgroundRepeat", t)[0];
              }),
              (r.prototype.parseTextShadows = function () {
                var t = this.css("textShadow"),
                  e = [];
                if (t && "none" !== t)
                  for (
                    var n = t.match(this.TEXT_SHADOW_PROPERTY), r = 0;
                    n && r < n.length;
                    r++
                  ) {
                    var i = n[r].match(this.TEXT_SHADOW_VALUES);
                    e.push({
                      color: new l(i[0]),
                      offsetX: i[1] ? parseFloat(i[1].replace("px", "")) : 0,
                      offsetY: i[2] ? parseFloat(i[2].replace("px", "")) : 0,
                      blur: i[3] ? i[3].replace("px", "") : 0,
                    });
                  }
                return e;
              }),
              (r.prototype.parseTransform = function () {
                if (!this.transformData)
                  if (this.hasTransform()) {
                    var t = this.parseBounds(),
                      e = this.prefixedCss("transformOrigin")
                        .split(" ")
                        .map(s)
                        .map(c);
                    (e[0] += t.left),
                      (e[1] += t.top),
                      (this.transformData = {
                        origin: e,
                        matrix: this.parseTransformMatrix(),
                      });
                  } else
                    this.transformData = {
                      origin: [0, 0],
                      matrix: [1, 0, 0, 1, 0, 0],
                    };
                return this.transformData;
              }),
              (r.prototype.parseTransformMatrix = function () {
                if (!this.transformMatrix) {
                  var t = this.prefixedCss("transform"),
                    e = t ? o(t.match(this.MATRIX_PROPERTY)) : null;
                  this.transformMatrix = e ? e : [1, 0, 0, 1, 0, 0];
                }
                return this.transformMatrix;
              }),
              (r.prototype.parseBounds = function () {
                return (
                  this.bounds ||
                  (this.bounds = this.hasTransform()
                    ? d(this.node)
                    : h(this.node))
                );
              }),
              (r.prototype.hasTransform = function () {
                return (
                  "1,0,0,1,0,0" !== this.parseTransformMatrix().join(",") ||
                  (this.parent && this.parent.hasTransform())
                );
              }),
              (r.prototype.getValue = function () {
                var t = this.node.value || "";
                return (
                  "SELECT" === this.node.tagName
                    ? (t = i(this.node))
                    : "password" === this.node.type &&
                      (t = Array(t.length + 1).join("•")),
                  0 === t.length ? this.node.placeholder || "" : t
                );
              }),
              (r.prototype.MATRIX_PROPERTY = /(matrix|matrix3d)\((.+)\)/),
              (r.prototype.TEXT_SHADOW_PROPERTY =
                /((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g),
              (r.prototype.TEXT_SHADOW_VALUES =
                /(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g),
              (r.prototype.CLIP =
                /^rect\((\d+)px,? (\d+)px,? (\d+)px,? (\d+)px\)$/),
              (e.exports = r);
          },
          { "./color": 3, "./utils": 26 },
        ],
        15: [
          function (t, e, n) {
            function r(t, e, n, r, i) {
              L("Starting NodeParser"),
                (this.renderer = e),
                (this.options = i),
                (this.range = null),
                (this.support = n),
                (this.renderQueue = []),
                (this.stack = new Y(!0, 1, t.ownerDocument, null));
              var o = new U(t, null);
              if (
                (i.background &&
                  e.rectangle(0, 0, e.width, e.height, new V(i.background)),
                t === t.ownerDocument.documentElement)
              ) {
                var a = new U(
                  o.color("backgroundColor").isTransparent()
                    ? t.ownerDocument.body
                    : t.ownerDocument.documentElement,
                  null
                );
                e.rectangle(
                  0,
                  0,
                  e.width,
                  e.height,
                  a.color("backgroundColor")
                );
              }
              (o.visibile = o.isElementVisible()),
                this.createPseudoHideStyles(t.ownerDocument),
                this.disableAnimations(t.ownerDocument),
                (this.nodes = B(
                  [o]
                    .concat(this.getChildren(o))
                    .filter(function (t) {
                      return (t.visible = t.isElementVisible());
                    })
                    .map(this.getPseudoElements, this)
                )),
                (this.fontMetrics = new X()),
                L("Fetched nodes, total:", this.nodes.length),
                L("Calculate overflow clips"),
                this.calculateOverflowClips(),
                L("Start fetching images"),
                (this.images = r.fetch(this.nodes.filter(q))),
                (this.ready = this.images.ready.then(
                  J(function () {
                    return (
                      L("Images loaded, starting parsing"),
                      L("Creating stacking contexts"),
                      this.createStackingContexts(),
                      L("Sorting stacking contexts"),
                      this.sortStackingContexts(this.stack),
                      this.parse(this.stack),
                      L(
                        "Render queue created with " +
                          this.renderQueue.length +
                          " items"
                      ),
                      new Promise(
                        J(function (t) {
                          i.async
                            ? "function" == typeof i.async
                              ? i.async.call(this, this.renderQueue, t)
                              : this.renderQueue.length > 0
                              ? ((this.renderIndex = 0),
                                this.asyncRenderer(this.renderQueue, t))
                              : t()
                            : (this.renderQueue.forEach(this.paint, this), t());
                        }, this)
                      )
                    );
                  }, this)
                ));
            }
            function i(t) {
              return t.parent && t.parent.clip.length;
            }
            function o(t) {
              return t.replace(/(\-[a-z])/g, function (t) {
                return t.toUpperCase().replace("-", "");
              });
            }
            function a() {}
            function s(t, e, n, r) {
              return t.map(function (i, o) {
                if (i.width > 0) {
                  var a = e.left,
                    s = e.top,
                    c = e.width,
                    l = e.height - t[2].width;
                  switch (o) {
                    case 0:
                      (l = t[0].width),
                        (i.args = h(
                          {
                            c1: [a, s],
                            c2: [a + c, s],
                            c3: [a + c - t[1].width, s + l],
                            c4: [a + t[3].width, s + l],
                          },
                          r[0],
                          r[1],
                          n.topLeftOuter,
                          n.topLeftInner,
                          n.topRightOuter,
                          n.topRightInner
                        ));
                      break;
                    case 1:
                      (a = e.left + e.width - t[1].width),
                        (c = t[1].width),
                        (i.args = h(
                          {
                            c1: [a + c, s],
                            c2: [a + c, s + l + t[2].width],
                            c3: [a, s + l],
                            c4: [a, s + t[0].width],
                          },
                          r[1],
                          r[2],
                          n.topRightOuter,
                          n.topRightInner,
                          n.bottomRightOuter,
                          n.bottomRightInner
                        ));
                      break;
                    case 2:
                      (s = s + e.height - t[2].width),
                        (l = t[2].width),
                        (i.args = h(
                          {
                            c1: [a + c, s + l],
                            c2: [a, s + l],
                            c3: [a + t[3].width, s],
                            c4: [a + c - t[3].width, s],
                          },
                          r[2],
                          r[3],
                          n.bottomRightOuter,
                          n.bottomRightInner,
                          n.bottomLeftOuter,
                          n.bottomLeftInner
                        ));
                      break;
                    case 3:
                      (c = t[3].width),
                        (i.args = h(
                          {
                            c1: [a, s + l + t[2].width],
                            c2: [a, s],
                            c3: [a + c, s + t[0].width],
                            c4: [a + c, s + l],
                          },
                          r[3],
                          r[0],
                          n.bottomLeftOuter,
                          n.bottomLeftInner,
                          n.topLeftOuter,
                          n.topLeftInner
                        ));
                  }
                }
                return i;
              });
            }
            function c(t, e, n, r) {
              var i = 4 * ((Math.sqrt(2) - 1) / 3),
                o = n * i,
                a = r * i,
                s = t + n,
                c = e + r;
              return {
                topLeft: u(
                  { x: t, y: c },
                  { x: t, y: c - a },
                  { x: s - o, y: e },
                  { x: s, y: e }
                ),
                topRight: u(
                  { x: t, y: e },
                  { x: t + o, y: e },
                  { x: s, y: c - a },
                  { x: s, y: c }
                ),
                bottomRight: u(
                  { x: s, y: e },
                  { x: s, y: e + a },
                  { x: t + o, y: c },
                  { x: t, y: c }
                ),
                bottomLeft: u(
                  { x: s, y: c },
                  { x: s - o, y: c },
                  { x: t, y: e + a },
                  { x: t, y: e }
                ),
              };
            }
            function l(t, e, n) {
              var r = t.left,
                i = t.top,
                o = t.width,
                a = t.height,
                s = e[0][0] < o / 2 ? e[0][0] : o / 2,
                l = e[0][1] < a / 2 ? e[0][1] : a / 2,
                u = e[1][0] < o / 2 ? e[1][0] : o / 2,
                h = e[1][1] < a / 2 ? e[1][1] : a / 2,
                f = e[2][0] < o / 2 ? e[2][0] : o / 2,
                d = e[2][1] < a / 2 ? e[2][1] : a / 2,
                p = e[3][0] < o / 2 ? e[3][0] : o / 2,
                g = e[3][1] < a / 2 ? e[3][1] : a / 2,
                m = o - u,
                w = a - d,
                y = o - f,
                v = a - g;
              return {
                topLeftOuter: c(r, i, s, l).topLeft.subdivide(0.5),
                topLeftInner: c(
                  r + n[3].width,
                  i + n[0].width,
                  Math.max(0, s - n[3].width),
                  Math.max(0, l - n[0].width)
                ).topLeft.subdivide(0.5),
                topRightOuter: c(r + m, i, u, h).topRight.subdivide(0.5),
                topRightInner: c(
                  r + Math.min(m, o + n[3].width),
                  i + n[0].width,
                  m > o + n[3].width ? 0 : u - n[3].width,
                  h - n[0].width
                ).topRight.subdivide(0.5),
                bottomRightOuter: c(r + y, i + w, f, d).bottomRight.subdivide(
                  0.5
                ),
                bottomRightInner: c(
                  r + Math.min(y, o - n[3].width),
                  i + Math.min(w, a + n[0].width),
                  Math.max(0, f - n[1].width),
                  d - n[2].width
                ).bottomRight.subdivide(0.5),
                bottomLeftOuter: c(r, i + v, p, g).bottomLeft.subdivide(0.5),
                bottomLeftInner: c(
                  r + n[3].width,
                  i + v,
                  Math.max(0, p - n[3].width),
                  g - n[2].width
                ).bottomLeft.subdivide(0.5),
              };
            }
            function u(t, e, n, r) {
              var i = function (t, e, n) {
                return { x: t.x + (e.x - t.x) * n, y: t.y + (e.y - t.y) * n };
              };
              return {
                start: t,
                startControl: e,
                endControl: n,
                end: r,
                subdivide: function (o) {
                  var a = i(t, e, o),
                    s = i(e, n, o),
                    c = i(n, r, o),
                    l = i(a, s, o),
                    h = i(s, c, o),
                    f = i(l, h, o);
                  return [u(t, a, l, f), u(f, h, c, r)];
                },
                curveTo: function (t) {
                  t.push(["bezierCurve", e.x, e.y, n.x, n.y, r.x, r.y]);
                },
                curveToReversed: function (r) {
                  r.push(["bezierCurve", n.x, n.y, e.x, e.y, t.x, t.y]);
                },
              };
            }
            function h(t, e, n, r, i, o, a) {
              var s = [];
              return (
                e[0] > 0 || e[1] > 0
                  ? (s.push(["line", r[1].start.x, r[1].start.y]),
                    r[1].curveTo(s))
                  : s.push(["line", t.c1[0], t.c1[1]]),
                n[0] > 0 || n[1] > 0
                  ? (s.push(["line", o[0].start.x, o[0].start.y]),
                    o[0].curveTo(s),
                    s.push(["line", a[0].end.x, a[0].end.y]),
                    a[0].curveToReversed(s))
                  : (s.push(["line", t.c2[0], t.c2[1]]),
                    s.push(["line", t.c3[0], t.c3[1]])),
                e[0] > 0 || e[1] > 0
                  ? (s.push(["line", i[1].end.x, i[1].end.y]),
                    i[1].curveToReversed(s))
                  : s.push(["line", t.c4[0], t.c4[1]]),
                s
              );
            }
            function f(t, e, n, r, i, o, a) {
              e[0] > 0 || e[1] > 0
                ? (t.push(["line", r[0].start.x, r[0].start.y]),
                  r[0].curveTo(t),
                  r[1].curveTo(t))
                : t.push(["line", o, a]),
                (n[0] > 0 || n[1] > 0) &&
                  t.push(["line", i[0].start.x, i[0].start.y]);
            }
            function d(t) {
              return t.cssInt("zIndex") < 0;
            }
            function p(t) {
              return t.cssInt("zIndex") > 0;
            }
            function g(t) {
              return 0 === t.cssInt("zIndex");
            }
            function m(t) {
              return (
                ["inline", "inline-block", "inline-table"].indexOf(
                  t.css("display")
                ) !== -1
              );
            }
            function w(t) {
              return t instanceof Y;
            }
            function y(t) {
              return t.node.data.trim().length > 0;
            }
            function v(t) {
              return /^(normal|none|0px)$/.test(t.parent.css("letterSpacing"));
            }
            function b(t) {
              return ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(
                function (e) {
                  var n = t.css("border" + e + "Radius"),
                    r = n.split(" ");
                  return r.length <= 1 && (r[1] = r[0]), r.map(O);
                }
              );
            }
            function x(t) {
              return (
                t.nodeType === Node.TEXT_NODE ||
                t.nodeType === Node.ELEMENT_NODE
              );
            }
            function k(t) {
              var e = t.css("position"),
                n =
                  ["absolute", "relative", "fixed"].indexOf(e) !== -1
                    ? t.css("zIndex")
                    : "auto";
              return "auto" !== n;
            }
            function _(t) {
              return "static" !== t.css("position");
            }
            function C(t) {
              return "none" !== t.css("float");
            }
            function A(t) {
              return (
                ["inline-block", "inline-table"].indexOf(t.css("display")) !==
                -1
              );
            }
            function S(t) {
              var e = this;
              return function () {
                return !t.apply(e, arguments);
              };
            }
            function q(t) {
              return t.node.nodeType === Node.ELEMENT_NODE;
            }
            function T(t) {
              return t.isPseudoElement === !0;
            }
            function P(t) {
              return t.node.nodeType === Node.TEXT_NODE;
            }
            function I(t) {
              return function (e, n) {
                return (
                  e.cssInt("zIndex") +
                  t.indexOf(e) / t.length -
                  (n.cssInt("zIndex") + t.indexOf(n) / t.length)
                );
              };
            }
            function E(t) {
              return t.getOpacity() < 1;
            }
            function O(t) {
              return parseInt(t, 10);
            }
            function F(t) {
              return t.width;
            }
            function R(t) {
              return (
                t.node.nodeType !== Node.ELEMENT_NODE ||
                ["SCRIPT", "HEAD", "TITLE", "OBJECT", "BR", "OPTION"].indexOf(
                  t.node.nodeName
                ) === -1
              );
            }
            function B(t) {
              return [].concat.apply([], t);
            }
            function D(t) {
              var e = t.substr(0, 1);
              return e === t.substr(t.length - 1) && e.match(/'|"/)
                ? t.substr(1, t.length - 2)
                : t;
            }
            function j(t) {
              for (var e, n = [], r = 0, i = !1; t.length; )
                z(t[r]) === i
                  ? ((e = t.splice(0, r)),
                    e.length && n.push(M.ucs2.encode(e)),
                    (i = !i),
                    (r = 0))
                  : r++,
                  r >= t.length &&
                    ((e = t.splice(0, r)),
                    e.length && n.push(M.ucs2.encode(e)));
              return n;
            }
            function z(t) {
              return [32, 13, 10, 9, 45].indexOf(t) !== -1;
            }
            function N(t) {
              return /[^\u0000-\u00ff]/.test(t);
            }
            var L = t("./log"),
              M = t("punycode"),
              U = t("./nodecontainer"),
              H = t("./textcontainer"),
              W = t("./pseudoelementcontainer"),
              X = t("./fontmetrics"),
              V = t("./color"),
              Y = t("./stackingcontext"),
              G = t("./utils"),
              J = G.bind,
              Q = G.getBounds,
              K = G.parseBackgrounds,
              $ = G.offsetBounds;
            (r.prototype.calculateOverflowClips = function () {
              this.nodes.forEach(function (t) {
                if (q(t)) {
                  T(t) && t.appendToDOM(), (t.borders = this.parseBorders(t));
                  var e =
                      "hidden" === t.css("overflow") ? [t.borders.clip] : [],
                    n = t.parseClip();
                  n &&
                    ["absolute", "fixed"].indexOf(t.css("position")) !== -1 &&
                    e.push([
                      [
                        "rect",
                        t.bounds.left + n.left,
                        t.bounds.top + n.top,
                        n.right - n.left,
                        n.bottom - n.top,
                      ],
                    ]),
                    (t.clip = i(t) ? t.parent.clip.concat(e) : e),
                    (t.backgroundClip =
                      "hidden" !== t.css("overflow")
                        ? t.clip.concat([t.borders.clip])
                        : t.clip),
                    T(t) && t.cleanDOM();
                } else P(t) && (t.clip = i(t) ? t.parent.clip : []);
                T(t) || (t.bounds = null);
              }, this);
            }),
              (r.prototype.asyncRenderer = function (t, e, n) {
                (n = n || Date.now()),
                  this.paint(t[this.renderIndex++]),
                  t.length === this.renderIndex
                    ? e()
                    : n + 20 > Date.now()
                    ? this.asyncRenderer(t, e, n)
                    : setTimeout(
                        J(function () {
                          this.asyncRenderer(t, e);
                        }, this),
                        0
                      );
              }),
              (r.prototype.createPseudoHideStyles = function (t) {
                this.createStyles(
                  t,
                  "." +
                    W.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE +
                    ':before { content: "" !important; display: none !important; }.' +
                    W.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER +
                    ':after { content: "" !important; display: none !important; }'
                );
              }),
              (r.prototype.disableAnimations = function (t) {
                this.createStyles(
                  t,
                  "* { -webkit-animation: none !important; -moz-animation: none !important; -o-animation: none !important; animation: none !important; -webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; transition: none !important;}"
                );
              }),
              (r.prototype.createStyles = function (t, e) {
                var n = t.createElement("style");
                (n.innerHTML = e), t.body.appendChild(n);
              }),
              (r.prototype.getPseudoElements = function (t) {
                var e = [[t]];
                if (t.node.nodeType === Node.ELEMENT_NODE) {
                  var n = this.getPseudoElement(t, ":before"),
                    r = this.getPseudoElement(t, ":after");
                  n && e.push(n), r && e.push(r);
                }
                return B(e);
              }),
              (r.prototype.getPseudoElement = function (t, e) {
                var n = t.computedStyle(e);
                if (
                  !n ||
                  !n.content ||
                  "none" === n.content ||
                  "-moz-alt-content" === n.content ||
                  "none" === n.display
                )
                  return null;
                for (
                  var r = D(n.content),
                    i = "url" === r.substr(0, 3),
                    a = document.createElement(
                      i ? "img" : "html2canvaspseudoelement"
                    ),
                    s = new W(a, t, e),
                    c = n.length - 1;
                  c >= 0;
                  c--
                ) {
                  var l = o(n.item(c));
                  a.style[l] = n[l];
                }
                if (
                  ((a.className =
                    W.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE +
                    " " +
                    W.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER),
                  i)
                )
                  return (a.src = K(r)[0].args[0]), [s];
                var u = document.createTextNode(r);
                return a.appendChild(u), [s, new H(u, s)];
              }),
              (r.prototype.getChildren = function (t) {
                return B(
                  [].filter.call(t.node.childNodes, x).map(function (e) {
                    var n = [
                      e.nodeType === Node.TEXT_NODE ? new H(e, t) : new U(e, t),
                    ].filter(R);
                    return e.nodeType === Node.ELEMENT_NODE &&
                      n.length &&
                      "TEXTAREA" !== e.tagName
                      ? n[0].isElementVisible()
                        ? n.concat(this.getChildren(n[0]))
                        : []
                      : n;
                  }, this)
                );
              }),
              (r.prototype.newStackingContext = function (t, e) {
                var n = new Y(e, t.getOpacity(), t.node, t.parent);
                t.cloneTo(n);
                var r = e ? n.getParentStack(this) : n.parent.stack;
                r.contexts.push(n), (t.stack = n);
              }),
              (r.prototype.createStackingContexts = function () {
                this.nodes.forEach(function (t) {
                  q(t) &&
                  (this.isRootElement(t) ||
                    E(t) ||
                    k(t) ||
                    this.isBodyWithTransparentRoot(t) ||
                    t.hasTransform())
                    ? this.newStackingContext(t, !0)
                    : q(t) && ((_(t) && g(t)) || A(t) || C(t))
                    ? this.newStackingContext(t, !1)
                    : t.assignStack(t.parent.stack);
                }, this);
              }),
              (r.prototype.isBodyWithTransparentRoot = function (t) {
                return (
                  "BODY" === t.node.nodeName &&
                  t.parent.color("backgroundColor").isTransparent()
                );
              }),
              (r.prototype.isRootElement = function (t) {
                return null === t.parent;
              }),
              (r.prototype.sortStackingContexts = function (t) {
                t.contexts.sort(I(t.contexts.slice(0))),
                  t.contexts.forEach(this.sortStackingContexts, this);
              }),
              (r.prototype.parseTextBounds = function (t) {
                return function (e, n, r) {
                  if (
                    "none" !== t.parent.css("textDecoration").substr(0, 4) ||
                    0 !== e.trim().length
                  ) {
                    if (this.support.rangeBounds && !t.parent.hasTransform()) {
                      var i = r.slice(0, n).join("").length;
                      return this.getRangeBounds(t.node, i, e.length);
                    }
                    if (t.node && "string" == typeof t.node.data) {
                      var o = t.node.splitText(e.length),
                        a = this.getWrapperBounds(
                          t.node,
                          t.parent.hasTransform()
                        );
                      return (t.node = o), a;
                    }
                  } else
                    (this.support.rangeBounds && !t.parent.hasTransform()) ||
                      (t.node = t.node.splitText(e.length));
                  return {};
                };
              }),
              (r.prototype.getWrapperBounds = function (t, e) {
                var n = t.ownerDocument.createElement("html2canvaswrapper"),
                  r = t.parentNode,
                  i = t.cloneNode(!0);
                n.appendChild(t.cloneNode(!0)), r.replaceChild(n, t);
                var o = e ? $(n) : Q(n);
                return r.replaceChild(i, n), o;
              }),
              (r.prototype.getRangeBounds = function (t, e, n) {
                var r =
                  this.range || (this.range = t.ownerDocument.createRange());
                return (
                  r.setStart(t, e),
                  r.setEnd(t, e + n),
                  r.getBoundingClientRect()
                );
              }),
              (r.prototype.parse = function (t) {
                var e = t.contexts.filter(d),
                  n = t.children.filter(q),
                  r = n.filter(S(C)),
                  i = r.filter(S(_)).filter(S(m)),
                  o = n.filter(S(_)).filter(C),
                  s = r.filter(S(_)).filter(m),
                  c = t.contexts.concat(r.filter(_)).filter(g),
                  l = t.children.filter(P).filter(y),
                  u = t.contexts.filter(p);
                e.concat(i)
                  .concat(o)
                  .concat(s)
                  .concat(c)
                  .concat(l)
                  .concat(u)
                  .forEach(function (t) {
                    this.renderQueue.push(t),
                      w(t) && (this.parse(t), this.renderQueue.push(new a()));
                  }, this);
              }),
              (r.prototype.paint = function (t) {
                try {
                  t instanceof a
                    ? this.renderer.ctx.restore()
                    : P(t)
                    ? (T(t.parent) && t.parent.appendToDOM(),
                      this.paintText(t),
                      T(t.parent) && t.parent.cleanDOM())
                    : this.paintNode(t);
                } catch (t) {
                  if ((L(t), this.options.strict)) throw t;
                }
              }),
              (r.prototype.paintNode = function (t) {
                w(t) &&
                  (this.renderer.setOpacity(t.opacity),
                  this.renderer.ctx.save(),
                  t.hasTransform() &&
                    this.renderer.setTransform(t.parseTransform())),
                  "INPUT" === t.node.nodeName && "checkbox" === t.node.type
                    ? this.paintCheckbox(t)
                    : "INPUT" === t.node.nodeName && "radio" === t.node.type
                    ? this.paintRadio(t)
                    : this.paintElement(t);
              }),
              (r.prototype.paintElement = function (t) {
                var e = t.parseBounds();
                this.renderer.clip(
                  t.backgroundClip,
                  function () {
                    this.renderer.renderBackground(
                      t,
                      e,
                      t.borders.borders.map(F)
                    );
                  },
                  this
                ),
                  this.renderer.clip(
                    t.clip,
                    function () {
                      this.renderer.renderBorders(t.borders.borders);
                    },
                    this
                  ),
                  this.renderer.clip(
                    t.backgroundClip,
                    function () {
                      switch (t.node.nodeName) {
                        case "svg":
                        case "IFRAME":
                          var n = this.images.get(t.node);
                          n
                            ? this.renderer.renderImage(t, e, t.borders, n)
                            : L(
                                "Error loading <" + t.node.nodeName + ">",
                                t.node
                              );
                          break;
                        case "IMG":
                          var r = this.images.get(t.node.src);
                          r
                            ? this.renderer.renderImage(t, e, t.borders, r)
                            : L("Error loading <img>", t.node.src);
                          break;
                        case "CANVAS":
                          this.renderer.renderImage(t, e, t.borders, {
                            image: t.node,
                          });
                          break;
                        case "SELECT":
                        case "INPUT":
                        case "TEXTAREA":
                          this.paintFormValue(t);
                      }
                    },
                    this
                  );
              }),
              (r.prototype.paintCheckbox = function (t) {
                var e = t.parseBounds(),
                  n = Math.min(e.width, e.height),
                  r = { width: n - 1, height: n - 1, top: e.top, left: e.left },
                  i = [3, 3],
                  o = [i, i, i, i],
                  a = [1, 1, 1, 1].map(function (t) {
                    return { color: new V("#A5A5A5"), width: t };
                  }),
                  c = l(r, o, a);
                this.renderer.clip(
                  t.backgroundClip,
                  function () {
                    this.renderer.rectangle(
                      r.left + 1,
                      r.top + 1,
                      r.width - 2,
                      r.height - 2,
                      new V("#DEDEDE")
                    ),
                      this.renderer.renderBorders(s(a, r, c, o)),
                      t.node.checked &&
                        (this.renderer.font(
                          new V("#424242"),
                          "normal",
                          "normal",
                          "bold",
                          n - 3 + "px",
                          "arial"
                        ),
                        this.renderer.text("✔", r.left + n / 6, r.top + n - 1));
                  },
                  this
                );
              }),
              (r.prototype.paintRadio = function (t) {
                var e = t.parseBounds(),
                  n = Math.min(e.width, e.height) - 2;
                this.renderer.clip(
                  t.backgroundClip,
                  function () {
                    this.renderer.circleStroke(
                      e.left + 1,
                      e.top + 1,
                      n,
                      new V("#DEDEDE"),
                      1,
                      new V("#A5A5A5")
                    ),
                      t.node.checked &&
                        this.renderer.circle(
                          Math.ceil(e.left + n / 4) + 1,
                          Math.ceil(e.top + n / 4) + 1,
                          Math.floor(n / 2),
                          new V("#424242")
                        );
                  },
                  this
                );
              }),
              (r.prototype.paintFormValue = function (t) {
                var e = t.getValue();
                if (e.length > 0) {
                  var n = t.node.ownerDocument,
                    r = n.createElement("html2canvaswrapper"),
                    i = [
                      "lineHeight",
                      "textAlign",
                      "fontFamily",
                      "fontWeight",
                      "fontSize",
                      "color",
                      "paddingLeft",
                      "paddingTop",
                      "paddingRight",
                      "paddingBottom",
                      "width",
                      "height",
                      "borderLeftStyle",
                      "borderTopStyle",
                      "borderLeftWidth",
                      "borderTopWidth",
                      "boxSizing",
                      "whiteSpace",
                      "wordWrap",
                    ];
                  i.forEach(function (e) {
                    try {
                      r.style[e] = t.css(e);
                    } catch (t) {
                      L(
                        "html2canvas: Parse: Exception caught in renderFormValue: " +
                          t.message
                      );
                    }
                  });
                  var o = t.parseBounds();
                  (r.style.position = "fixed"),
                    (r.style.left = o.left + "px"),
                    (r.style.top = o.top + "px"),
                    (r.textContent = e),
                    n.body.appendChild(r),
                    this.paintText(new H(r.firstChild, t)),
                    n.body.removeChild(r);
                }
              }),
              (r.prototype.paintText = function (t) {
                t.applyTextTransform();
                var e = M.ucs2.decode(t.node.data),
                  n =
                    (this.options.letterRendering && !v(t)) || N(t.node.data)
                      ? e.map(function (t) {
                          return M.ucs2.encode([t]);
                        })
                      : j(e),
                  r = t.parent.fontWeight(),
                  i = t.parent.css("fontSize"),
                  o = t.parent.css("fontFamily"),
                  a = t.parent.parseTextShadows();
                this.renderer.font(
                  t.parent.color("color"),
                  t.parent.css("fontStyle"),
                  t.parent.css("fontVariant"),
                  r,
                  i,
                  o
                ),
                  a.length
                    ? this.renderer.fontShadow(
                        a[0].color,
                        a[0].offsetX,
                        a[0].offsetY,
                        a[0].blur
                      )
                    : this.renderer.clearShadow(),
                  this.renderer.clip(
                    t.parent.clip,
                    function () {
                      n.map(this.parseTextBounds(t), this).forEach(function (
                        e,
                        r
                      ) {
                        e &&
                          (this.renderer.text(n[r], e.left, e.bottom),
                          this.renderTextDecoration(
                            t.parent,
                            e,
                            this.fontMetrics.getMetrics(o, i)
                          ));
                      },
                      this);
                    },
                    this
                  );
              }),
              (r.prototype.renderTextDecoration = function (t, e, n) {
                switch (t.css("textDecoration").split(" ")[0]) {
                  case "underline":
                    this.renderer.rectangle(
                      e.left,
                      Math.round(e.top + n.baseline + n.lineWidth),
                      e.width,
                      1,
                      t.color("color")
                    );
                    break;
                  case "overline":
                    this.renderer.rectangle(
                      e.left,
                      Math.round(e.top),
                      e.width,
                      1,
                      t.color("color")
                    );
                    break;
                  case "line-through":
                    this.renderer.rectangle(
                      e.left,
                      Math.ceil(e.top + n.middle + n.lineWidth),
                      e.width,
                      1,
                      t.color("color")
                    );
                }
              });
            var Z = {
              inset: [
                ["darken", 0.6],
                ["darken", 0.1],
                ["darken", 0.1],
                ["darken", 0.6],
              ],
            };
            (r.prototype.parseBorders = function (t) {
              var e = t.parseBounds(),
                n = b(t),
                r = ["Top", "Right", "Bottom", "Left"].map(function (e, n) {
                  var r = t.css("border" + e + "Style"),
                    i = t.color("border" + e + "Color");
                  "inset" === r &&
                    i.isBlack() &&
                    (i = new V([255, 255, 255, i.a]));
                  var o = Z[r] ? Z[r][n] : null;
                  return {
                    width: t.cssInt("border" + e + "Width"),
                    color: o ? i[o[0]](o[1]) : i,
                    args: null,
                  };
                }),
                i = l(e, n, r);
              return {
                clip: this.parseBackgroundClip(t, i, r, n, e),
                borders: s(r, e, i, n),
              };
            }),
              (r.prototype.parseBackgroundClip = function (t, e, n, r, i) {
                var o = t.css("backgroundClip"),
                  a = [];
                switch (o) {
                  case "content-box":
                  case "padding-box":
                    f(
                      a,
                      r[0],
                      r[1],
                      e.topLeftInner,
                      e.topRightInner,
                      i.left + n[3].width,
                      i.top + n[0].width
                    ),
                      f(
                        a,
                        r[1],
                        r[2],
                        e.topRightInner,
                        e.bottomRightInner,
                        i.left + i.width - n[1].width,
                        i.top + n[0].width
                      ),
                      f(
                        a,
                        r[2],
                        r[3],
                        e.bottomRightInner,
                        e.bottomLeftInner,
                        i.left + i.width - n[1].width,
                        i.top + i.height - n[2].width
                      ),
                      f(
                        a,
                        r[3],
                        r[0],
                        e.bottomLeftInner,
                        e.topLeftInner,
                        i.left + n[3].width,
                        i.top + i.height - n[2].width
                      );
                    break;
                  default:
                    f(
                      a,
                      r[0],
                      r[1],
                      e.topLeftOuter,
                      e.topRightOuter,
                      i.left,
                      i.top
                    ),
                      f(
                        a,
                        r[1],
                        r[2],
                        e.topRightOuter,
                        e.bottomRightOuter,
                        i.left + i.width,
                        i.top
                      ),
                      f(
                        a,
                        r[2],
                        r[3],
                        e.bottomRightOuter,
                        e.bottomLeftOuter,
                        i.left + i.width,
                        i.top + i.height
                      ),
                      f(
                        a,
                        r[3],
                        r[0],
                        e.bottomLeftOuter,
                        e.topLeftOuter,
                        i.left,
                        i.top + i.height
                      );
                }
                return a;
              }),
              (e.exports = r);
          },
          {
            "./color": 3,
            "./fontmetrics": 7,
            "./log": 13,
            "./nodecontainer": 14,
            "./pseudoelementcontainer": 18,
            "./stackingcontext": 21,
            "./textcontainer": 25,
            "./utils": 26,
            punycode: 1,
          },
        ],
        16: [
          function (t, e, n) {
            function r(t, e, n) {
              var r = "withCredentials" in new XMLHttpRequest();
              if (!e) return Promise.reject("No proxy configured");
              var i = a(r),
                c = s(e, t, i);
              return r
                ? u(c)
                : o(n, c, i).then(function (t) {
                    return p(t.content);
                  });
            }
            function i(t, e, n) {
              var r = "crossOrigin" in new Image(),
                i = a(r),
                c = s(e, t, i);
              return r
                ? Promise.resolve(c)
                : o(n, c, i).then(function (t) {
                    return "data:" + t.type + ";base64," + t.content;
                  });
            }
            function o(t, e, n) {
              return new Promise(function (r, i) {
                var o = t.createElement("script"),
                  a = function () {
                    delete window.html2canvas.proxy[n], t.body.removeChild(o);
                  };
                (window.html2canvas.proxy[n] = function (t) {
                  a(), r(t);
                }),
                  (o.src = e),
                  (o.onerror = function (t) {
                    a(), i(t);
                  }),
                  t.body.appendChild(o);
              });
            }
            function a(t) {
              return t
                ? ""
                : "html2canvas_" +
                    Date.now() +
                    "_" +
                    ++g +
                    "_" +
                    Math.round(1e5 * Math.random());
            }
            function s(t, e, n) {
              return (
                t +
                "?url=" +
                encodeURIComponent(e) +
                (n.length ? "&callback=html2canvas.proxy." + n : "")
              );
            }
            function c(t) {
              return function (e) {
                var n,
                  r = new DOMParser();
                try {
                  n = r.parseFromString(e, "text/html");
                } catch (t) {
                  f(
                    "DOMParser not supported, falling back to createHTMLDocument"
                  ),
                    (n = document.implementation.createHTMLDocument(""));
                  try {
                    n.open(), n.write(e), n.close();
                  } catch (t) {
                    f(
                      "createHTMLDocument write not supported, falling back to document.body.innerHTML"
                    ),
                      (n.body.innerHTML = e);
                  }
                }
                var i = n.querySelector("base");
                if (!i || !i.href.host) {
                  var o = n.createElement("base");
                  (o.href = t), n.head.insertBefore(o, n.head.firstChild);
                }
                return n;
              };
            }
            function l(t, e, n, i, o, a) {
              return new r(t, e, window.document).then(c(t)).then(function (t) {
                return d(t, n, i, o, a, 0, 0);
              });
            }
            var u = t("./xhr"),
              h = t("./utils"),
              f = t("./log"),
              d = t("./clone"),
              p = h.decode64,
              g = 0;
            (n.Proxy = r), (n.ProxyURL = i), (n.loadUrlDocument = l);
          },
          { "./clone": 2, "./log": 13, "./utils": 26, "./xhr": 28 },
        ],
        17: [
          function (t, e, n) {
            function r(t, e) {
              var n = document.createElement("a");
              (n.href = t),
                (t = n.href),
                (this.src = t),
                (this.image = new Image());
              var r = this;
              this.promise = new Promise(function (n, o) {
                (r.image.crossOrigin = "Anonymous"),
                  (r.image.onload = n),
                  (r.image.onerror = o),
                  new i(t, e, document)
                    .then(function (t) {
                      r.image.src = t;
                    })
                    .catch(o);
              });
            }
            var i = t("./proxy").ProxyURL;
            e.exports = r;
          },
          { "./proxy": 16 },
        ],
        18: [
          function (t, e, n) {
            function r(t, e, n) {
              i.call(this, t, e),
                (this.isPseudoElement = !0),
                (this.before = ":before" === n);
            }
            var i = t("./nodecontainer");
            (r.prototype.cloneTo = function (t) {
              r.prototype.cloneTo.call(this, t),
                (t.isPseudoElement = !0),
                (t.before = this.before);
            }),
              (r.prototype = Object.create(i.prototype)),
              (r.prototype.appendToDOM = function () {
                this.before
                  ? this.parent.node.insertBefore(
                      this.node,
                      this.parent.node.firstChild
                    )
                  : this.parent.node.appendChild(this.node),
                  (this.parent.node.className += " " + this.getHideClass());
              }),
              (r.prototype.cleanDOM = function () {
                this.node.parentNode.removeChild(this.node),
                  (this.parent.node.className =
                    this.parent.node.className.replace(
                      this.getHideClass(),
                      ""
                    ));
              }),
              (r.prototype.getHideClass = function () {
                return this[
                  "PSEUDO_HIDE_ELEMENT_CLASS_" +
                    (this.before ? "BEFORE" : "AFTER")
                ];
              }),
              (r.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE =
                "___html2canvas___pseudoelement_before"),
              (r.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER =
                "___html2canvas___pseudoelement_after"),
              (e.exports = r);
          },
          { "./nodecontainer": 14 },
        ],
        19: [
          function (t, e, n) {
            function r(t, e, n, r, i) {
              (this.width = t),
                (this.height = e),
                (this.images = n),
                (this.options = r),
                (this.document = i);
            }
            var i = t("./log");
            (r.prototype.renderImage = function (t, e, n, r) {
              var i = t.cssInt("paddingLeft"),
                o = t.cssInt("paddingTop"),
                a = t.cssInt("paddingRight"),
                s = t.cssInt("paddingBottom"),
                c = n.borders,
                l = e.width - (c[1].width + c[3].width + i + a),
                u = e.height - (c[0].width + c[2].width + o + s);
              this.drawImage(
                r,
                0,
                0,
                r.image.width || l,
                r.image.height || u,
                e.left + i + c[3].width,
                e.top + o + c[0].width,
                l,
                u
              );
            }),
              (r.prototype.renderBackground = function (t, e, n) {
                e.height > 0 &&
                  e.width > 0 &&
                  (this.renderBackgroundColor(t, e),
                  this.renderBackgroundImage(t, e, n));
              }),
              (r.prototype.renderBackgroundColor = function (t, e) {
                var n = t.color("backgroundColor");
                n.isTransparent() ||
                  this.rectangle(e.left, e.top, e.width, e.height, n);
              }),
              (r.prototype.renderBorders = function (t) {
                t.forEach(this.renderBorder, this);
              }),
              (r.prototype.renderBorder = function (t) {
                t.color.isTransparent() ||
                  null === t.args ||
                  this.drawShape(t.args, t.color);
              }),
              (r.prototype.renderBackgroundImage = function (t, e, n) {
                var r = t.parseBackgroundImages();
                r.reverse().forEach(function (r, o, a) {
                  switch (r.method) {
                    case "url":
                      var s = this.images.get(r.args[0]);
                      s
                        ? this.renderBackgroundRepeating(
                            t,
                            e,
                            s,
                            a.length - (o + 1),
                            n
                          )
                        : i("Error loading background-image", r.args[0]);
                      break;
                    case "linear-gradient":
                    case "gradient":
                      var c = this.images.get(r.value);
                      c
                        ? this.renderBackgroundGradient(c, e, n)
                        : i("Error loading background-image", r.args[0]);
                      break;
                    case "none":
                      break;
                    default:
                      i("Unknown background-image type", r.args[0]);
                  }
                }, this);
              }),
              (r.prototype.renderBackgroundRepeating = function (
                t,
                e,
                n,
                r,
                i
              ) {
                var o = t.parseBackgroundSize(e, n.image, r),
                  a = t.parseBackgroundPosition(e, n.image, r, o),
                  s = t.parseBackgroundRepeat(r);
                switch (s) {
                  case "repeat-x":
                  case "repeat no-repeat":
                    this.backgroundRepeatShape(
                      n,
                      a,
                      o,
                      e,
                      e.left + i[3],
                      e.top + a.top + i[0],
                      99999,
                      o.height,
                      i
                    );
                    break;
                  case "repeat-y":
                  case "no-repeat repeat":
                    this.backgroundRepeatShape(
                      n,
                      a,
                      o,
                      e,
                      e.left + a.left + i[3],
                      e.top + i[0],
                      o.width,
                      99999,
                      i
                    );
                    break;
                  case "no-repeat":
                    this.backgroundRepeatShape(
                      n,
                      a,
                      o,
                      e,
                      e.left + a.left + i[3],
                      e.top + a.top + i[0],
                      o.width,
                      o.height,
                      i
                    );
                    break;
                  default:
                    this.renderBackgroundRepeat(
                      n,
                      a,
                      o,
                      { top: e.top, left: e.left },
                      i[3],
                      i[0]
                    );
                }
              }),
              (e.exports = r);
          },
          { "./log": 13 },
        ],
        20: [
          function (t, e, n) {
            function r(t, e) {
              o.apply(this, arguments),
                (this.canvas =
                  this.options.canvas || this.document.createElement("canvas")),
                this.options.canvas ||
                  ((this.canvas.width = t), (this.canvas.height = e)),
                (this.ctx = this.canvas.getContext("2d")),
                (this.taintCtx = this.document
                  .createElement("canvas")
                  .getContext("2d")),
                (this.ctx.textBaseline = "bottom"),
                (this.variables = {}),
                s("Initialized CanvasRenderer with size", t, "x", e);
            }
            function i(t) {
              return t.length > 0;
            }
            var o = t("../renderer"),
              a = t("../lineargradientcontainer"),
              s = t("../log");
            (r.prototype = Object.create(o.prototype)),
              (r.prototype.setFillStyle = function (t) {
                return (
                  (this.ctx.fillStyle =
                    "object" == typeof t && t.isColor ? t.toString() : t),
                  this.ctx
                );
              }),
              (r.prototype.rectangle = function (t, e, n, r, i) {
                this.setFillStyle(i).fillRect(t, e, n, r);
              }),
              (r.prototype.circle = function (t, e, n, r) {
                this.setFillStyle(r),
                  this.ctx.beginPath(),
                  this.ctx.arc(t + n / 2, e + n / 2, n / 2, 0, 2 * Math.PI, !0),
                  this.ctx.closePath(),
                  this.ctx.fill();
              }),
              (r.prototype.circleStroke = function (t, e, n, r, i, o) {
                this.circle(t, e, n, r),
                  (this.ctx.strokeStyle = o.toString()),
                  this.ctx.stroke();
              }),
              (r.prototype.drawShape = function (t, e) {
                this.shape(t), this.setFillStyle(e).fill();
              }),
              (r.prototype.taints = function (t) {
                if (null === t.tainted) {
                  this.taintCtx.drawImage(t.image, 0, 0);
                  try {
                    this.taintCtx.getImageData(0, 0, 1, 1), (t.tainted = !1);
                  } catch (e) {
                    (this.taintCtx = document
                      .createElement("canvas")
                      .getContext("2d")),
                      (t.tainted = !0);
                  }
                }
                return t.tainted;
              }),
              (r.prototype.drawImage = function (t, e, n, r, i, o, a, s, c) {
                (this.taints(t) && !this.options.allowTaint) ||
                  this.ctx.drawImage(t.image, e, n, r, i, o, a, s, c);
              }),
              (r.prototype.clip = function (t, e, n) {
                this.ctx.save(),
                  t.filter(i).forEach(function (t) {
                    this.shape(t).clip();
                  }, this),
                  e.call(n),
                  this.ctx.restore();
              }),
              (r.prototype.shape = function (t) {
                return (
                  this.ctx.beginPath(),
                  t.forEach(function (t, e) {
                    "rect" === t[0]
                      ? this.ctx.rect.apply(this.ctx, t.slice(1))
                      : this.ctx[0 === e ? "moveTo" : t[0] + "To"].apply(
                          this.ctx,
                          t.slice(1)
                        );
                  }, this),
                  this.ctx.closePath(),
                  this.ctx
                );
              }),
              (r.prototype.font = function (t, e, n, r, i, o) {
                this.setFillStyle(t).font = [e, n, r, i, o]
                  .join(" ")
                  .split(",")[0];
              }),
              (r.prototype.fontShadow = function (t, e, n, r) {
                this.setVariable("shadowColor", t.toString())
                  .setVariable("shadowOffsetY", e)
                  .setVariable("shadowOffsetX", n)
                  .setVariable("shadowBlur", r);
              }),
              (r.prototype.clearShadow = function () {
                this.setVariable("shadowColor", "rgba(0,0,0,0)");
              }),
              (r.prototype.setOpacity = function (t) {
                this.ctx.globalAlpha = t;
              }),
              (r.prototype.setTransform = function (t) {
                this.ctx.translate(t.origin[0], t.origin[1]),
                  this.ctx.transform.apply(this.ctx, t.matrix),
                  this.ctx.translate(-t.origin[0], -t.origin[1]);
              }),
              (r.prototype.setVariable = function (t, e) {
                return (
                  this.variables[t] !== e &&
                    (this.variables[t] = this.ctx[t] = e),
                  this
                );
              }),
              (r.prototype.text = function (t, e, n) {
                this.ctx.fillText(t, e, n);
              }),
              (r.prototype.backgroundRepeatShape = function (
                t,
                e,
                n,
                r,
                i,
                o,
                a,
                s,
                c
              ) {
                var l = [
                  ["line", Math.round(i), Math.round(o)],
                  ["line", Math.round(i + a), Math.round(o)],
                  ["line", Math.round(i + a), Math.round(s + o)],
                  ["line", Math.round(i), Math.round(s + o)],
                ];
                this.clip(
                  [l],
                  function () {
                    this.renderBackgroundRepeat(t, e, n, r, c[3], c[0]);
                  },
                  this
                );
              }),
              (r.prototype.renderBackgroundRepeat = function (
                t,
                e,
                n,
                r,
                i,
                o
              ) {
                var a = Math.round(r.left + e.left + i),
                  s = Math.round(r.top + e.top + o);
                this.setFillStyle(
                  this.ctx.createPattern(this.resizeImage(t, n), "repeat")
                ),
                  this.ctx.translate(a, s),
                  this.ctx.fill(),
                  this.ctx.translate(-a, -s);
              }),
              (r.prototype.renderBackgroundGradient = function (t, e) {
                if (t instanceof a) {
                  var n = this.ctx.createLinearGradient(
                    e.left + e.width * t.x0,
                    e.top + e.height * t.y0,
                    e.left + e.width * t.x1,
                    e.top + e.height * t.y1
                  );
                  t.colorStops.forEach(function (t) {
                    n.addColorStop(t.stop, t.color.toString());
                  }),
                    this.rectangle(e.left, e.top, e.width, e.height, n);
                }
              }),
              (r.prototype.resizeImage = function (t, e) {
                var n = t.image;
                if (n.width === e.width && n.height === e.height) return n;
                var r,
                  i = document.createElement("canvas");
                return (
                  (i.width = e.width),
                  (i.height = e.height),
                  (r = i.getContext("2d")),
                  r.drawImage(
                    n,
                    0,
                    0,
                    n.width,
                    n.height,
                    0,
                    0,
                    e.width,
                    e.height
                  ),
                  i
                );
              }),
              (e.exports = r);
          },
          { "../lineargradientcontainer": 12, "../log": 13, "../renderer": 19 },
        ],
        21: [
          function (t, e, n) {
            function r(t, e, n, r) {
              i.call(this, n, r),
                (this.ownStacking = t),
                (this.contexts = []),
                (this.children = []),
                (this.opacity =
                  (this.parent ? this.parent.stack.opacity : 1) * e);
            }
            var i = t("./nodecontainer");
            (r.prototype = Object.create(i.prototype)),
              (r.prototype.getParentStack = function (t) {
                var e = this.parent ? this.parent.stack : null;
                return e ? (e.ownStacking ? e : e.getParentStack(t)) : t.stack;
              }),
              (e.exports = r);
          },
          { "./nodecontainer": 14 },
        ],
        22: [
          function (t, e, n) {
            function r(t) {
              (this.rangeBounds = this.testRangeBounds(t)),
                (this.cors = this.testCORS()),
                (this.svg = this.testSVG());
            }
            (r.prototype.testRangeBounds = function (t) {
              var e,
                n,
                r,
                i,
                o = !1;
              return (
                t.createRange &&
                  ((e = t.createRange()),
                  e.getBoundingClientRect &&
                    ((n = t.createElement("boundtest")),
                    (n.style.height = "123px"),
                    (n.style.display = "block"),
                    t.body.appendChild(n),
                    e.selectNode(n),
                    (r = e.getBoundingClientRect()),
                    (i = r.height),
                    123 === i && (o = !0),
                    t.body.removeChild(n))),
                o
              );
            }),
              (r.prototype.testCORS = function () {
                return "undefined" != typeof new Image().crossOrigin;
              }),
              (r.prototype.testSVG = function () {
                var t = new Image(),
                  e = document.createElement("canvas"),
                  n = e.getContext("2d");
                t.src =
                  "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
                try {
                  n.drawImage(t, 0, 0), e.toDataURL();
                } catch (t) {
                  return !1;
                }
                return !0;
              }),
              (e.exports = r);
          },
          {},
        ],
        23: [
          function (t, e, n) {
            function r(t) {
              (this.src = t), (this.image = null);
              var e = this;
              this.promise = this.hasFabric()
                .then(function () {
                  return e.isInline(t)
                    ? Promise.resolve(e.inlineFormatting(t))
                    : i(t);
                })
                .then(function (t) {
                  return new Promise(function (n) {
                    window.html2canvas.svg.fabric.loadSVGFromString(
                      t,
                      e.createCanvas.call(e, n)
                    );
                  });
                });
            }
            var i = t("./xhr"),
              o = t("./utils").decode64;
            (r.prototype.hasFabric = function () {
              return window.html2canvas.svg && window.html2canvas.svg.fabric
                ? Promise.resolve()
                : Promise.reject(
                    new Error(
                      "html2canvas.svg.js is not loaded, cannot render svg"
                    )
                  );
            }),
              (r.prototype.inlineFormatting = function (t) {
                return /^data:image\/svg\+xml;base64,/.test(t)
                  ? this.decode64(this.removeContentType(t))
                  : this.removeContentType(t);
              }),
              (r.prototype.removeContentType = function (t) {
                return t.replace(/^data:image\/svg\+xml(;base64)?,/, "");
              }),
              (r.prototype.isInline = function (t) {
                return /^data:image\/svg\+xml/i.test(t);
              }),
              (r.prototype.createCanvas = function (t) {
                var e = this;
                return function (n, r) {
                  var i = new window.html2canvas.svg.fabric.StaticCanvas("c");
                  (e.image = i.lowerCanvasEl),
                    i
                      .setWidth(r.width)
                      .setHeight(r.height)
                      .add(
                        window.html2canvas.svg.fabric.util.groupSVGElements(
                          n,
                          r
                        )
                      )
                      .renderAll(),
                    t(i.lowerCanvasEl);
                };
              }),
              (r.prototype.decode64 = function (t) {
                return "function" == typeof window.atob ? window.atob(t) : o(t);
              }),
              (e.exports = r);
          },
          { "./utils": 26, "./xhr": 28 },
        ],
        24: [
          function (t, e, n) {
            function r(t, e) {
              (this.src = t), (this.image = null);
              var n = this;
              this.promise = e
                ? new Promise(function (e, r) {
                    (n.image = new Image()),
                      (n.image.onload = e),
                      (n.image.onerror = r),
                      (n.image.src =
                        "data:image/svg+xml," +
                        new XMLSerializer().serializeToString(t)),
                      n.image.complete === !0 && e(n.image);
                  })
                : this.hasFabric().then(function () {
                    return new Promise(function (e) {
                      window.html2canvas.svg.fabric.parseSVGDocument(
                        t,
                        n.createCanvas.call(n, e)
                      );
                    });
                  });
            }
            var i = t("./svgcontainer");
            (r.prototype = Object.create(i.prototype)), (e.exports = r);
          },
          { "./svgcontainer": 23 },
        ],
        25: [
          function (t, e, n) {
            function r(t, e) {
              o.call(this, t, e);
            }
            function i(t, e, n) {
              if (t.length > 0) return e + n.toUpperCase();
            }
            var o = t("./nodecontainer");
            (r.prototype = Object.create(o.prototype)),
              (r.prototype.applyTextTransform = function () {
                this.node.data = this.transform(
                  this.parent.css("textTransform")
                );
              }),
              (r.prototype.transform = function (t) {
                var e = this.node.data;
                switch (t) {
                  case "lowercase":
                    return e.toLowerCase();
                  case "capitalize":
                    return e.replace(/(^|\s|:|-|\(|\))([a-z])/g, i);
                  case "uppercase":
                    return e.toUpperCase();
                  default:
                    return e;
                }
              }),
              (e.exports = r);
          },
          { "./nodecontainer": 14 },
        ],
        26: [
          function (t, e, n) {
            (n.smallImage = function () {
              return "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
            }),
              (n.bind = function (t, e) {
                return function () {
                  return t.apply(e, arguments);
                };
              }),
              /*
               * base64-arraybuffer
               * https://github.com/niklasvh/base64-arraybuffer
               *
               * Copyright (c) 2012 Niklas von Hertzen
               * Licensed under the MIT license.
               */ (n.decode64 = function (t) {
                var e,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  c,
                  l =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                  u = t.length,
                  h = "";
                for (e = 0; e < u; e += 4)
                  (n = l.indexOf(t[e])),
                    (r = l.indexOf(t[e + 1])),
                    (i = l.indexOf(t[e + 2])),
                    (o = l.indexOf(t[e + 3])),
                    (a = (n << 2) | (r >> 4)),
                    (s = ((15 & r) << 4) | (i >> 2)),
                    (c = ((3 & i) << 6) | o),
                    (h +=
                      64 === i
                        ? String.fromCharCode(a)
                        : 64 === o || o === -1
                        ? String.fromCharCode(a, s)
                        : String.fromCharCode(a, s, c));
                return h;
              }),
              (n.getBounds = function (t) {
                if (t.getBoundingClientRect) {
                  var e = t.getBoundingClientRect(),
                    n = null == t.offsetWidth ? e.width : t.offsetWidth;
                  return {
                    top: e.top,
                    bottom: e.bottom || e.top + e.height,
                    right: e.left + n,
                    left: e.left,
                    width: n,
                    height: null == t.offsetHeight ? e.height : t.offsetHeight,
                  };
                }
                return {};
              }),
              (n.offsetBounds = function (t) {
                var e = t.offsetParent
                  ? n.offsetBounds(t.offsetParent)
                  : { top: 0, left: 0 };
                return {
                  top: t.offsetTop + e.top,
                  bottom: t.offsetTop + t.offsetHeight + e.top,
                  right: t.offsetLeft + e.left + t.offsetWidth,
                  left: t.offsetLeft + e.left,
                  width: t.offsetWidth,
                  height: t.offsetHeight,
                };
              }),
              (n.parseBackgrounds = function (t) {
                var e,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  c = " \r\n\t",
                  l = [],
                  u = 0,
                  h = 0,
                  f = function () {
                    e &&
                      ('"' === n.substr(0, 1) &&
                        (n = n.substr(1, n.length - 2)),
                      n && s.push(n),
                      "-" === e.substr(0, 1) &&
                        (i = e.indexOf("-", 1) + 1) > 0 &&
                        ((r = e.substr(0, i)), (e = e.substr(i))),
                      l.push({
                        prefix: r,
                        method: e.toLowerCase(),
                        value: o,
                        args: s,
                        image: null,
                      })),
                      (s = []),
                      (e = r = n = o = "");
                  };
                return (
                  (s = []),
                  (e = r = n = o = ""),
                  t.split("").forEach(function (t) {
                    if (!(0 === u && c.indexOf(t) > -1)) {
                      switch (t) {
                        case '"':
                          a ? a === t && (a = null) : (a = t);
                          break;
                        case "(":
                          if (a) break;
                          if (0 === u) return (u = 1), void (o += t);
                          h++;
                          break;
                        case ")":
                          if (a) break;
                          if (1 === u) {
                            if (0 === h) return (u = 0), (o += t), void f();
                            h--;
                          }
                          break;
                        case ",":
                          if (a) break;
                          if (0 === u) return void f();
                          if (1 === u && 0 === h && !e.match(/^url$/i))
                            return s.push(n), (n = ""), void (o += t);
                      }
                      (o += t), 0 === u ? (e += t) : (n += t);
                    }
                  }),
                  f(),
                  l
                );
              });
          },
          {},
        ],
        27: [
          function (t, e, n) {
            function r(t) {
              i.apply(this, arguments),
                (this.type =
                  "linear" === t.args[0] ? i.TYPES.LINEAR : i.TYPES.RADIAL);
            }
            var i = t("./gradientcontainer");
            (r.prototype = Object.create(i.prototype)), (e.exports = r);
          },
          { "./gradientcontainer": 9 },
        ],
        28: [
          function (t, e, n) {
            function r(t) {
              return new Promise(function (e, n) {
                var r = new XMLHttpRequest();
                r.open("GET", t),
                  (r.onload = function () {
                    200 === r.status
                      ? e(r.responseText)
                      : n(new Error(r.statusText));
                  }),
                  (r.onerror = function () {
                    n(new Error("Network Error"));
                  }),
                  r.send();
              });
            }
            e.exports = r;
          },
          {},
        ],
      },
      {},
      [4]
    )(4);
  }) /*
# PNG.js
# Copyright (c) 2011 Devon Govett
# MIT LICENSE
#
#
*/,
    (function (t) {
      var e;
      (e = (function () {
        function e(t) {
          var e, n, r, i, o, a, s, c, l, u, h, f, d, p, g;
          for (
            this.data = t,
              this.pos = 8,
              this.palette = [],
              this.imgData = [],
              this.transparency = {},
              this.animation = null,
              this.text = {},
              a = null;
            ;

          ) {
            switch (
              ((e = this.readUInt32()),
              (u = function () {
                var t, e;
                for (e = [], s = t = 0; t < 4; s = ++t)
                  e.push(String.fromCharCode(this.data[this.pos++]));
                return e;
              }
                .call(this)
                .join("")))
            ) {
              case "IHDR":
                (this.width = this.readUInt32()),
                  (this.height = this.readUInt32()),
                  (this.bits = this.data[this.pos++]),
                  (this.colorType = this.data[this.pos++]),
                  (this.compressionMethod = this.data[this.pos++]),
                  (this.filterMethod = this.data[this.pos++]),
                  (this.interlaceMethod = this.data[this.pos++]);
                break;
              case "acTL":
                this.animation = {
                  numFrames: this.readUInt32(),
                  numPlays: this.readUInt32() || 1 / 0,
                  frames: [],
                };
                break;
              case "PLTE":
                this.palette = this.read(e);
                break;
              case "fcTL":
                a && this.animation.frames.push(a),
                  (this.pos += 4),
                  (a = {
                    width: this.readUInt32(),
                    height: this.readUInt32(),
                    xOffset: this.readUInt32(),
                    yOffset: this.readUInt32(),
                  }),
                  (o = this.readUInt16()),
                  (i = this.readUInt16() || 100),
                  (a.delay = (1e3 * o) / i),
                  (a.disposeOp = this.data[this.pos++]),
                  (a.blendOp = this.data[this.pos++]),
                  (a.data = []);
                break;
              case "IDAT":
              case "fdAT":
                for (
                  "fdAT" === u && ((this.pos += 4), (e -= 4)),
                    t = (null != a ? a.data : void 0) || this.imgData,
                    s = d = 0;
                  0 <= e ? d < e : d > e;
                  s = 0 <= e ? ++d : --d
                )
                  t.push(this.data[this.pos++]);
                break;
              case "tRNS":
                switch (((this.transparency = {}), this.colorType)) {
                  case 3:
                    if (
                      ((r = this.palette.length / 3),
                      (this.transparency.indexed = this.read(e)),
                      this.transparency.indexed.length > r)
                    )
                      throw new Error(
                        "More transparent colors than palette size"
                      );
                    if (((h = r - this.transparency.indexed.length), h > 0))
                      for (
                        s = p = 0;
                        0 <= h ? p < h : p > h;
                        s = 0 <= h ? ++p : --p
                      )
                        this.transparency.indexed.push(255);
                    break;
                  case 0:
                    this.transparency.grayscale = this.read(e)[0];
                    break;
                  case 2:
                    this.transparency.rgb = this.read(e);
                }
                break;
              case "tEXt":
                (f = this.read(e)),
                  (c = f.indexOf(0)),
                  (l = String.fromCharCode.apply(String, f.slice(0, c))),
                  (this.text[l] = String.fromCharCode.apply(
                    String,
                    f.slice(c + 1)
                  ));
                break;
              case "IEND":
                return (
                  a && this.animation.frames.push(a),
                  (this.colors = function () {
                    switch (this.colorType) {
                      case 0:
                      case 3:
                      case 4:
                        return 1;
                      case 2:
                      case 6:
                        return 3;
                    }
                  }.call(this)),
                  (this.hasAlphaChannel =
                    4 === (g = this.colorType) || 6 === g),
                  (n = this.colors + (this.hasAlphaChannel ? 1 : 0)),
                  (this.pixelBitlength = this.bits * n),
                  (this.colorSpace = function () {
                    switch (this.colors) {
                      case 1:
                        return "DeviceGray";
                      case 3:
                        return "DeviceRGB";
                    }
                  }.call(this)),
                  void (this.imgData = new Uint8Array(this.imgData))
                );
              default:
                this.pos += e;
            }
            if (((this.pos += 4), this.pos > this.data.length))
              throw new Error("Incomplete or corrupt PNG file");
          }
        }
        var n, r, i, o, a, s, l, u;
        (e.load = function (t, n, r) {
          var i;
          return (
            "function" == typeof n && (r = n),
            (i = new XMLHttpRequest()),
            i.open("GET", t, !0),
            (i.responseType = "arraybuffer"),
            (i.onload = function () {
              var t, o;
              return (
                (t = new Uint8Array(i.response || i.mozResponseArrayBuffer)),
                (o = new e(t)),
                "function" == typeof (null != n ? n.getContext : void 0) &&
                  o.render(n),
                "function" == typeof r ? r(o) : void 0
              );
            }),
            i.send(null)
          );
        }),
          (o = 0),
          (i = 1),
          (a = 2),
          (r = 0),
          (n = 1),
          (e.prototype.read = function (t) {
            var e, n, r;
            for (
              r = [], e = n = 0;
              0 <= t ? n < t : n > t;
              e = 0 <= t ? ++n : --n
            )
              r.push(this.data[this.pos++]);
            return r;
          }),
          (e.prototype.readUInt32 = function () {
            var t, e, n, r;
            return (
              (t = this.data[this.pos++] << 24),
              (e = this.data[this.pos++] << 16),
              (n = this.data[this.pos++] << 8),
              (r = this.data[this.pos++]),
              t | e | n | r
            );
          }),
          (e.prototype.readUInt16 = function () {
            var t, e;
            return (
              (t = this.data[this.pos++] << 8),
              (e = this.data[this.pos++]),
              t | e
            );
          }),
          (e.prototype.decodePixels = function (t) {
            var e,
              n,
              r,
              i,
              o,
              a,
              s,
              l,
              u,
              h,
              f,
              d,
              p,
              g,
              m,
              w,
              y,
              v,
              b,
              x,
              k,
              _,
              C;
            if ((null == t && (t = this.imgData), 0 === t.length))
              return new Uint8Array(0);
            for (
              t = new c(t),
                t = t.getBytes(),
                d = this.pixelBitlength / 8,
                w = d * this.width,
                p = new Uint8Array(w * this.height),
                a = t.length,
                m = 0,
                g = 0,
                n = 0;
              g < a;

            ) {
              switch (t[g++]) {
                case 0:
                  for (i = b = 0; b < w; i = b += 1) p[n++] = t[g++];
                  break;
                case 1:
                  for (i = x = 0; x < w; i = x += 1)
                    (e = t[g++]),
                      (o = i < d ? 0 : p[n - d]),
                      (p[n++] = (e + o) % 256);
                  break;
                case 2:
                  for (i = k = 0; k < w; i = k += 1)
                    (e = t[g++]),
                      (r = (i - (i % d)) / d),
                      (y = m && p[(m - 1) * w + r * d + (i % d)]),
                      (p[n++] = (y + e) % 256);
                  break;
                case 3:
                  for (i = _ = 0; _ < w; i = _ += 1)
                    (e = t[g++]),
                      (r = (i - (i % d)) / d),
                      (o = i < d ? 0 : p[n - d]),
                      (y = m && p[(m - 1) * w + r * d + (i % d)]),
                      (p[n++] = (e + Math.floor((o + y) / 2)) % 256);
                  break;
                case 4:
                  for (i = C = 0; C < w; i = C += 1)
                    (e = t[g++]),
                      (r = (i - (i % d)) / d),
                      (o = i < d ? 0 : p[n - d]),
                      0 === m
                        ? (y = v = 0)
                        : ((y = p[(m - 1) * w + r * d + (i % d)]),
                          (v = r && p[(m - 1) * w + (r - 1) * d + (i % d)])),
                      (s = o + y - v),
                      (l = Math.abs(s - o)),
                      (h = Math.abs(s - y)),
                      (f = Math.abs(s - v)),
                      (u = l <= h && l <= f ? o : h <= f ? y : v),
                      (p[n++] = (e + u) % 256);
                  break;
                default:
                  throw new Error("Invalid filter algorithm: " + t[g - 1]);
              }
              m++;
            }
            return p;
          }),
          (e.prototype.decodePalette = function () {
            var t, e, n, r, i, o, a, s, c, l;
            for (
              r = this.palette,
                a = this.transparency.indexed || [],
                o = new Uint8Array((a.length || 0) + r.length),
                i = 0,
                n = r.length,
                t = 0,
                e = s = 0,
                c = r.length;
              s < c;
              e = s += 3
            )
              (o[i++] = r[e]),
                (o[i++] = r[e + 1]),
                (o[i++] = r[e + 2]),
                (o[i++] = null != (l = a[t++]) ? l : 255);
            return o;
          }),
          (e.prototype.copyToImageData = function (t, e) {
            var n, r, i, o, a, s, c, l, u, h, f;
            if (
              ((r = this.colors),
              (u = null),
              (n = this.hasAlphaChannel),
              this.palette.length &&
                ((u =
                  null != (f = this._decodedPalette)
                    ? f
                    : (this._decodedPalette = this.decodePalette())),
                (r = 4),
                (n = !0)),
              (i = t.data || t),
              (l = i.length),
              (a = u || e),
              (o = s = 0),
              1 === r)
            )
              for (; o < l; )
                (c = u ? 4 * e[o / 4] : s),
                  (h = a[c++]),
                  (i[o++] = h),
                  (i[o++] = h),
                  (i[o++] = h),
                  (i[o++] = n ? a[c++] : 255),
                  (s = c);
            else
              for (; o < l; )
                (c = u ? 4 * e[o / 4] : s),
                  (i[o++] = a[c++]),
                  (i[o++] = a[c++]),
                  (i[o++] = a[c++]),
                  (i[o++] = n ? a[c++] : 255),
                  (s = c);
          }),
          (e.prototype.decode = function () {
            var t;
            return (
              (t = new Uint8Array(this.width * this.height * 4)),
              this.copyToImageData(t, this.decodePixels()),
              t
            );
          });
        try {
          (l = t.document.createElement("canvas")), (u = l.getContext("2d"));
        } catch (t) {
          return -1;
        }
        return (
          (s = function (t) {
            var e;
            return (
              (u.width = t.width),
              (u.height = t.height),
              u.clearRect(0, 0, t.width, t.height),
              u.putImageData(t, 0, 0),
              (e = new Image()),
              (e.src = l.toDataURL()),
              e
            );
          }),
          (e.prototype.decodeFrames = function (t) {
            var e, n, r, i, o, a, c, l;
            if (this.animation) {
              for (
                c = this.animation.frames, l = [], n = o = 0, a = c.length;
                o < a;
                n = ++o
              )
                (e = c[n]),
                  (r = t.createImageData(e.width, e.height)),
                  (i = this.decodePixels(new Uint8Array(e.data))),
                  this.copyToImageData(r, i),
                  (e.imageData = r),
                  l.push((e.image = s(r)));
              return l;
            }
          }),
          (e.prototype.renderFrame = function (t, e) {
            var n, o, s;
            return (
              (o = this.animation.frames),
              (n = o[e]),
              (s = o[e - 1]),
              0 === e && t.clearRect(0, 0, this.width, this.height),
              (null != s ? s.disposeOp : void 0) === i
                ? t.clearRect(s.xOffset, s.yOffset, s.width, s.height)
                : (null != s ? s.disposeOp : void 0) === a &&
                  t.putImageData(s.imageData, s.xOffset, s.yOffset),
              n.blendOp === r &&
                t.clearRect(n.xOffset, n.yOffset, n.width, n.height),
              t.drawImage(n.image, n.xOffset, n.yOffset)
            );
          }),
          (e.prototype.animate = function (t) {
            var e,
              n,
              r,
              i,
              o,
              a,
              s = this;
            return (
              (n = 0),
              (a = this.animation),
              (i = a.numFrames),
              (r = a.frames),
              (o = a.numPlays),
              (e = function () {
                var a, c;
                if (
                  ((a = n++ % i),
                  (c = r[a]),
                  s.renderFrame(t, a),
                  i > 1 && n / i < o)
                )
                  return (s.animation._timeout = setTimeout(e, c.delay));
              })()
            );
          }),
          (e.prototype.stopAnimation = function () {
            var t;
            return clearTimeout(
              null != (t = this.animation) ? t._timeout : void 0
            );
          }),
          (e.prototype.render = function (t) {
            var e, n;
            return (
              t._png && t._png.stopAnimation(),
              (t._png = this),
              (t.width = this.width),
              (t.height = this.height),
              (e = t.getContext("2d")),
              this.animation
                ? (this.decodeFrames(e), this.animate(e))
                : ((n = e.createImageData(this.width, this.height)),
                  this.copyToImageData(n, this.decodePixels()),
                  e.putImageData(n, 0, 0))
            );
          }),
          e
        );
      })()),
        (t.PNG = e);
    })(("undefined" != typeof window && window) || void 0);
  /*
   * Extracted from pdf.js
   * https://github.com/andreasgal/pdf.js
   *
   * Copyright (c) 2011 Mozilla Foundation
   *
   * Contributors: Andreas Gal <gal@mozilla.com>
   *               Chris G Jones <cjones@mozilla.com>
   *               Shaon Barman <shaon.barman@gmail.com>
   *               Vivien Nicolas <21@vingtetun.org>
   *               Justin D'Arcangelo <justindarc@gmail.com>
   *               Yury Delendik
   *
   *
   */
  var s = (function () {
      function t() {
        (this.pos = 0),
          (this.bufferLength = 0),
          (this.eof = !1),
          (this.buffer = null);
      }
      return (
        (t.prototype = {
          ensureBuffer: function (t) {
            var e = this.buffer,
              n = e ? e.byteLength : 0;
            if (t < n) return e;
            for (var r = 512; r < t; ) r <<= 1;
            for (var i = new Uint8Array(r), o = 0; o < n; ++o) i[o] = e[o];
            return (this.buffer = i);
          },
          getByte: function () {
            for (var t = this.pos; this.bufferLength <= t; ) {
              if (this.eof) return null;
              this.readBlock();
            }
            return this.buffer[this.pos++];
          },
          getBytes: function (t) {
            var e = this.pos;
            if (t) {
              this.ensureBuffer(e + t);
              for (var n = e + t; !this.eof && this.bufferLength < n; )
                this.readBlock();
              var r = this.bufferLength;
              n > r && (n = r);
            } else {
              for (; !this.eof; ) this.readBlock();
              var n = this.bufferLength;
            }
            return (this.pos = n), this.buffer.subarray(e, n);
          },
          lookChar: function () {
            for (var t = this.pos; this.bufferLength <= t; ) {
              if (this.eof) return null;
              this.readBlock();
            }
            return String.fromCharCode(this.buffer[this.pos]);
          },
          getChar: function () {
            for (var t = this.pos; this.bufferLength <= t; ) {
              if (this.eof) return null;
              this.readBlock();
            }
            return String.fromCharCode(this.buffer[this.pos++]);
          },
          makeSubStream: function (t, e, n) {
            for (var r = t + e; this.bufferLength <= r && !this.eof; )
              this.readBlock();
            return new Stream(this.buffer, t, e, n);
          },
          skip: function (t) {
            t || (t = 1), (this.pos += t);
          },
          reset: function () {
            this.pos = 0;
          },
        }),
        t
      );
    })(),
    c = (function () {
      function t(t) {
        throw new Error(t);
      }
      function e(e) {
        var n = 0,
          r = e[n++],
          i = e[n++];
        (r != -1 && i != -1) || t("Invalid header in flate stream"),
          8 != (15 & r) && t("Unknown compression method in flate stream"),
          ((r << 8) + i) % 31 != 0 && t("Bad FCHECK in flate stream"),
          32 & i && t("FDICT bit set in flate stream"),
          (this.bytes = e),
          (this.bytesPos = n),
          (this.codeSize = 0),
          (this.codeBuf = 0),
          s.call(this);
      }
      if ("undefined" != typeof Uint32Array) {
        var n = new Uint32Array([
            16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
          ]),
          r = new Uint32Array([
            3, 4, 5, 6, 7, 8, 9, 10, 65547, 65549, 65551, 65553, 131091, 131095,
            131099, 131103, 196643, 196651, 196659, 196667, 262211, 262227,
            262243, 262259, 327811, 327843, 327875, 327907, 258, 258, 258,
          ]),
          i = new Uint32Array([
            1, 2, 3, 4, 65541, 65543, 131081, 131085, 196625, 196633, 262177,
            262193, 327745, 327777, 393345, 393409, 459009, 459137, 524801,
            525057, 590849, 591361, 657409, 658433, 724993, 727041, 794625,
            798721, 868353, 876545,
          ]),
          o = [
            new Uint32Array([
              459008, 524368, 524304, 524568, 459024, 524400, 524336, 590016,
              459016, 524384, 524320, 589984, 524288, 524416, 524352, 590048,
              459012, 524376, 524312, 589968, 459028, 524408, 524344, 590032,
              459020, 524392, 524328, 59e4, 524296, 524424, 524360, 590064,
              459010, 524372, 524308, 524572, 459026, 524404, 524340, 590024,
              459018, 524388, 524324, 589992, 524292, 524420, 524356, 590056,
              459014, 524380, 524316, 589976, 459030, 524412, 524348, 590040,
              459022, 524396, 524332, 590008, 524300, 524428, 524364, 590072,
              459009, 524370, 524306, 524570, 459025, 524402, 524338, 590020,
              459017, 524386, 524322, 589988, 524290, 524418, 524354, 590052,
              459013, 524378, 524314, 589972, 459029, 524410, 524346, 590036,
              459021, 524394, 524330, 590004, 524298, 524426, 524362, 590068,
              459011, 524374, 524310, 524574, 459027, 524406, 524342, 590028,
              459019, 524390, 524326, 589996, 524294, 524422, 524358, 590060,
              459015, 524382, 524318, 589980, 459031, 524414, 524350, 590044,
              459023, 524398, 524334, 590012, 524302, 524430, 524366, 590076,
              459008, 524369, 524305, 524569, 459024, 524401, 524337, 590018,
              459016, 524385, 524321, 589986, 524289, 524417, 524353, 590050,
              459012, 524377, 524313, 589970, 459028, 524409, 524345, 590034,
              459020, 524393, 524329, 590002, 524297, 524425, 524361, 590066,
              459010, 524373, 524309, 524573, 459026, 524405, 524341, 590026,
              459018, 524389, 524325, 589994, 524293, 524421, 524357, 590058,
              459014, 524381, 524317, 589978, 459030, 524413, 524349, 590042,
              459022, 524397, 524333, 590010, 524301, 524429, 524365, 590074,
              459009, 524371, 524307, 524571, 459025, 524403, 524339, 590022,
              459017, 524387, 524323, 589990, 524291, 524419, 524355, 590054,
              459013, 524379, 524315, 589974, 459029, 524411, 524347, 590038,
              459021, 524395, 524331, 590006, 524299, 524427, 524363, 590070,
              459011, 524375, 524311, 524575, 459027, 524407, 524343, 590030,
              459019, 524391, 524327, 589998, 524295, 524423, 524359, 590062,
              459015, 524383, 524319, 589982, 459031, 524415, 524351, 590046,
              459023, 524399, 524335, 590014, 524303, 524431, 524367, 590078,
              459008, 524368, 524304, 524568, 459024, 524400, 524336, 590017,
              459016, 524384, 524320, 589985, 524288, 524416, 524352, 590049,
              459012, 524376, 524312, 589969, 459028, 524408, 524344, 590033,
              459020, 524392, 524328, 590001, 524296, 524424, 524360, 590065,
              459010, 524372, 524308, 524572, 459026, 524404, 524340, 590025,
              459018, 524388, 524324, 589993, 524292, 524420, 524356, 590057,
              459014, 524380, 524316, 589977, 459030, 524412, 524348, 590041,
              459022, 524396, 524332, 590009, 524300, 524428, 524364, 590073,
              459009, 524370, 524306, 524570, 459025, 524402, 524338, 590021,
              459017, 524386, 524322, 589989, 524290, 524418, 524354, 590053,
              459013, 524378, 524314, 589973, 459029, 524410, 524346, 590037,
              459021, 524394, 524330, 590005, 524298, 524426, 524362, 590069,
              459011, 524374, 524310, 524574, 459027, 524406, 524342, 590029,
              459019, 524390, 524326, 589997, 524294, 524422, 524358, 590061,
              459015, 524382, 524318, 589981, 459031, 524414, 524350, 590045,
              459023, 524398, 524334, 590013, 524302, 524430, 524366, 590077,
              459008, 524369, 524305, 524569, 459024, 524401, 524337, 590019,
              459016, 524385, 524321, 589987, 524289, 524417, 524353, 590051,
              459012, 524377, 524313, 589971, 459028, 524409, 524345, 590035,
              459020, 524393, 524329, 590003, 524297, 524425, 524361, 590067,
              459010, 524373, 524309, 524573, 459026, 524405, 524341, 590027,
              459018, 524389, 524325, 589995, 524293, 524421, 524357, 590059,
              459014, 524381, 524317, 589979, 459030, 524413, 524349, 590043,
              459022, 524397, 524333, 590011, 524301, 524429, 524365, 590075,
              459009, 524371, 524307, 524571, 459025, 524403, 524339, 590023,
              459017, 524387, 524323, 589991, 524291, 524419, 524355, 590055,
              459013, 524379, 524315, 589975, 459029, 524411, 524347, 590039,
              459021, 524395, 524331, 590007, 524299, 524427, 524363, 590071,
              459011, 524375, 524311, 524575, 459027, 524407, 524343, 590031,
              459019, 524391, 524327, 589999, 524295, 524423, 524359, 590063,
              459015, 524383, 524319, 589983, 459031, 524415, 524351, 590047,
              459023, 524399, 524335, 590015, 524303, 524431, 524367, 590079,
            ]),
            9,
          ],
          a = [
            new Uint32Array([
              327680, 327696, 327688, 327704, 327684, 327700, 327692, 327708,
              327682, 327698, 327690, 327706, 327686, 327702, 327694, 0, 327681,
              327697, 327689, 327705, 327685, 327701, 327693, 327709, 327683,
              327699, 327691, 327707, 327687, 327703, 327695, 0,
            ]),
            5,
          ];
        return (
          (e.prototype = Object.create(s.prototype)),
          (e.prototype.getBits = function (e) {
            for (
              var n,
                r = this.codeSize,
                i = this.codeBuf,
                o = this.bytes,
                a = this.bytesPos;
              r < e;

            )
              "undefined" == typeof (n = o[a++]) &&
                t("Bad encoding in flate stream"),
                (i |= n << r),
                (r += 8);
            return (
              (n = i & ((1 << e) - 1)),
              (this.codeBuf = i >> e),
              (this.codeSize = r -= e),
              (this.bytesPos = a),
              n
            );
          }),
          (e.prototype.getCode = function (e) {
            for (
              var n = e[0],
                r = e[1],
                i = this.codeSize,
                o = this.codeBuf,
                a = this.bytes,
                s = this.bytesPos;
              i < r;

            ) {
              var c;
              "undefined" == typeof (c = a[s++]) &&
                t("Bad encoding in flate stream"),
                (o |= c << i),
                (i += 8);
            }
            var l = n[o & ((1 << r) - 1)],
              u = l >> 16,
              h = 65535 & l;
            return (
              (0 == i || i < u || 0 == u) && t("Bad encoding in flate stream"),
              (this.codeBuf = o >> u),
              (this.codeSize = i - u),
              (this.bytesPos = s),
              h
            );
          }),
          (e.prototype.generateHuffmanTable = function (t) {
            for (var e = t.length, n = 0, r = 0; r < e; ++r)
              t[r] > n && (n = t[r]);
            for (
              var i = 1 << n, o = new Uint32Array(i), a = 1, s = 0, c = 2;
              a <= n;
              ++a, s <<= 1, c <<= 1
            )
              for (var l = 0; l < e; ++l)
                if (t[l] == a) {
                  for (var u = 0, h = s, r = 0; r < a; ++r)
                    (u = (u << 1) | (1 & h)), (h >>= 1);
                  for (var r = u; r < i; r += c) o[r] = (a << 16) | l;
                  ++s;
                }
            return [o, n];
          }),
          (e.prototype.readBlock = function () {
            function e(t, e, n, r, i) {
              for (var o = t.getBits(n) + r; o-- > 0; ) e[_++] = i;
            }
            var s = this.getBits(3);
            if ((1 & s && (this.eof = !0), (s >>= 1), 0 == s)) {
              var c,
                l = this.bytes,
                u = this.bytesPos;
              "undefined" == typeof (c = l[u++]) &&
                t("Bad block header in flate stream");
              var h = c;
              "undefined" == typeof (c = l[u++]) &&
                t("Bad block header in flate stream"),
                (h |= c << 8),
                "undefined" == typeof (c = l[u++]) &&
                  t("Bad block header in flate stream");
              var f = c;
              "undefined" == typeof (c = l[u++]) &&
                t("Bad block header in flate stream"),
                (f |= c << 8),
                f != (65535 & ~h) &&
                  t("Bad uncompressed block length in flate stream"),
                (this.codeBuf = 0),
                (this.codeSize = 0);
              var d = this.bufferLength,
                p = this.ensureBuffer(d + h),
                g = d + h;
              this.bufferLength = g;
              for (var m = d; m < g; ++m) {
                if ("undefined" == typeof (c = l[u++])) {
                  this.eof = !0;
                  break;
                }
                p[m] = c;
              }
              return void (this.bytesPos = u);
            }
            var w, y;
            if (1 == s) (w = o), (y = a);
            else if (2 == s) {
              for (
                var v = this.getBits(5) + 257,
                  b = this.getBits(5) + 1,
                  x = this.getBits(4) + 4,
                  k = Array(n.length),
                  _ = 0;
                _ < x;

              )
                k[n[_++]] = this.getBits(3);
              for (
                var C = this.generateHuffmanTable(k),
                  A = 0,
                  _ = 0,
                  S = v + b,
                  q = new Array(S);
                _ < S;

              ) {
                var T = this.getCode(C);
                16 == T
                  ? e(this, q, 2, 3, A)
                  : 17 == T
                  ? e(this, q, 3, 3, (A = 0))
                  : 18 == T
                  ? e(this, q, 7, 11, (A = 0))
                  : (q[_++] = A = T);
              }
              (w = this.generateHuffmanTable(q.slice(0, v))),
                (y = this.generateHuffmanTable(q.slice(v, S)));
            } else t("Unknown block type in flate stream");
            for (
              var p = this.buffer, P = p ? p.length : 0, I = this.bufferLength;
              ;

            ) {
              var E = this.getCode(w);
              if (E < 256)
                I + 1 >= P && ((p = this.ensureBuffer(I + 1)), (P = p.length)),
                  (p[I++] = E);
              else {
                if (256 == E) return void (this.bufferLength = I);
                (E -= 257), (E = r[E]);
                var O = E >> 16;
                O > 0 && (O = this.getBits(O));
                var A = (65535 & E) + O;
                (E = this.getCode(y)),
                  (E = i[E]),
                  (O = E >> 16),
                  O > 0 && (O = this.getBits(O));
                var F = (65535 & E) + O;
                I + A >= P && ((p = this.ensureBuffer(I + A)), (P = p.length));
                for (var R = 0; R < A; ++R, ++I) p[I] = p[I - F];
              }
            }
          }),
          e
        );
      }
    })();
  return (
    (function (t) {
      var e =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      "undefined" == typeof t.btoa &&
        (t.btoa = function (t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            c,
            l,
            u = 0,
            h = 0,
            f = "",
            d = [];
          if (!t) return t;
          do
            (n = t.charCodeAt(u++)),
              (r = t.charCodeAt(u++)),
              (i = t.charCodeAt(u++)),
              (l = (n << 16) | (r << 8) | i),
              (o = (l >> 18) & 63),
              (a = (l >> 12) & 63),
              (s = (l >> 6) & 63),
              (c = 63 & l),
              (d[h++] = e.charAt(o) + e.charAt(a) + e.charAt(s) + e.charAt(c));
          while (u < t.length);
          f = d.join("");
          var p = t.length % 3;
          return (p ? f.slice(0, p - 3) : f) + "===".slice(p || 3);
        }),
        "undefined" == typeof t.atob &&
          (t.atob = function (t) {
            var n,
              r,
              i,
              o,
              a,
              s,
              c,
              l,
              u = 0,
              h = 0,
              f = "",
              d = [];
            if (!t) return t;
            t += "";
            do
              (o = e.indexOf(t.charAt(u++))),
                (a = e.indexOf(t.charAt(u++))),
                (s = e.indexOf(t.charAt(u++))),
                (c = e.indexOf(t.charAt(u++))),
                (l = (o << 18) | (a << 12) | (s << 6) | c),
                (n = (l >> 16) & 255),
                (r = (l >> 8) & 255),
                (i = 255 & l),
                64 == s
                  ? (d[h++] = String.fromCharCode(n))
                  : 64 == c
                  ? (d[h++] = String.fromCharCode(n, r))
                  : (d[h++] = String.fromCharCode(n, r, i));
            while (u < t.length);
            return (f = d.join(""));
          }),
        Array.prototype.map ||
          (Array.prototype.map = function (t) {
            if (void 0 === this || null === this || "function" != typeof t)
              throw new TypeError();
            for (
              var e = Object(this),
                n = e.length >>> 0,
                r = new Array(n),
                i = arguments.length > 1 ? arguments[1] : void 0,
                o = 0;
              o < n;
              o++
            )
              o in e && (r[o] = t.call(i, e[o], o, e));
            return r;
          }),
        Array.isArray ||
          (Array.isArray = function (t) {
            return "[object Array]" === Object.prototype.toString.call(t);
          }),
        Array.prototype.forEach ||
          (Array.prototype.forEach = function (t, e) {
            if (void 0 === this || null === this || "function" != typeof t)
              throw new TypeError();
            for (var n = Object(this), r = n.length >>> 0, i = 0; i < r; i++)
              i in n && t.call(e, n[i], i, n);
          }),
        Object.keys ||
          (Object.keys = (function () {
            var t = Object.prototype.hasOwnProperty,
              e = !{ toString: null }.propertyIsEnumerable("toString"),
              n = [
                "toString",
                "toLocaleString",
                "valueOf",
                "hasOwnProperty",
                "isPrototypeOf",
                "propertyIsEnumerable",
                "constructor",
              ],
              r = n.length;
            return function (i) {
              if (
                "object" != typeof i &&
                ("function" != typeof i || null === i)
              )
                throw new TypeError();
              var o,
                a,
                s = [];
              for (o in i) t.call(i, o) && s.push(o);
              if (e) for (a = 0; a < r; a++) t.call(i, n[a]) && s.push(n[a]);
              return s;
            };
          })()),
        String.prototype.trim ||
          (String.prototype.trim = function () {
            return this.replace(/^\s+|\s+$/g, "");
          }),
        String.prototype.trimLeft ||
          (String.prototype.trimLeft = function () {
            return this.replace(/^\s+/g, "");
          }),
        String.prototype.trimRight ||
          (String.prototype.trimRight = function () {
            return this.replace(/\s+$/g, "");
          });
    })(
      ("undefined" != typeof self && self) ||
        ("undefined" != typeof window && window) ||
        void 0
    ),
    e
  );
});

// zine-----------------------------------------
// customized functions
p5.prototype.Background = function (r, g, b) {
  if (typeof r === "string") {
    if (r.indexOf("rgb") > -1) {
      let colorArr = r.slice(r.indexOf("(") + 1, r.indexOf(")")).split(",");
      this.background(
        colorArr.map((str) => {
          return Number(str);
        })
      );
    } else {
      this.background(r);
    }
  }
  this.background(r, g, b);
};

p5.prototype.selfieBackground = function (r, g, b) {
  this.push();
  this.translate(this.width, 0);
  this.scale(-1, 1);

  if (r != undefined && g != undefined && b != undefined) {
    this.tint(r, g, b);
  }

  if (selfie.height > selfie.width) {
    this.image(
      selfie,
      0,
      0,
      this.width,
      (this.height * selfie.height) / selfie.width
    );
  } else {
    this.image(
      selfie,
      -50,
      0,
      (this.width * selfie.width) / selfie.height,
      this.height
    );
  }
  this.pop();
};

p5.prototype.rightCamera = function () {
  image(
    capture,
    0,
    0,
    this.width,
    (this.width * capture.height) / capture.width
  );
};

p5.prototype.randomLayout = function (
  word = ["word"],
  size = 7,
  num = 5,
  repeat = 20,
  fun = false
) {
  const sizer = size * 10;
  this.push();

  this.translate(this.width / 2, this.height / 2);
  for (let i = 0; i < repeat; i++) {
    for (let j = 0; j < word.length; j++) {
      if (fun) {
        this.textSize(random(20, 100));
      }
      if (typeof word[j] === "string") {
        this.text(
          word[j],
          random(-(this.width / 10) * num, (this.width / 10) * num),
          random(-(this.height / 10) * num, (this.height / 10) * num)
        );
      } else if (typeof word[j] === "object") {
        let ar = word[j].width / word[j].height;
        this.image(
          word[j],
          random(-(this.width / 10) * num, (this.width / 10) * num),
          random(-(this.height / 10) * num, (this.height / 10) * num),
          sizer * ar * 2,
          sizer * 2
        );
      }
    }
  }
  this.pop();
};

p5.prototype.gridLayout = function (
  word = ["word"],
  size = 7,
  columnNum = 5,
  repeat = 15,
  fun = false
) {
  this.push();
  this.translate(10, 30);
  let row = 0,
    column = 0;
  let num = 0;
  let sizer = size * 10;

  for (let i = 0; i < repeat; i++) {
    for (let j = 0; j < word.length; j++) {
      if (fun) {
        const rowNum = int(random(5, 10));
        row = floor(num / rowNum);
        column = num % columnNum;
      } else {
        row = floor(num / columnNum);
        column = num % columnNum;
      }

      if (typeof word[j] === "string") {
        this.text(word[j], column * sizer * 2.5, row * sizer * 2.5);
      } else if (typeof word[j] === "object") {
        let ar = word[j].width / word[j].height;
        this.image(
          word[j],
          column * sizer * 2.5 - sizer / 2,
          row * sizer * 2.5 - sizer,
          sizer * ar * 2,
          sizer * 2
        );
      }
      num++;
    }
  }
  this.pop();
};

p5.prototype.glitchLayout = function (
  word = ["word"],
  sizer = 7,
  numMax = 5,
  repeat = 20,
  fun = false
) {
  let wave;
  if (fun) {
    wave = random(100);
  } else {
    wave = random(10, 20);
  }

  for (let i = 0; i < repeat; i++) {
    const num = random(1, numMax);

    for (let j = 0; j < word.length; j++) {
      const w = random(this.width);
      const h = random(this.height);

      for (let n = 0; n < num; n++) {
        if (typeof word[j] === "string") {
          this.text(word[j], w + n * 20, h + sin(n * wave) * 30);
        } else if (typeof word[j] === "object") {
          let ar = word[j].width / word[j].height;
          this.image(
            word[j],
            w + n * 30,
            h + sin(n * wave) * 40,
            10 * ar * 2 * sizer + n * 5,
            10 * 2 * sizer
          );
        }
      }
    }
  }
};

p5.prototype.leftBackground = function (r, g, b) {
  this.push();
  this.noStroke();
  if (typeof r === "string") {
    if (r.indexOf("rgb") > -1) {
      let colorArr = r.slice(r.indexOf("(") + 1, r.indexOf(")")).split(",");
      this.fill(
        colorArr.map((str) => {
          return Number(str);
        })
      );
    } else {
      this.fill(r);
    }
  } else {
    this.fill(r, g, b);
  }
  this.rect(0, 0, this.width / 2, this.height);
  this.pop();
};

p5.prototype.rightBackground = function (r, g, b) {
  this.push();
  this.noStroke();
  if (typeof r === "string") {
    if (r.indexOf("rgb") > -1) {
      let colorArr = r.slice(r.indexOf("(") + 1, r.indexOf(")")).split(",");
      this.fill(
        colorArr.map((str) => {
          return Number(str);
        })
      );
    } else {
      this.fill(r);
    }
  } else {
    this.fill(r, g, b);
  }
  this.rect(this.width / 2, 0, this.width / 2, this.height);
  this.pop();
};

p5.prototype.fullPage = function (material) {
  let size;

  if (typeof material === "object") {
    if (material.width > material.height) {
      size = this.height;
      let ar = material.width / material.height;
      this.image(material, 0, 0, size * ar, size);
    } else {
      size = this.width;
      let ar = material.height / material.width;
      this.image(material, 0, 0, size, size * ar);
    }
  } else {
    this.text(material, 10, 10, this.width - 20);
  }
};

p5.prototype.leftPage = function (material, offsetX, offsetY) {
  this.push();
  this.translate(offsetX, offsetY);
  if (typeof material === "object") {
    this.push();
    if (material.width > material.height) {
      size = this.height;
      let ar = material.width / material.height;
      this.image(material, 0, 0, size * ar, size);
    } else {
      size = this.width / 2;
      let ar = material.height / material.width;
      this.image(material, 0, 0, size, size * ar);
    }
    this.pop();
  } else {
    this.push();

    if (typeof material === "string") {
      this.text(material, 10, 10, this.width / 2 - 20);
    }
    this.pop();
  }
  this.pop();
};

p5.prototype.rightPage = function (material, offsetX, offsetY) {
  this.push();
  this.translate(offsetX, offsetY);
  if (typeof material === "object") {
    this.push();
    this.translate(this.width / 2, 0);

    if (typeof material === "object") {
      if (material.width > material.height) {
        size = this.height;
        let ar = material.width / material.height;
        this.image(material, 0, 0, size * ar, size);
      } else {
        size = this.width / 2;
        let ar = material.height / material.width;
        this.image(material, 0, 0, size, size * ar);
      }
    }
    this.pop();
  } else {
    this.push();
    this.translate(this.width / 2, 0);

    if (typeof material === "string") {
      this.text(material, 10, 10, this.width / 2 - 20);
    }
    this.pop();
  }
  this.pop();
};

p5.prototype.textSet = function (
  theFont = "Averia Libre",
  theSize = 20,
  theAlign = LEFT,
  theLead = theSize,
  theColor
) {
  if (typeof theColor !== "undefined" && typeof theColor !== null) {
    this.fill(theColor);
  }
  this.textFont(theFont);
  this.textSize(theSize);
  this.textAlign(theAlign);
  this.textLeading(theLead);
};

p5.prototype.textBox = function (
  inputText,
  startX = 0,
  startY = 0,
  boxWidth = this.width,
  boxHeight = this.height,
  gapX = 50,
  showBox = false
) {
  let paragraphs = inputText.split("\n");
  let lineHeight = this.textAscent() + this.textDescent();
  let currentY = startY;
  let currentX = startX;
  let textAlignMode = this.textAlign().horizontal;
  let textVerticalAlignMode = this.textAlign().vertical;

  let linesInColumn = [];
  let currentColumn = 0;
  let linesCount = 0;

  // Calculate the total number of lines in each column
  for (const paragraph of paragraphs) {
    let words = paragraph.split(" ");
    let currentLine = words[0];

    for (let i = 1; i < words.length + 1; i++) {
      let word = words[i];
      let nextLine = currentLine + " " + word;

      if (i < words.length && ceil(this.textWidth(nextLine)) < boxWidth) {
        currentLine = nextLine;
      } else {
        linesCount++;
        currentY += lineHeight;

        if (currentY + lineHeight > startY + boxHeight) {
          linesInColumn[currentColumn] = linesCount;
          linesCount = 0;
          currentY = startY;
          currentX += boxWidth + gapX;
          currentColumn++;
        }

        currentLine = word;
      }
    }
  }

  linesInColumn[currentColumn] = linesCount;

  // Draw the text with the correct alignment
  currentY = startY;
  currentX = startX;
  currentColumn = 0;
  linesCount = 0;

  for (const paragraph of paragraphs) {
    let words = paragraph.split(" ");
    let currentLine = words[0];

    for (let i = 1; i < words.length + 1; i++) {
      let word = words[i];
      let nextLine = currentLine + " " + word;

      if (i < words.length && ceil(this.textWidth(nextLine)) < boxWidth) {
        currentLine = nextLine;
      } else {
        let offsetX = 0;
        let offsetY = 0;

        // Calculate horizontal offset based on textAlign
        if (textAlignMode === this.CENTER) {
          offsetX = boxWidth / 2;
        } else if (textAlignMode === this.RIGHT) {
          offsetX = boxWidth;
        }

        // Calculate vertical offset based on textBaseline
        if (textVerticalAlignMode === this.CENTER) {
          offsetY = ceil(
            (boxHeight - (linesInColumn[currentColumn] - 1) * lineHeight) / 2
          );
        } else if (textVerticalAlignMode === this.BOTTOM) {
          offsetY = ceil(
            boxHeight - (linesInColumn[currentColumn] - 1) * lineHeight
          );
        }

        this.text(currentLine, currentX + offsetX, currentY + offsetY);

        currentY += lineHeight;

        if (currentY + lineHeight > startY + boxHeight) {
          currentY = startY;
          currentX += boxWidth + gapX;
          currentColumn++;
        }

        currentLine = word;
      }
    }
  }

  // console.log(linesInColumn);

  // Draw outlines for text boxes
  if (showBox === true) {
    this.push();
    this.stroke(0, 0, 255);
    this.strokeWeight(1);
    this.noFill();
    let numColumns = Math.ceil((currentX - startX) / (boxWidth + gapX)) + 1;
    for (let i = 0; i < numColumns; i++) {
      this.rect(startX + i * (boxWidth + gapX), startY, boxWidth, boxHeight);
    }
    this.pop();
  }
};

const rWidth = 198;
const rHeight = 306;
const pWidth = 878;
const pHeight = (pWidth / rWidth) * rHeight;

let cover, one, two, three, back, poster;
let aWidth, aHeight, gap;
let borderYes = true;
let selfie;
let fR = 10;
let pD = 1;
const all = [];

// p5 -----------------------------------

function setup() {
  myCanvas = createCanvas(windowWidth - 17, windowWidth * 3.3);
  myCanvas.parent("#myCanvas");

  updateAdaptiveWidth();

  if (typeof zine !== "undefined" && typeof zine !== null) {
    fR = typeof zine.frameRate !== "undefined" ? zine.frameRate : fR;
    pD = typeof zine.pixelDensity !== "undefined" ? zine.pixelDensity : pD;
  }
  // noLoop()

  cover = createGraphics(pWidth, pHeight);
  one = createGraphics(pWidth * 2, pHeight);
  two = createGraphics(pWidth * 2, pHeight);
  three = createGraphics(pWidth * 2, pHeight);
  back = createGraphics(pWidth, pHeight);
  poster = createGraphics(pHeight * 2, pWidth * 4);
  poster.parent("#myCanvasPoster");

  all.push(cover, one, two, three, back, poster);

  // pageSize attr
  cover.pageSize = "single";
  one.pageSize = "full";
  two.pageSize = "full";
  three.pageSize = "full";
  back.pageSize = "single";
  poster.pageSize = "doubleFull";

  pixelDensity(1);
  frameRate(fR);
  angleMode(DEGREES);
  noStroke();
  changeTitle();
  if (typeof setupPage === "function") {
    setupPage();
  }

  if (
    zine.cam === false ||
    zine.cam === "false" ||
    zine.cam === "False" ||
    zine.cam === "FALSE"
  ) {
  } else {
    selfie = createCapture(VIDEO);
    selfie.hide();
  }

  if (typeof coverSet === "function") {
    coverSet();
  }
  if (typeof oneSet === "function") {
    oneSet();
  }
  if (typeof twoSet === "function") {
    twoSet();
  }
  if (typeof threeSet === "function") {
    threeSet();
  }
  if (typeof backSet === "function") {
    backSet();
  }
  if (typeof posterSet === "function") {
    posterSet();
  }
}

function draw() {
  if (borderYes) {
    pixelDensity(2);
  } else if (!borderYes) {
    pixelDensity(5);
  }

  mousePosition();

  if (typeof drawPage === "function") {
    drawPage();
  }
  if (typeof coverPage === "function") {
    coverPage();
  }
  if (typeof onePage === "function") {
    onePage();
  }
  if (typeof twoPage === "function") {
    twoPage();
  }
  if (typeof threePage === "function") {
    threePage();
  }
  if (typeof backPage === "function") {
    backPage();
  }

  if (typeof posterPage === "function") {
    posterPage();
  }

  if (typeof coverDraw === "function") {
    coverDraw();
  }
  if (typeof oneDraw === "function") {
    oneDraw();
  }
  if (typeof twoDraw === "function") {
    twoDraw();
  }
  if (typeof threeDraw === "function") {
    threeDraw();
  }
  if (typeof backDraw === "function") {
    backDraw();
  }
  if (typeof posterDraw === "function") {
    posterDraw();
  }

  if (borderYes) {
    drawBorder();
  }
  // downloadPDF()
}

function mousePosition() {
  calMousePos([cover, one, two, three, back]);
}

function changePixelDensity(num) {
  all.map((el) => {
    el.pixelDensity(num);
  });
}

function calMousePos(arr) {
  const ratioer = pWidth / aWidth;
  arr.map((el, i) => {
    if (i === 0 || i === 4) {
      el.mouseX = constrain(
        (mouseX - (width / 2 - aWidth / 2)) * ratioer,
        -20,
        el.width + 20
      );
    } else {
      el.mouseX = constrain(
        (mouseX - (width / 2 - aWidth)) * ratioer,
        -20,
        el.width + 20
      );
    }
    el.mouseY = constrain(
      (mouseY - (gap + (aHeight + gap) * i)) * ratioer,
      -20,
      el.height + 20
    );

    if (
      el.mouseX > 0 &&
      el.mouseX < el.width &&
      el.mouseY > 0 &&
      el.mouseY < el.height
    ) {
      el.mouseHere = true;
    }
  });
}

function changeTitle() {
  if (typeof zine !== "undefined") {
    if (typeof zine.title !== "undefined") {
      document.querySelector("#genTitle").innerHTML = zine.title;
    }
    if (typeof zine.author !== "undefined") {
      document.querySelector("#author").innerHTML = "by " + zine.author;
      if (typeof zine.personalUrl !== "undefined") {
        document.querySelector("#author").innerHTML =
          "by " + "<a href=" + zine.url + ">" + zine.author + "</a>";
      }
    }

    if (typeof zine.description !== "undefined") {
      document.querySelector("#des").innerHTML = zine.description;
    }
  }
}

function updateAdaptiveWidth() {
  aWidth = min((windowWidth / 2) * 0.7, 1000);
  aHeight = (aWidth / rWidth) * rHeight;
  gap = aWidth / 4;
}

function preSet() {
  resizeCanvas(windowWidth - 17, windowWidth * 4);
  push();
  // textSize(20);
  // textFont("monospace");
  // rotate(45);
  // translate(0, 0);
  // for (let i = 0; i < 30; i++) {
  //   for (let j = 0; j < 30; j++) {
  //     fill(0, 50);
  //     noStroke();
  //     text("*", j * 130 + (i % 4) * 100, i * 80 + j * 10);
  //     noFill();
  //     // line(
  //     //   j * 130 + (i % 4) * 100,
  //     //   i * 80 + j * 10 + 5,
  //     //   j * 130 + (i % 4) * 100 + random(30, 100),
  //     //   i * 80 + j * 10 + 5
  //     // );
  //   }
  // }
  pop();
}

function printSetting() {
  const printRotate = angleMode() === "degrees" ? 90 : HALF_PI;
  // changePixelDensity(pD);

  push();
  resizeCanvas(pHeight * 2, pWidth * 4);
  push();
  translate(PRINTMARGIN, PRINTMARGIN);
  clear();
  background(255);
  push();
  rotate(printRotate);
  translate(height - pWidth, -pHeight);
  image(cover, 0, 0);
  pop();
  push();
  rotate(-printRotate);
  translate(-height, pHeight);
  image(one, 0, 0);
  pop();
  push();
  rotate(-printRotate);
  translate(-height / 2, pHeight);
  image(two, 0, 0);
  pop();
  push();
  rotate(printRotate);
  translate(0, -pHeight);
  image(three, 0, 0);
  pop();
  push();
  rotate(printRotate);
  translate(height - pWidth * 2, -pHeight);
  image(back, 0, 0);
  pop();
  pop();
  pop();
}

function printSettingPoster() {
  resizeCanvas(pHeight * 2, pWidth * 4);
  push();
  translate(PRINTMARGIN, PRINTMARGIN);
  image(poster, 0, 0);
  pop();
}

function drawBorder() {
  push();
  preSet();

  // clear();

  image(cover, width / 2 - aWidth / 2, gap, aWidth, aHeight);
  image(one, width / 2 - aWidth, gap + (aHeight + gap), aWidth * 2, aHeight);
  image(
    two,
    width / 2 - aWidth,
    gap + (aHeight + gap) * 2,
    aWidth * 2,
    aHeight
  );
  image(
    three,
    width / 2 - aWidth,
    gap + (aHeight + gap) * 3,
    aWidth * 2,
    aHeight
  );
  image(
    back,
    width / 2 - aWidth / 2,
    gap + (aHeight + gap) * 4,
    aWidth,
    aHeight
  );

  image(
    poster,
    width / 2 - aWidth + aWidth / 4,
    gap + (aHeight + gap) * 5,
    aHeight,
    aWidth * 2
  );

  noStroke();
  fill("#ed225d");
  textSize(15);
  textFont("monospace");
  text("coverPage()", width / 2 - aWidth / 2, gap - 10);
  text("onePage()", width / 2 - aWidth, gap + (aHeight + gap) - 10);
  text("twoPage()", width / 2 - aWidth, gap + (aHeight + gap) * 2 - 10);
  text("threePage()", width / 2 - aWidth, gap + (aHeight + gap) * 3 - 10);
  text("backPage()", width / 2 - aWidth / 2, gap + (aHeight + gap) * 4 - 10);
  text("posterPage()", width / 2 - aWidth, gap + (aHeight + gap) * 5 - 10);

  noFill();
  stroke("#ed225d");
  strokeWeight(1);
  rect(width / 2 - aWidth / 2, gap, aWidth, aHeight);
  rect(width / 2 - aWidth, gap + (aHeight + gap), aWidth, aHeight);
  rect(width / 2 - aWidth + aWidth, gap + (aHeight + gap), aWidth, aHeight);
  rect(width / 2 - aWidth, gap + (aHeight + gap) * 2, aWidth, aHeight);
  rect(width / 2 - aWidth + aWidth, gap + (aHeight + gap) * 2, aWidth, aHeight);
  rect(width / 2 - aWidth, gap + (aHeight + gap) * 3, aWidth, aHeight);
  rect(width / 2 - aWidth + aWidth, gap + (aHeight + gap) * 3, aWidth, aHeight);
  rect(width / 2 - aWidth / 2, gap + (aHeight + gap) * 4, aWidth, aHeight);
  rect(
    width / 2 - aWidth + aWidth / 4,
    gap + (aHeight + gap) * 5,
    aHeight,
    aWidth * 2
  );

  pop();
}

function windowResized() {
  updateAdaptiveWidth();
  resizeCanvas(windowWidth - 17, windowWidth * 4);
}

function downloadJPG() {
  borderYes = false;
  cover.save("0-genZ" + hour() + minute() + second() + ".jpg");
  one.save("1-genZ" + hour() + minute() + second() + ".jpg");
  two.save("2-genZ" + hour() + minute() + second() + ".jpg");
  three.save("3-genZ" + hour() + minute() + second() + ".jpg");
  back.save("4-genZ" + hour() + minute() + second() + ".jpg");
  poster.save("5-genZ" + hour() + minute() + second() + ".jpg");
  borderYes = true;
}

const PRINTMARGIN = 0.2; // in inches

function downloadPDF() {
  borderYes = false;
  printSetting();
  const imgData = canvas.toDataURL("image/jpeg", 1.0);
  const pdf = new jsPDF("p", "in", [
    8.3 + PRINTMARGIN * 2,
    11.7 + PRINTMARGIN * 2,
  ]);
  pdfDrawCropMarks(pdf);
  pdf.addImage(imgData, "JPEG", PRINTMARGIN, PRINTMARGIN, 8.3, 11.7);

  printSettingPoster();
  const imgDataPoster = poster.canvas.toDataURL("image/jpeg", 1.0);
  pdf.addPage();
  pdfDrawCropMarks(pdf);
  pdf.addImage(imgDataPoster, "JPEG", PRINTMARGIN, PRINTMARGIN, 8.3, 11.7);

  let filename;
  if (typeof zine.title !== "undefined") {
    fileName = zine.title;
  } else {
    fileName = "(gen)zine.pdf";
  }

  if (
    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      navigator.userAgent.toLowerCase()
    )
  ) {
    window.open(pdf.output("bloburl", { filename: fileName }));
  } else {
    pdf.save(fileName + ".pdf");
  }

  borderYes = true;
}

function pdfDrawCropMarks(pdf) {
  pdf.setLineWidth(0.01);
  pdf.line(0, PRINTMARGIN, PRINTMARGIN, PRINTMARGIN); // top left horizontal
  pdf.line(PRINTMARGIN, 0, PRINTMARGIN, PRINTMARGIN); // top left vertical
  pdf.line(0, 11.7 + PRINTMARGIN, PRINTMARGIN, 11.7 + PRINTMARGIN); // bottom left horizontal
  pdf.line(
    PRINTMARGIN,
    11.7 + PRINTMARGIN,
    PRINTMARGIN,
    11.7 + PRINTMARGIN * 2
  ); // bottom left vertical

  pdf.line(8.3 + PRINTMARGIN, PRINTMARGIN, 8.3 + PRINTMARGIN * 2, PRINTMARGIN); //top right horizontal
  pdf.line(8.3 + PRINTMARGIN, 0, 8.3 + PRINTMARGIN, PRINTMARGIN); //top right vertical
  pdf.line(
    8.3 + PRINTMARGIN,
    11.7 + PRINTMARGIN,
    8.3 + PRINTMARGIN * 2,
    11.7 + PRINTMARGIN
  ); //bottom right horizontal

  pdf.line(
    8.3 + PRINTMARGIN,
    11.7 + PRINTMARGIN,
    8.3 + PRINTMARGIN,
    11.7 + PRINTMARGIN * 2
  ); //bottom right vertical

  pdf.line(8.3 / 2 + PRINTMARGIN, 0, 8.3 / 2 + PRINTMARGIN, PRINTMARGIN); //top half vertical
  pdf.line(
    8.3 / 2 + PRINTMARGIN,
    11.7 + PRINTMARGIN,
    8.3 / 2 + PRINTMARGIN,
    11.7 + PRINTMARGIN * 2
  ); //bottom half vertical

  pdf.line(0, PRINTMARGIN + 11.7 / 4, PRINTMARGIN, PRINTMARGIN + 11.7 / 4); // left first
  pdf.line(
    0,
    PRINTMARGIN + (11.7 / 4) * 2,
    PRINTMARGIN,
    PRINTMARGIN + (11.7 / 4) * 2
  ); // left second
  pdf.line(
    0,
    PRINTMARGIN + (11.7 / 4) * 3,
    PRINTMARGIN,
    PRINTMARGIN + (11.7 / 4) * 3
  ); // left third
  pdf.line(
    0,
    PRINTMARGIN + (11.7 / 4) * 4,
    PRINTMARGIN,
    PRINTMARGIN + (11.7 / 4) * 4
  ); // left fourth

  pdf.line(
    8.3 + PRINTMARGIN,
    PRINTMARGIN + 11.7 / 4,
    8.3 + PRINTMARGIN * 2,
    PRINTMARGIN + 11.7 / 4
  ); // right first
  pdf.line(
    8.3 + PRINTMARGIN,
    PRINTMARGIN + (11.7 / 4) * 2,
    8.3 + PRINTMARGIN * 2,
    PRINTMARGIN + (11.7 / 4) * 2
  ); // right second
  pdf.line(
    8.3 + PRINTMARGIN,
    PRINTMARGIN + (11.7 / 4) * 3,
    8.3 + PRINTMARGIN * 2,
    PRINTMARGIN + (11.7 / 4) * 3
  ); // right third
  pdf.line(
    8.3 + PRINTMARGIN,
    PRINTMARGIN + (11.7 / 4) * 4,
    8.3 + PRINTMARGIN * 2,
    PRINTMARGIN + (11.7 / 4) * 4
  ); // right fourth
}

function createRandomColor(num = 0) {
  let currFrameCount = 0;
  let colors = [
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
  ];

  const randomColor = function () {
    if (currFrameCount < frameCount - max(60 - num, 1)) {
      currFrameCount = frameCount;
      colors = [
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
      ];
    }
    return colors;
  };
  return randomColor;
}

function makeButton(name, func) {
  document.querySelectorAll(
    ".desktop"
  )[0].innerHTML += `<input type="button" value="${name}" onclick="${func}()"
      class="button alt" />`;
}
