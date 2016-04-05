
$(document).ready(function() {

	$("body").addClass("loaded");

	$(function () {
		$('a[rel="lightbox"]').fluidbox();


	})


});

$('.enter_link').click(function () {
    $(this).parent('#splashscreen').fadeOut(500);
});