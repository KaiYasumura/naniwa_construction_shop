$(document).ready(function() {
	//ドロワー
	 $('.drawer').drawer();


});

$(window).load(function(){
		//swiper
		var swiper = new Swiper('.swiper-container', {
			direction: 'horizontal',
			loopPreventsSlide: true,
			freeMode: true,
			speed: 3000,
			autoplay: {
			  delay: 1,
			},
			loop: true,
			slidesPerView: 6,
			spaceBetween: 0,

		});
  });