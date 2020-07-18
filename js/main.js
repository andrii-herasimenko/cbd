"use strict";

let menuBtn = document.querySelector('.ba-menu-toggle');
let menu = document.querySelector('.ba-nav');

menuBtn.addEventListener('click', () => menu.classList.toggle('open'));

$("#tab1, #tab2, #tab3").click(function(e){
	e.preventDefault ()
	let target = this.id
	let tabs = $(".ba-about__content")
	tabs.each(function () {
		console.log(this)
		this.style.display = "none"
	})
	$(`.${target}`).css('display', 'flex')
	// this.style.display = "flex"
 });



const productSlider = $('.ba-product-slider')
productSlider.slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	appendArrows: $('.ba-product-slider-arrows'),
	prevArrow: '<button id="prev" type="button" class="ba-product-slider-arrows__item ba-product-slider-arrows--left"><img src="/img/product-slider/left.svg" alt=""></button>',
	nextArrow: '<button id="next" type="button" class="ba-product-slider-arrows__item ba-product-slider-arrows--right"><img src="/img/product-slider/arrow.svg" alt=""></button>',
	responsive: [
		{
			breakpoint: 970,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 666,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
})
const reviewsSlider = $('.ba-reviews-slider')
reviewsSlider.slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	appendArrows: $('.ba-reviews-slider-arrows'),
	prevArrow: '<button id="prev" type="button" class="ba-reviews-slider-arrows__item ba-reviews-slider-arrows--left"><img src="/img/reviews-slider/left.svg" alt=""></button>',
	nextArrow: '<button id="next" type="button" class="ba-reviews-slider-arrows__item ba-reviews-slider-arrows--right"><img src="/img/reviews-slider/right.svg" alt=""></button>'
})
$('.ba-accordion__toggle').click(function(e) {
	e.preventDefault();

	var $this = $(this);

	if ($this.next().hasClass('show')) {
		$this.next().removeClass('show');
		$this.next().slideUp(350);
	} else {
		$this.parent().parent().find('.ba-accordion__inner').removeClass('show');
		$this.parent().parent().find('.ba-accordion__inner').slideUp(350);
		$this.next().toggleClass('show');
		$this.next().slideToggle(350);
	}
});