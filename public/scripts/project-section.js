var totalLength = 10
$('.slick', '.vertical-slider').slick({
  vertical: true,
  verticalSwiping: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  // prevArrow: false,
  // nextArrow: false
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
  // $('.slider').slick('slickGoTo', slideNumber - 1)
})