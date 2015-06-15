$(document).ready(function() {
	$('#project-add').click(function (event) {
		event.preventDefault();
		$('#overlay').fadeIn(200, 
			function () {
				$('#modal-window').css('display', 'block')
													.animate({opacity: 1, top: '10%'}, 400);
			});
	});

	$('#modal-window-btn-close, #overlay').click(function(event) {
		event.preventDefault();
		$('#modal-window').animate({opacity: 0, top: '-500px'}, 400,
			function() {
				$(this).css('display', 'none');
				$('#overlay').fadeOut(200);
			}
		);
	});
});