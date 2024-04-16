/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  var t = {
      29: () => {
        function t(e) {
          return (
            (t =
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
                  }),
            t(e)
          );
        }
        function e(t) {
          var i = "function" == typeof Map ? new Map() : void 0;
          return (
            (e = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if (void 0 !== i) {
                if (i.has(t)) return i.get(t);
                i.set(t, e);
              }
              function e() {
                return (function (t, e, o) {
                  if (n()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, e);
                  var a = new (t.bind.apply(t, i))();
                  return o && r(a, o.prototype), a;
                })(t, arguments, o(this).constructor);
              }
              return (
                (e.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                r(e, t)
              );
            }),
            e(t)
          );
        }
        function n() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            );
          } catch (t) {}
          return (n = function () {
            return !!t;
          })();
        }
        function r(t, e) {
          return (
            (r = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            r(t, e)
          );
        }
        function o(t) {
          return (
            (o = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            o(t)
          );
        }
        var i = (function (e) {
          function i() {
            var e, r, a, c;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
              ((r = this),
              (a = i),
              (a = o(a)),
              (e = (function (e, n) {
                if (n && ("object" === t(n) || "function" == typeof n))
                  return n;
                if (void 0 !== n)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return (function (t) {
                  if (void 0 === t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return t;
                })(e);
              })(
                r,
                n()
                  ? Reflect.construct(a, c || [], o(r).constructor)
                  : a.apply(r, c)
              ))).attachShadow({ mode: "open" });
            var u = document.createElement("div");
            (u.style.display = "flex"),
              (u.style.backgroundColor = "#71C9CE"),
              (u.style.color = "white"),
              (u.style.alignItems = "center"),
              (u.style.fontSize = "20px"),
              (u.style.justifyContent = "center"),
              (u.style.height = "50px"),
              (u.style.fontWeight = "bold");
            var s = document.createElement("p");
            return (
              (s.textContent =
                "Copyright © 2024. Designed & Developed by rendi"),
              u.appendChild(s),
              e.shadowRoot.appendChild(u),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && r(t, e);
            })(i, e),
            (a = i),
            Object.defineProperty(a, "prototype", { writable: !1 }),
            a
          );
          var a;
        })(e(HTMLElement));
        customElements.define("footer-elements", i);
      },
      292: () => {
        function t(e) {
          return (
            (t =
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
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, c(r.key), r);
          }
        }
        function n(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, e);
                  var a = new (t.bind.apply(t, i))();
                  return n && o(a, n.prototype), a;
                })(t, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, t)
              );
            }),
            n(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            );
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function o(t, e) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            o(t, e)
          );
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            i(t)
          );
        }
        function a(t, e, n) {
          return (
            (e = c(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function c(e) {
          var n = (function (e, n) {
            if ("object" != t(e) || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var o = r.call(e, "string");
              if ("object" != t(o)) return o;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(n) ? n : n + "";
        }
        var u = (function (n) {
          function c() {
            var e, n, o, u;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, c),
              a(
                ((n = this),
                (o = i((o = c))),
                (e = (function (e, n) {
                  if (n && ("object" === t(n) || "function" == typeof n))
                    return n;
                  if (void 0 !== n)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return (function (t) {
                    if (void 0 === t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return t;
                  })(e);
                })(
                  n,
                  r()
                    ? Reflect.construct(o, u || [], i(n).constructor)
                    : o.apply(n, u)
                ))),
                "_shadowRoot",
                null
              ),
              a(e, "_style", null),
              (e._shadowRoot = e.attachShadow({ mode: "open" })),
              (e._style = document.createElement("style")),
              (e.customValidationTitleHandler =
                e.customValidationTitleHandler.bind(e)),
              (e.customValidationBodyHandler =
                e.customValidationBodyHandler.bind(e)),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && o(t, e);
            })(c, n),
            (u = c),
            (s = [
              {
                key: "_updateStyle",
                value: function () {
                  this._style.textContent =
                    '\n      /* Style untuk input dan textarea */\n      input, textarea {\n        font-size: 12px;\n        font-family: "Lexend", sans-serif;\n      }\n\n      /* Style untuk form */\n      form {\n        box-sizing: border-box;\n      }\n\n      /* Style untuk judul form */\n      form > h1 {\n        margin-top: 3rem;\n        background-color: #71c9ce;\n        color: white;\n        font-size: 16px;\n        font-weight: bold;\n        border: none;\n        padding: 10px 20px;\n        display: flex;\n        justify-content: center;\n        width: 100%;\n      }\n\n      /* Style untuk input judul dan textarea */\n      form > .input-title, textarea {\n        width: 100%;\n        padding: 12px;\n        border-radius: 3px;\n        border: 1px solid #ccc;\n      }\n\n      /* Style untuk tombol simpan */\n      form > .simpanNote {\n        background-color: #71c9ce;\n        color: white;\n        border: none;\n        padding: 10px 20px;\n        border-radius: 5px;\n        cursor: pointer;\n        font-size: 18px;\n        font-weight: bold;\n      }\n\n      /* Efek hover pada tombol simpan */\n      form > .simpanNote:hover, form > .simpanNote:focus-visible {\n        transform: translateY(-5px);\n        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n      }\n    ';
                },
              },
              {
                key: "_emptyContent",
                value: function () {
                  this._shadowRoot.innerHTML = "";
                },
              },
              {
                key: "connectedCallback",
                value: function () {
                  this.render(), this.setEventListener();
                },
              },
              {
                key: "render",
                value: function () {
                  this._emptyContent(),
                    this._updateStyle(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      '\n      <form id="noteForm" class="noteForm">\n        <h1>Tambah Notes</h1>\n        <input class="input-title" type="text" id="title" name="title" placeholder="Masukan Judul Notes" required>\n        <p id="titleValidation" aria-live="polite"></p>\n        <textarea id="body" name="body" rows="4" required placeholder="Masukan Catatan"></textarea>\n        <p id="bodyValidation" aria-live="polite"></p>\n        <input class="simpanNote" type="submit" value="Simpan">\n      </form>\n    '),
                    this._shadowRoot
                      .querySelector("#noteForm")
                      .addEventListener("submit", this.OnSubmit.bind(this));
                },
              },
              {
                key: "OnSubmit",
                value: function (t) {
                  t.preventDefault();
                  var e = this._shadowRoot.querySelector("#title").value,
                    n = this._shadowRoot.querySelector("#body").value,
                    r = new CustomEvent("addNote", {
                      detail: { title: e, body: n },
                      bubbles: !0,
                      composed: !0,
                    });
                  this.dispatchEvent(r),
                    (this._shadowRoot.querySelector("#title").value = ""),
                    (this._shadowRoot.querySelector("#body").value = "");
                },
              },
              {
                key: "setEventListener",
                value: function () {
                  var t = this._shadowRoot.querySelector("#title"),
                    e = this._shadowRoot.querySelector("#body");
                  t.addEventListener(
                    "input",
                    this.customValidationTitleHandler
                  ),
                    e.addEventListener(
                      "input",
                      this.customValidationBodyHandler
                    );
                },
              },
              {
                key: "customValidationTitleHandler",
                value: function (t) {
                  var e = t.target,
                    n = this._shadowRoot.querySelector("#titleValidation");
                  e.value.trim()
                    ? (n.innerText = "")
                    : (n.innerText = "Judul Tidak boleh Dikosongkan");
                },
              },
              {
                key: "customValidationBodyHandler",
                value: function (t) {
                  var e = t.target,
                    n = this._shadowRoot.querySelector("#bodyValidation");
                  e.value.trim()
                    ? (n.innerText = "")
                    : (n.innerText = "Catatan Tidak Boleh dikosongkan");
                },
              },
            ]) && e(u.prototype, s),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            u
          );
          var u, s;
        })(n(HTMLElement));
        customElements.define("note-form", u);
      },
      191: () => {
        function t(e) {
          return (
            (t =
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
                  }),
            t(e)
          );
        }
        function e(t) {
          var i = "function" == typeof Map ? new Map() : void 0;
          return (
            (e = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if (void 0 !== i) {
                if (i.has(t)) return i.get(t);
                i.set(t, e);
              }
              function e() {
                return (function (t, e, o) {
                  if (n()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, e);
                  var a = new (t.bind.apply(t, i))();
                  return o && r(a, o.prototype), a;
                })(t, arguments, o(this).constructor);
              }
              return (
                (e.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                r(e, t)
              );
            }),
            e(t)
          );
        }
        function n() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            );
          } catch (t) {}
          return (n = function () {
            return !!t;
          })();
        }
        function r(t, e) {
          return (
            (r = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            r(t, e)
          );
        }
        function o(t) {
          return (
            (o = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            o(t)
          );
        }
        var i = (function (e) {
          function i() {
            var e, r, a, c;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
              ((r = this),
              (a = i),
              (a = o(a)),
              (e = (function (e, n) {
                if (n && ("object" === t(n) || "function" == typeof n))
                  return n;
                if (void 0 !== n)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return (function (t) {
                  if (void 0 === t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return t;
                })(e);
              })(
                r,
                n()
                  ? Reflect.construct(a, c || [], o(r).constructor)
                  : a.apply(r, c)
              ))).attachShadow({ mode: "open" });
            var u = document.createElement("nav"),
              s = document.createElement("h1");
            return (
              (s.textContent = "My Notes APPS"),
              u.appendChild(s),
              e.shadowRoot.appendChild(u),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && r(t, e);
            })(i, e),
            (a = i),
            Object.defineProperty(a, "prototype", { writable: !1 }),
            a
          );
          var a;
        })(e(HTMLElement));
        customElements.define("note-header", i);
      },
      552: () => {
        function t(e) {
          return (
            (t =
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
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var r = 0; r < e.length; r++) {
            var o = e[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, n(o.key), o);
          }
        }
        function n(e) {
          var n = (function (e, n) {
            if ("object" != t(e) || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var o = r.call(e, "string");
              if ("object" != t(o)) return o;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(n) ? n : n + "";
        }
        function r(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (r = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (o()) return Reflect.construct.apply(null, arguments);
                  var r = [null];
                  r.push.apply(r, e);
                  var a = new (t.bind.apply(t, r))();
                  return n && i(a, n.prototype), a;
                })(t, arguments, a(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(n, t)
              );
            }),
            r(t)
          );
        }
        function o() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            );
          } catch (t) {}
          return (o = function () {
            return !!t;
          })();
        }
        function i(t, e) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            i(t, e)
          );
        }
        function a(t) {
          return (
            (a = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            a(t)
          );
        }
        var c = (function (n) {
          function r() {
            var e, n, i, c;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, r),
              (((n = this),
              (i = r),
              (i = a(i)),
              (e = (function (e, n) {
                if (n && ("object" === t(n) || "function" == typeof n))
                  return n;
                if (void 0 !== n)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return (function (t) {
                  if (void 0 === t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return t;
                })(e);
              })(
                n,
                o()
                  ? Reflect.construct(i, c || [], a(n).constructor)
                  : i.apply(n, c)
              )))._style = document.createElement("style")),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && i(t, e);
            })(r, n),
            (c = r),
            (s = [
              {
                key: "observedAttributes",
                get: function () {
                  return ["img", "altImg", "caption"];
                },
              },
            ]),
            (u = [
              {
                key: "connectedCallback",
                value: function () {
                  this.render();
                },
              },
              {
                key: "img",
                get: function () {
                  return this.getAttribute("img");
                },
                set: function (t) {
                  this.img != t && this.removeAttribute("img"),
                    this.setAttribute("img", t);
                },
              },
              {
                key: "altImg",
                get: function () {
                  return this.getAttribute("altImg");
                },
                set: function (t) {
                  this.altImg != t && this.removeAttribute("altImg"),
                    this.setAttribute("altImg", t);
                },
              },
              {
                key: "caption",
                get: function () {
                  return this.getAttribute("caption");
                },
                set: function (t) {
                  this.caption != t && this.removeAttribute("caption"),
                    this.setAttribute("caption", t);
                },
              },
              {
                key: "updateStyle",
                value: function () {
                  this._style.textContent = "\n          ".concat(
                    this.localName,
                    " {\n            display: block;\n          }\n    \n          figure {\n            max-width: 220px;\n            margin: 0;\n            padding: 5px;\n            border: 1px #c0c0c0 solid;\n          \n            display: flex;\n            flex-flow: column;\n          }\n          \n          figure > img {\n            max-width: 100%;\n          }\n          \n          figure > figcaption {\n            padding: 3px;\n            background-color: #222;\n          \n            text-align: center;\n          \n            color: #fff;\n            font-family: sans-serif;\n            font-size: smaller;\n            font-style: italic;\n          }      \n        "
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  this.emptyContent(),
                    this.updateStyle(),
                    this.appendChild(this._style),
                    (this.innerHTML +=
                      '\n          <figure>\n            <img src="'
                        .concat(this.img, '" alt="')
                        .concat(this.altImg, '" />\n            <figcaption>')
                        .concat(
                          this.caption,
                          "</figcaption>\n          </figure>\n        "
                        ));
                },
              },
              {
                key: "emptyContent",
                value: function () {
                  this.innerHTML = "";
                },
              },
              {
                key: "attributeChangedCallback",
                value: function (t, e, n) {
                  this.render();
                },
              },
            ]) && e(c.prototype, u),
            s && e(c, s),
            Object.defineProperty(c, "prototype", { writable: !1 }),
            c
          );
          var c, u, s;
        })(r(HTMLElement));
        customElements.define("rendi-photo", c);
      },
      104: (t, e, n) => {
        "use strict";
        n.d(e, { A: () => c });
        var r = n(601),
          o = n.n(r),
          i = n(314),
          a = n.n(i)()(o());
        a.push([
          t.id,
          '/* Reset CSS */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: "Lexend", sans-serif;\n  font-optical-sizing: auto;\n  font-weight: weight;\n  font-style: normal;\n}\n\n/* Body */\nbody {\n  background-color: #cbf1f5;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  gap: 1rem;\n  height: 100vh;\n}\n\n/* Header */\nheader {\n  background-color: #e3fdfd;\n  color: #71c9ce;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nheader h1 {\n  margin: 0;\n}\n\n/* Main content */\nmain {\n  background-color: #cbf1f5;\n  display: grid;\n  gap: 2rem;\n  justify-content: center;\n  padding: 0 20px;\n  overflow-y: auto;\n}\n\n/* Form */\nform {\n  display: grid;\n  gap: 10px;\n}\n\ninput[type="text"],\ntextarea {\n  width: 100%;\n  padding: 10px;\n  margin-bottom: 10px;\n  border: 1px solid #ced4da;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n\nbutton {\n  padding: 10px 20px;\n  background-color: black;\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  border-radius: 5px;\n  margin-top: 5px;\n  margin-left: 5px;\n}\n\nbutton:hover {\n  background-color: #71c9ce;\n}\n\n/* Status notes */\n.statusNotes {\n  margin-top: 40px;\n  margin-bottom: 40px;\n  color: #71c9ce;\n  text-align: center;\n  font-weight: bold;\n  font-size: 20px;\n}\n\n#statusNotes {\n  font-size: 12px;\n  font-weight: bold;\n  color: #fff;\n  padding: 5px 5px;\n  border-radius: 4px;\n  cursor: pointer;\n  margin-top: 10px;\n  background-color: #71c9ce;\n}\n\n#statusNotes > option {\n  color: #fff;\n  background-color: #71c9ce;\n}\n\n/* Note list */\n.noteList {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1rem;\n}\n\n.noteItem {\n  border: 1px solid #ccc;\n  padding: 10px;\n  border-radius: 5px;\n  background-color: #a6e3e9;\n}\n\n.title {\n  color: white;\n  text-align: center;\n  font-size: 20px;\n  margin-bottom: 10px;\n}\n\n.noteBody {\n  color: white;\n  white-space: pre-line;\n  font-size: 14px;\n  font-weight: bold;\n  max-width: 100%;\n}\n\n/* Loader */\n.load {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(\n    135deg,\n    rgba(255, 255, 255, 0.05),\n    rgba(255, 255, 255, 0)\n  );\n  display: none;\n  z-index: 9999;\n}\n\n.spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 5px solid #f3f3f3;\n  border-top: 5px solid #71c9ce;\n  animation: spin 1s linear infinite;\n}\n\n/* Action */\n.action {\n  margin-top: 8px;\n  display: flex;\n  justify-content: center;\n}\n\n@keyframes spin {\n  0% {\n    transform: translate(-50%, -50%) rotate(0deg);\n  }\n  100% {\n    transform: translate(-50%, -50%) rotate(360deg);\n  }\n}\n\n/* Media query */\n@media screen and (min-width: 720px) {\n  .noteList {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n/* Note container */\ndiv.containerNote {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n}\n\n/* Judul */\ndiv.judul {\n  margin-top: 1rem;\n  background-color: #71c9ce;\n  color: white;\n  font-size: 20px;\n  font-weight: bold;\n  border: none;\n  padding: 10px 20px;\n  display: flex;\n  justify-content: center;\n}\n\n/* Note create */\n.noteCreate {\n  font-size: 10px;\n  font-weight: bold;\n  color: red;\n}\n\n/* Archive button */\n.archive-button {\n  background-color: #e8751a;\n}\n\n/* Delete button */\n.button-delete {\n  background-color: #ff204e;\n}\n\n/* Foto container */\n.foto {\n  margin-top: 2rem;\n  display: flex;\n  justify-content: center;\n}\n',
          "",
        ]);
        const c = a;
      },
      314: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (n += "@supports (".concat(e[4], ") {")),
                  e[2] && (n += "@media ".concat(e[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (n += t(e)),
                  r && (n += "}"),
                  e[2] && (n += "}"),
                  e[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (e.i = function (t, n, r, o, i) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var a = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var u = this[c][0];
                  null != u && (a[u] = !0);
                }
              for (var s = 0; s < t.length; s++) {
                var l = [].concat(t[s]);
                (r && a[l[0]]) ||
                  (void 0 !== i &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = i)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      601: (t) => {
        "use strict";
        t.exports = function (t) {
          return t[1];
        };
      },
      72: (t) => {
        "use strict";
        var e = [];
        function n(t) {
          for (var n = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === t) {
              n = r;
              break;
            }
          return n;
        }
        function r(t, r) {
          for (var i = {}, a = [], c = 0; c < t.length; c++) {
            var u = t[c],
              s = r.base ? u[0] + r.base : u[0],
              l = i[s] || 0,
              f = "".concat(s, " ").concat(l);
            i[s] = l + 1;
            var p = n(f),
              d = {
                css: u[1],
                media: u[2],
                sourceMap: u[3],
                supports: u[4],
                layer: u[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(d);
            else {
              var y = o(d, r);
              (r.byIndex = c),
                e.splice(c, 0, { identifier: f, updater: y, references: 1 });
            }
            a.push(f);
          }
          return a;
        }
        function o(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, o) {
          var i = r((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var a = 0; a < i.length; a++) {
              var c = n(i[a]);
              e[c].references--;
            }
            for (var u = r(t, o), s = 0; s < i.length; s++) {
              var l = n(i[s]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            i = u;
          };
        };
      },
      659: (t) => {
        "use strict";
        var e = {};
        t.exports = function (t, n) {
          var r = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      540: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      56: (t, e, n) => {
        "use strict";
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      825: (t) => {
        "use strict";
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var i = n.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  e.styleTagTransform(r, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      113: (t) => {
        "use strict";
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = (e[r] = { id: r, exports: {} });
    return t[r](i, i.exports, n), i.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.nc = void 0),
    (() => {
      "use strict";
      function t(e) {
        return (
          (t =
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
                }),
          t(e)
        );
      }
      function e() {
        e = function () {
          return r;
        };
        var n,
          r = {},
          o = Object.prototype,
          i = o.hasOwnProperty,
          a =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          c = "function" == typeof Symbol ? Symbol : {},
          u = c.iterator || "@@iterator",
          s = c.asyncIterator || "@@asyncIterator",
          l = c.toStringTag || "@@toStringTag";
        function f(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          f({}, "");
        } catch (n) {
          f = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function p(t, e, n, r) {
          var o = e && e.prototype instanceof g ? e : g,
            i = Object.create(o.prototype),
            c = new N(r || []);
          return a(i, "_invoke", { value: T(t, n, c) }), i;
        }
        function d(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        r.wrap = p;
        var y = "suspendedStart",
          h = "suspendedYield",
          m = "executing",
          b = "completed",
          v = {};
        function g() {}
        function w() {}
        function x() {}
        var E = {};
        f(E, u, function () {
          return this;
        });
        var O = Object.getPrototypeOf,
          S = O && O(O(R([])));
        S && S !== o && i.call(S, u) && (E = S);
        var j = (x.prototype = g.prototype = Object.create(E));
        function k(t) {
          ["next", "throw", "return"].forEach(function (e) {
            f(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function _(e, n) {
          function r(o, a, c, u) {
            var s = d(e[o], e, a);
            if ("throw" !== s.type) {
              var l = s.arg,
                f = l.value;
              return f && "object" == t(f) && i.call(f, "__await")
                ? n.resolve(f.__await).then(
                    function (t) {
                      r("next", t, c, u);
                    },
                    function (t) {
                      r("throw", t, c, u);
                    }
                  )
                : n.resolve(f).then(
                    function (t) {
                      (l.value = t), c(l);
                    },
                    function (t) {
                      return r("throw", t, c, u);
                    }
                  );
            }
            u(s.arg);
          }
          var o;
          a(this, "_invoke", {
            value: function (t, e) {
              function i() {
                return new n(function (n, o) {
                  r(t, e, n, o);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function T(t, e, r) {
          var o = y;
          return function (i, a) {
            if (o === m) throw Error("Generator is already running");
            if (o === b) {
              if ("throw" === i) throw a;
              return { value: n, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
              var c = r.delegate;
              if (c) {
                var u = L(c, r);
                if (u) {
                  if (u === v) continue;
                  return u;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === y) throw ((o = b), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = m;
              var s = d(t, e, r);
              if ("normal" === s.type) {
                if (((o = r.done ? b : h), s.arg === v)) continue;
                return { value: s.arg, done: r.done };
              }
              "throw" === s.type &&
                ((o = b), (r.method = "throw"), (r.arg = s.arg));
            }
          };
        }
        function L(t, e) {
          var r = e.method,
            o = t.iterator[r];
          if (o === n)
            return (
              (e.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = n),
                L(t, e),
                "throw" === e.method)) ||
                ("return" !== r &&
                  ((e.method = "throw"),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              v
            );
          var i = d(o, t.iterator, e.arg);
          if ("throw" === i.type)
            return (
              (e.method = "throw"), (e.arg = i.arg), (e.delegate = null), v
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                "return" !== e.method && ((e.method = "next"), (e.arg = n)),
                (e.delegate = null),
                v)
              : a
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              v);
        }
        function P(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function C(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function N(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(P, this),
            this.reset(!0);
        }
        function R(e) {
          if (e || "" === e) {
            var r = e[u];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                a = function t() {
                  for (; ++o < e.length; )
                    if (i.call(e, o)) return (t.value = e[o]), (t.done = !1), t;
                  return (t.value = n), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          throw new TypeError(t(e) + " is not iterable");
        }
        return (
          (w.prototype = x),
          a(j, "constructor", { value: x, configurable: !0 }),
          a(x, "constructor", { value: w, configurable: !0 }),
          (w.displayName = f(x, l, "GeneratorFunction")),
          (r.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === w || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (r.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, x)
                : ((t.__proto__ = x), f(t, l, "GeneratorFunction")),
              (t.prototype = Object.create(j)),
              t
            );
          }),
          (r.awrap = function (t) {
            return { __await: t };
          }),
          k(_.prototype),
          f(_.prototype, s, function () {
            return this;
          }),
          (r.AsyncIterator = _),
          (r.async = function (t, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new _(p(t, e, n, o), i);
            return r.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          k(j),
          f(j, l, "Generator"),
          f(j, u, function () {
            return this;
          }),
          f(j, "toString", function () {
            return "[object Generator]";
          }),
          (r.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (r.values = R),
          (N.prototype = {
            constructor: N,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = n),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = n),
                this.tryEntries.forEach(C),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    i.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = n);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function r(r, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = t),
                  (e.next = r),
                  o && ((e.method = "next"), (e.arg = n)),
                  !!o
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  c = a.completion;
                if ("root" === a.tryLoc) return r("end");
                if (a.tryLoc <= this.prev) {
                  var u = i.call(a, "catchLoc"),
                    s = i.call(a, "finallyLoc");
                  if (u && s) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                  } else {
                    if (!s)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (
                  r.tryLoc <= this.prev &&
                  i.call(r, "finallyLoc") &&
                  this.prev < r.finallyLoc
                ) {
                  var o = r;
                  break;
                }
              }
              o &&
                ("break" === t || "continue" === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), v)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), C(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    C(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: R(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = n),
                v
              );
            },
          }),
          r
        );
      }
      function r(t, e, n, r, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
      }
      function o(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (o, i) {
            var a = t.apply(e, n);
            function c(t) {
              r(a, o, i, c, u, "next", t);
            }
            function u(t) {
              r(a, o, i, c, u, "throw", t);
            }
            c(void 0);
          });
        };
      }
      n(191), n(29), n(292), n(552);
      var i = n(72),
        a = n.n(i),
        c = n(825),
        u = n.n(c),
        s = n(659),
        l = n.n(s),
        f = n(56),
        p = n.n(f),
        d = n(540),
        y = n.n(d),
        h = n(113),
        m = n.n(h),
        b = n(104),
        v = {};
      (v.styleTagTransform = m()),
        (v.setAttributes = p()),
        (v.insert = l().bind(null, "head")),
        (v.domAPI = u()),
        (v.insertStyleElement = y()),
        a()(b.A, v),
        b.A && b.A.locals && b.A.locals,
        (function () {
          var t = "https://notes-api.dicoding.dev/v2",
            n = function (t) {
              var e = document.querySelector("#noteList");
              (e.innerHTML = ""),
                t.forEach(function (t) {
                  var n = document.createElement("div");
                  n.classList.add("noteItem"), n.setAttribute("tabindex", "0");
                  var r = document.createElement("h1");
                  r.classList.add("title"), (r.innerText = t.title);
                  var o = document.createElement("p");
                  o.classList.add("noteBody"),
                    (o.innerText = "Catatan : " + t.body);
                  var i = document.createElement("p");
                  i.classList.add("noteCreate");
                  var a = new Date(t.createdAt),
                    l = new Intl.DateTimeFormat("id-ID", {
                      timeZone: "Asia/Jakarta",
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                    }).format(a);
                  i.innerText = "Tanggal Dibuat Catatan: " + l;
                  var f = document.createElement("button");
                  f.classList.add("archive-button"),
                    (f.innerText = "ARSIPKAN"),
                    f.setAttribute("type", "button");
                  var p = document.createElement("button");
                  (p.innerText = "HAPUS"),
                    p.classList.add("button-delete"),
                    p.setAttribute("type", "button"),
                    p.addEventListener("click", function () {
                      confirm("Kamu Yakin Menghapus Note Ini ?") && c(t.id);
                    }),
                    t.archived
                      ? (f.classList.add("button-back"),
                        (f.innerText = "Kembalikan"),
                        f.addEventListener("click", function () {
                          s(t.id);
                        }))
                      : (f.classList.add("archive-button"),
                        f.addEventListener("click", function () {
                          u(t.id);
                        }));
                  var d = document.createElement("div");
                  d.classList.add("action"),
                    d.append(f, p),
                    n.append(r, o, i, d),
                    e.appendChild(n);
                });
            },
            r = (function () {
              var n = o(
                e().mark(function n(r) {
                  var o, a, c;
                  return e().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              f(),
                              (o = {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(r),
                              }),
                              (e.next = 5),
                              fetch("".concat(t, "/notes"), o)
                            );
                          case 5:
                            return (a = e.sent), (e.next = 8), a.json();
                          case 8:
                            (c = e.sent), l(c.message), i(), (e.next = 16);
                            break;
                          case 13:
                            (e.prev = 13), (e.t0 = e.catch(0)), l(e.t0);
                          case 16:
                            return (e.prev = 16), p(), e.finish(16);
                          case 19:
                          case "end":
                            return e.stop();
                        }
                    },
                    n,
                    null,
                    [[0, 13, 16, 19]]
                  );
                })
              );
              return function (t) {
                return n.apply(this, arguments);
              };
            })(),
            i = (function () {
              var r = o(
                e().mark(function r() {
                  var o, i;
                  return e().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              f(),
                              (e.next = 4),
                              fetch("".concat(t, "/notes"))
                            );
                          case 4:
                            return (o = e.sent), (e.next = 7), o.json();
                          case 7:
                            (i = e.sent).data.length > 0 ||
                              l("Tidak Ada Note / Note Kosong !"),
                              n(i.data),
                              (e.next = 14);
                            break;
                          case 11:
                            (e.prev = 11), (e.t0 = e.catch(0)), l(e.t0);
                          case 14:
                            return (e.prev = 14), p(), e.finish(14);
                          case 17:
                          case "end":
                            return e.stop();
                        }
                    },
                    r,
                    null,
                    [[0, 11, 14, 17]]
                  );
                })
              );
              return function () {
                return r.apply(this, arguments);
              };
            })(),
            a = (function () {
              var r = o(
                e().mark(function r() {
                  var o, i;
                  return e().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              f(),
                              (e.next = 4),
                              fetch("".concat(t, "/notes/archived"))
                            );
                          case 4:
                            return (o = e.sent), (e.next = 7), o.json();
                          case 7:
                            (i = e.sent).data.length > 0 ||
                              l("Tidak Ada Note Yang Diarsipkan"),
                              n(i.data),
                              (e.next = 14);
                            break;
                          case 11:
                            (e.prev = 11), (e.t0 = e.catch(0)), l(e.t0);
                          case 14:
                            return (e.prev = 14), p(), e.finish(14);
                          case 17:
                          case "end":
                            return e.stop();
                        }
                    },
                    r,
                    null,
                    [[0, 11, 14, 17]]
                  );
                })
              );
              return function () {
                return r.apply(this, arguments);
              };
            })(),
            c = function (e) {
              f(),
                fetch("".concat(t, "/notes/").concat(e), { method: "DELETE" })
                  .then(function (t) {
                    return t.json();
                  })
                  .then(function (t) {
                    l(t.message), 0 == d.selectedIndex ? i() : a();
                  })
                  .catch(function (t) {
                    l(t);
                  })
                  .finally(function () {
                    p();
                  });
            },
            u = (function () {
              var n = o(
                e().mark(function n(r) {
                  var o, a, c;
                  return e().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (o = {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                              }),
                              (e.next = 4),
                              fetch(
                                "".concat(t, "/notes/").concat(r, "/archive"),
                                o
                              )
                            );
                          case 4:
                            return (a = e.sent), (e.next = 7), a.json();
                          case 7:
                            (c = e.sent), l(c.message), i(), (e.next = 15);
                            break;
                          case 12:
                            (e.prev = 12), (e.t0 = e.catch(0)), l(e.t0);
                          case 15:
                          case "end":
                            return e.stop();
                        }
                    },
                    n,
                    null,
                    [[0, 12]]
                  );
                })
              );
              return function (t) {
                return n.apply(this, arguments);
              };
            })(),
            s = (function () {
              var n = o(
                e().mark(function n(r) {
                  var o, i, c;
                  return e().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (o = {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                              }),
                              (e.next = 4),
                              fetch(
                                "".concat(t, "/notes/").concat(r, "/unarchive"),
                                o
                              )
                            );
                          case 4:
                            return (i = e.sent), (e.next = 7), i.json();
                          case 7:
                            (c = e.sent), l(c.message), a(), (e.next = 15);
                            break;
                          case 12:
                            (e.prev = 12), (e.t0 = e.catch(0)), l(e.t0);
                          case 15:
                          case "end":
                            return e.stop();
                        }
                    },
                    n,
                    null,
                    [[0, 12]]
                  );
                })
              );
              return function (t) {
                return n.apply(this, arguments);
              };
            })(),
            l = function () {
              alert(
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "Check your internet connection"
              );
            };
          document.addEventListener("DOMContentLoaded", function () {
            i(), (d.selectedIndex = 0);
          }),
            document.addEventListener("addNote", function (t) {
              var e = t.detail,
                n = e.title,
                o = e.body;
              r({ title: n, body: o }), (d.selectedIndex = 0);
            });
          var f = function () {
              document.getElementById("load").style.display = "block";
            },
            p = function () {
              document.getElementById("load").style.display = "none";
            },
            d = document.getElementById("statusNotes");
          d.addEventListener("change", function () {
            0 == d.selectedIndex ? i() : a();
          });
        })();
    })();
})();
