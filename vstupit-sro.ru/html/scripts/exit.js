$(document).ready(function() {
    $("a.fancy").fancybox();
});	

$(document).ready(function(){
	window.tick = false;
	$(document).mousemove(function(e) {

			if(window.tick == false)
			{

				if(e.clientY <= 5 || e.clientX <= 5)
				{
					window.tick = true;
					$('.fancy').trigger('click');
				}
			}
		});



	$('button').click(function(e){
		e.preventDefault();
	});
	$('.sendform').click(function(e){
		e.preventDefault();

		$('#result').html('<img src="images/loading.gif" alt="" />');
		$.post('/sendmail.php', $('#qw').serialize(), function(data){
			$('#m_form #result').html(data);
		});
	});

});