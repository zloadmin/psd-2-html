// JavaScript Document

$(function()
{
	$('.track_list li').click(function(e) {
        $('.track_list li').removeClass('current');
		$(this).addClass('current');
    });
});