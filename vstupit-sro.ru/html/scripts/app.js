$(window).scroll(function() {
    var scroll = $(this).scrollTop();
    var win_height = $(document).height()-$(window).height();
    var btn_div = $("#btn-red-div");

    if(scroll > 10) {
        btn_div.show();
    } else {
        btn_div.hide();
    }

    if(scroll >= win_height) {
        btn_div.hide();
    } else {
        btn_div.show();
    }

});