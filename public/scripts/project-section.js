var totalLength = 10
$('.slick', '.vertical-slider').slick({
  vertical: true,
  verticalSwiping: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: false,
  nextArrow: false,
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: false,
  prevArrow: "<img class='a-left control-c prev slick-prev' width='10px' src='./public/images/left-carousel-arrow.svg'>",
  nextArrow: "<img class='a-right control-c next slick-next' width='10px' src='./public/images/right-carousel-arrow.svg'>"
})

$('.slider').on('beforeChange', function (event, slick, currentSlide) { 
  for (let i = 0; i < totalLength; i++) {
    $(`.timeline li:nth-child(${i})`).removeClass('active')
  }
})
$('.slider').on('afterChange', function (event, slick, currentSlide) {
  $(`.timeline li:nth-child(${currentSlide + 1})`).addClass('active')
})

$('.timeline li[data-slide]').click(function (e) {
  e.preventDefault()
  var slideNumber = $(this).data('slide')
  $('.slider').slick('slickGoTo', slideNumber - 1)
})