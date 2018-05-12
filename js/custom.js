$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
});

$( function() {
  var $container = $('.grid').packery({
    itemSelector: '.grid-item',
    columnWidth: 190,
    isResizeBound: false
  });

  var pckry = $container.data('packery');

  var gutter = pckry.options.gutter || 0;
  var columnWidth = pckry.options.columnWidth + gutter;

  function onResize() {
    var outsideSize = getSize( $container.parent()[0] ).innerWidth;
    var cols = Math.floor( outsideSize / ( columnWidth ) );
    // set container width to columns
    $container.width( cols * columnWidth - gutter )
    // manually trigger layout
    $container.packery();
  }

  // debounce resize event
  var resizeTimeout;
  $( window ).on( 'resize', function() {
    if ( resizeTimeout ) {
      clearTimeout( resizeTimeout );
    }
    resizeTimeout = setTimeout( onResize, 100 );
  })

  // initial trigger 
  onResize();

});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}