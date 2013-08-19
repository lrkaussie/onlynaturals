;jQuery.noConflict();

jQuery(function($) {
	
	/*
	 * Main navigation
	 */
	$('#nav > li:last').addClass('last');

	/*
	 * Products images
	 */
	$('.fancybox').fancybox({
		titlePosition : 'inside'
	});

	/*
	 * Gallery slideshow
	 */
	var $galleryContainer = $('.cms-home .slideshow');
	if ($galleryContainer.length) {
		$galleryContainer.easySlider({
			prevId : 'slideshow-prev',
			nextId : 'slideshow-next',
			auto : true,
			pause : 3000,
			continuous : true,
			numeric : true,
			numericId : 'controls',
			numericPrev : true,
			numericNext : true,
			numericClass : 'link-number'
		});

		$galleryContainer.wrap($('<div class="slideshow-wrapper"></div>')).parent()
			.append($('#controls'))
			.append($('<div class="cover">&nbsp;</div>'));
	}
	
});