var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * datepair.js v0.4.16 - A javascript plugin for intelligently selecting date and time ranges inspired by Google Calendar.
 * Copyright (c) 2018 Jon Thornton - http://jonthornton.github.com/Datepair.js
 * License: MIT
 */

!function (a, b) {
  "use strict";
  function c(a, b) {
    var c = b || {};for (var d in a) {
      d in c || (c[d] = a[d]);
    }return c;
  }function d(a, c) {
    if (h) h(a).trigger(c);else {
      var d = b.createEvent("CustomEvent");d.initCustomEvent(c, !0, !0, {}), a.dispatchEvent(d);
    }
  }function e(a, b) {
    return h ? h(a).hasClass(b) : a.classList.contains(b);
  }function f(a, b) {
    this.dateDelta = null, this.timeDelta = null, this._defaults = { startClass: "start", endClass: "end", timeClass: "time", dateClass: "date", defaultDateDelta: 0, defaultTimeDelta: 36e5, anchor: "start", parseTime: function parseTime(a) {
        return h(a).timepicker("getTime");
      }, updateTime: function updateTime(a, b) {
        h(a).timepicker("setTime", b);
      }, setMinTime: function setMinTime(a, b) {
        h(a).timepicker("option", "minTime", b);
      }, parseDate: function parseDate(a) {
        return a.value && h(a).datepicker("getDate");
      }, updateDate: function updateDate(a, b) {
        h(a).datepicker("update", b);
      } }, this.container = a, this.settings = c(this._defaults, b), this.startDateInput = this.container.querySelector("." + this.settings.startClass + "." + this.settings.dateClass), this.endDateInput = this.container.querySelector("." + this.settings.endClass + "." + this.settings.dateClass), this.startTimeInput = this.container.querySelector("." + this.settings.startClass + "." + this.settings.timeClass), this.endTimeInput = this.container.querySelector("." + this.settings.endClass + "." + this.settings.timeClass), this.refresh(), this._bindChangeHandler();
  }var g = 864e5,
      h = a.Zepto || a.jQuery;f.prototype = { constructor: f, option: function option(a, b) {
      if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) this.settings = c(this.settings, a);else if ("string" == typeof a && "undefined" != typeof b) this.settings[a] = b;else if ("string" == typeof a) return this.settings[a];this._updateEndMintime();
    }, getTimeDiff: function getTimeDiff() {
      var a = this.dateDelta + this.timeDelta;return !(a < 0) || this.startDateInput && this.endDateInput || (a += g), a;
    }, refresh: function refresh() {
      if (this.startDateInput && this.startDateInput.value && this.endDateInput && this.endDateInput.value) {
        var a = this.settings.parseDate(this.startDateInput),
            b = this.settings.parseDate(this.endDateInput);a && b && (this.dateDelta = b.getTime() - a.getTime());
      }if (this.startTimeInput && this.startTimeInput.value && this.endTimeInput && this.endTimeInput.value) {
        var c = this.settings.parseTime(this.startTimeInput),
            d = this.settings.parseTime(this.endTimeInput);c && d && (this.timeDelta = d.getTime() - c.getTime(), this._updateEndMintime());
      }
    }, remove: function remove() {
      this._unbindChangeHandler();
    }, _bindChangeHandler: function _bindChangeHandler() {
      h ? h(this.container).on("change.datepair", h.proxy(this.handleEvent, this)) : this.container.addEventListener("change", this, !1);
    }, _unbindChangeHandler: function _unbindChangeHandler() {
      h ? h(this.container).off("change.datepair") : this.container.removeEventListener("change", this, !1);
    }, handleEvent: function handleEvent(a) {
      this._unbindChangeHandler(), e(a.target, this.settings.dateClass) ? "" != a.target.value ? (this._dateChanged(a.target), this._timeChanged(a.target)) : this.dateDelta = null : e(a.target, this.settings.timeClass) && ("" != a.target.value ? this._timeChanged(a.target) : this.timeDelta = null), this._validateRanges(), this._updateEndMintime(), this._bindChangeHandler();
    }, _dateChanged: function _dateChanged(a) {
      if (this.startDateInput && this.endDateInput) {
        var b = this.settings.parseDate(this.startDateInput),
            c = this.settings.parseDate(this.endDateInput);if (b && c) {
          if ("start" == this.settings.anchor && e(a, this.settings.startClass)) {
            var d = new Date(b.getTime() + this.dateDelta);this.settings.updateDate(this.endDateInput, d);
          } else if ("end" == this.settings.anchor && e(a, this.settings.endClass)) {
            var d = new Date(c.getTime() - this.dateDelta);this.settings.updateDate(this.startDateInput, d);
          } else if (c < b) {
            var f = e(a, this.settings.startClass) ? this.endDateInput : this.startDateInput,
                h = this.settings.parseDate(a);this.dateDelta = 0, this.settings.updateDate(f, h);
          } else this.dateDelta = c.getTime() - b.getTime();
        } else if (null !== this.settings.defaultDateDelta) {
          if (b) {
            var i = new Date(b.getTime() + this.settings.defaultDateDelta * g);this.settings.updateDate(this.endDateInput, i);
          } else if (c) {
            var j = new Date(c.getTime() - this.settings.defaultDateDelta * g);this.settings.updateDate(this.startDateInput, j);
          }this.dateDelta = this.settings.defaultDateDelta * g;
        } else this.dateDelta = null;
      }
    }, _timeChanged: function _timeChanged(a) {
      if (this.startTimeInput && this.endTimeInput) {
        var b = this.settings.parseTime(this.startTimeInput),
            c = this.settings.parseTime(this.endTimeInput);if (!b || !c) return void (null !== this.settings.defaultTimeDelta ? (this.timeDelta = this.settings.defaultTimeDelta, b ? (c = this._setTimeAndReturn(this.endTimeInput, new Date(b.getTime() + this.settings.defaultTimeDelta)), this._doMidnightRollover(b, c)) : c && (b = this._setTimeAndReturn(this.startTimeInput, new Date(c.getTime() - this.settings.defaultTimeDelta)), this._doMidnightRollover(b, c))) : this.timeDelta = null);if ("start" == this.settings.anchor && e(a, this.settings.startClass)) c = this._setTimeAndReturn(this.endTimeInput, new Date(b.getTime() + this.timeDelta)), this._doMidnightRollover(b, c);else if ("end" == this.settings.anchor && e(a, this.settings.endClass)) b = this._setTimeAndReturn(this.startTimeInput, new Date(c.getTime() - this.timeDelta)), this._doMidnightRollover(b, c);else {
          this._doMidnightRollover(b, c);var d, f;if (this.startDateInput && this.endDateInput && (d = this.settings.parseDate(this.startDateInput), f = this.settings.parseDate(this.endDateInput)), +d == +f && c < b) {
            var g = e(a, this.settings.endClass) ? this.endTimeInput : this.startTimeInput,
                h = e(a, this.settings.startClass) ? this.endTimeInput : this.startTimeInput,
                i = this.settings.parseTime(g);this.timeDelta = 0, this.settings.updateTime(h, i);
          } else this.timeDelta = c.getTime() - b.getTime();
        }
      }
    }, _setTimeAndReturn: function _setTimeAndReturn(a, b) {
      return this.settings.updateTime(a, b), this.settings.parseTime(a);
    }, _doMidnightRollover: function _doMidnightRollover(a, b) {
      if (this.startDateInput && this.endDateInput) {
        var c = this.settings.parseDate(this.endDateInput),
            d = this.settings.parseDate(this.startDateInput),
            e = b.getTime() - a.getTime(),
            f = b < a ? g : -1 * g;null !== this.dateDelta && this.dateDelta + this.timeDelta <= g && this.dateDelta + e != 0 && (f > 0 || 0 != this.dateDelta) && (e >= 0 && this.timeDelta < 0 || e < 0 && this.timeDelta >= 0) && ("start" == this.settings.anchor ? (this.settings.updateDate(this.endDateInput, new Date(c.getTime() + f)), this._dateChanged(this.endDateInput)) : "end" == this.settings.anchor && (this.settings.updateDate(this.startDateInput, new Date(d.getTime() - f)), this._dateChanged(this.startDateInput))), this.timeDelta = e;
      }
    }, _updateEndMintime: function _updateEndMintime() {
      if ("function" == typeof this.settings.setMinTime) {
        var a = null;"start" == this.settings.anchor && (!this.dateDelta || this.dateDelta < g || this.timeDelta && this.dateDelta + this.timeDelta < g) && (a = this.settings.parseTime(this.startTimeInput)), this.settings.setMinTime(this.endTimeInput, a);
      }
    }, _validateRanges: function _validateRanges() {
      return this.startTimeInput && this.endTimeInput && null === this.timeDelta ? void d(this.container, "rangeIncomplete") : this.startDateInput && this.endDateInput && null === this.dateDelta ? void d(this.container, "rangeIncomplete") : void (!this.startDateInput || !this.endDateInput || this.dateDelta + this.timeDelta >= 0 ? d(this.container, "rangeSelected") : d(this.container, "rangeError"));
    } }, a.Datepair = f;
}(window, document), function (a) {
  a && (a.fn.datepair = function (b) {
    var c;return this.each(function () {
      var d = a(this),
          e = d.data("datepair"),
          f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;e || (e = new Datepair(this, f), d.data("datepair", e)), "remove" === b && (c = e.remove(), d.removeData("datepair", e)), "string" == typeof b && (c = e[b]());
    }), c || this;
  }, a("[data-datepair]").each(function () {
    var b = a(this);b.datepair(b.data());
  }));
}(window.Zepto || window.jQuery);