console.log('Loaded Reg functions.js');

jQuery(document).ready(function($){
// var validState = false;
// var tCheck = $('.um-field-type_terms_conditions > div:nth-child(2) > label:nth-child(1) > input:nth-child(1)');

// //tCheck.attr('readonly','readonly');

// tCheck.click(function(){
//     if(!validState){
//         $('.um-field-type_terms_conditions > p').remove();
//         $('.um-field-type_terms_conditions').prepend('<p id="errMsg">Please Read the terms and conditions</p>');
//         $('.um-toggle-terms').css('background-color', '#C74A4A')
//         tCheck.attr('checked', false);
//         setTimeout(function(){
//             $('#post-12 > div > div > form > div.um-field.um-field-type_terms_conditions > div:nth-child(3) > label > span.um-field-checkbox-state > i').attr('class','um-icon-android-checkbox-outline-blank');
//             $('#post-12 > div > div > form > div.um-field.um-field-type_terms_conditions > div:nth-child(3) > label').attr('class', 'um-field-checkbox');
        
//         }, 100);
//     }
// });

// $('.um-toggle-terms').click(function(){
//     $('#errMsg').remove();
//     $('.um-toggle-terms').css('background-color', '')
//     validState = true;
// });

!function(l) {
    function f(t, e) {
        return "function" == typeof t ? t.call(e) : t
    }
    function h(t, e) {
        this.$element = l(t),
        this.options = e,
        this.enabled = !0,
        this.fixTitle()
    }
    h.prototype = {
        show: function() {
            var t = this.getTitle();
            if (t && this.enabled) {
                var e = this.tip();
                e.find(".tipsy-inner")[this.options.html ? "html" : "text"](t),
                e[0].className = "tipsy",
                e.remove().css({
                    top: 0,
                    left: 0,
                    visibility: "hidden",
                    display: "block"
                }).prependTo(document.body);
                var i, s = l.extend({}, this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                }), n = e[0].offsetWidth, o = e[0].offsetHeight, a = f(this.options.gravity, this.$element[0]);
                switch (a.charAt(0)) {
                case "n":
                    i = {
                        top: s.top + s.height + this.options.offset,
                        left: s.left + s.width / 2 - n / 2
                    };
                    break;
                case "s":
                    i = {
                        top: s.top - o - this.options.offset,
                        left: s.left + s.width / 2 - n / 2
                    };
                    break;
                case "e":
                    i = {
                        top: s.top + s.height / 2 - o / 2,
                        left: s.left - n - this.options.offset
                    };
                    break;
                case "w":
                    (extra_gap = 0) < l("body").css("position").length && "relative" == l("body").css("position") && l("#wpadminbar").length && (extra_gap = l("#wpadminbar").height()),
                    i = {
                        top: s.top + s.height / 2 - o / 2 - extra_gap,
                        left: s.left + s.width + this.options.offset
                    }
                }
                2 == a.length && ("w" == a.charAt(1) ? i.left = s.left + s.width / 2 - 15 : i.left = s.left + s.width / 2 - n + 15),
                e.css(i).addClass("tipsy-" + a),
                e.find(".tipsy-arrow")[0].className = "tipsy-arrow tipsy-arrow-" + a.charAt(0),
                this.options.className && e.addClass(f(this.options.className, this.$element[0])),
                this.options.fade ? e.stop().css({
                    opacity: 0,
                    display: "block",
                    visibility: "visible"
                }).animate({
                    opacity: this.options.opacity
                }) : e.css({
                    visibility: "visible",
                    opacity: this.options.opacity
                })
            }
        },
        hide: function() {
            this.options.fade ? this.tip().stop().fadeOut(function() {
                l(this).remove()
            }) : this.tip().remove()
        },
        fixTitle: function() {
            var t = this.$element;
            (t.attr("title") || "string" != typeof t.attr("original-title")) && t.attr("original-title", t.attr("title") || "").removeAttr("title")
        },
        getTitle: function() {
            var t, e = this.$element, i = this.options;
            return this.fixTitle(),
            "string" == typeof (i = this.options).title ? t = e.attr("title" == i.title ? "original-title" : i.title) : "function" == typeof i.title && (t = i.title.call(e[0])),
            (t = ("" + t).replace(/(^\s*|\s*$)/, "")) || i.fallback
        },
        tip: function() {
            return this.$tip || (this.$tip = l('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>'),
            this.$tip.data("tipsy-pointee", this.$element[0])),
            this.$tip
        },
        validate: function() {
            this.$element[0].parentNode || (this.hide(),
            this.$element = null,
            this.options = null)
        },
        enable: function() {
            this.enabled = !0
        },
        disable: function() {
            this.enabled = !1
        },
        toggleEnabled: function() {
            this.enabled = !this.enabled
        }
    },
    l.fn.tipsy = function(i) {
        if (!0 === i)
            return this.data("tipsy");
        if ("string" == typeof i) {
            var t = this.data("tipsy");
            return t && t[i](),
            this
        }
        function e(t) {
            var e = l.data(t, "tipsy");
            return e || (e = new h(t,l.fn.tipsy.elementOptions(t, i)),
            l.data(t, "tipsy", e)),
            e
        }
        function s() {
            var t = e(this);
            t.hoverState = "in",
            0 == i.delayIn ? t.show() : (t.fixTitle(),
            setTimeout(function() {
                "in" == t.hoverState && t.show()
            }, i.delayIn))
        }
        function n() {
            var t = e(this);
            t.hoverState = "out",
            0 == i.delayOut ? t.hide() : setTimeout(function() {
                "out" == t.hoverState && t.hide()
            }, i.delayOut)
        }
        if ((i = l.extend({}, l.fn.tipsy.defaults, i)).live || this.each(function() {
            e(this)
        }),
        "manual" != i.trigger) {
            var o = "hover" == i.trigger ? "mouseenter" : "focus"
              , a = "hover" == i.trigger ? "mouseleave" : "blur";
            i.live ? l(document).on(o, this.selector, s).on(a, this.selector, n) : this.bind(o, s).bind(a, n)
        }
        return this
    }
    ,
    l.fn.tipsy.defaults = {
        className: null,
        delayIn: 0,
        delayOut: 0,
        fade: !1,
        fallback: "",
        gravity: "n",
        html: !1,
        live: !1,
        offset: 0,
        opacity: .8,
        title: "title",
        trigger: "hover"
    },
    l.fn.tipsy.revalidate = function() {
        l(".tipsy").each(function() {
            var t = l.data(this, "tipsy-pointee");
            t && function(t) {
                for (; t = t.parentNode; )
                    if (t == document)
                        return !0;
                return !1
            }(t) || l(this).remove()
        })
    }
    ,
    l.fn.tipsy.elementOptions = function(t, e) {
        return l.metadata ? l.extend({}, e, l(t).metadata()) : e
    }
    ,
    l.fn.tipsy.autoNS = function() {
        return l(this).offset().top > l(document).scrollTop() + l(window).height() / 2 ? "s" : "n"
    }
    ,
    l.fn.tipsy.autoWE = function() {
        return l(this).offset().left > l(document).scrollLeft() + l(window).width() / 2 ? "e" : "w"
    }
    ,
    l.fn.tipsy.autoBounds = function(n, o) {
        return function() {
            var t = {
                ns: o[0],
                ew: 1 < o.length && o[1]
            }
              , e = l(document).scrollTop() + n
              , i = l(document).scrollLeft() + n
              , s = l(this);
            return s.offset().top < e && (t.ns = "n"),
            s.offset().left < i && (t.ew = "w"),
            l(window).width() + l(document).scrollLeft() - s.offset().left < n && (t.ew = "e"),
            l(window).height() + l(document).scrollTop() - s.offset().top < n && (t.ns = "s"),
            t.ns + (t.ew ? t.ew : "")
        }
    }
}(jQuery);

});



