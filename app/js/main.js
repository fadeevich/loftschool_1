$(function() {
	Popup.init();
	validation.init();
	imageFileName.init();
});

$('input, textarea').placeholder();
	
var imageFileName = (function ($) {

	function setUpListeners () {
	$('#project-image').on('change', function(e){
		e.preventDefault;
		var file = $(this),
				fileName = file.val(),
				inputText = file.parentsUntil('.form-row').find('#modal-window-input-file');
		inputText.val(fileName);
	inputText.trigger('hideToolTips');
	});
}
	return {
			init: function(){
				setUpListeners();
			}
		}
	}(jQuery));

var Popup = (function($) {

    	function setUpListeners(){
    		$('#project-add').on('click', function(e){
      	e.preventDefault();
      	$('#modal-window').bPopup({
      		modalClose: false,
      		speed: 400,
          transition: 'slideDown',
	    		modalColor: '#58697a',
	    		opacity: 0.75
      	});
			});
		}
		return {
			init: function(){
				setUpListeners();
			}
		}
	}(jQuery));
	
var validation = (function ($) {
	
		function setUpListeners(){
			$('form').on('submit', validateForm);
			$('#btn-reset, .b-close').on('click', hideQTip);
		}

		function validateForm(){
			var form = $('form');
					inputs = form.find('.modal-window-input, .modal-window-textarea, .contact-me-input, .contact-me-textarea, .login-form-input');
					validation = true;

			$.each(inputs, function(index, value) {
				var input = $(value),
						inputValue = input.val(),
						position = input.attr('tooltip-position');

				if (position === "right") {
					position_tooltip = {
						my: 'center left', 
						at: 'center right'
					}
				} else {
					position_tooltip = {
						my: 'center right', 
						at: 'center left'
					}
				};

				if (inputValue.length === 0) {
					showQTip(input,position);
					validation = false;
				}
			});

			return validation;
		}

		function hideQTip(){
			inputs.trigger('hideToolTips');
		}

		function showQTip(input,position) {
			input.qtip({
				content: {
        text: function(event, api) {
          return $(this).attr('tooltip-content');
        }
    },
				position: position_tooltip,
				style: {
					classes: 'tooltip',
					tip: {
					    corner: true,
					    border: 0,
					    width: 10
					}
				},
				show:{
					event: 'show'
				},
				hide:{
					event: 'keydown hideToolTips'
				},
				events:{
					show: function (event, api) {input.addClass('has-error');},
					hide: function (event, api) {input.removeClass('has-error');}
				}

			}).trigger('show');	
		}
		return {
			init: function(){
				setUpListeners();
			}
		}
	}(jQuery));