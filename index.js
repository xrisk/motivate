(new Image()).src = path;


$(document).ready(function()
{
	var check = function()
	{
		var l1 = $('#name').val()
		var l2 = $('#msg').val()
		if (l1 != "" && l2 != "")
		{
			return true;
		}
		else
			return false;
	};
	var sanitise1 = function(e)
	{

		var keycode = e.keyCode;
		if (keycode == 13)
		{
			$('button').click()
		}
		else if (65<=keycode && keycode <= 90)
		{
			return true;
		}
		else if (97<=keycode && keycode <= 122)
		{
			return true;
		}
		else return false;
	};
	$('input').bind('keypress',sanitise1);
	$('button').click(function()
	{
		if (check())
		{
		$('.hoo').addClass('animate');
		

		var name = $('#name').val().toLowerCase();
		var msg = $('#msg').val().toLowerCase();
		$('.hoo').remove();

		$('.wrap').addClass('brighten')
		

		$('#foo').html('<h1>Focus, '+name+'</h1><br><h1>'+msg+' beckons.</h1>')
		$('.guy').addClass('animate-in');
		}
		return false;

	});
});