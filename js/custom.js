jQuery(document).ready(function() {
	
	"use strict";
	// Your custom js code goes here.

	var $grid = $('.grid').masonry({
		itemSelector: '.grid-item',
		percentPosition: true,
		columnWidth: '.grid-sizer'
	  });
	  // layout Masonry after each image loads
	  $grid.imagesLoaded().progress( function() {
		$grid.masonry();
	  });
});