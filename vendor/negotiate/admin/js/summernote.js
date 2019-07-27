var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! Summernote v0.8.10 | (c) 2013- Alan Hong and other contributors | MIT license */

!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], e) : e(t.jQuery);
}(this, function (t) {
  "use strict";
  t = t && t.hasOwnProperty("default") ? t.default : t;var e = function () {
    function e(t, e, o, n) {
      this.markup = t, this.children = e, this.options = o, this.callback = n;
    }return e.prototype.render = function (e) {
      var o = t(this.markup);if (this.options && this.options.contents && o.html(this.options.contents), this.options && this.options.className && o.addClass(this.options.className), this.options && this.options.data && t.each(this.options.data, function (t, e) {
        o.attr("data-" + t, e);
      }), this.options && this.options.click && o.on("click", this.options.click), this.children) {
        var n = o.find(".note-children-container");this.children.forEach(function (t) {
          t.render(n.length ? n : o);
        });
      }return this.callback && this.callback(o, this.options), this.options && this.options.callback && this.options.callback(o), e && e.append(o), o;
    }, e;
  }(),
      o = function o(_o, n) {
    return function () {
      var i = "object" == _typeof(arguments[1]) ? arguments[1] : arguments[0],
          r = t.isArray(arguments[0]) ? arguments[0] : [];return i && i.children && (r = i.children), new e(_o, r, i, n);
    };
  },
      n = o('<div class="note-editor note-frame panel"/>'),
      i = o('<div class="note-toolbar-wrapper panel-default"><div class="note-toolbar panel-heading" role="toolbar"></div></div>'),
      r = o('<div class="note-editing-area"/>'),
      s = o('<textarea class="note-codable" role="textbox" aria-multiline="true"/>'),
      a = o('<div class="note-editable" contentEditable="true" role="textbox" aria-multiline="true"/>'),
      l = o(['<output class="note-status-output" aria-live="polite"/>', '<div class="note-statusbar" role="status">', '  <div class="note-resizebar" role="seperator" aria-orientation="horizontal" aria-label="Resize">', '    <div class="note-icon-bar"/>', '    <div class="note-icon-bar"/>', '    <div class="note-icon-bar"/>', "  </div>", "</div>"].join("")),
      c = o('<div class="note-editor"/>'),
      d = o(['  <output class="note-status-output" aria-live="polite"/>', '<div class="note-editable" contentEditable="true" role="textbox" aria-multiline="true"/>'].join("")),
      u = o('<div class="note-btn-group btn-group">'),
      h = o('<ul class="dropdown-menu" role="list">', function (e, o) {
    var n = t.isArray(o.items) ? o.items.map(function (t) {
      var e = "string" == typeof t ? t : t.value || "",
          n = o.template ? o.template(t) : t,
          i = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? t.option : void 0;return '<li role="listitem" aria-label="' + t + '"><a href="#" ' + ('data-value="' + e + '"' + (void 0 !== i ? ' data-option="' + i + '"' : "")) + ">" + n + "</a></li>";
    }).join("") : o.items;e.html(n).attr({ "aria-label": o.title });
  }),
      p = o('<ul class="dropdown-menu note-check" role="list">', function (e, o) {
    var n = t.isArray(o.items) ? o.items.map(function (t) {
      var e = "string" == typeof t ? t : t.value || "",
          n = o.template ? o.template(t) : t;return '<li role="listitem" aria-label="' + t + '"><a href="#" data-value="' + e + '">' + b(o.checkClassName) + " " + n + "</a></li>";
    }).join("") : o.items;e.html(n).attr({ "aria-label": o.title });
  }),
      f = o('<div class="note-color-palette"/>', function (t, e) {
    for (var o = [], n = 0, i = e.colors.length; n < i; n++) {
      for (var r = e.eventName, s = e.colors[n], a = e.colorsName[n], l = [], c = 0, d = s.length; c < d; c++) {
        var u = s[c],
            h = a[c];l.push(['<button type="button" class="note-color-btn"', 'style="background-color:', u, '" ', 'data-event="', r, '" ', 'data-value="', u, '" ', 'title="', h, '" ', 'aria-label="', h, '" ', 'data-toggle="button" tabindex="-1"></button>'].join(""));
      }o.push('<div class="note-color-row">' + l.join("") + "</div>");
    }t.html(o.join("")), e.tooltip && t.find(".note-color-btn").tooltip({ container: e.container, trigger: "hover", placement: "bottom" });
  }),
      m = o('<div class="modal" aria-hidden="false" tabindex="-1" role="dialog"/>', function (t, e) {
    e.fade && t.addClass("fade"), t.attr({ "aria-label": e.title }), t.html(['<div class="modal-dialog">', '  <div class="modal-content">', e.title ? '    <div class="modal-header">      <button type="button" class="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">&times;</button>      <h4 class="modal-title">' + e.title + "</h4>    </div>" : "", '    <div class="modal-body">' + e.body + "</div>", e.footer ? '    <div class="modal-footer">' + e.footer + "</div>" : "", "  </div>", "</div>"].join(""));
  }),
      g = o(['<div class="note-popover popover in">', '  <div class="arrow"/>', '  <div class="popover-content note-children-container"/>', "</div>"].join(""), function (t, e) {
    var o = void 0 !== e.direction ? e.direction : "bottom";t.addClass(o), e.hideArrow && t.find(".arrow").hide();
  }),
      v = o('<div class="checkbox"></div>', function (t, e) {
    t.html([" <label" + (e.id ? ' for="' + e.id + '"' : "") + ">", ' <input role="checkbox" type="checkbox"' + (e.id ? ' id="' + e.id + '"' : ""), e.checked ? " checked" : "", ' aria-checked="' + (e.checked ? "true" : "false") + '"/>', e.text ? e.text : "", "</label>"].join(""));
  }),
      b = function b(t, e) {
    return "<" + (e = e || "i") + ' class="' + t + '"/>';
  },
      y = { editor: n, toolbar: i, editingArea: r, codable: s, editable: a, statusbar: l, airEditor: c, airEditable: d, buttonGroup: u, dropdown: h, dropdownButtonContents: function dropdownButtonContents(t, e) {
      return t + " " + b(e.icons.caret, "span");
    }, dropdownCheck: p, palette: f, dialog: m, popover: g, checkbox: v, icon: b, options: {}, button: function button(t, e) {
      return o('<button type="button" class="note-btn btn btn-default btn-sm" role="button" tabindex="-1">', function (t, e) {
        e && e.tooltip && t.attr({ title: e.tooltip, "aria-label": e.tooltip }).tooltip({ container: e.container, trigger: "hover", placement: "bottom" });
      })(t, e);
    }, toggleBtn: function toggleBtn(t, e) {
      t.toggleClass("disabled", !e), t.attr("disabled", !e);
    }, toggleBtnActive: function toggleBtnActive(t, e) {
      t.toggleClass("active", e);
    }, onDialogShown: function onDialogShown(t, e) {
      t.one("shown.bs.modal", e);
    }, onDialogHidden: function onDialogHidden(t, e) {
      t.one("hidden.bs.modal", e);
    }, showDialog: function showDialog(t) {
      t.modal("show");
    }, hideDialog: function hideDialog(t) {
      t.modal("hide");
    }, createLayout: function createLayout(t, e) {
      var o = (e.airMode ? y.airEditor([y.editingArea([y.airEditable()])]) : y.editor([y.toolbar(), y.editingArea([y.codable(), y.editable()]), y.statusbar()])).render();return o.insertAfter(t), { note: t, editor: o, toolbar: o.find(".note-toolbar"), editingArea: o.find(".note-editing-area"), editable: o.find(".note-editable"), codable: o.find(".note-codable"), statusbar: o.find(".note-statusbar") };
    }, removeLayout: function removeLayout(t, e) {
      t.html(e.editable.html()), e.editor.remove(), t.show();
    } };var k = 0;var C = { eq: function eq(t) {
      return function (e) {
        return t === e;
      };
    }, eq2: function eq2(t, e) {
      return t === e;
    }, peq2: function peq2(t) {
      return function (e, o) {
        return e[t] === o[t];
      };
    }, ok: function ok() {
      return !0;
    }, fail: function fail() {
      return !1;
    }, self: function self(t) {
      return t;
    }, not: function not(t) {
      return function () {
        return !t.apply(t, arguments);
      };
    }, and: function and(t, e) {
      return function (o) {
        return t(o) && e(o);
      };
    }, invoke: function invoke(t, e) {
      return function () {
        return t[e].apply(t, arguments);
      };
    }, uniqueId: function uniqueId(t) {
      var e = ++k + "";return t ? t + e : e;
    }, rect2bnd: function rect2bnd(t) {
      var e = $(document);return { top: t.top + e.scrollTop(), left: t.left + e.scrollLeft(), width: t.right - t.left, height: t.bottom - t.top };
    }, invertObject: function invertObject(t) {
      var e = {};for (var o in t) {
        t.hasOwnProperty(o) && (e[t[o]] = o);
      }return e;
    }, namespaceToCamel: function namespaceToCamel(t, e) {
      return (e = e || "") + t.split(".").map(function (t) {
        return t.substring(0, 1).toUpperCase() + t.substring(1);
      }).join("");
    }, debounce: function debounce(t, e, o) {
      var n,
          i = this;return function () {
        var r = i,
            s = arguments,
            a = o && !n;clearTimeout(n), n = setTimeout(function () {
          n = null, o || t.apply(r, s);
        }, e), a && t.apply(r, s);
      };
    } };function w(t) {
    return t[0];
  }function x(t) {
    return t[t.length - 1];
  }function S(t) {
    return t.slice(1);
  }function T(e, o) {
    return t.inArray(o, e);
  }function I(t, e) {
    return -1 !== T(t, e);
  }var N = { head: w, last: x, initial: function initial(t) {
      return t.slice(0, t.length - 1);
    }, tail: S, prev: function prev(t, e) {
      var o = T(t, e);return -1 === o ? null : t[o - 1];
    }, next: function next(t, e) {
      var o = T(t, e);return -1 === o ? null : t[o + 1];
    }, find: function find(t, e) {
      for (var o = 0, n = t.length; o < n; o++) {
        var i = t[o];if (e(i)) return i;
      }
    }, contains: I, all: function all(t, e) {
      for (var o = 0, n = t.length; o < n; o++) {
        if (!e(t[o])) return !1;
      }return !0;
    }, sum: function sum(t, e) {
      return e = e || C.self, t.reduce(function (t, o) {
        return t + e(o);
      }, 0);
    }, from: function from(t) {
      for (var e = [], o = t.length, n = -1; ++n < o;) {
        e[n] = t[n];
      }return e;
    }, isEmpty: function isEmpty(t) {
      return !t || !t.length;
    }, clusterBy: function clusterBy(t, e) {
      return t.length ? S(t).reduce(function (t, o) {
        var n = x(t);return e(x(n), o) ? n[n.length] = o : t[t.length] = [o], t;
      }, [[w(t)]]) : [];
    }, compact: function compact(t) {
      for (var e = [], o = 0, n = t.length; o < n; o++) {
        t[o] && e.push(t[o]);
      }return e;
    }, unique: function unique(t) {
      for (var e = [], o = 0, n = t.length; o < n; o++) {
        I(e, t[o]) || e.push(t[o]);
      }return e;
    } },
      E = "function" == typeof define && define.amd;var A,
      R = navigator.userAgent,
      P = /MSIE|Trident/i.test(R);if (P) {
    var L = /MSIE (\d+[.]\d+)/.exec(R);L && (A = parseFloat(L[1])), (L = /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.exec(R)) && (A = parseFloat(L[1]));
  }var H = /Edge\/\d+/.test(R),
      D = !!window.CodeMirror;if (!D && E) if ("function" == typeof __webpack_require__) try {
    require.resolve("codemirror"), D = !0;
  } catch (t) {} else if ("undefined" != typeof require) if (void 0 !== require.resolve) try {
    require.resolve("codemirror"), D = !0;
  } catch (t) {} else void 0 !== require.specified && (D = require.specified("codemirror"));var F = "ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
      B = P || H ? "DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted" : "input",
      z = { isMac: navigator.appVersion.indexOf("Mac") > -1, isMSIE: P, isEdge: H, isFF: !H && /firefox/i.test(R), isPhantom: /PhantomJS/i.test(R), isWebkit: !H && /webkit/i.test(R), isChrome: !H && /chrome/i.test(R), isSafari: !H && /safari/i.test(R), browserVersion: A, jqueryVersion: parseFloat(t.fn.jquery), isSupportAmd: E, isSupportTouch: F, hasCodeMirror: D, isFontInstalled: function isFontInstalled(e) {
      var o = "Comic Sans MS" === e ? "Courier New" : "Comic Sans MS",
          n = t("<div>").css({ position: "absolute", left: "-9999px", top: "-9999px", fontSize: "200px" }).text("mmmmmmmmmwwwwwww").appendTo(document.body),
          i = n.css("fontFamily", o).width(),
          r = n.css("fontFamily", e + "," + o).width();return n.remove(), i !== r;
    }, isW3CRangeSupport: !!document.createRange, inputEventName: B },
      M = String.fromCharCode(160);function O(e) {
    return e && t(e).hasClass("note-editable");
  }function U(t) {
    return t = t.toUpperCase(), function (e) {
      return e && e.nodeName.toUpperCase() === t;
    };
  }function j(t) {
    return t && 3 === t.nodeType;
  }function q(t) {
    return t && /^BR|^IMG|^HR|^IFRAME|^BUTTON|^INPUT/.test(t.nodeName.toUpperCase());
  }function K(t) {
    return !O(t) && t && /^DIV|^P|^LI|^H[1-7]/.test(t.nodeName.toUpperCase());
  }var V = U("PRE"),
      W = U("LI");var G = U("TABLE"),
      _ = U("DATA");function Z(t) {
    return !(tt(t) || Y(t) || Q(t) || K(t) || G(t) || X(t) || _(t));
  }function Y(t) {
    return t && /^UL|^OL/.test(t.nodeName.toUpperCase());
  }var Q = U("HR");function J(t) {
    return t && /^TD|^TH/.test(t.nodeName.toUpperCase());
  }var X = U("BLOCKQUOTE");function tt(t) {
    return J(t) || X(t) || O(t);
  }var et = U("A");var ot = U("BODY");var nt = z.isMSIE && z.browserVersion < 11 ? "&nbsp;" : "<br>";function it(t) {
    return j(t) ? t.nodeValue.length : t ? t.childNodes.length : 0;
  }function rt(t) {
    var e = it(t);return 0 === e || !j(t) && 1 === e && t.innerHTML === nt || !(!N.all(t.childNodes, j) || "" !== t.innerHTML);
  }function st(t) {
    q(t) || it(t) || (t.innerHTML = nt);
  }function at(t, e) {
    for (; t;) {
      if (e(t)) return t;if (O(t)) break;t = t.parentNode;
    }return null;
  }function lt(t, e) {
    e = e || C.fail;var o = [];return at(t, function (t) {
      return O(t) || o.push(t), e(t);
    }), o;
  }function ct(t, e) {
    e = e || C.fail;for (var o = []; t && !e(t);) {
      o.push(t), t = t.nextSibling;
    }return o;
  }function dt(t, e) {
    var o = e.nextSibling,
        n = e.parentNode;return o ? n.insertBefore(t, o) : n.appendChild(t), t;
  }function ut(e, o) {
    return t.each(o, function (t, o) {
      e.appendChild(o);
    }), e;
  }function ht(t) {
    return 0 === t.offset;
  }function pt(t) {
    return t.offset === it(t.node);
  }function ft(t) {
    return ht(t) || pt(t);
  }function mt(t, e) {
    for (; t && t !== e;) {
      if (0 !== vt(t)) return !1;t = t.parentNode;
    }return !0;
  }function gt(t, e) {
    if (!e) return !1;for (; t && t !== e;) {
      if (vt(t) !== it(t.parentNode) - 1) return !1;t = t.parentNode;
    }return !0;
  }function vt(t) {
    for (var e = 0; t = t.previousSibling;) {
      e += 1;
    }return e;
  }function bt(t) {
    return !!(t && t.childNodes && t.childNodes.length);
  }function yt(t, e) {
    var o, n;if (0 === t.offset) {
      if (O(t.node)) return null;o = t.node.parentNode, n = vt(t.node);
    } else bt(t.node) ? n = it(o = t.node.childNodes[t.offset - 1]) : (o = t.node, n = e ? 0 : t.offset - 1);return { node: o, offset: n };
  }function kt(t, e) {
    var o, n;if (it(t.node) === t.offset) {
      if (O(t.node)) return null;o = t.node.parentNode, n = vt(t.node) + 1;
    } else bt(t.node) ? (o = t.node.childNodes[t.offset], n = 0) : (o = t.node, n = e ? it(t.node) : t.offset + 1);return { node: o, offset: n };
  }function Ct(t, e) {
    return t.node === e.node && t.offset === e.offset;
  }function wt(t, e) {
    var o = e && e.isSkipPaddingBlankHTML,
        n = e && e.isNotSplitEdgePoint;if (ft(t) && (j(t.node) || n)) {
      if (ht(t)) return t.node;if (pt(t)) return t.node.nextSibling;
    }if (j(t.node)) return t.node.splitText(t.offset);var i = t.node.childNodes[t.offset],
        r = dt(t.node.cloneNode(!1), t.node);return ut(r, ct(i)), o || (st(t.node), st(r)), r;
  }function xt(t, e, o) {
    var n = lt(e.node, C.eq(t));return n.length ? 1 === n.length ? wt(e, o) : n.reduce(function (t, n) {
      return t === e.node && (t = wt(e, o)), wt({ node: n, offset: t ? vt(t) : it(n) }, o);
    }) : null;
  }function St(t) {
    return document.createElement(t);
  }function Tt(t, e) {
    if (t && t.parentNode) {
      if (t.removeNode) return t.removeNode(e);var o = t.parentNode;if (!e) {
        for (var n = [], i = 0, r = t.childNodes.length; i < r; i++) {
          n.push(t.childNodes[i]);
        }for (i = 0, r = n.length; i < r; i++) {
          o.insertBefore(n[i], t);
        }
      }o.removeChild(t);
    }
  }var It = U("TEXTAREA");function $t(t, e) {
    var o = It(t[0]) ? t.val() : t.html();return e ? o.replace(/[\n\r]/g, "") : o;
  }var Nt = { NBSP_CHAR: M, ZERO_WIDTH_NBSP_CHAR: "\uFEFF", blank: nt, emptyPara: "<p>" + nt + "</p>", makePredByNodeName: U, isEditable: O, isControlSizing: function isControlSizing(e) {
      return e && t(e).hasClass("note-control-sizing");
    }, isText: j, isElement: function isElement(t) {
      return t && 1 === t.nodeType;
    }, isVoid: q, isPara: K, isPurePara: function isPurePara(t) {
      return K(t) && !W(t);
    }, isHeading: function isHeading(t) {
      return t && /^H[1-7]/.test(t.nodeName.toUpperCase());
    }, isInline: Z, isBlock: C.not(Z), isBodyInline: function isBodyInline(t) {
      return Z(t) && !at(t, K);
    }, isBody: ot, isParaInline: function isParaInline(t) {
      return Z(t) && !!at(t, K);
    }, isPre: V, isList: Y, isTable: G, isData: _, isCell: J, isBlockquote: X, isBodyContainer: tt, isAnchor: et, isDiv: U("DIV"), isLi: W, isBR: U("BR"), isSpan: U("SPAN"), isB: U("B"), isU: U("U"), isS: U("S"), isI: U("I"), isImg: U("IMG"), isTextarea: It, isEmpty: rt, isEmptyAnchor: C.and(et, rt), isClosestSibling: function isClosestSibling(t, e) {
      return t.nextSibling === e || t.previousSibling === e;
    }, withClosestSiblings: function withClosestSiblings(t, e) {
      e = e || C.ok;var o = [];return t.previousSibling && e(t.previousSibling) && o.push(t.previousSibling), o.push(t), t.nextSibling && e(t.nextSibling) && o.push(t.nextSibling), o;
    }, nodeLength: it, isLeftEdgePoint: ht, isRightEdgePoint: pt, isEdgePoint: ft, isLeftEdgeOf: mt, isRightEdgeOf: gt, isLeftEdgePointOf: function isLeftEdgePointOf(t, e) {
      return ht(t) && mt(t.node, e);
    }, isRightEdgePointOf: function isRightEdgePointOf(t, e) {
      return pt(t) && gt(t.node, e);
    }, prevPoint: yt, nextPoint: kt, isSamePoint: Ct, isVisiblePoint: function isVisiblePoint(t) {
      if (j(t.node) || !bt(t.node) || rt(t.node)) return !0;var e = t.node.childNodes[t.offset - 1],
          o = t.node.childNodes[t.offset];return !(e && !q(e) || o && !q(o));
    }, prevPointUntil: function prevPointUntil(t, e) {
      for (; t;) {
        if (e(t)) return t;t = yt(t);
      }return null;
    }, nextPointUntil: function nextPointUntil(t, e) {
      for (; t;) {
        if (e(t)) return t;t = kt(t);
      }return null;
    }, isCharPoint: function isCharPoint(t) {
      if (!j(t.node)) return !1;var e = t.node.nodeValue.charAt(t.offset - 1);return e && " " !== e && e !== M;
    }, walkPoint: function walkPoint(t, e, o, n) {
      for (var i = t; i && (o(i), !Ct(i, e));) {
        i = kt(i, n && t.node !== i.node && e.node !== i.node);
      }
    }, ancestor: at, singleChildAncestor: function singleChildAncestor(t, e) {
      for (t = t.parentNode; t && 1 === it(t);) {
        if (e(t)) return t;if (O(t)) break;t = t.parentNode;
      }return null;
    }, listAncestor: lt, lastAncestor: function lastAncestor(t, e) {
      var o = lt(t);return N.last(o.filter(e));
    }, listNext: ct, listPrev: function listPrev(t, e) {
      e = e || C.fail;for (var o = []; t && !e(t);) {
        o.push(t), t = t.previousSibling;
      }return o;
    }, listDescendant: function listDescendant(t, e) {
      var o = [];return e = e || C.ok, function n(i) {
        t !== i && e(i) && o.push(i);for (var r = 0, s = i.childNodes.length; r < s; r++) {
          n(i.childNodes[r]);
        }
      }(t), o;
    }, commonAncestor: function commonAncestor(e, o) {
      for (var n = lt(e), i = o; i; i = i.parentNode) {
        if (t.inArray(i, n) > -1) return i;
      }return null;
    }, wrap: function wrap(e, o) {
      var n = e.parentNode,
          i = t("<" + o + ">")[0];return n.insertBefore(i, e), i.appendChild(e), i;
    }, insertAfter: dt, appendChildNodes: ut, position: vt, hasChildren: bt, makeOffsetPath: function makeOffsetPath(t, e) {
      return lt(e, C.eq(t)).map(vt).reverse();
    }, fromOffsetPath: function fromOffsetPath(t, e) {
      for (var o = t, n = 0, i = e.length; n < i; n++) {
        o = o.childNodes.length <= e[n] ? o.childNodes[o.childNodes.length - 1] : o.childNodes[e[n]];
      }return o;
    }, splitTree: xt, splitPoint: function splitPoint(t, e) {
      var o,
          n,
          i = e ? K : tt,
          r = lt(t.node, i),
          s = N.last(r) || t.node;i(s) ? (o = r[r.length - 2], n = s) : n = (o = s).parentNode;var a = o && xt(o, t, { isSkipPaddingBlankHTML: e, isNotSplitEdgePoint: e });return a || n !== t.node || (a = t.node.childNodes[t.offset]), { rightNode: a, container: n };
    }, create: St, createText: function createText(t) {
      return document.createTextNode(t);
    }, remove: Tt, removeWhile: function removeWhile(t, e) {
      for (; t && !O(t) && e(t);) {
        var o = t.parentNode;Tt(t), t = o;
      }
    }, replace: function replace(t, e) {
      if (t.nodeName.toUpperCase() === e.toUpperCase()) return t;var o = St(e);return t.style.cssText && (o.style.cssText = t.style.cssText), ut(o, N.from(t.childNodes)), dt(o, t), Tt(t), o;
    }, html: function html(e, o) {
      var n = $t(e);o && (n = n.replace(/<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g, function (t, e, o) {
        o = o.toUpperCase();var n = /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(o) && !!e,
            i = /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(o);return t + (n || i ? "\n" : "");
      }), n = t.trim(n));return n;
    }, value: $t, posFromPlaceholder: function posFromPlaceholder(e) {
      var o = t(e),
          n = o.offset(),
          i = o.outerHeight(!0);return { left: n.left, top: n.top + i };
    }, attachEvents: function attachEvents(t, e) {
      Object.keys(e).forEach(function (o) {
        t.on(o, e[o]);
      });
    }, detachEvents: function detachEvents(t, e) {
      Object.keys(e).forEach(function (o) {
        t.off(o, e[o]);
      });
    }, isCustomStyleTag: function isCustomStyleTag(t) {
      return t && !j(t) && N.contains(t.classList, "note-styletag");
    } };t.summernote = t.summernote || { lang: {} }, t.extend(t.summernote.lang, { "en-US": { font: { bold: "Bold", italic: "Italic", underline: "Underline", clear: "Remove Font Style", height: "Line Height", name: "Font Family", strikethrough: "Strikethrough", subscript: "Subscript", superscript: "Superscript", size: "Font Size" }, image: { image: "Picture", insert: "Insert Image", resizeFull: "Resize Full", resizeHalf: "Resize Half", resizeQuarter: "Resize Quarter", floatLeft: "Float Left", floatRight: "Float Right", floatNone: "Float None", shapeRounded: "Shape: Rounded", shapeCircle: "Shape: Circle", shapeThumbnail: "Shape: Thumbnail", shapeNone: "Shape: None", dragImageHere: "Drag image or text here", dropImage: "Drop image or Text", selectFromFiles: "Select from files", maximumFileSize: "Maximum file size", maximumFileSizeError: "Maximum file size exceeded.", url: "Image URL", remove: "Remove Image", original: "Original" }, video: { video: "Video", videoLink: "Video Link", insert: "Insert Video", url: "Video URL", providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)" }, link: { link: "Link", insert: "Insert Link", unlink: "Unlink", edit: "Edit", textToDisplay: "Text to display", url: "To what URL should this link go?", openInNewWindow: "Open in new window" }, table: { table: "Table", addRowAbove: "Add row above", addRowBelow: "Add row below", addColLeft: "Add column left", addColRight: "Add column right", delRow: "Delete row", delCol: "Delete column", delTable: "Delete table" }, hr: { insert: "Insert Horizontal Rule" }, style: { style: "Style", p: "Normal", blockquote: "Quote", pre: "Code", h1: "Header 1", h2: "Header 2", h3: "Header 3", h4: "Header 4", h5: "Header 5", h6: "Header 6" }, lists: { unordered: "Unordered list", ordered: "Ordered list" }, options: { help: "Help", fullscreen: "Full Screen", codeview: "Code View" }, paragraph: { paragraph: "Paragraph", outdent: "Outdent", indent: "Indent", left: "Align left", center: "Align center", right: "Align right", justify: "Justify full" }, color: { recent: "Recent Color", more: "More Color", background: "Background Color", foreground: "Foreground Color", transparent: "Transparent", setTransparent: "Set transparent", reset: "Reset", resetToDefault: "Reset to default" }, shortcut: { shortcuts: "Keyboard shortcuts", close: "Close", textFormatting: "Text formatting", action: "Action", paragraphFormatting: "Paragraph formatting", documentStyle: "Document Style", extraKeys: "Extra keys" }, help: { insertParagraph: "Insert Paragraph", undo: "Undoes the last command", redo: "Redoes the last command", tab: "Tab", untab: "Untab", bold: "Set a bold style", italic: "Set a italic style", underline: "Set a underline style", strikethrough: "Set a strikethrough style", removeFormat: "Clean a style", justifyLeft: "Set left align", justifyCenter: "Set center align", justifyRight: "Set right align", justifyFull: "Set full align", insertUnorderedList: "Toggle unordered list", insertOrderedList: "Toggle ordered list", outdent: "Outdent on current paragraph", indent: "Indent on current paragraph", formatPara: "Change current block's format as a paragraph(P tag)", formatH1: "Change current block's format as H1", formatH2: "Change current block's format as H2", formatH3: "Change current block's format as H3", formatH4: "Change current block's format as H4", formatH5: "Change current block's format as H5", formatH6: "Change current block's format as H6", insertHorizontalRule: "Insert horizontal rule", "linkDialog.show": "Show Link Dialog" }, history: { undo: "Undo", redo: "Redo" }, specialChar: { specialChar: "SPECIAL CHARACTERS", select: "Select Special characters" } } });var Et = { BACKSPACE: 8, TAB: 9, ENTER: 13, SPACE: 32, DELETE: 46, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, NUM0: 48, NUM1: 49, NUM2: 50, NUM3: 51, NUM4: 52, NUM5: 53, NUM6: 54, NUM7: 55, NUM8: 56, B: 66, E: 69, I: 73, J: 74, K: 75, L: 76, R: 82, S: 83, U: 85, V: 86, Y: 89, Z: 90, SLASH: 191, LEFTBRACKET: 219, BACKSLASH: 220, RIGHTBRACKET: 221 },
      At = { isEdit: function isEdit(t) {
      return N.contains([Et.BACKSPACE, Et.TAB, Et.ENTER, Et.SPACE, Et.DELETE], t);
    }, isMove: function isMove(t) {
      return N.contains([Et.LEFT, Et.UP, Et.RIGHT, Et.DOWN], t);
    }, nameFromCode: C.invertObject(Et), code: Et };function Rt(t, e) {
    var o,
        n,
        i = t.parentElement(),
        r = document.body.createTextRange(),
        s = N.from(i.childNodes);for (o = 0; o < s.length; o++) {
      if (!Nt.isText(s[o])) {
        if (r.moveToElementText(s[o]), r.compareEndPoints("StartToStart", t) >= 0) break;n = s[o];
      }
    }if (0 !== o && Nt.isText(s[o - 1])) {
      var a = document.body.createTextRange(),
          l = null;a.moveToElementText(n || i), a.collapse(!n), l = n ? n.nextSibling : i.firstChild;var c = t.duplicate();c.setEndPoint("StartToStart", a);for (var d = c.text.replace(/[\r\n]/g, "").length; d > l.nodeValue.length && l.nextSibling;) {
        d -= l.nodeValue.length, l = l.nextSibling;
      }l.nodeValue;e && l.nextSibling && Nt.isText(l.nextSibling) && d === l.nodeValue.length && (d -= l.nodeValue.length, l = l.nextSibling), i = l, o = d;
    }return { cont: i, offset: o };
  }function Pt(t) {
    var e = function e(t, o) {
      var n, i;if (Nt.isText(t)) {
        var r = Nt.listPrev(t, C.not(Nt.isText)),
            s = N.last(r).previousSibling;n = s || t.parentNode, o += N.sum(N.tail(r), Nt.nodeLength), i = !s;
      } else {
        if (n = t.childNodes[o] || t, Nt.isText(n)) return e(n, 0);o = 0, i = !1;
      }return { node: n, collapseToStart: i, offset: o };
    },
        o = document.body.createTextRange(),
        n = e(t.node, t.offset);return o.moveToElementText(n.node), o.collapse(n.collapseToStart), o.moveStart("character", n.offset), o;
  }var Lt = function () {
    function e(t, e, o, n) {
      this.sc = t, this.so = e, this.ec = o, this.eo = n, this.isOnEditable = this.makeIsOn(Nt.isEditable), this.isOnList = this.makeIsOn(Nt.isList), this.isOnAnchor = this.makeIsOn(Nt.isAnchor), this.isOnCell = this.makeIsOn(Nt.isCell), this.isOnData = this.makeIsOn(Nt.isData);
    }return e.prototype.nativeRange = function () {
      if (z.isW3CRangeSupport) {
        var t = document.createRange();return t.setStart(this.sc, this.so), t.setEnd(this.ec, this.eo), t;
      }var e = Pt({ node: this.sc, offset: this.so });return e.setEndPoint("EndToEnd", Pt({ node: this.ec, offset: this.eo })), e;
    }, e.prototype.getPoints = function () {
      return { sc: this.sc, so: this.so, ec: this.ec, eo: this.eo };
    }, e.prototype.getStartPoint = function () {
      return { node: this.sc, offset: this.so };
    }, e.prototype.getEndPoint = function () {
      return { node: this.ec, offset: this.eo };
    }, e.prototype.select = function () {
      var t = this.nativeRange();if (z.isW3CRangeSupport) {
        var e = document.getSelection();e.rangeCount > 0 && e.removeAllRanges(), e.addRange(t);
      } else t.select();return this;
    }, e.prototype.scrollIntoView = function (e) {
      var o = t(e).height();return e.scrollTop + o < this.sc.offsetTop && (e.scrollTop += Math.abs(e.scrollTop + o - this.sc.offsetTop)), this;
    }, e.prototype.normalize = function () {
      var t = function t(_t2, e) {
        if (Nt.isVisiblePoint(_t2) && !Nt.isEdgePoint(_t2) || Nt.isVisiblePoint(_t2) && Nt.isRightEdgePoint(_t2) && !e || Nt.isVisiblePoint(_t2) && Nt.isLeftEdgePoint(_t2) && e || Nt.isVisiblePoint(_t2) && Nt.isBlock(_t2.node) && Nt.isEmpty(_t2.node)) return _t2;var o = Nt.ancestor(_t2.node, Nt.isBlock);if ((Nt.isLeftEdgePointOf(_t2, o) || Nt.isVoid(Nt.prevPoint(_t2).node)) && !e || (Nt.isRightEdgePointOf(_t2, o) || Nt.isVoid(Nt.nextPoint(_t2).node)) && e) {
          if (Nt.isVisiblePoint(_t2)) return _t2;e = !e;
        }return (e ? Nt.nextPointUntil(Nt.nextPoint(_t2), Nt.isVisiblePoint) : Nt.prevPointUntil(Nt.prevPoint(_t2), Nt.isVisiblePoint)) || _t2;
      },
          o = t(this.getEndPoint(), !1),
          n = this.isCollapsed() ? o : t(this.getStartPoint(), !0);return new e(n.node, n.offset, o.node, o.offset);
    }, e.prototype.nodes = function (t, e) {
      t = t || C.ok;var o = e && e.includeAncestor,
          n = e && e.fullyContains,
          i = this.getStartPoint(),
          r = this.getEndPoint(),
          s = [],
          a = [];return Nt.walkPoint(i, r, function (e) {
        var i;Nt.isEditable(e.node) || (n ? (Nt.isLeftEdgePoint(e) && a.push(e.node), Nt.isRightEdgePoint(e) && N.contains(a, e.node) && (i = e.node)) : i = o ? Nt.ancestor(e.node, t) : e.node, i && t(i) && s.push(i));
      }, !0), N.unique(s);
    }, e.prototype.commonAncestor = function () {
      return Nt.commonAncestor(this.sc, this.ec);
    }, e.prototype.expand = function (t) {
      var o = Nt.ancestor(this.sc, t),
          n = Nt.ancestor(this.ec, t);if (!o && !n) return new e(this.sc, this.so, this.ec, this.eo);var i = this.getPoints();return o && (i.sc = o, i.so = 0), n && (i.ec = n, i.eo = Nt.nodeLength(n)), new e(i.sc, i.so, i.ec, i.eo);
    }, e.prototype.collapse = function (t) {
      return t ? new e(this.sc, this.so, this.sc, this.so) : new e(this.ec, this.eo, this.ec, this.eo);
    }, e.prototype.splitText = function () {
      var t = this.sc === this.ec,
          o = this.getPoints();return Nt.isText(this.ec) && !Nt.isEdgePoint(this.getEndPoint()) && this.ec.splitText(this.eo), Nt.isText(this.sc) && !Nt.isEdgePoint(this.getStartPoint()) && (o.sc = this.sc.splitText(this.so), o.so = 0, t && (o.ec = o.sc, o.eo = this.eo - this.so)), new e(o.sc, o.so, o.ec, o.eo);
    }, e.prototype.deleteContents = function () {
      if (this.isCollapsed()) return this;var o = this.splitText(),
          n = o.nodes(null, { fullyContains: !0 }),
          i = Nt.prevPointUntil(o.getStartPoint(), function (t) {
        return !N.contains(n, t.node);
      }),
          r = [];return t.each(n, function (t, e) {
        var o = e.parentNode;i.node !== o && 1 === Nt.nodeLength(o) && r.push(o), Nt.remove(e, !1);
      }), t.each(r, function (t, e) {
        Nt.remove(e, !1);
      }), new e(i.node, i.offset, i.node, i.offset).normalize();
    }, e.prototype.makeIsOn = function (t) {
      return function () {
        var e = Nt.ancestor(this.sc, t);return !!e && e === Nt.ancestor(this.ec, t);
      };
    }, e.prototype.isLeftEdgeOf = function (t) {
      if (!Nt.isLeftEdgePoint(this.getStartPoint())) return !1;var e = Nt.ancestor(this.sc, t);return e && Nt.isLeftEdgeOf(this.sc, e);
    }, e.prototype.isCollapsed = function () {
      return this.sc === this.ec && this.so === this.eo;
    }, e.prototype.wrapBodyInlineWithPara = function () {
      if (Nt.isBodyContainer(this.sc) && Nt.isEmpty(this.sc)) return this.sc.innerHTML = Nt.emptyPara, new e(this.sc.firstChild, 0, this.sc.firstChild, 0);var t,
          o = this.normalize();if (Nt.isParaInline(this.sc) || Nt.isPara(this.sc)) return o;if (Nt.isInline(o.sc)) {
        var n = Nt.listAncestor(o.sc, C.not(Nt.isInline));t = N.last(n), Nt.isInline(t) || (t = n[n.length - 2] || o.sc.childNodes[o.so]);
      } else t = o.sc.childNodes[o.so > 0 ? o.so - 1 : 0];var i = Nt.listPrev(t, Nt.isParaInline).reverse();if ((i = i.concat(Nt.listNext(t.nextSibling, Nt.isParaInline))).length) {
        var r = Nt.wrap(N.head(i), "p");Nt.appendChildNodes(r, N.tail(i));
      }return this.normalize();
    }, e.prototype.insertNode = function (t) {
      var e = this.wrapBodyInlineWithPara().deleteContents(),
          o = Nt.splitPoint(e.getStartPoint(), Nt.isInline(t));return o.rightNode ? o.rightNode.parentNode.insertBefore(t, o.rightNode) : o.container.appendChild(t), t;
    }, e.prototype.pasteHTML = function (e) {
      var o = t("<div></div>").html(e)[0],
          n = N.from(o.childNodes),
          i = this.wrapBodyInlineWithPara().deleteContents();return n.reverse().map(function (t) {
        return i.insertNode(t);
      }).reverse();
    }, e.prototype.toString = function () {
      var t = this.nativeRange();return z.isW3CRangeSupport ? t.toString() : t.text;
    }, e.prototype.getWordRange = function (t) {
      var o = this.getEndPoint();if (!Nt.isCharPoint(o)) return this;var n = Nt.prevPointUntil(o, function (t) {
        return !Nt.isCharPoint(t);
      });return t && (o = Nt.nextPointUntil(o, function (t) {
        return !Nt.isCharPoint(t);
      })), new e(n.node, n.offset, o.node, o.offset);
    }, e.prototype.bookmark = function (t) {
      return { s: { path: Nt.makeOffsetPath(t, this.sc), offset: this.so }, e: { path: Nt.makeOffsetPath(t, this.ec), offset: this.eo } };
    }, e.prototype.paraBookmark = function (t) {
      return { s: { path: N.tail(Nt.makeOffsetPath(N.head(t), this.sc)), offset: this.so }, e: { path: N.tail(Nt.makeOffsetPath(N.last(t), this.ec)), offset: this.eo } };
    }, e.prototype.getClientRects = function () {
      return this.nativeRange().getClientRects();
    }, e;
  }(),
      Ht = { create: function create(t, e, o, n) {
      if (4 === arguments.length) return new Lt(t, e, o, n);if (2 === arguments.length) return new Lt(t, e, o = t, n = e);var i = this.createFromSelection();return i || 1 !== arguments.length ? i : (i = this.createFromNode(arguments[0])).collapse(Nt.emptyPara === arguments[0].innerHTML);
    }, createFromSelection: function createFromSelection() {
      var t, e, o, n;if (z.isW3CRangeSupport) {
        var i = document.getSelection();if (!i || 0 === i.rangeCount) return null;if (Nt.isBody(i.anchorNode)) return null;var r = i.getRangeAt(0);t = r.startContainer, e = r.startOffset, o = r.endContainer, n = r.endOffset;
      } else {
        var s = document.selection.createRange(),
            a = s.duplicate();a.collapse(!1);var l = s;l.collapse(!0);var c = Rt(l, !0),
            d = Rt(a, !1);Nt.isText(c.node) && Nt.isLeftEdgePoint(c) && Nt.isTextNode(d.node) && Nt.isRightEdgePoint(d) && d.node.nextSibling === c.node && (c = d), t = c.cont, e = c.offset, o = d.cont, n = d.offset;
      }return new Lt(t, e, o, n);
    }, createFromNode: function createFromNode(t) {
      var e = t,
          o = 0,
          n = t,
          i = Nt.nodeLength(n);return Nt.isVoid(e) && (o = Nt.listPrev(e).length - 1, e = e.parentNode), Nt.isBR(n) ? (i = Nt.listPrev(n).length - 1, n = n.parentNode) : Nt.isVoid(n) && (i = Nt.listPrev(n).length, n = n.parentNode), this.create(e, o, n, i);
    }, createFromNodeBefore: function createFromNodeBefore(t) {
      return this.createFromNode(t).collapse(!0);
    }, createFromNodeAfter: function createFromNodeAfter(t) {
      return this.createFromNode(t).collapse();
    }, createFromBookmark: function createFromBookmark(t, e) {
      var o = Nt.fromOffsetPath(t, e.s.path),
          n = e.s.offset,
          i = Nt.fromOffsetPath(t, e.e.path),
          r = e.e.offset;return new Lt(o, n, i, r);
    }, createFromParaBookmark: function createFromParaBookmark(t, e) {
      var o = t.s.offset,
          n = t.e.offset,
          i = Nt.fromOffsetPath(N.head(e), t.s.path),
          r = Nt.fromOffsetPath(N.last(e), t.e.path);return new Lt(i, o, r, n);
    } };var Dt = function () {
    function t(t) {
      this.stack = [], this.stackOffset = -1, this.$editable = t, this.editable = t[0];
    }return t.prototype.makeSnapshot = function () {
      var t = Ht.create(this.editable);return { contents: this.$editable.html(), bookmark: t ? t.bookmark(this.editable) : { s: { path: [], offset: 0 }, e: { path: [], offset: 0 } } };
    }, t.prototype.applySnapshot = function (t) {
      null !== t.contents && this.$editable.html(t.contents), null !== t.bookmark && Ht.createFromBookmark(this.editable, t.bookmark).select();
    }, t.prototype.rewind = function () {
      this.$editable.html() !== this.stack[this.stackOffset].contents && this.recordUndo(), this.stackOffset = 0, this.applySnapshot(this.stack[this.stackOffset]);
    }, t.prototype.reset = function () {
      this.stack = [], this.stackOffset = -1, this.$editable.html(""), this.recordUndo();
    }, t.prototype.undo = function () {
      this.$editable.html() !== this.stack[this.stackOffset].contents && this.recordUndo(), this.stackOffset > 0 && (this.stackOffset--, this.applySnapshot(this.stack[this.stackOffset]));
    }, t.prototype.redo = function () {
      this.stack.length - 1 > this.stackOffset && (this.stackOffset++, this.applySnapshot(this.stack[this.stackOffset]));
    }, t.prototype.recordUndo = function () {
      this.stackOffset++, this.stack.length > this.stackOffset && (this.stack = this.stack.slice(0, this.stackOffset)), this.stack.push(this.makeSnapshot());
    }, t;
  }(),
      Ft = function () {
    function e() {}return e.prototype.jQueryCSS = function (e, o) {
      if (z.jqueryVersion < 1.9) {
        var n = {};return t.each(o, function (t, o) {
          n[o] = e.css(o);
        }), n;
      }return e.css(o);
    }, e.prototype.fromNode = function (t) {
      var e = this.jQueryCSS(t, ["font-family", "font-size", "text-align", "list-style-type", "line-height"]) || {};return e["font-size"] = parseInt(e["font-size"], 10), e;
    }, e.prototype.stylePara = function (e, o) {
      t.each(e.nodes(Nt.isPara, { includeAncestor: !0 }), function (e, n) {
        t(n).css(o);
      });
    }, e.prototype.styleNodes = function (e, o) {
      e = e.splitText();var n = o && o.nodeName || "SPAN",
          i = !(!o || !o.expandClosestSibling),
          r = !(!o || !o.onlyPartialContains);if (e.isCollapsed()) return [e.insertNode(Nt.create(n))];var s = Nt.makePredByNodeName(n),
          a = e.nodes(Nt.isText, { fullyContains: !0 }).map(function (t) {
        return Nt.singleChildAncestor(t, s) || Nt.wrap(t, n);
      });if (i) {
        if (r) {
          var l = e.nodes();s = C.and(s, function (t) {
            return N.contains(l, t);
          });
        }return a.map(function (e) {
          var o = Nt.withClosestSiblings(e, s),
              n = N.head(o),
              i = N.tail(o);return t.each(i, function (t, e) {
            Nt.appendChildNodes(n, e.childNodes), Nt.remove(e);
          }), N.head(o);
        });
      }return a;
    }, e.prototype.current = function (e) {
      var o = t(Nt.isElement(e.sc) ? e.sc : e.sc.parentNode),
          n = this.fromNode(o);try {
        n = t.extend(n, { "font-bold": document.queryCommandState("bold") ? "bold" : "normal", "font-italic": document.queryCommandState("italic") ? "italic" : "normal", "font-underline": document.queryCommandState("underline") ? "underline" : "normal", "font-subscript": document.queryCommandState("subscript") ? "subscript" : "normal", "font-superscript": document.queryCommandState("superscript") ? "superscript" : "normal", "font-strikethrough": document.queryCommandState("strikethrough") ? "strikethrough" : "normal", "font-family": document.queryCommandValue("fontname") || n["font-family"] });
      } catch (t) {}if (e.isOnList()) {
        var i = t.inArray(n["list-style-type"], ["circle", "disc", "disc-leading-zero", "square"]) > -1;n["list-style"] = i ? "unordered" : "ordered";
      } else n["list-style"] = "none";var r = Nt.ancestor(e.sc, Nt.isPara);if (r && r.style["line-height"]) n["line-height"] = r.style.lineHeight;else {
        var s = parseInt(n["line-height"], 10) / parseInt(n["font-size"], 10);n["line-height"] = s.toFixed(1);
      }return n.anchor = e.isOnAnchor() && Nt.ancestor(e.sc, Nt.isAnchor), n.ancestors = Nt.listAncestor(e.sc, Nt.isEditable), n.range = e, n;
    }, e;
  }(),
      Bt = function () {
    function e() {}return e.prototype.insertOrderedList = function (t) {
      this.toggleList("OL", t);
    }, e.prototype.insertUnorderedList = function (t) {
      this.toggleList("UL", t);
    }, e.prototype.indent = function (e) {
      var o = this,
          n = Ht.create(e).wrapBodyInlineWithPara(),
          i = n.nodes(Nt.isPara, { includeAncestor: !0 }),
          r = N.clusterBy(i, C.peq2("parentNode"));t.each(r, function (e, n) {
        var i = N.head(n);Nt.isLi(i) ? o.wrapList(n, i.parentNode.nodeName) : t.each(n, function (e, o) {
          t(o).css("marginLeft", function (t, e) {
            return (parseInt(e, 10) || 0) + 25;
          });
        });
      }), n.select();
    }, e.prototype.outdent = function (e) {
      var o = this,
          n = Ht.create(e).wrapBodyInlineWithPara(),
          i = n.nodes(Nt.isPara, { includeAncestor: !0 }),
          r = N.clusterBy(i, C.peq2("parentNode"));t.each(r, function (e, n) {
        var i = N.head(n);Nt.isLi(i) ? o.releaseList([n]) : t.each(n, function (e, o) {
          t(o).css("marginLeft", function (t, e) {
            return (e = parseInt(e, 10) || 0) > 25 ? e - 25 : "";
          });
        });
      }), n.select();
    }, e.prototype.toggleList = function (e, o) {
      var n = this,
          i = Ht.create(o).wrapBodyInlineWithPara(),
          r = i.nodes(Nt.isPara, { includeAncestor: !0 }),
          s = i.paraBookmark(r),
          a = N.clusterBy(r, C.peq2("parentNode"));if (N.find(r, Nt.isPurePara)) {
        var l = [];t.each(a, function (t, o) {
          l = l.concat(n.wrapList(o, e));
        }), r = l;
      } else {
        var c = i.nodes(Nt.isList, { includeAncestor: !0 }).filter(function (o) {
          return !t.nodeName(o, e);
        });c.length ? t.each(c, function (t, o) {
          Nt.replace(o, e);
        }) : r = this.releaseList(a, !0);
      }Ht.createFromParaBookmark(s, r).select();
    }, e.prototype.wrapList = function (t, e) {
      var o = N.head(t),
          n = N.last(t),
          i = Nt.isList(o.previousSibling) && o.previousSibling,
          r = Nt.isList(n.nextSibling) && n.nextSibling,
          s = i || Nt.insertAfter(Nt.create(e || "UL"), n);return t = t.map(function (t) {
        return Nt.isPurePara(t) ? Nt.replace(t, "LI") : t;
      }), Nt.appendChildNodes(s, t), r && (Nt.appendChildNodes(s, N.from(r.childNodes)), Nt.remove(r)), t;
    }, e.prototype.releaseList = function (e, o) {
      var n = [];return t.each(e, function (e, i) {
        var r = N.head(i),
            s = N.last(i),
            a = o ? Nt.lastAncestor(r, Nt.isList) : r.parentNode,
            l = a.childNodes.length > 1 ? Nt.splitTree(a, { node: s.parentNode, offset: Nt.position(s) + 1 }, { isSkipPaddingBlankHTML: !0 }) : null,
            c = Nt.splitTree(a, { node: r.parentNode, offset: Nt.position(r) }, { isSkipPaddingBlankHTML: !0 });i = o ? Nt.listDescendant(c, Nt.isLi) : N.from(c.childNodes).filter(Nt.isLi), !o && Nt.isList(a.parentNode) || (i = i.map(function (t) {
          return Nt.replace(t, "P");
        })), t.each(N.from(i).reverse(), function (t, e) {
          Nt.insertAfter(e, a);
        });var d = N.compact([a, c, l]);t.each(d, function (e, o) {
          var n = [o].concat(Nt.listDescendant(o, Nt.isList));t.each(n.reverse(), function (t, e) {
            Nt.nodeLength(e) || Nt.remove(e, !0);
          });
        }), n = n.concat(i);
      }), n;
    }, e;
  }(),
      zt = function () {
    function e() {
      this.bullet = new Bt();
    }return e.prototype.insertTab = function (t, e) {
      var o = Nt.createText(new Array(e + 1).join(Nt.NBSP_CHAR));(t = t.deleteContents()).insertNode(o, !0), (t = Ht.create(o, e)).select();
    }, e.prototype.insertParagraph = function (e) {
      var o = Ht.create(e);o = (o = o.deleteContents()).wrapBodyInlineWithPara();var n,
          i = Nt.ancestor(o.sc, Nt.isPara);if (i) {
        if (Nt.isEmpty(i) && Nt.isLi(i)) return void this.bullet.toggleList(i.parentNode.nodeName);if (Nt.isEmpty(i) && Nt.isPara(i) && Nt.isBlockquote(i.parentNode)) Nt.insertAfter(i, i.parentNode), n = i;else {
          n = Nt.splitTree(i, o.getStartPoint());var r = Nt.listDescendant(i, Nt.isEmptyAnchor);r = r.concat(Nt.listDescendant(n, Nt.isEmptyAnchor)), t.each(r, function (t, e) {
            Nt.remove(e);
          }), (Nt.isHeading(n) || Nt.isPre(n) || Nt.isCustomStyleTag(n)) && Nt.isEmpty(n) && (n = Nt.replace(n, "p"));
        }
      } else {
        var s = o.sc.childNodes[o.so];n = t(Nt.emptyPara)[0], s ? o.sc.insertBefore(n, s) : o.sc.appendChild(n);
      }Ht.create(n, 0).normalize().select().scrollIntoView(e);
    }, e;
  }(),
      Mt = function Mt(t, e, o, n) {
    var i = { colPos: 0, rowPos: 0 },
        r = [],
        s = [];function a(t, e, o, n, i, s, a) {
      var l = { baseRow: o, baseCell: n, isRowSpan: i, isColSpan: s, isVirtual: a };r[t] || (r[t] = []), r[t][e] = l;
    }function l(t, e) {
      if (!r[t]) return e;if (!r[t][e]) return e;for (var o = e; r[t][o];) {
        if (o++, !r[t][o]) return o;
      }
    }function c(t, e) {
      var o = l(t.rowIndex, e.cellIndex),
          n = e.colSpan > 1,
          r = e.rowSpan > 1,
          s = t.rowIndex === i.rowPos && e.cellIndex === i.colPos;a(t.rowIndex, o, t, e, r, n, !1);var c = e.attributes.rowSpan ? parseInt(e.attributes.rowSpan.value, 10) : 0;if (c > 1) for (var u = 1; u < c; u++) {
        var h = t.rowIndex + u;d(h, o, e, s), a(h, o, t, e, !0, n, !0);
      }var p = e.attributes.colSpan ? parseInt(e.attributes.colSpan.value, 10) : 0;if (p > 1) for (var f = 1; f < p; f++) {
        var m = l(t.rowIndex, o + f);d(t.rowIndex, m, e, s), a(t.rowIndex, m, t, e, r, !0, !0);
      }
    }function d(t, e, o, n) {
      t === i.rowPos && i.colPos >= o.cellIndex && o.cellIndex <= e && !n && i.colPos++;
    }function u(t) {
      switch (e) {case Mt.where.Column:
          if (t.isColSpan) return Mt.resultAction.SubtractSpanCount;break;case Mt.where.Row:
          if (!t.isVirtual && t.isRowSpan) return Mt.resultAction.AddCell;if (t.isRowSpan) return Mt.resultAction.SubtractSpanCount;}return Mt.resultAction.RemoveCell;
    }function h(t) {
      switch (e) {case Mt.where.Column:
          if (t.isColSpan) return Mt.resultAction.SumSpanCount;if (t.isRowSpan && t.isVirtual) return Mt.resultAction.Ignore;break;case Mt.where.Row:
          if (t.isRowSpan) return Mt.resultAction.SumSpanCount;if (t.isColSpan && t.isVirtual) return Mt.resultAction.Ignore;}return Mt.resultAction.AddCell;
    }this.getActionList = function () {
      for (var t, n, a, l = e === Mt.where.Row ? i.rowPos : -1, c = e === Mt.where.Column ? i.colPos : -1, d = 0, p = !0; p;) {
        var f = l >= 0 ? l : d,
            m = c >= 0 ? c : d,
            g = r[f];if (!g) return p = !1, s;var v = g[m];if (!v) return p = !1, s;var b = Mt.resultAction.Ignore;switch (o) {case Mt.requestAction.Add:
            b = h(v);break;case Mt.requestAction.Delete:
            b = u(v);}s.push((t = b, n = f, a = m, { baseCell: v.baseCell, action: t, virtualTable: { rowIndex: n, cellIndex: a } })), d++;
      }return s;
    }, t && t.tagName && ("td" === t.tagName.toLowerCase() || "th" === t.tagName.toLowerCase()) ? (i.colPos = t.cellIndex, t.parentElement && t.parentElement.tagName && "tr" === t.parentElement.tagName.toLowerCase() ? i.rowPos = t.parentElement.rowIndex : console.error("Impossible to identify start Row point.", t)) : console.error("Impossible to identify start Cell point.", t), function () {
      for (var t = n.rows, e = 0; e < t.length; e++) {
        for (var o = t[e].cells, i = 0; i < o.length; i++) {
          c(t[e], o[i]);
        }
      }
    }();
  };Mt.where = { Row: 0, Column: 1 }, Mt.requestAction = { Add: 0, Delete: 1 }, Mt.resultAction = { Ignore: 0, SubtractSpanCount: 1, RemoveCell: 2, AddCell: 3, SumSpanCount: 4 };var Ot,
      Ut = function () {
    function e() {}return e.prototype.tab = function (t, e) {
      var o = Nt.ancestor(t.commonAncestor(), Nt.isCell),
          n = Nt.ancestor(o, Nt.isTable),
          i = Nt.listDescendant(n, Nt.isCell),
          r = N[e ? "prev" : "next"](i, o);r && Ht.create(r, 0).select();
    }, e.prototype.addRow = function (e, o) {
      for (var n = Nt.ancestor(e.commonAncestor(), Nt.isCell), i = t(n).closest("tr"), r = this.recoverAttributes(i), s = t("<tr" + r + "></tr>"), a = new Mt(n, Mt.where.Row, Mt.requestAction.Add, t(i).closest("table")[0]).getActionList(), l = 0; l < a.length; l++) {
        var c = a[l],
            d = this.recoverAttributes(c.baseCell);switch (c.action) {case Mt.resultAction.AddCell:
            s.append("<td" + d + ">" + Nt.blank + "</td>");break;case Mt.resultAction.SumSpanCount:
            if ("top" === o) if ((c.baseCell.parent ? c.baseCell.closest("tr").rowIndex : 0) <= i[0].rowIndex) {
              var u = t("<div></div>").append(t("<td" + d + ">" + Nt.blank + "</td>").removeAttr("rowspan")).html();s.append(u);break;
            }var h = parseInt(c.baseCell.rowSpan, 10);h++, c.baseCell.setAttribute("rowSpan", h);}
      }if ("top" === o) i.before(s);else {
        if (n.rowSpan > 1) {
          var p = i[0].rowIndex + (n.rowSpan - 2);return void t(t(i).parent().find("tr")[p]).after(t(s));
        }i.after(s);
      }
    }, e.prototype.addCol = function (e, o) {
      var n = Nt.ancestor(e.commonAncestor(), Nt.isCell),
          i = t(n).closest("tr");t(i).siblings().push(i);for (var r = new Mt(n, Mt.where.Column, Mt.requestAction.Add, t(i).closest("table")[0]).getActionList(), s = 0; s < r.length; s++) {
        var a = r[s],
            l = this.recoverAttributes(a.baseCell);switch (a.action) {case Mt.resultAction.AddCell:
            "right" === o ? t(a.baseCell).after("<td" + l + ">" + Nt.blank + "</td>") : t(a.baseCell).before("<td" + l + ">" + Nt.blank + "</td>");break;case Mt.resultAction.SumSpanCount:
            if ("right" === o) {
              var c = parseInt(a.baseCell.colSpan, 10);c++, a.baseCell.setAttribute("colSpan", c);
            } else t(a.baseCell).before("<td" + l + ">" + Nt.blank + "</td>");}
      }
    }, e.prototype.recoverAttributes = function (t) {
      var e = "";if (!t) return e;for (var o = t.attributes || [], n = 0; n < o.length; n++) {
        "id" !== o[n].name.toLowerCase() && o[n].specified && (e += " " + o[n].name + "='" + o[n].value + "'");
      }return e;
    }, e.prototype.deleteRow = function (e) {
      for (var o = Nt.ancestor(e.commonAncestor(), Nt.isCell), n = t(o).closest("tr"), i = n.children("td, th").index(t(o)), r = n[0].rowIndex, s = new Mt(o, Mt.where.Row, Mt.requestAction.Delete, t(n).closest("table")[0]).getActionList(), a = 0; a < s.length; a++) {
        if (s[a]) {
          var l = s[a].baseCell,
              c = s[a].virtualTable,
              d = l.rowSpan && l.rowSpan > 1,
              u = d ? parseInt(l.rowSpan, 10) : 0;switch (s[a].action) {case Mt.resultAction.Ignore:
              continue;case Mt.resultAction.AddCell:
              var h = n.next("tr")[0];if (!h) continue;var p = n[0].cells[i];d && (u > 2 ? (u--, h.insertBefore(p, h.cells[i]), h.cells[i].setAttribute("rowSpan", u), h.cells[i].innerHTML = "") : 2 === u && (h.insertBefore(p, h.cells[i]), h.cells[i].removeAttribute("rowSpan"), h.cells[i].innerHTML = ""));continue;case Mt.resultAction.SubtractSpanCount:
              d && (u > 2 ? (u--, l.setAttribute("rowSpan", u), c.rowIndex !== r && l.cellIndex === i && (l.innerHTML = "")) : 2 === u && (l.removeAttribute("rowSpan"), c.rowIndex !== r && l.cellIndex === i && (l.innerHTML = "")));continue;case Mt.resultAction.RemoveCell:
              continue;}
        }
      }n.remove();
    }, e.prototype.deleteCol = function (e) {
      for (var o = Nt.ancestor(e.commonAncestor(), Nt.isCell), n = t(o).closest("tr"), i = n.children("td, th").index(t(o)), r = new Mt(o, Mt.where.Column, Mt.requestAction.Delete, t(n).closest("table")[0]).getActionList(), s = 0; s < r.length; s++) {
        if (r[s]) switch (r[s].action) {case Mt.resultAction.Ignore:
            continue;case Mt.resultAction.SubtractSpanCount:
            var a = r[s].baseCell;if (a.colSpan && a.colSpan > 1) {
              var l = a.colSpan ? parseInt(a.colSpan, 10) : 0;l > 2 ? (l--, a.setAttribute("colSpan", l), a.cellIndex === i && (a.innerHTML = "")) : 2 === l && (a.removeAttribute("colSpan"), a.cellIndex === i && (a.innerHTML = ""));
            }continue;case Mt.resultAction.RemoveCell:
            Nt.remove(r[s].baseCell, !0);continue;}
      }
    }, e.prototype.createTable = function (e, o, n) {
      for (var i, r = [], s = 0; s < e; s++) {
        r.push("<td>" + Nt.blank + "</td>");
      }i = r.join("");for (var a, l = [], c = 0; c < o; c++) {
        l.push("<tr>" + i + "</tr>");
      }a = l.join("");var d = t("<table>" + a + "</table>");return n && n.tableClassName && d.addClass(n.tableClassName), d[0];
    }, e.prototype.deleteTable = function (e) {
      var o = Nt.ancestor(e.commonAncestor(), Nt.isCell);t(o).closest("table").remove();
    }, e;
  }(),
      jt = function () {
    function e(e) {
      var o = this;this.context = e, this.$note = e.layoutInfo.note, this.$editor = e.layoutInfo.editor, this.$editable = e.layoutInfo.editable, this.options = e.options, this.lang = this.options.langInfo, this.editable = this.$editable[0], this.lastRange = null, this.style = new Ft(), this.table = new Ut(), this.typing = new zt(), this.bullet = new Bt(), this.history = new Dt(this.$editable), this.context.memo("help.undo", this.lang.help.undo), this.context.memo("help.redo", this.lang.help.redo), this.context.memo("help.tab", this.lang.help.tab), this.context.memo("help.untab", this.lang.help.untab), this.context.memo("help.insertParagraph", this.lang.help.insertParagraph), this.context.memo("help.insertOrderedList", this.lang.help.insertOrderedList), this.context.memo("help.insertUnorderedList", this.lang.help.insertUnorderedList), this.context.memo("help.indent", this.lang.help.indent), this.context.memo("help.outdent", this.lang.help.outdent), this.context.memo("help.formatPara", this.lang.help.formatPara), this.context.memo("help.insertHorizontalRule", this.lang.help.insertHorizontalRule), this.context.memo("help.fontName", this.lang.help.fontName);for (var n = ["bold", "italic", "underline", "strikethrough", "superscript", "subscript", "justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "formatBlock", "removeFormat", "backColor"], i = 0, r = n.length; i < r; i++) {
        this[n[i]] = function (t) {
          return function (e) {
            o.beforeCommand(), document.execCommand(t, !1, e), o.afterCommand(!0);
          };
        }(n[i]), this.context.memo("help." + n[i], this.lang.help[n[i]]);
      }this.fontName = this.wrapCommand(function (t) {
        return o.fontStyling("font-family", "'" + t + "'");
      }), this.fontSize = this.wrapCommand(function (t) {
        return o.fontStyling("font-size", t + "px");
      });for (i = 1; i <= 6; i++) {
        this["formatH" + i] = function (t) {
          return function () {
            o.formatBlock("H" + t);
          };
        }(i), this.context.memo("help.formatH" + i, this.lang.help["formatH" + i]);
      }this.insertParagraph = this.wrapCommand(function () {
        o.typing.insertParagraph(o.editable);
      }), this.insertOrderedList = this.wrapCommand(function () {
        o.bullet.insertOrderedList(o.editable);
      }), this.insertUnorderedList = this.wrapCommand(function () {
        o.bullet.insertUnorderedList(o.editable);
      }), this.indent = this.wrapCommand(function () {
        o.bullet.indent(o.editable);
      }), this.outdent = this.wrapCommand(function () {
        o.bullet.outdent(o.editable);
      }), this.insertNode = this.wrapCommand(function (e) {
        o.isLimited(t(e).text().length) || (o.createRange().insertNode(e), Ht.createFromNodeAfter(e).select());
      }), this.insertText = this.wrapCommand(function (t) {
        if (!o.isLimited(t.length)) {
          var e = o.createRange().insertNode(Nt.createText(t));Ht.create(e, Nt.nodeLength(e)).select();
        }
      }), this.pasteHTML = this.wrapCommand(function (t) {
        if (!o.isLimited(t.length)) {
          var e = o.createRange().pasteHTML(t);Ht.createFromNodeAfter(N.last(e)).select();
        }
      }), this.formatBlock = this.wrapCommand(function (t, e) {
        var n = o.options.callbacks.onApplyCustomStyle;n ? n.call(o, e, o.context, o.onFormatBlock) : o.onFormatBlock(t, e);
      }), this.insertHorizontalRule = this.wrapCommand(function () {
        var t = o.createRange().insertNode(Nt.create("HR"));t.nextSibling && Ht.create(t.nextSibling, 0).normalize().select();
      }), this.lineHeight = this.wrapCommand(function (t) {
        o.style.stylePara(o.createRange(), { lineHeight: t });
      }), this.createLink = this.wrapCommand(function (e) {
        var n = e.url,
            i = e.text,
            r = e.isNewWindow,
            s = e.range || o.createRange(),
            a = s.toString() !== i;"string" == typeof n && (n = n.trim()), n = o.options.onCreateLink ? o.options.onCreateLink(n) : /^[A-Za-z][A-Za-z0-9+-.]*\:[\/\/]?/.test(n) ? n : "http://" + n;var l = [];if (a) {
          var c = (s = s.deleteContents()).insertNode(t("<A>" + i + "</A>")[0]);l.push(c);
        } else l = o.style.styleNodes(s, { nodeName: "A", expandClosestSibling: !0, onlyPartialContains: !0 });t.each(l, function (e, o) {
          t(o).attr("href", n), r ? t(o).attr("target", "_blank") : t(o).removeAttr("target");
        });var d = Ht.createFromNodeBefore(N.head(l)).getStartPoint(),
            u = Ht.createFromNodeAfter(N.last(l)).getEndPoint();Ht.create(d.node, d.offset, u.node, u.offset).select();
      }), this.color = this.wrapCommand(function (t) {
        var e = t.foreColor,
            o = t.backColor;e && document.execCommand("foreColor", !1, e), o && document.execCommand("backColor", !1, o);
      }), this.foreColor = this.wrapCommand(function (t) {
        document.execCommand("styleWithCSS", !1, !0), document.execCommand("foreColor", !1, t);
      }), this.insertTable = this.wrapCommand(function (t) {
        var e = t.split("x");o.createRange().deleteContents().insertNode(o.table.createTable(e[0], e[1], o.options));
      }), this.removeMedia = this.wrapCommand(function () {
        var e = t(o.restoreTarget()).parent();e.parent("figure").length ? e.parent("figure").remove() : e = t(o.restoreTarget()).detach(), o.context.triggerEvent("media.delete", e, o.$editable);
      }), this.floatMe = this.wrapCommand(function (e) {
        var n = t(o.restoreTarget());n.toggleClass("note-float-left", "left" === e), n.toggleClass("note-float-right", "right" === e), n.css("float", e);
      }), this.resize = this.wrapCommand(function (e) {
        t(o.restoreTarget()).css({ width: 100 * e + "%", height: "" });
      });
    }return e.prototype.initialize = function () {
      var t = this;this.$editable.on("keydown", function (e) {
        if (e.keyCode === At.code.ENTER && t.context.triggerEvent("enter", e), t.context.triggerEvent("keydown", e), e.isDefaultPrevented() || (t.options.shortcuts ? t.handleKeyMap(e) : t.preventDefaultEditableShortCuts(e)), t.isLimited(1, e)) return !1;
      }).on("keyup", function (e) {
        t.context.triggerEvent("keyup", e);
      }).on("focus", function (e) {
        t.context.triggerEvent("focus", e);
      }).on("blur", function (e) {
        t.context.triggerEvent("blur", e);
      }).on("mousedown", function (e) {
        t.context.triggerEvent("mousedown", e);
      }).on("mouseup", function (e) {
        t.context.triggerEvent("mouseup", e);
      }).on("scroll", function (e) {
        t.context.triggerEvent("scroll", e);
      }).on("paste", function (e) {
        t.context.triggerEvent("paste", e);
      }), this.$editable.html(Nt.html(this.$note) || Nt.emptyPara), this.$editable.on(z.inputEventName, C.debounce(function () {
        t.context.triggerEvent("change", t.$editable.html());
      }, 100)), this.$editor.on("focusin", function (e) {
        t.context.triggerEvent("focusin", e);
      }).on("focusout", function (e) {
        t.context.triggerEvent("focusout", e);
      }), this.options.airMode || (this.options.width && this.$editor.outerWidth(this.options.width), this.options.height && this.$editable.outerHeight(this.options.height), this.options.maxHeight && this.$editable.css("max-height", this.options.maxHeight), this.options.minHeight && this.$editable.css("min-height", this.options.minHeight)), this.history.recordUndo();
    }, e.prototype.destroy = function () {
      this.$editable.off();
    }, e.prototype.handleKeyMap = function (t) {
      var e = this.options.keyMap[z.isMac ? "mac" : "pc"],
          o = [];t.metaKey && o.push("CMD"), t.ctrlKey && !t.altKey && o.push("CTRL"), t.shiftKey && o.push("SHIFT");var n = At.nameFromCode[t.keyCode];n && o.push(n);var i = e[o.join("+")];i ? !1 !== this.context.invoke(i) && t.preventDefault() : At.isEdit(t.keyCode) && this.afterCommand();
    }, e.prototype.preventDefaultEditableShortCuts = function (t) {
      (t.ctrlKey || t.metaKey) && N.contains([66, 73, 85], t.keyCode) && t.preventDefault();
    }, e.prototype.isLimited = function (t, e) {
      return t = t || 0, (void 0 === e || !(At.isMove(e.keyCode) || e.ctrlKey || e.metaKey || N.contains([At.code.BACKSPACE, At.code.DELETE], e.keyCode))) && this.options.maxTextLength > 0 && this.$editable.text().length + t >= this.options.maxTextLength;
    }, e.prototype.createRange = function () {
      return this.focus(), Ht.create(this.editable);
    }, e.prototype.saveRange = function (t) {
      this.lastRange = this.createRange(), t && this.lastRange.collapse().select();
    }, e.prototype.restoreRange = function () {
      this.lastRange && (this.lastRange.select(), this.focus());
    }, e.prototype.saveTarget = function (t) {
      this.$editable.data("target", t);
    }, e.prototype.clearTarget = function () {
      this.$editable.removeData("target");
    }, e.prototype.restoreTarget = function () {
      return this.$editable.data("target");
    }, e.prototype.currentStyle = function () {
      var t = Ht.create();return t && (t = t.normalize()), t ? this.style.current(t) : this.style.fromNode(this.$editable);
    }, e.prototype.styleFromNode = function (t) {
      return this.style.fromNode(t);
    }, e.prototype.undo = function () {
      this.context.triggerEvent("before.command", this.$editable.html()), this.history.undo(), this.context.triggerEvent("change", this.$editable.html());
    }, e.prototype.redo = function () {
      this.context.triggerEvent("before.command", this.$editable.html()), this.history.redo(), this.context.triggerEvent("change", this.$editable.html());
    }, e.prototype.beforeCommand = function () {
      this.context.triggerEvent("before.command", this.$editable.html()), this.focus();
    }, e.prototype.afterCommand = function (t) {
      this.normalizeContent(), this.history.recordUndo(), t || this.context.triggerEvent("change", this.$editable.html());
    }, e.prototype.tab = function () {
      var t = this.createRange();if (t.isCollapsed() && t.isOnCell()) this.table.tab(t);else {
        if (0 === this.options.tabSize) return !1;this.isLimited(this.options.tabSize) || (this.beforeCommand(), this.typing.insertTab(t, this.options.tabSize), this.afterCommand());
      }
    }, e.prototype.untab = function () {
      var t = this.createRange();if (t.isCollapsed() && t.isOnCell()) this.table.tab(t, !0);else if (0 === this.options.tabSize) return !1;
    }, e.prototype.wrapCommand = function (t) {
      var e = this;return function () {
        e.beforeCommand(), t.apply(e, arguments), e.afterCommand();
      };
    }, e.prototype.insertImage = function (e, o) {
      var n,
          i = this;return (n = e, t.Deferred(function (e) {
        var o = t("<img>");o.one("load", function () {
          o.off("error abort"), e.resolve(o);
        }).one("error abort", function () {
          o.off("load").detach(), e.reject(o);
        }).css({ display: "none" }).appendTo(document.body).attr("src", n);
      }).promise()).then(function (t) {
        i.beforeCommand(), "function" == typeof o ? o(t) : ("string" == typeof o && t.attr("data-filename", o), t.css("width", Math.min(i.$editable.width(), t.width()))), t.show(), Ht.create(i.editable).insertNode(t[0]), Ht.createFromNodeAfter(t[0]).select(), i.afterCommand();
      }).fail(function (t) {
        i.context.triggerEvent("image.upload.error", t);
      });
    }, e.prototype.insertImages = function (e) {
      var o = this;t.each(e, function (e, n) {
        var i,
            r = n.name;o.options.maximumImageFileSize && o.options.maximumImageFileSize < n.size ? o.context.triggerEvent("image.upload.error", o.lang.image.maximumFileSizeError) : (i = n, t.Deferred(function (e) {
          t.extend(new FileReader(), { onload: function onload(t) {
              var o = t.target.result;e.resolve(o);
            }, onerror: function onerror(t) {
              e.reject(t);
            } }).readAsDataURL(i);
        }).promise()).then(function (t) {
          return o.insertImage(t, r);
        }).fail(function () {
          o.context.triggerEvent("image.upload.error");
        });
      });
    }, e.prototype.insertImagesOrCallback = function (t) {
      this.options.callbacks.onImageUpload ? this.context.triggerEvent("image.upload", t) : this.insertImages(t);
    }, e.prototype.getSelectedText = function () {
      var t = this.createRange();return t.isOnAnchor() && (t = Ht.createFromNode(Nt.ancestor(t.sc, Nt.isAnchor))), t.toString();
    }, e.prototype.onFormatBlock = function (e, o) {
      if (e = z.isMSIE ? "<" + e + ">" : e, document.execCommand("FormatBlock", !1, e), o && o.length) {
        var n = o[0].className || "";if (n) {
          var i = this.createRange();t([i.sc, i.ec]).closest(e).addClass(n);
        }
      }
    }, e.prototype.formatPara = function () {
      this.formatBlock("P");
    }, e.prototype.fontStyling = function (e, o) {
      var n = this.createRange();if (n) {
        var i = this.style.styleNodes(n);if (t(i).css(e, o), n.isCollapsed()) {
          var r = N.head(i);r && !Nt.nodeLength(r) && (r.innerHTML = Nt.ZERO_WIDTH_NBSP_CHAR, Ht.createFromNodeAfter(r.firstChild).select(), this.$editable.data("bogus", r));
        }
      }
    }, e.prototype.unlink = function () {
      var t = this.createRange();if (t.isOnAnchor()) {
        var e = Nt.ancestor(t.sc, Nt.isAnchor);(t = Ht.createFromNode(e)).select(), this.beforeCommand(), document.execCommand("unlink"), this.afterCommand();
      }
    }, e.prototype.getLinkInfo = function () {
      var e = this.createRange().expand(Nt.isAnchor),
          o = t(N.head(e.nodes(Nt.isAnchor))),
          n = { range: e, text: e.toString(), url: o.length ? o.attr("href") : "" };return o.length && (n.isNewWindow = "_blank" === o.attr("target")), n;
    }, e.prototype.addRow = function (t) {
      var e = this.createRange(this.$editable);e.isCollapsed() && e.isOnCell() && (this.beforeCommand(), this.table.addRow(e, t), this.afterCommand());
    }, e.prototype.addCol = function (t) {
      var e = this.createRange(this.$editable);e.isCollapsed() && e.isOnCell() && (this.beforeCommand(), this.table.addCol(e, t), this.afterCommand());
    }, e.prototype.deleteRow = function () {
      var t = this.createRange(this.$editable);t.isCollapsed() && t.isOnCell() && (this.beforeCommand(), this.table.deleteRow(t), this.afterCommand());
    }, e.prototype.deleteCol = function () {
      var t = this.createRange(this.$editable);t.isCollapsed() && t.isOnCell() && (this.beforeCommand(), this.table.deleteCol(t), this.afterCommand());
    }, e.prototype.deleteTable = function () {
      var t = this.createRange(this.$editable);t.isCollapsed() && t.isOnCell() && (this.beforeCommand(), this.table.deleteTable(t), this.afterCommand());
    }, e.prototype.resizeTo = function (t, e, o) {
      var n;if (o) {
        var i = t.y / t.x,
            r = e.data("ratio");n = { width: r > i ? t.x : t.y / r, height: r > i ? t.x * r : t.y };
      } else n = { width: t.x, height: t.y };e.css(n);
    }, e.prototype.hasFocus = function () {
      return this.$editable.is(":focus");
    }, e.prototype.focus = function () {
      this.hasFocus() || this.$editable.focus();
    }, e.prototype.isEmpty = function () {
      return Nt.isEmpty(this.$editable[0]) || Nt.emptyPara === this.$editable.html();
    }, e.prototype.empty = function () {
      this.context.invoke("code", Nt.emptyPara);
    }, e.prototype.normalizeContent = function () {
      this.$editable[0].normalize();
    }, e;
  }(),
      qt = function () {
    function t(t) {
      this.context = t, this.$editable = t.layoutInfo.editable;
    }return t.prototype.initialize = function () {
      this.$editable.on("paste", this.pasteByEvent.bind(this));
    }, t.prototype.pasteByEvent = function (t) {
      var e = t.originalEvent.clipboardData;if (e && e.items && e.items.length) {
        var o = N.head(e.items);"file" === o.kind && -1 !== o.type.indexOf("image/") && this.context.invoke("editor.insertImagesOrCallback", [o.getAsFile()]), this.context.invoke("editor.afterCommand");
      }
    }, t;
  }(),
      Kt = function () {
    function e(e) {
      this.context = e, this.$eventListener = t(document), this.$editor = e.layoutInfo.editor, this.$editable = e.layoutInfo.editable, this.options = e.options, this.lang = this.options.langInfo, this.documentEventHandlers = {}, this.$dropzone = t(['<div class="note-dropzone">', '  <div class="note-dropzone-message"/>', "</div>"].join("")).prependTo(this.$editor);
    }return e.prototype.initialize = function () {
      this.options.disableDragAndDrop ? (this.documentEventHandlers.onDrop = function (t) {
        t.preventDefault();
      }, this.$eventListener = this.$dropzone, this.$eventListener.on("drop", this.documentEventHandlers.onDrop)) : this.attachDragAndDropEvent();
    }, e.prototype.attachDragAndDropEvent = function () {
      var e = this,
          o = t(),
          n = this.$dropzone.find(".note-dropzone-message");this.documentEventHandlers.onDragenter = function (t) {
        var i = e.context.invoke("codeview.isActivated"),
            r = e.$editor.width() > 0 && e.$editor.height() > 0;i || o.length || !r || (e.$editor.addClass("dragover"), e.$dropzone.width(e.$editor.width()), e.$dropzone.height(e.$editor.height()), n.text(e.lang.image.dragImageHere)), o = o.add(t.target);
      }, this.documentEventHandlers.onDragleave = function (t) {
        (o = o.not(t.target)).length || e.$editor.removeClass("dragover");
      }, this.documentEventHandlers.onDrop = function () {
        o = t(), e.$editor.removeClass("dragover");
      }, this.$eventListener.on("dragenter", this.documentEventHandlers.onDragenter).on("dragleave", this.documentEventHandlers.onDragleave).on("drop", this.documentEventHandlers.onDrop), this.$dropzone.on("dragenter", function () {
        e.$dropzone.addClass("hover"), n.text(e.lang.image.dropImage);
      }).on("dragleave", function () {
        e.$dropzone.removeClass("hover"), n.text(e.lang.image.dragImageHere);
      }), this.$dropzone.on("drop", function (o) {
        var n = o.originalEvent.dataTransfer;o.preventDefault(), n && n.files && n.files.length ? (e.$editable.focus(), e.context.invoke("editor.insertImagesOrCallback", n.files)) : t.each(n.types, function (o, i) {
          var r = n.getData(i);i.toLowerCase().indexOf("text") > -1 ? e.context.invoke("editor.pasteHTML", r) : t(r).each(function (t, o) {
            e.context.invoke("editor.insertNode", o);
          });
        });
      }).on("dragover", !1);
    }, e.prototype.destroy = function () {
      var t = this;Object.keys(this.documentEventHandlers).forEach(function (e) {
        t.$eventListener.off(e.substr(2).toLowerCase(), t.documentEventHandlers[e]);
      }), this.documentEventHandlers = {};
    }, e;
  }();z.hasCodeMirror && (z.isSupportAmd ? require(["codemirror"], function (t) {
    Ot = t;
  }) : Ot = window.CodeMirror);var Vt = function () {
    function t(t) {
      this.context = t, this.$editor = t.layoutInfo.editor, this.$editable = t.layoutInfo.editable, this.$codable = t.layoutInfo.codable, this.options = t.options;
    }return t.prototype.sync = function () {
      this.isActivated() && z.hasCodeMirror && this.$codable.data("cmEditor").save();
    }, t.prototype.isActivated = function () {
      return this.$editor.hasClass("codeview");
    }, t.prototype.toggle = function () {
      this.isActivated() ? this.deactivate() : this.activate(), this.context.triggerEvent("codeview.toggled");
    }, t.prototype.activate = function () {
      var t = this;if (this.$codable.val(Nt.html(this.$editable, this.options.prettifyHtml)), this.$codable.height(this.$editable.height()), this.context.invoke("toolbar.updateCodeview", !0), this.$editor.addClass("codeview"), this.$codable.focus(), z.hasCodeMirror) {
        var e = Ot.fromTextArea(this.$codable[0], this.options.codemirror);if (this.options.codemirror.tern) {
          var o = new Ot.TernServer(this.options.codemirror.tern);e.ternServer = o, e.on("cursorActivity", function (t) {
            o.updateArgHints(t);
          });
        }e.on("blur", function (o) {
          t.context.triggerEvent("blur.codeview", e.getValue(), o);
        }), e.setSize(null, this.$editable.outerHeight()), this.$codable.data("cmEditor", e);
      } else this.$codable.on("blur", function (e) {
        t.context.triggerEvent("blur.codeview", t.$codable.val(), e);
      });
    }, t.prototype.deactivate = function () {
      if (z.hasCodeMirror) {
        var t = this.$codable.data("cmEditor");this.$codable.val(t.getValue()), t.toTextArea();
      }var e = Nt.value(this.$codable, this.options.prettifyHtml) || Nt.emptyPara,
          o = this.$editable.html() !== e;this.$editable.html(e), this.$editable.height(this.options.height ? this.$codable.height() : "auto"), this.$editor.removeClass("codeview"), o && this.context.triggerEvent("change", this.$editable.html(), this.$editable), this.$editable.focus(), this.context.invoke("toolbar.updateCodeview", !1);
    }, t.prototype.destroy = function () {
      this.isActivated() && this.deactivate();
    }, t;
  }(),
      Wt = function () {
    function e(e) {
      this.$document = t(document), this.$statusbar = e.layoutInfo.statusbar, this.$editable = e.layoutInfo.editable, this.options = e.options;
    }return e.prototype.initialize = function () {
      var t = this;this.options.airMode || this.options.disableResizeEditor ? this.destroy() : this.$statusbar.on("mousedown", function (e) {
        e.preventDefault(), e.stopPropagation();var o = t.$editable.offset().top - t.$document.scrollTop(),
            n = function n(e) {
          var n = e.clientY - (o + 24);n = t.options.minheight > 0 ? Math.max(n, t.options.minheight) : n, n = t.options.maxHeight > 0 ? Math.min(n, t.options.maxHeight) : n, t.$editable.height(n);
        };t.$document.on("mousemove", n).one("mouseup", function () {
          t.$document.off("mousemove", n);
        });
      });
    }, e.prototype.destroy = function () {
      this.$statusbar.off(), this.$statusbar.addClass("locked");
    }, e;
  }(),
      Gt = function () {
    function e(e) {
      var o = this;this.context = e, this.$editor = e.layoutInfo.editor, this.$toolbar = e.layoutInfo.toolbar, this.$editable = e.layoutInfo.editable, this.$codable = e.layoutInfo.codable, this.$window = t(window), this.$scrollbar = t("html, body"), this.onResize = function () {
        o.resizeTo({ h: o.$window.height() - o.$toolbar.outerHeight() });
      };
    }return e.prototype.resizeTo = function (t) {
      this.$editable.css("height", t.h), this.$codable.css("height", t.h), this.$codable.data("cmeditor") && this.$codable.data("cmeditor").setsize(null, t.h);
    }, e.prototype.toggle = function () {
      this.$editor.toggleClass("fullscreen"), this.isFullscreen() ? (this.$editable.data("orgHeight", this.$editable.css("height")), this.$window.on("resize", this.onResize).trigger("resize"), this.$scrollbar.css("overflow", "hidden")) : (this.$window.off("resize", this.onResize), this.resizeTo({ h: this.$editable.data("orgHeight") }), this.$scrollbar.css("overflow", "visible")), this.context.invoke("toolbar.updateFullscreen", this.isFullscreen());
    }, e.prototype.isFullscreen = function () {
      return this.$editor.hasClass("fullscreen");
    }, e;
  }(),
      _t = function () {
    function e(e) {
      var o = this;this.context = e, this.$document = t(document), this.$editingArea = e.layoutInfo.editingArea, this.options = e.options, this.lang = this.options.langInfo, this.events = { "summernote.mousedown": function summernoteMousedown(t, e) {
          o.update(e.target) && e.preventDefault();
        }, "summernote.keyup summernote.scroll summernote.change summernote.dialog.shown": function summernoteKeyupSummernoteScrollSummernoteChangeSummernoteDialogShown() {
          o.update();
        }, "summernote.disable": function summernoteDisable() {
          o.hide();
        }, "summernote.codeview.toggled": function summernoteCodeviewToggled() {
          o.update();
        } };
    }return e.prototype.initialize = function () {
      var e = this;this.$handle = t(['<div class="note-handle">', '<div class="note-control-selection">', '<div class="note-control-selection-bg"></div>', '<div class="note-control-holder note-control-nw"></div>', '<div class="note-control-holder note-control-ne"></div>', '<div class="note-control-holder note-control-sw"></div>', '<div class="', this.options.disableResizeImage ? "note-control-holder" : "note-control-sizing", ' note-control-se"></div>', this.options.disableResizeImage ? "" : '<div class="note-control-selection-info"></div>', "</div>", "</div>"].join("")).prependTo(this.$editingArea), this.$handle.on("mousedown", function (t) {
        if (Nt.isControlSizing(t.target)) {
          t.preventDefault(), t.stopPropagation();var o = e.$handle.find(".note-control-selection").data("target"),
              n = o.offset(),
              i = e.$document.scrollTop(),
              r = function r(t) {
            e.context.invoke("editor.resizeTo", { x: t.clientX - n.left, y: t.clientY - (n.top - i) }, o, !t.shiftKey), e.update(o[0]);
          };e.$document.on("mousemove", r).one("mouseup", function (t) {
            t.preventDefault(), e.$document.off("mousemove", r), e.context.invoke("editor.afterCommand");
          }), o.data("ratio") || o.data("ratio", o.height() / o.width());
        }
      }), this.$handle.on("wheel", function (t) {
        t.preventDefault(), e.update();
      });
    }, e.prototype.destroy = function () {
      this.$handle.remove();
    }, e.prototype.update = function (e) {
      if (this.context.isDisabled()) return !1;var o = Nt.isImg(e),
          n = this.$handle.find(".note-control-selection");if (this.context.invoke("imagePopover.update", e), o) {
        var i = t(e),
            r = i.position(),
            s = { left: r.left + parseInt(i.css("marginLeft"), 10), top: r.top + parseInt(i.css("marginTop"), 10) },
            a = { w: i.outerWidth(!1), h: i.outerHeight(!1) };n.css({ display: "block", left: s.left, top: s.top, width: a.w, height: a.h }).data("target", i);var l = new Image();l.src = i.attr("src");var c = a.w + "x" + a.h + " (" + this.lang.image.original + ": " + l.width + "x" + l.height + ")";n.find(".note-control-selection-info").text(c), this.context.invoke("editor.saveTarget", e);
      } else this.hide();return o;
    }, e.prototype.hide = function () {
      this.context.invoke("editor.clearTarget"), this.$handle.children().hide();
    }, e;
  }(),
      Zt = /^([A-Za-z][A-Za-z0-9+-.]*\:[\/\/]?|mailto:[A-Z0-9._%+-]+@)?(www\.)?(.+)$/i,
      Yt = function () {
    function e(t) {
      var e = this;this.context = t, this.events = { "summernote.keyup": function summernoteKeyup(t, o) {
          o.isDefaultPrevented() || e.handleKeyup(o);
        }, "summernote.keydown": function summernoteKeydown(t, o) {
          e.handleKeydown(o);
        } };
    }return e.prototype.initialize = function () {
      this.lastWordRange = null;
    }, e.prototype.destroy = function () {
      this.lastWordRange = null;
    }, e.prototype.replace = function () {
      if (this.lastWordRange) {
        var e = this.lastWordRange.toString(),
            o = e.match(Zt);if (o && (o[1] || o[2])) {
          var n = o[1] ? e : "http://" + e,
              i = t("<a />").html(e).attr("href", n)[0];this.lastWordRange.insertNode(i), this.lastWordRange = null, this.context.invoke("editor.focus");
        }
      }
    }, e.prototype.handleKeydown = function (t) {
      if (N.contains([At.code.ENTER, At.code.SPACE], t.keyCode)) {
        var e = this.context.invoke("editor.createRange").getWordRange();this.lastWordRange = e;
      }
    }, e.prototype.handleKeyup = function (t) {
      N.contains([At.code.ENTER, At.code.SPACE], t.keyCode) && this.replace();
    }, e;
  }(),
      Qt = function () {
    function t(t) {
      var e = this;this.$note = t.layoutInfo.note, this.events = { "summernote.change": function summernoteChange() {
          e.$note.val(t.invoke("code"));
        } };
    }return t.prototype.shouldInitialize = function () {
      return Nt.isTextarea(this.$note[0]);
    }, t;
  }(),
      Jt = function () {
    function e(t) {
      var e = this;this.context = t, this.$editingArea = t.layoutInfo.editingArea, this.options = t.options, this.events = { "summernote.init summernote.change": function summernoteInitSummernoteChange() {
          e.update();
        }, "summernote.codeview.toggled": function summernoteCodeviewToggled() {
          e.update();
        } };
    }return e.prototype.shouldInitialize = function () {
      return !!this.options.placeholder;
    }, e.prototype.initialize = function () {
      var e = this;this.$placeholder = t('<div class="note-placeholder">'), this.$placeholder.on("click", function () {
        e.context.invoke("focus");
      }).text(this.options.placeholder).prependTo(this.$editingArea), this.update();
    }, e.prototype.destroy = function () {
      this.$placeholder.remove();
    }, e.prototype.update = function () {
      var t = !this.context.invoke("codeview.isActivated") && this.context.invoke("editor.isEmpty");this.$placeholder.toggle(t);
    }, e;
  }(),
      Xt = function () {
    function e(e) {
      this.ui = t.summernote.ui, this.context = e, this.$toolbar = e.layoutInfo.toolbar, this.options = e.options, this.lang = this.options.langInfo, this.invertedKeyMap = C.invertObject(this.options.keyMap[z.isMac ? "mac" : "pc"]);
    }return e.prototype.representShortcut = function (t) {
      var e = this.invertedKeyMap[t];return this.options.shortcuts && e ? (z.isMac && (e = e.replace("CMD", "⌘").replace("SHIFT", "⇧")), " (" + (e = e.replace("BACKSLASH", "\\").replace("SLASH", "/").replace("LEFTBRACKET", "[").replace("RIGHTBRACKET", "]")) + ")") : "";
    }, e.prototype.button = function (t) {
      return !this.options.tooltip && t.tooltip && delete t.tooltip, t.container = this.options.container, this.ui.button(t);
    }, e.prototype.initialize = function () {
      this.addToolbarButtons(), this.addImagePopoverButtons(), this.addLinkPopoverButtons(), this.addTablePopoverButtons(), this.fontInstalledMap = {};
    }, e.prototype.destroy = function () {
      delete this.fontInstalledMap;
    }, e.prototype.isFontInstalled = function (t) {
      return this.fontInstalledMap.hasOwnProperty(t) || (this.fontInstalledMap[t] = z.isFontInstalled(t) || N.contains(this.options.fontNamesIgnoreCheck, t)), this.fontInstalledMap[t];
    }, e.prototype.isFontDeservedToAdd = function (e) {
      return "" !== (e = e.toLowerCase()) && this.isFontInstalled(e) && -1 === t.inArray(e, ["sans-serif", "serif", "monospace", "cursive", "fantasy"]);
    }, e.prototype.addToolbarButtons = function () {
      var e = this;this.context.memo("button.style", function () {
        return e.ui.buttonGroup([e.button({ className: "dropdown-toggle", contents: e.ui.dropdownButtonContents(e.ui.icon(e.options.icons.magic), e.options), tooltip: e.lang.style.style, data: { toggle: "dropdown" } }), e.ui.dropdown({ className: "dropdown-style", items: e.options.styleTags, title: e.lang.style.style, template: function template(t) {
            "string" == typeof t && (t = { tag: t, title: e.lang.style.hasOwnProperty(t) ? e.lang.style[t] : t });var o = t.tag,
                n = t.title;return "<" + o + (t.style ? ' style="' + t.style + '" ' : "") + (t.className ? ' class="' + t.className + '"' : "") + ">" + n + "</" + o + ">";
          }, click: e.context.createInvokeHandler("editor.formatBlock") })]).render();
      });for (var o = function o(t, _o2) {
        var i = n.options.styleTags[t];n.context.memo("button.style." + i, function () {
          return e.button({ className: "note-btn-style-" + i, contents: '<div data-value="' + i + '">' + i.toUpperCase() + "</div>", tooltip: e.lang.style[i], click: e.context.createInvokeHandler("editor.formatBlock") }).render();
        });
      }, n = this, i = 0, r = this.options.styleTags.length; i < r; i++) {
        o(i);
      }this.context.memo("button.bold", function () {
        return e.button({ className: "note-btn-bold", contents: e.ui.icon(e.options.icons.bold), tooltip: e.lang.font.bold + e.representShortcut("bold"), click: e.context.createInvokeHandlerAndUpdateState("editor.bold") }).render();
      }), this.context.memo("button.italic", function () {
        return e.button({ className: "note-btn-italic", contents: e.ui.icon(e.options.icons.italic), tooltip: e.lang.font.italic + e.representShortcut("italic"), click: e.context.createInvokeHandlerAndUpdateState("editor.italic") }).render();
      }), this.context.memo("button.underline", function () {
        return e.button({ className: "note-btn-underline", contents: e.ui.icon(e.options.icons.underline), tooltip: e.lang.font.underline + e.representShortcut("underline"), click: e.context.createInvokeHandlerAndUpdateState("editor.underline") }).render();
      }), this.context.memo("button.clear", function () {
        return e.button({ contents: e.ui.icon(e.options.icons.eraser), tooltip: e.lang.font.clear + e.representShortcut("removeFormat"), click: e.context.createInvokeHandler("editor.removeFormat") }).render();
      }), this.context.memo("button.strikethrough", function () {
        return e.button({ className: "note-btn-strikethrough", contents: e.ui.icon(e.options.icons.strikethrough), tooltip: e.lang.font.strikethrough + e.representShortcut("strikethrough"), click: e.context.createInvokeHandlerAndUpdateState("editor.strikethrough") }).render();
      }), this.context.memo("button.superscript", function () {
        return e.button({ className: "note-btn-superscript", contents: e.ui.icon(e.options.icons.superscript), tooltip: e.lang.font.superscript, click: e.context.createInvokeHandlerAndUpdateState("editor.superscript") }).render();
      }), this.context.memo("button.subscript", function () {
        return e.button({ className: "note-btn-subscript", contents: e.ui.icon(e.options.icons.subscript), tooltip: e.lang.font.subscript, click: e.context.createInvokeHandlerAndUpdateState("editor.subscript") }).render();
      }), this.context.memo("button.fontname", function () {
        var o = e.context.invoke("editor.currentStyle");return t.each(o["font-family"].split(","), function (o, n) {
          n = n.trim().replace(/['"]+/g, ""), e.isFontDeservedToAdd(n) && -1 === t.inArray(n, e.options.fontNames) && e.options.fontNames.push(n);
        }), e.ui.buttonGroup([e.button({ className: "dropdown-toggle", contents: e.ui.dropdownButtonContents('<span class="note-current-fontname"/>', e.options), tooltip: e.lang.font.name, data: { toggle: "dropdown" } }), e.ui.dropdownCheck({ className: "dropdown-fontname", checkClassName: e.options.icons.menuCheck, items: e.options.fontNames.filter(e.isFontInstalled.bind(e)), title: e.lang.font.name, template: function template(t) {
            return "<span style=\"font-family: '" + t + "'\">" + t + "</span>";
          }, click: e.context.createInvokeHandlerAndUpdateState("editor.fontName") })]).render();
      }), this.context.memo("button.fontsize", function () {
        return e.ui.buttonGroup([e.button({ className: "dropdown-toggle", contents: e.ui.dropdownButtonContents('<span class="note-current-fontsize"/>', e.options), tooltip: e.lang.font.size, data: { toggle: "dropdown" } }), e.ui.dropdownCheck({ className: "dropdown-fontsize", checkClassName: e.options.icons.menuCheck, items: e.options.fontSizes, title: e.lang.font.size, click: e.context.createInvokeHandlerAndUpdateState("editor.fontSize") })]).render();
      }), this.context.memo("button.color", function () {
        return e.ui.buttonGroup({ className: "note-color", children: [e.button({ className: "note-current-color-button", contents: e.ui.icon(e.options.icons.font + " note-recent-color"), tooltip: e.lang.color.recent, click: function click(o) {
              var n = t(o.currentTarget);e.context.invoke("editor.color", { backColor: n.attr("data-backColor"), foreColor: n.attr("data-foreColor") });
            }, callback: function callback(t) {
              t.find(".note-recent-color").css("background-color", "#FFFF00"), t.attr("data-backColor", "#FFFF00");
            } }), e.button({ className: "dropdown-toggle", contents: e.ui.dropdownButtonContents("", e.options), tooltip: e.lang.color.more, data: { toggle: "dropdown" } }), e.ui.dropdown({ items: ['<div class="note-palette">', '  <div class="note-palette-title">' + e.lang.color.background + "</div>", "  <div>", '    <button type="button" class="note-color-reset btn btn-light" data-event="backColor" data-value="inherit">', e.lang.color.transparent, "    </button>", "  </div>", '  <div class="note-holder" data-event="backColor"/>', "</div>", '<div class="note-palette">', '  <div class="note-palette-title">' + e.lang.color.foreground + "</div>", "  <div>", '    <button type="button" class="note-color-reset btn btn-light" data-event="removeFormat" data-value="foreColor">', e.lang.color.resetToDefault, "    </button>", "  </div>", '  <div class="note-holder" data-event="foreColor"/>', "</div>"].join(""), callback: function callback(o) {
              o.find(".note-holder").each(function (o, n) {
                var i = t(n);i.append(e.ui.palette({ colors: e.options.colors, colorsName: e.options.colorsName, eventName: i.data("event"), container: e.options.container, tooltip: e.options.tooltip }).render());
              });
            }, click: function click(o) {
              var n = t(o.target),
                  i = n.data("event"),
                  r = n.data("value");if (i && r) {
                var s = "backColor" === i ? "background-color" : "color",
                    a = n.closest(".note-color").find(".note-recent-color"),
                    l = n.closest(".note-color").find(".note-current-color-button");a.css(s, r), l.attr("data-" + i, r), e.context.invoke("editor." + i, r);
              }
            } })] }).render();
      }), this.context.memo("button.ul", function () {
        return e.button({ contents: e.ui.icon(e.options.icons.unorderedlist), tooltip: e.lang.lists.unordered + e.representShortcut("insertUnorderedList"), click: e.context.createInvokeHandler("editor.insertUnorderedList") }).render();
      }), this.context.memo("button.ol", function () {
        return e.button({ contents: e.ui.icon(e.options.icons.orderedlist), tooltip: e.lang.lists.ordered + e.representShortcut("insertOrderedList"), click: e.context.createInvokeHandler("editor.insertOrderedList") }).render();
      });var s = this.button({ contents: this.ui.icon(this.options.icons.alignLeft), tooltip: this.lang.paragraph.left + this.representShortcut("justifyLeft"), click: this.context.createInvokeHandler("editor.justifyLeft") }),
          a = this.button({ contents: this.ui.icon(this.options.icons.alignCenter), tooltip: this.lang.paragraph.center + this.representShortcut("justifyCenter"), click: this.context.createInvokeHandler("editor.justifyCenter") }),
          l = this.button({ contents: this.ui.icon(this.options.icons.alignRight), tooltip: this.lang.paragraph.right + this.representShortcut("justifyRight"), click: this.context.createInvokeHandler("editor.justifyRight") }),
          c = this.button({ contents: this.ui.icon(this.options.icons.alignJustify), tooltip: this.lang.paragraph.justify + this.representShortcut("justifyFull"), click: this.context.createInvokeHandler("editor.justifyFull") }),
          d = this.button({ contents: this.ui.icon(this.options.icons.outdent), tooltip: this.lang.paragraph.outdent + this.representShortcut("outdent"), click: this.context.createInvokeHandler("editor.outdent") }),
          u = this.button({ contents: this.ui.icon(this.options.icons.indent), tooltip: this.lang.paragraph.indent + this.representShortcut("indent"), click: this.context.createInvokeHandler("editor.indent") });this.context.memo("button.justifyLeft", C.invoke(s, "render")), this.context.memo("button.justifyCenter", C.invoke(a, "render")), this.context.memo("button.justifyRight", C.invoke(l, "render")), this.context.memo("button.justifyFull", C.invoke(c, "render")), this.context.memo("button.outdent", C.invoke(d, "render")), this.context.memo("button.indent", C.invoke(u, "render")), this.context.memo("button.paragraph", function () {
        return e.ui.buttonGroup([e.button({ className: "dropdown-toggle", contents: e.ui.dropdownButtonContents(e.ui.icon(e.options.icons.alignLeft), e.options), tooltip: e.lang.paragraph.paragraph, data: { toggle: "dropdown" } }), e.ui.dropdown([e.ui.buttonGroup({ className: "note-align", children: [s, a, l, c] }), e.ui.buttonGroup({ className: "note-list", children: [d, u] })])]).render();
      }), this.context.memo("button.height", function () {
        return e.ui.buttonGroup([e.button({ className: "dropdown-toggle", contents: e.ui.dropdownButtonContents(e.ui.icon(e.options.icons.textHeight), e.options), tooltip: e.lang.font.height, data: { toggle: "dropdown" } }), e.ui.dropdownCheck({ items: e.options.lineHeights, checkClassName: e.options.icons.menuCheck, className: "dropdown-line-height", title: e.lang.font.height, click: e.context.createInvokeHandler("editor.lineHeight") })]).render();
      }), this.context.memo("button.table", function () {
        return e.ui.buttonGroup([e.button({ className: "dropdown-toggle", contents: e.ui.dropdownButtonContents(e.ui.icon(e.options.icons.table), e.options), tooltip: e.lang.table.table, data: { toggle: "dropdown" } }), e.ui.dropdown({ title: e.lang.table.table, className: "note-table", items: ['<div class="note-dimension-picker">', '  <div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"/>', '  <div class="note-dimension-picker-highlighted"/>', '  <div class="note-dimension-picker-unhighlighted"/>', "</div>", '<div class="note-dimension-display">1 x 1</div>'].join("") })], { callback: function callback(t) {
            t.find(".note-dimension-picker-mousecatcher").css({ width: e.options.insertTableMaxSize.col + "em", height: e.options.insertTableMaxSize.row + "em" }).mousedown(e.context.createInvokeHandler("editor.insertTable")).on("mousemove", e.tableMoveHandler.bind(e));
          } }).render();
      }), this.context.memo("button.link", function () {
        return e.button({ contents: e.ui.icon(e.options.icons.link), tooltip: e.lang.link.link + e.representShortcut("linkDialog.show"), click: e.context.createInvokeHandler("linkDialog.show") }).render();
      }), this.context.memo("button.picture", function () {
        return e.button({ contents: e.ui.icon(e.options.icons.picture), tooltip: e.lang.image.image, click: e.context.createInvokeHandler("imageDialog.show") }).render();
      }), this.context.memo("button.video", function () {
        return e.button({ contents: e.ui.icon(e.options.icons.video), tooltip: e.lang.video.video, click: e.context.createInvokeHandler("videoDialog.show") }).render();
      }), this.context.memo("button.hr", function () {
        return e.button({ contents: e.ui.icon(e.options.icons.minus), tooltip: e.lang.hr.insert + e.representShortcut("insertHorizontalRule"), click: e.context.createInvokeHandler("editor.insertHorizontalRule") }).render();
      }), this.context.memo("button.fullscreen", function () {
        return e.button({ className: "btn-fullscreen", contents: e.ui.icon(e.options.icons.arrowsAlt), tooltip: e.lang.options.fullscreen, click: e.context.createInvokeHandler("fullscreen.toggle") }).render();
      }), this.context.memo("button.codeview", function () {
        return e.button({ className: "btn-codeview", contents: e.ui.icon(e.options.icons.code), tooltip: e.lang.options.codeview, click: e.context.createInvokeHandler("codeview.toggle") }).render();
      }), this.context.memo("button.redo", function () {
        return e.button({ contents: e.ui.icon(e.options.icons.redo), tooltip: e.lang.history.redo + e.representShortcut("redo"), click: e.context.createInvokeHandler("editor.redo") }).render();
      }), this.context.memo("button.undo", function () {
        return e.button({ contents: e.ui.icon(e.options.icons.undo), tooltip: e.lang.history.undo + e.representShortcut("undo"), click: e.context.createInvokeHandler("editor.undo") }).render();
      }), this.context.memo("button.help", function () {
        return e.button({ contents: e.ui.icon(e.options.icons.question), tooltip: e.lang.options.help, click: e.context.createInvokeHandler("helpDialog.show") }).render();
      });
    }, e.prototype.addImagePopoverButtons = function () {
      var t = this;this.context.memo("button.imageSize100", function () {
        return t.button({ contents: '<span class="note-fontsize-10">100%</span>', tooltip: t.lang.image.resizeFull, click: t.context.createInvokeHandler("editor.resize", "1") }).render();
      }), this.context.memo("button.imageSize50", function () {
        return t.button({ contents: '<span class="note-fontsize-10">50%</span>', tooltip: t.lang.image.resizeHalf, click: t.context.createInvokeHandler("editor.resize", "0.5") }).render();
      }), this.context.memo("button.imageSize25", function () {
        return t.button({ contents: '<span class="note-fontsize-10">25%</span>', tooltip: t.lang.image.resizeQuarter, click: t.context.createInvokeHandler("editor.resize", "0.25") }).render();
      }), this.context.memo("button.floatLeft", function () {
        return t.button({ contents: t.ui.icon(t.options.icons.alignLeft), tooltip: t.lang.image.floatLeft, click: t.context.createInvokeHandler("editor.floatMe", "left") }).render();
      }), this.context.memo("button.floatRight", function () {
        return t.button({ contents: t.ui.icon(t.options.icons.alignRight), tooltip: t.lang.image.floatRight, click: t.context.createInvokeHandler("editor.floatMe", "right") }).render();
      }), this.context.memo("button.floatNone", function () {
        return t.button({ contents: t.ui.icon(t.options.icons.alignJustify), tooltip: t.lang.image.floatNone, click: t.context.createInvokeHandler("editor.floatMe", "none") }).render();
      }), this.context.memo("button.removeMedia", function () {
        return t.button({ contents: t.ui.icon(t.options.icons.trash), tooltip: t.lang.image.remove, click: t.context.createInvokeHandler("editor.removeMedia") }).render();
      });
    }, e.prototype.addLinkPopoverButtons = function () {
      var t = this;this.context.memo("button.linkDialogShow", function () {
        return t.button({ contents: t.ui.icon(t.options.icons.link), tooltip: t.lang.link.edit, click: t.context.createInvokeHandler("linkDialog.show") }).render();
      }), this.context.memo("button.unlink", function () {
        return t.button({ contents: t.ui.icon(t.options.icons.unlink), tooltip: t.lang.link.unlink, click: t.context.createInvokeHandler("editor.unlink") }).render();
      });
    }, e.prototype.addTablePopoverButtons = function () {
      var t = this;this.context.memo("button.addRowUp", function () {
        return t.button({ className: "btn-md", contents: t.ui.icon(t.options.icons.rowAbove), tooltip: t.lang.table.addRowAbove, click: t.context.createInvokeHandler("editor.addRow", "top") }).render();
      }), this.context.memo("button.addRowDown", function () {
        return t.button({ className: "btn-md", contents: t.ui.icon(t.options.icons.rowBelow), tooltip: t.lang.table.addRowBelow, click: t.context.createInvokeHandler("editor.addRow", "bottom") }).render();
      }), this.context.memo("button.addColLeft", function () {
        return t.button({ className: "btn-md", contents: t.ui.icon(t.options.icons.colBefore), tooltip: t.lang.table.addColLeft, click: t.context.createInvokeHandler("editor.addCol", "left") }).render();
      }), this.context.memo("button.addColRight", function () {
        return t.button({ className: "btn-md", contents: t.ui.icon(t.options.icons.colAfter), tooltip: t.lang.table.addColRight, click: t.context.createInvokeHandler("editor.addCol", "right") }).render();
      }), this.context.memo("button.deleteRow", function () {
        return t.button({ className: "btn-md", contents: t.ui.icon(t.options.icons.rowRemove), tooltip: t.lang.table.delRow, click: t.context.createInvokeHandler("editor.deleteRow") }).render();
      }), this.context.memo("button.deleteCol", function () {
        return t.button({ className: "btn-md", contents: t.ui.icon(t.options.icons.colRemove), tooltip: t.lang.table.delCol, click: t.context.createInvokeHandler("editor.deleteCol") }).render();
      }), this.context.memo("button.deleteTable", function () {
        return t.button({ className: "btn-md", contents: t.ui.icon(t.options.icons.trash), tooltip: t.lang.table.delTable, click: t.context.createInvokeHandler("editor.deleteTable") }).render();
      });
    }, e.prototype.build = function (e, o) {
      for (var n = 0, i = o.length; n < i; n++) {
        for (var r = o[n], s = t.isArray(r) ? r[0] : r, a = t.isArray(r) ? 1 === r.length ? [r[0]] : r[1] : [r], l = this.ui.buttonGroup({ className: "note-" + s }).render(), c = 0, d = a.length; c < d; c++) {
          var u = this.context.memo("button." + a[c]);u && l.append("function" == typeof u ? u(this.context) : u);
        }l.appendTo(e);
      }
    }, e.prototype.updateCurrentStyle = function (e) {
      var o = this,
          n = e || this.$toolbar,
          i = this.context.invoke("editor.currentStyle");if (this.updateBtnStates(n, { ".note-btn-bold": function noteBtnBold() {
          return "bold" === i["font-bold"];
        }, ".note-btn-italic": function noteBtnItalic() {
          return "italic" === i["font-italic"];
        }, ".note-btn-underline": function noteBtnUnderline() {
          return "underline" === i["font-underline"];
        }, ".note-btn-subscript": function noteBtnSubscript() {
          return "subscript" === i["font-subscript"];
        }, ".note-btn-superscript": function noteBtnSuperscript() {
          return "superscript" === i["font-superscript"];
        }, ".note-btn-strikethrough": function noteBtnStrikethrough() {
          return "strikethrough" === i["font-strikethrough"];
        } }), i["font-family"]) {
        var r = i["font-family"].split(",").map(function (t) {
          return t.replace(/[\'\"]/g, "").replace(/\s+$/, "").replace(/^\s+/, "");
        }),
            s = N.find(r, this.isFontInstalled.bind(this));n.find(".dropdown-fontname a").each(function (e, o) {
          var n = t(o),
              i = n.data("value") + "" == s + "";n.toggleClass("checked", i);
        }), n.find(".note-current-fontname").text(s).css("font-family", s);
      }if (i["font-size"]) {
        var a = i["font-size"];n.find(".dropdown-fontsize a").each(function (e, o) {
          var n = t(o),
              i = n.data("value") + "" == a + "";n.toggleClass("checked", i);
        }), n.find(".note-current-fontsize").text(a);
      }if (i["line-height"]) {
        var l = i["line-height"];n.find(".dropdown-line-height li a").each(function (e, n) {
          var i = t(n).data("value") + "" == l + "";o.className = i ? "checked" : "";
        });
      }
    }, e.prototype.updateBtnStates = function (e, o) {
      var n = this;t.each(o, function (t, o) {
        n.ui.toggleBtnActive(e.find(t), o());
      });
    }, e.prototype.tableMoveHandler = function (e) {
      var o,
          n = t(e.target.parentNode),
          i = n.next(),
          r = n.find(".note-dimension-picker-mousecatcher"),
          s = n.find(".note-dimension-picker-highlighted"),
          a = n.find(".note-dimension-picker-unhighlighted");if (void 0 === e.offsetX) {
        var l = t(e.target).offset();o = { x: e.pageX - l.left, y: e.pageY - l.top };
      } else o = { x: e.offsetX, y: e.offsetY };var c = Math.ceil(o.x / 18) || 1,
          d = Math.ceil(o.y / 18) || 1;s.css({ width: c + "em", height: d + "em" }), r.data("value", c + "x" + d), c > 3 && c < this.options.insertTableMaxSize.col && a.css({ width: c + 1 + "em" }), d > 3 && d < this.options.insertTableMaxSize.row && a.css({ height: d + 1 + "em" }), i.html(c + " x " + d);
    }, e;
  }(),
      te = function () {
    function e(e) {
      this.context = e, this.$window = t(window), this.$document = t(document), this.ui = t.summernote.ui, this.$note = e.layoutInfo.note, this.$editor = e.layoutInfo.editor, this.$toolbar = e.layoutInfo.toolbar, this.options = e.options, this.followScroll = this.followScroll.bind(this);
    }return e.prototype.shouldInitialize = function () {
      return !this.options.airMode;
    }, e.prototype.initialize = function () {
      var t = this;this.options.toolbar = this.options.toolbar || [], this.options.toolbar.length ? this.context.invoke("buttons.build", this.$toolbar, this.options.toolbar) : this.$toolbar.hide(), this.options.toolbarContainer && this.$toolbar.appendTo(this.options.toolbarContainer), this.changeContainer(!1), this.$note.on("summernote.keyup summernote.mouseup summernote.change", function () {
        t.context.invoke("buttons.updateCurrentStyle");
      }), this.context.invoke("buttons.updateCurrentStyle"), this.options.followingToolbar && this.$window.on("scroll resize", this.followScroll);
    }, e.prototype.destroy = function () {
      this.$toolbar.children().remove(), this.options.followingToolbar && this.$window.off("scroll resize", this.followScroll);
    }, e.prototype.followScroll = function () {
      if (this.$editor.hasClass("fullscreen")) return !1;var e = this.$toolbar.parent(".note-toolbar-wrapper"),
          o = this.$editor.outerHeight(),
          n = this.$editor.width(),
          i = this.$toolbar.height();e.css({ height: i });var r = 0;this.options.otherStaticBar && (r = t(this.options.otherStaticBar).outerHeight());var s = this.$document.scrollTop(),
          a = this.$editor.offset().top;s > a - r && s < a + o - r - i ? this.$toolbar.css({ position: "fixed", top: r, width: n }) : this.$toolbar.css({ position: "relative", top: 0, width: "100%" });
    }, e.prototype.changeContainer = function (t) {
      t ? this.$toolbar.prependTo(this.$editor) : this.options.toolbarContainer && this.$toolbar.appendTo(this.options.toolbarContainer);
    }, e.prototype.updateFullscreen = function (t) {
      this.ui.toggleBtnActive(this.$toolbar.find(".btn-fullscreen"), t), this.changeContainer(t);
    }, e.prototype.updateCodeview = function (t) {
      this.ui.toggleBtnActive(this.$toolbar.find(".btn-codeview"), t), t ? this.deactivate() : this.activate();
    }, e.prototype.activate = function (t) {
      var e = this.$toolbar.find("button");t || (e = e.not(".btn-codeview")), this.ui.toggleBtn(e, !0);
    }, e.prototype.deactivate = function (t) {
      var e = this.$toolbar.find("button");t || (e = e.not(".btn-codeview")), this.ui.toggleBtn(e, !1);
    }, e;
  }(),
      ee = function () {
    function e(e) {
      this.context = e, this.ui = t.summernote.ui, this.$body = t(document.body), this.$editor = e.layoutInfo.editor, this.options = e.options, this.lang = this.options.langInfo, e.memo("help.linkDialog.show", this.options.langInfo.help["linkDialog.show"]);
    }return e.prototype.initialize = function () {
      var e = this.options.dialogsInBody ? this.$body : this.$editor,
          o = ['<div class="form-group note-form-group">', '<label class="note-form-label">' + this.lang.link.textToDisplay + "</label>", '<input class="note-link-text form-control note-form-control  note-input" type="text" />', "</div>", '<div class="form-group note-form-group">', '<label class="note-form-label">' + this.lang.link.url + "</label>", '<input class="note-link-url form-control note-form-control note-input" type="text" value="http://" />', "</div>", this.options.disableLinkTarget ? "" : t("<div/>").append(this.ui.checkbox({ id: "sn-checkbox-open-in-new-window", text: this.lang.link.openInNewWindow, checked: !0 }).render()).html()].join(""),
          n = '<button type="submit" href="#" class="btn btn-primary note-btn note-btn-primary note-link-btn" disabled>' + this.lang.link.insert + "</button>";this.$dialog = this.ui.dialog({ className: "link-dialog", title: this.lang.link.insert, fade: this.options.dialogsFade, body: o, footer: n }).render().appendTo(e);
    }, e.prototype.destroy = function () {
      this.ui.hideDialog(this.$dialog), this.$dialog.remove();
    }, e.prototype.bindEnterKey = function (t, e) {
      t.on("keypress", function (t) {
        t.keyCode === At.code.ENTER && (t.preventDefault(), e.trigger("click"));
      });
    }, e.prototype.toggleLinkBtn = function (t, e, o) {
      this.ui.toggleBtn(t, e.val() && o.val());
    }, e.prototype.showLinkDialog = function (e) {
      var o = this;return t.Deferred(function (t) {
        var n = o.$dialog.find(".note-link-text"),
            i = o.$dialog.find(".note-link-url"),
            r = o.$dialog.find(".note-link-btn"),
            s = o.$dialog.find("input[type=checkbox]");o.ui.onDialogShown(o.$dialog, function () {
          o.context.triggerEvent("dialog.shown"), e.url || (e.url = e.text), n.val(e.text);var a = function a() {
            o.toggleLinkBtn(r, n, i), e.text = n.val();
          };n.on("input", a).on("paste", function () {
            setTimeout(a, 0);
          });var l = function l() {
            o.toggleLinkBtn(r, n, i), e.text || n.val(i.val());
          };i.on("input", l).on("paste", function () {
            setTimeout(l, 0);
          }).val(e.url), z.isSupportTouch || i.trigger("focus"), o.toggleLinkBtn(r, n, i), o.bindEnterKey(i, r), o.bindEnterKey(n, r);var c = void 0 !== e.isNewWindow ? e.isNewWindow : o.context.options.linkTargetBlank;s.prop("checked", c), r.one("click", function (r) {
            r.preventDefault(), t.resolve({ range: e.range, url: i.val(), text: n.val(), isNewWindow: s.is(":checked") }), o.ui.hideDialog(o.$dialog);
          });
        }), o.ui.onDialogHidden(o.$dialog, function () {
          n.off("input paste keypress"), i.off("input paste keypress"), r.off("click"), "pending" === t.state() && t.reject();
        }), o.ui.showDialog(o.$dialog);
      }).promise();
    }, e.prototype.show = function () {
      var t = this,
          e = this.context.invoke("editor.getLinkInfo");this.context.invoke("editor.saveRange"), this.showLinkDialog(e).then(function (e) {
        t.context.invoke("editor.restoreRange"), t.context.invoke("editor.createLink", e);
      }).fail(function () {
        t.context.invoke("editor.restoreRange");
      });
    }, e;
  }(),
      oe = function () {
    function e(e) {
      var o = this;this.context = e, this.ui = t.summernote.ui, this.options = e.options, this.events = { "summernote.keyup summernote.mouseup summernote.change summernote.scroll": function summernoteKeyupSummernoteMouseupSummernoteChangeSummernoteScroll() {
          o.update();
        }, "summernote.disable summernote.dialog.shown": function summernoteDisableSummernoteDialogShown() {
          o.hide();
        } };
    }return e.prototype.shouldInitialize = function () {
      return !N.isEmpty(this.options.popover.link);
    }, e.prototype.initialize = function () {
      this.$popover = this.ui.popover({ className: "note-link-popover", callback: function callback(t) {
          t.find(".popover-content,.note-popover-content").prepend('<span><a target="_blank"></a>&nbsp;</span>');
        } }).render().appendTo(this.options.container);var t = this.$popover.find(".popover-content,.note-popover-content");this.context.invoke("buttons.build", t, this.options.popover.link);
    }, e.prototype.destroy = function () {
      this.$popover.remove();
    }, e.prototype.update = function () {
      if (this.context.invoke("editor.hasFocus")) {
        var e = this.context.invoke("editor.createRange");if (e.isCollapsed() && e.isOnAnchor()) {
          var o = Nt.ancestor(e.sc, Nt.isAnchor),
              n = t(o).attr("href");this.$popover.find("a").attr("href", n).html(n);var i = Nt.posFromPlaceholder(o);this.$popover.css({ display: "block", left: i.left, top: i.top });
        } else this.hide();
      } else this.hide();
    }, e.prototype.hide = function () {
      this.$popover.hide();
    }, e;
  }(),
      ne = function () {
    function e(e) {
      this.context = e, this.ui = t.summernote.ui, this.$body = t(document.body), this.$editor = e.layoutInfo.editor, this.options = e.options, this.lang = this.options.langInfo;
    }return e.prototype.initialize = function () {
      var t = this.options.dialogsInBody ? this.$body : this.$editor,
          e = "";if (this.options.maximumImageFileSize) {
        var o = Math.floor(Math.log(this.options.maximumImageFileSize) / Math.log(1024)),
            n = 1 * (this.options.maximumImageFileSize / Math.pow(1024, o)).toFixed(2) + " " + " KMGTP"[o] + "B";e = "<small>" + this.lang.image.maximumFileSize + " : " + n + "</small>";
      }var i = ['<div class="form-group note-form-group note-group-select-from-files">', '<label class="note-form-label">' + this.lang.image.selectFromFiles + "</label>", '<input class="note-image-input note-form-control note-input" ', ' type="file" name="files" accept="image/*" multiple="multiple" />', e, "</div>", '<div class="form-group note-group-image-url" style="overflow:auto;">', '<label class="note-form-label">' + this.lang.image.url + "</label>", '<input class="note-image-url form-control note-form-control note-input ', ' col-md-12" type="text" />', "</div>"].join(""),
          r = '<button type="submit" href="#" class="btn btn-primary note-btn note-btn-primary note-image-btn" disabled>' + this.lang.image.insert + "</button>";this.$dialog = this.ui.dialog({ title: this.lang.image.insert, fade: this.options.dialogsFade, body: i, footer: r }).render().appendTo(t);
    }, e.prototype.destroy = function () {
      this.ui.hideDialog(this.$dialog), this.$dialog.remove();
    }, e.prototype.bindEnterKey = function (t, e) {
      t.on("keypress", function (t) {
        t.keyCode === At.code.ENTER && (t.preventDefault(), e.trigger("click"));
      });
    }, e.prototype.show = function () {
      var t = this;this.context.invoke("editor.saveRange"), this.showImageDialog().then(function (e) {
        t.ui.hideDialog(t.$dialog), t.context.invoke("editor.restoreRange"), "string" == typeof e ? t.context.invoke("editor.insertImage", e) : t.context.invoke("editor.insertImagesOrCallback", e);
      }).fail(function () {
        t.context.invoke("editor.restoreRange");
      });
    }, e.prototype.showImageDialog = function () {
      var e = this;return t.Deferred(function (t) {
        var o = e.$dialog.find(".note-image-input"),
            n = e.$dialog.find(".note-image-url"),
            i = e.$dialog.find(".note-image-btn");e.ui.onDialogShown(e.$dialog, function () {
          e.context.triggerEvent("dialog.shown"), o.replaceWith(o.clone().on("change", function (e) {
            t.resolve(e.target.files || e.target.value);
          }).val("")), i.click(function (e) {
            e.preventDefault(), t.resolve(n.val());
          }), n.on("keyup paste", function () {
            var t = n.val();e.ui.toggleBtn(i, t);
          }).val(""), z.isSupportTouch || n.trigger("focus"), e.bindEnterKey(n, i);
        }), e.ui.onDialogHidden(e.$dialog, function () {
          o.off("change"), n.off("keyup paste keypress"), i.off("click"), "pending" === t.state() && t.reject();
        }), e.ui.showDialog(e.$dialog);
      });
    }, e;
  }(),
      ie = function () {
    function e(e) {
      var o = this;this.context = e, this.ui = t.summernote.ui, this.editable = e.layoutInfo.editable[0], this.options = e.options, this.events = { "summernote.disable": function summernoteDisable() {
          o.hide();
        } };
    }return e.prototype.shouldInitialize = function () {
      return !N.isEmpty(this.options.popover.image);
    }, e.prototype.initialize = function () {
      this.$popover = this.ui.popover({ className: "note-image-popover" }).render().appendTo(this.options.container);var t = this.$popover.find(".popover-content,.note-popover-content");this.context.invoke("buttons.build", t, this.options.popover.image);
    }, e.prototype.destroy = function () {
      this.$popover.remove();
    }, e.prototype.update = function (t) {
      if (Nt.isImg(t)) {
        var e = Nt.posFromPlaceholder(t),
            o = Nt.posFromPlaceholder(this.editable);this.$popover.css({ display: "block", left: this.options.popatmouse ? event.pageX - 20 : e.left, top: this.options.popatmouse ? event.pageY : Math.min(e.top, o.top) });
      } else this.hide();
    }, e.prototype.hide = function () {
      this.$popover.hide();
    }, e;
  }(),
      re = function () {
    function e(e) {
      var o = this;this.context = e, this.ui = t.summernote.ui, this.options = e.options, this.events = { "summernote.mousedown": function summernoteMousedown(t, e) {
          o.update(e.target);
        }, "summernote.keyup summernote.scroll summernote.change": function summernoteKeyupSummernoteScrollSummernoteChange() {
          o.update();
        }, "summernote.disable": function summernoteDisable() {
          o.hide();
        } };
    }return e.prototype.shouldInitialize = function () {
      return !N.isEmpty(this.options.popover.table);
    }, e.prototype.initialize = function () {
      this.$popover = this.ui.popover({ className: "note-table-popover" }).render().appendTo(this.options.container);var t = this.$popover.find(".popover-content,.note-popover-content");this.context.invoke("buttons.build", t, this.options.popover.table), z.isFF && document.execCommand("enableInlineTableEditing", !1, !1);
    }, e.prototype.destroy = function () {
      this.$popover.remove();
    }, e.prototype.update = function (t) {
      if (this.context.isDisabled()) return !1;var e = Nt.isCell(t);if (e) {
        var o = Nt.posFromPlaceholder(t);this.$popover.css({ display: "block", left: o.left, top: o.top });
      } else this.hide();return e;
    }, e.prototype.hide = function () {
      this.$popover.hide();
    }, e;
  }(),
      se = function () {
    function e(e) {
      this.context = e, this.ui = t.summernote.ui, this.$body = t(document.body), this.$editor = e.layoutInfo.editor, this.options = e.options, this.lang = this.options.langInfo;
    }return e.prototype.initialize = function () {
      var t = this.options.dialogsInBody ? this.$body : this.$editor,
          e = ['<div class="form-group note-form-group row-fluid">', '<label class="note-form-label">' + this.lang.video.url + ' <small class="text-muted">' + this.lang.video.providers + "</small></label>", '<input class="note-video-url form-control note-form-control note-input" type="text" />', "</div>"].join(""),
          o = '<button type="submit" href="#" class="btn btn-primary note-btn note-btn-primary note-video-btn" disabled>' + this.lang.video.insert + "</button>";this.$dialog = this.ui.dialog({ title: this.lang.video.insert, fade: this.options.dialogsFade, body: e, footer: o }).render().appendTo(t);
    }, e.prototype.destroy = function () {
      this.ui.hideDialog(this.$dialog), this.$dialog.remove();
    }, e.prototype.bindEnterKey = function (t, e) {
      t.on("keypress", function (t) {
        t.keyCode === At.code.ENTER && (t.preventDefault(), e.trigger("click"));
      });
    }, e.prototype.createVideoNode = function (e) {
      var o,
          n = e.match(/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/),
          i = e.match(/(?:www\.|\/\/)instagram\.com\/p\/(.[a-zA-Z0-9_-]*)/),
          r = e.match(/\/\/vine\.co\/v\/([a-zA-Z0-9]+)/),
          s = e.match(/\/\/(player\.)?vimeo\.com\/([a-z]*\/)*(\d+)[?]?.*/),
          a = e.match(/.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/),
          l = e.match(/\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/),
          c = e.match(/\/\/v\.qq\.com.*?vid=(.+)/),
          d = e.match(/\/\/v\.qq\.com\/x?\/?(page|cover).*?\/([^\/]+)\.html\??.*/),
          u = e.match(/^.+.(mp4|m4v)$/),
          h = e.match(/^.+.(ogg|ogv)$/),
          p = e.match(/^.+.(webm)$/);if (n && 11 === n[1].length) {
        var f = n[1];o = t("<iframe>").attr("frameborder", 0).attr("src", "//www.youtube.com/embed/" + f).attr("width", "640").attr("height", "360");
      } else if (i && i[0].length) o = t("<iframe>").attr("frameborder", 0).attr("src", "https://instagram.com/p/" + i[1] + "/embed/").attr("width", "612").attr("height", "710").attr("scrolling", "no").attr("allowtransparency", "true");else if (r && r[0].length) o = t("<iframe>").attr("frameborder", 0).attr("src", r[0] + "/embed/simple").attr("width", "600").attr("height", "600").attr("class", "vine-embed");else if (s && s[3].length) o = t("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder", 0).attr("src", "//player.vimeo.com/video/" + s[3]).attr("width", "640").attr("height", "360");else if (a && a[2].length) o = t("<iframe>").attr("frameborder", 0).attr("src", "//www.dailymotion.com/embed/video/" + a[2]).attr("width", "640").attr("height", "360");else if (l && l[1].length) o = t("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder", 0).attr("height", "498").attr("width", "510").attr("src", "//player.youku.com/embed/" + l[1]);else if (c && c[1].length || d && d[2].length) {
        var m = c && c[1].length ? c[1] : d[2];o = t("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder", 0).attr("height", "310").attr("width", "500").attr("src", "http://v.qq.com/iframe/player.html?vid=" + m + "&amp;auto=0");
      } else {
        if (!(u || h || p)) return !1;o = t("<video controls>").attr("src", e).attr("width", "640").attr("height", "360");
      }return o.addClass("note-video-clip"), o[0];
    }, e.prototype.show = function () {
      var t = this,
          e = this.context.invoke("editor.getSelectedText");this.context.invoke("editor.saveRange"), this.showVideoDialog(e).then(function (e) {
        t.ui.hideDialog(t.$dialog), t.context.invoke("editor.restoreRange");var o = t.createVideoNode(e);o && t.context.invoke("editor.insertNode", o);
      }).fail(function () {
        t.context.invoke("editor.restoreRange");
      });
    }, e.prototype.showVideoDialog = function (e) {
      var o = this;return t.Deferred(function (t) {
        var n = o.$dialog.find(".note-video-url"),
            i = o.$dialog.find(".note-video-btn");o.ui.onDialogShown(o.$dialog, function () {
          o.context.triggerEvent("dialog.shown"), n.val(e).on("input", function () {
            o.ui.toggleBtn(i, n.val());
          }), z.isSupportTouch || n.trigger("focus"), i.click(function (e) {
            e.preventDefault(), t.resolve(n.val());
          }), o.bindEnterKey(n, i);
        }), o.ui.onDialogHidden(o.$dialog, function () {
          n.off("input"), i.off("click"), "pending" === t.state() && t.reject();
        }), o.ui.showDialog(o.$dialog);
      });
    }, e;
  }(),
      ae = function () {
    function e(e) {
      this.context = e, this.ui = t.summernote.ui, this.$body = t(document.body), this.$editor = e.layoutInfo.editor, this.options = e.options, this.lang = this.options.langInfo;
    }return e.prototype.initialize = function () {
      var t = this.options.dialogsInBody ? this.$body : this.$editor,
          e = ['<p class="text-center">', '<a href="http://summernote.org/" target="_blank">Summernote 0.8.10</a> · ', '<a href="https://github.com/summernote/summernote" target="_blank">Project</a> · ', '<a href="https://github.com/summernote/summernote/issues" target="_blank">Issues</a>', "</p>"].join("");this.$dialog = this.ui.dialog({ title: this.lang.options.help, fade: this.options.dialogsFade, body: this.createShortcutList(), footer: e, callback: function callback(t) {
          t.find(".modal-body,.note-modal-body").css({ "max-height": 300, overflow: "scroll" });
        } }).render().appendTo(t);
    }, e.prototype.destroy = function () {
      this.ui.hideDialog(this.$dialog), this.$dialog.remove();
    }, e.prototype.createShortcutList = function () {
      var e = this,
          o = this.options.keyMap[z.isMac ? "mac" : "pc"];return Object.keys(o).map(function (n) {
        var i = o[n],
            r = t('<div><div class="help-list-item"/></div>');return r.append(t("<label><kbd>" + n + "</kdb></label>").css({ width: 180, "margin-right": 10 })).append(t("<span/>").html(e.context.memo("help." + i) || i)), r.html();
      }).join("");
    }, e.prototype.showHelpDialog = function () {
      var e = this;return t.Deferred(function (t) {
        e.ui.onDialogShown(e.$dialog, function () {
          e.context.triggerEvent("dialog.shown"), t.resolve();
        }), e.ui.showDialog(e.$dialog);
      }).promise();
    }, e.prototype.show = function () {
      var t = this;this.context.invoke("editor.saveRange"), this.showHelpDialog().then(function () {
        t.context.invoke("editor.restoreRange");
      });
    }, e;
  }(),
      le = function () {
    function e(e) {
      var o = this;this.context = e, this.ui = t.summernote.ui, this.options = e.options, this.events = { "summernote.keyup summernote.mouseup summernote.scroll": function summernoteKeyupSummernoteMouseupSummernoteScroll() {
          o.update();
        }, "summernote.disable summernote.change summernote.dialog.shown": function summernoteDisableSummernoteChangeSummernoteDialogShown() {
          o.hide();
        }, "summernote.focusout": function summernoteFocusout(t, e) {
          z.isFF || e.relatedTarget && Nt.ancestor(e.relatedTarget, C.eq(o.$popover[0])) || o.hide();
        } };
    }return e.prototype.shouldInitialize = function () {
      return this.options.airMode && !N.isEmpty(this.options.popover.air);
    }, e.prototype.initialize = function () {
      this.$popover = this.ui.popover({ className: "note-air-popover" }).render().appendTo(this.options.container);var t = this.$popover.find(".popover-content");this.context.invoke("buttons.build", t, this.options.popover.air);
    }, e.prototype.destroy = function () {
      this.$popover.remove();
    }, e.prototype.update = function () {
      var t = this.context.invoke("editor.currentStyle");if (t.range && !t.range.isCollapsed()) {
        var e = N.last(t.range.getClientRects());if (e) {
          var o = C.rect2bnd(e);this.$popover.css({ display: "block", left: Math.max(o.left + o.width / 2, 0) - 20, top: o.top + o.height }), this.context.invoke("buttons.updateCurrentStyle", this.$popover);
        }
      } else this.hide();
    }, e.prototype.hide = function () {
      this.$popover.hide();
    }, e;
  }(),
      ce = function () {
    function e(e) {
      var o = this;this.context = e, this.ui = t.summernote.ui, this.$editable = e.layoutInfo.editable, this.options = e.options, this.hint = this.options.hint || [], this.direction = this.options.hintDirection || "bottom", this.hints = t.isArray(this.hint) ? this.hint : [this.hint], this.events = { "summernote.keyup": function summernoteKeyup(t, e) {
          e.isDefaultPrevented() || o.handleKeyup(e);
        }, "summernote.keydown": function summernoteKeydown(t, e) {
          o.handleKeydown(e);
        }, "summernote.disable summernote.dialog.shown": function summernoteDisableSummernoteDialogShown() {
          o.hide();
        } };
    }return e.prototype.shouldInitialize = function () {
      return this.hints.length > 0;
    }, e.prototype.initialize = function () {
      var e = this;this.lastWordRange = null, this.$popover = this.ui.popover({ className: "note-hint-popover", hideArrow: !0, direction: "" }).render().appendTo(this.options.container), this.$popover.hide(), this.$content = this.$popover.find(".popover-content,.note-popover-content"), this.$content.on("click", ".note-hint-item", function () {
        e.$content.find(".active").removeClass("active"), t(e).addClass("active"), e.replace();
      });
    }, e.prototype.destroy = function () {
      this.$popover.remove();
    }, e.prototype.selectItem = function (t) {
      this.$content.find(".active").removeClass("active"), t.addClass("active"), this.$content[0].scrollTop = t[0].offsetTop - this.$content.innerHeight() / 2;
    }, e.prototype.moveDown = function () {
      var t = this.$content.find(".note-hint-item.active"),
          e = t.next();if (e.length) this.selectItem(e);else {
        var o = t.parent().next();o.length || (o = this.$content.find(".note-hint-group").first()), this.selectItem(o.find(".note-hint-item").first());
      }
    }, e.prototype.moveUp = function () {
      var t = this.$content.find(".note-hint-item.active"),
          e = t.prev();if (e.length) this.selectItem(e);else {
        var o = t.parent().prev();o.length || (o = this.$content.find(".note-hint-group").last()), this.selectItem(o.find(".note-hint-item").last());
      }
    }, e.prototype.replace = function () {
      var t = this.$content.find(".note-hint-item.active");if (t.length) {
        var e = this.nodeFromItem(t);this.lastWordRange.insertNode(e), Ht.createFromNode(e).collapse().select(), this.lastWordRange = null, this.hide(), this.context.triggerEvent("change", this.$editable.html(), this.$editable[0]), this.context.invoke("editor.focus");
      }
    }, e.prototype.nodeFromItem = function (t) {
      var e = this.hints[t.data("index")],
          o = t.data("item"),
          n = e.content ? e.content(o) : o;return "string" == typeof n && (n = Nt.createText(n)), n;
    }, e.prototype.createItemTemplates = function (e, o) {
      var n = this.hints[e];return o.map(function (o, i) {
        var r = t('<div class="note-hint-item"/>');return r.append(n.template ? n.template(o) : o + ""), r.data({ index: e, item: o }), r;
      });
    }, e.prototype.handleKeydown = function (t) {
      this.$popover.is(":visible") && (t.keyCode === At.code.ENTER ? (t.preventDefault(), this.replace()) : t.keyCode === At.code.UP ? (t.preventDefault(), this.moveUp()) : t.keyCode === At.code.DOWN && (t.preventDefault(), this.moveDown()));
    }, e.prototype.searchKeyword = function (t, e, o) {
      var n = this.hints[t];if (n && n.match.test(e) && n.search) {
        var i = n.match.exec(e);n.search(i[1], o);
      } else o();
    }, e.prototype.createGroup = function (e, o) {
      var n = this,
          i = t('<div class="note-hint-group note-hint-group-' + e + '"/>');return this.searchKeyword(e, o, function (t) {
        (t = t || []).length && (i.html(n.createItemTemplates(e, t)), n.show());
      }), i;
    }, e.prototype.handleKeyup = function (t) {
      var e = this;if (!N.contains([At.code.ENTER, At.code.UP, At.code.DOWN], t.keyCode)) {
        var o = this.context.invoke("editor.createRange").getWordRange(),
            n = o.toString();if (this.hints.length && n) {
          this.$content.empty();var i = C.rect2bnd(N.last(o.getClientRects()));i && (this.$popover.hide(), this.lastWordRange = o, this.hints.forEach(function (t, o) {
            t.match.test(n) && e.createGroup(o, n).appendTo(e.$content);
          }), this.$content.find(".note-hint-item:first").addClass("active"), "top" === this.direction ? this.$popover.css({ left: i.left, top: i.top - this.$popover.outerHeight() - 5 }) : this.$popover.css({ left: i.left, top: i.top + i.height + 5 }));
        } else this.hide();
      }
    }, e.prototype.show = function () {
      this.$popover.show();
    }, e.prototype.hide = function () {
      this.$popover.hide();
    }, e;
  }(),
      de = function () {
    function e(e, o) {
      this.ui = t.summernote.ui, this.$note = e, this.memos = {}, this.modules = {}, this.layoutInfo = {}, this.options = o, this.initialize();
    }return e.prototype.initialize = function () {
      return this.layoutInfo = this.ui.createLayout(this.$note, this.options), this._initialize(), this.$note.hide(), this;
    }, e.prototype.destroy = function () {
      this._destroy(), this.$note.removeData("summernote"), this.ui.removeLayout(this.$note, this.layoutInfo);
    }, e.prototype.reset = function () {
      var t = this.isDisabled();this.code(Nt.emptyPara), this._destroy(), this._initialize(), t && this.disable();
    }, e.prototype._initialize = function () {
      var e = this,
          o = t.extend({}, this.options.buttons);Object.keys(o).forEach(function (t) {
        e.memo("button." + t, o[t]);
      });var n = t.extend({}, this.options.modules, t.summernote.plugins || {});Object.keys(n).forEach(function (t) {
        e.module(t, n[t], !0);
      }), Object.keys(this.modules).forEach(function (t) {
        e.initializeModule(t);
      });
    }, e.prototype._destroy = function () {
      var t = this;Object.keys(this.modules).reverse().forEach(function (e) {
        t.removeModule(e);
      }), Object.keys(this.memos).forEach(function (e) {
        t.removeMemo(e);
      }), this.triggerEvent("destroy", this);
    }, e.prototype.code = function (t) {
      var e = this.invoke("codeview.isActivated");if (void 0 === t) return this.invoke("codeview.sync"), e ? this.layoutInfo.codable.val() : this.layoutInfo.editable.html();e ? this.layoutInfo.codable.val(t) : this.layoutInfo.editable.html(t), this.$note.val(t), this.triggerEvent("change", t);
    }, e.prototype.isDisabled = function () {
      return "false" === this.layoutInfo.editable.attr("contenteditable");
    }, e.prototype.enable = function () {
      this.layoutInfo.editable.attr("contenteditable", !0), this.invoke("toolbar.activate", !0), this.triggerEvent("disable", !1);
    }, e.prototype.disable = function () {
      this.invoke("codeview.isActivated") && this.invoke("codeview.deactivate"), this.layoutInfo.editable.attr("contenteditable", !1), this.invoke("toolbar.deactivate", !0), this.triggerEvent("disable", !0);
    }, e.prototype.triggerEvent = function () {
      var t = N.head(arguments),
          e = N.tail(N.from(arguments)),
          o = this.options.callbacks[C.namespaceToCamel(t, "on")];o && o.apply(this.$note[0], e), this.$note.trigger("summernote." + t, e);
    }, e.prototype.initializeModule = function (t) {
      var e = this.modules[t];e.shouldInitialize = e.shouldInitialize || C.ok, e.shouldInitialize() && (e.initialize && e.initialize(), e.events && Nt.attachEvents(this.$note, e.events));
    }, e.prototype.module = function (t, e, o) {
      if (1 === arguments.length) return this.modules[t];this.modules[t] = new e(this), o || this.initializeModule(t);
    }, e.prototype.removeModule = function (t) {
      var e = this.modules[t];e.shouldInitialize() && (e.events && Nt.detachEvents(this.$note, e.events), e.destroy && e.destroy()), delete this.modules[t];
    }, e.prototype.memo = function (t, e) {
      if (1 === arguments.length) return this.memos[t];this.memos[t] = e;
    }, e.prototype.removeMemo = function (t) {
      this.memos[t] && this.memos[t].destroy && this.memos[t].destroy(), delete this.memos[t];
    }, e.prototype.createInvokeHandlerAndUpdateState = function (t, e) {
      var o = this;return function (n) {
        o.createInvokeHandler(t, e)(n), o.invoke("buttons.updateCurrentStyle");
      };
    }, e.prototype.createInvokeHandler = function (e, o) {
      var n = this;return function (i) {
        i.preventDefault();var r = t(i.target);n.invoke(e, o || r.closest("[data-value]").data("value"), r);
      };
    }, e.prototype.invoke = function () {
      var t = N.head(arguments),
          e = N.tail(N.from(arguments)),
          o = t.split("."),
          n = o.length > 1,
          i = n && N.head(o),
          r = n ? N.last(o) : N.head(o),
          s = this.modules[i || "editor"];return !i && this[r] ? this[r].apply(this, e) : s && s[r] && s.shouldInitialize() ? s[r].apply(s, e) : void 0;
    }, e;
  }();t.fn.extend({ summernote: function summernote() {
      var e = t.type(N.head(arguments)),
          o = "string" === e,
          n = "object" === e,
          i = t.extend({}, t.summernote.options, n ? N.head(arguments) : {});i.langInfo = t.extend(!0, {}, t.summernote.lang["en-US"], t.summernote.lang[i.lang]), i.icons = t.extend(!0, {}, t.summernote.options.icons, i.icons), i.tooltip = "auto" === i.tooltip ? !z.isSupportTouch : i.tooltip, this.each(function (e, o) {
        var n = t(o);if (!n.data("summernote")) {
          var r = new de(n, i);n.data("summernote", r), n.data("summernote").triggerEvent("init", r.layoutInfo);
        }
      });var r = this.first();if (r.length) {
        var s = r.data("summernote");if (o) return s.invoke.apply(s, N.from(arguments));i.focus && s.invoke("editor.focus");
      }return this;
    } }), t.summernote = t.extend(t.summernote, { version: "0.8.10", ui: y, dom: Nt, plugins: {}, options: { modules: { editor: jt, clipboard: qt, dropzone: Kt, codeview: Vt, statusbar: Wt, fullscreen: Gt, handle: _t, hintPopover: ce, autoLink: Yt, autoSync: Qt, placeholder: Jt, buttons: Xt, toolbar: te, linkDialog: ee, linkPopover: oe, imageDialog: ne, imagePopover: ie, tablePopover: re, videoDialog: se, helpDialog: ae, airPopover: le }, buttons: {}, lang: "en-US", followingToolbar: !0, otherStaticBar: "", toolbar: [["style", ["style"]], ["font", ["bold", "underline", "clear"]], ["fontname", ["fontname"]], ["color", ["color"]], ["para", ["ul", "ol", "paragraph"]], ["table", ["table"]], ["insert", ["link", "picture", "video"]], ["view", ["fullscreen", "codeview", "help"]]], popatmouse: !0, popover: { image: [["imagesize", ["imageSize100", "imageSize50", "imageSize25"]], ["float", ["floatLeft", "floatRight", "floatNone"]], ["remove", ["removeMedia"]]], link: [["link", ["linkDialogShow", "unlink"]]], table: [["add", ["addRowDown", "addRowUp", "addColLeft", "addColRight"]], ["delete", ["deleteRow", "deleteCol", "deleteTable"]]], air: [["color", ["color"]], ["font", ["bold", "underline", "clear"]], ["para", ["ul", "paragraph"]], ["table", ["table"]], ["insert", ["link", "picture"]]] }, airMode: !1, width: null, height: null, linkTargetBlank: !0, focus: !1, tabSize: 4, styleWithSpan: !0, shortcuts: !0, textareaAutoSync: !0, hintDirection: "bottom", tooltip: "auto", container: "body", maxTextLength: 0, styleTags: ["p", "blockquote", "pre", "h1", "h2", "h3", "h4", "h5", "h6"], fontNames: ["Arial", "Arial Black", "Comic Sans MS", "Courier New", "Helvetica Neue", "Helvetica", "Impact", "Lucida Grande", "Tahoma", "Times New Roman", "Verdana"], fontSizes: ["8", "9", "10", "11", "12", "14", "18", "24", "36"], colors: [["#000000", "#424242", "#636363", "#9C9C94", "#CEC6CE", "#EFEFEF", "#F7F7F7", "#FFFFFF"], ["#FF0000", "#FF9C00", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#9C00FF", "#FF00FF"], ["#F7C6CE", "#FFE7CE", "#FFEFC6", "#D6EFD6", "#CEDEE7", "#CEE7F7", "#D6D6E7", "#E7D6DE"], ["#E79C9C", "#FFC69C", "#FFE79C", "#B5D6A5", "#A5C6CE", "#9CC6EF", "#B5A5D6", "#D6A5BD"], ["#E76363", "#F7AD6B", "#FFD663", "#94BD7B", "#73A5AD", "#6BADDE", "#8C7BC6", "#C67BA5"], ["#CE0000", "#E79439", "#EFC631", "#6BA54A", "#4A7B8C", "#3984C6", "#634AA5", "#A54A7B"], ["#9C0000", "#B56308", "#BD9400", "#397B21", "#104A5A", "#085294", "#311873", "#731842"], ["#630000", "#7B3900", "#846300", "#295218", "#083139", "#003163", "#21104A", "#4A1031"]], colorsName: [["Black", "Tundora", "Dove Gray", "Star Dust", "Pale Slate", "Gallery", "Alabaster", "White"], ["Red", "Orange Peel", "Yellow", "Green", "Cyan", "Blue", "Electric Violet", "Magenta"], ["Azalea", "Karry", "Egg White", "Zanah", "Botticelli", "Tropical Blue", "Mischka", "Twilight"], ["Tonys Pink", "Peach Orange", "Cream Brulee", "Sprout", "Casper", "Perano", "Cold Purple", "Careys Pink"], ["Mandy", "Rajah", "Dandelion", "Olivine", "Gulf Stream", "Viking", "Blue Marguerite", "Puce"], ["Guardsman Red", "Fire Bush", "Golden Dream", "Chelsea Cucumber", "Smalt Blue", "Boston Blue", "Butterfly Bush", "Cadillac"], ["Sangria", "Mai Tai", "Buddha Gold", "Forest Green", "Eden", "Venice Blue", "Meteorite", "Claret"], ["Rosewood", "Cinnamon", "Olive", "Parsley", "Tiber", "Midnight Blue", "Valentino", "Loulou"]], lineHeights: ["1.0", "1.2", "1.4", "1.5", "1.6", "1.8", "2.0", "3.0"], tableClassName: "table table-bordered", insertTableMaxSize: { col: 10, row: 10 }, dialogsInBody: !1, dialogsFade: !1, maximumImageFileSize: null, callbacks: { onInit: null, onFocus: null, onBlur: null, onBlurCodeview: null, onEnter: null, onKeyup: null, onKeydown: null, onImageUpload: null, onImageUploadError: null }, codemirror: { mode: "text/html", htmlMode: !0, lineNumbers: !0 }, keyMap: { pc: { ENTER: "insertParagraph", "CTRL+Z": "undo", "CTRL+Y": "redo", TAB: "tab", "SHIFT+TAB": "untab", "CTRL+B": "bold", "CTRL+I": "italic", "CTRL+U": "underline", "CTRL+SHIFT+S": "strikethrough", "CTRL+BACKSLASH": "removeFormat", "CTRL+SHIFT+L": "justifyLeft", "CTRL+SHIFT+E": "justifyCenter", "CTRL+SHIFT+R": "justifyRight", "CTRL+SHIFT+J": "justifyFull", "CTRL+SHIFT+NUM7": "insertUnorderedList", "CTRL+SHIFT+NUM8": "insertOrderedList", "CTRL+LEFTBRACKET": "outdent", "CTRL+RIGHTBRACKET": "indent", "CTRL+NUM0": "formatPara", "CTRL+NUM1": "formatH1", "CTRL+NUM2": "formatH2", "CTRL+NUM3": "formatH3", "CTRL+NUM4": "formatH4", "CTRL+NUM5": "formatH5", "CTRL+NUM6": "formatH6", "CTRL+ENTER": "insertHorizontalRule", "CTRL+K": "linkDialog.show" }, mac: { ENTER: "insertParagraph", "CMD+Z": "undo", "CMD+SHIFT+Z": "redo", TAB: "tab", "SHIFT+TAB": "untab", "CMD+B": "bold", "CMD+I": "italic", "CMD+U": "underline", "CMD+SHIFT+S": "strikethrough", "CMD+BACKSLASH": "removeFormat", "CMD+SHIFT+L": "justifyLeft", "CMD+SHIFT+E": "justifyCenter", "CMD+SHIFT+R": "justifyRight", "CMD+SHIFT+J": "justifyFull", "CMD+SHIFT+NUM7": "insertUnorderedList", "CMD+SHIFT+NUM8": "insertOrderedList", "CMD+LEFTBRACKET": "outdent", "CMD+RIGHTBRACKET": "indent", "CMD+NUM0": "formatPara", "CMD+NUM1": "formatH1", "CMD+NUM2": "formatH2", "CMD+NUM3": "formatH3", "CMD+NUM4": "formatH4", "CMD+NUM5": "formatH5", "CMD+NUM6": "formatH6", "CMD+ENTER": "insertHorizontalRule", "CMD+K": "linkDialog.show" } }, icons: { align: "note-icon-align", alignCenter: "note-icon-align-center", alignJustify: "note-icon-align-justify", alignLeft: "note-icon-align-left", alignRight: "note-icon-align-right", rowBelow: "note-icon-row-below", colBefore: "note-icon-col-before", colAfter: "note-icon-col-after", rowAbove: "note-icon-row-above", rowRemove: "note-icon-row-remove", colRemove: "note-icon-col-remove", indent: "note-icon-align-indent", outdent: "note-icon-align-outdent", arrowsAlt: "note-icon-arrows-alt", bold: "note-icon-bold", caret: "note-icon-caret", circle: "note-icon-circle", close: "note-icon-close", code: "note-icon-code", eraser: "note-icon-eraser", font: "note-icon-font", frame: "note-icon-frame", italic: "note-icon-italic", link: "note-icon-link", unlink: "note-icon-chain-broken", magic: "note-icon-magic", menuCheck: "note-icon-menu-check", minus: "note-icon-minus", orderedlist: "note-icon-orderedlist", pencil: "note-icon-pencil", picture: "note-icon-picture", question: "note-icon-question", redo: "note-icon-redo", square: "note-icon-square", strikethrough: "note-icon-strikethrough", subscript: "note-icon-subscript", superscript: "note-icon-superscript", table: "note-icon-table", textHeight: "note-icon-text-height", trash: "note-icon-trash", underline: "note-icon-underline", undo: "note-icon-undo", unorderedlist: "note-icon-unorderedlist", video: "note-icon-video" } } });
});
