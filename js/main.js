$('.signin').on('click', function()
{
	$('.modal').fadeIn(1000);
	
	$('.modal').css('display','block');
	


});

$('.close').on('click', function()

{

	$('.modal').fadeOut(1000);

});

$('.submit').on('click', function()
{
	$('input').addClass('error');

});

$('input[type=text]').on('click', function()
{
	$('input[type=text]').removeClass('error');

});

$('input[type=password]').on('click', function()
{
	$('input[type=password]').removeClass('error');

});

$('.modal') .on('click', function(){
	$('.modal').fadeOut(1000);
});

$('.getstarted') .on('click', function(event){
	event.stopPropagation();
});