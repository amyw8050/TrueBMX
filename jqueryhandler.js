$(document).ready(function(){
 //$('.header').height($(window).height());

 $('.logoPic').click(function(){
 	var modHeight = $('.logoPic').height() / 1.5;
 	var modWidth = $('.logoPic').width() / 1.5;
 	$('.logoPic').height(modHeight);
 	$('.logoPic').width(modWidth);
 })
})