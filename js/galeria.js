$(function()
 {
$('tablicaklasa img').mouseover(function(){
	var maly =$(this).attr('src');
	var duzy = maly.replace('small','big');
	$('#popup img').attr('src',duzy);
	$('#popup').show();
}).mouseout(function(){
	
	$('#popup').hide();
}).mousemove(function(e){
	
	$('#popup').css('left',e.pageX+10);
	$('#popup').css('top',e.pageX+10);
})
})// JavaScript Document