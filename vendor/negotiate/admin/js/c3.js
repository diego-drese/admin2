var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.c3 = e();
}(this, function () {
  "use strict";
  function t(t, e) {
    var i = this;i.component = t, i.params = e || {}, i.d3 = t.d3, i.scale = i.d3.scale.linear(), i.range, i.orient = "bottom", i.innerTickSize = 6, i.outerTickSize = this.params.withOuterTick ? 6 : 0, i.tickPadding = 3, i.tickValues = null, i.tickFormat, i.tickArguments, i.tickOffset = 0, i.tickCulling = !0, i.tickCentered, i.tickTextCharSize, i.tickTextRotate = i.params.tickTextRotate, i.tickLength, i.axis = i.generateAxis();
  }function e(t) {
    var e = this.internal = new i(this);e.loadConfig(t), e.beforeInit(t), e.init(), e.afterInit(t), function t(e, i, n) {
      Object.keys(e).forEach(function (a) {
        i[a] = e[a].bind(n), Object.keys(e[a]).length > 0 && t(e[a], i[a], n);
      });
    }(P, this, this);
  }function i(t) {
    var e = this;e.d3 = window.d3 ? window.d3 : "undefined" != typeof require ? require("d3") : void 0, e.api = t, e.config = e.getDefaultConfig(), e.data = {}, e.cache = {}, e.axes = {};
  }var n,
      a,
      r = { target: "c3-target", chart: "c3-chart", chartLine: "c3-chart-line", chartLines: "c3-chart-lines", chartBar: "c3-chart-bar", chartBars: "c3-chart-bars", chartText: "c3-chart-text", chartTexts: "c3-chart-texts", chartArc: "c3-chart-arc", chartArcs: "c3-chart-arcs", chartArcsTitle: "c3-chart-arcs-title", chartArcsBackground: "c3-chart-arcs-background", chartArcsGaugeUnit: "c3-chart-arcs-gauge-unit", chartArcsGaugeMax: "c3-chart-arcs-gauge-max", chartArcsGaugeMin: "c3-chart-arcs-gauge-min", selectedCircle: "c3-selected-circle", selectedCircles: "c3-selected-circles", eventRect: "c3-event-rect", eventRects: "c3-event-rects", eventRectsSingle: "c3-event-rects-single", eventRectsMultiple: "c3-event-rects-multiple", zoomRect: "c3-zoom-rect", brush: "c3-brush", focused: "c3-focused", defocused: "c3-defocused", region: "c3-region", regions: "c3-regions", title: "c3-title", tooltipContainer: "c3-tooltip-container", tooltip: "c3-tooltip", tooltipName: "c3-tooltip-name", shape: "c3-shape", shapes: "c3-shapes", line: "c3-line", lines: "c3-lines", bar: "c3-bar", bars: "c3-bars", circle: "c3-circle", circles: "c3-circles", arc: "c3-arc", arcs: "c3-arcs", area: "c3-area", areas: "c3-areas", empty: "c3-empty", text: "c3-text", texts: "c3-texts", gaugeValue: "c3-gauge-value", grid: "c3-grid", gridLines: "c3-grid-lines", xgrid: "c3-xgrid", xgrids: "c3-xgrids", xgridLine: "c3-xgrid-line", xgridLines: "c3-xgrid-lines", xgridFocus: "c3-xgrid-focus", ygrid: "c3-ygrid", ygrids: "c3-ygrids", ygridLine: "c3-ygrid-line", ygridLines: "c3-ygrid-lines", axis: "c3-axis", axisX: "c3-axis-x", axisXLabel: "c3-axis-x-label", axisY: "c3-axis-y", axisYLabel: "c3-axis-y-label", axisY2: "c3-axis-y2", axisY2Label: "c3-axis-y2-label", legendBackground: "c3-legend-background", legendItem: "c3-legend-item", legendItemEvent: "c3-legend-item-event", legendItemTile: "c3-legend-item-tile", legendItemHidden: "c3-legend-item-hidden", legendItemFocused: "c3-legend-item-focused", dragarea: "c3-dragarea", EXPANDED: "_expanded_", SELECTED: "_selected_", INCLUDED: "_included_" },
      o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
    return typeof t === "undefined" ? "undefined" : _typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
  },
      s = function s(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  },
      c = function c(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
  },
      d = function d(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
  },
      l = function l(t) {
    return t || 0 === t;
  },
      u = function u(t) {
    return "function" == typeof t;
  },
      h = function h(t) {
    return Array.isArray(t);
  },
      g = function g(t) {
    return "string" == typeof t;
  },
      f = function f(t) {
    return void 0 === t;
  },
      p = function p(t) {
    return void 0 !== t;
  },
      _ = function _(t) {
    return 10 * Math.ceil(t / 10);
  },
      x = function x(t) {
    return Math.ceil(t) + .5;
  },
      m = function m(t) {
    return t[1] - t[0];
  },
      y = function y(t) {
    return void 0 === t || null === t || g(t) && 0 === t.length || "object" === (void 0 === t ? "undefined" : o(t)) && 0 === Object.keys(t).length;
  },
      S = function S(t) {
    return !C.isEmpty(t);
  },
      w = function w(t, e, i) {
    return void 0 !== t[e] ? t[e] : i;
  },
      v = function v(t, e) {
    var i = !1;return Object.keys(t).forEach(function (n) {
      t[n] === e && (i = !0);
    }), i;
  },
      b = function b(t) {
    return "string" == typeof t ? t.replace(/</g, "&lt;").replace(/>/g, "&gt;") : t;
  },
      T = function T(t) {
    var e = t.getBoundingClientRect(),
        i = [t.pathSegList.getItem(0), t.pathSegList.getItem(1)];return { x: i[0].x, y: Math.min(i[0].y, i[1].y), width: e.width, height: e.height };
  };(a = t.prototype).axisX = function (t, e, i) {
    t.attr("transform", function (t) {
      return "translate(" + Math.ceil(e(t) + i) + ", 0)";
    });
  }, a.axisY = function (t, e) {
    t.attr("transform", function (t) {
      return "translate(0," + Math.ceil(e(t)) + ")";
    });
  }, a.scaleExtent = function (t) {
    var e = t[0],
        i = t[t.length - 1];return e < i ? [e, i] : [i, e];
  }, a.generateTicks = function (t) {
    var e,
        i,
        n = this,
        a = [];if (t.ticks) return t.ticks.apply(t, n.tickArguments);for (i = t.domain(), e = Math.ceil(i[0]); e < i[1]; e++) {
      a.push(e);
    }return a.length > 0 && a[0] > 0 && a.unshift(a[0] - (a[1] - a[0])), a;
  }, a.copyScale = function () {
    var t,
        e = this,
        i = e.scale.copy();return e.params.isCategory && (t = e.scale.domain(), i.domain([t[0], t[1] - 1])), i;
  }, a.textFormatted = function (t) {
    var e = this,
        i = e.tickFormat ? e.tickFormat(t) : t;return void 0 !== i ? i : "";
  }, a.updateRange = function () {
    var t = this;return t.range = t.scale.rangeExtent ? t.scale.rangeExtent() : t.scaleExtent(t.scale.range()), t.range;
  }, a.updateTickTextCharSize = function (t) {
    var e = this;if (e.tickTextCharSize) return e.tickTextCharSize;var i = { h: 11.5, w: 5.5 };return t.select("text").text(function (t) {
      return e.textFormatted(t);
    }).each(function (t) {
      var n = this.getBoundingClientRect(),
          a = e.textFormatted(t),
          r = n.height,
          o = a ? n.width / a.length : void 0;r && o && (i.h = r, i.w = o);
    }).text(""), e.tickTextCharSize = i, i;
  }, a.transitionise = function (t) {
    return this.params.withoutTransition ? t : this.d3.transition(t);
  }, a.isVertical = function () {
    return "left" === this.orient || "right" === this.orient;
  }, a.tspanData = function (t, e, i, n) {
    var a = this,
        r = a.params.tickMultiline ? a.splitTickText(t, i, n) : [].concat(a.textFormatted(t));return r.map(function (t) {
      return { index: e, splitted: t, length: r.length };
    });
  }, a.splitTickText = function (t, e, i) {
    function n(t, e) {
      r = void 0;for (var i = 1; i < e.length; i++) {
        if (" " === e.charAt(i) && (r = i), a = e.substr(0, i + 1), o = s.tickTextCharSize.w * a.length, d < o) return n(t.concat(e.substr(0, r || i)), e.slice(r ? r + 1 : i));
      }return t.concat(e);
    }var a,
        r,
        o,
        s = this,
        c = s.textFormatted(t),
        d = s.params.tickWidth,
        l = [];return "[object Array]" === Object.prototype.toString.call(c) ? c : ((!d || d <= 0) && (d = s.isVertical() ? 95 : s.params.isCategory ? Math.ceil(i(e[1]) - i(e[0])) - 12 : 110), n(l, c + ""));
  }, a.updateTickLength = function () {
    var t = this;t.tickLength = Math.max(t.innerTickSize, 0) + t.tickPadding;
  }, a.lineY2 = function (t) {
    var e = this,
        i = e.scale(t) + (e.tickCentered ? 0 : e.tickOffset);return e.range[0] < i && i < e.range[1] ? e.innerTickSize : 0;
  }, a.textY = function () {
    var t = this,
        e = t.tickTextRotate;return e ? 11.5 - e / 15 * 2.5 * (e > 0 ? 1 : -1) : t.tickLength;
  }, a.textTransform = function () {
    var t = this.tickTextRotate;return t ? "rotate(" + t + ")" : "";
  }, a.textTextAnchor = function () {
    var t = this.tickTextRotate;return t ? t > 0 ? "start" : "end" : "middle";
  }, a.tspanDx = function () {
    var t = this.tickTextRotate;return t ? 8 * Math.sin(Math.PI * (t / 180)) : 0;
  }, a.tspanDy = function (t, e) {
    var i = this,
        n = i.tickTextCharSize.h;return 0 === e && (n = i.isVertical() ? -((t.length - 1) * (i.tickTextCharSize.h / 2) - 3) : ".71em"), n;
  }, a.generateAxis = function () {
    function t(a) {
      a.each(function () {
        var a,
            r,
            o,
            s = t.g = i.select(this),
            c = this.__chart__ || e.scale,
            d = this.__chart__ = e.copyScale(),
            l = e.tickValues ? e.tickValues : e.generateTicks(d),
            u = s.selectAll(".tick").data(l, d),
            h = u.enter().insert("g", ".domain").attr("class", "tick").style("opacity", 1e-6),
            g = u.exit().remove(),
            f = e.transitionise(u).style("opacity", 1);n.isCategory ? (e.tickOffset = Math.ceil((d(1) - d(0)) / 2), r = e.tickCentered ? 0 : e.tickOffset, o = e.tickCentered ? e.tickOffset : 0) : e.tickOffset = r = 0, h.append("line"), h.append("text"), e.updateRange(), e.updateTickLength(), e.updateTickTextCharSize(s.select(".tick"));var p = f.select("line"),
            _ = f.select("text"),
            x = u.select("text").selectAll("tspan").data(function (t, i) {
          return e.tspanData(t, i, l, d);
        });x.enter().append("tspan"), x.exit().remove(), x.text(function (t) {
          return t.splitted;
        });var m = s.selectAll(".domain").data([0]),
            y = (m.enter().append("path").attr("class", "domain"), e.transitionise(m));switch (e.orient) {case "bottom":
            a = e.axisX, p.attr("x1", r).attr("x2", r).attr("y2", function (t, i) {
              return e.lineY2(t, i);
            }), _.attr("x", 0).attr("y", function (t, i) {
              return e.textY(t, i);
            }).attr("transform", function (t, i) {
              return e.textTransform(t, i);
            }).style("text-anchor", function (t, i) {
              return e.textTextAnchor(t, i);
            }), x.attr("x", 0).attr("dy", function (t, i) {
              return e.tspanDy(t, i);
            }).attr("dx", function (t, i) {
              return e.tspanDx(t, i);
            }), y.attr("d", "M" + e.range[0] + "," + e.outerTickSize + "V0H" + e.range[1] + "V" + e.outerTickSize);break;case "top":
            a = e.axisX, p.attr("x2", 0).attr("y2", -e.innerTickSize), _.attr("x", 0).attr("y", -e.tickLength).style("text-anchor", "middle"), x.attr("x", 0).attr("dy", "0em"), y.attr("d", "M" + e.range[0] + "," + -e.outerTickSize + "V0H" + e.range[1] + "V" + -e.outerTickSize);break;case "left":
            a = e.axisY, p.attr("x2", -e.innerTickSize).attr("y1", o).attr("y2", o), _.attr("x", -e.tickLength).attr("y", e.tickOffset).style("text-anchor", "end"), x.attr("x", -e.tickLength).attr("dy", function (t, i) {
              return e.tspanDy(t, i);
            }), y.attr("d", "M" + -e.outerTickSize + "," + e.range[0] + "H0V" + e.range[1] + "H" + -e.outerTickSize);break;case "right":
            a = e.axisY, p.attr("x2", e.innerTickSize).attr("y2", 0), _.attr("x", e.tickLength).attr("y", 0).style("text-anchor", "start"), x.attr("x", e.tickLength).attr("dy", function (t, i) {
              return e.tspanDy(t, i);
            }), y.attr("d", "M" + e.outerTickSize + "," + e.range[0] + "H0V" + e.range[1] + "H" + e.outerTickSize);}if (d.rangeBand) {
          var S = d,
              w = S.rangeBand() / 2;c = d = function d(t) {
            return S(t) + w;
          };
        } else c.rangeBand ? c = d : g.call(a, d, e.tickOffset);h.call(a, c, e.tickOffset), f.call(a, d, e.tickOffset);
      });
    }var e = this,
        i = e.d3,
        n = e.params;return t.scale = function (i) {
      return arguments.length ? (e.scale = i, t) : e.scale;
    }, t.orient = function (i) {
      return arguments.length ? (e.orient = i in { top: 1, right: 1, bottom: 1, left: 1 } ? i + "" : "bottom", t) : e.orient;
    }, t.tickFormat = function (i) {
      return arguments.length ? (e.tickFormat = i, t) : e.tickFormat;
    }, t.tickCentered = function (i) {
      return arguments.length ? (e.tickCentered = i, t) : e.tickCentered;
    }, t.tickOffset = function () {
      return e.tickOffset;
    }, t.tickInterval = function () {
      var i;return i = n.isCategory ? 2 * e.tickOffset : (t.g.select("path.domain").node().getTotalLength() - 2 * e.outerTickSize) / t.g.selectAll("line").size(), i === 1 / 0 ? 0 : i;
    }, t.ticks = function () {
      return arguments.length ? (e.tickArguments = arguments, t) : e.tickArguments;
    }, t.tickCulling = function (i) {
      return arguments.length ? (e.tickCulling = i, t) : e.tickCulling;
    }, t.tickValues = function (i) {
      if ("function" == typeof i) e.tickValues = function () {
        return i(e.scale.domain());
      };else {
        if (!arguments.length) return e.tickValues;e.tickValues = i;
      }return t;
    }, t;
  };var A = function (e) {
    function i(e) {
      s(this, i);var r = { fn: n, internal: { fn: a } },
          o = d(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, e, "axis", r));return o.d3 = e.d3, o.internal = t, o;
    }return c(i, e), i;
  }(function (t, e, i) {
    this.owner = t, L.chart.internal[e] = i;
  });(n = A.prototype).init = function () {
    var t = this.owner,
        e = t.config,
        i = t.main;t.axes.x = i.append("g").attr("class", r.axis + " " + r.axisX).attr("clip-path", t.clipPathForXAxis).attr("transform", t.getTranslate("x")).style("visibility", e.axis_x_show ? "visible" : "hidden"), t.axes.x.append("text").attr("class", r.axisXLabel).attr("transform", e.axis_rotated ? "rotate(-90)" : "").style("text-anchor", this.textAnchorForXAxisLabel.bind(this)), t.axes.y = i.append("g").attr("class", r.axis + " " + r.axisY).attr("clip-path", e.axis_y_inner ? "" : t.clipPathForYAxis).attr("transform", t.getTranslate("y")).style("visibility", e.axis_y_show ? "visible" : "hidden"), t.axes.y.append("text").attr("class", r.axisYLabel).attr("transform", e.axis_rotated ? "" : "rotate(-90)").style("text-anchor", this.textAnchorForYAxisLabel.bind(this)), t.axes.y2 = i.append("g").attr("class", r.axis + " " + r.axisY2).attr("transform", t.getTranslate("y2")).style("visibility", e.axis_y2_show ? "visible" : "hidden"), t.axes.y2.append("text").attr("class", r.axisY2Label).attr("transform", e.axis_rotated ? "" : "rotate(-90)").style("text-anchor", this.textAnchorForY2AxisLabel.bind(this));
  }, n.getXAxis = function (t, e, i, n, a, r, o) {
    var s = this.owner,
        c = s.config,
        d = { isCategory: s.isCategorized(), withOuterTick: a, tickMultiline: c.axis_x_tick_multiline, tickWidth: c.axis_x_tick_width, tickTextRotate: o ? 0 : c.axis_x_tick_rotate, withoutTransition: r },
        l = new this.internal(this, d).axis.scale(t).orient(e);return s.isTimeSeries() && n && "function" != typeof n && (n = n.map(function (t) {
      return s.parseDate(t);
    })), l.tickFormat(i).tickValues(n), s.isCategorized() && (l.tickCentered(c.axis_x_tick_centered), y(c.axis_x_tick_culling) && (c.axis_x_tick_culling = !1)), l;
  }, n.updateXAxisTickValues = function (t, e) {
    var i,
        n = this.owner,
        a = n.config;return (a.axis_x_tick_fit || a.axis_x_tick_count) && (i = this.generateTickValues(n.mapTargetsToUniqueXs(t), a.axis_x_tick_count, n.isTimeSeries())), e ? e.tickValues(i) : (n.xAxis.tickValues(i), n.subXAxis.tickValues(i)), i;
  }, n.getYAxis = function (t, e, i, n, a, r, o) {
    var s = this.owner,
        c = s.config,
        d = { withOuterTick: a, withoutTransition: r, tickTextRotate: o ? 0 : c.axis_y_tick_rotate },
        l = new this.internal(this, d).axis.scale(t).orient(e).tickFormat(i);return s.isTimeSeriesY() ? l.ticks(s.d3.time[c.axis_y_tick_time_value], c.axis_y_tick_time_interval) : l.tickValues(n), l;
  }, n.getId = function (t) {
    var e = this.owner.config;return t in e.data_axes ? e.data_axes[t] : "y";
  }, n.getXAxisTickFormat = function () {
    var t = this.owner,
        e = t.config,
        i = t.isTimeSeries() ? t.defaultAxisTimeFormat : t.isCategorized() ? t.categoryName : function (t) {
      return t < 0 ? t.toFixed(0) : t;
    };return e.axis_x_tick_format && (u(e.axis_x_tick_format) ? i = e.axis_x_tick_format : t.isTimeSeries() && (i = function i(_i2) {
      return _i2 ? t.axisTimeFormat(e.axis_x_tick_format)(_i2) : "";
    })), u(i) ? function (e) {
      return i.call(t, e);
    } : i;
  }, n.getTickValues = function (t, e) {
    return t || (e ? e.tickValues() : void 0);
  }, n.getXAxisTickValues = function () {
    return this.getTickValues(this.owner.config.axis_x_tick_values, this.owner.xAxis);
  }, n.getYAxisTickValues = function () {
    return this.getTickValues(this.owner.config.axis_y_tick_values, this.owner.yAxis);
  }, n.getY2AxisTickValues = function () {
    return this.getTickValues(this.owner.config.axis_y2_tick_values, this.owner.y2Axis);
  }, n.getLabelOptionByAxisId = function (t) {
    var e,
        i = this.owner.config;return "y" === t ? e = i.axis_y_label : "y2" === t ? e = i.axis_y2_label : "x" === t && (e = i.axis_x_label), e;
  }, n.getLabelText = function (t) {
    var e = this.getLabelOptionByAxisId(t);return g(e) ? e : e ? e.text : null;
  }, n.setLabelText = function (t, e) {
    var i = this.owner.config,
        n = this.getLabelOptionByAxisId(t);g(n) ? "y" === t ? i.axis_y_label = e : "y2" === t ? i.axis_y2_label = e : "x" === t && (i.axis_x_label = e) : n && (n.text = e);
  }, n.getLabelPosition = function (t, e) {
    var i = this.getLabelOptionByAxisId(t),
        n = i && "object" === (void 0 === i ? "undefined" : o(i)) && i.position ? i.position : e;return { isInner: n.indexOf("inner") >= 0, isOuter: n.indexOf("outer") >= 0, isLeft: n.indexOf("left") >= 0, isCenter: n.indexOf("center") >= 0, isRight: n.indexOf("right") >= 0, isTop: n.indexOf("top") >= 0, isMiddle: n.indexOf("middle") >= 0, isBottom: n.indexOf("bottom") >= 0 };
  }, n.getXAxisLabelPosition = function () {
    return this.getLabelPosition("x", this.owner.config.axis_rotated ? "inner-top" : "inner-right");
  }, n.getYAxisLabelPosition = function () {
    return this.getLabelPosition("y", this.owner.config.axis_rotated ? "inner-right" : "inner-top");
  }, n.getY2AxisLabelPosition = function () {
    return this.getLabelPosition("y2", this.owner.config.axis_rotated ? "inner-right" : "inner-top");
  }, n.getLabelPositionById = function (t) {
    return "y2" === t ? this.getY2AxisLabelPosition() : "y" === t ? this.getYAxisLabelPosition() : this.getXAxisLabelPosition();
  }, n.textForXAxisLabel = function () {
    return this.getLabelText("x");
  }, n.textForYAxisLabel = function () {
    return this.getLabelText("y");
  }, n.textForY2AxisLabel = function () {
    return this.getLabelText("y2");
  }, n.xForAxisLabel = function (t, e) {
    var i = this.owner;return t ? e.isLeft ? 0 : e.isCenter ? i.width / 2 : i.width : e.isBottom ? -i.height : e.isMiddle ? -i.height / 2 : 0;
  }, n.dxForAxisLabel = function (t, e) {
    return t ? e.isLeft ? "0.5em" : e.isRight ? "-0.5em" : "0" : e.isTop ? "-0.5em" : e.isBottom ? "0.5em" : "0";
  }, n.textAnchorForAxisLabel = function (t, e) {
    return t ? e.isLeft ? "start" : e.isCenter ? "middle" : "end" : e.isBottom ? "start" : e.isMiddle ? "middle" : "end";
  }, n.xForXAxisLabel = function () {
    return this.xForAxisLabel(!this.owner.config.axis_rotated, this.getXAxisLabelPosition());
  }, n.xForYAxisLabel = function () {
    return this.xForAxisLabel(this.owner.config.axis_rotated, this.getYAxisLabelPosition());
  }, n.xForY2AxisLabel = function () {
    return this.xForAxisLabel(this.owner.config.axis_rotated, this.getY2AxisLabelPosition());
  }, n.dxForXAxisLabel = function () {
    return this.dxForAxisLabel(!this.owner.config.axis_rotated, this.getXAxisLabelPosition());
  }, n.dxForYAxisLabel = function () {
    return this.dxForAxisLabel(this.owner.config.axis_rotated, this.getYAxisLabelPosition());
  }, n.dxForY2AxisLabel = function () {
    return this.dxForAxisLabel(this.owner.config.axis_rotated, this.getY2AxisLabelPosition());
  }, n.dyForXAxisLabel = function () {
    var t = this.owner.config,
        e = this.getXAxisLabelPosition();return t.axis_rotated ? e.isInner ? "1.2em" : -25 - this.getMaxTickWidth("x") : e.isInner ? "-0.5em" : t.axis_x_height ? t.axis_x_height - 10 : "3em";
  }, n.dyForYAxisLabel = function () {
    var t = this.owner,
        e = this.getYAxisLabelPosition();return t.config.axis_rotated ? e.isInner ? "-0.5em" : "3em" : e.isInner ? "1.2em" : -10 - (t.config.axis_y_inner ? 0 : this.getMaxTickWidth("y") + 10);
  }, n.dyForY2AxisLabel = function () {
    var t = this.owner,
        e = this.getY2AxisLabelPosition();return t.config.axis_rotated ? e.isInner ? "1.2em" : "-2.2em" : e.isInner ? "-0.5em" : 15 + (t.config.axis_y2_inner ? 0 : this.getMaxTickWidth("y2") + 15);
  }, n.textAnchorForXAxisLabel = function () {
    var t = this.owner;return this.textAnchorForAxisLabel(!t.config.axis_rotated, this.getXAxisLabelPosition());
  }, n.textAnchorForYAxisLabel = function () {
    var t = this.owner;return this.textAnchorForAxisLabel(t.config.axis_rotated, this.getYAxisLabelPosition());
  }, n.textAnchorForY2AxisLabel = function () {
    var t = this.owner;return this.textAnchorForAxisLabel(t.config.axis_rotated, this.getY2AxisLabelPosition());
  }, n.getMaxTickWidth = function (t, e) {
    var i,
        n,
        a,
        r,
        o = this.owner,
        s = o.config,
        c = 0;return e && o.currentMaxTickWidths[t] ? o.currentMaxTickWidths[t] : (o.svg && (i = o.filterTargetsToShow(o.data.targets), "y" === t ? (n = o.y.copy().domain(o.getYDomain(i, "y")), a = this.getYAxis(n, o.yOrient, s.axis_y_tick_format, o.yAxisTickValues, !1, !0, !0)) : "y2" === t ? (n = o.y2.copy().domain(o.getYDomain(i, "y2")), a = this.getYAxis(n, o.y2Orient, s.axis_y2_tick_format, o.y2AxisTickValues, !1, !0, !0)) : (n = o.x.copy().domain(o.getXDomain(i)), a = this.getXAxis(n, o.xOrient, o.xAxisTickFormat, o.xAxisTickValues, !1, !0, !0), this.updateXAxisTickValues(i, a)), (r = o.d3.select("body").append("div").classed("c3", !0)).append("svg").style("visibility", "hidden").style("position", "fixed").style("top", 0).style("left", 0).append("g").call(a).each(function () {
      o.d3.select(this).selectAll("text").each(function () {
        var t = this.getBoundingClientRect();c < t.width && (c = t.width);
      }), r.remove();
    })), o.currentMaxTickWidths[t] = c <= 0 ? o.currentMaxTickWidths[t] : c, o.currentMaxTickWidths[t]);
  }, n.updateLabels = function (t) {
    var e = this.owner,
        i = e.main.select("." + r.axisX + " ." + r.axisXLabel),
        n = e.main.select("." + r.axisY + " ." + r.axisYLabel),
        a = e.main.select("." + r.axisY2 + " ." + r.axisY2Label);(t ? i.transition() : i).attr("x", this.xForXAxisLabel.bind(this)).attr("dx", this.dxForXAxisLabel.bind(this)).attr("dy", this.dyForXAxisLabel.bind(this)).text(this.textForXAxisLabel.bind(this)), (t ? n.transition() : n).attr("x", this.xForYAxisLabel.bind(this)).attr("dx", this.dxForYAxisLabel.bind(this)).attr("dy", this.dyForYAxisLabel.bind(this)).text(this.textForYAxisLabel.bind(this)), (t ? a.transition() : a).attr("x", this.xForY2AxisLabel.bind(this)).attr("dx", this.dxForY2AxisLabel.bind(this)).attr("dy", this.dyForY2AxisLabel.bind(this)).text(this.textForY2AxisLabel.bind(this));
  }, n.getPadding = function (t, e, i, n) {
    var a = "number" == typeof t ? t : t[e];return l(a) ? "ratio" === t.unit ? t[e] * n : this.convertPixelsToAxisPadding(a, n) : i;
  }, n.convertPixelsToAxisPadding = function (t, e) {
    var i = this.owner;return e * (t / (i.config.axis_rotated ? i.width : i.height));
  }, n.generateTickValues = function (t, e, i) {
    var n,
        a,
        r,
        o,
        s,
        c,
        d,
        l = t;if (e) if (1 === (n = u(e) ? e() : e)) l = [t[0]];else if (2 === n) l = [t[0], t[t.length - 1]];else if (n > 2) {
      for (o = n - 2, a = t[0], s = ((r = t[t.length - 1]) - a) / (o + 1), l = [a], c = 0; c < o; c++) {
        d = +a + s * (c + 1), l.push(i ? new Date(d) : d);
      }l.push(r);
    }return i || (l = l.sort(function (t, e) {
      return t - e;
    })), l;
  }, n.generateTransitions = function (t) {
    var e = this.owner.axes;return { axisX: t ? e.x.transition().duration(t) : e.x, axisY: t ? e.y.transition().duration(t) : e.y, axisY2: t ? e.y2.transition().duration(t) : e.y2, axisSubX: t ? e.subx.transition().duration(t) : e.subx };
  }, n.redraw = function (t, e) {
    var i = this.owner;i.axes.x.style("opacity", e ? 0 : 1), i.axes.y.style("opacity", e ? 0 : 1), i.axes.y2.style("opacity", e ? 0 : 1), i.axes.subx.style("opacity", e ? 0 : 1), t.axisX.call(i.xAxis), t.axisY.call(i.yAxis), t.axisY2.call(i.y2Axis), t.axisSubX.call(i.subXAxis);
  };var P,
      C,
      L = { version: "0.4.18" };return L.generate = function (t) {
    return new e(t);
  }, L.chart = { fn: e.prototype, internal: { fn: i.prototype } }, P = L.chart.fn, C = L.chart.internal.fn, C.beforeInit = function () {}, C.afterInit = function () {}, C.init = function () {
    var t = this,
        e = t.config;if (t.initParams(), e.data_url) t.convertUrlToData(e.data_url, e.data_mimeType, e.data_headers, e.data_keys, t.initWithData);else if (e.data_json) t.initWithData(t.convertJsonToData(e.data_json, e.data_keys));else if (e.data_rows) t.initWithData(t.convertRowsToData(e.data_rows));else {
      if (!e.data_columns) throw Error("url or json or rows or columns is required.");t.initWithData(t.convertColumnsToData(e.data_columns));
    }
  }, C.initParams = function () {
    var t = this,
        e = t.d3,
        i = t.config;t.clipId = "c3-" + +new Date() + "-clip", t.clipIdForXAxis = t.clipId + "-xaxis", t.clipIdForYAxis = t.clipId + "-yaxis", t.clipIdForGrid = t.clipId + "-grid", t.clipIdForSubchart = t.clipId + "-subchart", t.clipPath = t.getClipPath(t.clipId), t.clipPathForXAxis = t.getClipPath(t.clipIdForXAxis), t.clipPathForYAxis = t.getClipPath(t.clipIdForYAxis), t.clipPathForGrid = t.getClipPath(t.clipIdForGrid), t.clipPathForSubchart = t.getClipPath(t.clipIdForSubchart), t.dragStart = null, t.dragging = !1, t.flowing = !1, t.cancelClick = !1, t.mouseover = !1, t.transiting = !1, t.color = t.generateColor(), t.levelColor = t.generateLevelColor(), t.dataTimeFormat = i.data_xLocaltime ? e.time.format : e.time.format.utc, t.axisTimeFormat = i.axis_x_localtime ? e.time.format : e.time.format.utc, t.defaultAxisTimeFormat = t.axisTimeFormat.multi([[".%L", function (t) {
      return t.getMilliseconds();
    }], [":%S", function (t) {
      return t.getSeconds();
    }], ["%I:%M", function (t) {
      return t.getMinutes();
    }], ["%I %p", function (t) {
      return t.getHours();
    }], ["%-m/%-d", function (t) {
      return t.getDay() && 1 !== t.getDate();
    }], ["%-m/%-d", function (t) {
      return 1 !== t.getDate();
    }], ["%-m/%-d", function (t) {
      return t.getMonth();
    }], ["%Y/%-m/%-d", function () {
      return !0;
    }]]), t.hiddenTargetIds = [], t.hiddenLegendIds = [], t.focusedTargetIds = [], t.defocusedTargetIds = [], t.xOrient = i.axis_rotated ? "left" : "bottom", t.yOrient = i.axis_rotated ? i.axis_y_inner ? "top" : "bottom" : i.axis_y_inner ? "right" : "left", t.y2Orient = i.axis_rotated ? i.axis_y2_inner ? "bottom" : "top" : i.axis_y2_inner ? "left" : "right", t.subXOrient = i.axis_rotated ? "left" : "bottom", t.isLegendRight = "right" === i.legend_position, t.isLegendInset = "inset" === i.legend_position, t.isLegendTop = "top-left" === i.legend_inset_anchor || "top-right" === i.legend_inset_anchor, t.isLegendLeft = "top-left" === i.legend_inset_anchor || "bottom-left" === i.legend_inset_anchor, t.legendStep = 0, t.legendItemWidth = 0, t.legendItemHeight = 0, t.currentMaxTickWidths = { x: 0, y: 0, y2: 0 }, t.rotated_padding_left = 30, t.rotated_padding_right = i.axis_rotated && !i.axis_x_show ? 0 : 30, t.rotated_padding_top = 5, t.withoutFadeIn = {}, t.intervalForObserveInserted = void 0, t.axes.subx = e.selectAll([]);
  }, C.initChartElements = function () {
    this.initBar && this.initBar(), this.initLine && this.initLine(), this.initArc && this.initArc(), this.initGauge && this.initGauge(), this.initText && this.initText();
  }, C.initWithData = function (t) {
    var e,
        i,
        n = this,
        a = n.d3,
        o = n.config,
        s = !0;n.axis = new A(n), n.initPie && n.initPie(), n.initBrush && n.initBrush(), n.initZoom && n.initZoom(), o.bindto ? "function" == typeof o.bindto.node ? n.selectChart = o.bindto : n.selectChart = a.select(o.bindto) : n.selectChart = a.selectAll([]), n.selectChart.empty() && (n.selectChart = a.select(document.createElement("div")).style("opacity", 0), n.observeInserted(n.selectChart), s = !1), n.selectChart.html("").classed("c3", !0), n.data.xs = {}, n.data.targets = n.convertDataToTargets(t), o.data_filter && (n.data.targets = n.data.targets.filter(o.data_filter)), o.data_hide && n.addHiddenTargetIds(!0 === o.data_hide ? n.mapToIds(n.data.targets) : o.data_hide), o.legend_hide && n.addHiddenLegendIds(!0 === o.legend_hide ? n.mapToIds(n.data.targets) : o.legend_hide), n.hasType("gauge") && (o.legend_show = !1), n.updateSizes(), n.updateScales(), n.x.domain(a.extent(n.getXDomain(n.data.targets))), n.y.domain(n.getYDomain(n.data.targets, "y")), n.y2.domain(n.getYDomain(n.data.targets, "y2")), n.subX.domain(n.x.domain()), n.subY.domain(n.y.domain()), n.subY2.domain(n.y2.domain()), n.orgXDomain = n.x.domain(), n.brush && n.brush.scale(n.subX), o.zoom_enabled && n.zoom.scale(n.x), n.svg = n.selectChart.append("svg").style("overflow", "hidden").on("mouseenter", function () {
      return o.onmouseover.call(n);
    }).on("mouseleave", function () {
      return o.onmouseout.call(n);
    }), n.config.svg_classname && n.svg.attr("class", n.config.svg_classname), e = n.svg.append("defs"), n.clipChart = n.appendClip(e, n.clipId), n.clipXAxis = n.appendClip(e, n.clipIdForXAxis), n.clipYAxis = n.appendClip(e, n.clipIdForYAxis), n.clipGrid = n.appendClip(e, n.clipIdForGrid), n.clipSubchart = n.appendClip(e, n.clipIdForSubchart), n.updateSvgSize(), i = n.main = n.svg.append("g").attr("transform", n.getTranslate("main")), n.initSubchart && n.initSubchart(), n.initTooltip && n.initTooltip(), n.initLegend && n.initLegend(), n.initTitle && n.initTitle(), i.append("text").attr("class", r.text + " " + r.empty).attr("text-anchor", "middle").attr("dominant-baseline", "middle"), n.initRegion(), n.initGrid(), i.append("g").attr("clip-path", n.clipPath).attr("class", r.chart), o.grid_lines_front && n.initGridLines(), n.initEventRect(), n.initChartElements(), i.insert("rect", o.zoom_privileged ? null : "g." + r.regions).attr("class", r.zoomRect).attr("width", n.width).attr("height", n.height).style("opacity", 0).on("dblclick.zoom", null), o.axis_x_extent && n.brush.extent(n.getDefaultExtent()), n.axis.init(), n.updateTargets(n.data.targets), s && (n.updateDimension(), n.config.oninit.call(n), n.redraw({ withTransition: !1, withTransform: !0, withUpdateXDomain: !0, withUpdateOrgXDomain: !0, withTransitionForAxis: !1 })), n.bindResize(), n.api.element = n.selectChart.node();
  }, C.smoothLines = function (t, e) {
    var i = this;"grid" === e && t.each(function () {
      var t = i.d3.select(this),
          e = t.attr("x1"),
          n = t.attr("x2"),
          a = t.attr("y1"),
          r = t.attr("y2");t.attr({ x1: Math.ceil(e), x2: Math.ceil(n), y1: Math.ceil(a), y2: Math.ceil(r) });
    });
  }, C.updateSizes = function () {
    var t = this,
        e = t.config,
        i = t.legend ? t.getLegendHeight() : 0,
        n = t.legend ? t.getLegendWidth() : 0,
        a = t.isLegendRight || t.isLegendInset ? 0 : i,
        r = t.hasArcType(),
        o = e.axis_rotated || r ? 0 : t.getHorizontalAxisHeight("x"),
        s = e.subchart_show && !r ? e.subchart_size_height + o : 0;t.currentWidth = t.getCurrentWidth(), t.currentHeight = t.getCurrentHeight(), t.margin = e.axis_rotated ? { top: t.getHorizontalAxisHeight("y2") + t.getCurrentPaddingTop(), right: r ? 0 : t.getCurrentPaddingRight(), bottom: t.getHorizontalAxisHeight("y") + a + t.getCurrentPaddingBottom(), left: s + (r ? 0 : t.getCurrentPaddingLeft()) } : { top: 4 + t.getCurrentPaddingTop(), right: r ? 0 : t.getCurrentPaddingRight(), bottom: o + s + a + t.getCurrentPaddingBottom(), left: r ? 0 : t.getCurrentPaddingLeft() }, t.margin2 = e.axis_rotated ? { top: t.margin.top, right: NaN, bottom: 20 + a, left: t.rotated_padding_left } : { top: t.currentHeight - s - a, right: NaN, bottom: o + a, left: t.margin.left }, t.margin3 = { top: 0, right: NaN, bottom: 0, left: 0 }, t.updateSizeForLegend && t.updateSizeForLegend(i, n), t.width = t.currentWidth - t.margin.left - t.margin.right, t.height = t.currentHeight - t.margin.top - t.margin.bottom, t.width < 0 && (t.width = 0), t.height < 0 && (t.height = 0), t.width2 = e.axis_rotated ? t.margin.left - t.rotated_padding_left - t.rotated_padding_right : t.width, t.height2 = e.axis_rotated ? t.height : t.currentHeight - t.margin2.top - t.margin2.bottom, t.width2 < 0 && (t.width2 = 0), t.height2 < 0 && (t.height2 = 0), t.arcWidth = t.width - (t.isLegendRight ? n + 10 : 0), t.arcHeight = t.height - (t.isLegendRight ? 0 : 10), t.hasType("gauge") && !e.gauge_fullCircle && (t.arcHeight += t.height - t.getGaugeLabelHeight()), t.updateRadius && t.updateRadius(), t.isLegendRight && r && (t.margin3.left = t.arcWidth / 2 + 1.1 * t.radiusExpanded);
  }, C.updateTargets = function (t) {
    var e = this;e.updateTargetsForText(t), e.updateTargetsForBar(t), e.updateTargetsForLine(t), e.hasArcType() && e.updateTargetsForArc && e.updateTargetsForArc(t), e.updateTargetsForSubchart && e.updateTargetsForSubchart(t), e.showTargets();
  }, C.showTargets = function () {
    var t = this;t.svg.selectAll("." + r.target).filter(function (e) {
      return t.isTargetToShow(e.id);
    }).transition().duration(t.config.transition_duration).style("opacity", 1);
  }, C.redraw = function (t, e) {
    var i,
        n,
        a,
        o,
        s,
        c,
        d,
        l,
        u,
        h,
        g,
        f,
        p,
        _,
        x,
        m,
        y,
        S,
        v,
        b,
        T,
        A,
        P,
        C,
        L,
        V,
        G,
        E,
        O,
        I = this,
        R = I.main,
        k = I.d3,
        D = I.config,
        F = I.getShapeIndices(I.isAreaType),
        X = I.getShapeIndices(I.isBarType),
        M = I.getShapeIndices(I.isLineType),
        z = I.hasArcType(),
        H = I.filterTargetsToShow(I.data.targets),
        B = I.xv.bind(I);if (t = t || {}, i = w(t, "withY", !0), n = w(t, "withSubchart", !0), a = w(t, "withTransition", !0), c = w(t, "withTransform", !1), d = w(t, "withUpdateXDomain", !1), l = w(t, "withUpdateOrgXDomain", !1), u = w(t, "withTrimXDomain", !0), p = w(t, "withUpdateXAxis", d), h = w(t, "withLegend", !1), g = w(t, "withEventRect", !0), f = w(t, "withDimension", !0), o = w(t, "withTransitionForExit", a), s = w(t, "withTransitionForAxis", a), v = a ? D.transition_duration : 0, b = o ? v : 0, T = s ? v : 0, e = e || I.axis.generateTransitions(T), h && D.legend_show ? I.updateLegend(I.mapToIds(I.data.targets), t, e) : f && I.updateDimension(!0), I.isCategorized() && 0 === H.length && I.x.domain([0, I.axes.x.selectAll(".tick").size()]), H.length ? (I.updateXDomain(H, d, l, u), D.axis_x_tick_values || (C = I.axis.updateXAxisTickValues(H))) : (I.xAxis.tickValues([]), I.subXAxis.tickValues([])), D.zoom_rescale && !t.flow && (G = I.x.orgDomain()), I.y.domain(I.getYDomain(H, "y", G)), I.y2.domain(I.getYDomain(H, "y2", G)), !D.axis_y_tick_values && D.axis_y_tick_count && I.yAxis.tickValues(I.axis.generateTickValues(I.y.domain(), D.axis_y_tick_count)), !D.axis_y2_tick_values && D.axis_y2_tick_count && I.y2Axis.tickValues(I.axis.generateTickValues(I.y2.domain(), D.axis_y2_tick_count)), I.axis.redraw(e, z), I.axis.updateLabels(a), (d || p) && H.length) if (D.axis_x_tick_culling && C) {
      for (L = 1; L < C.length; L++) {
        if (C.length / L < D.axis_x_tick_culling_max) {
          V = L;break;
        }
      }I.svg.selectAll("." + r.axisX + " .tick text").each(function (t) {
        var e = C.indexOf(t);e >= 0 && k.select(this).style("display", e % V ? "none" : "block");
      });
    } else I.svg.selectAll("." + r.axisX + " .tick text").style("display", "block");_ = I.generateDrawArea ? I.generateDrawArea(F, !1) : void 0, x = I.generateDrawBar ? I.generateDrawBar(X) : void 0, m = I.generateDrawLine ? I.generateDrawLine(M, !1) : void 0, y = I.generateXYForText(F, X, M, !0), S = I.generateXYForText(F, X, M, !1), i && (I.subY.domain(I.getYDomain(H, "y")), I.subY2.domain(I.getYDomain(H, "y2"))), I.updateXgridFocus(), R.select("text." + r.text + "." + r.empty).attr("x", I.width / 2).attr("y", I.height / 2).text(D.data_empty_label_text).transition().style("opacity", H.length ? 0 : 1), I.updateGrid(v), I.updateRegion(v), I.updateBar(b), I.updateLine(b), I.updateArea(b), I.updateCircle(), I.hasDataLabel() && I.updateText(b), I.redrawTitle && I.redrawTitle(), I.redrawArc && I.redrawArc(v, b, c), I.redrawSubchart && I.redrawSubchart(n, e, v, b, F, X, M), R.selectAll("." + r.selectedCircles).filter(I.isBarType.bind(I)).selectAll("circle").remove(), D.interaction_enabled && !t.flow && g && (I.redrawEventRect(), I.updateZoom && I.updateZoom()), I.updateCircleY(), E = (I.config.axis_rotated ? I.circleY : I.circleX).bind(I), O = (I.config.axis_rotated ? I.circleX : I.circleY).bind(I), t.flow && (P = I.generateFlow({ targets: H, flow: t.flow, duration: t.flow.duration, drawBar: x, drawLine: m, drawArea: _, cx: E, cy: O, xv: B, xForText: y, yForText: S })), (v || P) && I.isTabVisible() ? k.transition().duration(v).each(function () {
      var e = [];[I.redrawBar(x, !0), I.redrawLine(m, !0), I.redrawArea(_, !0), I.redrawCircle(E, O, !0), I.redrawText(y, S, t.flow, !0), I.redrawRegion(!0), I.redrawGrid(!0)].forEach(function (t) {
        t.forEach(function (t) {
          e.push(t);
        });
      }), A = I.generateWait(), e.forEach(function (t) {
        A.add(t);
      });
    }).call(A, function () {
      P && P(), D.onrendered && D.onrendered.call(I);
    }) : (I.redrawBar(x), I.redrawLine(m), I.redrawArea(_), I.redrawCircle(E, O), I.redrawText(y, S, t.flow), I.redrawRegion(), I.redrawGrid(), D.onrendered && D.onrendered.call(I)), I.mapToIds(I.data.targets).forEach(function (t) {
      I.withoutFadeIn[t] = !0;
    });
  }, C.updateAndRedraw = function (t) {
    var e,
        i = this,
        n = i.config;(t = t || {}).withTransition = w(t, "withTransition", !0), t.withTransform = w(t, "withTransform", !1), t.withLegend = w(t, "withLegend", !1), t.withUpdateXDomain = !0, t.withUpdateOrgXDomain = !0, t.withTransitionForExit = !1, t.withTransitionForTransform = w(t, "withTransitionForTransform", t.withTransition), i.updateSizes(), t.withLegend && n.legend_show || (e = i.axis.generateTransitions(t.withTransitionForAxis ? n.transition_duration : 0), i.updateScales(), i.updateSvgSize(), i.transformAll(t.withTransitionForTransform, e)), i.redraw(t, e);
  }, C.redrawWithoutRescale = function () {
    this.redraw({ withY: !1, withSubchart: !1, withEventRect: !1, withTransitionForAxis: !1 });
  }, C.isTimeSeries = function () {
    return "timeseries" === this.config.axis_x_type;
  }, C.isCategorized = function () {
    return this.config.axis_x_type.indexOf("categor") >= 0;
  }, C.isCustomX = function () {
    var t = this,
        e = t.config;return !t.isTimeSeries() && (e.data_x || S(e.data_xs));
  }, C.isTimeSeriesY = function () {
    return "timeseries" === this.config.axis_y_type;
  }, C.getTranslate = function (t) {
    var e,
        i,
        n = this,
        a = n.config;return "main" === t ? (e = x(n.margin.left), i = x(n.margin.top)) : "context" === t ? (e = x(n.margin2.left), i = x(n.margin2.top)) : "legend" === t ? (e = n.margin3.left, i = n.margin3.top) : "x" === t ? (e = 0, i = a.axis_rotated ? 0 : n.height) : "y" === t ? (e = 0, i = a.axis_rotated ? n.height : 0) : "y2" === t ? (e = a.axis_rotated ? 0 : n.width, i = a.axis_rotated ? 1 : 0) : "subx" === t ? (e = 0, i = a.axis_rotated ? 0 : n.height2) : "arc" === t && (e = n.arcWidth / 2, i = n.arcHeight / 2), "translate(" + e + "," + i + ")";
  }, C.initialOpacity = function (t) {
    return null !== t.value && this.withoutFadeIn[t.id] ? 1 : 0;
  }, C.initialOpacityForCircle = function (t) {
    return null !== t.value && this.withoutFadeIn[t.id] ? this.opacityForCircle(t) : 0;
  }, C.opacityForCircle = function (t) {
    var e = (u(this.config.point_show) ? this.config.point_show(t) : this.config.point_show) ? 1 : 0;return l(t.value) ? this.isScatterType(t) ? .5 : e : 0;
  }, C.opacityForText = function () {
    return this.hasDataLabel() ? 1 : 0;
  }, C.xx = function (t) {
    return t ? this.x(t.x) : null;
  }, C.xv = function (t) {
    var e = this,
        i = t.value;return e.isTimeSeries() ? i = e.parseDate(t.value) : e.isCategorized() && "string" == typeof t.value && (i = e.config.axis_x_categories.indexOf(t.value)), Math.ceil(e.x(i));
  }, C.yv = function (t) {
    var e = this,
        i = t.axis && "y2" === t.axis ? e.y2 : e.y;return Math.ceil(i(t.value));
  }, C.subxx = function (t) {
    return t ? this.subX(t.x) : null;
  }, C.transformMain = function (t, e) {
    var i,
        n,
        a,
        o = this;e && e.axisX ? i = e.axisX : (i = o.main.select("." + r.axisX), t && (i = i.transition())), e && e.axisY ? n = e.axisY : (n = o.main.select("." + r.axisY), t && (n = n.transition())), e && e.axisY2 ? a = e.axisY2 : (a = o.main.select("." + r.axisY2), t && (a = a.transition())), (t ? o.main.transition() : o.main).attr("transform", o.getTranslate("main")), i.attr("transform", o.getTranslate("x")), n.attr("transform", o.getTranslate("y")), a.attr("transform", o.getTranslate("y2")), o.main.select("." + r.chartArcs).attr("transform", o.getTranslate("arc"));
  }, C.transformAll = function (t, e) {
    var i = this;i.transformMain(t, e), i.config.subchart_show && i.transformContext(t, e), i.legend && i.transformLegend(t);
  }, C.updateSvgSize = function () {
    var t = this,
        e = t.svg.select(".c3-brush .background");t.svg.attr("width", t.currentWidth).attr("height", t.currentHeight), t.svg.selectAll(["#" + t.clipId, "#" + t.clipIdForGrid]).select("rect").attr("width", t.width).attr("height", t.height), t.svg.select("#" + t.clipIdForXAxis).select("rect").attr("x", t.getXAxisClipX.bind(t)).attr("y", t.getXAxisClipY.bind(t)).attr("width", t.getXAxisClipWidth.bind(t)).attr("height", t.getXAxisClipHeight.bind(t)), t.svg.select("#" + t.clipIdForYAxis).select("rect").attr("x", t.getYAxisClipX.bind(t)).attr("y", t.getYAxisClipY.bind(t)).attr("width", t.getYAxisClipWidth.bind(t)).attr("height", t.getYAxisClipHeight.bind(t)), t.svg.select("#" + t.clipIdForSubchart).select("rect").attr("width", t.width).attr("height", e.size() ? e.attr("height") : 0), t.svg.select("." + r.zoomRect).attr("width", t.width).attr("height", t.height), t.selectChart.style("max-height", t.currentHeight + "px");
  }, C.updateDimension = function (t) {
    var e = this;t || (e.config.axis_rotated ? (e.axes.x.call(e.xAxis), e.axes.subx.call(e.subXAxis)) : (e.axes.y.call(e.yAxis), e.axes.y2.call(e.y2Axis))), e.updateSizes(), e.updateScales(), e.updateSvgSize(), e.transformAll(!1);
  }, C.observeInserted = function (t) {
    var e,
        i = this;"undefined" != typeof MutationObserver ? (e = new MutationObserver(function (n) {
      n.forEach(function (n) {
        "childList" === n.type && n.previousSibling && (e.disconnect(), i.intervalForObserveInserted = window.setInterval(function () {
          t.node().parentNode && (window.clearInterval(i.intervalForObserveInserted), i.updateDimension(), i.brush && i.brush.update(), i.config.oninit.call(i), i.redraw({ withTransform: !0, withUpdateXDomain: !0, withUpdateOrgXDomain: !0, withTransition: !1, withTransitionForTransform: !1, withLegend: !0 }), t.transition().style("opacity", 1));
        }, 10));
      });
    })).observe(t.node(), { attributes: !0, childList: !0, characterData: !0 }) : window.console.error("MutationObserver not defined.");
  }, C.bindResize = function () {
    var t = this,
        e = t.config;if (t.resizeFunction = t.generateResize(), t.resizeFunction.add(function () {
      e.onresize.call(t);
    }), e.resize_auto && t.resizeFunction.add(function () {
      void 0 !== t.resizeTimeout && window.clearTimeout(t.resizeTimeout), t.resizeTimeout = window.setTimeout(function () {
        delete t.resizeTimeout, t.api.flush();
      }, 100);
    }), t.resizeFunction.add(function () {
      e.onresized.call(t);
    }), window.attachEvent) window.attachEvent("onresize", t.resizeFunction);else if (window.addEventListener) window.addEventListener("resize", t.resizeFunction, !1);else {
      var i = window.onresize;i ? i.add && i.remove || (i = t.generateResize()).add(window.onresize) : i = t.generateResize(), i.add(t.resizeFunction), window.onresize = i;
    }
  }, C.generateResize = function () {
    function t() {
      e.forEach(function (t) {
        t();
      });
    }var e = [];return t.add = function (t) {
      e.push(t);
    }, t.remove = function (t) {
      for (var i = 0; i < e.length; i++) {
        if (e[i] === t) {
          e.splice(i, 1);break;
        }
      }
    }, t;
  }, C.endall = function (t, e) {
    var i = 0;t.each(function () {
      ++i;
    }).each("end", function () {
      --i || e.apply(this, arguments);
    });
  }, C.generateWait = function () {
    var t = [],
        e = function e(_e2, i) {
      var n = setInterval(function () {
        var e = 0;t.forEach(function (t) {
          if (t.empty()) e += 1;else try {
            t.transition();
          } catch (t) {
            e += 1;
          }
        }), e === t.length && (clearInterval(n), i && i());
      }, 10);
    };return e.add = function (e) {
      t.push(e);
    }, e;
  }, C.parseDate = function (t) {
    var e,
        i = this;return t instanceof Date ? e = t : "string" == typeof t ? e = i.dataTimeFormat(i.config.data_xFormat).parse(t) : "object" === (void 0 === t ? "undefined" : o(t)) ? e = new Date(+t) : "number" != typeof t || isNaN(t) || (e = new Date(+t)), e && !isNaN(+e) || window.console.error("Failed to parse x '" + t + "' to Date object"), e;
  }, C.isTabVisible = function () {
    var t;return void 0 !== document.hidden ? t = "hidden" : void 0 !== document.mozHidden ? t = "mozHidden" : void 0 !== document.msHidden ? t = "msHidden" : void 0 !== document.webkitHidden && (t = "webkitHidden"), !document[t];
  }, C.isValue = l, C.isFunction = u, C.isString = g, C.isUndefined = f, C.isDefined = p, C.ceil10 = _, C.asHalfPixel = x, C.diffDomain = m, C.isEmpty = y, C.notEmpty = S, C.notEmpty = S, C.getOption = w, C.hasValue = v, C.sanitise = b, C.getPathBox = T, C.CLASS = r, Function.prototype.bind || (Function.prototype.bind = function (t) {
    if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e = Array.prototype.slice.call(arguments, 1),
        i = this,
        n = function n() {},
        a = function a() {
      return i.apply(this instanceof n ? this : t, e.concat(Array.prototype.slice.call(arguments)));
    };return n.prototype = this.prototype, a.prototype = new n(), a;
  }), "SVGPathSeg" in window || (window.SVGPathSeg = function (t, e, i) {
    this.pathSegType = t, this.pathSegTypeAsLetter = e, this._owningPathSegList = i;
  }, window.SVGPathSeg.prototype.classname = "SVGPathSeg", window.SVGPathSeg.PATHSEG_UNKNOWN = 0, window.SVGPathSeg.PATHSEG_CLOSEPATH = 1, window.SVGPathSeg.PATHSEG_MOVETO_ABS = 2, window.SVGPathSeg.PATHSEG_MOVETO_REL = 3, window.SVGPathSeg.PATHSEG_LINETO_ABS = 4, window.SVGPathSeg.PATHSEG_LINETO_REL = 5, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS = 6, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL = 7, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS = 8, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL = 9, window.SVGPathSeg.PATHSEG_ARC_ABS = 10, window.SVGPathSeg.PATHSEG_ARC_REL = 11, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS = 12, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL = 13, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS = 14, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL = 15, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS = 16, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL = 17, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS = 18, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL = 19, window.SVGPathSeg.prototype._segmentChanged = function () {
    this._owningPathSegList && this._owningPathSegList.segmentChanged(this);
  }, window.SVGPathSegClosePath = function (t) {
    window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CLOSEPATH, "z", t);
  }, window.SVGPathSegClosePath.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegClosePath.prototype.toString = function () {
    return "[object SVGPathSegClosePath]";
  }, window.SVGPathSegClosePath.prototype._asPathString = function () {
    return this.pathSegTypeAsLetter;
  }, window.SVGPathSegClosePath.prototype.clone = function () {
    return new window.SVGPathSegClosePath(void 0);
  }, window.SVGPathSegMovetoAbs = function (t, e, i) {
    window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_ABS, "M", t), this._x = e, this._y = i;
  }, window.SVGPathSegMovetoAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegMovetoAbs.prototype.toString = function () {
    return "[object SVGPathSegMovetoAbs]";
  }, window.SVGPathSegMovetoAbs.prototype._asPathString = function () {
    return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
  }, window.SVGPathSegMovetoAbs.prototype.clone = function () {
    return new window.SVGPathSegMovetoAbs(void 0, this._x, this._y);
  }, Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "x", { get: function get() {
      return this._x;
    }, set: function set(t) {
      this._x = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "y", { get: function get() {
      return this._y;
    }, set: function set(t) {
      this._y = t, this._segmentChanged();
    }, enumerable: !0 }), window.SVGPathSegMovetoRel = function (t, e, i) {
    window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_REL, "m", t), this._x = e, this._y = i;
  }, window.SVGPathSegMovetoRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegMovetoRel.prototype.toString = function () {
    return "[object SVGPathSegMovetoRel]";
  }, window.SVGPathSegMovetoRel.prototype._asPathString = function () {
    return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
  }, window.SVGPathSegMovetoRel.prototype.clone = function () {
    return new window.SVGPathSegMovetoRel(void 0, this._x, this._y);
  }, Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "x", { get: function get() {
      return this._x;
    }, set: function set(t) {
      this._x = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "y", { get: function get() {
      return this._y;
    }, set: function set(t) {
      this._y = t, this._segmentChanged();
    }, enumerable: !0 }), window.SVGPathSegLinetoAbs = function (t, e, i) {
    window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_ABS, "L", t), this._x = e, this._y = i;
  }, window.SVGPathSegLinetoAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoAbs.prototype.toString = function () {
    return "[object SVGPathSegLinetoAbs]";
  }, window.SVGPathSegLinetoAbs.prototype._asPathString = function () {
    return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
  }, window.SVGPathSegLinetoAbs.prototype.clone = function () {
    return new window.SVGPathSegLinetoAbs(void 0, this._x, this._y);
  }, Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "x", { get: function get() {
      return this._x;
    }, set: function set(t) {
      this._x = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "y", { get: function get() {
      return this._y;
    }, set: function set(t) {
      this._y = t, this._segmentChanged();
    }, enumerable: !0 }), window.SVGPathSegLinetoRel = function (t, e, i) {
    window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_REL, "l", t), this._x = e, this._y = i;
  }, window.SVGPathSegLinetoRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoRel.prototype.toString = function () {
    return "[object SVGPathSegLinetoRel]";
  }, window.SVGPathSegLinetoRel.prototype._asPathString = function () {
    return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
  }, window.SVGPathSegLinetoRel.prototype.clone = function () {
    return new window.SVGPathSegLinetoRel(void 0, this._x, this._y);
  }, Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "x", { get: function get() {
      return this._x;
    }, set: function set(t) {
      this._x = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "y", { get: function get() {
      return this._y;
    }, set: function set(t) {
      this._y = t, this._segmentChanged();
    }, enumerable: !0 }), window.SVGPathSegCurvetoCubicAbs = function (t, e, i, n, a, r, o) {
    window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS, "C", t), this._x = e, this._y = i, this._x1 = n, this._y1 = a, this._x2 = r, this._y2 = o;
  }, window.SVGPathSegCurvetoCubicAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoCubicAbs.prototype.toString = function () {
    return "[object SVGPathSegCurvetoCubicAbs]";
  }, window.SVGPathSegCurvetoCubicAbs.prototype._asPathString = function () {
    return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
  }, window.SVGPathSegCurvetoCubicAbs.prototype.clone = function () {
    return new window.SVGPathSegCurvetoCubicAbs(void 0, this._x, this._y, this._x1, this._y1, this._x2, this._y2);
  }, Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x", { get: function get() {
      return this._x;
    }, set: function set(t) {
      this._x = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y", { get: function get() {
      return this._y;
    }, set: function set(t) {
      this._y = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x1", { get: function get() {
      return this._x1;
    }, set: function set(t) {
      this._x1 = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y1", { get: function get() {
      return this._y1;
    }, set: function set(t) {
      this._y1 = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x2", { get: function get() {
      return this._x2;
    }, set: function set(t) {
      this._x2 = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y2", { get: function get() {
      return this._y2;
    }, set: function set(t) {
      this._y2 = t, this._segmentChanged();
    }, enumerable: !0 }), window.SVGPathSegCurvetoCubicRel = function (t, e, i, n, a, r, o) {
    window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL, "c", t), this._x = e, this._y = i, this._x1 = n, this._y1 = a, this._x2 = r, this._y2 = o;
  }, window.SVGPathSegCurvetoCubicRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoCubicRel.prototype.toString = function () {
    return "[object SVGPathSegCurvetoCubicRel]";
  }, window.SVGPathSegCurvetoCubicRel.prototype._asPathString = function () {
    return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
  }, window.SVGPathSegCurvetoCubicRel.prototype.clone = function () {
    return new window.SVGPathSegCurvetoCubicRel(void 0, this._x, this._y, this._x1, this._y1, this._x2, this._y2);
  }, Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x", { get: function get() {
      return this._x;
    }, set: function set(t) {
      this._x = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y", { get: function get() {
      return this._y;
    }, set: function set(t) {
      this._y = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x1", { get: function get() {
      return this._x1;
    }, set: function set(t) {
      this._x1 = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y1", { get: function get() {
      return this._y1;
    }, set: function set(t) {
      this._y1 = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x2", { get: function get() {
      return this._x2;
    }, set: function set(t) {
      this._x2 = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y2", { get: function get() {
      return this._y2;
    }, set: function set(t) {
      this._y2 = t, this._segmentChanged();
    }, enumerable: !0 }), window.SVGPathSegCurvetoQuadraticAbs = function (t, e, i, n, a) {
    window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS, "Q", t), this._x = e, this._y = i, this._x1 = n, this._y1 = a;
  }, window.SVGPathSegCurvetoQuadraticAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoQuadraticAbs.prototype.toString = function () {
    return "[object SVGPathSegCurvetoQuadraticAbs]";
  }, window.SVGPathSegCurvetoQuadraticAbs.prototype._asPathString = function () {
    return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y;
  }, window.SVGPathSegCurvetoQuadraticAbs.prototype.clone = function () {
    return new window.SVGPathSegCurvetoQuadraticAbs(void 0, this._x, this._y, this._x1, this._y1);
  }, Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x", { get: function get() {
      return this._x;
    }, set: function set(t) {
      this._x = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y", { get: function get() {
      return this._y;
    }, set: function set(t) {
      this._y = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x1", { get: function get() {
      return this._x1;
    }, set: function set(t) {
      this._x1 = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y1", { get: function get() {
      return this._y1;
    }, set: function set(t) {
      this._y1 = t, this._segmentChanged();
    }, enumerable: !0 }), window.SVGPathSegCurvetoQuadraticRel = function (t, e, i, n, a) {
    window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL, "q", t), this._x = e, this._y = i, this._x1 = n, this._y1 = a;
  }, window.SVGPathSegCurvetoQuadraticRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoQuadraticRel.prototype.toString = function () {
    return "[object SVGPathSegCurvetoQuadraticRel]";
  }, window.SVGPathSegCurvetoQuadraticRel.prototype._asPathString = function () {
    return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y;
  }, window.SVGPathSegCurvetoQuadraticRel.prototype.clone = function () {
    return new window.SVGPathSegCurvetoQuadraticRel(void 0, this._x, this._y, this._x1, this._y1);
  }, Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x", { get: function get() {
      return this._x;
    }, set: function set(t) {
      this._x = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y", { get: function get() {
      return this._y;
    }, set: function set(t) {
      this._y = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x1", { get: function get() {
      return this._x1;
    }, set: function set(t) {
      this._x1 = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y1", { get: function get() {
      return this._y1;
    }, set: function set(t) {
      this._y1 = t, this._segmentChanged();
    }, enumerable: !0 }), window.SVGPathSegArcAbs = function (t, e, i, n, a, r, o, s) {
    window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_ABS, "A", t), this._x = e, this._y = i, this._r1 = n, this._r2 = a, this._angle = r, this._largeArcFlag = o, this._sweepFlag = s;
  }, window.SVGPathSegArcAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegArcAbs.prototype.toString = function () {
    return "[object SVGPathSegArcAbs]";
  }, window.SVGPathSegArcAbs.prototype._asPathString = function () {
    return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y;
  }, window.SVGPathSegArcAbs.prototype.clone = function () {
    return new window.SVGPathSegArcAbs(void 0, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag);
  }, Object.defineProperty(window.SVGPathSegArcAbs.prototype, "x", { get: function get() {
      return this._x;
    }, set: function set(t) {
      this._x = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "y", { get: function get() {
      return this._y;
    }, set: function set(t) {
      this._y = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r1", { get: function get() {
      return this._r1;
    }, set: function set(t) {
      this._r1 = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r2", { get: function get() {
      return this._r2;
    }, set: function set(t) {
      this._r2 = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "angle", { get: function get() {
      return this._angle;
    }, set: function set(t) {
      this._angle = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "largeArcFlag", { get: function get() {
      return this._largeArcFlag;
    }, set: function set(t) {
      this._largeArcFlag = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "sweepFlag", { get: function get() {
      return this._sweepFlag;
    }, set: function set(t) {
      this._sweepFlag = t, this._segmentChanged();
    }, enumerable: !0 }), window.SVGPathSegArcRel = function (t, e, i, n, a, r, o, s) {
    window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_REL, "a", t), this._x = e, this._y = i, this._r1 = n, this._r2 = a, this._angle = r, this._largeArcFlag = o, this._sweepFlag = s;
  }, window.SVGPathSegArcRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegArcRel.prototype.toString = function () {
    return "[object SVGPathSegArcRel]";
  }, window.SVGPathSegArcRel.prototype._asPathString = function () {
    return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y;
  }, window.SVGPathSegArcRel.prototype.clone = function () {
    return new window.SVGPathSegArcRel(void 0, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag);
  }, Object.defineProperty(window.SVGPathSegArcRel.prototype, "x", { get: function get() {
      return this._x;
    }, set: function set(t) {
      this._x = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "y", { get: function get() {
      return this._y;
    }, set: function set(t) {
      this._y = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "r1", { get: function get() {
      return this._r1;
    }, set: function set(t) {
      this._r1 = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "r2", { get: function get() {
      return this._r2;
    }, set: function set(t) {
      this._r2 = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "angle", { get: function get() {
      return this._angle;
    }, set: function set(t) {
      this._angle = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "largeArcFlag", { get: function get() {
      return this._largeArcFlag;
    }, set: function set(t) {
      this._largeArcFlag = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "sweepFlag", { get: function get() {
      return this._sweepFlag;
    }, set: function set(t) {
      this._sweepFlag = t, this._segmentChanged();
    }, enumerable: !0 }), window.SVGPathSegLinetoHorizontalAbs = function (t, e) {
    window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS, "H", t), this._x = e;
  }, window.SVGPathSegLinetoHorizontalAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoHorizontalAbs.prototype.toString = function () {
    return "[object SVGPathSegLinetoHorizontalAbs]";
  }, window.SVGPathSegLinetoHorizontalAbs.prototype._asPathString = function () {
    return this.pathSegTypeAsLetter + " " + this._x;
  }, window.SVGPathSegLinetoHorizontalAbs.prototype.clone = function () {
    return new window.SVGPathSegLinetoHorizontalAbs(void 0, this._x);
  }, Object.defineProperty(window.SVGPathSegLinetoHorizontalAbs.prototype, "x", { get: function get() {
      return this._x;
    }, set: function set(t) {
      this._x = t, this._segmentChanged();
    }, enumerable: !0 }), window.SVGPathSegLinetoHorizontalRel = function (t, e) {
    window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL, "h", t), this._x = e;
  }, window.SVGPathSegLinetoHorizontalRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoHorizontalRel.prototype.toString = function () {
    return "[object SVGPathSegLinetoHorizontalRel]";
  }, window.SVGPathSegLinetoHorizontalRel.prototype._asPathString = function () {
    return this.pathSegTypeAsLetter + " " + this._x;
  }, window.SVGPathSegLinetoHorizontalRel.prototype.clone = function () {
    return new window.SVGPathSegLinetoHorizontalRel(void 0, this._x);
  }, Object.defineProperty(window.SVGPathSegLinetoHorizontalRel.prototype, "x", { get: function get() {
      return this._x;
    }, set: function set(t) {
      this._x = t, this._segmentChanged();
    }, enumerable: !0 }), window.SVGPathSegLinetoVerticalAbs = function (t, e) {
    window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS, "V", t), this._y = e;
  }, window.SVGPathSegLinetoVerticalAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoVerticalAbs.prototype.toString = function () {
    return "[object SVGPathSegLinetoVerticalAbs]";
  }, window.SVGPathSegLinetoVerticalAbs.prototype._asPathString = function () {
    return this.pathSegTypeAsLetter + " " + this._y;
  }, window.SVGPathSegLinetoVerticalAbs.prototype.clone = function () {
    return new window.SVGPathSegLinetoVerticalAbs(void 0, this._y);
  }, Object.defineProperty(window.SVGPathSegLinetoVerticalAbs.prototype, "y", { get: function get() {
      return this._y;
    }, set: function set(t) {
      this._y = t, this._segmentChanged();
    }, enumerable: !0 }), window.SVGPathSegLinetoVerticalRel = function (t, e) {
    window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL, "v", t), this._y = e;
  }, window.SVGPathSegLinetoVerticalRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoVerticalRel.prototype.toString = function () {
    return "[object SVGPathSegLinetoVerticalRel]";
  }, window.SVGPathSegLinetoVerticalRel.prototype._asPathString = function () {
    return this.pathSegTypeAsLetter + " " + this._y;
  }, window.SVGPathSegLinetoVerticalRel.prototype.clone = function () {
    return new window.SVGPathSegLinetoVerticalRel(void 0, this._y);
  }, Object.defineProperty(window.SVGPathSegLinetoVerticalRel.prototype, "y", { get: function get() {
      return this._y;
    }, set: function set(t) {
      this._y = t, this._segmentChanged();
    }, enumerable: !0 }), window.SVGPathSegCurvetoCubicSmoothAbs = function (t, e, i, n, a) {
    window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS, "S", t), this._x = e, this._y = i, this._x2 = n, this._y2 = a;
  }, window.SVGPathSegCurvetoCubicSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoCubicSmoothAbs.prototype.toString = function () {
    return "[object SVGPathSegCurvetoCubicSmoothAbs]";
  }, window.SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString = function () {
    return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
  }, window.SVGPathSegCurvetoCubicSmoothAbs.prototype.clone = function () {
    return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0, this._x, this._y, this._x2, this._y2);
  }, Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x", { get: function get() {
      return this._x;
    }, set: function set(t) {
      this._x = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y", { get: function get() {
      return this._y;
    }, set: function set(t) {
      this._y = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x2", { get: function get() {
      return this._x2;
    }, set: function set(t) {
      this._x2 = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y2", { get: function get() {
      return this._y2;
    }, set: function set(t) {
      this._y2 = t, this._segmentChanged();
    }, enumerable: !0 }), window.SVGPathSegCurvetoCubicSmoothRel = function (t, e, i, n, a) {
    window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL, "s", t), this._x = e, this._y = i, this._x2 = n, this._y2 = a;
  }, window.SVGPathSegCurvetoCubicSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoCubicSmoothRel.prototype.toString = function () {
    return "[object SVGPathSegCurvetoCubicSmoothRel]";
  }, window.SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString = function () {
    return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
  }, window.SVGPathSegCurvetoCubicSmoothRel.prototype.clone = function () {
    return new window.SVGPathSegCurvetoCubicSmoothRel(void 0, this._x, this._y, this._x2, this._y2);
  }, Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x", { get: function get() {
      return this._x;
    }, set: function set(t) {
      this._x = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y", { get: function get() {
      return this._y;
    }, set: function set(t) {
      this._y = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x2", { get: function get() {
      return this._x2;
    }, set: function set(t) {
      this._x2 = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y2", { get: function get() {
      return this._y2;
    }, set: function set(t) {
      this._y2 = t, this._segmentChanged();
    }, enumerable: !0 }), window.SVGPathSegCurvetoQuadraticSmoothAbs = function (t, e, i) {
    window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS, "T", t), this._x = e, this._y = i;
  }, window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString = function () {
    return "[object SVGPathSegCurvetoQuadraticSmoothAbs]";
  }, window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString = function () {
    return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
  }, window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone = function () {
    return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0, this._x, this._y);
  }, Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "x", { get: function get() {
      return this._x;
    }, set: function set(t) {
      this._x = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "y", { get: function get() {
      return this._y;
    }, set: function set(t) {
      this._y = t, this._segmentChanged();
    }, enumerable: !0 }), window.SVGPathSegCurvetoQuadraticSmoothRel = function (t, e, i) {
    window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL, "t", t), this._x = e, this._y = i;
  }, window.SVGPathSegCurvetoQuadraticSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString = function () {
    return "[object SVGPathSegCurvetoQuadraticSmoothRel]";
  }, window.SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString = function () {
    return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
  }, window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone = function () {
    return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0, this._x, this._y);
  }, Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "x", { get: function get() {
      return this._x;
    }, set: function set(t) {
      this._x = t, this._segmentChanged();
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "y", { get: function get() {
      return this._y;
    }, set: function set(t) {
      this._y = t, this._segmentChanged();
    }, enumerable: !0 }), window.SVGPathElement.prototype.createSVGPathSegClosePath = function () {
    return new window.SVGPathSegClosePath(void 0);
  }, window.SVGPathElement.prototype.createSVGPathSegMovetoAbs = function (t, e) {
    return new window.SVGPathSegMovetoAbs(void 0, t, e);
  }, window.SVGPathElement.prototype.createSVGPathSegMovetoRel = function (t, e) {
    return new window.SVGPathSegMovetoRel(void 0, t, e);
  }, window.SVGPathElement.prototype.createSVGPathSegLinetoAbs = function (t, e) {
    return new window.SVGPathSegLinetoAbs(void 0, t, e);
  }, window.SVGPathElement.prototype.createSVGPathSegLinetoRel = function (t, e) {
    return new window.SVGPathSegLinetoRel(void 0, t, e);
  }, window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs = function (t, e, i, n, a, r) {
    return new window.SVGPathSegCurvetoCubicAbs(void 0, t, e, i, n, a, r);
  }, window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel = function (t, e, i, n, a, r) {
    return new window.SVGPathSegCurvetoCubicRel(void 0, t, e, i, n, a, r);
  }, window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs = function (t, e, i, n) {
    return new window.SVGPathSegCurvetoQuadraticAbs(void 0, t, e, i, n);
  }, window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel = function (t, e, i, n) {
    return new window.SVGPathSegCurvetoQuadraticRel(void 0, t, e, i, n);
  }, window.SVGPathElement.prototype.createSVGPathSegArcAbs = function (t, e, i, n, a, r, o) {
    return new window.SVGPathSegArcAbs(void 0, t, e, i, n, a, r, o);
  }, window.SVGPathElement.prototype.createSVGPathSegArcRel = function (t, e, i, n, a, r, o) {
    return new window.SVGPathSegArcRel(void 0, t, e, i, n, a, r, o);
  }, window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs = function (t) {
    return new window.SVGPathSegLinetoHorizontalAbs(void 0, t);
  }, window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel = function (t) {
    return new window.SVGPathSegLinetoHorizontalRel(void 0, t);
  }, window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs = function (t) {
    return new window.SVGPathSegLinetoVerticalAbs(void 0, t);
  }, window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel = function (t) {
    return new window.SVGPathSegLinetoVerticalRel(void 0, t);
  }, window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs = function (t, e, i, n) {
    return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0, t, e, i, n);
  }, window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel = function (t, e, i, n) {
    return new window.SVGPathSegCurvetoCubicSmoothRel(void 0, t, e, i, n);
  }, window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs = function (t, e) {
    return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0, t, e);
  }, window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel = function (t, e) {
    return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0, t, e);
  }, "getPathSegAtLength" in window.SVGPathElement.prototype || (window.SVGPathElement.prototype.getPathSegAtLength = function (t) {
    if (void 0 === t || !isFinite(t)) throw "Invalid arguments.";var e = document.createElementNS("http://www.w3.org/2000/svg", "path");e.setAttribute("d", this.getAttribute("d"));var i = e.pathSegList.numberOfItems - 1;if (i <= 0) return 0;do {
      if (e.pathSegList.removeItem(i), t > e.getTotalLength()) break;i--;
    } while (i > 0);return i;
  })), "SVGPathSegList" in window || (window.SVGPathSegList = function (t) {
    this._pathElement = t, this._list = this._parsePath(this._pathElement.getAttribute("d")), this._mutationObserverConfig = { attributes: !0, attributeFilter: ["d"] }, this._pathElementMutationObserver = new MutationObserver(this._updateListFromPathMutations.bind(this)), this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig);
  }, window.SVGPathSegList.prototype.classname = "SVGPathSegList", Object.defineProperty(window.SVGPathSegList.prototype, "numberOfItems", { get: function get() {
      return this._checkPathSynchronizedToList(), this._list.length;
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathElement.prototype, "pathSegList", { get: function get() {
      return this._pathSegList || (this._pathSegList = new window.SVGPathSegList(this)), this._pathSegList;
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathElement.prototype, "normalizedPathSegList", { get: function get() {
      return this.pathSegList;
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathElement.prototype, "animatedPathSegList", { get: function get() {
      return this.pathSegList;
    }, enumerable: !0 }), Object.defineProperty(window.SVGPathElement.prototype, "animatedNormalizedPathSegList", { get: function get() {
      return this.pathSegList;
    }, enumerable: !0 }), window.SVGPathSegList.prototype._checkPathSynchronizedToList = function () {
    this._updateListFromPathMutations(this._pathElementMutationObserver.takeRecords());
  }, window.SVGPathSegList.prototype._updateListFromPathMutations = function (t) {
    if (this._pathElement) {
      var e = !1;t.forEach(function (t) {
        "d" == t.attributeName && (e = !0);
      }), e && (this._list = this._parsePath(this._pathElement.getAttribute("d")));
    }
  }, window.SVGPathSegList.prototype._writeListToPath = function () {
    this._pathElementMutationObserver.disconnect(), this._pathElement.setAttribute("d", window.SVGPathSegList._pathSegArrayAsString(this._list)), this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig);
  }, window.SVGPathSegList.prototype.segmentChanged = function (t) {
    this._writeListToPath();
  }, window.SVGPathSegList.prototype.clear = function () {
    this._checkPathSynchronizedToList(), this._list.forEach(function (t) {
      t._owningPathSegList = null;
    }), this._list = [], this._writeListToPath();
  }, window.SVGPathSegList.prototype.initialize = function (t) {
    return this._checkPathSynchronizedToList(), this._list = [t], t._owningPathSegList = this, this._writeListToPath(), t;
  }, window.SVGPathSegList.prototype._checkValidIndex = function (t) {
    if (isNaN(t) || t < 0 || t >= this.numberOfItems) throw "INDEX_SIZE_ERR";
  }, window.SVGPathSegList.prototype.getItem = function (t) {
    return this._checkPathSynchronizedToList(), this._checkValidIndex(t), this._list[t];
  }, window.SVGPathSegList.prototype.insertItemBefore = function (t, e) {
    return this._checkPathSynchronizedToList(), e > this.numberOfItems && (e = this.numberOfItems), t._owningPathSegList && (t = t.clone()), this._list.splice(e, 0, t), t._owningPathSegList = this, this._writeListToPath(), t;
  }, window.SVGPathSegList.prototype.replaceItem = function (t, e) {
    return this._checkPathSynchronizedToList(), t._owningPathSegList && (t = t.clone()), this._checkValidIndex(e), this._list[e] = t, t._owningPathSegList = this, this._writeListToPath(), t;
  }, window.SVGPathSegList.prototype.removeItem = function (t) {
    this._checkPathSynchronizedToList(), this._checkValidIndex(t);var e = this._list[t];return this._list.splice(t, 1), this._writeListToPath(), e;
  }, window.SVGPathSegList.prototype.appendItem = function (t) {
    return this._checkPathSynchronizedToList(), t._owningPathSegList && (t = t.clone()), this._list.push(t), t._owningPathSegList = this, this._writeListToPath(), t;
  }, window.SVGPathSegList._pathSegArrayAsString = function (t) {
    var e = "",
        i = !0;return t.forEach(function (t) {
      i ? (i = !1, e += t._asPathString()) : e += " " + t._asPathString();
    }), e;
  }, window.SVGPathSegList.prototype._parsePath = function (t) {
    if (!t || 0 == t.length) return [];var e = this,
        i = function i() {
      this.pathSegList = [];
    };i.prototype.appendSegment = function (t) {
      this.pathSegList.push(t);
    };var n = function n(t) {
      this._string = t, this._currentIndex = 0, this._endIndex = this._string.length, this._previousCommand = window.SVGPathSeg.PATHSEG_UNKNOWN, this._skipOptionalSpaces();
    };n.prototype._isCurrentSpace = function () {
      var t = this._string[this._currentIndex];return t <= " " && (" " == t || "\n" == t || "\t" == t || "\r" == t || "\f" == t);
    }, n.prototype._skipOptionalSpaces = function () {
      for (; this._currentIndex < this._endIndex && this._isCurrentSpace();) {
        this._currentIndex++;
      }return this._currentIndex < this._endIndex;
    }, n.prototype._skipOptionalSpacesOrDelimiter = function () {
      return !(this._currentIndex < this._endIndex && !this._isCurrentSpace() && "," != this._string.charAt(this._currentIndex)) && (this._skipOptionalSpaces() && this._currentIndex < this._endIndex && "," == this._string.charAt(this._currentIndex) && (this._currentIndex++, this._skipOptionalSpaces()), this._currentIndex < this._endIndex);
    }, n.prototype.hasMoreData = function () {
      return this._currentIndex < this._endIndex;
    }, n.prototype.peekSegmentType = function () {
      var t = this._string[this._currentIndex];return this._pathSegTypeFromChar(t);
    }, n.prototype._pathSegTypeFromChar = function (t) {
      switch (t) {case "Z":case "z":
          return window.SVGPathSeg.PATHSEG_CLOSEPATH;case "M":
          return window.SVGPathSeg.PATHSEG_MOVETO_ABS;case "m":
          return window.SVGPathSeg.PATHSEG_MOVETO_REL;case "L":
          return window.SVGPathSeg.PATHSEG_LINETO_ABS;case "l":
          return window.SVGPathSeg.PATHSEG_LINETO_REL;case "C":
          return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;case "c":
          return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;case "Q":
          return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;case "q":
          return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;case "A":
          return window.SVGPathSeg.PATHSEG_ARC_ABS;case "a":
          return window.SVGPathSeg.PATHSEG_ARC_REL;case "H":
          return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;case "h":
          return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;case "V":
          return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;case "v":
          return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;case "S":
          return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;case "s":
          return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;case "T":
          return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;case "t":
          return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;default:
          return window.SVGPathSeg.PATHSEG_UNKNOWN;}
    }, n.prototype._nextCommandHelper = function (t, e) {
      return ("+" == t || "-" == t || "." == t || t >= "0" && t <= "9") && e != window.SVGPathSeg.PATHSEG_CLOSEPATH ? e == window.SVGPathSeg.PATHSEG_MOVETO_ABS ? window.SVGPathSeg.PATHSEG_LINETO_ABS : e == window.SVGPathSeg.PATHSEG_MOVETO_REL ? window.SVGPathSeg.PATHSEG_LINETO_REL : e : window.SVGPathSeg.PATHSEG_UNKNOWN;
    }, n.prototype.initialCommandIsMoveTo = function () {
      if (!this.hasMoreData()) return !0;var t = this.peekSegmentType();return t == window.SVGPathSeg.PATHSEG_MOVETO_ABS || t == window.SVGPathSeg.PATHSEG_MOVETO_REL;
    }, n.prototype._parseNumber = function () {
      var t = 0,
          e = 0,
          i = 1,
          n = 0,
          a = 1,
          r = 1,
          o = this._currentIndex;if (this._skipOptionalSpaces(), this._currentIndex < this._endIndex && "+" == this._string.charAt(this._currentIndex) ? this._currentIndex++ : this._currentIndex < this._endIndex && "-" == this._string.charAt(this._currentIndex) && (this._currentIndex++, a = -1), !(this._currentIndex == this._endIndex || (this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") && "." != this._string.charAt(this._currentIndex))) {
        for (var s = this._currentIndex; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9";) {
          this._currentIndex++;
        }if (this._currentIndex != s) for (var c = this._currentIndex - 1, d = 1; c >= s;) {
          e += d * (this._string.charAt(c--) - "0"), d *= 10;
        }if (this._currentIndex < this._endIndex && "." == this._string.charAt(this._currentIndex)) {
          if (++this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") return;for (; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9";) {
            i *= 10, n += (this._string.charAt(this._currentIndex) - "0") / i, this._currentIndex += 1;
          }
        }if (this._currentIndex != o && this._currentIndex + 1 < this._endIndex && ("e" == this._string.charAt(this._currentIndex) || "E" == this._string.charAt(this._currentIndex)) && "x" != this._string.charAt(this._currentIndex + 1) && "m" != this._string.charAt(this._currentIndex + 1)) {
          if (this._currentIndex++, "+" == this._string.charAt(this._currentIndex) ? this._currentIndex++ : "-" == this._string.charAt(this._currentIndex) && (this._currentIndex++, r = -1), this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") return;for (; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9";) {
            t *= 10, t += this._string.charAt(this._currentIndex) - "0", this._currentIndex++;
          }
        }var l = e + n;if (l *= a, t && (l *= Math.pow(10, r * t)), o != this._currentIndex) return this._skipOptionalSpacesOrDelimiter(), l;
      }
    }, n.prototype._parseArcFlag = function () {
      if (!(this._currentIndex >= this._endIndex)) {
        var t = !1,
            e = this._string.charAt(this._currentIndex++);if ("0" == e) t = !1;else {
          if ("1" != e) return;t = !0;
        }return this._skipOptionalSpacesOrDelimiter(), t;
      }
    }, n.prototype.parseSegment = function () {
      var t = this._string[this._currentIndex],
          i = this._pathSegTypeFromChar(t);if (i == window.SVGPathSeg.PATHSEG_UNKNOWN) {
        if (this._previousCommand == window.SVGPathSeg.PATHSEG_UNKNOWN) return null;if ((i = this._nextCommandHelper(t, this._previousCommand)) == window.SVGPathSeg.PATHSEG_UNKNOWN) return null;
      } else this._currentIndex++;switch (this._previousCommand = i, i) {case window.SVGPathSeg.PATHSEG_MOVETO_REL:
          return new window.SVGPathSegMovetoRel(e, this._parseNumber(), this._parseNumber());case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
          return new window.SVGPathSegMovetoAbs(e, this._parseNumber(), this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_REL:
          return new window.SVGPathSegLinetoRel(e, this._parseNumber(), this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_ABS:
          return new window.SVGPathSegLinetoAbs(e, this._parseNumber(), this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
          return new window.SVGPathSegLinetoHorizontalRel(e, this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
          return new window.SVGPathSegLinetoHorizontalAbs(e, this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
          return new window.SVGPathSegLinetoVerticalRel(e, this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
          return new window.SVGPathSegLinetoVerticalAbs(e, this._parseNumber());case window.SVGPathSeg.PATHSEG_CLOSEPATH:
          return this._skipOptionalSpaces(), new window.SVGPathSegClosePath(e);case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
          return n = { x1: this._parseNumber(), y1: this._parseNumber(), x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() }, new window.SVGPathSegCurvetoCubicRel(e, n.x, n.y, n.x1, n.y1, n.x2, n.y2);case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
          return n = { x1: this._parseNumber(), y1: this._parseNumber(), x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() }, new window.SVGPathSegCurvetoCubicAbs(e, n.x, n.y, n.x1, n.y1, n.x2, n.y2);case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
          return n = { x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() }, new window.SVGPathSegCurvetoCubicSmoothRel(e, n.x, n.y, n.x2, n.y2);case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
          return n = { x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() }, new window.SVGPathSegCurvetoCubicSmoothAbs(e, n.x, n.y, n.x2, n.y2);case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
          return n = { x1: this._parseNumber(), y1: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() }, new window.SVGPathSegCurvetoQuadraticRel(e, n.x, n.y, n.x1, n.y1);case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
          return n = { x1: this._parseNumber(), y1: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() }, new window.SVGPathSegCurvetoQuadraticAbs(e, n.x, n.y, n.x1, n.y1);case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
          return new window.SVGPathSegCurvetoQuadraticSmoothRel(e, this._parseNumber(), this._parseNumber());case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
          return new window.SVGPathSegCurvetoQuadraticSmoothAbs(e, this._parseNumber(), this._parseNumber());case window.SVGPathSeg.PATHSEG_ARC_REL:
          return n = { x1: this._parseNumber(), y1: this._parseNumber(), arcAngle: this._parseNumber(), arcLarge: this._parseArcFlag(), arcSweep: this._parseArcFlag(), x: this._parseNumber(), y: this._parseNumber() }, new window.SVGPathSegArcRel(e, n.x, n.y, n.x1, n.y1, n.arcAngle, n.arcLarge, n.arcSweep);case window.SVGPathSeg.PATHSEG_ARC_ABS:
          var n = { x1: this._parseNumber(), y1: this._parseNumber(), arcAngle: this._parseNumber(), arcLarge: this._parseArcFlag(), arcSweep: this._parseArcFlag(), x: this._parseNumber(), y: this._parseNumber() };return new window.SVGPathSegArcAbs(e, n.x, n.y, n.x1, n.y1, n.arcAngle, n.arcLarge, n.arcSweep);default:
          throw "Unknown path seg type.";}
    };var a = new i(),
        r = new n(t);if (!r.initialCommandIsMoveTo()) return [];for (; r.hasMoreData();) {
      var o = r.parseSegment();if (!o) return [];a.appendSegment(o);
    }return a.pathSegList;
  }), P.axis = function () {}, P.axis.labels = function (t) {
    var e = this.internal;arguments.length && (Object.keys(t).forEach(function (i) {
      e.axis.setLabelText(i, t[i]);
    }), e.axis.updateLabels());
  }, P.axis.max = function (t) {
    var e = this.internal,
        i = e.config;if (!arguments.length) return { x: i.axis_x_max, y: i.axis_y_max, y2: i.axis_y2_max };"object" === (void 0 === t ? "undefined" : o(t)) ? (l(t.x) && (i.axis_x_max = t.x), l(t.y) && (i.axis_y_max = t.y), l(t.y2) && (i.axis_y2_max = t.y2)) : i.axis_y_max = i.axis_y2_max = t, e.redraw({ withUpdateOrgXDomain: !0, withUpdateXDomain: !0 });
  }, P.axis.min = function (t) {
    var e = this.internal,
        i = e.config;if (!arguments.length) return { x: i.axis_x_min, y: i.axis_y_min, y2: i.axis_y2_min };"object" === (void 0 === t ? "undefined" : o(t)) ? (l(t.x) && (i.axis_x_min = t.x), l(t.y) && (i.axis_y_min = t.y), l(t.y2) && (i.axis_y2_min = t.y2)) : i.axis_y_min = i.axis_y2_min = t, e.redraw({ withUpdateOrgXDomain: !0, withUpdateXDomain: !0 });
  }, P.axis.range = function (t) {
    if (!arguments.length) return { max: this.axis.max(), min: this.axis.min() };void 0 !== t.max && this.axis.max(t.max), void 0 !== t.min && this.axis.min(t.min);
  }, P.category = function (t, e) {
    var i = this.internal,
        n = i.config;return arguments.length > 1 && (n.axis_x_categories[t] = e, i.redraw()), n.axis_x_categories[t];
  }, P.categories = function (t) {
    var e = this.internal,
        i = e.config;return arguments.length ? (i.axis_x_categories = t, e.redraw(), i.axis_x_categories) : i.axis_x_categories;
  }, P.resize = function (t) {
    var e = this.internal.config;e.size_width = t ? t.width : null, e.size_height = t ? t.height : null, this.flush();
  }, P.flush = function () {
    this.internal.updateAndRedraw({ withLegend: !0, withTransition: !1, withTransitionForTransform: !1 });
  }, P.destroy = function () {
    var t = this.internal;if (window.clearInterval(t.intervalForObserveInserted), void 0 !== t.resizeTimeout && window.clearTimeout(t.resizeTimeout), window.detachEvent) window.detachEvent("onresize", t.resizeFunction);else if (window.removeEventListener) window.removeEventListener("resize", t.resizeFunction);else {
      var e = window.onresize;e && e.add && e.remove && e.remove(t.resizeFunction);
    }return t.selectChart.classed("c3", !1).html(""), Object.keys(t).forEach(function (e) {
      t[e] = null;
    }), null;
  }, P.color = function (t) {
    return this.internal.color(t);
  }, P.data = function (t) {
    var e = this.internal.data.targets;return void 0 === t ? e : e.filter(function (e) {
      return [].concat(t).indexOf(e.id) >= 0;
    });
  }, P.data.shown = function (t) {
    return this.internal.filterTargetsToShow(this.data(t));
  }, P.data.values = function (t) {
    var e,
        i = null;return t && (i = (e = this.data(t))[0] ? e[0].values.map(function (t) {
      return t.value;
    }) : null), i;
  }, P.data.names = function (t) {
    return this.internal.clearLegendItemTextBoxCache(), this.internal.updateDataAttributes("names", t);
  }, P.data.colors = function (t) {
    return this.internal.updateDataAttributes("colors", t);
  }, P.data.axes = function (t) {
    return this.internal.updateDataAttributes("axes", t);
  }, P.flow = function (t) {
    var e,
        i,
        n,
        a,
        r,
        o,
        s,
        c = this.internal,
        d = [],
        u = c.getMaxDataCount(),
        h = 0,
        g = 0;if (t.json) i = c.convertJsonToData(t.json, t.keys);else if (t.rows) i = c.convertRowsToData(t.rows);else {
      if (!t.columns) return;i = c.convertColumnsToData(t.columns);
    }e = c.convertDataToTargets(i, !0), c.data.targets.forEach(function (t) {
      var i,
          n,
          a = !1;for (i = 0; i < e.length; i++) {
        if (t.id === e[i].id) {
          for (a = !0, t.values[t.values.length - 1] && (g = t.values[t.values.length - 1].index + 1), h = e[i].values.length, n = 0; n < h; n++) {
            e[i].values[n].index = g + n, c.isTimeSeries() || (e[i].values[n].x = g + n);
          }t.values = t.values.concat(e[i].values), e.splice(i, 1);break;
        }
      }a || d.push(t.id);
    }), c.data.targets.forEach(function (t) {
      var e, i;for (e = 0; e < d.length; e++) {
        if (t.id === d[e]) for (g = t.values[t.values.length - 1].index + 1, i = 0; i < h; i++) {
          t.values.push({ id: t.id, index: g + i, x: c.isTimeSeries() ? c.getOtherTargetX(g + i) : g + i, value: null });
        }
      }
    }), c.data.targets.length && e.forEach(function (t) {
      var e,
          i = [];for (e = c.data.targets[0].values[0].index; e < g; e++) {
        i.push({ id: t.id, index: e, x: c.isTimeSeries() ? c.getOtherTargetX(e) : e, value: null });
      }t.values.forEach(function (t) {
        t.index += g, c.isTimeSeries() || (t.x += g);
      }), t.values = i.concat(t.values);
    }), c.data.targets = c.data.targets.concat(e), c.getMaxDataCount(), r = (a = c.data.targets[0]).values[0], void 0 !== t.to ? (h = 0, s = c.isTimeSeries() ? c.parseDate(t.to) : t.to, a.values.forEach(function (t) {
      t.x < s && h++;
    })) : void 0 !== t.length && (h = t.length), u ? 1 === u && c.isTimeSeries() && (o = (a.values[a.values.length - 1].x - r.x) / 2, n = [new Date(+r.x - o), new Date(+r.x + o)], c.updateXDomain(null, !0, !0, !1, n)) : (o = c.isTimeSeries() ? a.values.length > 1 ? a.values[a.values.length - 1].x - r.x : r.x - c.getXDomain(c.data.targets)[0] : 1, n = [r.x - o, r.x], c.updateXDomain(null, !0, !0, !1, n)), c.updateTargets(c.data.targets), c.redraw({ flow: { index: r.index, length: h, duration: l(t.duration) ? t.duration : c.config.transition_duration, done: t.done, orgDataCount: u }, withLegend: !0, withTransition: u > 1, withTrimXDomain: !1, withUpdateXAxis: !0 });
  }, C.generateFlow = function (t) {
    var e = this,
        i = e.config,
        n = e.d3;return function () {
      var a,
          o,
          s,
          c = t.targets,
          d = t.flow,
          l = t.drawBar,
          u = t.drawLine,
          h = t.drawArea,
          g = t.cx,
          f = t.cy,
          p = t.xv,
          _ = t.xForText,
          x = t.yForText,
          y = t.duration,
          S = 1,
          w = d.index,
          v = d.length,
          b = e.getValueOnIndex(e.data.targets[0].values, w),
          T = e.getValueOnIndex(e.data.targets[0].values, w + v),
          A = e.x.domain(),
          P = d.duration || y,
          C = d.done || function () {},
          L = e.generateWait(),
          V = e.xgrid || n.selectAll([]),
          G = e.xgridLines || n.selectAll([]),
          E = e.mainRegion || n.selectAll([]),
          O = e.mainText || n.selectAll([]),
          I = e.mainBar || n.selectAll([]),
          R = e.mainLine || n.selectAll([]),
          k = e.mainArea || n.selectAll([]),
          D = e.mainCircle || n.selectAll([]);e.flowing = !0, e.data.targets.forEach(function (t) {
        t.values.splice(0, v);
      }), s = e.updateXDomain(c, !0, !0), e.updateXGrid && e.updateXGrid(!0), d.orgDataCount ? a = 1 === d.orgDataCount || (b && b.x) === (T && T.x) ? e.x(A[0]) - e.x(s[0]) : e.isTimeSeries() ? e.x(A[0]) - e.x(s[0]) : e.x(b.x) - e.x(T.x) : 1 !== e.data.targets[0].values.length ? a = e.x(A[0]) - e.x(s[0]) : e.isTimeSeries() ? (b = e.getValueOnIndex(e.data.targets[0].values, 0), T = e.getValueOnIndex(e.data.targets[0].values, e.data.targets[0].values.length - 1), a = e.x(b.x) - e.x(T.x)) : a = m(s) / 2, S = m(A) / m(s), o = "translate(" + a + ",0) scale(" + S + ",1)", e.hideXGridFocus(), n.transition().ease("linear").duration(P).each(function () {
        L.add(e.axes.x.transition().call(e.xAxis)), L.add(I.transition().attr("transform", o)), L.add(R.transition().attr("transform", o)), L.add(k.transition().attr("transform", o)), L.add(D.transition().attr("transform", o)), L.add(O.transition().attr("transform", o)), L.add(E.filter(e.isRegionOnX).transition().attr("transform", o)), L.add(V.transition().attr("transform", o)), L.add(G.transition().attr("transform", o));
      }).call(L, function () {
        var t,
            n = [],
            a = [],
            o = [];if (v) {
          for (t = 0; t < v; t++) {
            n.push("." + r.shape + "-" + (w + t)), a.push("." + r.text + "-" + (w + t)), o.push("." + r.eventRect + "-" + (w + t));
          }e.svg.selectAll("." + r.shapes).selectAll(n).remove(), e.svg.selectAll("." + r.texts).selectAll(a).remove(), e.svg.selectAll("." + r.eventRects).selectAll(o).remove(), e.svg.select("." + r.xgrid).remove();
        }V.attr("transform", null).attr(e.xgridAttr), G.attr("transform", null), G.select("line").attr("x1", i.axis_rotated ? 0 : p).attr("x2", i.axis_rotated ? e.width : p), G.select("text").attr("x", i.axis_rotated ? e.width : 0).attr("y", p), I.attr("transform", null).attr("d", l), R.attr("transform", null).attr("d", u), k.attr("transform", null).attr("d", h), D.attr("transform", null).attr("cx", g).attr("cy", f), O.attr("transform", null).attr("x", _).attr("y", x).style("fill-opacity", e.opacityForText.bind(e)), E.attr("transform", null), E.select("rect").filter(e.isRegionOnX).attr("x", e.regionX.bind(e)).attr("width", e.regionWidth.bind(e)), i.interaction_enabled && e.redrawEventRect(), C(), e.flowing = !1;
      });
    };
  }, P.focus = function (t) {
    var e,
        i = this.internal;t = i.mapToTargetIds(t), e = i.svg.selectAll(i.selectorTargets(t.filter(i.isTargetToShow, i))), this.revert(), this.defocus(), e.classed(r.focused, !0).classed(r.defocused, !1), i.hasArcType() && i.expandArc(t), i.toggleFocusLegend(t, !0), i.focusedTargetIds = t, i.defocusedTargetIds = i.defocusedTargetIds.filter(function (e) {
      return t.indexOf(e) < 0;
    });
  }, P.defocus = function (t) {
    var e = this.internal;t = e.mapToTargetIds(t), e.svg.selectAll(e.selectorTargets(t.filter(e.isTargetToShow, e))).classed(r.focused, !1).classed(r.defocused, !0), e.hasArcType() && e.unexpandArc(t), e.toggleFocusLegend(t, !1), e.focusedTargetIds = e.focusedTargetIds.filter(function (e) {
      return t.indexOf(e) < 0;
    }), e.defocusedTargetIds = t;
  }, P.revert = function (t) {
    var e = this.internal;t = e.mapToTargetIds(t), e.svg.selectAll(e.selectorTargets(t)).classed(r.focused, !1).classed(r.defocused, !1), e.hasArcType() && e.unexpandArc(t), e.config.legend_show && (e.showLegend(t.filter(e.isLegendToShow.bind(e))), e.legend.selectAll(e.selectorLegends(t)).filter(function () {
      return e.d3.select(this).classed(r.legendItemFocused);
    }).classed(r.legendItemFocused, !1)), e.focusedTargetIds = [], e.defocusedTargetIds = [];
  }, P.xgrids = function (t) {
    var e = this.internal,
        i = e.config;return t ? (i.grid_x_lines = t, e.redrawWithoutRescale(), i.grid_x_lines) : i.grid_x_lines;
  }, P.xgrids.add = function (t) {
    var e = this.internal;return this.xgrids(e.config.grid_x_lines.concat(t || []));
  }, P.xgrids.remove = function (t) {
    this.internal.removeGridLines(t, !0);
  }, P.ygrids = function (t) {
    var e = this.internal,
        i = e.config;return t ? (i.grid_y_lines = t, e.redrawWithoutRescale(), i.grid_y_lines) : i.grid_y_lines;
  }, P.ygrids.add = function (t) {
    var e = this.internal;return this.ygrids(e.config.grid_y_lines.concat(t || []));
  }, P.ygrids.remove = function (t) {
    this.internal.removeGridLines(t, !1);
  }, P.groups = function (t) {
    var e = this.internal,
        i = e.config;return void 0 === t ? i.data_groups : (i.data_groups = t, e.redraw(), i.data_groups);
  }, P.legend = function () {}, P.legend.show = function (t) {
    var e = this.internal;e.showLegend(e.mapToTargetIds(t)), e.updateAndRedraw({ withLegend: !0 });
  }, P.legend.hide = function (t) {
    var e = this.internal;e.hideLegend(e.mapToTargetIds(t)), e.updateAndRedraw({ withLegend: !0 });
  }, P.load = function (t) {
    var e = this.internal,
        i = e.config;t.xs && e.addXs(t.xs), "names" in t && P.data.names.bind(this)(t.names), "classes" in t && Object.keys(t.classes).forEach(function (e) {
      i.data_classes[e] = t.classes[e];
    }), "categories" in t && e.isCategorized() && (i.axis_x_categories = t.categories), "axes" in t && Object.keys(t.axes).forEach(function (e) {
      i.data_axes[e] = t.axes[e];
    }), "colors" in t && Object.keys(t.colors).forEach(function (e) {
      i.data_colors[e] = t.colors[e];
    }), "cacheIds" in t && e.hasCaches(t.cacheIds) ? e.load(e.getCaches(t.cacheIds), t.done) : "unload" in t ? e.unload(e.mapToTargetIds("boolean" == typeof t.unload && t.unload ? null : t.unload), function () {
      e.loadFromArgs(t);
    }) : e.loadFromArgs(t);
  }, P.unload = function (t) {
    var e = this.internal;(t = t || {}) instanceof Array ? t = { ids: t } : "string" == typeof t && (t = { ids: [t] }), e.unload(e.mapToTargetIds(t.ids), function () {
      e.redraw({ withUpdateOrgXDomain: !0, withUpdateXDomain: !0, withLegend: !0 }), t.done && t.done();
    });
  }, P.regions = function (t) {
    var e = this.internal,
        i = e.config;return t ? (i.regions = t, e.redrawWithoutRescale(), i.regions) : i.regions;
  }, P.regions.add = function (t) {
    var e = this.internal,
        i = e.config;return t ? (i.regions = i.regions.concat(t), e.redrawWithoutRescale(), i.regions) : i.regions;
  }, P.regions.remove = function (t) {
    var e,
        i,
        n,
        a = this.internal,
        o = a.config;return t = t || {}, e = a.getOption(t, "duration", o.transition_duration), i = a.getOption(t, "classes", [r.region]), n = a.main.select("." + r.regions).selectAll(i.map(function (t) {
      return "." + t;
    })), (e ? n.transition().duration(e) : n).style("opacity", 0).remove(), o.regions = o.regions.filter(function (t) {
      var e = !1;return !t.class || (t.class.split(" ").forEach(function (t) {
        i.indexOf(t) >= 0 && (e = !0);
      }), !e);
    }), o.regions;
  }, P.selected = function (t) {
    var e = this.internal,
        i = e.d3;return i.merge(e.main.selectAll("." + r.shapes + e.getTargetSelectorSuffix(t)).selectAll("." + r.shape).filter(function () {
      return i.select(this).classed(r.SELECTED);
    }).map(function (t) {
      return t.map(function (t) {
        var e = t.__data__;return e.data ? e.data : e;
      });
    }));
  }, P.select = function (t, e, i) {
    var n = this.internal,
        a = n.d3,
        o = n.config;o.data_selection_enabled && n.main.selectAll("." + r.shapes).selectAll("." + r.shape).each(function (s, c) {
      var d = a.select(this),
          l = s.data ? s.data.id : s.id,
          u = n.getToggle(this, s).bind(n),
          h = o.data_selection_grouped || !t || t.indexOf(l) >= 0,
          g = !e || e.indexOf(c) >= 0,
          f = d.classed(r.SELECTED);d.classed(r.line) || d.classed(r.area) || (h && g ? o.data_selection_isselectable(s) && !f && u(!0, d.classed(r.SELECTED, !0), s, c) : void 0 !== i && i && f && u(!1, d.classed(r.SELECTED, !1), s, c));
    });
  }, P.unselect = function (t, e) {
    var i = this.internal,
        n = i.d3,
        a = i.config;a.data_selection_enabled && i.main.selectAll("." + r.shapes).selectAll("." + r.shape).each(function (o, s) {
      var c = n.select(this),
          d = o.data ? o.data.id : o.id,
          l = i.getToggle(this, o).bind(i),
          u = a.data_selection_grouped || !t || t.indexOf(d) >= 0,
          h = !e || e.indexOf(s) >= 0,
          g = c.classed(r.SELECTED);c.classed(r.line) || c.classed(r.area) || u && h && a.data_selection_isselectable(o) && g && l(!1, c.classed(r.SELECTED, !1), o, s);
    });
  }, P.show = function (t, e) {
    var i,
        n = this.internal;t = n.mapToTargetIds(t), e = e || {}, n.removeHiddenTargetIds(t), (i = n.svg.selectAll(n.selectorTargets(t))).transition().style("opacity", 1, "important").call(n.endall, function () {
      i.style("opacity", null).style("opacity", 1);
    }), e.withLegend && n.showLegend(t), n.redraw({ withUpdateOrgXDomain: !0, withUpdateXDomain: !0, withLegend: !0 });
  }, P.hide = function (t, e) {
    var i,
        n = this.internal;t = n.mapToTargetIds(t), e = e || {}, n.addHiddenTargetIds(t), (i = n.svg.selectAll(n.selectorTargets(t))).transition().style("opacity", 0, "important").call(n.endall, function () {
      i.style("opacity", null).style("opacity", 0);
    }), e.withLegend && n.hideLegend(t), n.redraw({ withUpdateOrgXDomain: !0, withUpdateXDomain: !0, withLegend: !0 });
  }, P.toggle = function (t, e) {
    var i = this,
        n = this.internal;n.mapToTargetIds(t).forEach(function (t) {
      n.isTargetToShow(t) ? i.hide(t, e) : i.show(t, e);
    });
  }, P.tooltip = function () {}, P.tooltip.show = function (t) {
    var e,
        i,
        n = this.internal;t.mouse && (i = t.mouse), t.data ? n.isMultipleX() ? (i = [n.x(t.data.x), n.getYScale(t.data.id)(t.data.value)], e = null) : e = l(t.data.index) ? t.data.index : n.getIndexByX(t.data.x) : void 0 !== t.x ? e = n.getIndexByX(t.x) : void 0 !== t.index && (e = t.index), n.dispatchEvent("mouseover", e, i), n.dispatchEvent("mousemove", e, i), n.config.tooltip_onshow.call(n, t.data);
  }, P.tooltip.hide = function () {
    this.internal.dispatchEvent("mouseout", 0), this.internal.config.tooltip_onhide.call(this);
  }, P.transform = function (t, e) {
    var i = this.internal,
        n = ["pie", "donut"].indexOf(t) >= 0 ? { withTransform: !0 } : null;i.transformTo(e, t, n);
  }, C.transformTo = function (t, e, i) {
    var n = this,
        a = !n.hasArcType(),
        r = i || { withTransitionForAxis: a };r.withTransitionForTransform = !1, n.transiting = !1, n.setTargetType(t, e), n.updateTargets(n.data.targets), n.updateAndRedraw(r);
  }, P.x = function (t) {
    var e = this.internal;return arguments.length && (e.updateTargetX(e.data.targets, t), e.redraw({ withUpdateOrgXDomain: !0, withUpdateXDomain: !0 })), e.data.xs;
  }, P.xs = function (t) {
    var e = this.internal;return arguments.length && (e.updateTargetXs(e.data.targets, t), e.redraw({ withUpdateOrgXDomain: !0, withUpdateXDomain: !0 })), e.data.xs;
  }, P.zoom = function (t) {
    var e = this.internal;return t && (e.isTimeSeries() && (t = t.map(function (t) {
      return e.parseDate(t);
    })), e.brush.extent(t), e.redraw({ withUpdateXDomain: !0, withY: e.config.zoom_rescale }), e.config.zoom_onzoom.call(this, e.x.orgDomain())), e.brush.extent();
  }, P.zoom.enable = function (t) {
    var e = this.internal;e.config.zoom_enabled = t, e.updateAndRedraw();
  }, P.unzoom = function () {
    var t = this.internal;t.brush.clear().update(), t.redraw({ withUpdateXDomain: !0 });
  }, P.zoom.max = function (t) {
    var e = this.internal,
        i = e.config,
        n = e.d3;if (0 !== t && !t) return i.zoom_x_max;i.zoom_x_max = n.max([e.orgXDomain[1], t]);
  }, P.zoom.min = function (t) {
    var e = this.internal,
        i = e.config,
        n = e.d3;if (0 !== t && !t) return i.zoom_x_min;i.zoom_x_min = n.min([e.orgXDomain[0], t]);
  }, P.zoom.range = function (t) {
    if (!arguments.length) return { max: this.domain.max(), min: this.domain.min() };void 0 !== t.max && this.domain.max(t.max), void 0 !== t.min && this.domain.min(t.min);
  }, C.initPie = function () {
    var t = this,
        e = t.d3;t.pie = e.layout.pie().value(function (t) {
      return t.values.reduce(function (t, e) {
        return t + e.value;
      }, 0);
    }), t.pie.sort(t.getOrderFunction() || null);
  }, C.updateRadius = function () {
    var t = this,
        e = t.config,
        i = e.gauge_width || e.donut_width;t.radiusExpanded = Math.min(t.arcWidth, t.arcHeight) / 2, t.radius = .95 * t.radiusExpanded, t.innerRadiusRatio = i ? (t.radius - i) / t.radius : .6, t.innerRadius = t.hasType("donut") || t.hasType("gauge") ? t.radius * t.innerRadiusRatio : 0;
  }, C.updateArc = function () {
    var t = this;t.svgArc = t.getSvgArc(), t.svgArcExpanded = t.getSvgArcExpanded(), t.svgArcExpandedSub = t.getSvgArcExpanded(.98);
  }, C.updateAngle = function (t) {
    var e,
        i,
        n,
        a,
        r = this,
        o = r.config,
        s = !1,
        c = 0;return o ? (r.pie(r.filterTargetsToShow(r.data.targets)).forEach(function (e) {
      s || e.data.id !== t.data.id || (s = !0, (t = e).index = c), c++;
    }), isNaN(t.startAngle) && (t.startAngle = 0), isNaN(t.endAngle) && (t.endAngle = t.startAngle), r.isGaugeType(t.data) && (e = o.gauge_min, i = o.gauge_max, n = Math.PI * (o.gauge_fullCircle ? 2 : 1) / (i - e), a = t.value < e ? 0 : t.value < i ? t.value - e : i - e, t.startAngle = o.gauge_startingAngle, t.endAngle = t.startAngle + n * a), s ? t : null) : null;
  }, C.getSvgArc = function () {
    var t = this,
        e = t.d3.svg.arc().outerRadius(t.radius).innerRadius(t.innerRadius),
        i = function i(_i3, n) {
      var a;return n ? e(_i3) : (a = t.updateAngle(_i3), a ? e(a) : "M 0 0");
    };return i.centroid = e.centroid, i;
  }, C.getSvgArcExpanded = function (t) {
    var e = this,
        i = e.d3.svg.arc().outerRadius(e.radiusExpanded * (t || 1)).innerRadius(e.innerRadius);return function (t) {
      var n = e.updateAngle(t);return n ? i(n) : "M 0 0";
    };
  }, C.getArc = function (t, e, i) {
    return i || this.isArcType(t.data) ? this.svgArc(t, e) : "M 0 0";
  }, C.transformForArcLabel = function (t) {
    var e,
        i,
        n,
        a,
        r,
        o = this,
        s = o.config,
        c = o.updateAngle(t),
        d = "";return c && !o.hasType("gauge") && (e = this.svgArc.centroid(c), i = isNaN(e[0]) ? 0 : e[0], n = isNaN(e[1]) ? 0 : e[1], a = Math.sqrt(i * i + n * n), d = "translate(" + i * (r = o.hasType("donut") && s.donut_label_ratio ? u(s.donut_label_ratio) ? s.donut_label_ratio(t, o.radius, a) : s.donut_label_ratio : o.hasType("pie") && s.pie_label_ratio ? u(s.pie_label_ratio) ? s.pie_label_ratio(t, o.radius, a) : s.pie_label_ratio : o.radius && a ? (36 / o.radius > .375 ? 1.175 - 36 / o.radius : .8) * o.radius / a : 0) + "," + n * r + ")"), d;
  }, C.getArcRatio = function (t) {
    var e = this,
        i = e.config,
        n = Math.PI * (e.hasType("gauge") && !i.gauge_fullCircle ? 1 : 2);return t ? (t.endAngle - t.startAngle) / n : null;
  }, C.convertToArcData = function (t) {
    return this.addName({ id: t.data.id, value: t.value, ratio: this.getArcRatio(t), index: t.index });
  }, C.textForArcLabel = function (t) {
    var e,
        i,
        n,
        a,
        r,
        o = this;return o.shouldShowArcLabel() ? (e = o.updateAngle(t), i = e ? e.value : null, n = o.getArcRatio(e), a = t.data.id, o.hasType("gauge") || o.meetsArcLabelThreshold(n) ? (r = o.getArcLabelFormat(), r ? r(i, n, a) : o.defaultArcValueFormat(i, n)) : "") : "";
  }, C.textForGaugeMinMax = function (t, e) {
    var i = this.getGaugeLabelExtents();return i ? i(t, e) : t;
  }, C.expandArc = function (t) {
    var e,
        i = this;i.transiting ? e = window.setInterval(function () {
      i.transiting || (window.clearInterval(e), i.legend.selectAll(".c3-legend-item-focused").size() > 0 && i.expandArc(t));
    }, 10) : (t = i.mapToTargetIds(t), i.svg.selectAll(i.selectorTargets(t, "." + r.chartArc)).each(function (t) {
      i.shouldExpand(t.data.id) && i.d3.select(this).selectAll("path").transition().duration(i.expandDuration(t.data.id)).attr("d", i.svgArcExpanded).transition().duration(2 * i.expandDuration(t.data.id)).attr("d", i.svgArcExpandedSub).each(function (t) {
        i.isDonutType(t.data);
      });
    }));
  }, C.unexpandArc = function (t) {
    var e = this;e.transiting || (t = e.mapToTargetIds(t), e.svg.selectAll(e.selectorTargets(t, "." + r.chartArc)).selectAll("path").transition().duration(function (t) {
      return e.expandDuration(t.data.id);
    }).attr("d", e.svgArc), e.svg.selectAll("." + r.arc));
  }, C.expandDuration = function (t) {
    var e = this,
        i = e.config;return e.isDonutType(t) ? i.donut_expand_duration : e.isGaugeType(t) ? i.gauge_expand_duration : e.isPieType(t) ? i.pie_expand_duration : 50;
  }, C.shouldExpand = function (t) {
    var e = this,
        i = e.config;return e.isDonutType(t) && i.donut_expand || e.isGaugeType(t) && i.gauge_expand || e.isPieType(t) && i.pie_expand;
  }, C.shouldShowArcLabel = function () {
    var t = this,
        e = t.config,
        i = !0;return t.hasType("donut") ? i = e.donut_label_show : t.hasType("pie") && (i = e.pie_label_show), i;
  }, C.meetsArcLabelThreshold = function (t) {
    var e = this,
        i = e.config;return t >= (e.hasType("donut") ? i.donut_label_threshold : i.pie_label_threshold);
  }, C.getArcLabelFormat = function () {
    var t = this,
        e = t.config,
        i = e.pie_label_format;return t.hasType("gauge") ? i = e.gauge_label_format : t.hasType("donut") && (i = e.donut_label_format), i;
  }, C.getGaugeLabelExtents = function () {
    return this.config.gauge_label_extents;
  }, C.getArcTitle = function () {
    var t = this;return t.hasType("donut") ? t.config.donut_title : "";
  }, C.updateTargetsForArc = function (t) {
    var e,
        i = this,
        n = i.main,
        a = i.classChartArc.bind(i),
        o = i.classArcs.bind(i),
        s = i.classFocus.bind(i);(e = n.select("." + r.chartArcs).selectAll("." + r.chartArc).data(i.pie(t)).attr("class", function (t) {
      return a(t) + s(t.data);
    }).enter().append("g").attr("class", a)).append("g").attr("class", o), e.append("text").attr("dy", i.hasType("gauge") ? "-.1em" : ".35em").style("opacity", 0).style("text-anchor", "middle").style("pointer-events", "none");
  }, C.initArc = function () {
    var t = this;t.arcs = t.main.select("." + r.chart).append("g").attr("class", r.chartArcs).attr("transform", t.getTranslate("arc")), t.arcs.append("text").attr("class", r.chartArcsTitle).style("text-anchor", "middle").text(t.getArcTitle());
  }, C.redrawArc = function (t, e, i) {
    var n,
        a = this,
        o = a.d3,
        s = a.config,
        c = a.main;(n = c.selectAll("." + r.arcs).selectAll("." + r.arc).data(a.arcData.bind(a))).enter().append("path").attr("class", a.classArc.bind(a)).style("fill", function (t) {
      return a.color(t.data);
    }).style("cursor", function (t) {
      return s.interaction_enabled && s.data_selection_isselectable(t) ? "pointer" : null;
    }).each(function (t) {
      a.isGaugeType(t.data) && (t.startAngle = t.endAngle = s.gauge_startingAngle), this._current = t;
    }), n.attr("transform", function (t) {
      return !a.isGaugeType(t.data) && i ? "scale(0)" : "";
    }).on("mouseover", s.interaction_enabled ? function (t) {
      var e, i;a.transiting || (e = a.updateAngle(t)) && (i = a.convertToArcData(e), a.expandArc(e.data.id), a.api.focus(e.data.id), a.toggleFocusLegend(e.data.id, !0), a.config.data_onmouseover(i, this));
    } : null).on("mousemove", s.interaction_enabled ? function (t) {
      var e,
          i = a.updateAngle(t);i && (e = [a.convertToArcData(i)], a.showTooltip(e, this));
    } : null).on("mouseout", s.interaction_enabled ? function (t) {
      var e, i;a.transiting || (e = a.updateAngle(t)) && (i = a.convertToArcData(e), a.unexpandArc(e.data.id), a.api.revert(), a.revertLegend(), a.hideTooltip(), a.config.data_onmouseout(i, this));
    } : null).on("click", s.interaction_enabled ? function (t, e) {
      var i,
          n = a.updateAngle(t);n && (i = a.convertToArcData(n), a.toggleShape && a.toggleShape(this, i, e), a.config.data_onclick.call(a.api, i, this));
    } : null).each(function () {
      a.transiting = !0;
    }).transition().duration(t).attrTween("d", function (t) {
      var e,
          i = a.updateAngle(t);return i ? (isNaN(this._current.startAngle) && (this._current.startAngle = 0), isNaN(this._current.endAngle) && (this._current.endAngle = this._current.startAngle), e = o.interpolate(this._current, i), this._current = e(0), function (i) {
        var n = e(i);return n.data = t.data, a.getArc(n, !0);
      }) : function () {
        return "M 0 0";
      };
    }).attr("transform", i ? "scale(1)" : "").style("fill", function (t) {
      return a.levelColor ? a.levelColor(t.data.values[0].value) : a.color(t.data.id);
    }).call(a.endall, function () {
      a.transiting = !1;
    }), n.exit().transition().duration(e).style("opacity", 0).remove(), c.selectAll("." + r.chartArc).select("text").style("opacity", 0).attr("class", function (t) {
      return a.isGaugeType(t.data) ? r.gaugeValue : "";
    }).text(a.textForArcLabel.bind(a)).attr("transform", a.transformForArcLabel.bind(a)).style("font-size", function (t) {
      return a.isGaugeType(t.data) ? Math.round(a.radius / 5) + "px" : "";
    }).transition().duration(t).style("opacity", function (t) {
      return a.isTargetToShow(t.data.id) && a.isArcType(t.data) ? 1 : 0;
    }), c.select("." + r.chartArcsTitle).style("opacity", a.hasType("donut") || a.hasType("gauge") ? 1 : 0), a.hasType("gauge") && (a.arcs.select("." + r.chartArcsBackground).attr("d", function () {
      var t = { data: [{ value: s.gauge_max }], startAngle: s.gauge_startingAngle, endAngle: -1 * s.gauge_startingAngle };return a.getArc(t, !0, !0);
    }), a.arcs.select("." + r.chartArcsGaugeUnit).attr("dy", ".75em").text(s.gauge_label_show ? s.gauge_units : ""), a.arcs.select("." + r.chartArcsGaugeMin).attr("dx", -1 * (a.innerRadius + (a.radius - a.innerRadius) / (s.gauge_fullCircle ? 1 : 2)) + "px").attr("dy", "1.2em").text(s.gauge_label_show ? a.textForGaugeMinMax(s.gauge_min, !1) : ""), a.arcs.select("." + r.chartArcsGaugeMax).attr("dx", a.innerRadius + (a.radius - a.innerRadius) / (s.gauge_fullCircle ? 1 : 2) + "px").attr("dy", "1.2em").text(s.gauge_label_show ? a.textForGaugeMinMax(s.gauge_max, !0) : ""));
  }, C.initGauge = function () {
    var t = this.arcs;this.hasType("gauge") && (t.append("path").attr("class", r.chartArcsBackground), t.append("text").attr("class", r.chartArcsGaugeUnit).style("text-anchor", "middle").style("pointer-events", "none"), t.append("text").attr("class", r.chartArcsGaugeMin).style("text-anchor", "middle").style("pointer-events", "none"), t.append("text").attr("class", r.chartArcsGaugeMax).style("text-anchor", "middle").style("pointer-events", "none"));
  }, C.getGaugeLabelHeight = function () {
    return this.config.gauge_label_show ? 20 : 0;
  }, C.hasCaches = function (t) {
    for (var e = 0; e < t.length; e++) {
      if (!(t[e] in this.cache)) return !1;
    }return !0;
  }, C.addCache = function (t, e) {
    this.cache[t] = this.cloneTarget(e);
  }, C.getCaches = function (t) {
    var e,
        i = [];for (e = 0; e < t.length; e++) {
      t[e] in this.cache && i.push(this.cloneTarget(this.cache[t[e]]));
    }return i;
  }, C.categoryName = function (t) {
    var e = this.config;return t < e.axis_x_categories.length ? e.axis_x_categories[t] : t;
  }, C.generateClass = function (t, e) {
    return " " + t + " " + t + this.getTargetSelectorSuffix(e);
  }, C.classText = function (t) {
    return this.generateClass(r.text, t.index);
  }, C.classTexts = function (t) {
    return this.generateClass(r.texts, t.id);
  }, C.classShape = function (t) {
    return this.generateClass(r.shape, t.index);
  }, C.classShapes = function (t) {
    return this.generateClass(r.shapes, t.id);
  }, C.classLine = function (t) {
    return this.classShape(t) + this.generateClass(r.line, t.id);
  }, C.classLines = function (t) {
    return this.classShapes(t) + this.generateClass(r.lines, t.id);
  }, C.classCircle = function (t) {
    return this.classShape(t) + this.generateClass(r.circle, t.index);
  }, C.classCircles = function (t) {
    return this.classShapes(t) + this.generateClass(r.circles, t.id);
  }, C.classBar = function (t) {
    return this.classShape(t) + this.generateClass(r.bar, t.index);
  }, C.classBars = function (t) {
    return this.classShapes(t) + this.generateClass(r.bars, t.id);
  }, C.classArc = function (t) {
    return this.classShape(t.data) + this.generateClass(r.arc, t.data.id);
  }, C.classArcs = function (t) {
    return this.classShapes(t.data) + this.generateClass(r.arcs, t.data.id);
  }, C.classArea = function (t) {
    return this.classShape(t) + this.generateClass(r.area, t.id);
  }, C.classAreas = function (t) {
    return this.classShapes(t) + this.generateClass(r.areas, t.id);
  }, C.classRegion = function (t, e) {
    return this.generateClass(r.region, e) + " " + ("class" in t ? t.class : "");
  }, C.classEvent = function (t) {
    return this.generateClass(r.eventRect, t.index);
  }, C.classTarget = function (t) {
    var e = this,
        i = e.config.data_classes[t],
        n = "";return i && (n = " " + r.target + "-" + i), e.generateClass(r.target, t) + n;
  }, C.classFocus = function (t) {
    return this.classFocused(t) + this.classDefocused(t);
  }, C.classFocused = function (t) {
    return " " + (this.focusedTargetIds.indexOf(t.id) >= 0 ? r.focused : "");
  }, C.classDefocused = function (t) {
    return " " + (this.defocusedTargetIds.indexOf(t.id) >= 0 ? r.defocused : "");
  }, C.classChartText = function (t) {
    return r.chartText + this.classTarget(t.id);
  }, C.classChartLine = function (t) {
    return r.chartLine + this.classTarget(t.id);
  }, C.classChartBar = function (t) {
    return r.chartBar + this.classTarget(t.id);
  }, C.classChartArc = function (t) {
    return r.chartArc + this.classTarget(t.data.id);
  }, C.getTargetSelectorSuffix = function (t) {
    return t || 0 === t ? ("-" + t).replace(/[\s?!@#$%^&*()_=+,.<>'":;\[\]\/|~`{}\\]/g, "-") : "";
  }, C.selectorTarget = function (t, e) {
    return (e || "") + "." + r.target + this.getTargetSelectorSuffix(t);
  }, C.selectorTargets = function (t, e) {
    var i = this;return t = t || [], t.length ? t.map(function (t) {
      return i.selectorTarget(t, e);
    }) : null;
  }, C.selectorLegend = function (t) {
    return "." + r.legendItem + this.getTargetSelectorSuffix(t);
  }, C.selectorLegends = function (t) {
    var e = this;return t && t.length ? t.map(function (t) {
      return e.selectorLegend(t);
    }) : null;
  }, C.getClipPath = function (t) {
    return "url(" + (window.navigator.appVersion.toLowerCase().indexOf("msie 9.") >= 0 ? "" : document.URL.split("#")[0]) + "#" + t + ")";
  }, C.appendClip = function (t, e) {
    return t.append("clipPath").attr("id", e).append("rect");
  }, C.getAxisClipX = function (t) {
    var e = Math.max(30, this.margin.left);return t ? -(1 + e) : -(e - 1);
  }, C.getAxisClipY = function (t) {
    return t ? -20 : -this.margin.top;
  }, C.getXAxisClipX = function () {
    var t = this;return t.getAxisClipX(!t.config.axis_rotated);
  }, C.getXAxisClipY = function () {
    var t = this;return t.getAxisClipY(!t.config.axis_rotated);
  }, C.getYAxisClipX = function () {
    var t = this;return t.config.axis_y_inner ? -1 : t.getAxisClipX(t.config.axis_rotated);
  }, C.getYAxisClipY = function () {
    var t = this;return t.getAxisClipY(t.config.axis_rotated);
  }, C.getAxisClipWidth = function (t) {
    var e = this,
        i = Math.max(30, e.margin.left),
        n = Math.max(30, e.margin.right);return t ? e.width + 2 + i + n : e.margin.left + 20;
  }, C.getAxisClipHeight = function (t) {
    return (t ? this.margin.bottom : this.margin.top + this.height) + 20;
  }, C.getXAxisClipWidth = function () {
    var t = this;return t.getAxisClipWidth(!t.config.axis_rotated);
  }, C.getXAxisClipHeight = function () {
    var t = this;return t.getAxisClipHeight(!t.config.axis_rotated);
  }, C.getYAxisClipWidth = function () {
    var t = this;return t.getAxisClipWidth(t.config.axis_rotated) + (t.config.axis_y_inner ? 20 : 0);
  }, C.getYAxisClipHeight = function () {
    var t = this;return t.getAxisClipHeight(t.config.axis_rotated);
  }, C.generateColor = function () {
    var t = this,
        e = t.config,
        i = t.d3,
        n = e.data_colors,
        a = S(e.color_pattern) ? e.color_pattern : i.scale.category10().range(),
        r = e.data_color,
        o = [];return function (t) {
      var e,
          i = t.id || t.data && t.data.id || t;return n[i] instanceof Function ? e = n[i](t) : n[i] ? e = n[i] : (o.indexOf(i) < 0 && o.push(i), e = a[o.indexOf(i) % a.length], n[i] = e), r instanceof Function ? r(e, t) : e;
    };
  }, C.generateLevelColor = function () {
    var t = this.config,
        e = t.color_pattern,
        i = t.color_threshold,
        n = "value" === i.unit,
        a = i.values && i.values.length ? i.values : [],
        r = i.max || 100;return S(t.color_threshold) ? function (t) {
      var i,
          o = e[e.length - 1];for (i = 0; i < a.length; i++) {
        if ((n ? t : 100 * t / r) < a[i]) {
          o = e[i];break;
        }
      }return o;
    } : null;
  }, C.getDefaultConfig = function () {
    var t = { bindto: "#chart", svg_classname: void 0, size_width: void 0, size_height: void 0, padding_left: void 0, padding_right: void 0, padding_top: void 0, padding_bottom: void 0, resize_auto: !0, zoom_enabled: !1, zoom_extent: void 0, zoom_privileged: !1, zoom_rescale: !1, zoom_onzoom: function zoom_onzoom() {}, zoom_onzoomstart: function zoom_onzoomstart() {}, zoom_onzoomend: function zoom_onzoomend() {}, zoom_x_min: void 0, zoom_x_max: void 0, interaction_brighten: !0, interaction_enabled: !0, onmouseover: function onmouseover() {}, onmouseout: function onmouseout() {}, onresize: function onresize() {}, onresized: function onresized() {}, oninit: function oninit() {}, onrendered: function onrendered() {}, transition_duration: 350, data_x: void 0, data_xs: {}, data_xFormat: "%Y-%m-%d", data_xLocaltime: !0, data_xSort: !0, data_idConverter: function data_idConverter(t) {
        return t;
      }, data_names: {}, data_classes: {}, data_groups: [], data_axes: {}, data_type: void 0, data_types: {}, data_labels: {}, data_order: "desc", data_regions: {}, data_color: void 0, data_colors: {}, data_hide: !1, data_filter: void 0, data_selection_enabled: !1, data_selection_grouped: !1, data_selection_isselectable: function data_selection_isselectable() {
        return !0;
      }, data_selection_multiple: !0, data_selection_draggable: !1, data_onclick: function data_onclick() {}, data_onmouseover: function data_onmouseover() {}, data_onmouseout: function data_onmouseout() {}, data_onselected: function data_onselected() {}, data_onunselected: function data_onunselected() {}, data_url: void 0, data_headers: void 0, data_json: void 0, data_rows: void 0, data_columns: void 0, data_mimeType: void 0, data_keys: void 0, data_empty_label_text: "", subchart_show: !1, subchart_size_height: 60, subchart_axis_x_show: !0, subchart_onbrush: function subchart_onbrush() {}, color_pattern: [], color_threshold: {}, legend_show: !0, legend_hide: !1, legend_position: "bottom", legend_inset_anchor: "top-left", legend_inset_x: 10, legend_inset_y: 0, legend_inset_step: void 0, legend_item_onclick: void 0, legend_item_onmouseover: void 0, legend_item_onmouseout: void 0, legend_equally: !1, legend_padding: 0, legend_item_tile_width: 10, legend_item_tile_height: 10, axis_rotated: !1, axis_x_show: !0, axis_x_type: "indexed", axis_x_localtime: !0, axis_x_categories: [], axis_x_tick_centered: !1, axis_x_tick_format: void 0, axis_x_tick_culling: {}, axis_x_tick_culling_max: 10, axis_x_tick_count: void 0, axis_x_tick_fit: !0, axis_x_tick_values: null, axis_x_tick_rotate: 0, axis_x_tick_outer: !0, axis_x_tick_multiline: !0, axis_x_tick_width: null, axis_x_max: void 0, axis_x_min: void 0, axis_x_padding: {}, axis_x_height: void 0, axis_x_extent: void 0, axis_x_label: {}, axis_y_show: !0, axis_y_type: void 0, axis_y_max: void 0, axis_y_min: void 0, axis_y_inverted: !1, axis_y_center: void 0, axis_y_inner: void 0, axis_y_label: {}, axis_y_tick_format: void 0, axis_y_tick_outer: !0, axis_y_tick_values: null, axis_y_tick_rotate: 0, axis_y_tick_count: void 0, axis_y_tick_time_value: void 0, axis_y_tick_time_interval: void 0, axis_y_padding: {}, axis_y_default: void 0, axis_y2_show: !1, axis_y2_max: void 0, axis_y2_min: void 0, axis_y2_inverted: !1, axis_y2_center: void 0, axis_y2_inner: void 0, axis_y2_label: {}, axis_y2_tick_format: void 0, axis_y2_tick_outer: !0, axis_y2_tick_values: null, axis_y2_tick_count: void 0, axis_y2_padding: {}, axis_y2_default: void 0, grid_x_show: !1, grid_x_type: "tick", grid_x_lines: [], grid_y_show: !1, grid_y_lines: [], grid_y_ticks: 10, grid_focus_show: !0, grid_lines_front: !0, point_show: !0, point_r: 2.5, point_sensitivity: 10, point_focus_expand_enabled: !0, point_focus_expand_r: void 0, point_select_r: void 0, line_connectNull: !1, line_step_type: "step", bar_width: void 0, bar_width_ratio: .6, bar_width_max: void 0, bar_zerobased: !0, bar_space: 0, area_zerobased: !0, area_above: !1, pie_label_show: !0, pie_label_format: void 0, pie_label_threshold: .05, pie_label_ratio: void 0, pie_expand: {}, pie_expand_duration: 50, gauge_fullCircle: !1, gauge_label_show: !0, gauge_label_format: void 0, gauge_min: 0, gauge_max: 100, gauge_startingAngle: -1 * Math.PI / 2, gauge_label_extents: void 0, gauge_units: void 0, gauge_width: void 0, gauge_expand: {}, gauge_expand_duration: 50, donut_label_show: !0, donut_label_format: void 0, donut_label_threshold: .05, donut_label_ratio: void 0, donut_width: void 0, donut_title: "", donut_expand: {}, donut_expand_duration: 50, spline_interpolation_type: "cardinal", regions: [], tooltip_show: !0, tooltip_grouped: !0, tooltip_order: void 0, tooltip_format_title: void 0, tooltip_format_name: void 0, tooltip_format_value: void 0, tooltip_position: void 0, tooltip_contents: function tooltip_contents(t, e, i, n) {
        return this.getTooltipContent ? this.getTooltipContent(t, e, i, n) : "";
      }, tooltip_init_show: !1, tooltip_init_x: 0, tooltip_init_position: { top: "0px", left: "50px" }, tooltip_onshow: function tooltip_onshow() {}, tooltip_onhide: function tooltip_onhide() {}, title_text: void 0, title_padding: { top: 0, right: 0, bottom: 0, left: 0 }, title_position: "top-center" };return Object.keys(this.additionalConfig).forEach(function (e) {
      t[e] = this.additionalConfig[e];
    }, this), t;
  }, C.additionalConfig = {}, C.loadConfig = function (t) {
    function e() {
      var t = n.shift();return t && i && "object" === (void 0 === i ? "undefined" : o(i)) && t in i ? (i = i[t], e()) : t ? void 0 : i;
    }var i,
        n,
        a,
        r = this.config;Object.keys(r).forEach(function (o) {
      i = t, n = o.split("_"), void 0 !== (a = e()) && (r[o] = a);
    });
  }, C.convertUrlToData = function (t, e, i, n, a) {
    var r = this,
        o = e || "csv",
        s = r.d3.xhr(t);i && Object.keys(i).forEach(function (t) {
      s.header(t, i[t]);
    }), s.get(function (t, e) {
      var i,
          s = e.response || e.responseText;if (!e) throw new Error(t.responseURL + " " + t.status + " (" + t.statusText + ")");i = "json" === o ? r.convertJsonToData(JSON.parse(s), n) : "tsv" === o ? r.convertTsvToData(s) : r.convertCsvToData(s), a.call(r, i);
    });
  }, C.convertXsvToData = function (t, e) {
    var i,
        n = e.parseRows(t);return 1 === n.length ? (i = [{}], n[0].forEach(function (t) {
      i[0][t] = null;
    })) : i = e.parse(t), i;
  }, C.convertCsvToData = function (t) {
    return this.convertXsvToData(t, this.d3.csv);
  }, C.convertTsvToData = function (t) {
    return this.convertXsvToData(t, this.d3.tsv);
  }, C.convertJsonToData = function (t, e) {
    var i,
        n,
        a = this,
        r = [];return e ? (e.x ? (i = e.value.concat(e.x), a.config.data_x = e.x) : i = e.value, r.push(i), t.forEach(function (t) {
      var e = [];i.forEach(function (i) {
        var n = a.findValueInJson(t, i);f(n) && (n = null), e.push(n);
      }), r.push(e);
    }), n = a.convertRowsToData(r)) : (Object.keys(t).forEach(function (e) {
      r.push([e].concat(t[e]));
    }), n = a.convertColumnsToData(r)), n;
  }, C.findValueInJson = function (t, e) {
    for (var i = (e = (e = e.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "")).split("."), n = 0; n < i.length; ++n) {
      var a = i[n];if (!(a in t)) return;t = t[a];
    }return t;
  }, C.convertRowsToData = function (t) {
    for (var e = [], i = t[0], n = 1; n < t.length; n++) {
      for (var a = {}, r = 0; r < t[n].length; r++) {
        if (void 0 === t[n][r]) throw new Error("Source data is missing a component at (" + n + "," + r + ")!");a[i[r]] = t[n][r];
      }e.push(a);
    }return e;
  }, C.convertColumnsToData = function (t) {
    for (var e = [], i = 0; i < t.length; i++) {
      for (var n = t[i][0], a = 1; a < t[i].length; a++) {
        if (void 0 === e[a - 1] && (e[a - 1] = {}), void 0 === t[i][a]) throw new Error("Source data is missing a component at (" + i + "," + a + ")!");e[a - 1][n] = t[i][a];
      }
    }return e;
  }, C.convertDataToTargets = function (t, e) {
    var i,
        n = this,
        a = n.config,
        r = n.d3.keys(t[0]).filter(n.isNotX, n),
        o = n.d3.keys(t[0]).filter(n.isX, n);return r.forEach(function (i) {
      var r = n.getXKey(i);n.isCustomX() || n.isTimeSeries() ? o.indexOf(r) >= 0 ? n.data.xs[i] = (e && n.data.xs[i] ? n.data.xs[i] : []).concat(t.map(function (t) {
        return t[r];
      }).filter(l).map(function (t, e) {
        return n.generateTargetX(t, i, e);
      })) : a.data_x ? n.data.xs[i] = n.getOtherTargetXs() : S(a.data_xs) && (n.data.xs[i] = n.getXValuesOfXKey(r, n.data.targets)) : n.data.xs[i] = t.map(function (t, e) {
        return e;
      });
    }), r.forEach(function (t) {
      if (!n.data.xs[t]) throw new Error('x is not defined for id = "' + t + '".');
    }), (i = r.map(function (e, i) {
      var r = a.data_idConverter(e);return { id: r, id_org: e, values: t.map(function (t, o) {
          var s,
              c = t[n.getXKey(e)],
              d = null === t[e] || isNaN(t[e]) ? null : +t[e];return n.isCustomX() && n.isCategorized() && void 0 !== c ? (0 === i && 0 === o && (a.axis_x_categories = []), -1 === (s = a.axis_x_categories.indexOf(c)) && (s = a.axis_x_categories.length, a.axis_x_categories.push(c))) : s = n.generateTargetX(c, e, o), (void 0 === t[e] || n.data.xs[e].length <= o) && (s = void 0), { x: s, value: d, id: r };
        }).filter(function (t) {
          return p(t.x);
        }) };
    })).forEach(function (t) {
      var e;a.data_xSort && (t.values = t.values.sort(function (t, e) {
        return (t.x || 0 === t.x ? t.x : 1 / 0) - (e.x || 0 === e.x ? e.x : 1 / 0);
      })), e = 0, t.values.forEach(function (t) {
        t.index = e++;
      }), n.data.xs[t.id].sort(function (t, e) {
        return t - e;
      });
    }), n.hasNegativeValue = n.hasNegativeValueInTargets(i), n.hasPositiveValue = n.hasPositiveValueInTargets(i), a.data_type && n.setTargetType(n.mapToIds(i).filter(function (t) {
      return !(t in a.data_types);
    }), a.data_type), i.forEach(function (t) {
      n.addCache(t.id_org, t);
    }), i;
  }, C.isX = function (t) {
    var e = this.config;return e.data_x && t === e.data_x || S(e.data_xs) && v(e.data_xs, t);
  }, C.isNotX = function (t) {
    return !this.isX(t);
  }, C.getXKey = function (t) {
    var e = this.config;return e.data_x ? e.data_x : S(e.data_xs) ? e.data_xs[t] : null;
  }, C.getXValuesOfXKey = function (t, e) {
    var i,
        n = this;return (e && S(e) ? n.mapToIds(e) : []).forEach(function (e) {
      n.getXKey(e) === t && (i = n.data.xs[e]);
    }), i;
  }, C.getIndexByX = function (t) {
    var e = this,
        i = e.filterByX(e.data.targets, t);return i.length ? i[0].index : null;
  }, C.getXValue = function (t, e) {
    var i = this;return t in i.data.xs && i.data.xs[t] && l(i.data.xs[t][e]) ? i.data.xs[t][e] : e;
  }, C.getOtherTargetXs = function () {
    var t = this,
        e = Object.keys(t.data.xs);return e.length ? t.data.xs[e[0]] : null;
  }, C.getOtherTargetX = function (t) {
    var e = this.getOtherTargetXs();return e && t < e.length ? e[t] : null;
  }, C.addXs = function (t) {
    var e = this;Object.keys(t).forEach(function (i) {
      e.config.data_xs[i] = t[i];
    });
  }, C.hasMultipleX = function (t) {
    return this.d3.set(Object.keys(t).map(function (e) {
      return t[e];
    })).size() > 1;
  }, C.isMultipleX = function () {
    return S(this.config.data_xs) || !this.config.data_xSort || this.hasType("scatter");
  }, C.addName = function (t) {
    var e,
        i = this;return t && (e = i.config.data_names[t.id], t.name = void 0 !== e ? e : t.id), t;
  }, C.getValueOnIndex = function (t, e) {
    var i = t.filter(function (t) {
      return t.index === e;
    });return i.length ? i[0] : null;
  }, C.updateTargetX = function (t, e) {
    var i = this;t.forEach(function (t) {
      t.values.forEach(function (n, a) {
        n.x = i.generateTargetX(e[a], t.id, a);
      }), i.data.xs[t.id] = e;
    });
  }, C.updateTargetXs = function (t, e) {
    var i = this;t.forEach(function (t) {
      e[t.id] && i.updateTargetX([t], e[t.id]);
    });
  }, C.generateTargetX = function (t, e, i) {
    var n = this;return n.isTimeSeries() ? t ? n.parseDate(t) : n.parseDate(n.getXValue(e, i)) : n.isCustomX() && !n.isCategorized() ? l(t) ? +t : n.getXValue(e, i) : i;
  }, C.cloneTarget = function (t) {
    return { id: t.id, id_org: t.id_org, values: t.values.map(function (t) {
        return { x: t.x, value: t.value, id: t.id };
      }) };
  }, C.updateXs = function () {
    var t = this;t.data.targets.length && (t.xs = [], t.data.targets[0].values.forEach(function (e) {
      t.xs[e.index] = e.x;
    }));
  }, C.getPrevX = function (t) {
    var e = this.xs[t - 1];return void 0 !== e ? e : null;
  }, C.getNextX = function (t) {
    var e = this.xs[t + 1];return void 0 !== e ? e : null;
  }, C.getMaxDataCount = function () {
    var t = this;return t.d3.max(t.data.targets, function (t) {
      return t.values.length;
    });
  }, C.getMaxDataCountTarget = function (t) {
    var e,
        i = t.length,
        n = 0;return i > 1 ? t.forEach(function (t) {
      t.values.length > n && (e = t, n = t.values.length);
    }) : e = i ? t[0] : null, e;
  }, C.getEdgeX = function (t) {
    var e = this;return t.length ? [e.d3.min(t, function (t) {
      return t.values[0].x;
    }), e.d3.max(t, function (t) {
      return t.values[t.values.length - 1].x;
    })] : [0, 0];
  }, C.mapToIds = function (t) {
    return t.map(function (t) {
      return t.id;
    });
  }, C.mapToTargetIds = function (t) {
    var e = this;return t ? [].concat(t) : e.mapToIds(e.data.targets);
  }, C.hasTarget = function (t, e) {
    var i,
        n = this.mapToIds(t);for (i = 0; i < n.length; i++) {
      if (n[i] === e) return !0;
    }return !1;
  }, C.isTargetToShow = function (t) {
    return this.hiddenTargetIds.indexOf(t) < 0;
  }, C.isLegendToShow = function (t) {
    return this.hiddenLegendIds.indexOf(t) < 0;
  }, C.filterTargetsToShow = function (t) {
    var e = this;return t.filter(function (t) {
      return e.isTargetToShow(t.id);
    });
  }, C.mapTargetsToUniqueXs = function (t) {
    var e = this,
        i = e.d3.set(e.d3.merge(t.map(function (t) {
      return t.values.map(function (t) {
        return +t.x;
      });
    }))).values();return (i = e.isTimeSeries() ? i.map(function (t) {
      return new Date(+t);
    }) : i.map(function (t) {
      return +t;
    })).sort(function (t, e) {
      return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
    });
  }, C.addHiddenTargetIds = function (t) {
    t = t instanceof Array ? t : new Array(t);for (var e = 0; e < t.length; e++) {
      this.hiddenTargetIds.indexOf(t[e]) < 0 && (this.hiddenTargetIds = this.hiddenTargetIds.concat(t[e]));
    }
  }, C.removeHiddenTargetIds = function (t) {
    this.hiddenTargetIds = this.hiddenTargetIds.filter(function (e) {
      return t.indexOf(e) < 0;
    });
  }, C.addHiddenLegendIds = function (t) {
    t = t instanceof Array ? t : new Array(t);for (var e = 0; e < t.length; e++) {
      this.hiddenLegendIds.indexOf(t[e]) < 0 && (this.hiddenLegendIds = this.hiddenLegendIds.concat(t[e]));
    }
  }, C.removeHiddenLegendIds = function (t) {
    this.hiddenLegendIds = this.hiddenLegendIds.filter(function (e) {
      return t.indexOf(e) < 0;
    });
  }, C.getValuesAsIdKeyed = function (t) {
    var e = {};return t.forEach(function (t) {
      e[t.id] = [], t.values.forEach(function (i) {
        e[t.id].push(i.value);
      });
    }), e;
  }, C.checkValueInTargets = function (t, e) {
    var i,
        n,
        a,
        r = Object.keys(t);for (i = 0; i < r.length; i++) {
      for (a = t[r[i]].values, n = 0; n < a.length; n++) {
        if (e(a[n].value)) return !0;
      }
    }return !1;
  }, C.hasNegativeValueInTargets = function (t) {
    return this.checkValueInTargets(t, function (t) {
      return t < 0;
    });
  }, C.hasPositiveValueInTargets = function (t) {
    return this.checkValueInTargets(t, function (t) {
      return t > 0;
    });
  }, C.isOrderDesc = function () {
    var t = this.config;return "string" == typeof t.data_order && "desc" === t.data_order.toLowerCase();
  }, C.isOrderAsc = function () {
    var t = this.config;return "string" == typeof t.data_order && "asc" === t.data_order.toLowerCase();
  }, C.getOrderFunction = function () {
    var t = this,
        e = t.config,
        i = t.isOrderAsc(),
        n = t.isOrderDesc();if (i || n) return function (t, e) {
      var i = function i(t, e) {
        return t + Math.abs(e.value);
      },
          a = t.values.reduce(i, 0),
          r = e.values.reduce(i, 0);return n ? r - a : a - r;
    };if (u(e.data_order)) return e.data_order;if (h(e.data_order)) {
      var a = e.data_order;return function (t, e) {
        return a.indexOf(t.id) - a.indexOf(e.id);
      };
    }
  }, C.orderTargets = function (t) {
    var e = this.getOrderFunction();return e && (t.sort(e), (this.isOrderAsc() || this.isOrderDesc()) && t.reverse()), t;
  }, C.filterByX = function (t, e) {
    return this.d3.merge(t.map(function (t) {
      return t.values;
    })).filter(function (t) {
      return t.x - e == 0;
    });
  }, C.filterRemoveNull = function (t) {
    return t.filter(function (t) {
      return l(t.value);
    });
  }, C.filterByXDomain = function (t, e) {
    return t.map(function (t) {
      return { id: t.id, id_org: t.id_org, values: t.values.filter(function (t) {
          return e[0] <= t.x && t.x <= e[1];
        }) };
    });
  }, C.hasDataLabel = function () {
    var t = this.config;return !("boolean" != typeof t.data_labels || !t.data_labels) || !("object" !== o(t.data_labels) || !S(t.data_labels));
  }, C.getDataLabelLength = function (t, e, i) {
    var n = this,
        a = [0, 0];return n.selectChart.select("svg").selectAll(".dummy").data([t, e]).enter().append("text").text(function (t) {
      return n.dataLabelFormat(t.id)(t);
    }).each(function (t, e) {
      a[e] = 1.3 * this.getBoundingClientRect()[i];
    }).remove(), a;
  }, C.isNoneArc = function (t) {
    return this.hasTarget(this.data.targets, t.id);
  }, C.isArc = function (t) {
    return "data" in t && this.hasTarget(this.data.targets, t.data.id);
  }, C.findSameXOfValues = function (t, e) {
    var i,
        n = t[e].x,
        a = [];for (i = e - 1; i >= 0 && n === t[i].x; i--) {
      a.push(t[i]);
    }for (i = e; i < t.length && n === t[i].x; i++) {
      a.push(t[i]);
    }return a;
  }, C.findClosestFromTargets = function (t, e) {
    var i,
        n = this;return i = t.map(function (t) {
      return n.findClosest(t.values, e);
    }), n.findClosest(i, e);
  }, C.findClosest = function (t, e) {
    var i,
        n = this,
        a = n.config.point_sensitivity;return t.filter(function (t) {
      return t && n.isBarType(t.id);
    }).forEach(function (t) {
      var e = n.main.select("." + r.bars + n.getTargetSelectorSuffix(t.id) + " ." + r.bar + "-" + t.index).node();!i && n.isWithinBar(e) && (i = t);
    }), t.filter(function (t) {
      return t && !n.isBarType(t.id);
    }).forEach(function (t) {
      var r = n.dist(t, e);r < a && (a = r, i = t);
    }), i;
  }, C.dist = function (t, e) {
    var i = this,
        n = i.config,
        a = n.axis_rotated ? 1 : 0,
        r = n.axis_rotated ? 0 : 1,
        o = i.circleY(t, t.index),
        s = i.x(t.x);return Math.sqrt(Math.pow(s - e[a], 2) + Math.pow(o - e[r], 2));
  }, C.convertValuesToStep = function (t) {
    var e,
        i = [].concat(t);if (!this.isCategorized()) return t;for (e = t.length + 1; 0 < e; e--) {
      i[e] = i[e - 1];
    }return i[0] = { x: i[0].x - 1, value: i[0].value, id: i[0].id }, i[t.length + 1] = { x: i[t.length].x + 1, value: i[t.length].value, id: i[t.length].id }, i;
  }, C.updateDataAttributes = function (t, e) {
    var i = this,
        n = i.config["data_" + t];return void 0 === e ? n : (Object.keys(e).forEach(function (t) {
      n[t] = e[t];
    }), i.redraw({ withLegend: !0 }), n);
  }, C.load = function (t, e) {
    var i = this;t && (e.filter && (t = t.filter(e.filter)), (e.type || e.types) && t.forEach(function (t) {
      var n = e.types && e.types[t.id] ? e.types[t.id] : e.type;i.setTargetType(t.id, n);
    }), i.data.targets.forEach(function (e) {
      for (var i = 0; i < t.length; i++) {
        if (e.id === t[i].id) {
          e.values = t[i].values, t.splice(i, 1);break;
        }
      }
    }), i.data.targets = i.data.targets.concat(t)), i.updateTargets(i.data.targets), i.redraw({ withUpdateOrgXDomain: !0, withUpdateXDomain: !0, withLegend: !0 }), e.done && e.done();
  }, C.loadFromArgs = function (t) {
    var e = this;t.data ? e.load(e.convertDataToTargets(t.data), t) : t.url ? e.convertUrlToData(t.url, t.mimeType, t.headers, t.keys, function (i) {
      e.load(e.convertDataToTargets(i), t);
    }) : t.json ? e.load(e.convertDataToTargets(e.convertJsonToData(t.json, t.keys)), t) : t.rows ? e.load(e.convertDataToTargets(e.convertRowsToData(t.rows)), t) : t.columns ? e.load(e.convertDataToTargets(e.convertColumnsToData(t.columns)), t) : e.load(null, t);
  }, C.unload = function (t, e) {
    var i = this;e || (e = function e() {}), (t = t.filter(function (t) {
      return i.hasTarget(i.data.targets, t);
    })) && 0 !== t.length ? (i.svg.selectAll(t.map(function (t) {
      return i.selectorTarget(t);
    })).transition().style("opacity", 0).remove().call(i.endall, e), t.forEach(function (t) {
      i.withoutFadeIn[t] = !1, i.legend && i.legend.selectAll("." + r.legendItem + i.getTargetSelectorSuffix(t)).remove(), i.data.targets = i.data.targets.filter(function (e) {
        return e.id !== t;
      });
    })) : e();
  }, C.getYDomainMin = function (t) {
    var e,
        i,
        n,
        a,
        r,
        o,
        s = this,
        c = s.config,
        d = s.mapToIds(t),
        l = s.getValuesAsIdKeyed(t);if (c.data_groups.length > 0) for (o = s.hasNegativeValueInTargets(t), e = 0; e < c.data_groups.length; e++) {
      if (0 !== (a = c.data_groups[e].filter(function (t) {
        return d.indexOf(t) >= 0;
      })).length) for (n = a[0], o && l[n] && l[n].forEach(function (t, e) {
        l[n][e] = t < 0 ? t : 0;
      }), i = 1; i < a.length; i++) {
        r = a[i], l[r] && l[r].forEach(function (t, e) {
          s.axis.getId(r) !== s.axis.getId(n) || !l[n] || o && +t > 0 || (l[n][e] += +t);
        });
      }
    }return s.d3.min(Object.keys(l).map(function (t) {
      return s.d3.min(l[t]);
    }));
  }, C.getYDomainMax = function (t) {
    var e,
        i,
        n,
        a,
        r,
        o,
        s = this,
        c = s.config,
        d = s.mapToIds(t),
        l = s.getValuesAsIdKeyed(t);if (c.data_groups.length > 0) for (o = s.hasPositiveValueInTargets(t), e = 0; e < c.data_groups.length; e++) {
      if (0 !== (a = c.data_groups[e].filter(function (t) {
        return d.indexOf(t) >= 0;
      })).length) for (n = a[0], o && l[n] && l[n].forEach(function (t, e) {
        l[n][e] = t > 0 ? t : 0;
      }), i = 1; i < a.length; i++) {
        r = a[i], l[r] && l[r].forEach(function (t, e) {
          s.axis.getId(r) !== s.axis.getId(n) || !l[n] || o && +t < 0 || (l[n][e] += +t);
        });
      }
    }return s.d3.max(Object.keys(l).map(function (t) {
      return s.d3.max(l[t]);
    }));
  }, C.getYDomain = function (t, e, i) {
    var n,
        a,
        r,
        o,
        s,
        c,
        d,
        u,
        h,
        g,
        f = this,
        p = f.config,
        _ = t.filter(function (t) {
      return f.axis.getId(t.id) === e;
    }),
        x = i ? f.filterByXDomain(_, i) : _,
        y = "y2" === e ? p.axis_y2_min : p.axis_y_min,
        w = "y2" === e ? p.axis_y2_max : p.axis_y_max,
        v = f.getYDomainMin(x),
        b = f.getYDomainMax(x),
        T = "y2" === e ? p.axis_y2_center : p.axis_y_center,
        A = f.hasType("bar", x) && p.bar_zerobased || f.hasType("area", x) && p.area_zerobased,
        P = "y2" === e ? p.axis_y2_inverted : p.axis_y_inverted,
        C = f.hasDataLabel() && p.axis_rotated,
        L = f.hasDataLabel() && !p.axis_rotated;return v = l(y) ? y : l(w) ? v < w ? v : w - 10 : v, b = l(w) ? w : l(y) ? y < b ? b : y + 10 : b, 0 === x.length ? "y2" === e ? f.y2.domain() : f.y.domain() : (isNaN(v) && (v = 0), isNaN(b) && (b = v), v === b && (v < 0 ? b = 0 : v = 0), h = v >= 0 && b >= 0, g = v <= 0 && b <= 0, (l(y) && h || l(w) && g) && (A = !1), A && (h && (v = 0), g && (b = 0)), a = Math.abs(b - v), r = o = .1 * a, void 0 !== T && (b = T + (s = Math.max(Math.abs(v), Math.abs(b))), v = T - s), C ? (c = f.getDataLabelLength(v, b, "width"), d = m(f.y.range()), r += a * ((u = [c[0] / d, c[1] / d])[1] / (1 - u[0] - u[1])), o += a * (u[0] / (1 - u[0] - u[1]))) : L && (c = f.getDataLabelLength(v, b, "height"), r += f.axis.convertPixelsToAxisPadding(c[1], a), o += f.axis.convertPixelsToAxisPadding(c[0], a)), "y" === e && S(p.axis_y_padding) && (r = f.axis.getPadding(p.axis_y_padding, "top", r, a), o = f.axis.getPadding(p.axis_y_padding, "bottom", o, a)), "y2" === e && S(p.axis_y2_padding) && (r = f.axis.getPadding(p.axis_y2_padding, "top", r, a), o = f.axis.getPadding(p.axis_y2_padding, "bottom", o, a)), A && (h && (o = v), g && (r = -b)), n = [v - o, b + r], P ? n.reverse() : n);
  }, C.getXDomainMin = function (t) {
    var e = this,
        i = e.config;return void 0 !== i.axis_x_min ? e.isTimeSeries() ? this.parseDate(i.axis_x_min) : i.axis_x_min : e.d3.min(t, function (t) {
      return e.d3.min(t.values, function (t) {
        return t.x;
      });
    });
  }, C.getXDomainMax = function (t) {
    var e = this,
        i = e.config;return void 0 !== i.axis_x_max ? e.isTimeSeries() ? this.parseDate(i.axis_x_max) : i.axis_x_max : e.d3.max(t, function (t) {
      return e.d3.max(t.values, function (t) {
        return t.x;
      });
    });
  }, C.getXDomainPadding = function (t) {
    var e,
        i,
        n,
        a,
        r = this,
        s = r.config,
        c = t[1] - t[0];return i = r.isCategorized() ? 0 : r.hasType("bar") ? (e = r.getMaxDataCount()) > 1 ? c / (e - 1) / 2 : .5 : .01 * c, "object" === o(s.axis_x_padding) && S(s.axis_x_padding) ? (n = l(s.axis_x_padding.left) ? s.axis_x_padding.left : i, a = l(s.axis_x_padding.right) ? s.axis_x_padding.right : i) : n = a = "number" == typeof s.axis_x_padding ? s.axis_x_padding : i, { left: n, right: a };
  }, C.getXDomain = function (t) {
    var e = this,
        i = [e.getXDomainMin(t), e.getXDomainMax(t)],
        n = i[0],
        a = i[1],
        r = e.getXDomainPadding(i),
        o = 0,
        s = 0;return n - a != 0 || e.isCategorized() || (e.isTimeSeries() ? (n = new Date(.5 * n.getTime()), a = new Date(1.5 * a.getTime())) : (n = 0 === n ? 1 : .5 * n, a = 0 === a ? -1 : 1.5 * a)), (n || 0 === n) && (o = e.isTimeSeries() ? new Date(n.getTime() - r.left) : n - r.left), (a || 0 === a) && (s = e.isTimeSeries() ? new Date(a.getTime() + r.right) : a + r.right), [o, s];
  }, C.updateXDomain = function (t, e, i, n, a) {
    var r = this,
        o = r.config;return i && (r.x.domain(a || r.d3.extent(r.getXDomain(t))), r.orgXDomain = r.x.domain(), o.zoom_enabled && r.zoom.scale(r.x).updateScaleExtent(), r.subX.domain(r.x.domain()), r.brush && r.brush.scale(r.subX)), e && (r.x.domain(a || (!r.brush || r.brush.empty() ? r.orgXDomain : r.brush.extent())), o.zoom_enabled && r.zoom.scale(r.x).updateScaleExtent()), n && r.x.domain(r.trimXDomain(r.x.orgDomain())), r.x.domain();
  }, C.trimXDomain = function (t) {
    var e = this.getZoomDomain(),
        i = e[0],
        n = e[1];return t[0] <= i && (t[1] = +t[1] + (i - t[0]), t[0] = i), n <= t[1] && (t[0] = +t[0] - (t[1] - n), t[1] = n), t;
  }, C.drag = function (t) {
    var e,
        i,
        n,
        a,
        o,
        s,
        c,
        d,
        l = this,
        u = l.config,
        h = l.main,
        g = l.d3;l.hasArcType() || u.data_selection_enabled && (u.zoom_enabled && !l.zoom.altDomain || u.data_selection_multiple && (e = l.dragStart[0], i = l.dragStart[1], n = t[0], a = t[1], o = Math.min(e, n), s = Math.max(e, n), c = u.data_selection_grouped ? l.margin.top : Math.min(i, a), d = u.data_selection_grouped ? l.height : Math.max(i, a), h.select("." + r.dragarea).attr("x", o).attr("y", c).attr("width", s - o).attr("height", d - c), h.selectAll("." + r.shapes).selectAll("." + r.shape).filter(function (t) {
      return u.data_selection_isselectable(t);
    }).each(function (t, e) {
      var i,
          n,
          a,
          u,
          h,
          f,
          p = g.select(this),
          _ = p.classed(r.SELECTED),
          x = p.classed(r.INCLUDED),
          m = !1;if (p.classed(r.circle)) i = 1 * p.attr("cx"), n = 1 * p.attr("cy"), h = l.togglePoint, m = o < i && i < s && c < n && n < d;else {
        if (!p.classed(r.bar)) return;i = (f = T(this)).x, n = f.y, a = f.width, u = f.height, h = l.togglePath, m = !(s < i || i + a < o || d < n || n + u < c);
      }m ^ x && (p.classed(r.INCLUDED, !x), p.classed(r.SELECTED, !_), h.call(l, !_, p, t, e));
    })));
  }, C.dragstart = function (t) {
    var e = this,
        i = e.config;e.hasArcType() || i.data_selection_enabled && (e.dragStart = t, e.main.select("." + r.chart).append("rect").attr("class", r.dragarea).style("opacity", .1), e.dragging = !0);
  }, C.dragend = function () {
    var t = this,
        e = t.config;t.hasArcType() || e.data_selection_enabled && (t.main.select("." + r.dragarea).transition().duration(100).style("opacity", 0).remove(), t.main.selectAll("." + r.shape).classed(r.INCLUDED, !1), t.dragging = !1);
  }, C.getYFormat = function (t) {
    var e = this,
        i = t && !e.hasType("gauge") ? e.defaultArcValueFormat : e.yFormat,
        n = t && !e.hasType("gauge") ? e.defaultArcValueFormat : e.y2Format;return function (t, a, r) {
      return ("y2" === e.axis.getId(r) ? n : i).call(e, t, a);
    };
  }, C.yFormat = function (t) {
    var e = this,
        i = e.config;return (i.axis_y_tick_format ? i.axis_y_tick_format : e.defaultValueFormat)(t);
  }, C.y2Format = function (t) {
    var e = this,
        i = e.config;return (i.axis_y2_tick_format ? i.axis_y2_tick_format : e.defaultValueFormat)(t);
  }, C.defaultValueFormat = function (t) {
    return l(t) ? +t : "";
  }, C.defaultArcValueFormat = function (t, e) {
    return (100 * e).toFixed(1) + "%";
  }, C.dataLabelFormat = function (t) {
    var e = this.config.data_labels,
        i = function i(t) {
      return l(t) ? +t : "";
    };return "function" == typeof e.format ? e.format : "object" === o(e.format) ? e.format[t] ? !0 === e.format[t] ? i : e.format[t] : function () {
      return "";
    } : i;
  }, C.initGrid = function () {
    var t = this,
        e = t.config,
        i = t.d3;t.grid = t.main.append("g").attr("clip-path", t.clipPathForGrid).attr("class", r.grid), e.grid_x_show && t.grid.append("g").attr("class", r.xgrids), e.grid_y_show && t.grid.append("g").attr("class", r.ygrids), e.grid_focus_show && t.grid.append("g").attr("class", r.xgridFocus).append("line").attr("class", r.xgridFocus), t.xgrid = i.selectAll([]), e.grid_lines_front || t.initGridLines();
  }, C.initGridLines = function () {
    var t = this,
        e = t.d3;t.gridLines = t.main.append("g").attr("clip-path", t.clipPathForGrid).attr("class", r.grid + " " + r.gridLines), t.gridLines.append("g").attr("class", r.xgridLines), t.gridLines.append("g").attr("class", r.ygridLines), t.xgridLines = e.selectAll([]);
  }, C.updateXGrid = function (t) {
    var e = this,
        i = e.config,
        n = e.d3,
        a = e.generateGridData(i.grid_x_type, e.x),
        o = e.isCategorized() ? e.xAxis.tickOffset() : 0;e.xgridAttr = i.axis_rotated ? { x1: 0, x2: e.width, y1: function y1(t) {
        return e.x(t) - o;
      }, y2: function y2(t) {
        return e.x(t) - o;
      } } : { x1: function x1(t) {
        return e.x(t) + o;
      }, x2: function x2(t) {
        return e.x(t) + o;
      }, y1: 0, y2: e.height }, e.xgrid = e.main.select("." + r.xgrids).selectAll("." + r.xgrid).data(a), e.xgrid.enter().append("line").attr("class", r.xgrid), t || e.xgrid.attr(e.xgridAttr).style("opacity", function () {
      return +n.select(this).attr(i.axis_rotated ? "y1" : "x1") === (i.axis_rotated ? e.height : 0) ? 0 : 1;
    }), e.xgrid.exit().remove();
  }, C.updateYGrid = function () {
    var t = this,
        e = t.config,
        i = t.yAxis.tickValues() || t.y.ticks(e.grid_y_ticks);t.ygrid = t.main.select("." + r.ygrids).selectAll("." + r.ygrid).data(i), t.ygrid.enter().append("line").attr("class", r.ygrid), t.ygrid.attr("x1", e.axis_rotated ? t.y : 0).attr("x2", e.axis_rotated ? t.y : t.width).attr("y1", e.axis_rotated ? 0 : t.y).attr("y2", e.axis_rotated ? t.height : t.y), t.ygrid.exit().remove(), t.smoothLines(t.ygrid, "grid");
  }, C.gridTextAnchor = function (t) {
    return t.position ? t.position : "end";
  }, C.gridTextDx = function (t) {
    return "start" === t.position ? 4 : "middle" === t.position ? 0 : -4;
  }, C.xGridTextX = function (t) {
    return "start" === t.position ? -this.height : "middle" === t.position ? -this.height / 2 : 0;
  }, C.yGridTextX = function (t) {
    return "start" === t.position ? 0 : "middle" === t.position ? this.width / 2 : this.width;
  }, C.updateGrid = function (t) {
    var e,
        i,
        n,
        a = this,
        o = a.main,
        s = a.config;a.grid.style("visibility", a.hasArcType() ? "hidden" : "visible"), o.select("line." + r.xgridFocus).style("visibility", "hidden"), s.grid_x_show && a.updateXGrid(), a.xgridLines = o.select("." + r.xgridLines).selectAll("." + r.xgridLine).data(s.grid_x_lines), (e = a.xgridLines.enter().append("g").attr("class", function (t) {
      return r.xgridLine + (t.class ? " " + t.class : "");
    })).append("line").style("opacity", 0), e.append("text").attr("text-anchor", a.gridTextAnchor).attr("transform", s.axis_rotated ? "" : "rotate(-90)").attr("dx", a.gridTextDx).attr("dy", -5).style("opacity", 0), a.xgridLines.exit().transition().duration(t).style("opacity", 0).remove(), s.grid_y_show && a.updateYGrid(), a.ygridLines = o.select("." + r.ygridLines).selectAll("." + r.ygridLine).data(s.grid_y_lines), (i = a.ygridLines.enter().append("g").attr("class", function (t) {
      return r.ygridLine + (t.class ? " " + t.class : "");
    })).append("line").style("opacity", 0), i.append("text").attr("text-anchor", a.gridTextAnchor).attr("transform", s.axis_rotated ? "rotate(-90)" : "").attr("dx", a.gridTextDx).attr("dy", -5).style("opacity", 0), n = a.yv.bind(a), a.ygridLines.select("line").transition().duration(t).attr("x1", s.axis_rotated ? n : 0).attr("x2", s.axis_rotated ? n : a.width).attr("y1", s.axis_rotated ? 0 : n).attr("y2", s.axis_rotated ? a.height : n).style("opacity", 1), a.ygridLines.select("text").transition().duration(t).attr("x", s.axis_rotated ? a.xGridTextX.bind(a) : a.yGridTextX.bind(a)).attr("y", n).text(function (t) {
      return t.text;
    }).style("opacity", 1), a.ygridLines.exit().transition().duration(t).style("opacity", 0).remove();
  }, C.redrawGrid = function (t) {
    var e = this,
        i = e.config,
        n = e.xv.bind(e),
        a = e.xgridLines.select("line"),
        r = e.xgridLines.select("text");return [(t ? a.transition() : a).attr("x1", i.axis_rotated ? 0 : n).attr("x2", i.axis_rotated ? e.width : n).attr("y1", i.axis_rotated ? n : 0).attr("y2", i.axis_rotated ? n : e.height).style("opacity", 1), (t ? r.transition() : r).attr("x", i.axis_rotated ? e.yGridTextX.bind(e) : e.xGridTextX.bind(e)).attr("y", n).text(function (t) {
      return t.text;
    }).style("opacity", 1)];
  }, C.showXGridFocus = function (t) {
    var e = this,
        i = e.config,
        n = t.filter(function (t) {
      return t && l(t.value);
    }),
        a = e.main.selectAll("line." + r.xgridFocus),
        o = e.xx.bind(e);i.tooltip_show && (e.hasType("scatter") || e.hasArcType() || (a.style("visibility", "visible").data([n[0]]).attr(i.axis_rotated ? "y1" : "x1", o).attr(i.axis_rotated ? "y2" : "x2", o), e.smoothLines(a, "grid")));
  }, C.hideXGridFocus = function () {
    this.main.select("line." + r.xgridFocus).style("visibility", "hidden");
  }, C.updateXgridFocus = function () {
    var t = this,
        e = t.config;t.main.select("line." + r.xgridFocus).attr("x1", e.axis_rotated ? 0 : -10).attr("x2", e.axis_rotated ? t.width : -10).attr("y1", e.axis_rotated ? -10 : 0).attr("y2", e.axis_rotated ? -10 : t.height);
  }, C.generateGridData = function (t, e) {
    var i,
        n,
        a,
        o,
        s = this,
        c = [],
        d = s.main.select("." + r.axisX).selectAll(".tick").size();if ("year" === t) for (n = (i = s.getXDomain())[0].getFullYear(), a = i[1].getFullYear(), o = n; o <= a; o++) {
      c.push(new Date(o + "-01-01 00:00:00"));
    } else (c = e.ticks(10)).length > d && (c = c.filter(function (t) {
      return ("" + t).indexOf(".") < 0;
    }));return c;
  }, C.getGridFilterToRemove = function (t) {
    return t ? function (e) {
      var i = !1;return [].concat(t).forEach(function (t) {
        ("value" in t && e.value === t.value || "class" in t && e.class === t.class) && (i = !0);
      }), i;
    } : function () {
      return !0;
    };
  }, C.removeGridLines = function (t, e) {
    var i = this,
        n = i.config,
        a = i.getGridFilterToRemove(t),
        o = function o(t) {
      return !a(t);
    },
        s = e ? r.xgridLines : r.ygridLines,
        c = e ? r.xgridLine : r.ygridLine;i.main.select("." + s).selectAll("." + c).filter(a).transition().duration(n.transition_duration).style("opacity", 0).remove(), e ? n.grid_x_lines = n.grid_x_lines.filter(o) : n.grid_y_lines = n.grid_y_lines.filter(o);
  }, C.initEventRect = function () {
    this.main.select("." + r.chart).append("g").attr("class", r.eventRects).style("fill-opacity", 0);
  }, C.redrawEventRect = function () {
    var t,
        e,
        i = this,
        n = i.config,
        a = i.isMultipleX(),
        o = i.main.select("." + r.eventRects).style("cursor", n.zoom_enabled ? n.axis_rotated ? "ns-resize" : "ew-resize" : null).classed(r.eventRectsMultiple, a).classed(r.eventRectsSingle, !a);o.selectAll("." + r.eventRect).remove(), i.eventRect = o.selectAll("." + r.eventRect), a ? (t = i.eventRect.data([0]), i.generateEventRectsForMultipleXs(t.enter()), i.updateEventRect(t)) : (e = i.getMaxDataCountTarget(i.data.targets), o.datum(e ? e.values : []), i.eventRect = o.selectAll("." + r.eventRect), t = i.eventRect.data(function (t) {
      return t;
    }), i.generateEventRectsForSingleX(t.enter()), i.updateEventRect(t), t.exit().remove());
  }, C.updateEventRect = function (t) {
    var e,
        i,
        n,
        a,
        r,
        o,
        s = this,
        c = s.config;t = t || s.eventRect.data(function (t) {
      return t;
    }), s.isMultipleX() ? (e = 0, i = 0, n = s.width, a = s.height) : (!s.isCustomX() && !s.isTimeSeries() || s.isCategorized() ? (r = s.getEventRectWidth(), o = function o(t) {
      return s.x(t.x) - r / 2;
    }) : (s.updateXs(), r = function r(t) {
      var e = s.getPrevX(t.index),
          i = s.getNextX(t.index);return null === e && null === i ? c.axis_rotated ? s.height : s.width : (null === e && (e = s.x.domain()[0]), null === i && (i = s.x.domain()[1]), Math.max(0, (s.x(i) - s.x(e)) / 2));
    }, o = function o(t) {
      var e = s.getPrevX(t.index),
          i = s.getNextX(t.index),
          n = s.data.xs[t.id][t.index];return null === e && null === i ? 0 : (null === e && (e = s.x.domain()[0]), (s.x(n) + s.x(e)) / 2);
    }), e = c.axis_rotated ? 0 : o, i = c.axis_rotated ? o : 0, n = c.axis_rotated ? s.width : r, a = c.axis_rotated ? r : s.height), t.attr("class", s.classEvent.bind(s)).attr("x", e).attr("y", i).attr("width", n).attr("height", a);
  }, C.generateEventRectsForSingleX = function (t) {
    var e = this,
        i = e.d3,
        n = e.config;t.append("rect").attr("class", e.classEvent.bind(e)).style("cursor", n.data_selection_enabled && n.data_selection_grouped ? "pointer" : null).on("mouseover", function (t) {
      var i = t.index;e.dragging || e.flowing || e.hasArcType() || (n.point_focus_expand_enabled && e.expandCircles(i, null, !0), e.expandBars(i, null, !0), e.main.selectAll("." + r.shape + "-" + i).each(function (t) {
        n.data_onmouseover.call(e.api, t);
      }));
    }).on("mouseout", function (t) {
      var i = t.index;e.config && (e.hasArcType() || (e.hideXGridFocus(), e.hideTooltip(), e.unexpandCircles(), e.unexpandBars(), e.main.selectAll("." + r.shape + "-" + i).each(function (t) {
        n.data_onmouseout.call(e.api, t);
      })));
    }).on("mousemove", function (t) {
      var a,
          o = t.index,
          s = e.svg.select("." + r.eventRect + "-" + o);e.dragging || e.flowing || e.hasArcType() || (e.isStepType(t) && "step-after" === e.config.line_step_type && i.mouse(this)[0] < e.x(e.getXValue(t.id, o)) && (o -= 1), a = e.filterTargetsToShow(e.data.targets).map(function (t) {
        return e.addName(e.getValueOnIndex(t.values, o));
      }), n.tooltip_grouped && (e.showTooltip(a, this), e.showXGridFocus(a)), (!n.tooltip_grouped || n.data_selection_enabled && !n.data_selection_grouped) && e.main.selectAll("." + r.shape + "-" + o).each(function () {
        i.select(this).classed(r.EXPANDED, !0), n.data_selection_enabled && s.style("cursor", n.data_selection_grouped ? "pointer" : null), n.tooltip_grouped || (e.hideXGridFocus(), e.hideTooltip(), n.data_selection_grouped || (e.unexpandCircles(o), e.unexpandBars(o)));
      }).filter(function (t) {
        return e.isWithinShape(this, t);
      }).each(function (t) {
        n.data_selection_enabled && (n.data_selection_grouped || n.data_selection_isselectable(t)) && s.style("cursor", "pointer"), n.tooltip_grouped || (e.showTooltip([t], this), e.showXGridFocus([t]), n.point_focus_expand_enabled && e.expandCircles(o, t.id, !0), e.expandBars(o, t.id, !0));
      }));
    }).on("click", function (t) {
      var a = t.index;!e.hasArcType() && e.toggleShape && (e.cancelClick ? e.cancelClick = !1 : (e.isStepType(t) && "step-after" === n.line_step_type && i.mouse(this)[0] < e.x(e.getXValue(t.id, a)) && (a -= 1), e.main.selectAll("." + r.shape + "-" + a).each(function (t) {
        (n.data_selection_grouped || e.isWithinShape(this, t)) && (e.toggleShape(this, t, a), e.config.data_onclick.call(e.api, t, this));
      })));
    }).call(n.data_selection_draggable && e.drag ? i.behavior.drag().origin(Object).on("drag", function () {
      e.drag(i.mouse(this));
    }).on("dragstart", function () {
      e.dragstart(i.mouse(this));
    }).on("dragend", function () {
      e.dragend();
    }) : function () {});
  }, C.generateEventRectsForMultipleXs = function (t) {
    function e() {
      i.svg.select("." + r.eventRect).style("cursor", null), i.hideXGridFocus(), i.hideTooltip(), i.unexpandCircles(), i.unexpandBars();
    }var i = this,
        n = i.d3,
        a = i.config;t.append("rect").attr("x", 0).attr("y", 0).attr("width", i.width).attr("height", i.height).attr("class", r.eventRect).on("mouseout", function () {
      i.config && (i.hasArcType() || e());
    }).on("mousemove", function () {
      var t,
          o,
          s,
          c = i.filterTargetsToShow(i.data.targets);i.dragging || i.hasArcType(c) || (t = n.mouse(this), o = i.findClosestFromTargets(c, t), !i.mouseover || o && o.id === i.mouseover.id || (a.data_onmouseout.call(i.api, i.mouseover), i.mouseover = void 0), o ? (s = (i.isScatterType(o) || !a.tooltip_grouped ? [o] : i.filterByX(c, o.x)).map(function (t) {
        return i.addName(t);
      }), i.showTooltip(s, this), a.point_focus_expand_enabled && i.expandCircles(o.index, o.id, !0), i.expandBars(o.index, o.id, !0), i.showXGridFocus(s), (i.isBarType(o.id) || i.dist(o, t) < a.point_sensitivity) && (i.svg.select("." + r.eventRect).style("cursor", "pointer"), i.mouseover || (a.data_onmouseover.call(i.api, o), i.mouseover = o))) : e());
    }).on("click", function () {
      var t,
          e,
          o = i.filterTargetsToShow(i.data.targets);i.hasArcType(o) || (t = n.mouse(this), (e = i.findClosestFromTargets(o, t)) && (i.isBarType(e.id) || i.dist(e, t) < a.point_sensitivity) && i.main.selectAll("." + r.shapes + i.getTargetSelectorSuffix(e.id)).selectAll("." + r.shape + "-" + e.index).each(function () {
        (a.data_selection_grouped || i.isWithinShape(this, e)) && (i.toggleShape(this, e, e.index), i.config.data_onclick.call(i.api, e, this));
      }));
    }).call(a.data_selection_draggable && i.drag ? n.behavior.drag().origin(Object).on("drag", function () {
      i.drag(n.mouse(this));
    }).on("dragstart", function () {
      i.dragstart(n.mouse(this));
    }).on("dragend", function () {
      i.dragend();
    }) : function () {});
  }, C.dispatchEvent = function (t, e, i) {
    var n = this,
        a = "." + r.eventRect + (n.isMultipleX() ? "" : "-" + e),
        o = n.main.select(a).node(),
        s = o.getBoundingClientRect(),
        c = s.left + (i ? i[0] : 0),
        d = s.top + (i ? i[1] : 0),
        l = document.createEvent("MouseEvents");l.initMouseEvent(t, !0, !0, window, 0, c, d, c, d, !1, !1, !1, !1, 0, null), o.dispatchEvent(l);
  }, C.initLegend = function () {
    var t = this;if (t.legendItemTextBox = {}, t.legendHasRendered = !1, t.legend = t.svg.append("g").attr("transform", t.getTranslate("legend")), !t.config.legend_show) return t.legend.style("visibility", "hidden"), void (t.hiddenLegendIds = t.mapToIds(t.data.targets));t.updateLegendWithDefaults();
  }, C.updateLegendWithDefaults = function () {
    var t = this;t.updateLegend(t.mapToIds(t.data.targets), { withTransform: !1, withTransitionForTransform: !1, withTransition: !1 });
  }, C.updateSizeForLegend = function (t, e) {
    var i = this,
        n = i.config,
        a = { top: i.isLegendTop ? i.getCurrentPaddingTop() + n.legend_inset_y + 5.5 : i.currentHeight - t - i.getCurrentPaddingBottom() - n.legend_inset_y, left: i.isLegendLeft ? i.getCurrentPaddingLeft() + n.legend_inset_x + .5 : i.currentWidth - e - i.getCurrentPaddingRight() - n.legend_inset_x + .5 };i.margin3 = { top: i.isLegendRight ? 0 : i.isLegendInset ? a.top : i.currentHeight - t, right: NaN, bottom: 0, left: i.isLegendRight ? i.currentWidth - e : i.isLegendInset ? a.left : 0 };
  }, C.transformLegend = function (t) {
    var e = this;(t ? e.legend.transition() : e.legend).attr("transform", e.getTranslate("legend"));
  }, C.updateLegendStep = function (t) {
    this.legendStep = t;
  }, C.updateLegendItemWidth = function (t) {
    this.legendItemWidth = t;
  }, C.updateLegendItemHeight = function (t) {
    this.legendItemHeight = t;
  }, C.getLegendWidth = function () {
    var t = this;return t.config.legend_show ? t.isLegendRight || t.isLegendInset ? t.legendItemWidth * (t.legendStep + 1) : t.currentWidth : 0;
  }, C.getLegendHeight = function () {
    var t = this,
        e = 0;return t.config.legend_show && (e = t.isLegendRight ? t.currentHeight : Math.max(20, t.legendItemHeight) * (t.legendStep + 1)), e;
  }, C.opacityForLegend = function (t) {
    return t.classed(r.legendItemHidden) ? null : 1;
  }, C.opacityForUnfocusedLegend = function (t) {
    return t.classed(r.legendItemHidden) ? null : .3;
  }, C.toggleFocusLegend = function (t, e) {
    var i = this;t = i.mapToTargetIds(t), i.legend.selectAll("." + r.legendItem).filter(function (e) {
      return t.indexOf(e) >= 0;
    }).classed(r.legendItemFocused, e).transition().duration(100).style("opacity", function () {
      return (e ? i.opacityForLegend : i.opacityForUnfocusedLegend).call(i, i.d3.select(this));
    });
  }, C.revertLegend = function () {
    var t = this,
        e = t.d3;t.legend.selectAll("." + r.legendItem).classed(r.legendItemFocused, !1).transition().duration(100).style("opacity", function () {
      return t.opacityForLegend(e.select(this));
    });
  }, C.showLegend = function (t) {
    var e = this,
        i = e.config;i.legend_show || (i.legend_show = !0, e.legend.style("visibility", "visible"), e.legendHasRendered || e.updateLegendWithDefaults()), e.removeHiddenLegendIds(t), e.legend.selectAll(e.selectorLegends(t)).style("visibility", "visible").transition().style("opacity", function () {
      return e.opacityForLegend(e.d3.select(this));
    });
  }, C.hideLegend = function (t) {
    var e = this,
        i = e.config;i.legend_show && y(t) && (i.legend_show = !1, e.legend.style("visibility", "hidden")), e.addHiddenLegendIds(t), e.legend.selectAll(e.selectorLegends(t)).style("opacity", 0).style("visibility", "hidden");
  }, C.clearLegendItemTextBoxCache = function () {
    this.legendItemTextBox = {};
  }, C.updateLegend = function (t, e, i) {
    function n(t, e) {
      return b.legendItemTextBox[e] || (b.legendItemTextBox[e] = b.getTextRect(t.textContent, r.legendItem, t)), b.legendItemTextBox[e];
    }function a(e, i, a) {
      function r(t, e) {
        e || (o = (f - E - g) / 2) < V && (o = (f - g) / 2, E = 0, F++), D[t] = F, k[F] = b.isLegendInset ? 10 : o, O[t] = E, E += g;
      }var o,
          s,
          c = 0 === a,
          d = a === t.length - 1,
          l = n(e, i),
          u = l.width + G + (!d || b.isLegendRight || b.isLegendInset ? P : 0) + T.legend_padding,
          h = l.height + A,
          g = b.isLegendRight || b.isLegendInset ? h : u,
          f = b.isLegendRight || b.isLegendInset ? b.getLegendHeight() : b.getLegendWidth();c && (E = 0, F = 0, C = 0, L = 0), !T.legend_show || b.isLegendToShow(i) ? (I[i] = u, R[i] = h, (!C || u >= C) && (C = u), (!L || h >= L) && (L = h), s = b.isLegendRight || b.isLegendInset ? L : C, T.legend_equally ? (Object.keys(I).forEach(function (t) {
        I[t] = C;
      }), Object.keys(R).forEach(function (t) {
        R[t] = L;
      }), (o = (f - s * t.length) / 2) < V ? (E = 0, F = 0, t.forEach(function (t) {
        r(t);
      })) : r(i, !0)) : r(i)) : I[i] = R[i] = D[i] = O[i] = 0;
    }var o,
        s,
        c,
        d,
        l,
        u,
        h,
        g,
        f,
        p,
        _,
        x,
        m,
        y,
        S,
        v,
        b = this,
        T = b.config,
        A = 4,
        P = 10,
        C = 0,
        L = 0,
        V = 10,
        G = T.legend_item_tile_width + 5,
        E = 0,
        O = {},
        I = {},
        R = {},
        k = [0],
        D = {},
        F = 0;t = t.filter(function (t) {
      return !(void 0 !== T.data_names[t]) || null !== T.data_names[t];
    }), _ = w(e = e || {}, "withTransition", !0), x = w(e, "withTransitionForTransform", !0), b.isLegendInset && (F = T.legend_inset_step ? T.legend_inset_step : t.length, b.updateLegendStep(F)), b.isLegendRight ? (o = function o(t) {
      return C * D[t];
    }, d = function d(t) {
      return k[D[t]] + O[t];
    }) : b.isLegendInset ? (o = function o(t) {
      return C * D[t] + 10;
    }, d = function d(t) {
      return k[D[t]] + O[t];
    }) : (o = function o(t) {
      return k[D[t]] + O[t];
    }, d = function d(t) {
      return L * D[t];
    }), s = function s(t, e) {
      return o(t, e) + 4 + T.legend_item_tile_width;
    }, l = function l(t, e) {
      return d(t, e) + 9;
    }, c = function c(t, e) {
      return o(t, e);
    }, u = function u(t, e) {
      return d(t, e) - 5;
    }, h = function h(t, e) {
      return o(t, e) - 2;
    }, g = function g(t, e) {
      return o(t, e) - 2 + T.legend_item_tile_width;
    }, f = function f(t, e) {
      return d(t, e) + 4;
    }, (p = b.legend.selectAll("." + r.legendItem).data(t).enter().append("g").attr("class", function (t) {
      return b.generateClass(r.legendItem, t);
    }).style("visibility", function (t) {
      return b.isLegendToShow(t) ? "visible" : "hidden";
    }).style("cursor", "pointer").on("click", function (t) {
      T.legend_item_onclick ? T.legend_item_onclick.call(b, t) : b.d3.event.altKey ? (b.api.hide(), b.api.show(t)) : (b.api.toggle(t), b.isTargetToShow(t) ? b.api.focus(t) : b.api.revert());
    }).on("mouseover", function (t) {
      T.legend_item_onmouseover ? T.legend_item_onmouseover.call(b, t) : (b.d3.select(this).classed(r.legendItemFocused, !0), !b.transiting && b.isTargetToShow(t) && b.api.focus(t));
    }).on("mouseout", function (t) {
      T.legend_item_onmouseout ? T.legend_item_onmouseout.call(b, t) : (b.d3.select(this).classed(r.legendItemFocused, !1), b.api.revert());
    })).append("text").text(function (t) {
      return void 0 !== T.data_names[t] ? T.data_names[t] : t;
    }).each(function (t, e) {
      a(this, t, e);
    }).style("pointer-events", "none").attr("x", b.isLegendRight || b.isLegendInset ? s : -200).attr("y", b.isLegendRight || b.isLegendInset ? -200 : l), p.append("rect").attr("class", r.legendItemEvent).style("fill-opacity", 0).attr("x", b.isLegendRight || b.isLegendInset ? c : -200).attr("y", b.isLegendRight || b.isLegendInset ? -200 : u), p.append("line").attr("class", r.legendItemTile).style("stroke", b.color).style("pointer-events", "none").attr("x1", b.isLegendRight || b.isLegendInset ? h : -200).attr("y1", b.isLegendRight || b.isLegendInset ? -200 : f).attr("x2", b.isLegendRight || b.isLegendInset ? g : -200).attr("y2", b.isLegendRight || b.isLegendInset ? -200 : f).attr("stroke-width", T.legend_item_tile_height), v = b.legend.select("." + r.legendBackground + " rect"), b.isLegendInset && C > 0 && 0 === v.size() && (v = b.legend.insert("g", "." + r.legendItem).attr("class", r.legendBackground).append("rect")), m = b.legend.selectAll("text").data(t).text(function (t) {
      return void 0 !== T.data_names[t] ? T.data_names[t] : t;
    }).each(function (t, e) {
      a(this, t, e);
    }), (_ ? m.transition() : m).attr("x", s).attr("y", l), y = b.legend.selectAll("rect." + r.legendItemEvent).data(t), (_ ? y.transition() : y).attr("width", function (t) {
      return I[t];
    }).attr("height", function (t) {
      return R[t];
    }).attr("x", c).attr("y", u), S = b.legend.selectAll("line." + r.legendItemTile).data(t), (_ ? S.transition() : S).style("stroke", b.color).attr("x1", h).attr("y1", f).attr("x2", g).attr("y2", f), v && (_ ? v.transition() : v).attr("height", b.getLegendHeight() - 12).attr("width", C * (F + 1) + 10), b.legend.selectAll("." + r.legendItem).classed(r.legendItemHidden, function (t) {
      return !b.isTargetToShow(t);
    }), b.updateLegendItemWidth(C), b.updateLegendItemHeight(L), b.updateLegendStep(F), b.updateSizes(), b.updateScales(), b.updateSvgSize(), b.transformAll(x, i), b.legendHasRendered = !0;
  }, C.initRegion = function () {
    var t = this;t.region = t.main.append("g").attr("clip-path", t.clipPath).attr("class", r.regions);
  }, C.updateRegion = function (t) {
    var e = this,
        i = e.config;e.region.style("visibility", e.hasArcType() ? "hidden" : "visible"), e.mainRegion = e.main.select("." + r.regions).selectAll("." + r.region).data(i.regions), e.mainRegion.enter().append("g").append("rect").style("fill-opacity", 0), e.mainRegion.attr("class", e.classRegion.bind(e)), e.mainRegion.exit().transition().duration(t).style("opacity", 0).remove();
  }, C.redrawRegion = function (t) {
    var e = this,
        i = e.mainRegion.selectAll("rect").each(function () {
      var t = e.d3.select(this.parentNode).datum();e.d3.select(this).datum(t);
    }),
        n = e.regionX.bind(e),
        a = e.regionY.bind(e),
        r = e.regionWidth.bind(e),
        o = e.regionHeight.bind(e);return [(t ? i.transition() : i).attr("x", n).attr("y", a).attr("width", r).attr("height", o).style("fill-opacity", function (t) {
      return l(t.opacity) ? t.opacity : .1;
    })];
  }, C.regionX = function (t) {
    var e = this,
        i = e.config,
        n = "y" === t.axis ? e.y : e.y2;return "y" === t.axis || "y2" === t.axis ? i.axis_rotated && "start" in t ? n(t.start) : 0 : i.axis_rotated ? 0 : "start" in t ? e.x(e.isTimeSeries() ? e.parseDate(t.start) : t.start) : 0;
  }, C.regionY = function (t) {
    var e = this,
        i = e.config,
        n = "y" === t.axis ? e.y : e.y2;return "y" === t.axis || "y2" === t.axis ? i.axis_rotated ? 0 : "end" in t ? n(t.end) : 0 : i.axis_rotated && "start" in t ? e.x(e.isTimeSeries() ? e.parseDate(t.start) : t.start) : 0;
  }, C.regionWidth = function (t) {
    var e,
        i = this,
        n = i.config,
        a = i.regionX(t),
        r = "y" === t.axis ? i.y : i.y2;return e = "y" === t.axis || "y2" === t.axis ? n.axis_rotated && "end" in t ? r(t.end) : i.width : n.axis_rotated ? i.width : "end" in t ? i.x(i.isTimeSeries() ? i.parseDate(t.end) : t.end) : i.width, e < a ? 0 : e - a;
  }, C.regionHeight = function (t) {
    var e,
        i = this,
        n = i.config,
        a = this.regionY(t),
        r = "y" === t.axis ? i.y : i.y2;return e = "y" === t.axis || "y2" === t.axis ? n.axis_rotated ? i.height : "start" in t ? r(t.start) : i.height : n.axis_rotated && "end" in t ? i.x(i.isTimeSeries() ? i.parseDate(t.end) : t.end) : i.height, e < a ? 0 : e - a;
  }, C.isRegionOnX = function (t) {
    return !t.axis || "x" === t.axis;
  }, C.getScale = function (t, e, i) {
    return (i ? this.d3.time.scale() : this.d3.scale.linear()).range([t, e]);
  }, C.getX = function (t, e, i, n) {
    var a,
        r = this,
        o = r.getScale(t, e, r.isTimeSeries()),
        s = i ? o.domain(i) : o;r.isCategorized() ? (n = n || function () {
      return 0;
    }, o = function o(t, e) {
      var i = s(t) + n(t);return e ? i : Math.ceil(i);
    }) : o = function o(t, e) {
      var i = s(t);return e ? i : Math.ceil(i);
    };for (a in s) {
      o[a] = s[a];
    }return o.orgDomain = function () {
      return s.domain();
    }, r.isCategorized() && (o.domain = function (t) {
      return arguments.length ? (s.domain(t), o) : (t = this.orgDomain(), [t[0], t[1] + 1]);
    }), o;
  }, C.getY = function (t, e, i) {
    var n = this.getScale(t, e, this.isTimeSeriesY());return i && n.domain(i), n;
  }, C.getYScale = function (t) {
    return "y2" === this.axis.getId(t) ? this.y2 : this.y;
  }, C.getSubYScale = function (t) {
    return "y2" === this.axis.getId(t) ? this.subY2 : this.subY;
  }, C.updateScales = function () {
    var t = this,
        e = t.config,
        i = !t.x;t.xMin = e.axis_rotated ? 1 : 0, t.xMax = e.axis_rotated ? t.height : t.width, t.yMin = e.axis_rotated ? 0 : t.height, t.yMax = e.axis_rotated ? t.width : 1, t.subXMin = t.xMin, t.subXMax = t.xMax, t.subYMin = e.axis_rotated ? 0 : t.height2, t.subYMax = e.axis_rotated ? t.width2 : 1, t.x = t.getX(t.xMin, t.xMax, i ? void 0 : t.x.orgDomain(), function () {
      return t.xAxis.tickOffset();
    }), t.y = t.getY(t.yMin, t.yMax, i ? e.axis_y_default : t.y.domain()), t.y2 = t.getY(t.yMin, t.yMax, i ? e.axis_y2_default : t.y2.domain()), t.subX = t.getX(t.xMin, t.xMax, t.orgXDomain, function (e) {
      return e % 1 ? 0 : t.subXAxis.tickOffset();
    }), t.subY = t.getY(t.subYMin, t.subYMax, i ? e.axis_y_default : t.subY.domain()), t.subY2 = t.getY(t.subYMin, t.subYMax, i ? e.axis_y2_default : t.subY2.domain()), t.xAxisTickFormat = t.axis.getXAxisTickFormat(), t.xAxisTickValues = t.axis.getXAxisTickValues(), t.yAxisTickValues = t.axis.getYAxisTickValues(), t.y2AxisTickValues = t.axis.getY2AxisTickValues(), t.xAxis = t.axis.getXAxis(t.x, t.xOrient, t.xAxisTickFormat, t.xAxisTickValues, e.axis_x_tick_outer), t.subXAxis = t.axis.getXAxis(t.subX, t.subXOrient, t.xAxisTickFormat, t.xAxisTickValues, e.axis_x_tick_outer), t.yAxis = t.axis.getYAxis(t.y, t.yOrient, e.axis_y_tick_format, t.yAxisTickValues, e.axis_y_tick_outer), t.y2Axis = t.axis.getYAxis(t.y2, t.y2Orient, e.axis_y2_tick_format, t.y2AxisTickValues, e.axis_y2_tick_outer), i || (t.brush && t.brush.scale(t.subX), e.zoom_enabled && t.zoom.scale(t.x)), t.updateArc && t.updateArc();
  }, C.selectPoint = function (t, e, i) {
    var n = this,
        a = n.config,
        o = (a.axis_rotated ? n.circleY : n.circleX).bind(n),
        s = (a.axis_rotated ? n.circleX : n.circleY).bind(n),
        c = n.pointSelectR.bind(n);a.data_onselected.call(n.api, e, t.node()), n.main.select("." + r.selectedCircles + n.getTargetSelectorSuffix(e.id)).selectAll("." + r.selectedCircle + "-" + i).data([e]).enter().append("circle").attr("class", function () {
      return n.generateClass(r.selectedCircle, i);
    }).attr("cx", o).attr("cy", s).attr("stroke", function () {
      return n.color(e);
    }).attr("r", function (t) {
      return 1.4 * n.pointSelectR(t);
    }).transition().duration(100).attr("r", c);
  }, C.unselectPoint = function (t, e, i) {
    var n = this;n.config.data_onunselected.call(n.api, e, t.node()), n.main.select("." + r.selectedCircles + n.getTargetSelectorSuffix(e.id)).selectAll("." + r.selectedCircle + "-" + i).transition().duration(100).attr("r", 0).remove();
  }, C.togglePoint = function (t, e, i, n) {
    t ? this.selectPoint(e, i, n) : this.unselectPoint(e, i, n);
  }, C.selectPath = function (t, e) {
    var i = this;i.config.data_onselected.call(i, e, t.node()), i.config.interaction_brighten && t.transition().duration(100).style("fill", function () {
      return i.d3.rgb(i.color(e)).brighter(.75);
    });
  }, C.unselectPath = function (t, e) {
    var i = this;i.config.data_onunselected.call(i, e, t.node()), i.config.interaction_brighten && t.transition().duration(100).style("fill", function () {
      return i.color(e);
    });
  }, C.togglePath = function (t, e, i, n) {
    t ? this.selectPath(e, i, n) : this.unselectPath(e, i, n);
  }, C.getToggle = function (t, e) {
    var i,
        n = this;return "circle" === t.nodeName ? i = n.isStepType(e) ? function () {} : n.togglePoint : "path" === t.nodeName && (i = n.togglePath), i;
  }, C.toggleShape = function (t, e, i) {
    var n = this,
        a = n.d3,
        o = n.config,
        s = a.select(t),
        c = s.classed(r.SELECTED),
        d = n.getToggle(t, e).bind(n);o.data_selection_enabled && o.data_selection_isselectable(e) && (o.data_selection_multiple || n.main.selectAll("." + r.shapes + (o.data_selection_grouped ? n.getTargetSelectorSuffix(e.id) : "")).selectAll("." + r.shape).each(function (t, e) {
      var i = a.select(this);i.classed(r.SELECTED) && d(!1, i.classed(r.SELECTED, !1), t, e);
    }), s.classed(r.SELECTED, !c), d(!c, s, e, i));
  }, C.initBar = function () {
    this.main.select("." + r.chart).append("g").attr("class", r.chartBars);
  }, C.updateTargetsForBar = function (t) {
    var e = this,
        i = e.config,
        n = e.classChartBar.bind(e),
        a = e.classBars.bind(e),
        o = e.classFocus.bind(e);e.main.select("." + r.chartBars).selectAll("." + r.chartBar).data(t).attr("class", function (t) {
      return n(t) + o(t);
    }).enter().append("g").attr("class", n).style("pointer-events", "none").append("g").attr("class", a).style("cursor", function (t) {
      return i.data_selection_isselectable(t) ? "pointer" : null;
    });
  }, C.updateBar = function (t) {
    var e = this,
        i = e.barData.bind(e),
        n = e.classBar.bind(e),
        a = e.initialOpacity.bind(e),
        o = function o(t) {
      return e.color(t.id);
    };e.mainBar = e.main.selectAll("." + r.bars).selectAll("." + r.bar).data(i), e.mainBar.enter().append("path").attr("class", n).style("stroke", o).style("fill", o), e.mainBar.style("opacity", a), e.mainBar.exit().transition().duration(t).remove();
  }, C.redrawBar = function (t, e) {
    return [(e ? this.mainBar.transition(Math.random().toString()) : this.mainBar).attr("d", t).style("stroke", this.color).style("fill", this.color).style("opacity", 1)];
  }, C.getBarW = function (t, e) {
    var i = this.config,
        n = "number" == typeof i.bar_width ? i.bar_width : e ? t.tickInterval() * i.bar_width_ratio / e : 0;return i.bar_width_max && n > i.bar_width_max ? i.bar_width_max : n;
  }, C.getBars = function (t, e) {
    var i = this;return (e ? i.main.selectAll("." + r.bars + i.getTargetSelectorSuffix(e)) : i.main).selectAll("." + r.bar + (l(t) ? "-" + t : ""));
  }, C.expandBars = function (t, e, i) {
    var n = this;i && n.unexpandBars(), n.getBars(t, e).classed(r.EXPANDED, !0);
  }, C.unexpandBars = function (t) {
    this.getBars(t).classed(r.EXPANDED, !1);
  }, C.generateDrawBar = function (t, e) {
    var i = this,
        n = i.config,
        a = i.generateGetBarPoints(t, e);return function (t, e) {
      var i = a(t, e),
          r = n.axis_rotated ? 1 : 0,
          o = n.axis_rotated ? 0 : 1;return "M " + i[0][r] + "," + i[0][o] + " L" + i[1][r] + "," + i[1][o] + " L" + i[2][r] + "," + i[2][o] + " L" + i[3][r] + "," + i[3][o] + " z";
    };
  }, C.generateGetBarPoints = function (t, e) {
    var i = this,
        n = e ? i.subXAxis : i.xAxis,
        a = t.__max__ + 1,
        r = i.getBarW(n, a),
        o = i.getShapeX(r, a, t, !!e),
        s = i.getShapeY(!!e),
        c = i.getShapeOffset(i.isBarType, t, !!e),
        d = r * (i.config.bar_space / 2),
        l = e ? i.getSubYScale : i.getYScale;return function (t, e) {
      var n = l.call(i, t.id)(0),
          a = c(t, e) || n,
          u = o(t),
          h = s(t);return i.config.axis_rotated && (0 < t.value && h < n || t.value < 0 && n < h) && (h = n), [[u + d, a], [u + d, h - (n - a)], [u + r - d, h - (n - a)], [u + r - d, a]];
    };
  }, C.isWithinBar = function (t) {
    var e = this.d3.mouse(t),
        i = t.getBoundingClientRect(),
        n = t.pathSegList.getItem(0),
        a = t.pathSegList.getItem(1),
        r = Math.min(n.x, a.x),
        o = Math.min(n.y, a.y),
        s = r + i.width + 2,
        c = o + i.height + 2,
        d = o - 2;return r - 2 < e[0] && e[0] < s && d < e[1] && e[1] < c;
  }, C.getShapeIndices = function (t) {
    var e,
        i,
        n = this,
        a = n.config,
        r = {},
        o = 0;return n.filterTargetsToShow(n.data.targets.filter(t, n)).forEach(function (t) {
      for (e = 0; e < a.data_groups.length; e++) {
        if (!(a.data_groups[e].indexOf(t.id) < 0)) for (i = 0; i < a.data_groups[e].length; i++) {
          if (a.data_groups[e][i] in r) {
            r[t.id] = r[a.data_groups[e][i]];break;
          }
        }
      }void 0 === r[t.id] && (r[t.id] = o++);
    }), r.__max__ = o - 1, r;
  }, C.getShapeX = function (t, e, i, n) {
    var a = this,
        r = n ? a.subX : a.x;return function (n) {
      var a = n.id in i ? i[n.id] : 0;return n.x || 0 === n.x ? r(n.x) - t * (e / 2 - a) : 0;
    };
  }, C.getShapeY = function (t) {
    var e = this;return function (i) {
      return (t ? e.getSubYScale(i.id) : e.getYScale(i.id))(i.value);
    };
  }, C.getShapeOffset = function (t, e, i) {
    var n = this,
        a = n.orderTargets(n.filterTargetsToShow(n.data.targets.filter(t, n))),
        r = a.map(function (t) {
      return t.id;
    });return function (t, o) {
      var s = i ? n.getSubYScale(t.id) : n.getYScale(t.id),
          c = s(0),
          d = c;return a.forEach(function (i) {
        var a = n.isStepType(t) ? n.convertValuesToStep(i.values) : i.values;i.id !== t.id && e[i.id] === e[t.id] && r.indexOf(i.id) < r.indexOf(t.id) && (void 0 !== a[o] && +a[o].x == +t.x || (o = -1, a.forEach(function (e, i) {
          e.x === t.x && (o = i);
        })), o in a && a[o].value * t.value >= 0 && (d += s(a[o].value) - c));
      }), d;
    };
  }, C.isWithinShape = function (t, e) {
    var i,
        n = this,
        a = n.d3.select(t);return n.isTargetToShow(e.id) ? "circle" === t.nodeName ? i = n.isStepType(e) ? n.isWithinStep(t, n.getYScale(e.id)(e.value)) : n.isWithinCircle(t, 1.5 * n.pointSelectR(e)) : "path" === t.nodeName && (i = !a.classed(r.bar) || n.isWithinBar(t)) : i = !1, i;
  }, C.getInterpolate = function (t) {
    var e = this,
        i = e.isInterpolationType(e.config.spline_interpolation_type) ? e.config.spline_interpolation_type : "cardinal";return e.isSplineType(t) ? i : e.isStepType(t) ? e.config.line_step_type : "linear";
  }, C.initLine = function () {
    this.main.select("." + r.chart).append("g").attr("class", r.chartLines);
  }, C.updateTargetsForLine = function (t) {
    var e,
        i = this,
        n = i.config,
        a = i.classChartLine.bind(i),
        o = i.classLines.bind(i),
        s = i.classAreas.bind(i),
        c = i.classCircles.bind(i),
        d = i.classFocus.bind(i);(e = i.main.select("." + r.chartLines).selectAll("." + r.chartLine).data(t).attr("class", function (t) {
      return a(t) + d(t);
    }).enter().append("g").attr("class", a).style("opacity", 0).style("pointer-events", "none")).append("g").attr("class", o), e.append("g").attr("class", s), e.append("g").attr("class", function (t) {
      return i.generateClass(r.selectedCircles, t.id);
    }), e.append("g").attr("class", c).style("cursor", function (t) {
      return n.data_selection_isselectable(t) ? "pointer" : null;
    }), t.forEach(function (t) {
      i.main.selectAll("." + r.selectedCircles + i.getTargetSelectorSuffix(t.id)).selectAll("." + r.selectedCircle).each(function (e) {
        e.value = t.values[e.index].value;
      });
    });
  }, C.updateLine = function (t) {
    var e = this;e.mainLine = e.main.selectAll("." + r.lines).selectAll("." + r.line).data(e.lineData.bind(e)), e.mainLine.enter().append("path").attr("class", e.classLine.bind(e)).style("stroke", e.color), e.mainLine.style("opacity", e.initialOpacity.bind(e)).style("shape-rendering", function (t) {
      return e.isStepType(t) ? "crispEdges" : "";
    }).attr("transform", null), e.mainLine.exit().transition().duration(t).style("opacity", 0).remove();
  }, C.redrawLine = function (t, e) {
    return [(e ? this.mainLine.transition(Math.random().toString()) : this.mainLine).attr("d", t).style("stroke", this.color).style("opacity", 1)];
  }, C.generateDrawLine = function (t, e) {
    var i = this,
        n = i.config,
        a = i.d3.svg.line(),
        r = i.generateGetLinePoints(t, e),
        o = e ? i.getSubYScale : i.getYScale,
        s = function s(t) {
      return (e ? i.subxx : i.xx).call(i, t);
    },
        c = function c(t, e) {
      return n.data_groups.length > 0 ? r(t, e)[0][1] : o.call(i, t.id)(t.value);
    };return a = n.axis_rotated ? a.x(c).y(s) : a.x(s).y(c), n.line_connectNull || (a = a.defined(function (t) {
      return null != t.value;
    })), function (t) {
      var r,
          s = n.line_connectNull ? i.filterRemoveNull(t.values) : t.values,
          c = e ? i.x : i.subX,
          d = o.call(i, t.id),
          l = 0,
          u = 0;return i.isLineType(t) ? n.data_regions[t.id] ? r = i.lineWithRegions(s, c, d, n.data_regions[t.id]) : (i.isStepType(t) && (s = i.convertValuesToStep(s)), r = a.interpolate(i.getInterpolate(t))(s)) : (s[0] && (l = c(s[0].x), u = d(s[0].value)), r = n.axis_rotated ? "M " + u + " " + l : "M " + l + " " + u), r || "M 0 0";
    };
  }, C.generateGetLinePoints = function (t, e) {
    var i = this,
        n = i.config,
        a = t.__max__ + 1,
        r = i.getShapeX(0, a, t, !!e),
        o = i.getShapeY(!!e),
        s = i.getShapeOffset(i.isLineType, t, !!e),
        c = e ? i.getSubYScale : i.getYScale;return function (t, e) {
      var a = c.call(i, t.id)(0),
          d = s(t, e) || a,
          l = r(t),
          u = o(t);return n.axis_rotated && (0 < t.value && u < a || t.value < 0 && a < u) && (u = a), [[l, u - (a - d)], [l, u - (a - d)], [l, u - (a - d)], [l, u - (a - d)]];
    };
  }, C.lineWithRegions = function (t, e, i, n) {
    function a(t) {
      return "M" + t[0][0] + " " + t[0][1] + " " + t[1][0] + " " + t[1][1];
    }var r,
        o,
        s,
        c,
        d,
        l,
        u,
        h,
        g,
        f,
        p,
        _ = this,
        x = _.config,
        m = "M",
        y = _.isCategorized() ? .5 : 0,
        S = [];if (void 0 !== n) for (r = 0; r < n.length; r++) {
      S[r] = {}, void 0 === n[r].start ? S[r].start = t[0].x : S[r].start = _.isTimeSeries() ? _.parseDate(n[r].start) : n[r].start, void 0 === n[r].end ? S[r].end = t[t.length - 1].x : S[r].end = _.isTimeSeries() ? _.parseDate(n[r].end) : n[r].end;
    }for (f = x.axis_rotated ? function (t) {
      return i(t.value);
    } : function (t) {
      return e(t.x);
    }, p = x.axis_rotated ? function (t) {
      return e(t.x);
    } : function (t) {
      return i(t.value);
    }, s = _.isTimeSeries() ? function (t, n, r, o) {
      var s,
          c = t.x.getTime(),
          l = n.x - t.x,
          u = new Date(c + l * r),
          h = new Date(c + l * (r + o));return s = x.axis_rotated ? [[i(d(r)), e(u)], [i(d(r + o)), e(h)]] : [[e(u), i(d(r))], [e(h), i(d(r + o))]], a(s);
    } : function (t, n, r, o) {
      var s;return s = x.axis_rotated ? [[i(d(r), !0), e(c(r))], [i(d(r + o), !0), e(c(r + o))]] : [[e(c(r), !0), i(d(r))], [e(c(r + o), !0), i(d(r + o))]], a(s);
    }, r = 0; r < t.length; r++) {
      if (void 0 !== S && function (t, e) {
        var i;for (i = 0; i < e.length; i++) {
          if (e[i].start < t && t <= e[i].end) return !0;
        }return !1;
      }(t[r].x, S)) for (c = _.getScale(t[r - 1].x + y, t[r].x + y, _.isTimeSeries()), d = _.getScale(t[r - 1].value, t[r].value), l = e(t[r].x) - e(t[r - 1].x), u = i(t[r].value) - i(t[r - 1].value), g = 2 * (h = 2 / Math.sqrt(Math.pow(l, 2) + Math.pow(u, 2))), o = h; o <= 1; o += g) {
        m += s(t[r - 1], t[r], o, h);
      } else m += " " + f(t[r]) + " " + p(t[r]);t[r].x;
    }return m;
  }, C.updateArea = function (t) {
    var e = this,
        i = e.d3;e.mainArea = e.main.selectAll("." + r.areas).selectAll("." + r.area).data(e.lineData.bind(e)), e.mainArea.enter().append("path").attr("class", e.classArea.bind(e)).style("fill", e.color).style("opacity", function () {
      return e.orgAreaOpacity = +i.select(this).style("opacity"), 0;
    }), e.mainArea.style("opacity", e.orgAreaOpacity), e.mainArea.exit().transition().duration(t).style("opacity", 0).remove();
  }, C.redrawArea = function (t, e) {
    return [(e ? this.mainArea.transition(Math.random().toString()) : this.mainArea).attr("d", t).style("fill", this.color).style("opacity", this.orgAreaOpacity)];
  }, C.generateDrawArea = function (t, e) {
    var i = this,
        n = i.config,
        a = i.d3.svg.area(),
        r = i.generateGetAreaPoints(t, e),
        o = e ? i.getSubYScale : i.getYScale,
        s = function s(t) {
      return (e ? i.subxx : i.xx).call(i, t);
    },
        c = function c(t, e) {
      return n.data_groups.length > 0 ? r(t, e)[0][1] : o.call(i, t.id)(i.getAreaBaseValue(t.id));
    },
        d = function d(t, e) {
      return n.data_groups.length > 0 ? r(t, e)[1][1] : o.call(i, t.id)(t.value);
    };return a = n.axis_rotated ? a.x0(c).x1(d).y(s) : a.x(s).y0(n.area_above ? 0 : c).y1(d), n.line_connectNull || (a = a.defined(function (t) {
      return null !== t.value;
    })), function (t) {
      var e,
          r = n.line_connectNull ? i.filterRemoveNull(t.values) : t.values,
          o = 0,
          s = 0;return i.isAreaType(t) ? (i.isStepType(t) && (r = i.convertValuesToStep(r)), e = a.interpolate(i.getInterpolate(t))(r)) : (r[0] && (o = i.x(r[0].x), s = i.getYScale(t.id)(r[0].value)), e = n.axis_rotated ? "M " + s + " " + o : "M " + o + " " + s), e || "M 0 0";
    };
  }, C.getAreaBaseValue = function () {
    return 0;
  }, C.generateGetAreaPoints = function (t, e) {
    var i = this,
        n = i.config,
        a = t.__max__ + 1,
        r = i.getShapeX(0, a, t, !!e),
        o = i.getShapeY(!!e),
        s = i.getShapeOffset(i.isAreaType, t, !!e),
        c = e ? i.getSubYScale : i.getYScale;return function (t, e) {
      var a = c.call(i, t.id)(0),
          d = s(t, e) || a,
          l = r(t),
          u = o(t);return n.axis_rotated && (0 < t.value && u < a || t.value < 0 && a < u) && (u = a), [[l, d], [l, u - (a - d)], [l, u - (a - d)], [l, d]];
    };
  }, C.updateCircle = function () {
    var t = this;t.mainCircle = t.main.selectAll("." + r.circles).selectAll("." + r.circle).data(t.lineOrScatterData.bind(t)), t.mainCircle.enter().append("circle").attr("class", t.classCircle.bind(t)).attr("r", t.pointR.bind(t)).style("fill", t.color), t.mainCircle.style("opacity", t.initialOpacityForCircle.bind(t)), t.mainCircle.exit().remove();
  }, C.redrawCircle = function (t, e, i) {
    var n = this.main.selectAll("." + r.selectedCircle);return [(i ? this.mainCircle.transition(Math.random().toString()) : this.mainCircle).style("opacity", this.opacityForCircle.bind(this)).style("fill", this.color).attr("cx", t).attr("cy", e), (i ? n.transition(Math.random().toString()) : n).attr("cx", t).attr("cy", e)];
  }, C.circleX = function (t) {
    return t.x || 0 === t.x ? this.x(t.x) : null;
  }, C.updateCircleY = function () {
    var t,
        e,
        i = this;i.config.data_groups.length > 0 ? (t = i.getShapeIndices(i.isLineType), e = i.generateGetLinePoints(t), i.circleY = function (t, i) {
      return e(t, i)[0][1];
    }) : i.circleY = function (t) {
      return i.getYScale(t.id)(t.value);
    };
  }, C.getCircles = function (t, e) {
    var i = this;return (e ? i.main.selectAll("." + r.circles + i.getTargetSelectorSuffix(e)) : i.main).selectAll("." + r.circle + (l(t) ? "-" + t : ""));
  }, C.expandCircles = function (t, e, i) {
    var n = this,
        a = n.pointExpandedR.bind(n);i && n.unexpandCircles(), n.getCircles(t, e).classed(r.EXPANDED, !0).attr("r", a);
  }, C.unexpandCircles = function (t) {
    var e = this,
        i = e.pointR.bind(e);e.getCircles(t).filter(function () {
      return e.d3.select(this).classed(r.EXPANDED);
    }).classed(r.EXPANDED, !1).attr("r", i);
  }, C.pointR = function (t) {
    var e = this,
        i = e.config;return e.isStepType(t) ? 0 : u(i.point_r) ? i.point_r(t) : i.point_r;
  }, C.pointExpandedR = function (t) {
    var e = this,
        i = e.config;return i.point_focus_expand_enabled ? u(i.point_focus_expand_r) ? i.point_focus_expand_r(t) : i.point_focus_expand_r ? i.point_focus_expand_r : 1.75 * e.pointR(t) : e.pointR(t);
  }, C.pointSelectR = function (t) {
    var e = this,
        i = e.config;return u(i.point_select_r) ? i.point_select_r(t) : i.point_select_r ? i.point_select_r : 4 * e.pointR(t);
  }, C.isWithinCircle = function (t, e) {
    var i = this.d3,
        n = i.mouse(t),
        a = i.select(t),
        r = +a.attr("cx"),
        o = +a.attr("cy");return Math.sqrt(Math.pow(r - n[0], 2) + Math.pow(o - n[1], 2)) < e;
  }, C.isWithinStep = function (t, e) {
    return Math.abs(e - this.d3.mouse(t)[1]) < 30;
  }, C.getCurrentWidth = function () {
    var t = this,
        e = t.config;return e.size_width ? e.size_width : t.getParentWidth();
  }, C.getCurrentHeight = function () {
    var t = this,
        e = t.config,
        i = e.size_height ? e.size_height : t.getParentHeight();return i > 0 ? i : 320 / (t.hasType("gauge") && !e.gauge_fullCircle ? 2 : 1);
  }, C.getCurrentPaddingTop = function () {
    var t = this,
        e = t.config,
        i = l(e.padding_top) ? e.padding_top : 0;return t.title && t.title.node() && (i += t.getTitlePadding()), i;
  }, C.getCurrentPaddingBottom = function () {
    var t = this.config;return l(t.padding_bottom) ? t.padding_bottom : 0;
  }, C.getCurrentPaddingLeft = function (t) {
    var e = this,
        i = e.config;return l(i.padding_left) ? i.padding_left : i.axis_rotated ? i.axis_x_show ? Math.max(_(e.getAxisWidthByAxisId("x", t)), 40) : 1 : !i.axis_y_show || i.axis_y_inner ? e.axis.getYAxisLabelPosition().isOuter ? 30 : 1 : _(e.getAxisWidthByAxisId("y", t));
  }, C.getCurrentPaddingRight = function () {
    var t = this,
        e = t.config,
        i = t.isLegendRight ? t.getLegendWidth() + 20 : 0;return l(e.padding_right) ? e.padding_right + 1 : e.axis_rotated ? 10 + i : !e.axis_y2_show || e.axis_y2_inner ? 2 + i + (t.axis.getY2AxisLabelPosition().isOuter ? 20 : 0) : _(t.getAxisWidthByAxisId("y2")) + i;
  }, C.getParentRectValue = function (t) {
    for (var e, i = this.selectChart.node(); i && "BODY" !== i.tagName;) {
      try {
        e = i.getBoundingClientRect()[t];
      } catch (n) {
        "width" === t && (e = i.offsetWidth);
      }if (e) break;i = i.parentNode;
    }return e;
  }, C.getParentWidth = function () {
    return this.getParentRectValue("width");
  }, C.getParentHeight = function () {
    var t = this.selectChart.style("height");return t.indexOf("px") > 0 ? +t.replace("px", "") : 0;
  }, C.getSvgLeft = function (t) {
    var e = this,
        i = e.config,
        n = i.axis_rotated || !i.axis_rotated && !i.axis_y_inner,
        a = i.axis_rotated ? r.axisX : r.axisY,
        o = e.main.select("." + a).node(),
        s = o && n ? o.getBoundingClientRect() : { right: 0 },
        c = e.selectChart.node().getBoundingClientRect(),
        d = e.hasArcType(),
        l = s.right - c.left - (d ? 0 : e.getCurrentPaddingLeft(t));return l > 0 ? l : 0;
  }, C.getAxisWidthByAxisId = function (t, e) {
    var i = this,
        n = i.axis.getLabelPositionById(t);return i.axis.getMaxTickWidth(t, e) + (n.isInner ? 20 : 40);
  }, C.getHorizontalAxisHeight = function (t) {
    var e = this,
        i = e.config,
        n = 30;return "x" !== t || i.axis_x_show ? "x" === t && i.axis_x_height ? i.axis_x_height : "y" !== t || i.axis_y_show ? "y2" !== t || i.axis_y2_show ? ("x" === t && !i.axis_rotated && i.axis_x_tick_rotate && (n = 30 + e.axis.getMaxTickWidth(t) * Math.cos(Math.PI * (90 - i.axis_x_tick_rotate) / 180)), "y" === t && i.axis_rotated && i.axis_y_tick_rotate && (n = 30 + e.axis.getMaxTickWidth(t) * Math.cos(Math.PI * (90 - i.axis_y_tick_rotate) / 180)), n + (e.axis.getLabelPositionById(t).isInner ? 0 : 10) + ("y2" === t ? -10 : 0)) : e.rotated_padding_top : !i.legend_show || e.isLegendRight || e.isLegendInset ? 1 : 10 : 8;
  }, C.getEventRectWidth = function () {
    return Math.max(0, this.xAxis.tickInterval());
  }, C.initBrush = function () {
    var t = this,
        e = t.d3;t.brush = e.svg.brush().on("brush", function () {
      t.redrawForBrush();
    }), t.brush.update = function () {
      return t.context && t.context.select("." + r.brush).call(this), this;
    }, t.brush.scale = function (e) {
      return t.config.axis_rotated ? this.y(e) : this.x(e);
    };
  }, C.initSubchart = function () {
    var t = this,
        e = t.config,
        i = t.context = t.svg.append("g").attr("transform", t.getTranslate("context")),
        n = e.subchart_show ? "visible" : "hidden";i.style("visibility", n), i.append("g").attr("clip-path", t.clipPathForSubchart).attr("class", r.chart), i.select("." + r.chart).append("g").attr("class", r.chartBars), i.select("." + r.chart).append("g").attr("class", r.chartLines), i.append("g").attr("clip-path", t.clipPath).attr("class", r.brush).call(t.brush), t.axes.subx = i.append("g").attr("class", r.axisX).attr("transform", t.getTranslate("subx")).attr("clip-path", e.axis_rotated ? "" : t.clipPathForXAxis).style("visibility", e.subchart_axis_x_show ? n : "hidden");
  }, C.updateTargetsForSubchart = function (t) {
    var e,
        i = this,
        n = i.context,
        a = i.config,
        o = i.classChartBar.bind(i),
        s = i.classBars.bind(i),
        c = i.classChartLine.bind(i),
        d = i.classLines.bind(i),
        l = i.classAreas.bind(i);a.subchart_show && (n.select("." + r.chartBars).selectAll("." + r.chartBar).data(t).attr("class", o).enter().append("g").style("opacity", 0).attr("class", o).append("g").attr("class", s), (e = n.select("." + r.chartLines).selectAll("." + r.chartLine).data(t).attr("class", c).enter().append("g").style("opacity", 0).attr("class", c)).append("g").attr("class", d), e.append("g").attr("class", l), n.selectAll("." + r.brush + " rect").attr(a.axis_rotated ? "width" : "height", a.axis_rotated ? i.width2 : i.height2));
  }, C.updateBarForSubchart = function (t) {
    var e = this;e.contextBar = e.context.selectAll("." + r.bars).selectAll("." + r.bar).data(e.barData.bind(e)), e.contextBar.enter().append("path").attr("class", e.classBar.bind(e)).style("stroke", "none").style("fill", e.color), e.contextBar.style("opacity", e.initialOpacity.bind(e)), e.contextBar.exit().transition().duration(t).style("opacity", 0).remove();
  }, C.redrawBarForSubchart = function (t, e, i) {
    (e ? this.contextBar.transition(Math.random().toString()).duration(i) : this.contextBar).attr("d", t).style("opacity", 1);
  }, C.updateLineForSubchart = function (t) {
    var e = this;e.contextLine = e.context.selectAll("." + r.lines).selectAll("." + r.line).data(e.lineData.bind(e)), e.contextLine.enter().append("path").attr("class", e.classLine.bind(e)).style("stroke", e.color), e.contextLine.style("opacity", e.initialOpacity.bind(e)), e.contextLine.exit().transition().duration(t).style("opacity", 0).remove();
  }, C.redrawLineForSubchart = function (t, e, i) {
    (e ? this.contextLine.transition(Math.random().toString()).duration(i) : this.contextLine).attr("d", t).style("opacity", 1);
  }, C.updateAreaForSubchart = function (t) {
    var e = this,
        i = e.d3;e.contextArea = e.context.selectAll("." + r.areas).selectAll("." + r.area).data(e.lineData.bind(e)), e.contextArea.enter().append("path").attr("class", e.classArea.bind(e)).style("fill", e.color).style("opacity", function () {
      return e.orgAreaOpacity = +i.select(this).style("opacity"), 0;
    }), e.contextArea.style("opacity", 0), e.contextArea.exit().transition().duration(t).style("opacity", 0).remove();
  }, C.redrawAreaForSubchart = function (t, e, i) {
    (e ? this.contextArea.transition(Math.random().toString()).duration(i) : this.contextArea).attr("d", t).style("fill", this.color).style("opacity", this.orgAreaOpacity);
  }, C.redrawSubchart = function (t, e, i, n, a, r, o) {
    var s,
        c,
        d,
        l = this,
        u = l.d3,
        h = l.config;l.context.style("visibility", h.subchart_show ? "visible" : "hidden"), h.subchart_show && (u.event && "zoom" === u.event.type && l.brush.extent(l.x.orgDomain()).update(), t && (l.brush.empty() || l.brush.extent(l.x.orgDomain()).update(), s = l.generateDrawArea(a, !0), c = l.generateDrawBar(r, !0), d = l.generateDrawLine(o, !0), l.updateBarForSubchart(i), l.updateLineForSubchart(i), l.updateAreaForSubchart(i), l.redrawBarForSubchart(c, i, i), l.redrawLineForSubchart(d, i, i), l.redrawAreaForSubchart(s, i, i)));
  }, C.redrawForBrush = function () {
    var t = this,
        e = t.x;t.redraw({ withTransition: !1, withY: t.config.zoom_rescale, withSubchart: !1, withUpdateXDomain: !0, withDimension: !1 }), t.config.subchart_onbrush.call(t.api, e.orgDomain());
  }, C.transformContext = function (t, e) {
    var i,
        n = this;e && e.axisSubX ? i = e.axisSubX : (i = n.context.select("." + r.axisX), t && (i = i.transition())), n.context.attr("transform", n.getTranslate("context")), i.attr("transform", n.getTranslate("subx"));
  }, C.getDefaultExtent = function () {
    var t = this,
        e = t.config,
        i = u(e.axis_x_extent) ? e.axis_x_extent(t.getXDomain(t.data.targets)) : e.axis_x_extent;return t.isTimeSeries() && (i = [t.parseDate(i[0]), t.parseDate(i[1])]), i;
  }, C.initText = function () {
    var t = this;t.main.select("." + r.chart).append("g").attr("class", r.chartTexts), t.mainText = t.d3.selectAll([]);
  }, C.updateTargetsForText = function (t) {
    var e = this,
        i = e.classChartText.bind(e),
        n = e.classTexts.bind(e),
        a = e.classFocus.bind(e);e.main.select("." + r.chartTexts).selectAll("." + r.chartText).data(t).attr("class", function (t) {
      return i(t) + a(t);
    }).enter().append("g").attr("class", i).style("opacity", 0).style("pointer-events", "none").append("g").attr("class", n);
  }, C.updateText = function (t) {
    var e = this,
        i = e.config,
        n = e.barOrLineData.bind(e),
        a = e.classText.bind(e);e.mainText = e.main.selectAll("." + r.texts).selectAll("." + r.text).data(n), e.mainText.enter().append("text").attr("class", a).attr("text-anchor", function (t) {
      return i.axis_rotated ? t.value < 0 ? "end" : "start" : "middle";
    }).style("stroke", "none").style("fill", function (t) {
      return e.color(t);
    }).style("fill-opacity", 0), e.mainText.text(function (t, i, n) {
      return e.dataLabelFormat(t.id)(t.value, t.id, i, n);
    }), e.mainText.exit().transition().duration(t).style("fill-opacity", 0).remove();
  }, C.redrawText = function (t, e, i, n) {
    return [(n ? this.mainText.transition() : this.mainText).attr("x", t).attr("y", e).style("fill", this.color).style("fill-opacity", i ? 0 : this.opacityForText.bind(this))];
  }, C.getTextRect = function (t, e, i) {
    var n,
        a = this.d3.select("body").append("div").classed("c3", !0),
        r = a.append("svg").style("visibility", "hidden").style("position", "fixed").style("top", 0).style("left", 0),
        o = this.d3.select(i).style("font");return r.selectAll(".dummy").data([t]).enter().append("text").classed(e || "", !0).style("font", o).text(t).each(function () {
      n = this.getBoundingClientRect();
    }), a.remove(), n;
  }, C.generateXYForText = function (t, e, i, n) {
    var a = this,
        r = a.generateGetAreaPoints(t, !1),
        o = a.generateGetBarPoints(e, !1),
        s = a.generateGetLinePoints(i, !1),
        c = n ? a.getXForText : a.getYForText;return function (t, e) {
      var i = a.isAreaType(t) ? r : a.isBarType(t) ? o : s;return c.call(a, i(t, e), t, this);
    };
  }, C.getXForText = function (t, e, i) {
    var n,
        a,
        r = this,
        o = i.getBoundingClientRect();return r.config.axis_rotated ? (a = r.isBarType(e) ? 4 : 6, n = t[2][1] + a * (e.value < 0 ? -1 : 1)) : n = r.hasType("bar") ? (t[2][0] + t[0][0]) / 2 : t[0][0], null === e.value && (n > r.width ? n = r.width - o.width : n < 0 && (n = 4)), n;
  }, C.getYForText = function (t, e, i) {
    var n,
        a = this,
        r = i.getBoundingClientRect();return a.config.axis_rotated ? n = (t[0][0] + t[2][0] + .6 * r.height) / 2 : (n = t[2][1], e.value < 0 || 0 === e.value && !a.hasPositiveValue ? (n += r.height, a.isBarType(e) && a.isSafari() ? n -= 3 : !a.isBarType(e) && a.isChrome() && (n += 3)) : n += a.isBarType(e) ? -3 : -6), null !== e.value || a.config.axis_rotated || (n < r.height ? n = r.height : n > this.height && (n = this.height - 4)), n;
  }, C.initTitle = function () {
    var t = this;t.title = t.svg.append("text").text(t.config.title_text).attr("class", t.CLASS.title);
  }, C.redrawTitle = function () {
    var t = this;t.title.attr("x", t.xForTitle.bind(t)).attr("y", t.yForTitle.bind(t));
  }, C.xForTitle = function () {
    var t = this,
        e = t.config,
        i = e.title_position || "left";return i.indexOf("right") >= 0 ? t.currentWidth - t.getTextRect(t.title.node().textContent, t.CLASS.title, t.title.node()).width - e.title_padding.right : i.indexOf("center") >= 0 ? (t.currentWidth - t.getTextRect(t.title.node().textContent, t.CLASS.title, t.title.node()).width) / 2 : e.title_padding.left;
  }, C.yForTitle = function () {
    var t = this;return t.config.title_padding.top + t.getTextRect(t.title.node().textContent, t.CLASS.title, t.title.node()).height;
  }, C.getTitlePadding = function () {
    var t = this;return t.yForTitle() + t.config.title_padding.bottom;
  }, C.initTooltip = function () {
    var t,
        e = this,
        i = e.config;if (e.tooltip = e.selectChart.style("position", "relative").append("div").attr("class", r.tooltipContainer).style("position", "absolute").style("pointer-events", "none").style("display", "none"), i.tooltip_init_show) {
      if (e.isTimeSeries() && g(i.tooltip_init_x)) {
        for (i.tooltip_init_x = e.parseDate(i.tooltip_init_x), t = 0; t < e.data.targets[0].values.length && e.data.targets[0].values[t].x - i.tooltip_init_x != 0; t++) {}i.tooltip_init_x = t;
      }e.tooltip.html(i.tooltip_contents.call(e, e.data.targets.map(function (t) {
        return e.addName(t.values[i.tooltip_init_x]);
      }), e.axis.getXAxisTickFormat(), e.getYFormat(e.hasArcType()), e.color)), e.tooltip.style("top", i.tooltip_init_position.top).style("left", i.tooltip_init_position.left).style("display", "block");
    }
  }, C.getTooltipSortFunction = function () {
    var t = this,
        e = t.config;if (0 !== e.data_groups.length && void 0 === e.tooltip_order) {
      var i = t.orderTargets(t.data.targets).map(function (t) {
        return t.id;
      });return (t.isOrderAsc() || t.isOrderDesc()) && (i = i.reverse()), function (t, e) {
        return i.indexOf(t.id) - i.indexOf(e.id);
      };
    }var n = e.tooltip_order;void 0 === n && (n = e.data_order);var a = function a(t) {
      return t ? t.value : null;
    };if (g(n) && "asc" === n.toLowerCase()) return function (t, e) {
      return a(t) - a(e);
    };if (g(n) && "desc" === n.toLowerCase()) return function (t, e) {
      return a(e) - a(t);
    };if (u(n)) {
      var r = n;return void 0 === e.tooltip_order && (r = function r(t, e) {
        return n(t ? { id: t.id, values: [t] } : null, e ? { id: e.id, values: [e] } : null);
      }), r;
    }return h(n) ? function (t, e) {
      return n.indexOf(t.id) - n.indexOf(e.id);
    } : void 0;
  }, C.getTooltipContent = function (t, e, i, n) {
    var a,
        r,
        o,
        s,
        c,
        d,
        l = this,
        u = l.config,
        h = u.tooltip_format_title || e,
        g = u.tooltip_format_name || function (t) {
      return t;
    },
        f = u.tooltip_format_value || i,
        p = this.getTooltipSortFunction();for (p && t.sort(p), r = 0; r < t.length; r++) {
      if (t[r] && (t[r].value || 0 === t[r].value) && (a || (o = b(h ? h(t[r].x) : t[r].x), a = "<table class='" + l.CLASS.tooltip + "'>" + (o || 0 === o ? "<tr><th colspan='2'>" + o + "</th></tr>" : "")), void 0 !== (s = b(f(t[r].value, t[r].ratio, t[r].id, t[r].index, t))))) {
        if (null === t[r].name) continue;c = b(g(t[r].name, t[r].ratio, t[r].id, t[r].index)), d = l.levelColor ? l.levelColor(t[r].value) : n(t[r].id), a += "<tr class='" + l.CLASS.tooltipName + "-" + l.getTargetSelectorSuffix(t[r].id) + "'>", a += "<td class='name'><span style='background-color:" + d + "'></span>" + c + "</td>", a += "<td class='value'>" + s + "</td>", a += "</tr>";
      }
    }return a + "</table>";
  }, C.tooltipPosition = function (t, e, i, n) {
    var a,
        r,
        o,
        s,
        c,
        d = this,
        l = d.config,
        u = d.d3,
        h = d.hasArcType(),
        g = u.mouse(n);return h ? (r = (d.width - (d.isLegendRight ? d.getLegendWidth() : 0)) / 2 + g[0], s = d.height / 2 + g[1] + 20) : (a = d.getSvgLeft(!0), l.axis_rotated ? (o = (r = a + g[0] + 100) + e, c = d.currentWidth - d.getCurrentPaddingRight(), s = d.x(t[0].x) + 20) : (o = (r = a + d.getCurrentPaddingLeft(!0) + d.x(t[0].x) + 20) + e, c = a + d.currentWidth - d.getCurrentPaddingRight(), s = g[1] + 15), o > c && (r -= o - c + 20), s + i > d.currentHeight && (s -= i + 30)), s < 0 && (s = 0), { top: s, left: r };
  }, C.showTooltip = function (t, e) {
    var i,
        n,
        a,
        r = this,
        o = r.config,
        s = r.hasArcType(),
        c = t.filter(function (t) {
      return t && l(t.value);
    }),
        d = o.tooltip_position || C.tooltipPosition;0 !== c.length && o.tooltip_show && (r.tooltip.html(o.tooltip_contents.call(r, t, r.axis.getXAxisTickFormat(), r.getYFormat(s), r.color)).style("display", "block"), i = r.tooltip.property("offsetWidth"), n = r.tooltip.property("offsetHeight"), a = d.call(this, c, i, n, e), r.tooltip.style("top", a.top + "px").style("left", a.left + "px"));
  }, C.hideTooltip = function () {
    this.tooltip.style("display", "none");
  }, C.setTargetType = function (t, e) {
    var i = this,
        n = i.config;i.mapToTargetIds(t).forEach(function (t) {
      i.withoutFadeIn[t] = e === n.data_types[t], n.data_types[t] = e;
    }), t || (n.data_type = e);
  }, C.hasType = function (t, e) {
    var i = this,
        n = i.config.data_types,
        a = !1;return e = e || i.data.targets, e && e.length ? e.forEach(function (e) {
      var i = n[e.id];(i && i.indexOf(t) >= 0 || !i && "line" === t) && (a = !0);
    }) : Object.keys(n).length ? Object.keys(n).forEach(function (e) {
      n[e] === t && (a = !0);
    }) : a = i.config.data_type === t, a;
  }, C.hasArcType = function (t) {
    return this.hasType("pie", t) || this.hasType("donut", t) || this.hasType("gauge", t);
  }, C.isLineType = function (t) {
    var e = this.config,
        i = g(t) ? t : t.id;return !e.data_types[i] || ["line", "spline", "area", "area-spline", "step", "area-step"].indexOf(e.data_types[i]) >= 0;
  }, C.isStepType = function (t) {
    var e = g(t) ? t : t.id;return ["step", "area-step"].indexOf(this.config.data_types[e]) >= 0;
  }, C.isSplineType = function (t) {
    var e = g(t) ? t : t.id;return ["spline", "area-spline"].indexOf(this.config.data_types[e]) >= 0;
  }, C.isAreaType = function (t) {
    var e = g(t) ? t : t.id;return ["area", "area-spline", "area-step"].indexOf(this.config.data_types[e]) >= 0;
  }, C.isBarType = function (t) {
    var e = g(t) ? t : t.id;return "bar" === this.config.data_types[e];
  }, C.isScatterType = function (t) {
    var e = g(t) ? t : t.id;return "scatter" === this.config.data_types[e];
  }, C.isPieType = function (t) {
    var e = g(t) ? t : t.id;return "pie" === this.config.data_types[e];
  }, C.isGaugeType = function (t) {
    var e = g(t) ? t : t.id;return "gauge" === this.config.data_types[e];
  }, C.isDonutType = function (t) {
    var e = g(t) ? t : t.id;return "donut" === this.config.data_types[e];
  }, C.isArcType = function (t) {
    return this.isPieType(t) || this.isDonutType(t) || this.isGaugeType(t);
  }, C.lineData = function (t) {
    return this.isLineType(t) ? [t] : [];
  }, C.arcData = function (t) {
    return this.isArcType(t.data) ? [t] : [];
  }, C.barData = function (t) {
    return this.isBarType(t) ? t.values : [];
  }, C.lineOrScatterData = function (t) {
    return this.isLineType(t) || this.isScatterType(t) ? t.values : [];
  }, C.barOrLineData = function (t) {
    return this.isBarType(t) || this.isLineType(t) ? t.values : [];
  }, C.isInterpolationType = function (t) {
    return ["linear", "linear-closed", "basis", "basis-open", "basis-closed", "bundle", "cardinal", "cardinal-open", "cardinal-closed", "monotone"].indexOf(t) >= 0;
  }, C.isSafari = function () {
    var t = window.navigator.userAgent;return t.indexOf("Safari") >= 0 && t.indexOf("Chrome") < 0;
  }, C.isChrome = function () {
    return window.navigator.userAgent.indexOf("Chrome") >= 0;
  }, C.initZoom = function () {
    var t,
        e = this,
        i = e.d3,
        n = e.config;e.zoom = i.behavior.zoom().on("zoomstart", function () {
      t = i.event.sourceEvent, e.zoom.altDomain = i.event.sourceEvent.altKey ? e.x.orgDomain() : null, n.zoom_onzoomstart.call(e.api, i.event.sourceEvent);
    }).on("zoom", function () {
      e.redrawForZoom.call(e);
    }).on("zoomend", function () {
      var a = i.event.sourceEvent;a && t.clientX === a.clientX && t.clientY === a.clientY || (e.redrawEventRect(), e.updateZoom(), n.zoom_onzoomend.call(e.api, e.x.orgDomain()));
    }), e.zoom.scale = function (t) {
      return n.axis_rotated ? this.y(t) : this.x(t);
    }, e.zoom.orgScaleExtent = function () {
      var t = n.zoom_extent ? n.zoom_extent : [1, 10];return [t[0], Math.max(e.getMaxDataCount() / t[1], t[1])];
    }, e.zoom.updateScaleExtent = function () {
      var t = m(e.x.orgDomain()) / m(e.getZoomDomain()),
          i = this.orgScaleExtent();return this.scaleExtent([i[0] * t, i[1] * t]), this;
    };
  }, C.getZoomDomain = function () {
    var t = this,
        e = t.config,
        i = t.d3;return [i.min([t.orgXDomain[0], e.zoom_x_min]), i.max([t.orgXDomain[1], e.zoom_x_max])];
  }, C.updateZoom = function () {
    var t = this,
        e = t.config.zoom_enabled ? t.zoom : function () {};t.main.select("." + r.zoomRect).call(e).on("dblclick.zoom", null), t.main.selectAll("." + r.eventRect).call(e).on("dblclick.zoom", null);
  }, C.redrawForZoom = function () {
    var t = this,
        e = t.d3,
        i = t.config,
        n = t.zoom,
        a = t.x;if (i.zoom_enabled && 0 !== t.filterTargetsToShow(t.data.targets).length) {
      if ("mousemove" === e.event.sourceEvent.type && n.altDomain) return a.domain(n.altDomain), void n.scale(a).updateScaleExtent();t.isCategorized() && a.orgDomain()[0] === t.orgXDomain[0] && a.domain([t.orgXDomain[0] - 1e-10, a.orgDomain()[1]]), t.redraw({ withTransition: !1, withY: i.zoom_rescale, withSubchart: !1, withEventRect: !1, withDimension: !1 }), "mousemove" === e.event.sourceEvent.type && (t.cancelClick = !0), i.zoom_onzoom.call(t.api, a.orgDomain());
    }
  }, L;
});
!function () {
  function n(n) {
    return n && (n.ownerDocument || n.document || n).documentElement;
  }function t(n) {
    return n && (n.ownerDocument && n.ownerDocument.defaultView || n.document && n || n.defaultView);
  }function e(n, t) {
    return t > n ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
  }function r(n) {
    return null === n ? NaN : +n;
  }function i(n) {
    return !isNaN(n);
  }function u(n) {
    return { left: function left(t, e, r, i) {
        for (arguments.length < 3 && (r = 0), arguments.length < 4 && (i = t.length); i > r;) {
          var u = r + i >>> 1;n(t[u], e) < 0 ? r = u + 1 : i = u;
        }return r;
      }, right: function right(t, e, r, i) {
        for (arguments.length < 3 && (r = 0), arguments.length < 4 && (i = t.length); i > r;) {
          var u = r + i >>> 1;n(t[u], e) > 0 ? i = u : r = u + 1;
        }return r;
      } };
  }function o(n) {
    return n.length;
  }function a(n) {
    for (var t = 1; n * t % 1;) {
      t *= 10;
    }return t;
  }function l(n, t) {
    for (var e in t) {
      Object.defineProperty(n.prototype, e, { value: t[e], enumerable: !1 });
    }
  }function c() {
    this._ = Object.create(null);
  }function f(n) {
    return (n += "") === bo || n[0] === _o ? _o + n : n;
  }function s(n) {
    return (n += "")[0] === _o ? n.slice(1) : n;
  }function h(n) {
    return f(n) in this._;
  }function p(n) {
    return (n = f(n)) in this._ && delete this._[n];
  }function g() {
    var n = [];for (var t in this._) {
      n.push(s(t));
    }return n;
  }function v() {
    var n = 0;for (var t in this._) {
      ++n;
    }return n;
  }function d() {
    for (var n in this._) {
      return !1;
    }return !0;
  }function y() {
    this._ = Object.create(null);
  }function m(n) {
    return n;
  }function M(n, t, e) {
    return function () {
      var r = e.apply(t, arguments);return r === t ? n : r;
    };
  }function x(n, t) {
    if (t in n) return t;t = t.charAt(0).toUpperCase() + t.slice(1);for (var e = 0, r = wo.length; r > e; ++e) {
      var i = wo[e] + t;if (i in n) return i;
    }
  }function b() {}function _() {}function w(n) {
    function t() {
      for (var t, r = e, i = -1, u = r.length; ++i < u;) {
        (t = r[i].on) && t.apply(this, arguments);
      }return n;
    }var e = [],
        r = new c();return t.on = function (t, i) {
      var u,
          o = r.get(t);return arguments.length < 2 ? o && o.on : (o && (o.on = null, e = e.slice(0, u = e.indexOf(o)).concat(e.slice(u + 1)), r.remove(t)), i && e.push(r.set(t, { on: i })), n);
    }, t;
  }function S() {
    ao.event.preventDefault();
  }function k() {
    for (var n, t = ao.event; n = t.sourceEvent;) {
      t = n;
    }return t;
  }function N(n) {
    for (var t = new _(), e = 0, r = arguments.length; ++e < r;) {
      t[arguments[e]] = w(t);
    }return t.of = function (e, r) {
      return function (i) {
        try {
          var u = i.sourceEvent = ao.event;i.target = n, ao.event = i, t[i.type].apply(e, r);
        } finally {
          ao.event = u;
        }
      };
    }, t;
  }function E(n) {
    return ko(n, Co), n;
  }function A(n) {
    return "function" == typeof n ? n : function () {
      return No(n, this);
    };
  }function C(n) {
    return "function" == typeof n ? n : function () {
      return Eo(n, this);
    };
  }function z(n, t) {
    function e() {
      this.removeAttribute(n);
    }function r() {
      this.removeAttributeNS(n.space, n.local);
    }function i() {
      this.setAttribute(n, t);
    }function u() {
      this.setAttributeNS(n.space, n.local, t);
    }function o() {
      var e = t.apply(this, arguments);null == e ? this.removeAttribute(n) : this.setAttribute(n, e);
    }function a() {
      var e = t.apply(this, arguments);null == e ? this.removeAttributeNS(n.space, n.local) : this.setAttributeNS(n.space, n.local, e);
    }return n = ao.ns.qualify(n), null == t ? n.local ? r : e : "function" == typeof t ? n.local ? a : o : n.local ? u : i;
  }function L(n) {
    return n.trim().replace(/\s+/g, " ");
  }function q(n) {
    return new RegExp("(?:^|\\s+)" + ao.requote(n) + "(?:\\s+|$)", "g");
  }function T(n) {
    return (n + "").trim().split(/^|\s+/);
  }function R(n, t) {
    function e() {
      for (var e = -1; ++e < i;) {
        n[e](this, t);
      }
    }function r() {
      for (var e = -1, r = t.apply(this, arguments); ++e < i;) {
        n[e](this, r);
      }
    }n = T(n).map(D);var i = n.length;return "function" == typeof t ? r : e;
  }function D(n) {
    var t = q(n);return function (e, r) {
      if (i = e.classList) return r ? i.add(n) : i.remove(n);var i = e.getAttribute("class") || "";r ? (t.lastIndex = 0, t.test(i) || e.setAttribute("class", L(i + " " + n))) : e.setAttribute("class", L(i.replace(t, " ")));
    };
  }function P(n, t, e) {
    function r() {
      this.style.removeProperty(n);
    }function i() {
      this.style.setProperty(n, t, e);
    }function u() {
      var r = t.apply(this, arguments);null == r ? this.style.removeProperty(n) : this.style.setProperty(n, r, e);
    }return null == t ? r : "function" == typeof t ? u : i;
  }function U(n, t) {
    function e() {
      delete this[n];
    }function r() {
      this[n] = t;
    }function i() {
      var e = t.apply(this, arguments);null == e ? delete this[n] : this[n] = e;
    }return null == t ? e : "function" == typeof t ? i : r;
  }function j(n) {
    function t() {
      var t = this.ownerDocument,
          e = this.namespaceURI;return e === zo && t.documentElement.namespaceURI === zo ? t.createElement(n) : t.createElementNS(e, n);
    }function e() {
      return this.ownerDocument.createElementNS(n.space, n.local);
    }return "function" == typeof n ? n : (n = ao.ns.qualify(n)).local ? e : t;
  }function F() {
    var n = this.parentNode;n && n.removeChild(this);
  }function H(n) {
    return { __data__: n };
  }function O(n) {
    return function () {
      return _Ao(this, n);
    };
  }function I(n) {
    return arguments.length || (n = e), function (t, e) {
      return t && e ? n(t.__data__, e.__data__) : !t - !e;
    };
  }function Y(n, t) {
    for (var e = 0, r = n.length; r > e; e++) {
      for (var i, u = n[e], o = 0, a = u.length; a > o; o++) {
        (i = u[o]) && t(i, o, e);
      }
    }return n;
  }function Z(n) {
    return ko(n, qo), n;
  }function V(n) {
    var t, e;return function (r, i, u) {
      var o,
          a = n[u].update,
          l = a.length;for (u != e && (e = u, t = 0), i >= t && (t = i + 1); !(o = a[t]) && ++t < l;) {}return o;
    };
  }function X(n, t, e) {
    function r() {
      var t = this[o];t && (this.removeEventListener(n, t, t.$), delete this[o]);
    }function i() {
      var i = l(t, co(arguments));r.call(this), this.addEventListener(n, this[o] = i, i.$ = e), i._ = t;
    }function u() {
      var t,
          e = new RegExp("^__on([^.]+)" + ao.requote(n) + "$");for (var r in this) {
        if (t = r.match(e)) {
          var i = this[r];this.removeEventListener(t[1], i, i.$), delete this[r];
        }
      }
    }var o = "__on" + n,
        a = n.indexOf("."),
        l = $;a > 0 && (n = n.slice(0, a));var c = To.get(n);return c && (n = c, l = B), a ? t ? i : r : t ? b : u;
  }function $(n, t) {
    return function (e) {
      var r = ao.event;ao.event = e, t[0] = this.__data__;try {
        n.apply(this, t);
      } finally {
        ao.event = r;
      }
    };
  }function B(n, t) {
    var e = $(n, t);return function (n) {
      var t = this,
          r = n.relatedTarget;r && (r === t || 8 & r.compareDocumentPosition(t)) || e.call(t, n);
    };
  }function W(e) {
    var r = ".dragsuppress-" + ++Do,
        i = "click" + r,
        u = ao.select(t(e)).on("touchmove" + r, S).on("dragstart" + r, S).on("selectstart" + r, S);if (null == Ro && (Ro = "onselectstart" in e ? !1 : x(e.style, "userSelect")), Ro) {
      var o = n(e).style,
          a = o[Ro];o[Ro] = "none";
    }return function (n) {
      if (u.on(r, null), Ro && (o[Ro] = a), n) {
        var t = function t() {
          u.on(i, null);
        };u.on(i, function () {
          S(), t();
        }, !0), setTimeout(t, 0);
      }
    };
  }function J(n, e) {
    e.changedTouches && (e = e.changedTouches[0]);var r = n.ownerSVGElement || n;if (r.createSVGPoint) {
      var i = r.createSVGPoint();if (0 > Po) {
        var u = t(n);if (u.scrollX || u.scrollY) {
          r = ao.select("body").append("svg").style({ position: "absolute", top: 0, left: 0, margin: 0, padding: 0, border: "none" }, "important");var o = r[0][0].getScreenCTM();Po = !(o.f || o.e), r.remove();
        }
      }return Po ? (i.x = e.pageX, i.y = e.pageY) : (i.x = e.clientX, i.y = e.clientY), i = i.matrixTransform(n.getScreenCTM().inverse()), [i.x, i.y];
    }var a = n.getBoundingClientRect();return [e.clientX - a.left - n.clientLeft, e.clientY - a.top - n.clientTop];
  }function G() {
    return ao.event.changedTouches[0].identifier;
  }function K(n) {
    return n > 0 ? 1 : 0 > n ? -1 : 0;
  }function Q(n, t, e) {
    return (t[0] - n[0]) * (e[1] - n[1]) - (t[1] - n[1]) * (e[0] - n[0]);
  }function nn(n) {
    return n > 1 ? 0 : -1 > n ? Fo : Math.acos(n);
  }function tn(n) {
    return n > 1 ? Io : -1 > n ? -Io : Math.asin(n);
  }function en(n) {
    return ((n = Math.exp(n)) - 1 / n) / 2;
  }function rn(n) {
    return ((n = Math.exp(n)) + 1 / n) / 2;
  }function un(n) {
    return ((n = Math.exp(2 * n)) - 1) / (n + 1);
  }function on(n) {
    return (n = Math.sin(n / 2)) * n;
  }function an() {}function ln(n, t, e) {
    return this instanceof ln ? (this.h = +n, this.s = +t, void (this.l = +e)) : arguments.length < 2 ? n instanceof ln ? new ln(n.h, n.s, n.l) : _n("" + n, wn, ln) : new ln(n, t, e);
  }function cn(n, t, e) {
    function r(n) {
      return n > 360 ? n -= 360 : 0 > n && (n += 360), 60 > n ? u + (o - u) * n / 60 : 180 > n ? o : 240 > n ? u + (o - u) * (240 - n) / 60 : u;
    }function i(n) {
      return Math.round(255 * r(n));
    }var u, o;return n = isNaN(n) ? 0 : (n %= 360) < 0 ? n + 360 : n, t = isNaN(t) ? 0 : 0 > t ? 0 : t > 1 ? 1 : t, e = 0 > e ? 0 : e > 1 ? 1 : e, o = .5 >= e ? e * (1 + t) : e + t - e * t, u = 2 * e - o, new mn(i(n + 120), i(n), i(n - 120));
  }function fn(n, t, e) {
    return this instanceof fn ? (this.h = +n, this.c = +t, void (this.l = +e)) : arguments.length < 2 ? n instanceof fn ? new fn(n.h, n.c, n.l) : n instanceof hn ? gn(n.l, n.a, n.b) : gn((n = Sn((n = ao.rgb(n)).r, n.g, n.b)).l, n.a, n.b) : new fn(n, t, e);
  }function sn(n, t, e) {
    return isNaN(n) && (n = 0), isNaN(t) && (t = 0), new hn(e, Math.cos(n *= Yo) * t, Math.sin(n) * t);
  }function hn(n, t, e) {
    return this instanceof hn ? (this.l = +n, this.a = +t, void (this.b = +e)) : arguments.length < 2 ? n instanceof hn ? new hn(n.l, n.a, n.b) : n instanceof fn ? sn(n.h, n.c, n.l) : Sn((n = mn(n)).r, n.g, n.b) : new hn(n, t, e);
  }function pn(n, t, e) {
    var r = (n + 16) / 116,
        i = r + t / 500,
        u = r - e / 200;return i = vn(i) * na, r = vn(r) * ta, u = vn(u) * ea, new mn(yn(3.2404542 * i - 1.5371385 * r - .4985314 * u), yn(-.969266 * i + 1.8760108 * r + .041556 * u), yn(.0556434 * i - .2040259 * r + 1.0572252 * u));
  }function gn(n, t, e) {
    return n > 0 ? new fn(Math.atan2(e, t) * Zo, Math.sqrt(t * t + e * e), n) : new fn(NaN, NaN, n);
  }function vn(n) {
    return n > .206893034 ? n * n * n : (n - 4 / 29) / 7.787037;
  }function dn(n) {
    return n > .008856 ? Math.pow(n, 1 / 3) : 7.787037 * n + 4 / 29;
  }function yn(n) {
    return Math.round(255 * (.00304 >= n ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - .055));
  }function mn(n, t, e) {
    return this instanceof mn ? (this.r = ~~n, this.g = ~~t, void (this.b = ~~e)) : arguments.length < 2 ? n instanceof mn ? new mn(n.r, n.g, n.b) : _n("" + n, mn, cn) : new mn(n, t, e);
  }function Mn(n) {
    return new mn(n >> 16, n >> 8 & 255, 255 & n);
  }function xn(n) {
    return Mn(n) + "";
  }function bn(n) {
    return 16 > n ? "0" + Math.max(0, n).toString(16) : Math.min(255, n).toString(16);
  }function _n(n, t, e) {
    var r,
        i,
        u,
        o = 0,
        a = 0,
        l = 0;if (r = /([a-z]+)\((.*)\)/.exec(n = n.toLowerCase())) switch (i = r[2].split(","), r[1]) {case "hsl":
        return e(parseFloat(i[0]), parseFloat(i[1]) / 100, parseFloat(i[2]) / 100);case "rgb":
        return t(Nn(i[0]), Nn(i[1]), Nn(i[2]));}return (u = ua.get(n)) ? t(u.r, u.g, u.b) : (null == n || "#" !== n.charAt(0) || isNaN(u = parseInt(n.slice(1), 16)) || (4 === n.length ? (o = (3840 & u) >> 4, o = o >> 4 | o, a = 240 & u, a = a >> 4 | a, l = 15 & u, l = l << 4 | l) : 7 === n.length && (o = (16711680 & u) >> 16, a = (65280 & u) >> 8, l = 255 & u)), t(o, a, l));
  }function wn(n, t, e) {
    var r,
        i,
        u = Math.min(n /= 255, t /= 255, e /= 255),
        o = Math.max(n, t, e),
        a = o - u,
        l = (o + u) / 2;return a ? (i = .5 > l ? a / (o + u) : a / (2 - o - u), r = n == o ? (t - e) / a + (e > t ? 6 : 0) : t == o ? (e - n) / a + 2 : (n - t) / a + 4, r *= 60) : (r = NaN, i = l > 0 && 1 > l ? 0 : r), new ln(r, i, l);
  }function Sn(n, t, e) {
    n = kn(n), t = kn(t), e = kn(e);var r = dn((.4124564 * n + .3575761 * t + .1804375 * e) / na),
        i = dn((.2126729 * n + .7151522 * t + .072175 * e) / ta),
        u = dn((.0193339 * n + .119192 * t + .9503041 * e) / ea);return hn(116 * i - 16, 500 * (r - i), 200 * (i - u));
  }function kn(n) {
    return (n /= 255) <= .04045 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4);
  }function Nn(n) {
    var t = parseFloat(n);return "%" === n.charAt(n.length - 1) ? Math.round(2.55 * t) : t;
  }function En(n) {
    return "function" == typeof n ? n : function () {
      return n;
    };
  }function An(n) {
    return function (t, e, r) {
      return 2 === arguments.length && "function" == typeof e && (r = e, e = null), Cn(t, e, n, r);
    };
  }function Cn(n, t, e, r) {
    function i() {
      var n,
          t = l.status;if (!t && Ln(l) || t >= 200 && 300 > t || 304 === t) {
        try {
          n = e.call(u, l);
        } catch (r) {
          return void o.error.call(u, r);
        }o.load.call(u, n);
      } else o.error.call(u, l);
    }var u = {},
        o = ao.dispatch("beforesend", "progress", "load", "error"),
        a = {},
        l = new XMLHttpRequest(),
        c = null;return !this.XDomainRequest || "withCredentials" in l || !/^(http(s)?:)?\/\//.test(n) || (l = new XDomainRequest()), "onload" in l ? l.onload = l.onerror = i : l.onreadystatechange = function () {
      l.readyState > 3 && i();
    }, l.onprogress = function (n) {
      var t = ao.event;ao.event = n;try {
        o.progress.call(u, l);
      } finally {
        ao.event = t;
      }
    }, u.header = function (n, t) {
      return n = (n + "").toLowerCase(), arguments.length < 2 ? a[n] : (null == t ? delete a[n] : a[n] = t + "", u);
    }, u.mimeType = function (n) {
      return arguments.length ? (t = null == n ? null : n + "", u) : t;
    }, u.responseType = function (n) {
      return arguments.length ? (c = n, u) : c;
    }, u.response = function (n) {
      return e = n, u;
    }, ["get", "post"].forEach(function (n) {
      u[n] = function () {
        return u.send.apply(u, [n].concat(co(arguments)));
      };
    }), u.send = function (e, r, i) {
      if (2 === arguments.length && "function" == typeof r && (i = r, r = null), l.open(e, n, !0), null == t || "accept" in a || (a.accept = t + ",*/*"), l.setRequestHeader) for (var f in a) {
        l.setRequestHeader(f, a[f]);
      }return null != t && l.overrideMimeType && l.overrideMimeType(t), null != c && (l.responseType = c), null != i && u.on("error", i).on("load", function (n) {
        i(null, n);
      }), o.beforesend.call(u, l), l.send(null == r ? null : r), u;
    }, u.abort = function () {
      return l.abort(), u;
    }, ao.rebind(u, o, "on"), null == r ? u : u.get(zn(r));
  }function zn(n) {
    return 1 === n.length ? function (t, e) {
      n(null == t ? e : null);
    } : n;
  }function Ln(n) {
    var t = n.responseType;return t && "text" !== t ? n.response : n.responseText;
  }function qn(n, t, e) {
    var r = arguments.length;2 > r && (t = 0), 3 > r && (e = Date.now());var i = e + t,
        u = { c: n, t: i, n: null };return aa ? aa.n = u : oa = u, aa = u, la || (ca = clearTimeout(ca), la = 1, fa(Tn)), u;
  }function Tn() {
    var n = Rn(),
        t = Dn() - n;t > 24 ? (isFinite(t) && (clearTimeout(ca), ca = setTimeout(Tn, t)), la = 0) : (la = 1, fa(Tn));
  }function Rn() {
    for (var n = Date.now(), t = oa; t;) {
      n >= t.t && t.c(n - t.t) && (t.c = null), t = t.n;
    }return n;
  }function Dn() {
    for (var n, t = oa, e = 1 / 0; t;) {
      t.c ? (t.t < e && (e = t.t), t = (n = t).n) : t = n ? n.n = t.n : oa = t.n;
    }return aa = n, e;
  }function Pn(n, t) {
    return t - (n ? Math.ceil(Math.log(n) / Math.LN10) : 1);
  }function Un(n, t) {
    var e = Math.pow(10, 3 * xo(8 - t));return { scale: t > 8 ? function (n) {
        return n / e;
      } : function (n) {
        return n * e;
      }, symbol: n };
  }function jn(n) {
    var t = n.decimal,
        e = n.thousands,
        r = n.grouping,
        i = n.currency,
        u = r && e ? function (n, t) {
      for (var i = n.length, u = [], o = 0, a = r[0], l = 0; i > 0 && a > 0 && (l + a + 1 > t && (a = Math.max(1, t - l)), u.push(n.substring(i -= a, i + a)), !((l += a + 1) > t));) {
        a = r[o = (o + 1) % r.length];
      }return u.reverse().join(e);
    } : m;return function (n) {
      var e = ha.exec(n),
          r = e[1] || " ",
          o = e[2] || ">",
          a = e[3] || "-",
          l = e[4] || "",
          c = e[5],
          f = +e[6],
          s = e[7],
          h = e[8],
          p = e[9],
          g = 1,
          v = "",
          d = "",
          y = !1,
          m = !0;switch (h && (h = +h.substring(1)), (c || "0" === r && "=" === o) && (c = r = "0", o = "="), p) {case "n":
          s = !0, p = "g";break;case "%":
          g = 100, d = "%", p = "f";break;case "p":
          g = 100, d = "%", p = "r";break;case "b":case "o":case "x":case "X":
          "#" === l && (v = "0" + p.toLowerCase());case "c":
          m = !1;case "d":
          y = !0, h = 0;break;case "s":
          g = -1, p = "r";}"$" === l && (v = i[0], d = i[1]), "r" != p || h || (p = "g"), null != h && ("g" == p ? h = Math.max(1, Math.min(21, h)) : "e" != p && "f" != p || (h = Math.max(0, Math.min(20, h)))), p = pa.get(p) || Fn;var M = c && s;return function (n) {
        var e = d;if (y && n % 1) return "";var i = 0 > n || 0 === n && 0 > 1 / n ? (n = -n, "-") : "-" === a ? "" : a;if (0 > g) {
          var l = ao.formatPrefix(n, h);n = l.scale(n), e = l.symbol + d;
        } else n *= g;n = p(n, h);var x,
            b,
            _ = n.lastIndexOf(".");if (0 > _) {
          var w = m ? n.lastIndexOf("e") : -1;0 > w ? (x = n, b = "") : (x = n.substring(0, w), b = n.substring(w));
        } else x = n.substring(0, _), b = t + n.substring(_ + 1);!c && s && (x = u(x, 1 / 0));var S = v.length + x.length + b.length + (M ? 0 : i.length),
            k = f > S ? new Array(S = f - S + 1).join(r) : "";return M && (x = u(k + x, k.length ? f - b.length : 1 / 0)), i += v, n = x + b, ("<" === o ? i + n + k : ">" === o ? k + i + n : "^" === o ? k.substring(0, S >>= 1) + i + n + k.substring(S) : i + (M ? n : k + n)) + e;
      };
    };
  }function Fn(n) {
    return n + "";
  }function Hn() {
    this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]);
  }function On(n, t, e) {
    function r(t) {
      var e = n(t),
          r = u(e, 1);return r - t > t - e ? e : r;
    }function i(e) {
      return t(e = n(new va(e - 1)), 1), e;
    }function u(n, e) {
      return t(n = new va(+n), e), n;
    }function o(n, r, u) {
      var o = i(n),
          a = [];if (u > 1) for (; r > o;) {
        e(o) % u || a.push(new Date(+o)), t(o, 1);
      } else for (; r > o;) {
        a.push(new Date(+o)), t(o, 1);
      }return a;
    }function a(n, t, e) {
      try {
        va = Hn;var r = new Hn();return r._ = n, o(r, t, e);
      } finally {
        va = Date;
      }
    }n.floor = n, n.round = r, n.ceil = i, n.offset = u, n.range = o;var l = n.utc = In(n);return l.floor = l, l.round = In(r), l.ceil = In(i), l.offset = In(u), l.range = a, n;
  }function In(n) {
    return function (t, e) {
      try {
        va = Hn;var r = new Hn();return r._ = t, n(r, e)._;
      } finally {
        va = Date;
      }
    };
  }function Yn(n) {
    function t(n) {
      function t(t) {
        for (var e, i, u, o = [], a = -1, l = 0; ++a < r;) {
          37 === n.charCodeAt(a) && (o.push(n.slice(l, a)), null != (i = ya[e = n.charAt(++a)]) && (e = n.charAt(++a)), (u = A[e]) && (e = u(t, null == i ? "e" === e ? " " : "0" : i)), o.push(e), l = a + 1);
        }return o.push(n.slice(l, a)), o.join("");
      }var r = n.length;return t.parse = function (t) {
        var r = { y: 1900, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0, Z: null },
            i = e(r, n, t, 0);if (i != t.length) return null;"p" in r && (r.H = r.H % 12 + 12 * r.p);var u = null != r.Z && va !== Hn,
            o = new (u ? Hn : va)();return "j" in r ? o.setFullYear(r.y, 0, r.j) : "W" in r || "U" in r ? ("w" in r || (r.w = "W" in r ? 1 : 0), o.setFullYear(r.y, 0, 1), o.setFullYear(r.y, 0, "W" in r ? (r.w + 6) % 7 + 7 * r.W - (o.getDay() + 5) % 7 : r.w + 7 * r.U - (o.getDay() + 6) % 7)) : o.setFullYear(r.y, r.m, r.d), o.setHours(r.H + (r.Z / 100 | 0), r.M + r.Z % 100, r.S, r.L), u ? o._ : o;
      }, t.toString = function () {
        return n;
      }, t;
    }function e(n, t, e, r) {
      for (var i, u, o, a = 0, l = t.length, c = e.length; l > a;) {
        if (r >= c) return -1;if (i = t.charCodeAt(a++), 37 === i) {
          if (o = t.charAt(a++), u = C[o in ya ? t.charAt(a++) : o], !u || (r = u(n, e, r)) < 0) return -1;
        } else if (i != e.charCodeAt(r++)) return -1;
      }return r;
    }function r(n, t, e) {
      _.lastIndex = 0;var r = _.exec(t.slice(e));return r ? (n.w = w.get(r[0].toLowerCase()), e + r[0].length) : -1;
    }function i(n, t, e) {
      x.lastIndex = 0;var r = x.exec(t.slice(e));return r ? (n.w = b.get(r[0].toLowerCase()), e + r[0].length) : -1;
    }function u(n, t, e) {
      N.lastIndex = 0;var r = N.exec(t.slice(e));return r ? (n.m = E.get(r[0].toLowerCase()), e + r[0].length) : -1;
    }function o(n, t, e) {
      S.lastIndex = 0;var r = S.exec(t.slice(e));return r ? (n.m = k.get(r[0].toLowerCase()), e + r[0].length) : -1;
    }function a(n, t, r) {
      return e(n, A.c.toString(), t, r);
    }function l(n, t, r) {
      return e(n, A.x.toString(), t, r);
    }function c(n, t, r) {
      return e(n, A.X.toString(), t, r);
    }function f(n, t, e) {
      var r = M.get(t.slice(e, e += 2).toLowerCase());return null == r ? -1 : (n.p = r, e);
    }var s = n.dateTime,
        h = n.date,
        p = n.time,
        g = n.periods,
        v = n.days,
        d = n.shortDays,
        y = n.months,
        m = n.shortMonths;t.utc = function (n) {
      function e(n) {
        try {
          va = Hn;var t = new va();return t._ = n, r(t);
        } finally {
          va = Date;
        }
      }var r = t(n);return e.parse = function (n) {
        try {
          va = Hn;var t = r.parse(n);return t && t._;
        } finally {
          va = Date;
        }
      }, e.toString = r.toString, e;
    }, t.multi = t.utc.multi = ct;var M = ao.map(),
        x = Vn(v),
        b = Xn(v),
        _ = Vn(d),
        w = Xn(d),
        S = Vn(y),
        k = Xn(y),
        N = Vn(m),
        E = Xn(m);g.forEach(function (n, t) {
      M.set(n.toLowerCase(), t);
    });var A = { a: function a(n) {
        return d[n.getDay()];
      }, A: function A(n) {
        return v[n.getDay()];
      }, b: function b(n) {
        return m[n.getMonth()];
      }, B: function B(n) {
        return y[n.getMonth()];
      }, c: t(s), d: function d(n, t) {
        return Zn(n.getDate(), t, 2);
      }, e: function e(n, t) {
        return Zn(n.getDate(), t, 2);
      }, H: function H(n, t) {
        return Zn(n.getHours(), t, 2);
      }, I: function I(n, t) {
        return Zn(n.getHours() % 12 || 12, t, 2);
      }, j: function j(n, t) {
        return Zn(1 + ga.dayOfYear(n), t, 3);
      }, L: function L(n, t) {
        return Zn(n.getMilliseconds(), t, 3);
      }, m: function m(n, t) {
        return Zn(n.getMonth() + 1, t, 2);
      }, M: function M(n, t) {
        return Zn(n.getMinutes(), t, 2);
      }, p: function p(n) {
        return g[+(n.getHours() >= 12)];
      }, S: function S(n, t) {
        return Zn(n.getSeconds(), t, 2);
      }, U: function U(n, t) {
        return Zn(ga.sundayOfYear(n), t, 2);
      }, w: function w(n) {
        return n.getDay();
      }, W: function W(n, t) {
        return Zn(ga.mondayOfYear(n), t, 2);
      }, x: t(h), X: t(p), y: function y(n, t) {
        return Zn(n.getFullYear() % 100, t, 2);
      }, Y: function Y(n, t) {
        return Zn(n.getFullYear() % 1e4, t, 4);
      }, Z: at, "%": function _() {
        return "%";
      } },
        C = { a: r, A: i, b: u, B: o, c: a, d: tt, e: tt, H: rt, I: rt, j: et, L: ot, m: nt, M: it, p: f, S: ut, U: Bn, w: $n, W: Wn, x: l, X: c, y: Gn, Y: Jn, Z: Kn, "%": lt };return t;
  }function Zn(n, t, e) {
    var r = 0 > n ? "-" : "",
        i = (r ? -n : n) + "",
        u = i.length;return r + (e > u ? new Array(e - u + 1).join(t) + i : i);
  }function Vn(n) {
    return new RegExp("^(?:" + n.map(ao.requote).join("|") + ")", "i");
  }function Xn(n) {
    for (var t = new c(), e = -1, r = n.length; ++e < r;) {
      t.set(n[e].toLowerCase(), e);
    }return t;
  }function $n(n, t, e) {
    ma.lastIndex = 0;var r = ma.exec(t.slice(e, e + 1));return r ? (n.w = +r[0], e + r[0].length) : -1;
  }function Bn(n, t, e) {
    ma.lastIndex = 0;var r = ma.exec(t.slice(e));return r ? (n.U = +r[0], e + r[0].length) : -1;
  }function Wn(n, t, e) {
    ma.lastIndex = 0;var r = ma.exec(t.slice(e));return r ? (n.W = +r[0], e + r[0].length) : -1;
  }function Jn(n, t, e) {
    ma.lastIndex = 0;var r = ma.exec(t.slice(e, e + 4));return r ? (n.y = +r[0], e + r[0].length) : -1;
  }function Gn(n, t, e) {
    ma.lastIndex = 0;var r = ma.exec(t.slice(e, e + 2));return r ? (n.y = Qn(+r[0]), e + r[0].length) : -1;
  }function Kn(n, t, e) {
    return (/^[+-]\d{4}$/.test(t = t.slice(e, e + 5)) ? (n.Z = -t, e + 5) : -1
    );
  }function Qn(n) {
    return n + (n > 68 ? 1900 : 2e3);
  }function nt(n, t, e) {
    ma.lastIndex = 0;var r = ma.exec(t.slice(e, e + 2));return r ? (n.m = r[0] - 1, e + r[0].length) : -1;
  }function tt(n, t, e) {
    ma.lastIndex = 0;var r = ma.exec(t.slice(e, e + 2));return r ? (n.d = +r[0], e + r[0].length) : -1;
  }function et(n, t, e) {
    ma.lastIndex = 0;var r = ma.exec(t.slice(e, e + 3));return r ? (n.j = +r[0], e + r[0].length) : -1;
  }function rt(n, t, e) {
    ma.lastIndex = 0;var r = ma.exec(t.slice(e, e + 2));return r ? (n.H = +r[0], e + r[0].length) : -1;
  }function it(n, t, e) {
    ma.lastIndex = 0;var r = ma.exec(t.slice(e, e + 2));return r ? (n.M = +r[0], e + r[0].length) : -1;
  }function ut(n, t, e) {
    ma.lastIndex = 0;var r = ma.exec(t.slice(e, e + 2));return r ? (n.S = +r[0], e + r[0].length) : -1;
  }function ot(n, t, e) {
    ma.lastIndex = 0;var r = ma.exec(t.slice(e, e + 3));return r ? (n.L = +r[0], e + r[0].length) : -1;
  }function at(n) {
    var t = n.getTimezoneOffset(),
        e = t > 0 ? "-" : "+",
        r = xo(t) / 60 | 0,
        i = xo(t) % 60;return e + Zn(r, "0", 2) + Zn(i, "0", 2);
  }function lt(n, t, e) {
    Ma.lastIndex = 0;var r = Ma.exec(t.slice(e, e + 1));return r ? e + r[0].length : -1;
  }function ct(n) {
    for (var t = n.length, e = -1; ++e < t;) {
      n[e][0] = this(n[e][0]);
    }return function (t) {
      for (var e = 0, r = n[e]; !r[1](t);) {
        r = n[++e];
      }return r[0](t);
    };
  }function ft() {}function st(n, t, e) {
    var r = e.s = n + t,
        i = r - n,
        u = r - i;e.t = n - u + (t - i);
  }function ht(n, t) {
    n && wa.hasOwnProperty(n.type) && wa[n.type](n, t);
  }function pt(n, t, e) {
    var r,
        i = -1,
        u = n.length - e;for (t.lineStart(); ++i < u;) {
      r = n[i], t.point(r[0], r[1], r[2]);
    }t.lineEnd();
  }function gt(n, t) {
    var e = -1,
        r = n.length;for (t.polygonStart(); ++e < r;) {
      pt(n[e], t, 1);
    }t.polygonEnd();
  }function vt() {
    function n(n, t) {
      n *= Yo, t = t * Yo / 2 + Fo / 4;var e = n - r,
          o = e >= 0 ? 1 : -1,
          a = o * e,
          l = Math.cos(t),
          c = Math.sin(t),
          f = u * c,
          s = i * l + f * Math.cos(a),
          h = f * o * Math.sin(a);ka.add(Math.atan2(h, s)), r = n, i = l, u = c;
    }var t, e, r, i, u;Na.point = function (o, a) {
      Na.point = n, r = (t = o) * Yo, i = Math.cos(a = (e = a) * Yo / 2 + Fo / 4), u = Math.sin(a);
    }, Na.lineEnd = function () {
      n(t, e);
    };
  }function dt(n) {
    var t = n[0],
        e = n[1],
        r = Math.cos(e);return [r * Math.cos(t), r * Math.sin(t), Math.sin(e)];
  }function yt(n, t) {
    return n[0] * t[0] + n[1] * t[1] + n[2] * t[2];
  }function mt(n, t) {
    return [n[1] * t[2] - n[2] * t[1], n[2] * t[0] - n[0] * t[2], n[0] * t[1] - n[1] * t[0]];
  }function Mt(n, t) {
    n[0] += t[0], n[1] += t[1], n[2] += t[2];
  }function xt(n, t) {
    return [n[0] * t, n[1] * t, n[2] * t];
  }function bt(n) {
    var t = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);n[0] /= t, n[1] /= t, n[2] /= t;
  }function _t(n) {
    return [Math.atan2(n[1], n[0]), tn(n[2])];
  }function wt(n, t) {
    return xo(n[0] - t[0]) < Uo && xo(n[1] - t[1]) < Uo;
  }function St(n, t) {
    n *= Yo;var e = Math.cos(t *= Yo);kt(e * Math.cos(n), e * Math.sin(n), Math.sin(t));
  }function kt(n, t, e) {
    ++Ea, Ca += (n - Ca) / Ea, za += (t - za) / Ea, La += (e - La) / Ea;
  }function Nt() {
    function n(n, i) {
      n *= Yo;var u = Math.cos(i *= Yo),
          o = u * Math.cos(n),
          a = u * Math.sin(n),
          l = Math.sin(i),
          c = Math.atan2(Math.sqrt((c = e * l - r * a) * c + (c = r * o - t * l) * c + (c = t * a - e * o) * c), t * o + e * a + r * l);Aa += c, qa += c * (t + (t = o)), Ta += c * (e + (e = a)), Ra += c * (r + (r = l)), kt(t, e, r);
    }var t, e, r;ja.point = function (i, u) {
      i *= Yo;var o = Math.cos(u *= Yo);t = o * Math.cos(i), e = o * Math.sin(i), r = Math.sin(u), ja.point = n, kt(t, e, r);
    };
  }function Et() {
    ja.point = St;
  }function At() {
    function n(n, t) {
      n *= Yo;var e = Math.cos(t *= Yo),
          o = e * Math.cos(n),
          a = e * Math.sin(n),
          l = Math.sin(t),
          c = i * l - u * a,
          f = u * o - r * l,
          s = r * a - i * o,
          h = Math.sqrt(c * c + f * f + s * s),
          p = r * o + i * a + u * l,
          g = h && -nn(p) / h,
          v = Math.atan2(h, p);Da += g * c, Pa += g * f, Ua += g * s, Aa += v, qa += v * (r + (r = o)), Ta += v * (i + (i = a)), Ra += v * (u + (u = l)), kt(r, i, u);
    }var t, e, r, i, u;ja.point = function (o, a) {
      t = o, e = a, ja.point = n, o *= Yo;var l = Math.cos(a *= Yo);r = l * Math.cos(o), i = l * Math.sin(o), u = Math.sin(a), kt(r, i, u);
    }, ja.lineEnd = function () {
      n(t, e), ja.lineEnd = Et, ja.point = St;
    };
  }function Ct(n, t) {
    function e(e, r) {
      return e = n(e, r), t(e[0], e[1]);
    }return n.invert && t.invert && (e.invert = function (e, r) {
      return e = t.invert(e, r), e && n.invert(e[0], e[1]);
    }), e;
  }function zt() {
    return !0;
  }function Lt(n, t, e, r, i) {
    var u = [],
        o = [];if (n.forEach(function (n) {
      if (!((t = n.length - 1) <= 0)) {
        var t,
            e = n[0],
            r = n[t];if (wt(e, r)) {
          i.lineStart();for (var a = 0; t > a; ++a) {
            i.point((e = n[a])[0], e[1]);
          }return void i.lineEnd();
        }var l = new Tt(e, n, null, !0),
            c = new Tt(e, null, l, !1);l.o = c, u.push(l), o.push(c), l = new Tt(r, n, null, !1), c = new Tt(r, null, l, !0), l.o = c, u.push(l), o.push(c);
      }
    }), o.sort(t), qt(u), qt(o), u.length) {
      for (var a = 0, l = e, c = o.length; c > a; ++a) {
        o[a].e = l = !l;
      }for (var f, s, h = u[0];;) {
        for (var p = h, g = !0; p.v;) {
          if ((p = p.n) === h) return;
        }f = p.z, i.lineStart();do {
          if (p.v = p.o.v = !0, p.e) {
            if (g) for (var a = 0, c = f.length; c > a; ++a) {
              i.point((s = f[a])[0], s[1]);
            } else r(p.x, p.n.x, 1, i);p = p.n;
          } else {
            if (g) {
              f = p.p.z;for (var a = f.length - 1; a >= 0; --a) {
                i.point((s = f[a])[0], s[1]);
              }
            } else r(p.x, p.p.x, -1, i);p = p.p;
          }p = p.o, f = p.z, g = !g;
        } while (!p.v);i.lineEnd();
      }
    }
  }function qt(n) {
    if (t = n.length) {
      for (var t, e, r = 0, i = n[0]; ++r < t;) {
        i.n = e = n[r], e.p = i, i = e;
      }i.n = e = n[0], e.p = i;
    }
  }function Tt(n, t, e, r) {
    this.x = n, this.z = t, this.o = e, this.e = r, this.v = !1, this.n = this.p = null;
  }function Rt(n, t, e, r) {
    return function (i, u) {
      function o(t, e) {
        var r = i(t, e);n(t = r[0], e = r[1]) && u.point(t, e);
      }function a(n, t) {
        var e = i(n, t);d.point(e[0], e[1]);
      }function l() {
        m.point = a, d.lineStart();
      }function c() {
        m.point = o, d.lineEnd();
      }function f(n, t) {
        v.push([n, t]);var e = i(n, t);x.point(e[0], e[1]);
      }function s() {
        x.lineStart(), v = [];
      }function h() {
        f(v[0][0], v[0][1]), x.lineEnd();var n,
            t = x.clean(),
            e = M.buffer(),
            r = e.length;if (v.pop(), g.push(v), v = null, r) if (1 & t) {
          n = e[0];var i,
              r = n.length - 1,
              o = -1;if (r > 0) {
            for (b || (u.polygonStart(), b = !0), u.lineStart(); ++o < r;) {
              u.point((i = n[o])[0], i[1]);
            }u.lineEnd();
          }
        } else r > 1 && 2 & t && e.push(e.pop().concat(e.shift())), p.push(e.filter(Dt));
      }var p,
          g,
          v,
          d = t(u),
          y = i.invert(r[0], r[1]),
          m = { point: o, lineStart: l, lineEnd: c, polygonStart: function polygonStart() {
          m.point = f, m.lineStart = s, m.lineEnd = h, p = [], g = [];
        }, polygonEnd: function polygonEnd() {
          m.point = o, m.lineStart = l, m.lineEnd = c, p = ao.merge(p);var n = Ot(y, g);p.length ? (b || (u.polygonStart(), b = !0), Lt(p, Ut, n, e, u)) : n && (b || (u.polygonStart(), b = !0), u.lineStart(), e(null, null, 1, u), u.lineEnd()), b && (u.polygonEnd(), b = !1), p = g = null;
        }, sphere: function sphere() {
          u.polygonStart(), u.lineStart(), e(null, null, 1, u), u.lineEnd(), u.polygonEnd();
        } },
          M = Pt(),
          x = t(M),
          b = !1;return m;
    };
  }function Dt(n) {
    return n.length > 1;
  }function Pt() {
    var n,
        t = [];return { lineStart: function lineStart() {
        t.push(n = []);
      }, point: function point(t, e) {
        n.push([t, e]);
      }, lineEnd: b, buffer: function buffer() {
        var e = t;return t = [], n = null, e;
      }, rejoin: function rejoin() {
        t.length > 1 && t.push(t.pop().concat(t.shift()));
      } };
  }function Ut(n, t) {
    return ((n = n.x)[0] < 0 ? n[1] - Io - Uo : Io - n[1]) - ((t = t.x)[0] < 0 ? t[1] - Io - Uo : Io - t[1]);
  }function jt(n) {
    var t,
        e = NaN,
        r = NaN,
        i = NaN;return { lineStart: function lineStart() {
        n.lineStart(), t = 1;
      }, point: function point(u, o) {
        var a = u > 0 ? Fo : -Fo,
            l = xo(u - e);xo(l - Fo) < Uo ? (n.point(e, r = (r + o) / 2 > 0 ? Io : -Io), n.point(i, r), n.lineEnd(), n.lineStart(), n.point(a, r), n.point(u, r), t = 0) : i !== a && l >= Fo && (xo(e - i) < Uo && (e -= i * Uo), xo(u - a) < Uo && (u -= a * Uo), r = Ft(e, r, u, o), n.point(i, r), n.lineEnd(), n.lineStart(), n.point(a, r), t = 0), n.point(e = u, r = o), i = a;
      }, lineEnd: function lineEnd() {
        n.lineEnd(), e = r = NaN;
      }, clean: function clean() {
        return 2 - t;
      } };
  }function Ft(n, t, e, r) {
    var i,
        u,
        o = Math.sin(n - e);return xo(o) > Uo ? Math.atan((Math.sin(t) * (u = Math.cos(r)) * Math.sin(e) - Math.sin(r) * (i = Math.cos(t)) * Math.sin(n)) / (i * u * o)) : (t + r) / 2;
  }function Ht(n, t, e, r) {
    var i;if (null == n) i = e * Io, r.point(-Fo, i), r.point(0, i), r.point(Fo, i), r.point(Fo, 0), r.point(Fo, -i), r.point(0, -i), r.point(-Fo, -i), r.point(-Fo, 0), r.point(-Fo, i);else if (xo(n[0] - t[0]) > Uo) {
      var u = n[0] < t[0] ? Fo : -Fo;i = e * u / 2, r.point(-u, i), r.point(0, i), r.point(u, i);
    } else r.point(t[0], t[1]);
  }function Ot(n, t) {
    var e = n[0],
        r = n[1],
        i = [Math.sin(e), -Math.cos(e), 0],
        u = 0,
        o = 0;ka.reset();for (var a = 0, l = t.length; l > a; ++a) {
      var c = t[a],
          f = c.length;if (f) for (var s = c[0], h = s[0], p = s[1] / 2 + Fo / 4, g = Math.sin(p), v = Math.cos(p), d = 1;;) {
        d === f && (d = 0), n = c[d];var y = n[0],
            m = n[1] / 2 + Fo / 4,
            M = Math.sin(m),
            x = Math.cos(m),
            b = y - h,
            _ = b >= 0 ? 1 : -1,
            w = _ * b,
            S = w > Fo,
            k = g * M;if (ka.add(Math.atan2(k * _ * Math.sin(w), v * x + k * Math.cos(w))), u += S ? b + _ * Ho : b, S ^ h >= e ^ y >= e) {
          var N = mt(dt(s), dt(n));bt(N);var E = mt(i, N);bt(E);var A = (S ^ b >= 0 ? -1 : 1) * tn(E[2]);(r > A || r === A && (N[0] || N[1])) && (o += S ^ b >= 0 ? 1 : -1);
        }if (!d++) break;h = y, g = M, v = x, s = n;
      }
    }return (-Uo > u || Uo > u && -Uo > ka) ^ 1 & o;
  }function It(n) {
    function t(n, t) {
      return Math.cos(n) * Math.cos(t) > u;
    }function e(n) {
      var e, u, l, c, f;return { lineStart: function lineStart() {
          c = l = !1, f = 1;
        }, point: function point(s, h) {
          var p,
              g = [s, h],
              v = t(s, h),
              d = o ? v ? 0 : i(s, h) : v ? i(s + (0 > s ? Fo : -Fo), h) : 0;if (!e && (c = l = v) && n.lineStart(), v !== l && (p = r(e, g), (wt(e, p) || wt(g, p)) && (g[0] += Uo, g[1] += Uo, v = t(g[0], g[1]))), v !== l) f = 0, v ? (n.lineStart(), p = r(g, e), n.point(p[0], p[1])) : (p = r(e, g), n.point(p[0], p[1]), n.lineEnd()), e = p;else if (a && e && o ^ v) {
            var y;d & u || !(y = r(g, e, !0)) || (f = 0, o ? (n.lineStart(), n.point(y[0][0], y[0][1]), n.point(y[1][0], y[1][1]), n.lineEnd()) : (n.point(y[1][0], y[1][1]), n.lineEnd(), n.lineStart(), n.point(y[0][0], y[0][1])));
          }!v || e && wt(e, g) || n.point(g[0], g[1]), e = g, l = v, u = d;
        }, lineEnd: function lineEnd() {
          l && n.lineEnd(), e = null;
        }, clean: function clean() {
          return f | (c && l) << 1;
        } };
    }function r(n, t, e) {
      var r = dt(n),
          i = dt(t),
          o = [1, 0, 0],
          a = mt(r, i),
          l = yt(a, a),
          c = a[0],
          f = l - c * c;if (!f) return !e && n;var s = u * l / f,
          h = -u * c / f,
          p = mt(o, a),
          g = xt(o, s),
          v = xt(a, h);Mt(g, v);var d = p,
          y = yt(g, d),
          m = yt(d, d),
          M = y * y - m * (yt(g, g) - 1);if (!(0 > M)) {
        var x = Math.sqrt(M),
            b = xt(d, (-y - x) / m);if (Mt(b, g), b = _t(b), !e) return b;var _,
            w = n[0],
            S = t[0],
            k = n[1],
            N = t[1];w > S && (_ = w, w = S, S = _);var E = S - w,
            A = xo(E - Fo) < Uo,
            C = A || Uo > E;if (!A && k > N && (_ = k, k = N, N = _), C ? A ? k + N > 0 ^ b[1] < (xo(b[0] - w) < Uo ? k : N) : k <= b[1] && b[1] <= N : E > Fo ^ (w <= b[0] && b[0] <= S)) {
          var z = xt(d, (-y + x) / m);return Mt(z, g), [b, _t(z)];
        }
      }
    }function i(t, e) {
      var r = o ? n : Fo - n,
          i = 0;return -r > t ? i |= 1 : t > r && (i |= 2), -r > e ? i |= 4 : e > r && (i |= 8), i;
    }var u = Math.cos(n),
        o = u > 0,
        a = xo(u) > Uo,
        l = ve(n, 6 * Yo);return Rt(t, e, l, o ? [0, -n] : [-Fo, n - Fo]);
  }function Yt(n, t, e, r) {
    return function (i) {
      var u,
          o = i.a,
          a = i.b,
          l = o.x,
          c = o.y,
          f = a.x,
          s = a.y,
          h = 0,
          p = 1,
          g = f - l,
          v = s - c;if (u = n - l, g || !(u > 0)) {
        if (u /= g, 0 > g) {
          if (h > u) return;p > u && (p = u);
        } else if (g > 0) {
          if (u > p) return;u > h && (h = u);
        }if (u = e - l, g || !(0 > u)) {
          if (u /= g, 0 > g) {
            if (u > p) return;u > h && (h = u);
          } else if (g > 0) {
            if (h > u) return;p > u && (p = u);
          }if (u = t - c, v || !(u > 0)) {
            if (u /= v, 0 > v) {
              if (h > u) return;p > u && (p = u);
            } else if (v > 0) {
              if (u > p) return;u > h && (h = u);
            }if (u = r - c, v || !(0 > u)) {
              if (u /= v, 0 > v) {
                if (u > p) return;u > h && (h = u);
              } else if (v > 0) {
                if (h > u) return;p > u && (p = u);
              }return h > 0 && (i.a = { x: l + h * g, y: c + h * v }), 1 > p && (i.b = { x: l + p * g, y: c + p * v }), i;
            }
          }
        }
      }
    };
  }function Zt(n, t, e, r) {
    function i(r, i) {
      return xo(r[0] - n) < Uo ? i > 0 ? 0 : 3 : xo(r[0] - e) < Uo ? i > 0 ? 2 : 1 : xo(r[1] - t) < Uo ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2;
    }function u(n, t) {
      return o(n.x, t.x);
    }function o(n, t) {
      var e = i(n, 1),
          r = i(t, 1);return e !== r ? e - r : 0 === e ? t[1] - n[1] : 1 === e ? n[0] - t[0] : 2 === e ? n[1] - t[1] : t[0] - n[0];
    }return function (a) {
      function l(n) {
        for (var t = 0, e = d.length, r = n[1], i = 0; e > i; ++i) {
          for (var u, o = 1, a = d[i], l = a.length, c = a[0]; l > o; ++o) {
            u = a[o], c[1] <= r ? u[1] > r && Q(c, u, n) > 0 && ++t : u[1] <= r && Q(c, u, n) < 0 && --t, c = u;
          }
        }return 0 !== t;
      }function c(u, a, l, c) {
        var f = 0,
            s = 0;if (null == u || (f = i(u, l)) !== (s = i(a, l)) || o(u, a) < 0 ^ l > 0) {
          do {
            c.point(0 === f || 3 === f ? n : e, f > 1 ? r : t);
          } while ((f = (f + l + 4) % 4) !== s);
        } else c.point(a[0], a[1]);
      }function f(i, u) {
        return i >= n && e >= i && u >= t && r >= u;
      }function s(n, t) {
        f(n, t) && a.point(n, t);
      }function h() {
        C.point = g, d && d.push(y = []), S = !0, w = !1, b = _ = NaN;
      }function p() {
        v && (g(m, M), x && w && E.rejoin(), v.push(E.buffer())), C.point = s, w && a.lineEnd();
      }function g(n, t) {
        n = Math.max(-Ha, Math.min(Ha, n)), t = Math.max(-Ha, Math.min(Ha, t));var e = f(n, t);if (d && y.push([n, t]), S) m = n, M = t, x = e, S = !1, e && (a.lineStart(), a.point(n, t));else if (e && w) a.point(n, t);else {
          var r = { a: { x: b, y: _ }, b: { x: n, y: t } };A(r) ? (w || (a.lineStart(), a.point(r.a.x, r.a.y)), a.point(r.b.x, r.b.y), e || a.lineEnd(), k = !1) : e && (a.lineStart(), a.point(n, t), k = !1);
        }b = n, _ = t, w = e;
      }var v,
          d,
          y,
          m,
          M,
          x,
          b,
          _,
          w,
          S,
          k,
          N = a,
          E = Pt(),
          A = Yt(n, t, e, r),
          C = { point: s, lineStart: h, lineEnd: p, polygonStart: function polygonStart() {
          a = E, v = [], d = [], k = !0;
        }, polygonEnd: function polygonEnd() {
          a = N, v = ao.merge(v);var t = l([n, r]),
              e = k && t,
              i = v.length;(e || i) && (a.polygonStart(), e && (a.lineStart(), c(null, null, 1, a), a.lineEnd()), i && Lt(v, u, t, c, a), a.polygonEnd()), v = d = y = null;
        } };return C;
    };
  }function Vt(n) {
    var t = 0,
        e = Fo / 3,
        r = ae(n),
        i = r(t, e);return i.parallels = function (n) {
      return arguments.length ? r(t = n[0] * Fo / 180, e = n[1] * Fo / 180) : [t / Fo * 180, e / Fo * 180];
    }, i;
  }function Xt(n, t) {
    function e(n, t) {
      var e = Math.sqrt(u - 2 * i * Math.sin(t)) / i;return [e * Math.sin(n *= i), o - e * Math.cos(n)];
    }var r = Math.sin(n),
        i = (r + Math.sin(t)) / 2,
        u = 1 + r * (2 * i - r),
        o = Math.sqrt(u) / i;return e.invert = function (n, t) {
      var e = o - t;return [Math.atan2(n, e) / i, tn((u - (n * n + e * e) * i * i) / (2 * i))];
    }, e;
  }function $t() {
    function n(n, t) {
      Ia += i * n - r * t, r = n, i = t;
    }var t, e, r, i;$a.point = function (u, o) {
      $a.point = n, t = r = u, e = i = o;
    }, $a.lineEnd = function () {
      n(t, e);
    };
  }function Bt(n, t) {
    Ya > n && (Ya = n), n > Va && (Va = n), Za > t && (Za = t), t > Xa && (Xa = t);
  }function Wt() {
    function n(n, t) {
      o.push("M", n, ",", t, u);
    }function t(n, t) {
      o.push("M", n, ",", t), a.point = e;
    }function e(n, t) {
      o.push("L", n, ",", t);
    }function r() {
      a.point = n;
    }function i() {
      o.push("Z");
    }var u = Jt(4.5),
        o = [],
        a = { point: n, lineStart: function lineStart() {
        a.point = t;
      }, lineEnd: r, polygonStart: function polygonStart() {
        a.lineEnd = i;
      }, polygonEnd: function polygonEnd() {
        a.lineEnd = r, a.point = n;
      }, pointRadius: function pointRadius(n) {
        return u = Jt(n), a;
      }, result: function result() {
        if (o.length) {
          var n = o.join("");return o = [], n;
        }
      } };return a;
  }function Jt(n) {
    return "m0," + n + "a" + n + "," + n + " 0 1,1 0," + -2 * n + "a" + n + "," + n + " 0 1,1 0," + 2 * n + "z";
  }function Gt(n, t) {
    Ca += n, za += t, ++La;
  }function Kt() {
    function n(n, r) {
      var i = n - t,
          u = r - e,
          o = Math.sqrt(i * i + u * u);qa += o * (t + n) / 2, Ta += o * (e + r) / 2, Ra += o, Gt(t = n, e = r);
    }var t, e;Wa.point = function (r, i) {
      Wa.point = n, Gt(t = r, e = i);
    };
  }function Qt() {
    Wa.point = Gt;
  }function ne() {
    function n(n, t) {
      var e = n - r,
          u = t - i,
          o = Math.sqrt(e * e + u * u);qa += o * (r + n) / 2, Ta += o * (i + t) / 2, Ra += o, o = i * n - r * t, Da += o * (r + n), Pa += o * (i + t), Ua += 3 * o, Gt(r = n, i = t);
    }var t, e, r, i;Wa.point = function (u, o) {
      Wa.point = n, Gt(t = r = u, e = i = o);
    }, Wa.lineEnd = function () {
      n(t, e);
    };
  }function te(n) {
    function t(t, e) {
      n.moveTo(t + o, e), n.arc(t, e, o, 0, Ho);
    }function e(t, e) {
      n.moveTo(t, e), a.point = r;
    }function r(t, e) {
      n.lineTo(t, e);
    }function i() {
      a.point = t;
    }function u() {
      n.closePath();
    }var o = 4.5,
        a = { point: t, lineStart: function lineStart() {
        a.point = e;
      }, lineEnd: i, polygonStart: function polygonStart() {
        a.lineEnd = u;
      }, polygonEnd: function polygonEnd() {
        a.lineEnd = i, a.point = t;
      }, pointRadius: function pointRadius(n) {
        return o = n, a;
      }, result: b };return a;
  }function ee(n) {
    function t(n) {
      return (a ? r : e)(n);
    }function e(t) {
      return ue(t, function (e, r) {
        e = n(e, r), t.point(e[0], e[1]);
      });
    }function r(t) {
      function e(e, r) {
        e = n(e, r), t.point(e[0], e[1]);
      }function r() {
        M = NaN, S.point = u, t.lineStart();
      }function u(e, r) {
        var u = dt([e, r]),
            o = n(e, r);i(M, x, m, b, _, w, M = o[0], x = o[1], m = e, b = u[0], _ = u[1], w = u[2], a, t), t.point(M, x);
      }function o() {
        S.point = e, t.lineEnd();
      }function l() {
        r(), S.point = c, S.lineEnd = f;
      }function c(n, t) {
        u(s = n, h = t), p = M, g = x, v = b, d = _, y = w, S.point = u;
      }function f() {
        i(M, x, m, b, _, w, p, g, s, v, d, y, a, t), S.lineEnd = o, o();
      }var s,
          h,
          p,
          g,
          v,
          d,
          y,
          m,
          M,
          x,
          b,
          _,
          w,
          S = { point: e, lineStart: r, lineEnd: o, polygonStart: function polygonStart() {
          t.polygonStart(), S.lineStart = l;
        }, polygonEnd: function polygonEnd() {
          t.polygonEnd(), S.lineStart = r;
        } };return S;
    }function i(t, e, r, a, l, c, f, s, h, p, g, v, d, y) {
      var m = f - t,
          M = s - e,
          x = m * m + M * M;if (x > 4 * u && d--) {
        var b = a + p,
            _ = l + g,
            w = c + v,
            S = Math.sqrt(b * b + _ * _ + w * w),
            k = Math.asin(w /= S),
            N = xo(xo(w) - 1) < Uo || xo(r - h) < Uo ? (r + h) / 2 : Math.atan2(_, b),
            E = n(N, k),
            A = E[0],
            C = E[1],
            z = A - t,
            L = C - e,
            q = M * z - m * L;(q * q / x > u || xo((m * z + M * L) / x - .5) > .3 || o > a * p + l * g + c * v) && (i(t, e, r, a, l, c, A, C, N, b /= S, _ /= S, w, d, y), y.point(A, C), i(A, C, N, b, _, w, f, s, h, p, g, v, d, y));
      }
    }var u = .5,
        o = Math.cos(30 * Yo),
        a = 16;return t.precision = function (n) {
      return arguments.length ? (a = (u = n * n) > 0 && 16, t) : Math.sqrt(u);
    }, t;
  }function re(n) {
    var t = ee(function (t, e) {
      return n([t * Zo, e * Zo]);
    });return function (n) {
      return le(t(n));
    };
  }function ie(n) {
    this.stream = n;
  }function ue(n, t) {
    return { point: t, sphere: function sphere() {
        n.sphere();
      }, lineStart: function lineStart() {
        n.lineStart();
      }, lineEnd: function lineEnd() {
        n.lineEnd();
      }, polygonStart: function polygonStart() {
        n.polygonStart();
      }, polygonEnd: function polygonEnd() {
        n.polygonEnd();
      } };
  }function oe(n) {
    return ae(function () {
      return n;
    })();
  }function ae(n) {
    function t(n) {
      return n = a(n[0] * Yo, n[1] * Yo), [n[0] * h + l, c - n[1] * h];
    }function e(n) {
      return n = a.invert((n[0] - l) / h, (c - n[1]) / h), n && [n[0] * Zo, n[1] * Zo];
    }function r() {
      a = Ct(o = se(y, M, x), u);var n = u(v, d);return l = p - n[0] * h, c = g + n[1] * h, i();
    }function i() {
      return f && (f.valid = !1, f = null), t;
    }var u,
        o,
        a,
        l,
        c,
        f,
        s = ee(function (n, t) {
      return n = u(n, t), [n[0] * h + l, c - n[1] * h];
    }),
        h = 150,
        p = 480,
        g = 250,
        v = 0,
        d = 0,
        y = 0,
        M = 0,
        x = 0,
        b = Fa,
        _ = m,
        w = null,
        S = null;return t.stream = function (n) {
      return f && (f.valid = !1), f = le(b(o, s(_(n)))), f.valid = !0, f;
    }, t.clipAngle = function (n) {
      return arguments.length ? (b = null == n ? (w = n, Fa) : It((w = +n) * Yo), i()) : w;
    }, t.clipExtent = function (n) {
      return arguments.length ? (S = n, _ = n ? Zt(n[0][0], n[0][1], n[1][0], n[1][1]) : m, i()) : S;
    }, t.scale = function (n) {
      return arguments.length ? (h = +n, r()) : h;
    }, t.translate = function (n) {
      return arguments.length ? (p = +n[0], g = +n[1], r()) : [p, g];
    }, t.center = function (n) {
      return arguments.length ? (v = n[0] % 360 * Yo, d = n[1] % 360 * Yo, r()) : [v * Zo, d * Zo];
    }, t.rotate = function (n) {
      return arguments.length ? (y = n[0] % 360 * Yo, M = n[1] % 360 * Yo, x = n.length > 2 ? n[2] % 360 * Yo : 0, r()) : [y * Zo, M * Zo, x * Zo];
    }, ao.rebind(t, s, "precision"), function () {
      return u = n.apply(this, arguments), t.invert = u.invert && e, r();
    };
  }function le(n) {
    return ue(n, function (t, e) {
      n.point(t * Yo, e * Yo);
    });
  }function ce(n, t) {
    return [n, t];
  }function fe(n, t) {
    return [n > Fo ? n - Ho : -Fo > n ? n + Ho : n, t];
  }function se(n, t, e) {
    return n ? t || e ? Ct(pe(n), ge(t, e)) : pe(n) : t || e ? ge(t, e) : fe;
  }function he(n) {
    return function (t, e) {
      return t += n, [t > Fo ? t - Ho : -Fo > t ? t + Ho : t, e];
    };
  }function pe(n) {
    var t = he(n);return t.invert = he(-n), t;
  }function ge(n, t) {
    function e(n, t) {
      var e = Math.cos(t),
          a = Math.cos(n) * e,
          l = Math.sin(n) * e,
          c = Math.sin(t),
          f = c * r + a * i;return [Math.atan2(l * u - f * o, a * r - c * i), tn(f * u + l * o)];
    }var r = Math.cos(n),
        i = Math.sin(n),
        u = Math.cos(t),
        o = Math.sin(t);return e.invert = function (n, t) {
      var e = Math.cos(t),
          a = Math.cos(n) * e,
          l = Math.sin(n) * e,
          c = Math.sin(t),
          f = c * u - l * o;return [Math.atan2(l * u + c * o, a * r + f * i), tn(f * r - a * i)];
    }, e;
  }function ve(n, t) {
    var e = Math.cos(n),
        r = Math.sin(n);return function (i, u, o, a) {
      var l = o * t;null != i ? (i = de(e, i), u = de(e, u), (o > 0 ? u > i : i > u) && (i += o * Ho)) : (i = n + o * Ho, u = n - .5 * l);for (var c, f = i; o > 0 ? f > u : u > f; f -= l) {
        a.point((c = _t([e, -r * Math.cos(f), -r * Math.sin(f)]))[0], c[1]);
      }
    };
  }function de(n, t) {
    var e = dt(t);e[0] -= n, bt(e);var r = nn(-e[1]);return ((-e[2] < 0 ? -r : r) + 2 * Math.PI - Uo) % (2 * Math.PI);
  }function ye(n, t, e) {
    var r = ao.range(n, t - Uo, e).concat(t);return function (n) {
      return r.map(function (t) {
        return [n, t];
      });
    };
  }function me(n, t, e) {
    var r = ao.range(n, t - Uo, e).concat(t);return function (n) {
      return r.map(function (t) {
        return [t, n];
      });
    };
  }function Me(n) {
    return n.source;
  }function xe(n) {
    return n.target;
  }function be(n, t, e, r) {
    var i = Math.cos(t),
        u = Math.sin(t),
        o = Math.cos(r),
        a = Math.sin(r),
        l = i * Math.cos(n),
        c = i * Math.sin(n),
        f = o * Math.cos(e),
        s = o * Math.sin(e),
        h = 2 * Math.asin(Math.sqrt(on(r - t) + i * o * on(e - n))),
        p = 1 / Math.sin(h),
        g = h ? function (n) {
      var t = Math.sin(n *= h) * p,
          e = Math.sin(h - n) * p,
          r = e * l + t * f,
          i = e * c + t * s,
          o = e * u + t * a;return [Math.atan2(i, r) * Zo, Math.atan2(o, Math.sqrt(r * r + i * i)) * Zo];
    } : function () {
      return [n * Zo, t * Zo];
    };return g.distance = h, g;
  }function _e() {
    function n(n, i) {
      var u = Math.sin(i *= Yo),
          o = Math.cos(i),
          a = xo((n *= Yo) - t),
          l = Math.cos(a);Ja += Math.atan2(Math.sqrt((a = o * Math.sin(a)) * a + (a = r * u - e * o * l) * a), e * u + r * o * l), t = n, e = u, r = o;
    }var t, e, r;Ga.point = function (i, u) {
      t = i * Yo, e = Math.sin(u *= Yo), r = Math.cos(u), Ga.point = n;
    }, Ga.lineEnd = function () {
      Ga.point = Ga.lineEnd = b;
    };
  }function we(n, t) {
    function e(t, e) {
      var r = Math.cos(t),
          i = Math.cos(e),
          u = n(r * i);return [u * i * Math.sin(t), u * Math.sin(e)];
    }return e.invert = function (n, e) {
      var r = Math.sqrt(n * n + e * e),
          i = t(r),
          u = Math.sin(i),
          o = Math.cos(i);return [Math.atan2(n * u, r * o), Math.asin(r && e * u / r)];
    }, e;
  }function Se(n, t) {
    function e(n, t) {
      o > 0 ? -Io + Uo > t && (t = -Io + Uo) : t > Io - Uo && (t = Io - Uo);var e = o / Math.pow(i(t), u);return [e * Math.sin(u * n), o - e * Math.cos(u * n)];
    }var r = Math.cos(n),
        i = function i(n) {
      return Math.tan(Fo / 4 + n / 2);
    },
        u = n === t ? Math.sin(n) : Math.log(r / Math.cos(t)) / Math.log(i(t) / i(n)),
        o = r * Math.pow(i(n), u) / u;return u ? (e.invert = function (n, t) {
      var e = o - t,
          r = K(u) * Math.sqrt(n * n + e * e);return [Math.atan2(n, e) / u, 2 * Math.atan(Math.pow(o / r, 1 / u)) - Io];
    }, e) : Ne;
  }function ke(n, t) {
    function e(n, t) {
      var e = u - t;return [e * Math.sin(i * n), u - e * Math.cos(i * n)];
    }var r = Math.cos(n),
        i = n === t ? Math.sin(n) : (r - Math.cos(t)) / (t - n),
        u = r / i + n;return xo(i) < Uo ? ce : (e.invert = function (n, t) {
      var e = u - t;return [Math.atan2(n, e) / i, u - K(i) * Math.sqrt(n * n + e * e)];
    }, e);
  }function Ne(n, t) {
    return [n, Math.log(Math.tan(Fo / 4 + t / 2))];
  }function Ee(n) {
    var t,
        e = oe(n),
        r = e.scale,
        i = e.translate,
        u = e.clipExtent;return e.scale = function () {
      var n = r.apply(e, arguments);return n === e ? t ? e.clipExtent(null) : e : n;
    }, e.translate = function () {
      var n = i.apply(e, arguments);return n === e ? t ? e.clipExtent(null) : e : n;
    }, e.clipExtent = function (n) {
      var o = u.apply(e, arguments);if (o === e) {
        if (t = null == n) {
          var a = Fo * r(),
              l = i();u([[l[0] - a, l[1] - a], [l[0] + a, l[1] + a]]);
        }
      } else t && (o = null);return o;
    }, e.clipExtent(null);
  }function Ae(n, t) {
    return [Math.log(Math.tan(Fo / 4 + t / 2)), -n];
  }function Ce(n) {
    return n[0];
  }function ze(n) {
    return n[1];
  }function Le(n) {
    for (var t = n.length, e = [0, 1], r = 2, i = 2; t > i; i++) {
      for (; r > 1 && Q(n[e[r - 2]], n[e[r - 1]], n[i]) <= 0;) {
        --r;
      }e[r++] = i;
    }return e.slice(0, r);
  }function qe(n, t) {
    return n[0] - t[0] || n[1] - t[1];
  }function Te(n, t, e) {
    return (e[0] - t[0]) * (n[1] - t[1]) < (e[1] - t[1]) * (n[0] - t[0]);
  }function Re(n, t, e, r) {
    var i = n[0],
        u = e[0],
        o = t[0] - i,
        a = r[0] - u,
        l = n[1],
        c = e[1],
        f = t[1] - l,
        s = r[1] - c,
        h = (a * (l - c) - s * (i - u)) / (s * o - a * f);return [i + h * o, l + h * f];
  }function De(n) {
    var t = n[0],
        e = n[n.length - 1];return !(t[0] - e[0] || t[1] - e[1]);
  }function Pe() {
    rr(this), this.edge = this.site = this.circle = null;
  }function Ue(n) {
    var t = cl.pop() || new Pe();return t.site = n, t;
  }function je(n) {
    Be(n), ol.remove(n), cl.push(n), rr(n);
  }function Fe(n) {
    var t = n.circle,
        e = t.x,
        r = t.cy,
        i = { x: e, y: r },
        u = n.P,
        o = n.N,
        a = [n];je(n);for (var l = u; l.circle && xo(e - l.circle.x) < Uo && xo(r - l.circle.cy) < Uo;) {
      u = l.P, a.unshift(l), je(l), l = u;
    }a.unshift(l), Be(l);for (var c = o; c.circle && xo(e - c.circle.x) < Uo && xo(r - c.circle.cy) < Uo;) {
      o = c.N, a.push(c), je(c), c = o;
    }a.push(c), Be(c);var f,
        s = a.length;for (f = 1; s > f; ++f) {
      c = a[f], l = a[f - 1], nr(c.edge, l.site, c.site, i);
    }l = a[0], c = a[s - 1], c.edge = Ke(l.site, c.site, null, i), $e(l), $e(c);
  }function He(n) {
    for (var t, e, r, i, u = n.x, o = n.y, a = ol._; a;) {
      if (r = Oe(a, o) - u, r > Uo) a = a.L;else {
        if (i = u - Ie(a, o), !(i > Uo)) {
          r > -Uo ? (t = a.P, e = a) : i > -Uo ? (t = a, e = a.N) : t = e = a;break;
        }if (!a.R) {
          t = a;break;
        }a = a.R;
      }
    }var l = Ue(n);if (ol.insert(t, l), t || e) {
      if (t === e) return Be(t), e = Ue(t.site), ol.insert(l, e), l.edge = e.edge = Ke(t.site, l.site), $e(t), void $e(e);if (!e) return void (l.edge = Ke(t.site, l.site));Be(t), Be(e);var c = t.site,
          f = c.x,
          s = c.y,
          h = n.x - f,
          p = n.y - s,
          g = e.site,
          v = g.x - f,
          d = g.y - s,
          y = 2 * (h * d - p * v),
          m = h * h + p * p,
          M = v * v + d * d,
          x = { x: (d * m - p * M) / y + f, y: (h * M - v * m) / y + s };nr(e.edge, c, g, x), l.edge = Ke(c, n, null, x), e.edge = Ke(n, g, null, x), $e(t), $e(e);
    }
  }function Oe(n, t) {
    var e = n.site,
        r = e.x,
        i = e.y,
        u = i - t;if (!u) return r;var o = n.P;if (!o) return -(1 / 0);e = o.site;var a = e.x,
        l = e.y,
        c = l - t;if (!c) return a;var f = a - r,
        s = 1 / u - 1 / c,
        h = f / c;return s ? (-h + Math.sqrt(h * h - 2 * s * (f * f / (-2 * c) - l + c / 2 + i - u / 2))) / s + r : (r + a) / 2;
  }function Ie(n, t) {
    var e = n.N;if (e) return Oe(e, t);var r = n.site;return r.y === t ? r.x : 1 / 0;
  }function Ye(n) {
    this.site = n, this.edges = [];
  }function Ze(n) {
    for (var t, e, r, i, u, o, a, l, c, f, s = n[0][0], h = n[1][0], p = n[0][1], g = n[1][1], v = ul, d = v.length; d--;) {
      if (u = v[d], u && u.prepare()) for (a = u.edges, l = a.length, o = 0; l > o;) {
        f = a[o].end(), r = f.x, i = f.y, c = a[++o % l].start(), t = c.x, e = c.y, (xo(r - t) > Uo || xo(i - e) > Uo) && (a.splice(o, 0, new tr(Qe(u.site, f, xo(r - s) < Uo && g - i > Uo ? { x: s, y: xo(t - s) < Uo ? e : g } : xo(i - g) < Uo && h - r > Uo ? { x: xo(e - g) < Uo ? t : h, y: g } : xo(r - h) < Uo && i - p > Uo ? { x: h, y: xo(t - h) < Uo ? e : p } : xo(i - p) < Uo && r - s > Uo ? { x: xo(e - p) < Uo ? t : s, y: p } : null), u.site, null)), ++l);
      }
    }
  }function Ve(n, t) {
    return t.angle - n.angle;
  }function Xe() {
    rr(this), this.x = this.y = this.arc = this.site = this.cy = null;
  }function $e(n) {
    var t = n.P,
        e = n.N;if (t && e) {
      var r = t.site,
          i = n.site,
          u = e.site;if (r !== u) {
        var o = i.x,
            a = i.y,
            l = r.x - o,
            c = r.y - a,
            f = u.x - o,
            s = u.y - a,
            h = 2 * (l * s - c * f);if (!(h >= -jo)) {
          var p = l * l + c * c,
              g = f * f + s * s,
              v = (s * p - c * g) / h,
              d = (l * g - f * p) / h,
              s = d + a,
              y = fl.pop() || new Xe();y.arc = n, y.site = i, y.x = v + o, y.y = s + Math.sqrt(v * v + d * d), y.cy = s, n.circle = y;for (var m = null, M = ll._; M;) {
            if (y.y < M.y || y.y === M.y && y.x <= M.x) {
              if (!M.L) {
                m = M.P;break;
              }M = M.L;
            } else {
              if (!M.R) {
                m = M;break;
              }M = M.R;
            }
          }ll.insert(m, y), m || (al = y);
        }
      }
    }
  }function Be(n) {
    var t = n.circle;t && (t.P || (al = t.N), ll.remove(t), fl.push(t), rr(t), n.circle = null);
  }function We(n) {
    for (var t, e = il, r = Yt(n[0][0], n[0][1], n[1][0], n[1][1]), i = e.length; i--;) {
      t = e[i], (!Je(t, n) || !r(t) || xo(t.a.x - t.b.x) < Uo && xo(t.a.y - t.b.y) < Uo) && (t.a = t.b = null, e.splice(i, 1));
    }
  }function Je(n, t) {
    var e = n.b;if (e) return !0;var r,
        i,
        u = n.a,
        o = t[0][0],
        a = t[1][0],
        l = t[0][1],
        c = t[1][1],
        f = n.l,
        s = n.r,
        h = f.x,
        p = f.y,
        g = s.x,
        v = s.y,
        d = (h + g) / 2,
        y = (p + v) / 2;if (v === p) {
      if (o > d || d >= a) return;if (h > g) {
        if (u) {
          if (u.y >= c) return;
        } else u = { x: d, y: l };e = { x: d, y: c };
      } else {
        if (u) {
          if (u.y < l) return;
        } else u = { x: d, y: c };e = { x: d, y: l };
      }
    } else if (r = (h - g) / (v - p), i = y - r * d, -1 > r || r > 1) {
      if (h > g) {
        if (u) {
          if (u.y >= c) return;
        } else u = { x: (l - i) / r, y: l };e = { x: (c - i) / r, y: c };
      } else {
        if (u) {
          if (u.y < l) return;
        } else u = { x: (c - i) / r, y: c };e = { x: (l - i) / r, y: l };
      }
    } else if (v > p) {
      if (u) {
        if (u.x >= a) return;
      } else u = { x: o, y: r * o + i };e = { x: a, y: r * a + i };
    } else {
      if (u) {
        if (u.x < o) return;
      } else u = { x: a, y: r * a + i };e = { x: o, y: r * o + i };
    }return n.a = u, n.b = e, !0;
  }function Ge(n, t) {
    this.l = n, this.r = t, this.a = this.b = null;
  }function Ke(n, t, e, r) {
    var i = new Ge(n, t);return il.push(i), e && nr(i, n, t, e), r && nr(i, t, n, r), ul[n.i].edges.push(new tr(i, n, t)), ul[t.i].edges.push(new tr(i, t, n)), i;
  }function Qe(n, t, e) {
    var r = new Ge(n, null);return r.a = t, r.b = e, il.push(r), r;
  }function nr(n, t, e, r) {
    n.a || n.b ? n.l === e ? n.b = r : n.a = r : (n.a = r, n.l = t, n.r = e);
  }function tr(n, t, e) {
    var r = n.a,
        i = n.b;this.edge = n, this.site = t, this.angle = e ? Math.atan2(e.y - t.y, e.x - t.x) : n.l === t ? Math.atan2(i.x - r.x, r.y - i.y) : Math.atan2(r.x - i.x, i.y - r.y);
  }function er() {
    this._ = null;
  }function rr(n) {
    n.U = n.C = n.L = n.R = n.P = n.N = null;
  }function ir(n, t) {
    var e = t,
        r = t.R,
        i = e.U;i ? i.L === e ? i.L = r : i.R = r : n._ = r, r.U = i, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e;
  }function ur(n, t) {
    var e = t,
        r = t.L,
        i = e.U;i ? i.L === e ? i.L = r : i.R = r : n._ = r, r.U = i, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e;
  }function or(n) {
    for (; n.L;) {
      n = n.L;
    }return n;
  }function ar(n, t) {
    var e,
        r,
        i,
        u = n.sort(lr).pop();for (il = [], ul = new Array(n.length), ol = new er(), ll = new er();;) {
      if (i = al, u && (!i || u.y < i.y || u.y === i.y && u.x < i.x)) u.x === e && u.y === r || (ul[u.i] = new Ye(u), He(u), e = u.x, r = u.y), u = n.pop();else {
        if (!i) break;Fe(i.arc);
      }
    }t && (We(t), Ze(t));var o = { cells: ul, edges: il };return ol = ll = il = ul = null, o;
  }function lr(n, t) {
    return t.y - n.y || t.x - n.x;
  }function cr(n, t, e) {
    return (n.x - e.x) * (t.y - n.y) - (n.x - t.x) * (e.y - n.y);
  }function fr(n) {
    return n.x;
  }function sr(n) {
    return n.y;
  }function hr() {
    return { leaf: !0, nodes: [], point: null, x: null, y: null };
  }function pr(n, t, e, r, i, u) {
    if (!n(t, e, r, i, u)) {
      var o = .5 * (e + i),
          a = .5 * (r + u),
          l = t.nodes;l[0] && pr(n, l[0], e, r, o, a), l[1] && pr(n, l[1], o, r, i, a), l[2] && pr(n, l[2], e, a, o, u), l[3] && pr(n, l[3], o, a, i, u);
    }
  }function gr(n, t, e, r, i, u, o) {
    var a,
        l = 1 / 0;return function c(n, f, s, h, p) {
      if (!(f > u || s > o || r > h || i > p)) {
        if (g = n.point) {
          var g,
              v = t - n.x,
              d = e - n.y,
              y = v * v + d * d;if (l > y) {
            var m = Math.sqrt(l = y);r = t - m, i = e - m, u = t + m, o = e + m, a = g;
          }
        }for (var M = n.nodes, x = .5 * (f + h), b = .5 * (s + p), _ = t >= x, w = e >= b, S = w << 1 | _, k = S + 4; k > S; ++S) {
          if (n = M[3 & S]) switch (3 & S) {case 0:
              c(n, f, s, x, b);break;case 1:
              c(n, x, s, h, b);break;case 2:
              c(n, f, b, x, p);break;case 3:
              c(n, x, b, h, p);}
        }
      }
    }(n, r, i, u, o), a;
  }function vr(n, t) {
    n = ao.rgb(n), t = ao.rgb(t);var e = n.r,
        r = n.g,
        i = n.b,
        u = t.r - e,
        o = t.g - r,
        a = t.b - i;return function (n) {
      return "#" + bn(Math.round(e + u * n)) + bn(Math.round(r + o * n)) + bn(Math.round(i + a * n));
    };
  }function dr(n, t) {
    var e,
        r = {},
        i = {};for (e in n) {
      e in t ? r[e] = Mr(n[e], t[e]) : i[e] = n[e];
    }for (e in t) {
      e in n || (i[e] = t[e]);
    }return function (n) {
      for (e in r) {
        i[e] = r[e](n);
      }return i;
    };
  }function yr(n, t) {
    return n = +n, t = +t, function (e) {
      return n * (1 - e) + t * e;
    };
  }function mr(n, t) {
    var e,
        r,
        i,
        u = hl.lastIndex = pl.lastIndex = 0,
        o = -1,
        a = [],
        l = [];for (n += "", t += ""; (e = hl.exec(n)) && (r = pl.exec(t));) {
      (i = r.index) > u && (i = t.slice(u, i), a[o] ? a[o] += i : a[++o] = i), (e = e[0]) === (r = r[0]) ? a[o] ? a[o] += r : a[++o] = r : (a[++o] = null, l.push({ i: o, x: yr(e, r) })), u = pl.lastIndex;
    }return u < t.length && (i = t.slice(u), a[o] ? a[o] += i : a[++o] = i), a.length < 2 ? l[0] ? (t = l[0].x, function (n) {
      return t(n) + "";
    }) : function () {
      return t;
    } : (t = l.length, function (n) {
      for (var e, r = 0; t > r; ++r) {
        a[(e = l[r]).i] = e.x(n);
      }return a.join("");
    });
  }function Mr(n, t) {
    for (var e, r = ao.interpolators.length; --r >= 0 && !(e = ao.interpolators[r](n, t));) {}return e;
  }function xr(n, t) {
    var e,
        r = [],
        i = [],
        u = n.length,
        o = t.length,
        a = Math.min(n.length, t.length);for (e = 0; a > e; ++e) {
      r.push(Mr(n[e], t[e]));
    }for (; u > e; ++e) {
      i[e] = n[e];
    }for (; o > e; ++e) {
      i[e] = t[e];
    }return function (n) {
      for (e = 0; a > e; ++e) {
        i[e] = r[e](n);
      }return i;
    };
  }function br(n) {
    return function (t) {
      return 0 >= t ? 0 : t >= 1 ? 1 : n(t);
    };
  }function _r(n) {
    return function (t) {
      return 1 - n(1 - t);
    };
  }function wr(n) {
    return function (t) {
      return .5 * (.5 > t ? n(2 * t) : 2 - n(2 - 2 * t));
    };
  }function Sr(n) {
    return n * n;
  }function kr(n) {
    return n * n * n;
  }function Nr(n) {
    if (0 >= n) return 0;if (n >= 1) return 1;var t = n * n,
        e = t * n;return 4 * (.5 > n ? e : 3 * (n - t) + e - .75);
  }function Er(n) {
    return function (t) {
      return Math.pow(t, n);
    };
  }function Ar(n) {
    return 1 - Math.cos(n * Io);
  }function Cr(n) {
    return Math.pow(2, 10 * (n - 1));
  }function zr(n) {
    return 1 - Math.sqrt(1 - n * n);
  }function Lr(n, t) {
    var e;return arguments.length < 2 && (t = .45), arguments.length ? e = t / Ho * Math.asin(1 / n) : (n = 1, e = t / 4), function (r) {
      return 1 + n * Math.pow(2, -10 * r) * Math.sin((r - e) * Ho / t);
    };
  }function qr(n) {
    return n || (n = 1.70158), function (t) {
      return t * t * ((n + 1) * t - n);
    };
  }function Tr(n) {
    return 1 / 2.75 > n ? 7.5625 * n * n : 2 / 2.75 > n ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : 2.5 / 2.75 > n ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375;
  }function Rr(n, t) {
    n = ao.hcl(n), t = ao.hcl(t);var e = n.h,
        r = n.c,
        i = n.l,
        u = t.h - e,
        o = t.c - r,
        a = t.l - i;return isNaN(o) && (o = 0, r = isNaN(r) ? t.c : r), isNaN(u) ? (u = 0, e = isNaN(e) ? t.h : e) : u > 180 ? u -= 360 : -180 > u && (u += 360), function (n) {
      return sn(e + u * n, r + o * n, i + a * n) + "";
    };
  }function Dr(n, t) {
    n = ao.hsl(n), t = ao.hsl(t);var e = n.h,
        r = n.s,
        i = n.l,
        u = t.h - e,
        o = t.s - r,
        a = t.l - i;return isNaN(o) && (o = 0, r = isNaN(r) ? t.s : r), isNaN(u) ? (u = 0, e = isNaN(e) ? t.h : e) : u > 180 ? u -= 360 : -180 > u && (u += 360), function (n) {
      return cn(e + u * n, r + o * n, i + a * n) + "";
    };
  }function Pr(n, t) {
    n = ao.lab(n), t = ao.lab(t);var e = n.l,
        r = n.a,
        i = n.b,
        u = t.l - e,
        o = t.a - r,
        a = t.b - i;return function (n) {
      return pn(e + u * n, r + o * n, i + a * n) + "";
    };
  }function Ur(n, t) {
    return t -= n, function (e) {
      return Math.round(n + t * e);
    };
  }function jr(n) {
    var t = [n.a, n.b],
        e = [n.c, n.d],
        r = Hr(t),
        i = Fr(t, e),
        u = Hr(Or(e, t, -i)) || 0;t[0] * e[1] < e[0] * t[1] && (t[0] *= -1, t[1] *= -1, r *= -1, i *= -1), this.rotate = (r ? Math.atan2(t[1], t[0]) : Math.atan2(-e[0], e[1])) * Zo, this.translate = [n.e, n.f], this.scale = [r, u], this.skew = u ? Math.atan2(i, u) * Zo : 0;
  }function Fr(n, t) {
    return n[0] * t[0] + n[1] * t[1];
  }function Hr(n) {
    var t = Math.sqrt(Fr(n, n));return t && (n[0] /= t, n[1] /= t), t;
  }function Or(n, t, e) {
    return n[0] += e * t[0], n[1] += e * t[1], n;
  }function Ir(n) {
    return n.length ? n.pop() + "," : "";
  }function Yr(n, t, e, r) {
    if (n[0] !== t[0] || n[1] !== t[1]) {
      var i = e.push("translate(", null, ",", null, ")");r.push({ i: i - 4, x: yr(n[0], t[0]) }, { i: i - 2, x: yr(n[1], t[1]) });
    } else (t[0] || t[1]) && e.push("translate(" + t + ")");
  }function Zr(n, t, e, r) {
    n !== t ? (n - t > 180 ? t += 360 : t - n > 180 && (n += 360), r.push({ i: e.push(Ir(e) + "rotate(", null, ")") - 2, x: yr(n, t) })) : t && e.push(Ir(e) + "rotate(" + t + ")");
  }function Vr(n, t, e, r) {
    n !== t ? r.push({ i: e.push(Ir(e) + "skewX(", null, ")") - 2, x: yr(n, t) }) : t && e.push(Ir(e) + "skewX(" + t + ")");
  }function Xr(n, t, e, r) {
    if (n[0] !== t[0] || n[1] !== t[1]) {
      var i = e.push(Ir(e) + "scale(", null, ",", null, ")");r.push({ i: i - 4, x: yr(n[0], t[0]) }, { i: i - 2, x: yr(n[1], t[1]) });
    } else 1 === t[0] && 1 === t[1] || e.push(Ir(e) + "scale(" + t + ")");
  }function $r(n, t) {
    var e = [],
        r = [];return n = ao.transform(n), t = ao.transform(t), Yr(n.translate, t.translate, e, r), Zr(n.rotate, t.rotate, e, r), Vr(n.skew, t.skew, e, r), Xr(n.scale, t.scale, e, r), n = t = null, function (n) {
      for (var t, i = -1, u = r.length; ++i < u;) {
        e[(t = r[i]).i] = t.x(n);
      }return e.join("");
    };
  }function Br(n, t) {
    return t = (t -= n = +n) || 1 / t, function (e) {
      return (e - n) / t;
    };
  }function Wr(n, t) {
    return t = (t -= n = +n) || 1 / t, function (e) {
      return Math.max(0, Math.min(1, (e - n) / t));
    };
  }function Jr(n) {
    for (var t = n.source, e = n.target, r = Kr(t, e), i = [t]; t !== r;) {
      t = t.parent, i.push(t);
    }for (var u = i.length; e !== r;) {
      i.splice(u, 0, e), e = e.parent;
    }return i;
  }function Gr(n) {
    for (var t = [], e = n.parent; null != e;) {
      t.push(n), n = e, e = e.parent;
    }return t.push(n), t;
  }function Kr(n, t) {
    if (n === t) return n;for (var e = Gr(n), r = Gr(t), i = e.pop(), u = r.pop(), o = null; i === u;) {
      o = i, i = e.pop(), u = r.pop();
    }return o;
  }function Qr(n) {
    n.fixed |= 2;
  }function ni(n) {
    n.fixed &= -7;
  }function ti(n) {
    n.fixed |= 4, n.px = n.x, n.py = n.y;
  }function ei(n) {
    n.fixed &= -5;
  }function ri(n, t, e) {
    var r = 0,
        i = 0;if (n.charge = 0, !n.leaf) for (var u, o = n.nodes, a = o.length, l = -1; ++l < a;) {
      u = o[l], null != u && (ri(u, t, e), n.charge += u.charge, r += u.charge * u.cx, i += u.charge * u.cy);
    }if (n.point) {
      n.leaf || (n.point.x += Math.random() - .5, n.point.y += Math.random() - .5);var c = t * e[n.point.index];n.charge += n.pointCharge = c, r += c * n.point.x, i += c * n.point.y;
    }n.cx = r / n.charge, n.cy = i / n.charge;
  }function ii(n, t) {
    return ao.rebind(n, t, "sort", "children", "value"), n.nodes = n, n.links = fi, n;
  }function ui(n, t) {
    for (var e = [n]; null != (n = e.pop());) {
      if (t(n), (i = n.children) && (r = i.length)) for (var r, i; --r >= 0;) {
        e.push(i[r]);
      }
    }
  }function oi(n, t) {
    for (var e = [n], r = []; null != (n = e.pop());) {
      if (r.push(n), (u = n.children) && (i = u.length)) for (var i, u, o = -1; ++o < i;) {
        e.push(u[o]);
      }
    }for (; null != (n = r.pop());) {
      t(n);
    }
  }function ai(n) {
    return n.children;
  }function li(n) {
    return n.value;
  }function ci(n, t) {
    return t.value - n.value;
  }function fi(n) {
    return ao.merge(n.map(function (n) {
      return (n.children || []).map(function (t) {
        return { source: n, target: t };
      });
    }));
  }function si(n) {
    return n.x;
  }function hi(n) {
    return n.y;
  }function pi(n, t, e) {
    n.y0 = t, n.y = e;
  }function gi(n) {
    return ao.range(n.length);
  }function vi(n) {
    for (var t = -1, e = n[0].length, r = []; ++t < e;) {
      r[t] = 0;
    }return r;
  }function di(n) {
    for (var t, e = 1, r = 0, i = n[0][1], u = n.length; u > e; ++e) {
      (t = n[e][1]) > i && (r = e, i = t);
    }return r;
  }function yi(n) {
    return n.reduce(mi, 0);
  }function mi(n, t) {
    return n + t[1];
  }function Mi(n, t) {
    return xi(n, Math.ceil(Math.log(t.length) / Math.LN2 + 1));
  }function xi(n, t) {
    for (var e = -1, r = +n[0], i = (n[1] - r) / t, u = []; ++e <= t;) {
      u[e] = i * e + r;
    }return u;
  }function bi(n) {
    return [ao.min(n), ao.max(n)];
  }function _i(n, t) {
    return n.value - t.value;
  }function wi(n, t) {
    var e = n._pack_next;n._pack_next = t, t._pack_prev = n, t._pack_next = e, e._pack_prev = t;
  }function Si(n, t) {
    n._pack_next = t, t._pack_prev = n;
  }function ki(n, t) {
    var e = t.x - n.x,
        r = t.y - n.y,
        i = n.r + t.r;return .999 * i * i > e * e + r * r;
  }function Ni(n) {
    function t(n) {
      f = Math.min(n.x - n.r, f), s = Math.max(n.x + n.r, s), h = Math.min(n.y - n.r, h), p = Math.max(n.y + n.r, p);
    }if ((e = n.children) && (c = e.length)) {
      var e,
          r,
          i,
          u,
          o,
          a,
          l,
          c,
          f = 1 / 0,
          s = -(1 / 0),
          h = 1 / 0,
          p = -(1 / 0);if (e.forEach(Ei), r = e[0], r.x = -r.r, r.y = 0, t(r), c > 1 && (i = e[1], i.x = i.r, i.y = 0, t(i), c > 2)) for (u = e[2], zi(r, i, u), t(u), wi(r, u), r._pack_prev = u, wi(u, i), i = r._pack_next, o = 3; c > o; o++) {
        zi(r, i, u = e[o]);var g = 0,
            v = 1,
            d = 1;for (a = i._pack_next; a !== i; a = a._pack_next, v++) {
          if (ki(a, u)) {
            g = 1;break;
          }
        }if (1 == g) for (l = r._pack_prev; l !== a._pack_prev && !ki(l, u); l = l._pack_prev, d++) {}g ? (d > v || v == d && i.r < r.r ? Si(r, i = a) : Si(r = l, i), o--) : (wi(r, u), i = u, t(u));
      }var y = (f + s) / 2,
          m = (h + p) / 2,
          M = 0;for (o = 0; c > o; o++) {
        u = e[o], u.x -= y, u.y -= m, M = Math.max(M, u.r + Math.sqrt(u.x * u.x + u.y * u.y));
      }n.r = M, e.forEach(Ai);
    }
  }function Ei(n) {
    n._pack_next = n._pack_prev = n;
  }function Ai(n) {
    delete n._pack_next, delete n._pack_prev;
  }function Ci(n, t, e, r) {
    var i = n.children;if (n.x = t += r * n.x, n.y = e += r * n.y, n.r *= r, i) for (var u = -1, o = i.length; ++u < o;) {
      Ci(i[u], t, e, r);
    }
  }function zi(n, t, e) {
    var r = n.r + e.r,
        i = t.x - n.x,
        u = t.y - n.y;if (r && (i || u)) {
      var o = t.r + e.r,
          a = i * i + u * u;o *= o, r *= r;var l = .5 + (r - o) / (2 * a),
          c = Math.sqrt(Math.max(0, 2 * o * (r + a) - (r -= a) * r - o * o)) / (2 * a);e.x = n.x + l * i + c * u, e.y = n.y + l * u - c * i;
    } else e.x = n.x + r, e.y = n.y;
  }function Li(n, t) {
    return n.parent == t.parent ? 1 : 2;
  }function qi(n) {
    var t = n.children;return t.length ? t[0] : n.t;
  }function Ti(n) {
    var t,
        e = n.children;return (t = e.length) ? e[t - 1] : n.t;
  }function Ri(n, t, e) {
    var r = e / (t.i - n.i);t.c -= r, t.s += e, n.c += r, t.z += e, t.m += e;
  }function Di(n) {
    for (var t, e = 0, r = 0, i = n.children, u = i.length; --u >= 0;) {
      t = i[u], t.z += e, t.m += e, e += t.s + (r += t.c);
    }
  }function Pi(n, t, e) {
    return n.a.parent === t.parent ? n.a : e;
  }function Ui(n) {
    return 1 + ao.max(n, function (n) {
      return n.y;
    });
  }function ji(n) {
    return n.reduce(function (n, t) {
      return n + t.x;
    }, 0) / n.length;
  }function Fi(n) {
    var t = n.children;return t && t.length ? Fi(t[0]) : n;
  }function Hi(n) {
    var t,
        e = n.children;return e && (t = e.length) ? Hi(e[t - 1]) : n;
  }function Oi(n) {
    return { x: n.x, y: n.y, dx: n.dx, dy: n.dy };
  }function Ii(n, t) {
    var e = n.x + t[3],
        r = n.y + t[0],
        i = n.dx - t[1] - t[3],
        u = n.dy - t[0] - t[2];return 0 > i && (e += i / 2, i = 0), 0 > u && (r += u / 2, u = 0), { x: e, y: r, dx: i, dy: u };
  }function Yi(n) {
    var t = n[0],
        e = n[n.length - 1];return e > t ? [t, e] : [e, t];
  }function Zi(n) {
    return n.rangeExtent ? n.rangeExtent() : Yi(n.range());
  }function Vi(n, t, e, r) {
    var i = e(n[0], n[1]),
        u = r(t[0], t[1]);return function (n) {
      return u(i(n));
    };
  }function Xi(n, t) {
    var e,
        r = 0,
        i = n.length - 1,
        u = n[r],
        o = n[i];return u > o && (e = r, r = i, i = e, e = u, u = o, o = e), n[r] = t.floor(u), n[i] = t.ceil(o), n;
  }function $i(n) {
    return n ? { floor: function floor(t) {
        return Math.floor(t / n) * n;
      }, ceil: function ceil(t) {
        return Math.ceil(t / n) * n;
      } } : Sl;
  }function Bi(n, t, e, r) {
    var i = [],
        u = [],
        o = 0,
        a = Math.min(n.length, t.length) - 1;for (n[a] < n[0] && (n = n.slice().reverse(), t = t.slice().reverse()); ++o <= a;) {
      i.push(e(n[o - 1], n[o])), u.push(r(t[o - 1], t[o]));
    }return function (t) {
      var e = ao.bisect(n, t, 1, a) - 1;return u[e](i[e](t));
    };
  }function Wi(n, t, e, r) {
    function i() {
      var i = Math.min(n.length, t.length) > 2 ? Bi : Vi,
          l = r ? Wr : Br;return o = i(n, t, l, e), a = i(t, n, l, Mr), u;
    }function u(n) {
      return o(n);
    }var o, a;return u.invert = function (n) {
      return a(n);
    }, u.domain = function (t) {
      return arguments.length ? (n = t.map(Number), i()) : n;
    }, u.range = function (n) {
      return arguments.length ? (t = n, i()) : t;
    }, u.rangeRound = function (n) {
      return u.range(n).interpolate(Ur);
    }, u.clamp = function (n) {
      return arguments.length ? (r = n, i()) : r;
    }, u.interpolate = function (n) {
      return arguments.length ? (e = n, i()) : e;
    }, u.ticks = function (t) {
      return Qi(n, t);
    }, u.tickFormat = function (t, e) {
      return nu(n, t, e);
    }, u.nice = function (t) {
      return Gi(n, t), i();
    }, u.copy = function () {
      return Wi(n, t, e, r);
    }, i();
  }function Ji(n, t) {
    return ao.rebind(n, t, "range", "rangeRound", "interpolate", "clamp");
  }function Gi(n, t) {
    return Xi(n, $i(Ki(n, t)[2])), Xi(n, $i(Ki(n, t)[2])), n;
  }function Ki(n, t) {
    null == t && (t = 10);var e = Yi(n),
        r = e[1] - e[0],
        i = Math.pow(10, Math.floor(Math.log(r / t) / Math.LN10)),
        u = t / r * i;return .15 >= u ? i *= 10 : .35 >= u ? i *= 5 : .75 >= u && (i *= 2), e[0] = Math.ceil(e[0] / i) * i, e[1] = Math.floor(e[1] / i) * i + .5 * i, e[2] = i, e;
  }function Qi(n, t) {
    return ao.range.apply(ao, Ki(n, t));
  }function nu(n, t, e) {
    var r = Ki(n, t);if (e) {
      var i = ha.exec(e);if (i.shift(), "s" === i[8]) {
        var u = ao.formatPrefix(Math.max(xo(r[0]), xo(r[1])));return i[7] || (i[7] = "." + tu(u.scale(r[2]))), i[8] = "f", e = ao.format(i.join("")), function (n) {
          return e(u.scale(n)) + u.symbol;
        };
      }i[7] || (i[7] = "." + eu(i[8], r)), e = i.join("");
    } else e = ",." + tu(r[2]) + "f";return ao.format(e);
  }function tu(n) {
    return -Math.floor(Math.log(n) / Math.LN10 + .01);
  }function eu(n, t) {
    var e = tu(t[2]);return n in kl ? Math.abs(e - tu(Math.max(xo(t[0]), xo(t[1])))) + +("e" !== n) : e - 2 * ("%" === n);
  }function ru(n, t, e, r) {
    function i(n) {
      return (e ? Math.log(0 > n ? 0 : n) : -Math.log(n > 0 ? 0 : -n)) / Math.log(t);
    }function u(n) {
      return e ? Math.pow(t, n) : -Math.pow(t, -n);
    }function o(t) {
      return n(i(t));
    }return o.invert = function (t) {
      return u(n.invert(t));
    }, o.domain = function (t) {
      return arguments.length ? (e = t[0] >= 0, n.domain((r = t.map(Number)).map(i)), o) : r;
    }, o.base = function (e) {
      return arguments.length ? (t = +e, n.domain(r.map(i)), o) : t;
    }, o.nice = function () {
      var t = Xi(r.map(i), e ? Math : El);return n.domain(t), r = t.map(u), o;
    }, o.ticks = function () {
      var n = Yi(r),
          o = [],
          a = n[0],
          l = n[1],
          c = Math.floor(i(a)),
          f = Math.ceil(i(l)),
          s = t % 1 ? 2 : t;if (isFinite(f - c)) {
        if (e) {
          for (; f > c; c++) {
            for (var h = 1; s > h; h++) {
              o.push(u(c) * h);
            }
          }o.push(u(c));
        } else for (o.push(u(c)); c++ < f;) {
          for (var h = s - 1; h > 0; h--) {
            o.push(u(c) * h);
          }
        }for (c = 0; o[c] < a; c++) {}for (f = o.length; o[f - 1] > l; f--) {}o = o.slice(c, f);
      }return o;
    }, o.tickFormat = function (n, e) {
      if (!arguments.length) return Nl;arguments.length < 2 ? e = Nl : "function" != typeof e && (e = ao.format(e));var r = Math.max(1, t * n / o.ticks().length);return function (n) {
        var o = n / u(Math.round(i(n)));return t - .5 > o * t && (o *= t), r >= o ? e(n) : "";
      };
    }, o.copy = function () {
      return ru(n.copy(), t, e, r);
    }, Ji(o, n);
  }function iu(n, t, e) {
    function r(t) {
      return n(i(t));
    }var i = uu(t),
        u = uu(1 / t);return r.invert = function (t) {
      return u(n.invert(t));
    }, r.domain = function (t) {
      return arguments.length ? (n.domain((e = t.map(Number)).map(i)), r) : e;
    }, r.ticks = function (n) {
      return Qi(e, n);
    }, r.tickFormat = function (n, t) {
      return nu(e, n, t);
    }, r.nice = function (n) {
      return r.domain(Gi(e, n));
    }, r.exponent = function (o) {
      return arguments.length ? (i = uu(t = o), u = uu(1 / t), n.domain(e.map(i)), r) : t;
    }, r.copy = function () {
      return iu(n.copy(), t, e);
    }, Ji(r, n);
  }function uu(n) {
    return function (t) {
      return 0 > t ? -Math.pow(-t, n) : Math.pow(t, n);
    };
  }function ou(n, t) {
    function e(e) {
      return u[((i.get(e) || ("range" === t.t ? i.set(e, n.push(e)) : NaN)) - 1) % u.length];
    }function r(t, e) {
      return ao.range(n.length).map(function (n) {
        return t + e * n;
      });
    }var i, u, o;return e.domain = function (r) {
      if (!arguments.length) return n;n = [], i = new c();for (var u, o = -1, a = r.length; ++o < a;) {
        i.has(u = r[o]) || i.set(u, n.push(u));
      }return e[t.t].apply(e, t.a);
    }, e.range = function (n) {
      return arguments.length ? (u = n, o = 0, t = { t: "range", a: arguments }, e) : u;
    }, e.rangePoints = function (i, a) {
      arguments.length < 2 && (a = 0);var l = i[0],
          c = i[1],
          f = n.length < 2 ? (l = (l + c) / 2, 0) : (c - l) / (n.length - 1 + a);return u = r(l + f * a / 2, f), o = 0, t = { t: "rangePoints", a: arguments }, e;
    }, e.rangeRoundPoints = function (i, a) {
      arguments.length < 2 && (a = 0);var l = i[0],
          c = i[1],
          f = n.length < 2 ? (l = c = Math.round((l + c) / 2), 0) : (c - l) / (n.length - 1 + a) | 0;return u = r(l + Math.round(f * a / 2 + (c - l - (n.length - 1 + a) * f) / 2), f), o = 0, t = { t: "rangeRoundPoints", a: arguments }, e;
    }, e.rangeBands = function (i, a, l) {
      arguments.length < 2 && (a = 0), arguments.length < 3 && (l = a);var c = i[1] < i[0],
          f = i[c - 0],
          s = i[1 - c],
          h = (s - f) / (n.length - a + 2 * l);return u = r(f + h * l, h), c && u.reverse(), o = h * (1 - a), t = { t: "rangeBands", a: arguments }, e;
    }, e.rangeRoundBands = function (i, a, l) {
      arguments.length < 2 && (a = 0), arguments.length < 3 && (l = a);var c = i[1] < i[0],
          f = i[c - 0],
          s = i[1 - c],
          h = Math.floor((s - f) / (n.length - a + 2 * l));return u = r(f + Math.round((s - f - (n.length - a) * h) / 2), h), c && u.reverse(), o = Math.round(h * (1 - a)), t = { t: "rangeRoundBands", a: arguments }, e;
    }, e.rangeBand = function () {
      return o;
    }, e.rangeExtent = function () {
      return Yi(t.a[0]);
    }, e.copy = function () {
      return ou(n, t);
    }, e.domain(n);
  }function au(n, t) {
    function u() {
      var e = 0,
          r = t.length;for (a = []; ++e < r;) {
        a[e - 1] = ao.quantile(n, e / r);
      }return o;
    }function o(n) {
      return isNaN(n = +n) ? void 0 : t[ao.bisect(a, n)];
    }var a;return o.domain = function (t) {
      return arguments.length ? (n = t.map(r).filter(i).sort(e), u()) : n;
    }, o.range = function (n) {
      return arguments.length ? (t = n, u()) : t;
    }, o.quantiles = function () {
      return a;
    }, o.invertExtent = function (e) {
      return e = t.indexOf(e), 0 > e ? [NaN, NaN] : [e > 0 ? a[e - 1] : n[0], e < a.length ? a[e] : n[n.length - 1]];
    }, o.copy = function () {
      return au(n, t);
    }, u();
  }function lu(n, t, e) {
    function r(t) {
      return e[Math.max(0, Math.min(o, Math.floor(u * (t - n))))];
    }function i() {
      return u = e.length / (t - n), o = e.length - 1, r;
    }var u, o;return r.domain = function (e) {
      return arguments.length ? (n = +e[0], t = +e[e.length - 1], i()) : [n, t];
    }, r.range = function (n) {
      return arguments.length ? (e = n, i()) : e;
    }, r.invertExtent = function (t) {
      return t = e.indexOf(t), t = 0 > t ? NaN : t / u + n, [t, t + 1 / u];
    }, r.copy = function () {
      return lu(n, t, e);
    }, i();
  }function cu(n, t) {
    function e(e) {
      return e >= e ? t[ao.bisect(n, e)] : void 0;
    }return e.domain = function (t) {
      return arguments.length ? (n = t, e) : n;
    }, e.range = function (n) {
      return arguments.length ? (t = n, e) : t;
    }, e.invertExtent = function (e) {
      return e = t.indexOf(e), [n[e - 1], n[e]];
    }, e.copy = function () {
      return cu(n, t);
    }, e;
  }function fu(n) {
    function t(n) {
      return +n;
    }return t.invert = t, t.domain = t.range = function (e) {
      return arguments.length ? (n = e.map(t), t) : n;
    }, t.ticks = function (t) {
      return Qi(n, t);
    }, t.tickFormat = function (t, e) {
      return nu(n, t, e);
    }, t.copy = function () {
      return fu(n);
    }, t;
  }function su() {
    return 0;
  }function hu(n) {
    return n.innerRadius;
  }function pu(n) {
    return n.outerRadius;
  }function gu(n) {
    return n.startAngle;
  }function vu(n) {
    return n.endAngle;
  }function du(n) {
    return n && n.padAngle;
  }function yu(n, t, e, r) {
    return (n - e) * t - (t - r) * n > 0 ? 0 : 1;
  }function mu(n, t, e, r, i) {
    var u = n[0] - t[0],
        o = n[1] - t[1],
        a = (i ? r : -r) / Math.sqrt(u * u + o * o),
        l = a * o,
        c = -a * u,
        f = n[0] + l,
        s = n[1] + c,
        h = t[0] + l,
        p = t[1] + c,
        g = (f + h) / 2,
        v = (s + p) / 2,
        d = h - f,
        y = p - s,
        m = d * d + y * y,
        M = e - r,
        x = f * p - h * s,
        b = (0 > y ? -1 : 1) * Math.sqrt(Math.max(0, M * M * m - x * x)),
        _ = (x * y - d * b) / m,
        w = (-x * d - y * b) / m,
        S = (x * y + d * b) / m,
        k = (-x * d + y * b) / m,
        N = _ - g,
        E = w - v,
        A = S - g,
        C = k - v;return N * N + E * E > A * A + C * C && (_ = S, w = k), [[_ - l, w - c], [_ * e / M, w * e / M]];
  }function Mu(n) {
    function t(t) {
      function o() {
        c.push("M", u(n(f), a));
      }for (var l, c = [], f = [], s = -1, h = t.length, p = En(e), g = En(r); ++s < h;) {
        i.call(this, l = t[s], s) ? f.push([+p.call(this, l, s), +g.call(this, l, s)]) : f.length && (o(), f = []);
      }return f.length && o(), c.length ? c.join("") : null;
    }var e = Ce,
        r = ze,
        i = zt,
        u = xu,
        o = u.key,
        a = .7;return t.x = function (n) {
      return arguments.length ? (e = n, t) : e;
    }, t.y = function (n) {
      return arguments.length ? (r = n, t) : r;
    }, t.defined = function (n) {
      return arguments.length ? (i = n, t) : i;
    }, t.interpolate = function (n) {
      return arguments.length ? (o = "function" == typeof n ? u = n : (u = Tl.get(n) || xu).key, t) : o;
    }, t.tension = function (n) {
      return arguments.length ? (a = n, t) : a;
    }, t;
  }function xu(n) {
    return n.length > 1 ? n.join("L") : n + "Z";
  }function bu(n) {
    return n.join("L") + "Z";
  }function _u(n) {
    for (var t = 0, e = n.length, r = n[0], i = [r[0], ",", r[1]]; ++t < e;) {
      i.push("H", (r[0] + (r = n[t])[0]) / 2, "V", r[1]);
    }return e > 1 && i.push("H", r[0]), i.join("");
  }function wu(n) {
    for (var t = 0, e = n.length, r = n[0], i = [r[0], ",", r[1]]; ++t < e;) {
      i.push("V", (r = n[t])[1], "H", r[0]);
    }return i.join("");
  }function Su(n) {
    for (var t = 0, e = n.length, r = n[0], i = [r[0], ",", r[1]]; ++t < e;) {
      i.push("H", (r = n[t])[0], "V", r[1]);
    }return i.join("");
  }function ku(n, t) {
    return n.length < 4 ? xu(n) : n[1] + Au(n.slice(1, -1), Cu(n, t));
  }function Nu(n, t) {
    return n.length < 3 ? bu(n) : n[0] + Au((n.push(n[0]), n), Cu([n[n.length - 2]].concat(n, [n[1]]), t));
  }function Eu(n, t) {
    return n.length < 3 ? xu(n) : n[0] + Au(n, Cu(n, t));
  }function Au(n, t) {
    if (t.length < 1 || n.length != t.length && n.length != t.length + 2) return xu(n);var e = n.length != t.length,
        r = "",
        i = n[0],
        u = n[1],
        o = t[0],
        a = o,
        l = 1;if (e && (r += "Q" + (u[0] - 2 * o[0] / 3) + "," + (u[1] - 2 * o[1] / 3) + "," + u[0] + "," + u[1], i = n[1], l = 2), t.length > 1) {
      a = t[1], u = n[l], l++, r += "C" + (i[0] + o[0]) + "," + (i[1] + o[1]) + "," + (u[0] - a[0]) + "," + (u[1] - a[1]) + "," + u[0] + "," + u[1];for (var c = 2; c < t.length; c++, l++) {
        u = n[l], a = t[c], r += "S" + (u[0] - a[0]) + "," + (u[1] - a[1]) + "," + u[0] + "," + u[1];
      }
    }if (e) {
      var f = n[l];r += "Q" + (u[0] + 2 * a[0] / 3) + "," + (u[1] + 2 * a[1] / 3) + "," + f[0] + "," + f[1];
    }return r;
  }function Cu(n, t) {
    for (var e, r = [], i = (1 - t) / 2, u = n[0], o = n[1], a = 1, l = n.length; ++a < l;) {
      e = u, u = o, o = n[a], r.push([i * (o[0] - e[0]), i * (o[1] - e[1])]);
    }return r;
  }function zu(n) {
    if (n.length < 3) return xu(n);var t = 1,
        e = n.length,
        r = n[0],
        i = r[0],
        u = r[1],
        o = [i, i, i, (r = n[1])[0]],
        a = [u, u, u, r[1]],
        l = [i, ",", u, "L", Ru(Pl, o), ",", Ru(Pl, a)];for (n.push(n[e - 1]); ++t <= e;) {
      r = n[t], o.shift(), o.push(r[0]), a.shift(), a.push(r[1]), Du(l, o, a);
    }return n.pop(), l.push("L", r), l.join("");
  }function Lu(n) {
    if (n.length < 4) return xu(n);for (var t, e = [], r = -1, i = n.length, u = [0], o = [0]; ++r < 3;) {
      t = n[r], u.push(t[0]), o.push(t[1]);
    }for (e.push(Ru(Pl, u) + "," + Ru(Pl, o)), --r; ++r < i;) {
      t = n[r], u.shift(), u.push(t[0]), o.shift(), o.push(t[1]), Du(e, u, o);
    }return e.join("");
  }function qu(n) {
    for (var t, e, r = -1, i = n.length, u = i + 4, o = [], a = []; ++r < 4;) {
      e = n[r % i], o.push(e[0]), a.push(e[1]);
    }for (t = [Ru(Pl, o), ",", Ru(Pl, a)], --r; ++r < u;) {
      e = n[r % i], o.shift(), o.push(e[0]), a.shift(), a.push(e[1]), Du(t, o, a);
    }return t.join("");
  }function Tu(n, t) {
    var e = n.length - 1;if (e) for (var r, i, u = n[0][0], o = n[0][1], a = n[e][0] - u, l = n[e][1] - o, c = -1; ++c <= e;) {
      r = n[c], i = c / e, r[0] = t * r[0] + (1 - t) * (u + i * a), r[1] = t * r[1] + (1 - t) * (o + i * l);
    }return zu(n);
  }function Ru(n, t) {
    return n[0] * t[0] + n[1] * t[1] + n[2] * t[2] + n[3] * t[3];
  }function Du(n, t, e) {
    n.push("C", Ru(Rl, t), ",", Ru(Rl, e), ",", Ru(Dl, t), ",", Ru(Dl, e), ",", Ru(Pl, t), ",", Ru(Pl, e));
  }function Pu(n, t) {
    return (t[1] - n[1]) / (t[0] - n[0]);
  }function Uu(n) {
    for (var t = 0, e = n.length - 1, r = [], i = n[0], u = n[1], o = r[0] = Pu(i, u); ++t < e;) {
      r[t] = (o + (o = Pu(i = u, u = n[t + 1]))) / 2;
    }return r[t] = o, r;
  }function ju(n) {
    for (var t, e, r, i, u = [], o = Uu(n), a = -1, l = n.length - 1; ++a < l;) {
      t = Pu(n[a], n[a + 1]), xo(t) < Uo ? o[a] = o[a + 1] = 0 : (e = o[a] / t, r = o[a + 1] / t, i = e * e + r * r, i > 9 && (i = 3 * t / Math.sqrt(i), o[a] = i * e, o[a + 1] = i * r));
    }for (a = -1; ++a <= l;) {
      i = (n[Math.min(l, a + 1)][0] - n[Math.max(0, a - 1)][0]) / (6 * (1 + o[a] * o[a])), u.push([i || 0, o[a] * i || 0]);
    }return u;
  }function Fu(n) {
    return n.length < 3 ? xu(n) : n[0] + Au(n, ju(n));
  }function Hu(n) {
    for (var t, e, r, i = -1, u = n.length; ++i < u;) {
      t = n[i], e = t[0], r = t[1] - Io, t[0] = e * Math.cos(r), t[1] = e * Math.sin(r);
    }return n;
  }function Ou(n) {
    function t(t) {
      function l() {
        v.push("M", a(n(y), s), f, c(n(d.reverse()), s), "Z");
      }for (var h, p, g, v = [], d = [], y = [], m = -1, M = t.length, x = En(e), b = En(i), _ = e === r ? function () {
        return p;
      } : En(r), w = i === u ? function () {
        return g;
      } : En(u); ++m < M;) {
        o.call(this, h = t[m], m) ? (d.push([p = +x.call(this, h, m), g = +b.call(this, h, m)]), y.push([+_.call(this, h, m), +w.call(this, h, m)])) : d.length && (l(), d = [], y = []);
      }return d.length && l(), v.length ? v.join("") : null;
    }var e = Ce,
        r = Ce,
        i = 0,
        u = ze,
        o = zt,
        a = xu,
        l = a.key,
        c = a,
        f = "L",
        s = .7;return t.x = function (n) {
      return arguments.length ? (e = r = n, t) : r;
    }, t.x0 = function (n) {
      return arguments.length ? (e = n, t) : e;
    }, t.x1 = function (n) {
      return arguments.length ? (r = n, t) : r;
    }, t.y = function (n) {
      return arguments.length ? (i = u = n, t) : u;
    }, t.y0 = function (n) {
      return arguments.length ? (i = n, t) : i;
    }, t.y1 = function (n) {
      return arguments.length ? (u = n, t) : u;
    }, t.defined = function (n) {
      return arguments.length ? (o = n, t) : o;
    }, t.interpolate = function (n) {
      return arguments.length ? (l = "function" == typeof n ? a = n : (a = Tl.get(n) || xu).key, c = a.reverse || a, f = a.closed ? "M" : "L", t) : l;
    }, t.tension = function (n) {
      return arguments.length ? (s = n, t) : s;
    }, t;
  }function Iu(n) {
    return n.radius;
  }function Yu(n) {
    return [n.x, n.y];
  }function Zu(n) {
    return function () {
      var t = n.apply(this, arguments),
          e = t[0],
          r = t[1] - Io;return [e * Math.cos(r), e * Math.sin(r)];
    };
  }function Vu() {
    return 64;
  }function Xu() {
    return "circle";
  }function $u(n) {
    var t = Math.sqrt(n / Fo);return "M0," + t + "A" + t + "," + t + " 0 1,1 0," + -t + "A" + t + "," + t + " 0 1,1 0," + t + "Z";
  }function Bu(n) {
    return function () {
      var t, e, r;(t = this[n]) && (r = t[e = t.active]) && (r.timer.c = null, r.timer.t = NaN, --t.count ? delete t[e] : delete this[n], t.active += .5, r.event && r.event.interrupt.call(this, this.__data__, r.index));
    };
  }function Wu(n, t, e) {
    return ko(n, Yl), n.namespace = t, n.id = e, n;
  }function Ju(n, t, e, r) {
    var i = n.id,
        u = n.namespace;return Y(n, "function" == typeof e ? function (n, o, a) {
      n[u][i].tween.set(t, r(e.call(n, n.__data__, o, a)));
    } : (e = r(e), function (n) {
      n[u][i].tween.set(t, e);
    }));
  }function Gu(n) {
    return null == n && (n = ""), function () {
      this.textContent = n;
    };
  }function Ku(n) {
    return null == n ? "__transition__" : "__transition_" + n + "__";
  }function Qu(n, t, e, r, i) {
    function u(n) {
      var t = v.delay;return f.t = t + l, n >= t ? o(n - t) : void (f.c = o);
    }function o(e) {
      var i = g.active,
          u = g[i];u && (u.timer.c = null, u.timer.t = NaN, --g.count, delete g[i], u.event && u.event.interrupt.call(n, n.__data__, u.index));for (var o in g) {
        if (r > +o) {
          var c = g[o];c.timer.c = null, c.timer.t = NaN, --g.count, delete g[o];
        }
      }f.c = a, qn(function () {
        return f.c && a(e || 1) && (f.c = null, f.t = NaN), 1;
      }, 0, l), g.active = r, v.event && v.event.start.call(n, n.__data__, t), p = [], v.tween.forEach(function (e, r) {
        (r = r.call(n, n.__data__, t)) && p.push(r);
      }), h = v.ease, s = v.duration;
    }function a(i) {
      for (var u = i / s, o = h(u), a = p.length; a > 0;) {
        p[--a].call(n, o);
      }return u >= 1 ? (v.event && v.event.end.call(n, n.__data__, t), --g.count ? delete g[r] : delete n[e], 1) : void 0;
    }var l,
        f,
        s,
        h,
        p,
        g = n[e] || (n[e] = { active: 0, count: 0 }),
        v = g[r];v || (l = i.time, f = qn(u, 0, l), v = g[r] = { tween: new c(), time: l, timer: f, delay: i.delay, duration: i.duration, ease: i.ease, index: t }, i = null, ++g.count);
  }function no(n, t, e) {
    n.attr("transform", function (n) {
      var r = t(n);return "translate(" + (isFinite(r) ? r : e(n)) + ",0)";
    });
  }function to(n, t, e) {
    n.attr("transform", function (n) {
      var r = t(n);return "translate(0," + (isFinite(r) ? r : e(n)) + ")";
    });
  }function eo(n) {
    return n.toISOString();
  }function ro(n, t, e) {
    function r(t) {
      return n(t);
    }function i(n, e) {
      var r = n[1] - n[0],
          i = r / e,
          u = ao.bisect(Kl, i);return u == Kl.length ? [t.year, Ki(n.map(function (n) {
        return n / 31536e6;
      }), e)[2]] : u ? t[i / Kl[u - 1] < Kl[u] / i ? u - 1 : u] : [tc, Ki(n, e)[2]];
    }return r.invert = function (t) {
      return io(n.invert(t));
    }, r.domain = function (t) {
      return arguments.length ? (n.domain(t), r) : n.domain().map(io);
    }, r.nice = function (n, t) {
      function e(e) {
        return !isNaN(e) && !n.range(e, io(+e + 1), t).length;
      }var u = r.domain(),
          o = Yi(u),
          a = null == n ? i(o, 10) : "number" == typeof n && i(o, n);return a && (n = a[0], t = a[1]), r.domain(Xi(u, t > 1 ? { floor: function floor(t) {
          for (; e(t = n.floor(t));) {
            t = io(t - 1);
          }return t;
        }, ceil: function ceil(t) {
          for (; e(t = n.ceil(t));) {
            t = io(+t + 1);
          }return t;
        } } : n));
    }, r.ticks = function (n, t) {
      var e = Yi(r.domain()),
          u = null == n ? i(e, 10) : "number" == typeof n ? i(e, n) : !n.range && [{ range: n }, t];return u && (n = u[0], t = u[1]), n.range(e[0], io(+e[1] + 1), 1 > t ? 1 : t);
    }, r.tickFormat = function () {
      return e;
    }, r.copy = function () {
      return ro(n.copy(), t, e);
    }, Ji(r, n);
  }function io(n) {
    return new Date(n);
  }function uo(n) {
    return JSON.parse(n.responseText);
  }function oo(n) {
    var t = fo.createRange();return t.selectNode(fo.body), t.createContextualFragment(n.responseText);
  }var ao = { version: "3.5.17" },
      lo = [].slice,
      co = function co(n) {
    return lo.call(n);
  },
      fo = this.document;if (fo) try {
    co(fo.documentElement.childNodes)[0].nodeType;
  } catch (so) {
    co = function co(n) {
      for (var t = n.length, e = new Array(t); t--;) {
        e[t] = n[t];
      }return e;
    };
  }if (Date.now || (Date.now = function () {
    return +new Date();
  }), fo) try {
    fo.createElement("DIV").style.setProperty("opacity", 0, "");
  } catch (ho) {
    var po = this.Element.prototype,
        go = po.setAttribute,
        vo = po.setAttributeNS,
        yo = this.CSSStyleDeclaration.prototype,
        mo = yo.setProperty;po.setAttribute = function (n, t) {
      go.call(this, n, t + "");
    }, po.setAttributeNS = function (n, t, e) {
      vo.call(this, n, t, e + "");
    }, yo.setProperty = function (n, t, e) {
      mo.call(this, n, t + "", e);
    };
  }ao.ascending = e, ao.descending = function (n, t) {
    return n > t ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
  }, ao.min = function (n, t) {
    var e,
        r,
        i = -1,
        u = n.length;if (1 === arguments.length) {
      for (; ++i < u;) {
        if (null != (r = n[i]) && r >= r) {
          e = r;break;
        }
      }for (; ++i < u;) {
        null != (r = n[i]) && e > r && (e = r);
      }
    } else {
      for (; ++i < u;) {
        if (null != (r = t.call(n, n[i], i)) && r >= r) {
          e = r;break;
        }
      }for (; ++i < u;) {
        null != (r = t.call(n, n[i], i)) && e > r && (e = r);
      }
    }return e;
  }, ao.max = function (n, t) {
    var e,
        r,
        i = -1,
        u = n.length;if (1 === arguments.length) {
      for (; ++i < u;) {
        if (null != (r = n[i]) && r >= r) {
          e = r;break;
        }
      }for (; ++i < u;) {
        null != (r = n[i]) && r > e && (e = r);
      }
    } else {
      for (; ++i < u;) {
        if (null != (r = t.call(n, n[i], i)) && r >= r) {
          e = r;break;
        }
      }for (; ++i < u;) {
        null != (r = t.call(n, n[i], i)) && r > e && (e = r);
      }
    }return e;
  }, ao.extent = function (n, t) {
    var e,
        r,
        i,
        u = -1,
        o = n.length;if (1 === arguments.length) {
      for (; ++u < o;) {
        if (null != (r = n[u]) && r >= r) {
          e = i = r;break;
        }
      }for (; ++u < o;) {
        null != (r = n[u]) && (e > r && (e = r), r > i && (i = r));
      }
    } else {
      for (; ++u < o;) {
        if (null != (r = t.call(n, n[u], u)) && r >= r) {
          e = i = r;break;
        }
      }for (; ++u < o;) {
        null != (r = t.call(n, n[u], u)) && (e > r && (e = r), r > i && (i = r));
      }
    }return [e, i];
  }, ao.sum = function (n, t) {
    var e,
        r = 0,
        u = n.length,
        o = -1;if (1 === arguments.length) for (; ++o < u;) {
      i(e = +n[o]) && (r += e);
    } else for (; ++o < u;) {
      i(e = +t.call(n, n[o], o)) && (r += e);
    }return r;
  }, ao.mean = function (n, t) {
    var e,
        u = 0,
        o = n.length,
        a = -1,
        l = o;if (1 === arguments.length) for (; ++a < o;) {
      i(e = r(n[a])) ? u += e : --l;
    } else for (; ++a < o;) {
      i(e = r(t.call(n, n[a], a))) ? u += e : --l;
    }return l ? u / l : void 0;
  }, ao.quantile = function (n, t) {
    var e = (n.length - 1) * t + 1,
        r = Math.floor(e),
        i = +n[r - 1],
        u = e - r;return u ? i + u * (n[r] - i) : i;
  }, ao.median = function (n, t) {
    var u,
        o = [],
        a = n.length,
        l = -1;if (1 === arguments.length) for (; ++l < a;) {
      i(u = r(n[l])) && o.push(u);
    } else for (; ++l < a;) {
      i(u = r(t.call(n, n[l], l))) && o.push(u);
    }return o.length ? ao.quantile(o.sort(e), .5) : void 0;
  }, ao.variance = function (n, t) {
    var e,
        u,
        o = n.length,
        a = 0,
        l = 0,
        c = -1,
        f = 0;if (1 === arguments.length) for (; ++c < o;) {
      i(e = r(n[c])) && (u = e - a, a += u / ++f, l += u * (e - a));
    } else for (; ++c < o;) {
      i(e = r(t.call(n, n[c], c))) && (u = e - a, a += u / ++f, l += u * (e - a));
    }return f > 1 ? l / (f - 1) : void 0;
  }, ao.deviation = function () {
    var n = ao.variance.apply(this, arguments);return n ? Math.sqrt(n) : n;
  };var Mo = u(e);ao.bisectLeft = Mo.left, ao.bisect = ao.bisectRight = Mo.right, ao.bisector = function (n) {
    return u(1 === n.length ? function (t, r) {
      return e(n(t), r);
    } : n);
  }, ao.shuffle = function (n, t, e) {
    (u = arguments.length) < 3 && (e = n.length, 2 > u && (t = 0));for (var r, i, u = e - t; u;) {
      i = Math.random() * u-- | 0, r = n[u + t], n[u + t] = n[i + t], n[i + t] = r;
    }return n;
  }, ao.permute = function (n, t) {
    for (var e = t.length, r = new Array(e); e--;) {
      r[e] = n[t[e]];
    }return r;
  }, ao.pairs = function (n) {
    for (var t, e = 0, r = n.length - 1, i = n[0], u = new Array(0 > r ? 0 : r); r > e;) {
      u[e] = [t = i, i = n[++e]];
    }return u;
  }, ao.transpose = function (n) {
    if (!(i = n.length)) return [];for (var t = -1, e = ao.min(n, o), r = new Array(e); ++t < e;) {
      for (var i, u = -1, a = r[t] = new Array(i); ++u < i;) {
        a[u] = n[u][t];
      }
    }return r;
  }, ao.zip = function () {
    return ao.transpose(arguments);
  }, ao.keys = function (n) {
    var t = [];for (var e in n) {
      t.push(e);
    }return t;
  }, ao.values = function (n) {
    var t = [];for (var e in n) {
      t.push(n[e]);
    }return t;
  }, ao.entries = function (n) {
    var t = [];for (var e in n) {
      t.push({ key: e, value: n[e] });
    }return t;
  }, ao.merge = function (n) {
    for (var t, e, r, i = n.length, u = -1, o = 0; ++u < i;) {
      o += n[u].length;
    }for (e = new Array(o); --i >= 0;) {
      for (r = n[i], t = r.length; --t >= 0;) {
        e[--o] = r[t];
      }
    }return e;
  };var xo = Math.abs;ao.range = function (n, t, e) {
    if (arguments.length < 3 && (e = 1, arguments.length < 2 && (t = n, n = 0)), (t - n) / e === 1 / 0) throw new Error("infinite range");var r,
        i = [],
        u = a(xo(e)),
        o = -1;if (n *= u, t *= u, e *= u, 0 > e) for (; (r = n + e * ++o) > t;) {
      i.push(r / u);
    } else for (; (r = n + e * ++o) < t;) {
      i.push(r / u);
    }return i;
  }, ao.map = function (n, t) {
    var e = new c();if (n instanceof c) n.forEach(function (n, t) {
      e.set(n, t);
    });else if (Array.isArray(n)) {
      var r,
          i = -1,
          u = n.length;if (1 === arguments.length) for (; ++i < u;) {
        e.set(i, n[i]);
      } else for (; ++i < u;) {
        e.set(t.call(n, r = n[i], i), r);
      }
    } else for (var o in n) {
      e.set(o, n[o]);
    }return e;
  };var bo = "__proto__",
      _o = "\x00";l(c, { has: h, get: function get(n) {
      return this._[f(n)];
    }, set: function set(n, t) {
      return this._[f(n)] = t;
    }, remove: p, keys: g, values: function values() {
      var n = [];for (var t in this._) {
        n.push(this._[t]);
      }return n;
    }, entries: function entries() {
      var n = [];for (var t in this._) {
        n.push({ key: s(t), value: this._[t] });
      }return n;
    }, size: v, empty: d, forEach: function forEach(n) {
      for (var t in this._) {
        n.call(this, s(t), this._[t]);
      }
    } }), ao.nest = function () {
    function n(t, o, a) {
      if (a >= u.length) return r ? r.call(i, o) : e ? o.sort(e) : o;for (var l, f, s, h, p = -1, g = o.length, v = u[a++], d = new c(); ++p < g;) {
        (h = d.get(l = v(f = o[p]))) ? h.push(f) : d.set(l, [f]);
      }return t ? (f = t(), s = function s(e, r) {
        f.set(e, n(t, r, a));
      }) : (f = {}, s = function s(e, r) {
        f[e] = n(t, r, a);
      }), d.forEach(s), f;
    }function t(n, e) {
      if (e >= u.length) return n;var r = [],
          i = o[e++];return n.forEach(function (n, i) {
        r.push({ key: n, values: t(i, e) });
      }), i ? r.sort(function (n, t) {
        return i(n.key, t.key);
      }) : r;
    }var e,
        r,
        i = {},
        u = [],
        o = [];return i.map = function (t, e) {
      return n(e, t, 0);
    }, i.entries = function (e) {
      return t(n(ao.map, e, 0), 0);
    }, i.key = function (n) {
      return u.push(n), i;
    }, i.sortKeys = function (n) {
      return o[u.length - 1] = n, i;
    }, i.sortValues = function (n) {
      return e = n, i;
    }, i.rollup = function (n) {
      return r = n, i;
    }, i;
  }, ao.set = function (n) {
    var t = new y();if (n) for (var e = 0, r = n.length; r > e; ++e) {
      t.add(n[e]);
    }return t;
  }, l(y, { has: h, add: function add(n) {
      return this._[f(n += "")] = !0, n;
    }, remove: p, values: g, size: v, empty: d, forEach: function forEach(n) {
      for (var t in this._) {
        n.call(this, s(t));
      }
    } }), ao.behavior = {}, ao.rebind = function (n, t) {
    for (var e, r = 1, i = arguments.length; ++r < i;) {
      n[e = arguments[r]] = M(n, t, t[e]);
    }return n;
  };var wo = ["webkit", "ms", "moz", "Moz", "o", "O"];ao.dispatch = function () {
    for (var n = new _(), t = -1, e = arguments.length; ++t < e;) {
      n[arguments[t]] = w(n);
    }return n;
  }, _.prototype.on = function (n, t) {
    var e = n.indexOf("."),
        r = "";if (e >= 0 && (r = n.slice(e + 1), n = n.slice(0, e)), n) return arguments.length < 2 ? this[n].on(r) : this[n].on(r, t);if (2 === arguments.length) {
      if (null == t) for (n in this) {
        this.hasOwnProperty(n) && this[n].on(r, null);
      }return this;
    }
  }, ao.event = null, ao.requote = function (n) {
    return n.replace(So, "\\$&");
  };var So = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
      ko = {}.__proto__ ? function (n, t) {
    n.__proto__ = t;
  } : function (n, t) {
    for (var e in t) {
      n[e] = t[e];
    }
  },
      No = function No(n, t) {
    return t.querySelector(n);
  },
      Eo = function Eo(n, t) {
    return t.querySelectorAll(n);
  },
      _Ao = function Ao(n, t) {
    var e = n.matches || n[x(n, "matchesSelector")];return (_Ao = function Ao(n, t) {
      return e.call(n, t);
    })(n, t);
  };"function" == typeof Sizzle && (No = function No(n, t) {
    return Sizzle(n, t)[0] || null;
  }, Eo = Sizzle, _Ao = Sizzle.matchesSelector), ao.selection = function () {
    return ao.select(fo.documentElement);
  };var Co = ao.selection.prototype = [];Co.select = function (n) {
    var t,
        e,
        r,
        i,
        u = [];n = A(n);for (var o = -1, a = this.length; ++o < a;) {
      u.push(t = []), t.parentNode = (r = this[o]).parentNode;for (var l = -1, c = r.length; ++l < c;) {
        (i = r[l]) ? (t.push(e = n.call(i, i.__data__, l, o)), e && "__data__" in i && (e.__data__ = i.__data__)) : t.push(null);
      }
    }return E(u);
  }, Co.selectAll = function (n) {
    var t,
        e,
        r = [];n = C(n);for (var i = -1, u = this.length; ++i < u;) {
      for (var o = this[i], a = -1, l = o.length; ++a < l;) {
        (e = o[a]) && (r.push(t = co(n.call(e, e.__data__, a, i))), t.parentNode = e);
      }
    }return E(r);
  };var zo = "http://www.w3.org/1999/xhtml",
      Lo = { svg: "http://www.w3.org/2000/svg", xhtml: zo, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" };ao.ns = { prefix: Lo, qualify: function qualify(n) {
      var t = n.indexOf(":"),
          e = n;return t >= 0 && "xmlns" !== (e = n.slice(0, t)) && (n = n.slice(t + 1)), Lo.hasOwnProperty(e) ? { space: Lo[e], local: n } : n;
    } }, Co.attr = function (n, t) {
    if (arguments.length < 2) {
      if ("string" == typeof n) {
        var e = this.node();return n = ao.ns.qualify(n), n.local ? e.getAttributeNS(n.space, n.local) : e.getAttribute(n);
      }for (t in n) {
        this.each(z(t, n[t]));
      }return this;
    }return this.each(z(n, t));
  }, Co.classed = function (n, t) {
    if (arguments.length < 2) {
      if ("string" == typeof n) {
        var e = this.node(),
            r = (n = T(n)).length,
            i = -1;if (t = e.classList) {
          for (; ++i < r;) {
            if (!t.contains(n[i])) return !1;
          }
        } else for (t = e.getAttribute("class"); ++i < r;) {
          if (!q(n[i]).test(t)) return !1;
        }return !0;
      }for (t in n) {
        this.each(R(t, n[t]));
      }return this;
    }return this.each(R(n, t));
  }, Co.style = function (n, e, r) {
    var i = arguments.length;if (3 > i) {
      if ("string" != typeof n) {
        2 > i && (e = "");for (r in n) {
          this.each(P(r, n[r], e));
        }return this;
      }if (2 > i) {
        var u = this.node();return t(u).getComputedStyle(u, null).getPropertyValue(n);
      }r = "";
    }return this.each(P(n, e, r));
  }, Co.property = function (n, t) {
    if (arguments.length < 2) {
      if ("string" == typeof n) return this.node()[n];for (t in n) {
        this.each(U(t, n[t]));
      }return this;
    }return this.each(U(n, t));
  }, Co.text = function (n) {
    return arguments.length ? this.each("function" == typeof n ? function () {
      var t = n.apply(this, arguments);this.textContent = null == t ? "" : t;
    } : null == n ? function () {
      this.textContent = "";
    } : function () {
      this.textContent = n;
    }) : this.node().textContent;
  }, Co.html = function (n) {
    return arguments.length ? this.each("function" == typeof n ? function () {
      var t = n.apply(this, arguments);this.innerHTML = null == t ? "" : t;
    } : null == n ? function () {
      this.innerHTML = "";
    } : function () {
      this.innerHTML = n;
    }) : this.node().innerHTML;
  }, Co.append = function (n) {
    return n = j(n), this.select(function () {
      return this.appendChild(n.apply(this, arguments));
    });
  }, Co.insert = function (n, t) {
    return n = j(n), t = A(t), this.select(function () {
      return this.insertBefore(n.apply(this, arguments), t.apply(this, arguments) || null);
    });
  }, Co.remove = function () {
    return this.each(F);
  }, Co.data = function (n, t) {
    function e(n, e) {
      var r,
          i,
          u,
          o = n.length,
          s = e.length,
          h = Math.min(o, s),
          p = new Array(s),
          g = new Array(s),
          v = new Array(o);if (t) {
        var d,
            y = new c(),
            m = new Array(o);for (r = -1; ++r < o;) {
          (i = n[r]) && (y.has(d = t.call(i, i.__data__, r)) ? v[r] = i : y.set(d, i), m[r] = d);
        }for (r = -1; ++r < s;) {
          (i = y.get(d = t.call(e, u = e[r], r))) ? i !== !0 && (p[r] = i, i.__data__ = u) : g[r] = H(u), y.set(d, !0);
        }for (r = -1; ++r < o;) {
          r in m && y.get(m[r]) !== !0 && (v[r] = n[r]);
        }
      } else {
        for (r = -1; ++r < h;) {
          i = n[r], u = e[r], i ? (i.__data__ = u, p[r] = i) : g[r] = H(u);
        }for (; s > r; ++r) {
          g[r] = H(e[r]);
        }for (; o > r; ++r) {
          v[r] = n[r];
        }
      }g.update = p, g.parentNode = p.parentNode = v.parentNode = n.parentNode, a.push(g), l.push(p), f.push(v);
    }var r,
        i,
        u = -1,
        o = this.length;if (!arguments.length) {
      for (n = new Array(o = (r = this[0]).length); ++u < o;) {
        (i = r[u]) && (n[u] = i.__data__);
      }return n;
    }var a = Z([]),
        l = E([]),
        f = E([]);if ("function" == typeof n) for (; ++u < o;) {
      e(r = this[u], n.call(r, r.parentNode.__data__, u));
    } else for (; ++u < o;) {
      e(r = this[u], n);
    }return l.enter = function () {
      return a;
    }, l.exit = function () {
      return f;
    }, l;
  }, Co.datum = function (n) {
    return arguments.length ? this.property("__data__", n) : this.property("__data__");
  }, Co.filter = function (n) {
    var t,
        e,
        r,
        i = [];"function" != typeof n && (n = O(n));for (var u = 0, o = this.length; o > u; u++) {
      i.push(t = []), t.parentNode = (e = this[u]).parentNode;for (var a = 0, l = e.length; l > a; a++) {
        (r = e[a]) && n.call(r, r.__data__, a, u) && t.push(r);
      }
    }return E(i);
  }, Co.order = function () {
    for (var n = -1, t = this.length; ++n < t;) {
      for (var e, r = this[n], i = r.length - 1, u = r[i]; --i >= 0;) {
        (e = r[i]) && (u && u !== e.nextSibling && u.parentNode.insertBefore(e, u), u = e);
      }
    }return this;
  }, Co.sort = function (n) {
    n = I.apply(this, arguments);for (var t = -1, e = this.length; ++t < e;) {
      this[t].sort(n);
    }return this.order();
  }, Co.each = function (n) {
    return Y(this, function (t, e, r) {
      n.call(t, t.__data__, e, r);
    });
  }, Co.call = function (n) {
    var t = co(arguments);return n.apply(t[0] = this, t), this;
  }, Co.empty = function () {
    return !this.node();
  }, Co.node = function () {
    for (var n = 0, t = this.length; t > n; n++) {
      for (var e = this[n], r = 0, i = e.length; i > r; r++) {
        var u = e[r];if (u) return u;
      }
    }return null;
  }, Co.size = function () {
    var n = 0;return Y(this, function () {
      ++n;
    }), n;
  };var qo = [];ao.selection.enter = Z, ao.selection.enter.prototype = qo, qo.append = Co.append, qo.empty = Co.empty, qo.node = Co.node, qo.call = Co.call, qo.size = Co.size, qo.select = function (n) {
    for (var t, e, r, i, u, o = [], a = -1, l = this.length; ++a < l;) {
      r = (i = this[a]).update, o.push(t = []), t.parentNode = i.parentNode;for (var c = -1, f = i.length; ++c < f;) {
        (u = i[c]) ? (t.push(r[c] = e = n.call(i.parentNode, u.__data__, c, a)), e.__data__ = u.__data__) : t.push(null);
      }
    }return E(o);
  }, qo.insert = function (n, t) {
    return arguments.length < 2 && (t = V(this)), Co.insert.call(this, n, t);
  }, ao.select = function (t) {
    var e;return "string" == typeof t ? (e = [No(t, fo)], e.parentNode = fo.documentElement) : (e = [t], e.parentNode = n(t)), E([e]);
  }, ao.selectAll = function (n) {
    var t;return "string" == typeof n ? (t = co(Eo(n, fo)), t.parentNode = fo.documentElement) : (t = co(n), t.parentNode = null), E([t]);
  }, Co.on = function (n, t, e) {
    var r = arguments.length;if (3 > r) {
      if ("string" != typeof n) {
        2 > r && (t = !1);for (e in n) {
          this.each(X(e, n[e], t));
        }return this;
      }if (2 > r) return (r = this.node()["__on" + n]) && r._;e = !1;
    }return this.each(X(n, t, e));
  };var To = ao.map({ mouseenter: "mouseover", mouseleave: "mouseout" });fo && To.forEach(function (n) {
    "on" + n in fo && To.remove(n);
  });var Ro,
      Do = 0;ao.mouse = function (n) {
    return J(n, k());
  };var Po = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;ao.touch = function (n, t, e) {
    if (arguments.length < 3 && (e = t, t = k().changedTouches), t) for (var r, i = 0, u = t.length; u > i; ++i) {
      if ((r = t[i]).identifier === e) return J(n, r);
    }
  }, ao.behavior.drag = function () {
    function n() {
      this.on("mousedown.drag", u).on("touchstart.drag", o);
    }function e(n, t, e, u, o) {
      return function () {
        function a() {
          var n,
              e,
              r = t(h, v);r && (n = r[0] - M[0], e = r[1] - M[1], g |= n | e, M = r, p({ type: "drag", x: r[0] + c[0], y: r[1] + c[1], dx: n, dy: e }));
        }function l() {
          t(h, v) && (y.on(u + d, null).on(o + d, null), m(g), p({ type: "dragend" }));
        }var c,
            f = this,
            s = ao.event.target.correspondingElement || ao.event.target,
            h = f.parentNode,
            p = r.of(f, arguments),
            g = 0,
            v = n(),
            d = ".drag" + (null == v ? "" : "-" + v),
            y = ao.select(e(s)).on(u + d, a).on(o + d, l),
            m = W(s),
            M = t(h, v);i ? (c = i.apply(f, arguments), c = [c.x - M[0], c.y - M[1]]) : c = [0, 0], p({ type: "dragstart" });
      };
    }var r = N(n, "drag", "dragstart", "dragend"),
        i = null,
        u = e(b, ao.mouse, t, "mousemove", "mouseup"),
        o = e(G, ao.touch, m, "touchmove", "touchend");return n.origin = function (t) {
      return arguments.length ? (i = t, n) : i;
    }, ao.rebind(n, r, "on");
  }, ao.touches = function (n, t) {
    return arguments.length < 2 && (t = k().touches), t ? co(t).map(function (t) {
      var e = J(n, t);return e.identifier = t.identifier, e;
    }) : [];
  };var Uo = 1e-6,
      jo = Uo * Uo,
      Fo = Math.PI,
      Ho = 2 * Fo,
      Oo = Ho - Uo,
      Io = Fo / 2,
      Yo = Fo / 180,
      Zo = 180 / Fo,
      Vo = Math.SQRT2,
      Xo = 2,
      $o = 4;ao.interpolateZoom = function (n, t) {
    var e,
        r,
        i = n[0],
        u = n[1],
        o = n[2],
        a = t[0],
        l = t[1],
        c = t[2],
        f = a - i,
        s = l - u,
        h = f * f + s * s;if (jo > h) r = Math.log(c / o) / Vo, e = function e(n) {
      return [i + n * f, u + n * s, o * Math.exp(Vo * n * r)];
    };else {
      var p = Math.sqrt(h),
          g = (c * c - o * o + $o * h) / (2 * o * Xo * p),
          v = (c * c - o * o - $o * h) / (2 * c * Xo * p),
          d = Math.log(Math.sqrt(g * g + 1) - g),
          y = Math.log(Math.sqrt(v * v + 1) - v);r = (y - d) / Vo, e = function e(n) {
        var t = n * r,
            e = rn(d),
            a = o / (Xo * p) * (e * un(Vo * t + d) - en(d));return [i + a * f, u + a * s, o * e / rn(Vo * t + d)];
      };
    }return e.duration = 1e3 * r, e;
  }, ao.behavior.zoom = function () {
    function n(n) {
      n.on(L, s).on(Wo + ".zoom", p).on("dblclick.zoom", g).on(R, h);
    }function e(n) {
      return [(n[0] - k.x) / k.k, (n[1] - k.y) / k.k];
    }function r(n) {
      return [n[0] * k.k + k.x, n[1] * k.k + k.y];
    }function i(n) {
      k.k = Math.max(A[0], Math.min(A[1], n));
    }function u(n, t) {
      t = r(t), k.x += n[0] - t[0], k.y += n[1] - t[1];
    }function o(t, e, r, o) {
      t.__chart__ = { x: k.x, y: k.y, k: k.k }, i(Math.pow(2, o)), u(d = e, r), t = ao.select(t), C > 0 && (t = t.transition().duration(C)), t.call(n.event);
    }function a() {
      b && b.domain(x.range().map(function (n) {
        return (n - k.x) / k.k;
      }).map(x.invert)), w && w.domain(_.range().map(function (n) {
        return (n - k.y) / k.k;
      }).map(_.invert));
    }function l(n) {
      z++ || n({ type: "zoomstart" });
    }function c(n) {
      a(), n({ type: "zoom", scale: k.k, translate: [k.x, k.y] });
    }function f(n) {
      --z || (n({ type: "zoomend" }), d = null);
    }function s() {
      function n() {
        a = 1, u(ao.mouse(i), h), c(o);
      }function r() {
        s.on(q, null).on(T, null), p(a), f(o);
      }var i = this,
          o = D.of(i, arguments),
          a = 0,
          s = ao.select(t(i)).on(q, n).on(T, r),
          h = e(ao.mouse(i)),
          p = W(i);Il.call(i), l(o);
    }function h() {
      function n() {
        var n = ao.touches(g);return p = k.k, n.forEach(function (n) {
          n.identifier in d && (d[n.identifier] = e(n));
        }), n;
      }function t() {
        var t = ao.event.target;ao.select(t).on(x, r).on(b, a), _.push(t);for (var e = ao.event.changedTouches, i = 0, u = e.length; u > i; ++i) {
          d[e[i].identifier] = null;
        }var l = n(),
            c = Date.now();if (1 === l.length) {
          if (500 > c - M) {
            var f = l[0];o(g, f, d[f.identifier], Math.floor(Math.log(k.k) / Math.LN2) + 1), S();
          }M = c;
        } else if (l.length > 1) {
          var f = l[0],
              s = l[1],
              h = f[0] - s[0],
              p = f[1] - s[1];y = h * h + p * p;
        }
      }function r() {
        var n,
            t,
            e,
            r,
            o = ao.touches(g);Il.call(g);for (var a = 0, l = o.length; l > a; ++a, r = null) {
          if (e = o[a], r = d[e.identifier]) {
            if (t) break;n = e, t = r;
          }
        }if (r) {
          var f = (f = e[0] - n[0]) * f + (f = e[1] - n[1]) * f,
              s = y && Math.sqrt(f / y);n = [(n[0] + e[0]) / 2, (n[1] + e[1]) / 2], t = [(t[0] + r[0]) / 2, (t[1] + r[1]) / 2], i(s * p);
        }M = null, u(n, t), c(v);
      }function a() {
        if (ao.event.touches.length) {
          for (var t = ao.event.changedTouches, e = 0, r = t.length; r > e; ++e) {
            delete d[t[e].identifier];
          }for (var i in d) {
            return void n();
          }
        }ao.selectAll(_).on(m, null), w.on(L, s).on(R, h), N(), f(v);
      }var p,
          g = this,
          v = D.of(g, arguments),
          d = {},
          y = 0,
          m = ".zoom-" + ao.event.changedTouches[0].identifier,
          x = "touchmove" + m,
          b = "touchend" + m,
          _ = [],
          w = ao.select(g),
          N = W(g);t(), l(v), w.on(L, null).on(R, t);
    }function p() {
      var n = D.of(this, arguments);m ? clearTimeout(m) : (Il.call(this), v = e(d = y || ao.mouse(this)), l(n)), m = setTimeout(function () {
        m = null, f(n);
      }, 50), S(), i(Math.pow(2, .002 * Bo()) * k.k), u(d, v), c(n);
    }function g() {
      var n = ao.mouse(this),
          t = Math.log(k.k) / Math.LN2;o(this, n, e(n), ao.event.shiftKey ? Math.ceil(t) - 1 : Math.floor(t) + 1);
    }var v,
        d,
        y,
        m,
        M,
        x,
        b,
        _,
        w,
        k = { x: 0, y: 0, k: 1 },
        E = [960, 500],
        A = Jo,
        C = 250,
        z = 0,
        L = "mousedown.zoom",
        q = "mousemove.zoom",
        T = "mouseup.zoom",
        R = "touchstart.zoom",
        D = N(n, "zoomstart", "zoom", "zoomend");return Wo || (Wo = "onwheel" in fo ? (Bo = function Bo() {
      return -ao.event.deltaY * (ao.event.deltaMode ? 120 : 1);
    }, "wheel") : "onmousewheel" in fo ? (Bo = function Bo() {
      return ao.event.wheelDelta;
    }, "mousewheel") : (Bo = function Bo() {
      return -ao.event.detail;
    }, "MozMousePixelScroll")), n.event = function (n) {
      n.each(function () {
        var n = D.of(this, arguments),
            t = k;Hl ? ao.select(this).transition().each("start.zoom", function () {
          k = this.__chart__ || { x: 0, y: 0, k: 1 }, l(n);
        }).tween("zoom:zoom", function () {
          var e = E[0],
              r = E[1],
              i = d ? d[0] : e / 2,
              u = d ? d[1] : r / 2,
              o = ao.interpolateZoom([(i - k.x) / k.k, (u - k.y) / k.k, e / k.k], [(i - t.x) / t.k, (u - t.y) / t.k, e / t.k]);return function (t) {
            var r = o(t),
                a = e / r[2];this.__chart__ = k = { x: i - r[0] * a, y: u - r[1] * a, k: a }, c(n);
          };
        }).each("interrupt.zoom", function () {
          f(n);
        }).each("end.zoom", function () {
          f(n);
        }) : (this.__chart__ = k, l(n), c(n), f(n));
      });
    }, n.translate = function (t) {
      return arguments.length ? (k = { x: +t[0], y: +t[1], k: k.k }, a(), n) : [k.x, k.y];
    }, n.scale = function (t) {
      return arguments.length ? (k = { x: k.x, y: k.y, k: null }, i(+t), a(), n) : k.k;
    }, n.scaleExtent = function (t) {
      return arguments.length ? (A = null == t ? Jo : [+t[0], +t[1]], n) : A;
    }, n.center = function (t) {
      return arguments.length ? (y = t && [+t[0], +t[1]], n) : y;
    }, n.size = function (t) {
      return arguments.length ? (E = t && [+t[0], +t[1]], n) : E;
    }, n.duration = function (t) {
      return arguments.length ? (C = +t, n) : C;
    }, n.x = function (t) {
      return arguments.length ? (b = t, x = t.copy(), k = { x: 0, y: 0, k: 1 }, n) : b;
    }, n.y = function (t) {
      return arguments.length ? (w = t, _ = t.copy(), k = { x: 0, y: 0, k: 1 }, n) : w;
    }, ao.rebind(n, D, "on");
  };var Bo,
      Wo,
      Jo = [0, 1 / 0];ao.color = an, an.prototype.toString = function () {
    return this.rgb() + "";
  }, ao.hsl = ln;var Go = ln.prototype = new an();Go.brighter = function (n) {
    return n = Math.pow(.7, arguments.length ? n : 1), new ln(this.h, this.s, this.l / n);
  }, Go.darker = function (n) {
    return n = Math.pow(.7, arguments.length ? n : 1), new ln(this.h, this.s, n * this.l);
  }, Go.rgb = function () {
    return cn(this.h, this.s, this.l);
  }, ao.hcl = fn;var Ko = fn.prototype = new an();Ko.brighter = function (n) {
    return new fn(this.h, this.c, Math.min(100, this.l + Qo * (arguments.length ? n : 1)));
  }, Ko.darker = function (n) {
    return new fn(this.h, this.c, Math.max(0, this.l - Qo * (arguments.length ? n : 1)));
  }, Ko.rgb = function () {
    return sn(this.h, this.c, this.l).rgb();
  }, ao.lab = hn;var Qo = 18,
      na = .95047,
      ta = 1,
      ea = 1.08883,
      ra = hn.prototype = new an();ra.brighter = function (n) {
    return new hn(Math.min(100, this.l + Qo * (arguments.length ? n : 1)), this.a, this.b);
  }, ra.darker = function (n) {
    return new hn(Math.max(0, this.l - Qo * (arguments.length ? n : 1)), this.a, this.b);
  }, ra.rgb = function () {
    return pn(this.l, this.a, this.b);
  }, ao.rgb = mn;var ia = mn.prototype = new an();ia.brighter = function (n) {
    n = Math.pow(.7, arguments.length ? n : 1);var t = this.r,
        e = this.g,
        r = this.b,
        i = 30;return t || e || r ? (t && i > t && (t = i), e && i > e && (e = i), r && i > r && (r = i), new mn(Math.min(255, t / n), Math.min(255, e / n), Math.min(255, r / n))) : new mn(i, i, i);
  }, ia.darker = function (n) {
    return n = Math.pow(.7, arguments.length ? n : 1), new mn(n * this.r, n * this.g, n * this.b);
  }, ia.hsl = function () {
    return wn(this.r, this.g, this.b);
  }, ia.toString = function () {
    return "#" + bn(this.r) + bn(this.g) + bn(this.b);
  };var ua = ao.map({ aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 });ua.forEach(function (n, t) {
    ua.set(n, Mn(t));
  }), ao.functor = En, ao.xhr = An(m), ao.dsv = function (n, t) {
    function e(n, e, u) {
      arguments.length < 3 && (u = e, e = null);var o = Cn(n, t, null == e ? r : i(e), u);return o.row = function (n) {
        return arguments.length ? o.response(null == (e = n) ? r : i(n)) : e;
      }, o;
    }function r(n) {
      return e.parse(n.responseText);
    }function i(n) {
      return function (t) {
        return e.parse(t.responseText, n);
      };
    }function u(t) {
      return t.map(o).join(n);
    }function o(n) {
      return a.test(n) ? '"' + n.replace(/\"/g, '""') + '"' : n;
    }var a = new RegExp('["' + n + "\n]"),
        l = n.charCodeAt(0);return e.parse = function (n, t) {
      var r;return e.parseRows(n, function (n, e) {
        if (r) return r(n, e - 1);var i = new Function("d", "return {" + n.map(function (n, t) {
          return JSON.stringify(n) + ": d[" + t + "]";
        }).join(",") + "}");r = t ? function (n, e) {
          return t(i(n), e);
        } : i;
      });
    }, e.parseRows = function (n, t) {
      function e() {
        if (f >= c) return o;if (i) return i = !1, u;var t = f;if (34 === n.charCodeAt(t)) {
          for (var e = t; e++ < c;) {
            if (34 === n.charCodeAt(e)) {
              if (34 !== n.charCodeAt(e + 1)) break;++e;
            }
          }f = e + 2;var r = n.charCodeAt(e + 1);return 13 === r ? (i = !0, 10 === n.charCodeAt(e + 2) && ++f) : 10 === r && (i = !0), n.slice(t + 1, e).replace(/""/g, '"');
        }for (; c > f;) {
          var r = n.charCodeAt(f++),
              a = 1;if (10 === r) i = !0;else if (13 === r) i = !0, 10 === n.charCodeAt(f) && (++f, ++a);else if (r !== l) continue;return n.slice(t, f - a);
        }return n.slice(t);
      }for (var r, i, u = {}, o = {}, a = [], c = n.length, f = 0, s = 0; (r = e()) !== o;) {
        for (var h = []; r !== u && r !== o;) {
          h.push(r), r = e();
        }t && null == (h = t(h, s++)) || a.push(h);
      }return a;
    }, e.format = function (t) {
      if (Array.isArray(t[0])) return e.formatRows(t);var r = new y(),
          i = [];return t.forEach(function (n) {
        for (var t in n) {
          r.has(t) || i.push(r.add(t));
        }
      }), [i.map(o).join(n)].concat(t.map(function (t) {
        return i.map(function (n) {
          return o(t[n]);
        }).join(n);
      })).join("\n");
    }, e.formatRows = function (n) {
      return n.map(u).join("\n");
    }, e;
  }, ao.csv = ao.dsv(",", "text/csv"), ao.tsv = ao.dsv("	", "text/tab-separated-values");var oa,
      aa,
      la,
      ca,
      fa = this[x(this, "requestAnimationFrame")] || function (n) {
    setTimeout(n, 17);
  };ao.timer = function () {
    qn.apply(this, arguments);
  }, ao.timer.flush = function () {
    Rn(), Dn();
  }, ao.round = function (n, t) {
    return t ? Math.round(n * (t = Math.pow(10, t))) / t : Math.round(n);
  };var sa = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(Un);ao.formatPrefix = function (n, t) {
    var e = 0;return (n = +n) && (0 > n && (n *= -1), t && (n = ao.round(n, Pn(n, t))), e = 1 + Math.floor(1e-12 + Math.log(n) / Math.LN10), e = Math.max(-24, Math.min(24, 3 * Math.floor((e - 1) / 3)))), sa[8 + e / 3];
  };var ha = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
      pa = ao.map({ b: function b(n) {
      return n.toString(2);
    }, c: function c(n) {
      return String.fromCharCode(n);
    }, o: function o(n) {
      return n.toString(8);
    }, x: function x(n) {
      return n.toString(16);
    }, X: function X(n) {
      return n.toString(16).toUpperCase();
    }, g: function g(n, t) {
      return n.toPrecision(t);
    }, e: function e(n, t) {
      return n.toExponential(t);
    }, f: function f(n, t) {
      return n.toFixed(t);
    }, r: function r(n, t) {
      return (n = ao.round(n, Pn(n, t))).toFixed(Math.max(0, Math.min(20, Pn(n * (1 + 1e-15), t))));
    } }),
      ga = ao.time = {},
      va = Date;Hn.prototype = { getDate: function getDate() {
      return this._.getUTCDate();
    }, getDay: function getDay() {
      return this._.getUTCDay();
    }, getFullYear: function getFullYear() {
      return this._.getUTCFullYear();
    }, getHours: function getHours() {
      return this._.getUTCHours();
    }, getMilliseconds: function getMilliseconds() {
      return this._.getUTCMilliseconds();
    }, getMinutes: function getMinutes() {
      return this._.getUTCMinutes();
    }, getMonth: function getMonth() {
      return this._.getUTCMonth();
    }, getSeconds: function getSeconds() {
      return this._.getUTCSeconds();
    }, getTime: function getTime() {
      return this._.getTime();
    }, getTimezoneOffset: function getTimezoneOffset() {
      return 0;
    }, valueOf: function valueOf() {
      return this._.valueOf();
    }, setDate: function setDate() {
      da.setUTCDate.apply(this._, arguments);
    }, setDay: function setDay() {
      da.setUTCDay.apply(this._, arguments);
    }, setFullYear: function setFullYear() {
      da.setUTCFullYear.apply(this._, arguments);
    }, setHours: function setHours() {
      da.setUTCHours.apply(this._, arguments);
    }, setMilliseconds: function setMilliseconds() {
      da.setUTCMilliseconds.apply(this._, arguments);
    }, setMinutes: function setMinutes() {
      da.setUTCMinutes.apply(this._, arguments);
    }, setMonth: function setMonth() {
      da.setUTCMonth.apply(this._, arguments);
    }, setSeconds: function setSeconds() {
      da.setUTCSeconds.apply(this._, arguments);
    }, setTime: function setTime() {
      da.setTime.apply(this._, arguments);
    } };var da = Date.prototype;ga.year = On(function (n) {
    return n = ga.day(n), n.setMonth(0, 1), n;
  }, function (n, t) {
    n.setFullYear(n.getFullYear() + t);
  }, function (n) {
    return n.getFullYear();
  }), ga.years = ga.year.range, ga.years.utc = ga.year.utc.range, ga.day = On(function (n) {
    var t = new va(2e3, 0);return t.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()), t;
  }, function (n, t) {
    n.setDate(n.getDate() + t);
  }, function (n) {
    return n.getDate() - 1;
  }), ga.days = ga.day.range, ga.days.utc = ga.day.utc.range, ga.dayOfYear = function (n) {
    var t = ga.year(n);return Math.floor((n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5);
  }, ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function (n, t) {
    t = 7 - t;var e = ga[n] = On(function (n) {
      return (n = ga.day(n)).setDate(n.getDate() - (n.getDay() + t) % 7), n;
    }, function (n, t) {
      n.setDate(n.getDate() + 7 * Math.floor(t));
    }, function (n) {
      var e = ga.year(n).getDay();return Math.floor((ga.dayOfYear(n) + (e + t) % 7) / 7) - (e !== t);
    });ga[n + "s"] = e.range, ga[n + "s"].utc = e.utc.range, ga[n + "OfYear"] = function (n) {
      var e = ga.year(n).getDay();return Math.floor((ga.dayOfYear(n) + (e + t) % 7) / 7);
    };
  }), ga.week = ga.sunday, ga.weeks = ga.sunday.range, ga.weeks.utc = ga.sunday.utc.range, ga.weekOfYear = ga.sundayOfYear;var ya = { "-": "", _: " ", 0: "0" },
      ma = /^\s*\d+/,
      Ma = /^%/;ao.locale = function (n) {
    return { numberFormat: jn(n), timeFormat: Yn(n) };
  };var xa = ao.locale({ decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""], dateTime: "%a %b %e %X %Y", date: "%m/%d/%Y", time: "%H:%M:%S", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] });ao.format = xa.numberFormat, ao.geo = {}, ft.prototype = { s: 0, t: 0, add: function add(n) {
      st(n, this.t, ba), st(ba.s, this.s, this), this.s ? this.t += ba.t : this.s = ba.t;
    }, reset: function reset() {
      this.s = this.t = 0;
    }, valueOf: function valueOf() {
      return this.s;
    } };var ba = new ft();ao.geo.stream = function (n, t) {
    n && _a.hasOwnProperty(n.type) ? _a[n.type](n, t) : ht(n, t);
  };var _a = { Feature: function Feature(n, t) {
      ht(n.geometry, t);
    }, FeatureCollection: function FeatureCollection(n, t) {
      for (var e = n.features, r = -1, i = e.length; ++r < i;) {
        ht(e[r].geometry, t);
      }
    } },
      wa = { Sphere: function Sphere(n, t) {
      t.sphere();
    }, Point: function Point(n, t) {
      n = n.coordinates, t.point(n[0], n[1], n[2]);
    }, MultiPoint: function MultiPoint(n, t) {
      for (var e = n.coordinates, r = -1, i = e.length; ++r < i;) {
        n = e[r], t.point(n[0], n[1], n[2]);
      }
    }, LineString: function LineString(n, t) {
      pt(n.coordinates, t, 0);
    }, MultiLineString: function MultiLineString(n, t) {
      for (var e = n.coordinates, r = -1, i = e.length; ++r < i;) {
        pt(e[r], t, 0);
      }
    }, Polygon: function Polygon(n, t) {
      gt(n.coordinates, t);
    }, MultiPolygon: function MultiPolygon(n, t) {
      for (var e = n.coordinates, r = -1, i = e.length; ++r < i;) {
        gt(e[r], t);
      }
    }, GeometryCollection: function GeometryCollection(n, t) {
      for (var e = n.geometries, r = -1, i = e.length; ++r < i;) {
        ht(e[r], t);
      }
    } };ao.geo.area = function (n) {
    return Sa = 0, ao.geo.stream(n, Na), Sa;
  };var Sa,
      ka = new ft(),
      Na = { sphere: function sphere() {
      Sa += 4 * Fo;
    }, point: b, lineStart: b, lineEnd: b, polygonStart: function polygonStart() {
      ka.reset(), Na.lineStart = vt;
    }, polygonEnd: function polygonEnd() {
      var n = 2 * ka;Sa += 0 > n ? 4 * Fo + n : n, Na.lineStart = Na.lineEnd = Na.point = b;
    } };ao.geo.bounds = function () {
    function n(n, t) {
      M.push(x = [f = n, h = n]), s > t && (s = t), t > p && (p = t);
    }function t(t, e) {
      var r = dt([t * Yo, e * Yo]);if (y) {
        var i = mt(y, r),
            u = [i[1], -i[0], 0],
            o = mt(u, i);bt(o), o = _t(o);var l = t - g,
            c = l > 0 ? 1 : -1,
            v = o[0] * Zo * c,
            d = xo(l) > 180;if (d ^ (v > c * g && c * t > v)) {
          var m = o[1] * Zo;m > p && (p = m);
        } else if (v = (v + 360) % 360 - 180, d ^ (v > c * g && c * t > v)) {
          var m = -o[1] * Zo;s > m && (s = m);
        } else s > e && (s = e), e > p && (p = e);d ? g > t ? a(f, t) > a(f, h) && (h = t) : a(t, h) > a(f, h) && (f = t) : h >= f ? (f > t && (f = t), t > h && (h = t)) : t > g ? a(f, t) > a(f, h) && (h = t) : a(t, h) > a(f, h) && (f = t);
      } else n(t, e);y = r, g = t;
    }function e() {
      b.point = t;
    }function r() {
      x[0] = f, x[1] = h, b.point = n, y = null;
    }function i(n, e) {
      if (y) {
        var r = n - g;m += xo(r) > 180 ? r + (r > 0 ? 360 : -360) : r;
      } else v = n, d = e;Na.point(n, e), t(n, e);
    }function u() {
      Na.lineStart();
    }function o() {
      i(v, d), Na.lineEnd(), xo(m) > Uo && (f = -(h = 180)), x[0] = f, x[1] = h, y = null;
    }function a(n, t) {
      return (t -= n) < 0 ? t + 360 : t;
    }function l(n, t) {
      return n[0] - t[0];
    }function c(n, t) {
      return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n;
    }var f,
        s,
        h,
        p,
        g,
        v,
        d,
        y,
        m,
        M,
        x,
        b = { point: n, lineStart: e, lineEnd: r, polygonStart: function polygonStart() {
        b.point = i, b.lineStart = u, b.lineEnd = o, m = 0, Na.polygonStart();
      }, polygonEnd: function polygonEnd() {
        Na.polygonEnd(), b.point = n, b.lineStart = e, b.lineEnd = r, 0 > ka ? (f = -(h = 180), s = -(p = 90)) : m > Uo ? p = 90 : -Uo > m && (s = -90), x[0] = f, x[1] = h;
      } };return function (n) {
      p = h = -(f = s = 1 / 0), M = [], ao.geo.stream(n, b);var t = M.length;if (t) {
        M.sort(l);for (var e, r = 1, i = M[0], u = [i]; t > r; ++r) {
          e = M[r], c(e[0], i) || c(e[1], i) ? (a(i[0], e[1]) > a(i[0], i[1]) && (i[1] = e[1]), a(e[0], i[1]) > a(i[0], i[1]) && (i[0] = e[0])) : u.push(i = e);
        }for (var o, e, g = -(1 / 0), t = u.length - 1, r = 0, i = u[t]; t >= r; i = e, ++r) {
          e = u[r], (o = a(i[1], e[0])) > g && (g = o, f = e[0], h = i[1]);
        }
      }return M = x = null, f === 1 / 0 || s === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[f, s], [h, p]];
    };
  }(), ao.geo.centroid = function (n) {
    Ea = Aa = Ca = za = La = qa = Ta = Ra = Da = Pa = Ua = 0, ao.geo.stream(n, ja);var t = Da,
        e = Pa,
        r = Ua,
        i = t * t + e * e + r * r;return jo > i && (t = qa, e = Ta, r = Ra, Uo > Aa && (t = Ca, e = za, r = La), i = t * t + e * e + r * r, jo > i) ? [NaN, NaN] : [Math.atan2(e, t) * Zo, tn(r / Math.sqrt(i)) * Zo];
  };var Ea,
      Aa,
      Ca,
      za,
      La,
      qa,
      Ta,
      Ra,
      Da,
      Pa,
      Ua,
      ja = { sphere: b, point: St, lineStart: Nt, lineEnd: Et, polygonStart: function polygonStart() {
      ja.lineStart = At;
    }, polygonEnd: function polygonEnd() {
      ja.lineStart = Nt;
    } },
      Fa = Rt(zt, jt, Ht, [-Fo, -Fo / 2]),
      Ha = 1e9;ao.geo.clipExtent = function () {
    var n,
        t,
        e,
        r,
        i,
        u,
        o = { stream: function stream(n) {
        return i && (i.valid = !1), i = u(n), i.valid = !0, i;
      }, extent: function extent(a) {
        return arguments.length ? (u = Zt(n = +a[0][0], t = +a[0][1], e = +a[1][0], r = +a[1][1]), i && (i.valid = !1, i = null), o) : [[n, t], [e, r]];
      } };return o.extent([[0, 0], [960, 500]]);
  }, (ao.geo.conicEqualArea = function () {
    return Vt(Xt);
  }).raw = Xt, ao.geo.albers = function () {
    return ao.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070);
  }, ao.geo.albersUsa = function () {
    function n(n) {
      var u = n[0],
          o = n[1];return t = null, e(u, o), t || (r(u, o), t) || i(u, o), t;
    }var t,
        e,
        r,
        i,
        u = ao.geo.albers(),
        o = ao.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
        a = ao.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
        l = { point: function point(n, e) {
        t = [n, e];
      } };return n.invert = function (n) {
      var t = u.scale(),
          e = u.translate(),
          r = (n[0] - e[0]) / t,
          i = (n[1] - e[1]) / t;return (i >= .12 && .234 > i && r >= -.425 && -.214 > r ? o : i >= .166 && .234 > i && r >= -.214 && -.115 > r ? a : u).invert(n);
    }, n.stream = function (n) {
      var t = u.stream(n),
          e = o.stream(n),
          r = a.stream(n);return { point: function point(n, i) {
          t.point(n, i), e.point(n, i), r.point(n, i);
        }, sphere: function sphere() {
          t.sphere(), e.sphere(), r.sphere();
        }, lineStart: function lineStart() {
          t.lineStart(), e.lineStart(), r.lineStart();
        }, lineEnd: function lineEnd() {
          t.lineEnd(), e.lineEnd(), r.lineEnd();
        }, polygonStart: function polygonStart() {
          t.polygonStart(), e.polygonStart(), r.polygonStart();
        }, polygonEnd: function polygonEnd() {
          t.polygonEnd(), e.polygonEnd(), r.polygonEnd();
        } };
    }, n.precision = function (t) {
      return arguments.length ? (u.precision(t), o.precision(t), a.precision(t), n) : u.precision();
    }, n.scale = function (t) {
      return arguments.length ? (u.scale(t), o.scale(.35 * t), a.scale(t), n.translate(u.translate())) : u.scale();
    }, n.translate = function (t) {
      if (!arguments.length) return u.translate();var c = u.scale(),
          f = +t[0],
          s = +t[1];return e = u.translate(t).clipExtent([[f - .455 * c, s - .238 * c], [f + .455 * c, s + .238 * c]]).stream(l).point, r = o.translate([f - .307 * c, s + .201 * c]).clipExtent([[f - .425 * c + Uo, s + .12 * c + Uo], [f - .214 * c - Uo, s + .234 * c - Uo]]).stream(l).point, i = a.translate([f - .205 * c, s + .212 * c]).clipExtent([[f - .214 * c + Uo, s + .166 * c + Uo], [f - .115 * c - Uo, s + .234 * c - Uo]]).stream(l).point, n;
    }, n.scale(1070);
  };var Oa,
      Ia,
      Ya,
      Za,
      Va,
      Xa,
      $a = { point: b, lineStart: b, lineEnd: b, polygonStart: function polygonStart() {
      Ia = 0, $a.lineStart = $t;
    }, polygonEnd: function polygonEnd() {
      $a.lineStart = $a.lineEnd = $a.point = b, Oa += xo(Ia / 2);
    } },
      Ba = { point: Bt, lineStart: b, lineEnd: b, polygonStart: b, polygonEnd: b },
      Wa = { point: Gt, lineStart: Kt, lineEnd: Qt, polygonStart: function polygonStart() {
      Wa.lineStart = ne;
    }, polygonEnd: function polygonEnd() {
      Wa.point = Gt, Wa.lineStart = Kt, Wa.lineEnd = Qt;
    } };ao.geo.path = function () {
    function n(n) {
      return n && ("function" == typeof a && u.pointRadius(+a.apply(this, arguments)), o && o.valid || (o = i(u)), ao.geo.stream(n, o)), u.result();
    }function t() {
      return o = null, n;
    }var e,
        r,
        i,
        u,
        o,
        a = 4.5;return n.area = function (n) {
      return Oa = 0, ao.geo.stream(n, i($a)), Oa;
    }, n.centroid = function (n) {
      return Ca = za = La = qa = Ta = Ra = Da = Pa = Ua = 0, ao.geo.stream(n, i(Wa)), Ua ? [Da / Ua, Pa / Ua] : Ra ? [qa / Ra, Ta / Ra] : La ? [Ca / La, za / La] : [NaN, NaN];
    }, n.bounds = function (n) {
      return Va = Xa = -(Ya = Za = 1 / 0), ao.geo.stream(n, i(Ba)), [[Ya, Za], [Va, Xa]];
    }, n.projection = function (n) {
      return arguments.length ? (i = (e = n) ? n.stream || re(n) : m, t()) : e;
    }, n.context = function (n) {
      return arguments.length ? (u = null == (r = n) ? new Wt() : new te(n), "function" != typeof a && u.pointRadius(a), t()) : r;
    }, n.pointRadius = function (t) {
      return arguments.length ? (a = "function" == typeof t ? t : (u.pointRadius(+t), +t), n) : a;
    }, n.projection(ao.geo.albersUsa()).context(null);
  }, ao.geo.transform = function (n) {
    return { stream: function stream(t) {
        var e = new ie(t);for (var r in n) {
          e[r] = n[r];
        }return e;
      } };
  }, ie.prototype = { point: function point(n, t) {
      this.stream.point(n, t);
    }, sphere: function sphere() {
      this.stream.sphere();
    }, lineStart: function lineStart() {
      this.stream.lineStart();
    }, lineEnd: function lineEnd() {
      this.stream.lineEnd();
    }, polygonStart: function polygonStart() {
      this.stream.polygonStart();
    }, polygonEnd: function polygonEnd() {
      this.stream.polygonEnd();
    } }, ao.geo.projection = oe, ao.geo.projectionMutator = ae, (ao.geo.equirectangular = function () {
    return oe(ce);
  }).raw = ce.invert = ce, ao.geo.rotation = function (n) {
    function t(t) {
      return t = n(t[0] * Yo, t[1] * Yo), t[0] *= Zo, t[1] *= Zo, t;
    }return n = se(n[0] % 360 * Yo, n[1] * Yo, n.length > 2 ? n[2] * Yo : 0), t.invert = function (t) {
      return t = n.invert(t[0] * Yo, t[1] * Yo), t[0] *= Zo, t[1] *= Zo, t;
    }, t;
  }, fe.invert = ce, ao.geo.circle = function () {
    function n() {
      var n = "function" == typeof r ? r.apply(this, arguments) : r,
          t = se(-n[0] * Yo, -n[1] * Yo, 0).invert,
          i = [];return e(null, null, 1, { point: function point(n, e) {
          i.push(n = t(n, e)), n[0] *= Zo, n[1] *= Zo;
        } }), { type: "Polygon", coordinates: [i] };
    }var t,
        e,
        r = [0, 0],
        i = 6;return n.origin = function (t) {
      return arguments.length ? (r = t, n) : r;
    }, n.angle = function (r) {
      return arguments.length ? (e = ve((t = +r) * Yo, i * Yo), n) : t;
    }, n.precision = function (r) {
      return arguments.length ? (e = ve(t * Yo, (i = +r) * Yo), n) : i;
    }, n.angle(90);
  }, ao.geo.distance = function (n, t) {
    var e,
        r = (t[0] - n[0]) * Yo,
        i = n[1] * Yo,
        u = t[1] * Yo,
        o = Math.sin(r),
        a = Math.cos(r),
        l = Math.sin(i),
        c = Math.cos(i),
        f = Math.sin(u),
        s = Math.cos(u);return Math.atan2(Math.sqrt((e = s * o) * e + (e = c * f - l * s * a) * e), l * f + c * s * a);
  }, ao.geo.graticule = function () {
    function n() {
      return { type: "MultiLineString", coordinates: t() };
    }function t() {
      return ao.range(Math.ceil(u / d) * d, i, d).map(h).concat(ao.range(Math.ceil(c / y) * y, l, y).map(p)).concat(ao.range(Math.ceil(r / g) * g, e, g).filter(function (n) {
        return xo(n % d) > Uo;
      }).map(f)).concat(ao.range(Math.ceil(a / v) * v, o, v).filter(function (n) {
        return xo(n % y) > Uo;
      }).map(s));
    }var e,
        r,
        i,
        u,
        o,
        a,
        l,
        c,
        f,
        s,
        h,
        p,
        g = 10,
        v = g,
        d = 90,
        y = 360,
        m = 2.5;return n.lines = function () {
      return t().map(function (n) {
        return { type: "LineString", coordinates: n };
      });
    }, n.outline = function () {
      return { type: "Polygon", coordinates: [h(u).concat(p(l).slice(1), h(i).reverse().slice(1), p(c).reverse().slice(1))] };
    }, n.extent = function (t) {
      return arguments.length ? n.majorExtent(t).minorExtent(t) : n.minorExtent();
    }, n.majorExtent = function (t) {
      return arguments.length ? (u = +t[0][0], i = +t[1][0], c = +t[0][1], l = +t[1][1], u > i && (t = u, u = i, i = t), c > l && (t = c, c = l, l = t), n.precision(m)) : [[u, c], [i, l]];
    }, n.minorExtent = function (t) {
      return arguments.length ? (r = +t[0][0], e = +t[1][0], a = +t[0][1], o = +t[1][1], r > e && (t = r, r = e, e = t), a > o && (t = a, a = o, o = t), n.precision(m)) : [[r, a], [e, o]];
    }, n.step = function (t) {
      return arguments.length ? n.majorStep(t).minorStep(t) : n.minorStep();
    }, n.majorStep = function (t) {
      return arguments.length ? (d = +t[0], y = +t[1], n) : [d, y];
    }, n.minorStep = function (t) {
      return arguments.length ? (g = +t[0], v = +t[1], n) : [g, v];
    }, n.precision = function (t) {
      return arguments.length ? (m = +t, f = ye(a, o, 90), s = me(r, e, m), h = ye(c, l, 90), p = me(u, i, m), n) : m;
    }, n.majorExtent([[-180, -90 + Uo], [180, 90 - Uo]]).minorExtent([[-180, -80 - Uo], [180, 80 + Uo]]);
  }, ao.geo.greatArc = function () {
    function n() {
      return { type: "LineString", coordinates: [t || r.apply(this, arguments), e || i.apply(this, arguments)] };
    }var t,
        e,
        r = Me,
        i = xe;return n.distance = function () {
      return ao.geo.distance(t || r.apply(this, arguments), e || i.apply(this, arguments));
    }, n.source = function (e) {
      return arguments.length ? (r = e, t = "function" == typeof e ? null : e, n) : r;
    }, n.target = function (t) {
      return arguments.length ? (i = t, e = "function" == typeof t ? null : t, n) : i;
    }, n.precision = function () {
      return arguments.length ? n : 0;
    }, n;
  }, ao.geo.interpolate = function (n, t) {
    return be(n[0] * Yo, n[1] * Yo, t[0] * Yo, t[1] * Yo);
  }, ao.geo.length = function (n) {
    return Ja = 0, ao.geo.stream(n, Ga), Ja;
  };var Ja,
      Ga = { sphere: b, point: b, lineStart: _e, lineEnd: b, polygonStart: b, polygonEnd: b },
      Ka = we(function (n) {
    return Math.sqrt(2 / (1 + n));
  }, function (n) {
    return 2 * Math.asin(n / 2);
  });(ao.geo.azimuthalEqualArea = function () {
    return oe(Ka);
  }).raw = Ka;var Qa = we(function (n) {
    var t = Math.acos(n);return t && t / Math.sin(t);
  }, m);(ao.geo.azimuthalEquidistant = function () {
    return oe(Qa);
  }).raw = Qa, (ao.geo.conicConformal = function () {
    return Vt(Se);
  }).raw = Se, (ao.geo.conicEquidistant = function () {
    return Vt(ke);
  }).raw = ke;var nl = we(function (n) {
    return 1 / n;
  }, Math.atan);(ao.geo.gnomonic = function () {
    return oe(nl);
  }).raw = nl, Ne.invert = function (n, t) {
    return [n, 2 * Math.atan(Math.exp(t)) - Io];
  }, (ao.geo.mercator = function () {
    return Ee(Ne);
  }).raw = Ne;var tl = we(function () {
    return 1;
  }, Math.asin);(ao.geo.orthographic = function () {
    return oe(tl);
  }).raw = tl;var el = we(function (n) {
    return 1 / (1 + n);
  }, function (n) {
    return 2 * Math.atan(n);
  });(ao.geo.stereographic = function () {
    return oe(el);
  }).raw = el, Ae.invert = function (n, t) {
    return [-t, 2 * Math.atan(Math.exp(n)) - Io];
  }, (ao.geo.transverseMercator = function () {
    var n = Ee(Ae),
        t = n.center,
        e = n.rotate;return n.center = function (n) {
      return n ? t([-n[1], n[0]]) : (n = t(), [n[1], -n[0]]);
    }, n.rotate = function (n) {
      return n ? e([n[0], n[1], n.length > 2 ? n[2] + 90 : 90]) : (n = e(), [n[0], n[1], n[2] - 90]);
    }, e([0, 0, 90]);
  }).raw = Ae, ao.geom = {}, ao.geom.hull = function (n) {
    function t(n) {
      if (n.length < 3) return [];var t,
          i = En(e),
          u = En(r),
          o = n.length,
          a = [],
          l = [];for (t = 0; o > t; t++) {
        a.push([+i.call(this, n[t], t), +u.call(this, n[t], t), t]);
      }for (a.sort(qe), t = 0; o > t; t++) {
        l.push([a[t][0], -a[t][1]]);
      }var c = Le(a),
          f = Le(l),
          s = f[0] === c[0],
          h = f[f.length - 1] === c[c.length - 1],
          p = [];for (t = c.length - 1; t >= 0; --t) {
        p.push(n[a[c[t]][2]]);
      }for (t = +s; t < f.length - h; ++t) {
        p.push(n[a[f[t]][2]]);
      }return p;
    }var e = Ce,
        r = ze;return arguments.length ? t(n) : (t.x = function (n) {
      return arguments.length ? (e = n, t) : e;
    }, t.y = function (n) {
      return arguments.length ? (r = n, t) : r;
    }, t);
  }, ao.geom.polygon = function (n) {
    return ko(n, rl), n;
  };var rl = ao.geom.polygon.prototype = [];rl.area = function () {
    for (var n, t = -1, e = this.length, r = this[e - 1], i = 0; ++t < e;) {
      n = r, r = this[t], i += n[1] * r[0] - n[0] * r[1];
    }return .5 * i;
  }, rl.centroid = function (n) {
    var t,
        e,
        r = -1,
        i = this.length,
        u = 0,
        o = 0,
        a = this[i - 1];for (arguments.length || (n = -1 / (6 * this.area())); ++r < i;) {
      t = a, a = this[r], e = t[0] * a[1] - a[0] * t[1], u += (t[0] + a[0]) * e, o += (t[1] + a[1]) * e;
    }return [u * n, o * n];
  }, rl.clip = function (n) {
    for (var t, e, r, i, u, o, a = De(n), l = -1, c = this.length - De(this), f = this[c - 1]; ++l < c;) {
      for (t = n.slice(), n.length = 0, i = this[l], u = t[(r = t.length - a) - 1], e = -1; ++e < r;) {
        o = t[e], Te(o, f, i) ? (Te(u, f, i) || n.push(Re(u, o, f, i)), n.push(o)) : Te(u, f, i) && n.push(Re(u, o, f, i)), u = o;
      }a && n.push(n[0]), f = i;
    }return n;
  };var il,
      ul,
      ol,
      al,
      ll,
      cl = [],
      fl = [];Ye.prototype.prepare = function () {
    for (var n, t = this.edges, e = t.length; e--;) {
      n = t[e].edge, n.b && n.a || t.splice(e, 1);
    }return t.sort(Ve), t.length;
  }, tr.prototype = { start: function start() {
      return this.edge.l === this.site ? this.edge.a : this.edge.b;
    }, end: function end() {
      return this.edge.l === this.site ? this.edge.b : this.edge.a;
    } }, er.prototype = { insert: function insert(n, t) {
      var e, r, i;if (n) {
        if (t.P = n, t.N = n.N, n.N && (n.N.P = t), n.N = t, n.R) {
          for (n = n.R; n.L;) {
            n = n.L;
          }n.L = t;
        } else n.R = t;e = n;
      } else this._ ? (n = or(this._), t.P = null, t.N = n, n.P = n.L = t, e = n) : (t.P = t.N = null, this._ = t, e = null);for (t.L = t.R = null, t.U = e, t.C = !0, n = t; e && e.C;) {
        r = e.U, e === r.L ? (i = r.R, i && i.C ? (e.C = i.C = !1, r.C = !0, n = r) : (n === e.R && (ir(this, e), n = e, e = n.U), e.C = !1, r.C = !0, ur(this, r))) : (i = r.L, i && i.C ? (e.C = i.C = !1, r.C = !0, n = r) : (n === e.L && (ur(this, e), n = e, e = n.U), e.C = !1, r.C = !0, ir(this, r))), e = n.U;
      }this._.C = !1;
    }, remove: function remove(n) {
      n.N && (n.N.P = n.P), n.P && (n.P.N = n.N), n.N = n.P = null;var t,
          e,
          r,
          i = n.U,
          u = n.L,
          o = n.R;if (e = u ? o ? or(o) : u : o, i ? i.L === n ? i.L = e : i.R = e : this._ = e, u && o ? (r = e.C, e.C = n.C, e.L = u, u.U = e, e !== o ? (i = e.U, e.U = n.U, n = e.R, i.L = n, e.R = o, o.U = e) : (e.U = i, i = e, n = e.R)) : (r = n.C, n = e), n && (n.U = i), !r) {
        if (n && n.C) return void (n.C = !1);do {
          if (n === this._) break;if (n === i.L) {
            if (t = i.R, t.C && (t.C = !1, i.C = !0, ir(this, i), t = i.R), t.L && t.L.C || t.R && t.R.C) {
              t.R && t.R.C || (t.L.C = !1, t.C = !0, ur(this, t), t = i.R), t.C = i.C, i.C = t.R.C = !1, ir(this, i), n = this._;break;
            }
          } else if (t = i.L, t.C && (t.C = !1, i.C = !0, ur(this, i), t = i.L), t.L && t.L.C || t.R && t.R.C) {
            t.L && t.L.C || (t.R.C = !1, t.C = !0, ir(this, t), t = i.L), t.C = i.C, i.C = t.L.C = !1, ur(this, i), n = this._;break;
          }t.C = !0, n = i, i = i.U;
        } while (!n.C);n && (n.C = !1);
      }
    } }, ao.geom.voronoi = function (n) {
    function t(n) {
      var t = new Array(n.length),
          r = a[0][0],
          i = a[0][1],
          u = a[1][0],
          o = a[1][1];return ar(e(n), a).cells.forEach(function (e, a) {
        var l = e.edges,
            c = e.site,
            f = t[a] = l.length ? l.map(function (n) {
          var t = n.start();return [t.x, t.y];
        }) : c.x >= r && c.x <= u && c.y >= i && c.y <= o ? [[r, o], [u, o], [u, i], [r, i]] : [];f.point = n[a];
      }), t;
    }function e(n) {
      return n.map(function (n, t) {
        return { x: Math.round(u(n, t) / Uo) * Uo, y: Math.round(o(n, t) / Uo) * Uo, i: t };
      });
    }var r = Ce,
        i = ze,
        u = r,
        o = i,
        a = sl;return n ? t(n) : (t.links = function (n) {
      return ar(e(n)).edges.filter(function (n) {
        return n.l && n.r;
      }).map(function (t) {
        return { source: n[t.l.i], target: n[t.r.i] };
      });
    }, t.triangles = function (n) {
      var t = [];return ar(e(n)).cells.forEach(function (e, r) {
        for (var i, u, o = e.site, a = e.edges.sort(Ve), l = -1, c = a.length, f = a[c - 1].edge, s = f.l === o ? f.r : f.l; ++l < c;) {
          i = f, u = s, f = a[l].edge, s = f.l === o ? f.r : f.l, r < u.i && r < s.i && cr(o, u, s) < 0 && t.push([n[r], n[u.i], n[s.i]]);
        }
      }), t;
    }, t.x = function (n) {
      return arguments.length ? (u = En(r = n), t) : r;
    }, t.y = function (n) {
      return arguments.length ? (o = En(i = n), t) : i;
    }, t.clipExtent = function (n) {
      return arguments.length ? (a = null == n ? sl : n, t) : a === sl ? null : a;
    }, t.size = function (n) {
      return arguments.length ? t.clipExtent(n && [[0, 0], n]) : a === sl ? null : a && a[1];
    }, t);
  };var sl = [[-1e6, -1e6], [1e6, 1e6]];ao.geom.delaunay = function (n) {
    return ao.geom.voronoi().triangles(n);
  }, ao.geom.quadtree = function (n, t, e, r, i) {
    function u(n) {
      function u(n, t, e, r, i, u, o, a) {
        if (!isNaN(e) && !isNaN(r)) if (n.leaf) {
          var l = n.x,
              f = n.y;if (null != l) {
            if (xo(l - e) + xo(f - r) < .01) c(n, t, e, r, i, u, o, a);else {
              var s = n.point;n.x = n.y = n.point = null, c(n, s, l, f, i, u, o, a), c(n, t, e, r, i, u, o, a);
            }
          } else n.x = e, n.y = r, n.point = t;
        } else c(n, t, e, r, i, u, o, a);
      }function c(n, t, e, r, i, o, a, l) {
        var c = .5 * (i + a),
            f = .5 * (o + l),
            s = e >= c,
            h = r >= f,
            p = h << 1 | s;n.leaf = !1, n = n.nodes[p] || (n.nodes[p] = hr()), s ? i = c : a = c, h ? o = f : l = f, u(n, t, e, r, i, o, a, l);
      }var f,
          s,
          h,
          p,
          g,
          v,
          d,
          y,
          m,
          M = En(a),
          x = En(l);if (null != t) v = t, d = e, y = r, m = i;else if (y = m = -(v = d = 1 / 0), s = [], h = [], g = n.length, o) for (p = 0; g > p; ++p) {
        f = n[p], f.x < v && (v = f.x), f.y < d && (d = f.y), f.x > y && (y = f.x), f.y > m && (m = f.y), s.push(f.x), h.push(f.y);
      } else for (p = 0; g > p; ++p) {
        var b = +M(f = n[p], p),
            _ = +x(f, p);v > b && (v = b), d > _ && (d = _), b > y && (y = b), _ > m && (m = _), s.push(b), h.push(_);
      }var w = y - v,
          S = m - d;w > S ? m = d + w : y = v + S;var k = hr();if (k.add = function (n) {
        u(k, n, +M(n, ++p), +x(n, p), v, d, y, m);
      }, k.visit = function (n) {
        pr(n, k, v, d, y, m);
      }, k.find = function (n) {
        return gr(k, n[0], n[1], v, d, y, m);
      }, p = -1, null == t) {
        for (; ++p < g;) {
          u(k, n[p], s[p], h[p], v, d, y, m);
        }--p;
      } else n.forEach(k.add);return s = h = n = f = null, k;
    }var o,
        a = Ce,
        l = ze;return (o = arguments.length) ? (a = fr, l = sr, 3 === o && (i = e, r = t, e = t = 0), u(n)) : (u.x = function (n) {
      return arguments.length ? (a = n, u) : a;
    }, u.y = function (n) {
      return arguments.length ? (l = n, u) : l;
    }, u.extent = function (n) {
      return arguments.length ? (null == n ? t = e = r = i = null : (t = +n[0][0], e = +n[0][1], r = +n[1][0], i = +n[1][1]), u) : null == t ? null : [[t, e], [r, i]];
    }, u.size = function (n) {
      return arguments.length ? (null == n ? t = e = r = i = null : (t = e = 0, r = +n[0], i = +n[1]), u) : null == t ? null : [r - t, i - e];
    }, u);
  }, ao.interpolateRgb = vr, ao.interpolateObject = dr, ao.interpolateNumber = yr, ao.interpolateString = mr;var hl = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      pl = new RegExp(hl.source, "g");ao.interpolate = Mr, ao.interpolators = [function (n, t) {
    var e = typeof t === "undefined" ? "undefined" : _typeof(t);return ("string" === e ? ua.has(t.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(t) ? vr : mr : t instanceof an ? vr : Array.isArray(t) ? xr : "object" === e && isNaN(t) ? dr : yr)(n, t);
  }], ao.interpolateArray = xr;var gl = function gl() {
    return m;
  },
      vl = ao.map({ linear: gl, poly: Er, quad: function quad() {
      return Sr;
    }, cubic: function cubic() {
      return kr;
    }, sin: function sin() {
      return Ar;
    }, exp: function exp() {
      return Cr;
    }, circle: function circle() {
      return zr;
    }, elastic: Lr, back: qr, bounce: function bounce() {
      return Tr;
    } }),
      dl = ao.map({ "in": m, out: _r, "in-out": wr, "out-in": function outIn(n) {
      return wr(_r(n));
    } });ao.ease = function (n) {
    var t = n.indexOf("-"),
        e = t >= 0 ? n.slice(0, t) : n,
        r = t >= 0 ? n.slice(t + 1) : "in";return e = vl.get(e) || gl, r = dl.get(r) || m, br(r(e.apply(null, lo.call(arguments, 1))));
  }, ao.interpolateHcl = Rr, ao.interpolateHsl = Dr, ao.interpolateLab = Pr, ao.interpolateRound = Ur, ao.transform = function (n) {
    var t = fo.createElementNS(ao.ns.prefix.svg, "g");return (ao.transform = function (n) {
      if (null != n) {
        t.setAttribute("transform", n);var e = t.transform.baseVal.consolidate();
      }return new jr(e ? e.matrix : yl);
    })(n);
  }, jr.prototype.toString = function () {
    return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")";
  };var yl = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 };ao.interpolateTransform = $r, ao.layout = {}, ao.layout.bundle = function () {
    return function (n) {
      for (var t = [], e = -1, r = n.length; ++e < r;) {
        t.push(Jr(n[e]));
      }return t;
    };
  }, ao.layout.chord = function () {
    function n() {
      var n,
          c,
          s,
          h,
          p,
          g = {},
          v = [],
          d = ao.range(u),
          y = [];for (e = [], r = [], n = 0, h = -1; ++h < u;) {
        for (c = 0, p = -1; ++p < u;) {
          c += i[h][p];
        }v.push(c), y.push(ao.range(u)), n += c;
      }for (o && d.sort(function (n, t) {
        return o(v[n], v[t]);
      }), a && y.forEach(function (n, t) {
        n.sort(function (n, e) {
          return a(i[t][n], i[t][e]);
        });
      }), n = (Ho - f * u) / n, c = 0, h = -1; ++h < u;) {
        for (s = c, p = -1; ++p < u;) {
          var m = d[h],
              M = y[m][p],
              x = i[m][M],
              b = c,
              _ = c += x * n;g[m + "-" + M] = { index: m, subindex: M, startAngle: b, endAngle: _, value: x };
        }r[m] = { index: m, startAngle: s, endAngle: c, value: v[m] }, c += f;
      }for (h = -1; ++h < u;) {
        for (p = h - 1; ++p < u;) {
          var w = g[h + "-" + p],
              S = g[p + "-" + h];(w.value || S.value) && e.push(w.value < S.value ? { source: S, target: w } : { source: w, target: S });
        }
      }l && t();
    }function t() {
      e.sort(function (n, t) {
        return l((n.source.value + n.target.value) / 2, (t.source.value + t.target.value) / 2);
      });
    }var e,
        r,
        i,
        u,
        o,
        a,
        l,
        c = {},
        f = 0;return c.matrix = function (n) {
      return arguments.length ? (u = (i = n) && i.length, e = r = null, c) : i;
    }, c.padding = function (n) {
      return arguments.length ? (f = n, e = r = null, c) : f;
    }, c.sortGroups = function (n) {
      return arguments.length ? (o = n, e = r = null, c) : o;
    }, c.sortSubgroups = function (n) {
      return arguments.length ? (a = n, e = null, c) : a;
    }, c.sortChords = function (n) {
      return arguments.length ? (l = n, e && t(), c) : l;
    }, c.chords = function () {
      return e || n(), e;
    }, c.groups = function () {
      return r || n(), r;
    }, c;
  }, ao.layout.force = function () {
    function n(n) {
      return function (t, e, r, i) {
        if (t.point !== n) {
          var u = t.cx - n.x,
              o = t.cy - n.y,
              a = i - e,
              l = u * u + o * o;if (l > a * a / y) {
            if (v > l) {
              var c = t.charge / l;n.px -= u * c, n.py -= o * c;
            }return !0;
          }if (t.point && l && v > l) {
            var c = t.pointCharge / l;n.px -= u * c, n.py -= o * c;
          }
        }return !t.charge;
      };
    }function t(n) {
      n.px = ao.event.x, n.py = ao.event.y, l.resume();
    }var e,
        r,
        i,
        u,
        o,
        a,
        l = {},
        c = ao.dispatch("start", "tick", "end"),
        f = [1, 1],
        s = .9,
        h = ml,
        p = Ml,
        g = -30,
        v = xl,
        d = .1,
        y = .64,
        M = [],
        x = [];return l.tick = function () {
      if ((i *= .99) < .005) return e = null, c.end({ type: "end", alpha: i = 0 }), !0;var t,
          r,
          l,
          h,
          p,
          v,
          y,
          m,
          b,
          _ = M.length,
          w = x.length;for (r = 0; w > r; ++r) {
        l = x[r], h = l.source, p = l.target, m = p.x - h.x, b = p.y - h.y, (v = m * m + b * b) && (v = i * o[r] * ((v = Math.sqrt(v)) - u[r]) / v, m *= v, b *= v, p.x -= m * (y = h.weight + p.weight ? h.weight / (h.weight + p.weight) : .5), p.y -= b * y, h.x += m * (y = 1 - y), h.y += b * y);
      }if ((y = i * d) && (m = f[0] / 2, b = f[1] / 2, r = -1, y)) for (; ++r < _;) {
        l = M[r], l.x += (m - l.x) * y, l.y += (b - l.y) * y;
      }if (g) for (ri(t = ao.geom.quadtree(M), i, a), r = -1; ++r < _;) {
        (l = M[r]).fixed || t.visit(n(l));
      }for (r = -1; ++r < _;) {
        l = M[r], l.fixed ? (l.x = l.px, l.y = l.py) : (l.x -= (l.px - (l.px = l.x)) * s, l.y -= (l.py - (l.py = l.y)) * s);
      }c.tick({ type: "tick", alpha: i });
    }, l.nodes = function (n) {
      return arguments.length ? (M = n, l) : M;
    }, l.links = function (n) {
      return arguments.length ? (x = n, l) : x;
    }, l.size = function (n) {
      return arguments.length ? (f = n, l) : f;
    }, l.linkDistance = function (n) {
      return arguments.length ? (h = "function" == typeof n ? n : +n, l) : h;
    }, l.distance = l.linkDistance, l.linkStrength = function (n) {
      return arguments.length ? (p = "function" == typeof n ? n : +n, l) : p;
    }, l.friction = function (n) {
      return arguments.length ? (s = +n, l) : s;
    }, l.charge = function (n) {
      return arguments.length ? (g = "function" == typeof n ? n : +n, l) : g;
    }, l.chargeDistance = function (n) {
      return arguments.length ? (v = n * n, l) : Math.sqrt(v);
    }, l.gravity = function (n) {
      return arguments.length ? (d = +n, l) : d;
    }, l.theta = function (n) {
      return arguments.length ? (y = n * n, l) : Math.sqrt(y);
    }, l.alpha = function (n) {
      return arguments.length ? (n = +n, i ? n > 0 ? i = n : (e.c = null, e.t = NaN, e = null, c.end({ type: "end", alpha: i = 0 })) : n > 0 && (c.start({ type: "start", alpha: i = n }), e = qn(l.tick)), l) : i;
    }, l.start = function () {
      function n(n, r) {
        if (!e) {
          for (e = new Array(i), l = 0; i > l; ++l) {
            e[l] = [];
          }for (l = 0; c > l; ++l) {
            var u = x[l];e[u.source.index].push(u.target), e[u.target.index].push(u.source);
          }
        }for (var o, a = e[t], l = -1, f = a.length; ++l < f;) {
          if (!isNaN(o = a[l][n])) return o;
        }return Math.random() * r;
      }var t,
          e,
          r,
          i = M.length,
          c = x.length,
          s = f[0],
          v = f[1];for (t = 0; i > t; ++t) {
        (r = M[t]).index = t, r.weight = 0;
      }for (t = 0; c > t; ++t) {
        r = x[t], "number" == typeof r.source && (r.source = M[r.source]), "number" == typeof r.target && (r.target = M[r.target]), ++r.source.weight, ++r.target.weight;
      }for (t = 0; i > t; ++t) {
        r = M[t], isNaN(r.x) && (r.x = n("x", s)), isNaN(r.y) && (r.y = n("y", v)), isNaN(r.px) && (r.px = r.x), isNaN(r.py) && (r.py = r.y);
      }if (u = [], "function" == typeof h) for (t = 0; c > t; ++t) {
        u[t] = +h.call(this, x[t], t);
      } else for (t = 0; c > t; ++t) {
        u[t] = h;
      }if (o = [], "function" == typeof p) for (t = 0; c > t; ++t) {
        o[t] = +p.call(this, x[t], t);
      } else for (t = 0; c > t; ++t) {
        o[t] = p;
      }if (a = [], "function" == typeof g) for (t = 0; i > t; ++t) {
        a[t] = +g.call(this, M[t], t);
      } else for (t = 0; i > t; ++t) {
        a[t] = g;
      }return l.resume();
    }, l.resume = function () {
      return l.alpha(.1);
    }, l.stop = function () {
      return l.alpha(0);
    }, l.drag = function () {
      return r || (r = ao.behavior.drag().origin(m).on("dragstart.force", Qr).on("drag.force", t).on("dragend.force", ni)), arguments.length ? void this.on("mouseover.force", ti).on("mouseout.force", ei).call(r) : r;
    }, ao.rebind(l, c, "on");
  };var ml = 20,
      Ml = 1,
      xl = 1 / 0;ao.layout.hierarchy = function () {
    function n(i) {
      var u,
          o = [i],
          a = [];for (i.depth = 0; null != (u = o.pop());) {
        if (a.push(u), (c = e.call(n, u, u.depth)) && (l = c.length)) {
          for (var l, c, f; --l >= 0;) {
            o.push(f = c[l]), f.parent = u, f.depth = u.depth + 1;
          }r && (u.value = 0), u.children = c;
        } else r && (u.value = +r.call(n, u, u.depth) || 0), delete u.children;
      }return oi(i, function (n) {
        var e, i;t && (e = n.children) && e.sort(t), r && (i = n.parent) && (i.value += n.value);
      }), a;
    }var t = ci,
        e = ai,
        r = li;return n.sort = function (e) {
      return arguments.length ? (t = e, n) : t;
    }, n.children = function (t) {
      return arguments.length ? (e = t, n) : e;
    }, n.value = function (t) {
      return arguments.length ? (r = t, n) : r;
    }, n.revalue = function (t) {
      return r && (ui(t, function (n) {
        n.children && (n.value = 0);
      }), oi(t, function (t) {
        var e;t.children || (t.value = +r.call(n, t, t.depth) || 0), (e = t.parent) && (e.value += t.value);
      })), t;
    }, n;
  }, ao.layout.partition = function () {
    function n(t, e, r, i) {
      var u = t.children;if (t.x = e, t.y = t.depth * i, t.dx = r, t.dy = i, u && (o = u.length)) {
        var o,
            a,
            l,
            c = -1;for (r = t.value ? r / t.value : 0; ++c < o;) {
          n(a = u[c], e, l = a.value * r, i), e += l;
        }
      }
    }function t(n) {
      var e = n.children,
          r = 0;if (e && (i = e.length)) for (var i, u = -1; ++u < i;) {
        r = Math.max(r, t(e[u]));
      }return 1 + r;
    }function e(e, u) {
      var o = r.call(this, e, u);return n(o[0], 0, i[0], i[1] / t(o[0])), o;
    }var r = ao.layout.hierarchy(),
        i = [1, 1];return e.size = function (n) {
      return arguments.length ? (i = n, e) : i;
    }, ii(e, r);
  }, ao.layout.pie = function () {
    function n(o) {
      var a,
          l = o.length,
          c = o.map(function (e, r) {
        return +t.call(n, e, r);
      }),
          f = +("function" == typeof r ? r.apply(this, arguments) : r),
          s = ("function" == typeof i ? i.apply(this, arguments) : i) - f,
          h = Math.min(Math.abs(s) / l, +("function" == typeof u ? u.apply(this, arguments) : u)),
          p = h * (0 > s ? -1 : 1),
          g = ao.sum(c),
          v = g ? (s - l * p) / g : 0,
          d = ao.range(l),
          y = [];return null != e && d.sort(e === bl ? function (n, t) {
        return c[t] - c[n];
      } : function (n, t) {
        return e(o[n], o[t]);
      }), d.forEach(function (n) {
        y[n] = { data: o[n], value: a = c[n], startAngle: f, endAngle: f += a * v + p, padAngle: h };
      }), y;
    }var t = Number,
        e = bl,
        r = 0,
        i = Ho,
        u = 0;return n.value = function (e) {
      return arguments.length ? (t = e, n) : t;
    }, n.sort = function (t) {
      return arguments.length ? (e = t, n) : e;
    }, n.startAngle = function (t) {
      return arguments.length ? (r = t, n) : r;
    }, n.endAngle = function (t) {
      return arguments.length ? (i = t, n) : i;
    }, n.padAngle = function (t) {
      return arguments.length ? (u = t, n) : u;
    }, n;
  };var bl = {};ao.layout.stack = function () {
    function n(a, l) {
      if (!(h = a.length)) return a;var c = a.map(function (e, r) {
        return t.call(n, e, r);
      }),
          f = c.map(function (t) {
        return t.map(function (t, e) {
          return [u.call(n, t, e), o.call(n, t, e)];
        });
      }),
          s = e.call(n, f, l);c = ao.permute(c, s), f = ao.permute(f, s);var h,
          p,
          g,
          v,
          d = r.call(n, f, l),
          y = c[0].length;for (g = 0; y > g; ++g) {
        for (i.call(n, c[0][g], v = d[g], f[0][g][1]), p = 1; h > p; ++p) {
          i.call(n, c[p][g], v += f[p - 1][g][1], f[p][g][1]);
        }
      }return a;
    }var t = m,
        e = gi,
        r = vi,
        i = pi,
        u = si,
        o = hi;return n.values = function (e) {
      return arguments.length ? (t = e, n) : t;
    }, n.order = function (t) {
      return arguments.length ? (e = "function" == typeof t ? t : _l.get(t) || gi, n) : e;
    }, n.offset = function (t) {
      return arguments.length ? (r = "function" == typeof t ? t : wl.get(t) || vi, n) : r;
    }, n.x = function (t) {
      return arguments.length ? (u = t, n) : u;
    }, n.y = function (t) {
      return arguments.length ? (o = t, n) : o;
    }, n.out = function (t) {
      return arguments.length ? (i = t, n) : i;
    }, n;
  };var _l = ao.map({ "inside-out": function insideOut(n) {
      var t,
          e,
          r = n.length,
          i = n.map(di),
          u = n.map(yi),
          o = ao.range(r).sort(function (n, t) {
        return i[n] - i[t];
      }),
          a = 0,
          l = 0,
          c = [],
          f = [];for (t = 0; r > t; ++t) {
        e = o[t], l > a ? (a += u[e], c.push(e)) : (l += u[e], f.push(e));
      }return f.reverse().concat(c);
    }, reverse: function reverse(n) {
      return ao.range(n.length).reverse();
    }, "default": gi }),
      wl = ao.map({ silhouette: function silhouette(n) {
      var t,
          e,
          r,
          i = n.length,
          u = n[0].length,
          o = [],
          a = 0,
          l = [];for (e = 0; u > e; ++e) {
        for (t = 0, r = 0; i > t; t++) {
          r += n[t][e][1];
        }r > a && (a = r), o.push(r);
      }for (e = 0; u > e; ++e) {
        l[e] = (a - o[e]) / 2;
      }return l;
    }, wiggle: function wiggle(n) {
      var t,
          e,
          r,
          i,
          u,
          o,
          a,
          l,
          c,
          f = n.length,
          s = n[0],
          h = s.length,
          p = [];for (p[0] = l = c = 0, e = 1; h > e; ++e) {
        for (t = 0, i = 0; f > t; ++t) {
          i += n[t][e][1];
        }for (t = 0, u = 0, a = s[e][0] - s[e - 1][0]; f > t; ++t) {
          for (r = 0, o = (n[t][e][1] - n[t][e - 1][1]) / (2 * a); t > r; ++r) {
            o += (n[r][e][1] - n[r][e - 1][1]) / a;
          }u += o * n[t][e][1];
        }p[e] = l -= i ? u / i * a : 0, c > l && (c = l);
      }for (e = 0; h > e; ++e) {
        p[e] -= c;
      }return p;
    }, expand: function expand(n) {
      var t,
          e,
          r,
          i = n.length,
          u = n[0].length,
          o = 1 / i,
          a = [];for (e = 0; u > e; ++e) {
        for (t = 0, r = 0; i > t; t++) {
          r += n[t][e][1];
        }if (r) for (t = 0; i > t; t++) {
          n[t][e][1] /= r;
        } else for (t = 0; i > t; t++) {
          n[t][e][1] = o;
        }
      }for (e = 0; u > e; ++e) {
        a[e] = 0;
      }return a;
    }, zero: vi });ao.layout.histogram = function () {
    function n(n, u) {
      for (var o, a, l = [], c = n.map(e, this), f = r.call(this, c, u), s = i.call(this, f, c, u), u = -1, h = c.length, p = s.length - 1, g = t ? 1 : 1 / h; ++u < p;) {
        o = l[u] = [], o.dx = s[u + 1] - (o.x = s[u]), o.y = 0;
      }if (p > 0) for (u = -1; ++u < h;) {
        a = c[u], a >= f[0] && a <= f[1] && (o = l[ao.bisect(s, a, 1, p) - 1], o.y += g, o.push(n[u]));
      }return l;
    }var t = !0,
        e = Number,
        r = bi,
        i = Mi;return n.value = function (t) {
      return arguments.length ? (e = t, n) : e;
    }, n.range = function (t) {
      return arguments.length ? (r = En(t), n) : r;
    }, n.bins = function (t) {
      return arguments.length ? (i = "number" == typeof t ? function (n) {
        return xi(n, t);
      } : En(t), n) : i;
    }, n.frequency = function (e) {
      return arguments.length ? (t = !!e, n) : t;
    }, n;
  }, ao.layout.pack = function () {
    function n(n, u) {
      var o = e.call(this, n, u),
          a = o[0],
          l = i[0],
          c = i[1],
          f = null == t ? Math.sqrt : "function" == typeof t ? t : function () {
        return t;
      };if (a.x = a.y = 0, oi(a, function (n) {
        n.r = +f(n.value);
      }), oi(a, Ni), r) {
        var s = r * (t ? 1 : Math.max(2 * a.r / l, 2 * a.r / c)) / 2;oi(a, function (n) {
          n.r += s;
        }), oi(a, Ni), oi(a, function (n) {
          n.r -= s;
        });
      }return Ci(a, l / 2, c / 2, t ? 1 : 1 / Math.max(2 * a.r / l, 2 * a.r / c)), o;
    }var t,
        e = ao.layout.hierarchy().sort(_i),
        r = 0,
        i = [1, 1];return n.size = function (t) {
      return arguments.length ? (i = t, n) : i;
    }, n.radius = function (e) {
      return arguments.length ? (t = null == e || "function" == typeof e ? e : +e, n) : t;
    }, n.padding = function (t) {
      return arguments.length ? (r = +t, n) : r;
    }, ii(n, e);
  }, ao.layout.tree = function () {
    function n(n, i) {
      var f = o.call(this, n, i),
          s = f[0],
          h = t(s);if (oi(h, e), h.parent.m = -h.z, ui(h, r), c) ui(s, u);else {
        var p = s,
            g = s,
            v = s;ui(s, function (n) {
          n.x < p.x && (p = n), n.x > g.x && (g = n), n.depth > v.depth && (v = n);
        });var d = a(p, g) / 2 - p.x,
            y = l[0] / (g.x + a(g, p) / 2 + d),
            m = l[1] / (v.depth || 1);ui(s, function (n) {
          n.x = (n.x + d) * y, n.y = n.depth * m;
        });
      }return f;
    }function t(n) {
      for (var t, e = { A: null, children: [n] }, r = [e]; null != (t = r.pop());) {
        for (var i, u = t.children, o = 0, a = u.length; a > o; ++o) {
          r.push((u[o] = i = { _: u[o], parent: t, children: (i = u[o].children) && i.slice() || [], A: null, a: null, z: 0, m: 0, c: 0, s: 0, t: null, i: o }).a = i);
        }
      }return e.children[0];
    }function e(n) {
      var t = n.children,
          e = n.parent.children,
          r = n.i ? e[n.i - 1] : null;if (t.length) {
        Di(n);var u = (t[0].z + t[t.length - 1].z) / 2;r ? (n.z = r.z + a(n._, r._), n.m = n.z - u) : n.z = u;
      } else r && (n.z = r.z + a(n._, r._));n.parent.A = i(n, r, n.parent.A || e[0]);
    }function r(n) {
      n._.x = n.z + n.parent.m, n.m += n.parent.m;
    }function i(n, t, e) {
      if (t) {
        for (var r, i = n, u = n, o = t, l = i.parent.children[0], c = i.m, f = u.m, s = o.m, h = l.m; o = Ti(o), i = qi(i), o && i;) {
          l = qi(l), u = Ti(u), u.a = n, r = o.z + s - i.z - c + a(o._, i._), r > 0 && (Ri(Pi(o, n, e), n, r), c += r, f += r), s += o.m, c += i.m, h += l.m, f += u.m;
        }o && !Ti(u) && (u.t = o, u.m += s - f), i && !qi(l) && (l.t = i, l.m += c - h, e = n);
      }return e;
    }function u(n) {
      n.x *= l[0], n.y = n.depth * l[1];
    }var o = ao.layout.hierarchy().sort(null).value(null),
        a = Li,
        l = [1, 1],
        c = null;return n.separation = function (t) {
      return arguments.length ? (a = t, n) : a;
    }, n.size = function (t) {
      return arguments.length ? (c = null == (l = t) ? u : null, n) : c ? null : l;
    }, n.nodeSize = function (t) {
      return arguments.length ? (c = null == (l = t) ? null : u, n) : c ? l : null;
    }, ii(n, o);
  }, ao.layout.cluster = function () {
    function n(n, u) {
      var o,
          a = t.call(this, n, u),
          l = a[0],
          c = 0;oi(l, function (n) {
        var t = n.children;t && t.length ? (n.x = ji(t), n.y = Ui(t)) : (n.x = o ? c += e(n, o) : 0, n.y = 0, o = n);
      });var f = Fi(l),
          s = Hi(l),
          h = f.x - e(f, s) / 2,
          p = s.x + e(s, f) / 2;return oi(l, i ? function (n) {
        n.x = (n.x - l.x) * r[0], n.y = (l.y - n.y) * r[1];
      } : function (n) {
        n.x = (n.x - h) / (p - h) * r[0], n.y = (1 - (l.y ? n.y / l.y : 1)) * r[1];
      }), a;
    }var t = ao.layout.hierarchy().sort(null).value(null),
        e = Li,
        r = [1, 1],
        i = !1;return n.separation = function (t) {
      return arguments.length ? (e = t, n) : e;
    }, n.size = function (t) {
      return arguments.length ? (i = null == (r = t), n) : i ? null : r;
    }, n.nodeSize = function (t) {
      return arguments.length ? (i = null != (r = t), n) : i ? r : null;
    }, ii(n, t);
  }, ao.layout.treemap = function () {
    function n(n, t) {
      for (var e, r, i = -1, u = n.length; ++i < u;) {
        r = (e = n[i]).value * (0 > t ? 0 : t), e.area = isNaN(r) || 0 >= r ? 0 : r;
      }
    }function t(e) {
      var u = e.children;if (u && u.length) {
        var o,
            a,
            l,
            c = s(e),
            f = [],
            h = u.slice(),
            g = 1 / 0,
            v = "slice" === p ? c.dx : "dice" === p ? c.dy : "slice-dice" === p ? 1 & e.depth ? c.dy : c.dx : Math.min(c.dx, c.dy);for (n(h, c.dx * c.dy / e.value), f.area = 0; (l = h.length) > 0;) {
          f.push(o = h[l - 1]), f.area += o.area, "squarify" !== p || (a = r(f, v)) <= g ? (h.pop(), g = a) : (f.area -= f.pop().area, i(f, v, c, !1), v = Math.min(c.dx, c.dy), f.length = f.area = 0, g = 1 / 0);
        }f.length && (i(f, v, c, !0), f.length = f.area = 0), u.forEach(t);
      }
    }function e(t) {
      var r = t.children;if (r && r.length) {
        var u,
            o = s(t),
            a = r.slice(),
            l = [];for (n(a, o.dx * o.dy / t.value), l.area = 0; u = a.pop();) {
          l.push(u), l.area += u.area, null != u.z && (i(l, u.z ? o.dx : o.dy, o, !a.length), l.length = l.area = 0);
        }r.forEach(e);
      }
    }function r(n, t) {
      for (var e, r = n.area, i = 0, u = 1 / 0, o = -1, a = n.length; ++o < a;) {
        (e = n[o].area) && (u > e && (u = e), e > i && (i = e));
      }return r *= r, t *= t, r ? Math.max(t * i * g / r, r / (t * u * g)) : 1 / 0;
    }function i(n, t, e, r) {
      var i,
          u = -1,
          o = n.length,
          a = e.x,
          c = e.y,
          f = t ? l(n.area / t) : 0;
      if (t == e.dx) {
        for ((r || f > e.dy) && (f = e.dy); ++u < o;) {
          i = n[u], i.x = a, i.y = c, i.dy = f, a += i.dx = Math.min(e.x + e.dx - a, f ? l(i.area / f) : 0);
        }i.z = !0, i.dx += e.x + e.dx - a, e.y += f, e.dy -= f;
      } else {
        for ((r || f > e.dx) && (f = e.dx); ++u < o;) {
          i = n[u], i.x = a, i.y = c, i.dx = f, c += i.dy = Math.min(e.y + e.dy - c, f ? l(i.area / f) : 0);
        }i.z = !1, i.dy += e.y + e.dy - c, e.x += f, e.dx -= f;
      }
    }function u(r) {
      var i = o || a(r),
          u = i[0];return u.x = u.y = 0, u.value ? (u.dx = c[0], u.dy = c[1]) : u.dx = u.dy = 0, o && a.revalue(u), n([u], u.dx * u.dy / u.value), (o ? e : t)(u), h && (o = i), i;
    }var o,
        a = ao.layout.hierarchy(),
        l = Math.round,
        c = [1, 1],
        f = null,
        s = Oi,
        h = !1,
        p = "squarify",
        g = .5 * (1 + Math.sqrt(5));return u.size = function (n) {
      return arguments.length ? (c = n, u) : c;
    }, u.padding = function (n) {
      function t(t) {
        var e = n.call(u, t, t.depth);return null == e ? Oi(t) : Ii(t, "number" == typeof e ? [e, e, e, e] : e);
      }function e(t) {
        return Ii(t, n);
      }if (!arguments.length) return f;var r;return s = null == (f = n) ? Oi : "function" == (r = typeof n === "undefined" ? "undefined" : _typeof(n)) ? t : "number" === r ? (n = [n, n, n, n], e) : e, u;
    }, u.round = function (n) {
      return arguments.length ? (l = n ? Math.round : Number, u) : l != Number;
    }, u.sticky = function (n) {
      return arguments.length ? (h = n, o = null, u) : h;
    }, u.ratio = function (n) {
      return arguments.length ? (g = n, u) : g;
    }, u.mode = function (n) {
      return arguments.length ? (p = n + "", u) : p;
    }, ii(u, a);
  }, ao.random = { normal: function normal(n, t) {
      var e = arguments.length;return 2 > e && (t = 1), 1 > e && (n = 0), function () {
        var e, r, i;do {
          e = 2 * Math.random() - 1, r = 2 * Math.random() - 1, i = e * e + r * r;
        } while (!i || i > 1);return n + t * e * Math.sqrt(-2 * Math.log(i) / i);
      };
    }, logNormal: function logNormal() {
      var n = ao.random.normal.apply(ao, arguments);return function () {
        return Math.exp(n());
      };
    }, bates: function bates(n) {
      var t = ao.random.irwinHall(n);return function () {
        return t() / n;
      };
    }, irwinHall: function irwinHall(n) {
      return function () {
        for (var t = 0, e = 0; n > e; e++) {
          t += Math.random();
        }return t;
      };
    } }, ao.scale = {};var Sl = { floor: m, ceil: m };ao.scale.linear = function () {
    return Wi([0, 1], [0, 1], Mr, !1);
  };var kl = { s: 1, g: 1, p: 1, r: 1, e: 1 };ao.scale.log = function () {
    return ru(ao.scale.linear().domain([0, 1]), 10, !0, [1, 10]);
  };var Nl = ao.format(".0e"),
      El = { floor: function floor(n) {
      return -Math.ceil(-n);
    }, ceil: function ceil(n) {
      return -Math.floor(-n);
    } };ao.scale.pow = function () {
    return iu(ao.scale.linear(), 1, [0, 1]);
  }, ao.scale.sqrt = function () {
    return ao.scale.pow().exponent(.5);
  }, ao.scale.ordinal = function () {
    return ou([], { t: "range", a: [[]] });
  }, ao.scale.category10 = function () {
    return ao.scale.ordinal().range(Al);
  }, ao.scale.category20 = function () {
    return ao.scale.ordinal().range(Cl);
  }, ao.scale.category20b = function () {
    return ao.scale.ordinal().range(zl);
  }, ao.scale.category20c = function () {
    return ao.scale.ordinal().range(Ll);
  };var Al = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(xn),
      Cl = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(xn),
      zl = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(xn),
      Ll = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(xn);ao.scale.quantile = function () {
    return au([], []);
  }, ao.scale.quantize = function () {
    return lu(0, 1, [0, 1]);
  }, ao.scale.threshold = function () {
    return cu([.5], [0, 1]);
  }, ao.scale.identity = function () {
    return fu([0, 1]);
  }, ao.svg = {}, ao.svg.arc = function () {
    function n() {
      var n = Math.max(0, +e.apply(this, arguments)),
          c = Math.max(0, +r.apply(this, arguments)),
          f = o.apply(this, arguments) - Io,
          s = a.apply(this, arguments) - Io,
          h = Math.abs(s - f),
          p = f > s ? 0 : 1;if (n > c && (g = c, c = n, n = g), h >= Oo) return t(c, p) + (n ? t(n, 1 - p) : "") + "Z";var g,
          v,
          d,
          y,
          m,
          M,
          x,
          b,
          _,
          w,
          S,
          k,
          N = 0,
          E = 0,
          A = [];if ((y = (+l.apply(this, arguments) || 0) / 2) && (d = u === ql ? Math.sqrt(n * n + c * c) : +u.apply(this, arguments), p || (E *= -1), c && (E = tn(d / c * Math.sin(y))), n && (N = tn(d / n * Math.sin(y)))), c) {
        m = c * Math.cos(f + E), M = c * Math.sin(f + E), x = c * Math.cos(s - E), b = c * Math.sin(s - E);var C = Math.abs(s - f - 2 * E) <= Fo ? 0 : 1;if (E && yu(m, M, x, b) === p ^ C) {
          var z = (f + s) / 2;m = c * Math.cos(z), M = c * Math.sin(z), x = b = null;
        }
      } else m = M = 0;if (n) {
        _ = n * Math.cos(s - N), w = n * Math.sin(s - N), S = n * Math.cos(f + N), k = n * Math.sin(f + N);var L = Math.abs(f - s + 2 * N) <= Fo ? 0 : 1;if (N && yu(_, w, S, k) === 1 - p ^ L) {
          var q = (f + s) / 2;_ = n * Math.cos(q), w = n * Math.sin(q), S = k = null;
        }
      } else _ = w = 0;if (h > Uo && (g = Math.min(Math.abs(c - n) / 2, +i.apply(this, arguments))) > .001) {
        v = c > n ^ p ? 0 : 1;var T = g,
            R = g;if (Fo > h) {
          var D = null == S ? [_, w] : null == x ? [m, M] : Re([m, M], [S, k], [x, b], [_, w]),
              P = m - D[0],
              U = M - D[1],
              j = x - D[0],
              F = b - D[1],
              H = 1 / Math.sin(Math.acos((P * j + U * F) / (Math.sqrt(P * P + U * U) * Math.sqrt(j * j + F * F))) / 2),
              O = Math.sqrt(D[0] * D[0] + D[1] * D[1]);R = Math.min(g, (n - O) / (H - 1)), T = Math.min(g, (c - O) / (H + 1));
        }if (null != x) {
          var I = mu(null == S ? [_, w] : [S, k], [m, M], c, T, p),
              Y = mu([x, b], [_, w], c, T, p);g === T ? A.push("M", I[0], "A", T, ",", T, " 0 0,", v, " ", I[1], "A", c, ",", c, " 0 ", 1 - p ^ yu(I[1][0], I[1][1], Y[1][0], Y[1][1]), ",", p, " ", Y[1], "A", T, ",", T, " 0 0,", v, " ", Y[0]) : A.push("M", I[0], "A", T, ",", T, " 0 1,", v, " ", Y[0]);
        } else A.push("M", m, ",", M);if (null != S) {
          var Z = mu([m, M], [S, k], n, -R, p),
              V = mu([_, w], null == x ? [m, M] : [x, b], n, -R, p);g === R ? A.push("L", V[0], "A", R, ",", R, " 0 0,", v, " ", V[1], "A", n, ",", n, " 0 ", p ^ yu(V[1][0], V[1][1], Z[1][0], Z[1][1]), ",", 1 - p, " ", Z[1], "A", R, ",", R, " 0 0,", v, " ", Z[0]) : A.push("L", V[0], "A", R, ",", R, " 0 0,", v, " ", Z[0]);
        } else A.push("L", _, ",", w);
      } else A.push("M", m, ",", M), null != x && A.push("A", c, ",", c, " 0 ", C, ",", p, " ", x, ",", b), A.push("L", _, ",", w), null != S && A.push("A", n, ",", n, " 0 ", L, ",", 1 - p, " ", S, ",", k);return A.push("Z"), A.join("");
    }function t(n, t) {
      return "M0," + n + "A" + n + "," + n + " 0 1," + t + " 0," + -n + "A" + n + "," + n + " 0 1," + t + " 0," + n;
    }var e = hu,
        r = pu,
        i = su,
        u = ql,
        o = gu,
        a = vu,
        l = du;return n.innerRadius = function (t) {
      return arguments.length ? (e = En(t), n) : e;
    }, n.outerRadius = function (t) {
      return arguments.length ? (r = En(t), n) : r;
    }, n.cornerRadius = function (t) {
      return arguments.length ? (i = En(t), n) : i;
    }, n.padRadius = function (t) {
      return arguments.length ? (u = t == ql ? ql : En(t), n) : u;
    }, n.startAngle = function (t) {
      return arguments.length ? (o = En(t), n) : o;
    }, n.endAngle = function (t) {
      return arguments.length ? (a = En(t), n) : a;
    }, n.padAngle = function (t) {
      return arguments.length ? (l = En(t), n) : l;
    }, n.centroid = function () {
      var n = (+e.apply(this, arguments) + +r.apply(this, arguments)) / 2,
          t = (+o.apply(this, arguments) + +a.apply(this, arguments)) / 2 - Io;return [Math.cos(t) * n, Math.sin(t) * n];
    }, n;
  };var ql = "auto";ao.svg.line = function () {
    return Mu(m);
  };var Tl = ao.map({ linear: xu, "linear-closed": bu, step: _u, "step-before": wu, "step-after": Su, basis: zu, "basis-open": Lu, "basis-closed": qu, bundle: Tu, cardinal: Eu, "cardinal-open": ku, "cardinal-closed": Nu, monotone: Fu });Tl.forEach(function (n, t) {
    t.key = n, t.closed = /-closed$/.test(n);
  });var Rl = [0, 2 / 3, 1 / 3, 0],
      Dl = [0, 1 / 3, 2 / 3, 0],
      Pl = [0, 1 / 6, 2 / 3, 1 / 6];ao.svg.line.radial = function () {
    var n = Mu(Hu);return n.radius = n.x, delete n.x, n.angle = n.y, delete n.y, n;
  }, wu.reverse = Su, Su.reverse = wu, ao.svg.area = function () {
    return Ou(m);
  }, ao.svg.area.radial = function () {
    var n = Ou(Hu);return n.radius = n.x, delete n.x, n.innerRadius = n.x0, delete n.x0, n.outerRadius = n.x1, delete n.x1, n.angle = n.y, delete n.y, n.startAngle = n.y0, delete n.y0, n.endAngle = n.y1, delete n.y1, n;
  }, ao.svg.chord = function () {
    function n(n, a) {
      var l = t(this, u, n, a),
          c = t(this, o, n, a);return "M" + l.p0 + r(l.r, l.p1, l.a1 - l.a0) + (e(l, c) ? i(l.r, l.p1, l.r, l.p0) : i(l.r, l.p1, c.r, c.p0) + r(c.r, c.p1, c.a1 - c.a0) + i(c.r, c.p1, l.r, l.p0)) + "Z";
    }function t(n, t, e, r) {
      var i = t.call(n, e, r),
          u = a.call(n, i, r),
          o = l.call(n, i, r) - Io,
          f = c.call(n, i, r) - Io;return { r: u, a0: o, a1: f, p0: [u * Math.cos(o), u * Math.sin(o)], p1: [u * Math.cos(f), u * Math.sin(f)] };
    }function e(n, t) {
      return n.a0 == t.a0 && n.a1 == t.a1;
    }function r(n, t, e) {
      return "A" + n + "," + n + " 0 " + +(e > Fo) + ",1 " + t;
    }function i(n, t, e, r) {
      return "Q 0,0 " + r;
    }var u = Me,
        o = xe,
        a = Iu,
        l = gu,
        c = vu;return n.radius = function (t) {
      return arguments.length ? (a = En(t), n) : a;
    }, n.source = function (t) {
      return arguments.length ? (u = En(t), n) : u;
    }, n.target = function (t) {
      return arguments.length ? (o = En(t), n) : o;
    }, n.startAngle = function (t) {
      return arguments.length ? (l = En(t), n) : l;
    }, n.endAngle = function (t) {
      return arguments.length ? (c = En(t), n) : c;
    }, n;
  }, ao.svg.diagonal = function () {
    function n(n, i) {
      var u = t.call(this, n, i),
          o = e.call(this, n, i),
          a = (u.y + o.y) / 2,
          l = [u, { x: u.x, y: a }, { x: o.x, y: a }, o];return l = l.map(r), "M" + l[0] + "C" + l[1] + " " + l[2] + " " + l[3];
    }var t = Me,
        e = xe,
        r = Yu;return n.source = function (e) {
      return arguments.length ? (t = En(e), n) : t;
    }, n.target = function (t) {
      return arguments.length ? (e = En(t), n) : e;
    }, n.projection = function (t) {
      return arguments.length ? (r = t, n) : r;
    }, n;
  }, ao.svg.diagonal.radial = function () {
    var n = ao.svg.diagonal(),
        t = Yu,
        e = n.projection;return n.projection = function (n) {
      return arguments.length ? e(Zu(t = n)) : t;
    }, n;
  }, ao.svg.symbol = function () {
    function n(n, r) {
      return (Ul.get(t.call(this, n, r)) || $u)(e.call(this, n, r));
    }var t = Xu,
        e = Vu;return n.type = function (e) {
      return arguments.length ? (t = En(e), n) : t;
    }, n.size = function (t) {
      return arguments.length ? (e = En(t), n) : e;
    }, n;
  };var Ul = ao.map({ circle: $u, cross: function cross(n) {
      var t = Math.sqrt(n / 5) / 2;return "M" + -3 * t + "," + -t + "H" + -t + "V" + -3 * t + "H" + t + "V" + -t + "H" + 3 * t + "V" + t + "H" + t + "V" + 3 * t + "H" + -t + "V" + t + "H" + -3 * t + "Z";
    }, diamond: function diamond(n) {
      var t = Math.sqrt(n / (2 * Fl)),
          e = t * Fl;return "M0," + -t + "L" + e + ",0 0," + t + " " + -e + ",0Z";
    }, square: function square(n) {
      var t = Math.sqrt(n) / 2;return "M" + -t + "," + -t + "L" + t + "," + -t + " " + t + "," + t + " " + -t + "," + t + "Z";
    }, "triangle-down": function triangleDown(n) {
      var t = Math.sqrt(n / jl),
          e = t * jl / 2;return "M0," + e + "L" + t + "," + -e + " " + -t + "," + -e + "Z";
    }, "triangle-up": function triangleUp(n) {
      var t = Math.sqrt(n / jl),
          e = t * jl / 2;return "M0," + -e + "L" + t + "," + e + " " + -t + "," + e + "Z";
    } });ao.svg.symbolTypes = Ul.keys();var jl = Math.sqrt(3),
      Fl = Math.tan(30 * Yo);Co.transition = function (n) {
    for (var t, e, r = Hl || ++Zl, i = Ku(n), u = [], o = Ol || { time: Date.now(), ease: Nr, delay: 0, duration: 250 }, a = -1, l = this.length; ++a < l;) {
      u.push(t = []);for (var c = this[a], f = -1, s = c.length; ++f < s;) {
        (e = c[f]) && Qu(e, f, i, r, o), t.push(e);
      }
    }return Wu(u, i, r);
  }, Co.interrupt = function (n) {
    return this.each(null == n ? Il : Bu(Ku(n)));
  };var Hl,
      Ol,
      Il = Bu(Ku()),
      Yl = [],
      Zl = 0;Yl.call = Co.call, Yl.empty = Co.empty, Yl.node = Co.node, Yl.size = Co.size, ao.transition = function (n, t) {
    return n && n.transition ? Hl ? n.transition(t) : n : ao.selection().transition(n);
  }, ao.transition.prototype = Yl, Yl.select = function (n) {
    var t,
        e,
        r,
        i = this.id,
        u = this.namespace,
        o = [];n = A(n);for (var a = -1, l = this.length; ++a < l;) {
      o.push(t = []);for (var c = this[a], f = -1, s = c.length; ++f < s;) {
        (r = c[f]) && (e = n.call(r, r.__data__, f, a)) ? ("__data__" in r && (e.__data__ = r.__data__), Qu(e, f, u, i, r[u][i]), t.push(e)) : t.push(null);
      }
    }return Wu(o, u, i);
  }, Yl.selectAll = function (n) {
    var t,
        e,
        r,
        i,
        u,
        o = this.id,
        a = this.namespace,
        l = [];n = C(n);for (var c = -1, f = this.length; ++c < f;) {
      for (var s = this[c], h = -1, p = s.length; ++h < p;) {
        if (r = s[h]) {
          u = r[a][o], e = n.call(r, r.__data__, h, c), l.push(t = []);for (var g = -1, v = e.length; ++g < v;) {
            (i = e[g]) && Qu(i, g, a, o, u), t.push(i);
          }
        }
      }
    }return Wu(l, a, o);
  }, Yl.filter = function (n) {
    var t,
        e,
        r,
        i = [];"function" != typeof n && (n = O(n));for (var u = 0, o = this.length; o > u; u++) {
      i.push(t = []);for (var e = this[u], a = 0, l = e.length; l > a; a++) {
        (r = e[a]) && n.call(r, r.__data__, a, u) && t.push(r);
      }
    }return Wu(i, this.namespace, this.id);
  }, Yl.tween = function (n, t) {
    var e = this.id,
        r = this.namespace;return arguments.length < 2 ? this.node()[r][e].tween.get(n) : Y(this, null == t ? function (t) {
      t[r][e].tween.remove(n);
    } : function (i) {
      i[r][e].tween.set(n, t);
    });
  }, Yl.attr = function (n, t) {
    function e() {
      this.removeAttribute(a);
    }function r() {
      this.removeAttributeNS(a.space, a.local);
    }function i(n) {
      return null == n ? e : (n += "", function () {
        var t,
            e = this.getAttribute(a);return e !== n && (t = o(e, n), function (n) {
          this.setAttribute(a, t(n));
        });
      });
    }function u(n) {
      return null == n ? r : (n += "", function () {
        var t,
            e = this.getAttributeNS(a.space, a.local);return e !== n && (t = o(e, n), function (n) {
          this.setAttributeNS(a.space, a.local, t(n));
        });
      });
    }if (arguments.length < 2) {
      for (t in n) {
        this.attr(t, n[t]);
      }return this;
    }var o = "transform" == n ? $r : Mr,
        a = ao.ns.qualify(n);return Ju(this, "attr." + n, t, a.local ? u : i);
  }, Yl.attrTween = function (n, t) {
    function e(n, e) {
      var r = t.call(this, n, e, this.getAttribute(i));return r && function (n) {
        this.setAttribute(i, r(n));
      };
    }function r(n, e) {
      var r = t.call(this, n, e, this.getAttributeNS(i.space, i.local));return r && function (n) {
        this.setAttributeNS(i.space, i.local, r(n));
      };
    }var i = ao.ns.qualify(n);return this.tween("attr." + n, i.local ? r : e);
  }, Yl.style = function (n, e, r) {
    function i() {
      this.style.removeProperty(n);
    }function u(e) {
      return null == e ? i : (e += "", function () {
        var i,
            u = t(this).getComputedStyle(this, null).getPropertyValue(n);return u !== e && (i = Mr(u, e), function (t) {
          this.style.setProperty(n, i(t), r);
        });
      });
    }var o = arguments.length;if (3 > o) {
      if ("string" != typeof n) {
        2 > o && (e = "");for (r in n) {
          this.style(r, n[r], e);
        }return this;
      }r = "";
    }return Ju(this, "style." + n, e, u);
  }, Yl.styleTween = function (n, e, r) {
    function i(i, u) {
      var o = e.call(this, i, u, t(this).getComputedStyle(this, null).getPropertyValue(n));return o && function (t) {
        this.style.setProperty(n, o(t), r);
      };
    }return arguments.length < 3 && (r = ""), this.tween("style." + n, i);
  }, Yl.text = function (n) {
    return Ju(this, "text", n, Gu);
  }, Yl.remove = function () {
    var n = this.namespace;return this.each("end.transition", function () {
      var t;this[n].count < 2 && (t = this.parentNode) && t.removeChild(this);
    });
  }, Yl.ease = function (n) {
    var t = this.id,
        e = this.namespace;return arguments.length < 1 ? this.node()[e][t].ease : ("function" != typeof n && (n = ao.ease.apply(ao, arguments)), Y(this, function (r) {
      r[e][t].ease = n;
    }));
  }, Yl.delay = function (n) {
    var t = this.id,
        e = this.namespace;return arguments.length < 1 ? this.node()[e][t].delay : Y(this, "function" == typeof n ? function (r, i, u) {
      r[e][t].delay = +n.call(r, r.__data__, i, u);
    } : (n = +n, function (r) {
      r[e][t].delay = n;
    }));
  }, Yl.duration = function (n) {
    var t = this.id,
        e = this.namespace;return arguments.length < 1 ? this.node()[e][t].duration : Y(this, "function" == typeof n ? function (r, i, u) {
      r[e][t].duration = Math.max(1, n.call(r, r.__data__, i, u));
    } : (n = Math.max(1, n), function (r) {
      r[e][t].duration = n;
    }));
  }, Yl.each = function (n, t) {
    var e = this.id,
        r = this.namespace;if (arguments.length < 2) {
      var i = Ol,
          u = Hl;try {
        Hl = e, Y(this, function (t, i, u) {
          Ol = t[r][e], n.call(t, t.__data__, i, u);
        });
      } finally {
        Ol = i, Hl = u;
      }
    } else Y(this, function (i) {
      var u = i[r][e];(u.event || (u.event = ao.dispatch("start", "end", "interrupt"))).on(n, t);
    });return this;
  }, Yl.transition = function () {
    for (var n, t, e, r, i = this.id, u = ++Zl, o = this.namespace, a = [], l = 0, c = this.length; c > l; l++) {
      a.push(n = []);for (var t = this[l], f = 0, s = t.length; s > f; f++) {
        (e = t[f]) && (r = e[o][i], Qu(e, f, o, u, { time: r.time, ease: r.ease, delay: r.delay + r.duration, duration: r.duration })), n.push(e);
      }
    }return Wu(a, o, u);
  }, ao.svg.axis = function () {
    function n(n) {
      n.each(function () {
        var n,
            c = ao.select(this),
            f = this.__chart__ || e,
            s = this.__chart__ = e.copy(),
            h = null == l ? s.ticks ? s.ticks.apply(s, a) : s.domain() : l,
            p = null == t ? s.tickFormat ? s.tickFormat.apply(s, a) : m : t,
            g = c.selectAll(".tick").data(h, s),
            v = g.enter().insert("g", ".domain").attr("class", "tick").style("opacity", Uo),
            d = ao.transition(g.exit()).style("opacity", Uo).remove(),
            y = ao.transition(g.order()).style("opacity", 1),
            M = Math.max(i, 0) + o,
            x = Zi(s),
            b = c.selectAll(".domain").data([0]),
            _ = (b.enter().append("path").attr("class", "domain"), ao.transition(b));v.append("line"), v.append("text");var w,
            S,
            k,
            N,
            E = v.select("line"),
            A = y.select("line"),
            C = g.select("text").text(p),
            z = v.select("text"),
            L = y.select("text"),
            q = "top" === r || "left" === r ? -1 : 1;if ("bottom" === r || "top" === r ? (n = no, w = "x", k = "y", S = "x2", N = "y2", C.attr("dy", 0 > q ? "0em" : ".71em").style("text-anchor", "middle"), _.attr("d", "M" + x[0] + "," + q * u + "V0H" + x[1] + "V" + q * u)) : (n = to, w = "y", k = "x", S = "y2", N = "x2", C.attr("dy", ".32em").style("text-anchor", 0 > q ? "end" : "start"), _.attr("d", "M" + q * u + "," + x[0] + "H0V" + x[1] + "H" + q * u)), E.attr(N, q * i), z.attr(k, q * M), A.attr(S, 0).attr(N, q * i), L.attr(w, 0).attr(k, q * M), s.rangeBand) {
          var T = s,
              R = T.rangeBand() / 2;f = s = function s(n) {
            return T(n) + R;
          };
        } else f.rangeBand ? f = s : d.call(n, s, f);v.call(n, f, s), y.call(n, s, s);
      });
    }var t,
        e = ao.scale.linear(),
        r = Vl,
        i = 6,
        u = 6,
        o = 3,
        a = [10],
        l = null;return n.scale = function (t) {
      return arguments.length ? (e = t, n) : e;
    }, n.orient = function (t) {
      return arguments.length ? (r = t in Xl ? t + "" : Vl, n) : r;
    }, n.ticks = function () {
      return arguments.length ? (a = co(arguments), n) : a;
    }, n.tickValues = function (t) {
      return arguments.length ? (l = t, n) : l;
    }, n.tickFormat = function (e) {
      return arguments.length ? (t = e, n) : t;
    }, n.tickSize = function (t) {
      var e = arguments.length;return e ? (i = +t, u = +arguments[e - 1], n) : i;
    }, n.innerTickSize = function (t) {
      return arguments.length ? (i = +t, n) : i;
    }, n.outerTickSize = function (t) {
      return arguments.length ? (u = +t, n) : u;
    }, n.tickPadding = function (t) {
      return arguments.length ? (o = +t, n) : o;
    }, n.tickSubdivide = function () {
      return arguments.length && n;
    }, n;
  };var Vl = "bottom",
      Xl = { top: 1, right: 1, bottom: 1, left: 1 };ao.svg.brush = function () {
    function n(t) {
      t.each(function () {
        var t = ao.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", u).on("touchstart.brush", u),
            o = t.selectAll(".background").data([0]);o.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), t.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");var a = t.selectAll(".resize").data(v, m);a.exit().remove(), a.enter().append("g").attr("class", function (n) {
          return "resize " + n;
        }).style("cursor", function (n) {
          return $l[n];
        }).append("rect").attr("x", function (n) {
          return (/[ew]$/.test(n) ? -3 : null
          );
        }).attr("y", function (n) {
          return (/^[ns]/.test(n) ? -3 : null
          );
        }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), a.style("display", n.empty() ? "none" : null);var l,
            s = ao.transition(t),
            h = ao.transition(o);c && (l = Zi(c), h.attr("x", l[0]).attr("width", l[1] - l[0]), r(s)), f && (l = Zi(f), h.attr("y", l[0]).attr("height", l[1] - l[0]), i(s)), e(s);
      });
    }function e(n) {
      n.selectAll(".resize").attr("transform", function (n) {
        return "translate(" + s[+/e$/.test(n)] + "," + h[+/^s/.test(n)] + ")";
      });
    }function r(n) {
      n.select(".extent").attr("x", s[0]), n.selectAll(".extent,.n>rect,.s>rect").attr("width", s[1] - s[0]);
    }function i(n) {
      n.select(".extent").attr("y", h[0]), n.selectAll(".extent,.e>rect,.w>rect").attr("height", h[1] - h[0]);
    }function u() {
      function u() {
        32 == ao.event.keyCode && (C || (M = null, L[0] -= s[1], L[1] -= h[1], C = 2), S());
      }function v() {
        32 == ao.event.keyCode && 2 == C && (L[0] += s[1], L[1] += h[1], C = 0, S());
      }function d() {
        var n = ao.mouse(b),
            t = !1;x && (n[0] += x[0], n[1] += x[1]), C || (ao.event.altKey ? (M || (M = [(s[0] + s[1]) / 2, (h[0] + h[1]) / 2]), L[0] = s[+(n[0] < M[0])], L[1] = h[+(n[1] < M[1])]) : M = null), E && y(n, c, 0) && (r(k), t = !0), A && y(n, f, 1) && (i(k), t = !0), t && (e(k), w({ type: "brush", mode: C ? "move" : "resize" }));
      }function y(n, t, e) {
        var r,
            i,
            u = Zi(t),
            l = u[0],
            c = u[1],
            f = L[e],
            v = e ? h : s,
            d = v[1] - v[0];return C && (l -= f, c -= d + f), r = (e ? g : p) ? Math.max(l, Math.min(c, n[e])) : n[e], C ? i = (r += f) + d : (M && (f = Math.max(l, Math.min(c, 2 * M[e] - r))), r > f ? (i = r, r = f) : i = f), v[0] != r || v[1] != i ? (e ? a = null : o = null, v[0] = r, v[1] = i, !0) : void 0;
      }function m() {
        d(), k.style("pointer-events", "all").selectAll(".resize").style("display", n.empty() ? "none" : null), ao.select("body").style("cursor", null), q.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), z(), w({ type: "brushend" });
      }var M,
          x,
          b = this,
          _ = ao.select(ao.event.target),
          w = l.of(b, arguments),
          k = ao.select(b),
          N = _.datum(),
          E = !/^(n|s)$/.test(N) && c,
          A = !/^(e|w)$/.test(N) && f,
          C = _.classed("extent"),
          z = W(b),
          L = ao.mouse(b),
          q = ao.select(t(b)).on("keydown.brush", u).on("keyup.brush", v);if (ao.event.changedTouches ? q.on("touchmove.brush", d).on("touchend.brush", m) : q.on("mousemove.brush", d).on("mouseup.brush", m), k.interrupt().selectAll("*").interrupt(), C) L[0] = s[0] - L[0], L[1] = h[0] - L[1];else if (N) {
        var T = +/w$/.test(N),
            R = +/^n/.test(N);x = [s[1 - T] - L[0], h[1 - R] - L[1]], L[0] = s[T], L[1] = h[R];
      } else ao.event.altKey && (M = L.slice());k.style("pointer-events", "none").selectAll(".resize").style("display", null), ao.select("body").style("cursor", _.style("cursor")), w({ type: "brushstart" }), d();
    }var o,
        a,
        l = N(n, "brushstart", "brush", "brushend"),
        c = null,
        f = null,
        s = [0, 0],
        h = [0, 0],
        p = !0,
        g = !0,
        v = Bl[0];return n.event = function (n) {
      n.each(function () {
        var n = l.of(this, arguments),
            t = { x: s, y: h, i: o, j: a },
            e = this.__chart__ || t;this.__chart__ = t, Hl ? ao.select(this).transition().each("start.brush", function () {
          o = e.i, a = e.j, s = e.x, h = e.y, n({ type: "brushstart" });
        }).tween("brush:brush", function () {
          var e = xr(s, t.x),
              r = xr(h, t.y);return o = a = null, function (i) {
            s = t.x = e(i), h = t.y = r(i), n({ type: "brush", mode: "resize" });
          };
        }).each("end.brush", function () {
          o = t.i, a = t.j, n({ type: "brush", mode: "resize" }), n({ type: "brushend" });
        }) : (n({ type: "brushstart" }), n({ type: "brush", mode: "resize" }), n({ type: "brushend" }));
      });
    }, n.x = function (t) {
      return arguments.length ? (c = t, v = Bl[!c << 1 | !f], n) : c;
    }, n.y = function (t) {
      return arguments.length ? (f = t, v = Bl[!c << 1 | !f], n) : f;
    }, n.clamp = function (t) {
      return arguments.length ? (c && f ? (p = !!t[0], g = !!t[1]) : c ? p = !!t : f && (g = !!t), n) : c && f ? [p, g] : c ? p : f ? g : null;
    }, n.extent = function (t) {
      var e, r, i, u, l;return arguments.length ? (c && (e = t[0], r = t[1], f && (e = e[0], r = r[0]), o = [e, r], c.invert && (e = c(e), r = c(r)), e > r && (l = e, e = r, r = l), e == s[0] && r == s[1] || (s = [e, r])), f && (i = t[0], u = t[1], c && (i = i[1], u = u[1]), a = [i, u], f.invert && (i = f(i), u = f(u)), i > u && (l = i, i = u, u = l), i == h[0] && u == h[1] || (h = [i, u])), n) : (c && (o ? (e = o[0], r = o[1]) : (e = s[0], r = s[1], c.invert && (e = c.invert(e), r = c.invert(r)), e > r && (l = e, e = r, r = l))), f && (a ? (i = a[0], u = a[1]) : (i = h[0], u = h[1], f.invert && (i = f.invert(i), u = f.invert(u)), i > u && (l = i, i = u, u = l))), c && f ? [[e, i], [r, u]] : c ? [e, r] : f && [i, u]);
    }, n.clear = function () {
      return n.empty() || (s = [0, 0], h = [0, 0], o = a = null), n;
    }, n.empty = function () {
      return !!c && s[0] == s[1] || !!f && h[0] == h[1];
    }, ao.rebind(n, l, "on");
  };var $l = { n: "ns-resize", e: "ew-resize", s: "ns-resize", w: "ew-resize", nw: "nwse-resize", ne: "nesw-resize", se: "nwse-resize", sw: "nesw-resize" },
      Bl = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []],
      Wl = ga.format = xa.timeFormat,
      Jl = Wl.utc,
      Gl = Jl("%Y-%m-%dT%H:%M:%S.%LZ");Wl.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? eo : Gl, eo.parse = function (n) {
    var t = new Date(n);return isNaN(t) ? null : t;
  }, eo.toString = Gl.toString, ga.second = On(function (n) {
    return new va(1e3 * Math.floor(n / 1e3));
  }, function (n, t) {
    n.setTime(n.getTime() + 1e3 * Math.floor(t));
  }, function (n) {
    return n.getSeconds();
  }), ga.seconds = ga.second.range, ga.seconds.utc = ga.second.utc.range, ga.minute = On(function (n) {
    return new va(6e4 * Math.floor(n / 6e4));
  }, function (n, t) {
    n.setTime(n.getTime() + 6e4 * Math.floor(t));
  }, function (n) {
    return n.getMinutes();
  }), ga.minutes = ga.minute.range, ga.minutes.utc = ga.minute.utc.range, ga.hour = On(function (n) {
    var t = n.getTimezoneOffset() / 60;return new va(36e5 * (Math.floor(n / 36e5 - t) + t));
  }, function (n, t) {
    n.setTime(n.getTime() + 36e5 * Math.floor(t));
  }, function (n) {
    return n.getHours();
  }), ga.hours = ga.hour.range, ga.hours.utc = ga.hour.utc.range, ga.month = On(function (n) {
    return n = ga.day(n), n.setDate(1), n;
  }, function (n, t) {
    n.setMonth(n.getMonth() + t);
  }, function (n) {
    return n.getMonth();
  }), ga.months = ga.month.range, ga.months.utc = ga.month.utc.range;var Kl = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
      Ql = [[ga.second, 1], [ga.second, 5], [ga.second, 15], [ga.second, 30], [ga.minute, 1], [ga.minute, 5], [ga.minute, 15], [ga.minute, 30], [ga.hour, 1], [ga.hour, 3], [ga.hour, 6], [ga.hour, 12], [ga.day, 1], [ga.day, 2], [ga.week, 1], [ga.month, 1], [ga.month, 3], [ga.year, 1]],
      nc = Wl.multi([[".%L", function (n) {
    return n.getMilliseconds();
  }], [":%S", function (n) {
    return n.getSeconds();
  }], ["%I:%M", function (n) {
    return n.getMinutes();
  }], ["%I %p", function (n) {
    return n.getHours();
  }], ["%a %d", function (n) {
    return n.getDay() && 1 != n.getDate();
  }], ["%b %d", function (n) {
    return 1 != n.getDate();
  }], ["%B", function (n) {
    return n.getMonth();
  }], ["%Y", zt]]),
      tc = { range: function range(n, t, e) {
      return ao.range(Math.ceil(n / e) * e, +t, e).map(io);
    }, floor: m, ceil: m };Ql.year = ga.year, ga.scale = function () {
    return ro(ao.scale.linear(), Ql, nc);
  };var ec = Ql.map(function (n) {
    return [n[0].utc, n[1]];
  }),
      rc = Jl.multi([[".%L", function (n) {
    return n.getUTCMilliseconds();
  }], [":%S", function (n) {
    return n.getUTCSeconds();
  }], ["%I:%M", function (n) {
    return n.getUTCMinutes();
  }], ["%I %p", function (n) {
    return n.getUTCHours();
  }], ["%a %d", function (n) {
    return n.getUTCDay() && 1 != n.getUTCDate();
  }], ["%b %d", function (n) {
    return 1 != n.getUTCDate();
  }], ["%B", function (n) {
    return n.getUTCMonth();
  }], ["%Y", zt]]);ec.year = ga.year.utc, ga.scale.utc = function () {
    return ro(ao.scale.linear(), ec, rc);
  }, ao.text = An(function (n) {
    return n.responseText;
  }), ao.json = function (n, t) {
    return Cn(n, "application/json", uo, t);
  }, ao.html = function (n, t) {
    return Cn(n, "text/html", oo, t);
  }, ao.xml = An(function (n) {
    return n.responseXML;
  }), "function" == typeof define && define.amd ? (this.d3 = ao, define(ao)) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = ao : this.d3 = ao;
}();
