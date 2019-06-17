var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 * A colorselector for Twitter Bootstrap which lets you select a color from a predefined set of colors only.
 * https://github.com/flaute/bootstrap-colorselector
 *
 * Copyright (C) 2014 Flaute
 *
 * Licensed under the MIT license
 */
!function (t) {
  "use strict";
  var o = function o(_o, e) {
    this.options = e, this.$select = t(_o), this._init();
  };o.prototype = { constructor: o, _init: function _init() {
      var o = this.options.callback,
          e = this.$select.val(),
          a = this.$select.find("option:selected").data("color"),
          l = t("<ul>").addClass("dropdown-menu").addClass("dropdown-caret"),
          s = t("<div>").addClass("dropdown").addClass("dropdown-colorselector"),
          c = t("<span>").addClass("btn-colorselector").css("background-color", a),
          n = t("<a>").attr("data-toggle", "dropdown").addClass("dropdown-toggle").attr("href", "#").append(c);t("option", this.$select).each(function () {
        var o = t(this),
            a = o.attr("value"),
            s = o.data("color"),
            c = o.text(),
            n = t("<a>").addClass("color-btn");(o.prop("selected") === !0 || e === s) && n.addClass("selected"), n.css("background-color", s), n.attr("href", "#").attr("data-color", s).attr("data-value", a).attr("title", c), l.append(t("<li>").append(n));
      }), s.append(n), s.append(l), this.$select.hide(), this.$selector = t(s).insertAfter(this.$select), this.$select.on("change", function () {
        var e = t(this).val(),
            a = t(this).find("option[value='" + e + "']").data("color"),
            l = t(this).find("option[value='" + e + "']").text();t(this).next().find("ul").find("li").find(".selected").removeClass("selected"), t(this).next().find("ul").find("li").find("a[data-color='" + a + "']").addClass("selected"), t(this).next().find(".btn-colorselector").css("background-color", a), o(e, a, l);
      }), l.on("click.colorselector", t.proxy(this._clickColor, this));
    }, _clickColor: function _clickColor(o) {
      var e = t(o.target);return e.is(".color-btn") ? (this.$select.val(e.data("value")).change(), o.preventDefault(), !0) : !1;
    }, setColor: function setColor(o) {
      var e = t(this.$selector).find("li").find("a[data-color='" + o + "']").data("value");this.setValue(e);
    }, setValue: function setValue(t) {
      this.$select.val(t).change();
    } }, t.fn.colorselector = function (e) {
    var a = Array.apply(null, arguments);return a.shift(), this.each(function () {
      var l = t(this),
          s = l.data("colorselector"),
          c = t.extend({}, t.fn.colorselector.defaults, l.data(), "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e);s || l.data("colorselector", s = new o(this, c)), "string" == typeof e && s[e].apply(s, a);
    });
  }, t.fn.colorselector.defaults = { callback: function callback() {}, colorsPerRow: 8 }, t.fn.colorselector.Constructor = o;
}(jQuery, window, document);