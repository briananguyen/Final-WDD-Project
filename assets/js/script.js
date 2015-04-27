$(document).ready(function() {


var topVal = 0;

$('#sisterhood-info').hover(function() {
	topVal = parseInt($('#sisterhood-info').css("top").replace("px", ""));
	
	if (topVal == -50) {
		$('#sisterhood-info').css("top", (topVal-70));
		$('.sisterhood-caption').show();
	} else {
		$('#sisterhood-info').css("top", -50);
		$('.sisterhood-caption').hide();
	}
})


$('#philo-info').hover(function() {
	topVal = parseInt($('#philo-info').css("top").replace("px", ""));
	
	if (topVal == -250) {
		$('#philo-info').css("top", (topVal-70));
		$('.philo-caption').show();
	} else {
		$('#philo-info').css("top", -250);
		$('.philo-caption').hide();
	}
})

$('#social-info').hover(function() {
	topVal = parseInt($('#social-info').css("top").replace("px", ""));
	
	if (topVal == -450) {
		$('#social-info').css("top", (topVal-70));
		$('.social-caption').show();
	} else {
		$('#social-info').css("top", -450);
		$('.social-caption').hide();
	}
})

$('body').hover(function() {
	$('.sisterhood-caption').hide();
	$('.philo-caption').hide();
	$('.social-caption').hide();

});


$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	var currentPos = $('#nav').position();
	if (scroll > currentPos.top) {
		$('#nav').css('top', 0 + 'px');
		$('#nav').css("position", 'fixed');
		$('#nav').css('opacity', 0.8);
	} else {
		$("#nav").css("position", "relative");
		$('#nav').css("top", 200 + 'px');
		$('#nav').css('opacity', 1);
	}
});



});