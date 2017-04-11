(function (e) {
    function t() {
        var e = document.createElement("input"), t = "onpaste";
        return e.setAttribute(t, ""), "function" == typeof e[t] ? "paste" : "input"
    }

    var n, a = t() + ".mask", r = navigator.userAgent, i = /iphone/i.test(r), o = /android/i.test(r);
    e.mask = {
        definitions: {9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]"},
        dataName: "rawMaskFn",
        placeholder: "_"
    }, e.fn.extend({
        caret: function (e, t) {
            var n;
            if (0 !== this.length && !this.is(":hidden"))return "number" == typeof e ? (t = "number" == typeof t ? t : e, this.each(function () {
                this.setSelectionRange ? this.setSelectionRange(e, t) : this.createTextRange && (n = this.createTextRange(), n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", e), n.select())
            })) : (this[0].setSelectionRange ? (e = this[0].selectionStart, t = this[0].selectionEnd) : document.selection && document.selection.createRange && (n = document.selection.createRange(), e = 0 - n.duplicate().moveStart("character", -1e5), t = e + n.text.length), {
                begin: e,
                end: t
            })
        }, unmask: function () {
            return this.trigger("unmask")
        }, mask: function (t, r) {
            var c, l, s, u, f, h;
            return !t && this.length > 0 ? (c = e(this[0]), c.data(e.mask.dataName)()) : (r = e.extend({
                placeholder: e.mask.placeholder,
                completed: null
            }, r), l = e.mask.definitions, s = [], u = h = t.length, f = null, e.each(t.split(""), function (e, t) {
                "?" == t ? (h--, u = e) : l[t] ? (s.push(RegExp(l[t])), null === f && (f = s.length - 1)) : s.push(null)
            }), this.trigger("unmask").each(function () {
                function c(e) {
                    for (; h > ++e && !s[e];);
                    return e
                }

                function d(e) {
                    for (; --e >= 0 && !s[e];);
                    return e
                }

                function m(e, t) {
                    var n, a;
                    if (!(0 > e)) {
                        for (n = e, a = c(t); h > n; n++)if (s[n]) {
                            if (!(h > a && s[n].test(R[a])))break;
                            R[n] = R[a], R[a] = r.placeholder, a = c(a)
                        }
                        b(), x.caret(Math.max(f, e))
                    }
                }

                function p(e) {
                    var t, n, a, i;
                    for (t = e, n = r.placeholder; h > t; t++)if (s[t]) {
                        if (a = c(t), i = R[t], R[t] = n, !(h > a && s[a].test(i)))break;
                        n = i
                    }
                }

                function g(e) {
                    var t, n, a, r = e.which;
                    8 === r || 46 === r || i && 127 === r ? (t = x.caret(), n = t.begin, a = t.end, 0 === a - n && (n = 46 !== r ? d(n) : a = c(n - 1), a = 46 === r ? c(a) : a), k(n, a), m(n, a - 1), e.preventDefault()) : 27 == r && (x.val(S), x.caret(0, y()), e.preventDefault())
                }

                function v(t) {
                    var n, a, i, l = t.which, u = x.caret();
                    t.ctrlKey || t.altKey || t.metaKey || 32 > l || l && (0 !== u.end - u.begin && (k(u.begin, u.end), m(u.begin, u.end - 1)), n = c(u.begin - 1), h > n && (a = String.fromCharCode(l), s[n].test(a) && (p(n), R[n] = a, b(), i = c(n), o ? setTimeout(e.proxy(e.fn.caret, x, i), 0) : x.caret(i), r.completed && i >= h && r.completed.call(x))), t.preventDefault())
                }

                function k(e, t) {
                    var n;
                    for (n = e; t > n && h > n; n++)s[n] && (R[n] = r.placeholder)
                }

                function b() {
                    x.val(R.join(""))
                }

                function y(e) {
                    var t, n, a = x.val(), i = -1;
                    for (t = 0, pos = 0; h > t; t++)if (s[t]) {
                        for (R[t] = r.placeholder; pos++ < a.length;)if (n = a.charAt(pos - 1), s[t].test(n)) {
                            R[t] = n, i = t;
                            break
                        }
                        if (pos > a.length)break
                    } else R[t] === a.charAt(pos) && t !== u && (pos++, i = t);
                    return e ? b() : u > i + 1 ? (x.val(""), k(0, h)) : (b(), x.val(x.val().substring(0, i + 1))), u ? t : f
                }

                var x = e(this), R = e.map(t.split(""), function (e) {
                    return "?" != e ? l[e] ? r.placeholder : e : void 0
                }), S = x.val();
                x.data(e.mask.dataName, function () {
                    return e.map(R, function (e, t) {
                        return s[t] && e != r.placeholder ? e : null
                    }).join("")
                }), x.attr("readonly") || x.one("unmask", function () {
                    x.unbind(".mask").removeData(e.mask.dataName)
                }).bind("focus.mask", function () {
                    clearTimeout(n);
                    var e;
                    S = x.val(), e = y(), n = setTimeout(function () {
                        b(), e == t.length ? x.caret(0, e) : x.caret(e)
                    }, 10)
                }).bind("blur.mask", function () {
                    y(), x.val() != S && x.change()
                }).bind("keydown.mask", g).bind("keypress.mask", v).bind(a, function () {
                    setTimeout(function () {
                        var e = y(!0);
                        x.caret(e), r.completed && e == x.val().length && r.completed.call(x)
                    }, 0)
                }), y()
            }))
        }
    })
})(jQuery);
var item_currrent = 1;
function items_run() {
    $("li.li-item").attr('class', 'li-item');
    $("#li-" + item_currrent).attr('class', "li-item colored");
    if (++item_currrent > 5) item_currrent = 1;
    setTimeout('items_run()', 150);
}
$(document).ready(function () {
    $(document).find('input[name="form[phone]"]').mask("+7 (999) 999-99-99");
//items_run();
    $("li.li-item").mouseover(function (e) {
        $(e.target).attr('class', "li-item colored")
    })
    $("li.li-item").mouseout(function (e) {
        $(e.target).attr('class', "li-item")
    })
    $("li.li-item").click(function (e) {
        $("div.block-right").fadeIn(150);
        setTimeout('$("#callme_phone").effect("shake").focus()', 200);
    })
    $('a[href^="#"].scrollTo').on('click', function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
    /*
     $.each($('form'), function(i, form) {
     setFormSubmitFunction(form);

     });
     */
});
/*
 function setFormSubmitFunction(form){
 $(form).submit(function(e) {
 e.preventDefault();
 var m = new Date();
 var email_re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 var email = $(this).find("input[name='form[email]']").val();
 var phone = $(this).find("input[name='form[phone]']").val();
 var mail = $(this).find("input[name='form[mail]']").val();
 if(email != undefined && !email_re.test(email)) {
 alert('Пожалуйста, укажите верный E-mail адрес');
 $(this).find("input[name='form[email]']").focus();
 return;
 }
 if(phone != undefined && !/^[78][0-9]{10}$/g.test(phone.replace(/[^0-9]/g, ""))){
 alert('Пожалуйста, укажите верный номер телефона (например, +7 999 999-99-99)');
 $(this).find("input[name='form[phone]']").focus();
 return;
 }
 if(mail != undefined && !email_re.test(mail) && !/^[78][0-9]{10}$/g.test(mail.replace(/[^0-9]/g, ""))){
 alert('Пожалуйста, укажите верный E-mail адрес или номер телефона (например, +7 999 999-99-99)');
 $(this).find("input[name='form[mail]']").focus();
 return;
 }
 data = $(this).serialize() + "&x=y&client_time=" + m.getHours() + ":" + (m.getMinutes() < 10 ? '0'+m.getMinutes() : m.getMinutes());
 $.ajax({
 type: "POST",
 url: $(this).attr('action'),
 data: data,
 success: function(html) {
 $("#for_success").html("<iframe src='/success.php'></iframe>");
 alert('Спасибо! Мы получили Вашу заявку.\nНаш менеджер свяжется с Вами в ближайшее время.');
 //window.location = '/success.html';
 }
 });
 });
 }*/
$(document).on('change', 'input[type="checkbox"]', function () {
    $(this).parent().toggleClass("checked", this.selected);
});
$(document).on('change', 'input[type="radio"]', function () {
    var tmp = $(this).attr('name');
    $('input[name="' + tmp + '"]').parent().removeClass("checked");
    $(this).parent().toggleClass("checked", this.selected);
});
$(document).on('click', '.form-steps .steps .step.active', function () {
    step = $(this).index();
    $('.form-steps .form-step').hide();
    $('.form-steps .form-step:eq(' + step + ')').show();
});
$(document).on('click', '.form-steps .steps .step.active2', function () {
    step = $(this).index();
    $('.form-steps .form-step').hide();
    $('.form-steps .form-step:eq(' + step + ')').show();
});
function openPopup() {
    $('body').addClass('opened');
    $('.popup-wrap').show();
}
function closePopup() {
    $('body').removeClass('opened');
    $('.popup-wrap').hide();
}
function openCallback() {
    $('.form-calback .block-wrap, .form-calback .block-form').show();
    $('body,html').animate({scrollTop: 0}, 300);
}
function closeCallback() {
    $('.form-calback .block-wrap, .form-calback .block-form').hide();
}
$(document).keydown(function (e) {
    if (e.keyCode == 27) {
        closePopup();
        closeCallback();
    }
});
$(document).click(function (event) {
    if (event.target.className == 'popup-wrap') {
        closePopup()
    }
    if (event.target.className == 'block-wrap') {
        closeCallback();
    }
});
function calcForm() {
    $.ajax({
        url: 'index.html',
        cache: false,
        success: function (html) {
            $("#m_form").html(html);
            openPopup();
            setFormSubmitFunction($('form[action="form.php"]'));
        }
    });
}
function formStep(step) {
    $('.form-steps .form-step-' + step).hide();
    $('.form-steps .form-step-' + (step + 1)).show();
}
function formSro(type) {
    $('#typeSro').attr('onclick', "formStep1('" + type + "')");
}
function formStep1(form) {
    $('.form-steps .form-step').hide();
    $('#' + form).show();
}
function formStep2(type) {
    $('.form-steps .form-step').hide();
    $('#' + type).show();
}
function formStep3(step2, step1, step3) {
    $('.form-steps .form-step').hide();
    $('#sro-finish').show();
    $('#sro-finish').find('.steps .step:last').prev().attr('onclick', "formStep2('" + step2 + "')");
    $('#sro-finish').find('.steps .step:last').prev().prev().attr('onclick', "formStep1('" + step1 + "')");
}

