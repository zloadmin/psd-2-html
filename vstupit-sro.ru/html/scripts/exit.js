$(document).ready(function () {
    $("a.fancy").fancybox({
        tpl: {
            closeBtn : '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;" id="calc_close_btn"></a>'
        }
    });

    $('.form-step-2 .item-list span').click(function() {
        check = $(this).parent();
        list = check.find('.items');
        if(list.is(':hidden')){
            list.show();
        } else {
            list.hide();
            list.find('.checked').removeClass('checked');
            list.find('input:checked').removeAttr('checked');
        }
    });

});

$(document).ready(function () {
    window.tick = false;
    $(document).mousemove(function (e) {

        if (window.tick == false) {

            if (e.clientY <= 5 || e.clientX <= 5) {
                window.tick = true;
                $('.fancy').trigger('click');
            }
        }
    });


    $('button').click(function (e) {
        e.preventDefault();
    });
    $('.sendform').click(function (e) {
        e.preventDefault();
        var phone = $("#m_tel");
        if(phone.val() == "") {
            phone.css({"border" : "1px solid red"});
        } else {
            $('#result').html('<img src="images/loading.gif" alt="" />');
            $.post('/sendmail.php', $('#qw').serialize()).success(function() {
                $(".form-step").hide();
                $("#last-step").show();
                $("#last-step .success").show();
            }).error(function() {
                $(".form-step").hide();
                $("#last-step").show();
                $("#last-step .error").show();
            });
        }

    });

});