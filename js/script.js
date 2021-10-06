$('.counter').counterUp({
  delay: 10,
  time: 1000
});

if ($(".about-parallax").length > 0) {
  var scene = $(".about-parallax").get(0);
  var parallax = new Parallax(scene, {
    relativeInput: true,
  });
};


$(".item1").mouseenter(function(){
  $(".round1").css("transform","scale(1.2)")
})
$(".item2").mouseenter(function(){
  $(".round2").css("transform","scale(1.2)")
})
$(".item3").mouseenter(function(){
  $(".round3").css("transform","scale(1.2)")
})
$(".item4").mouseenter(function(){
  $(".round4").css("transform","scale(1.2)")
})


$(".item1").mouseleave(function(){
  $(".round1").css("transform","scale(1)")
})
$(".item2").mouseleave(function(){
  $(".round2").css("transform","scale(1)")
})
$(".item3").mouseleave(function(){
  $(".round3").css("transform","scale(1)")
})
$(".item4").mouseleave(function(){
  $(".round4").css("transform","scale(1)")
})


$(".item1").mouseenter(function(){
  $(".line").css("width","50%")
})
$(".item2").mouseenter(function(){
  $(".line").css("width","155%")
})
$(".item3").mouseenter(function(){
  $(".line").css("width","260%")
})
$(".item4").mouseenter(function(){
  $(".line").css("width","400%")
})

$(".item1").mouseleave(function(){
  $(".line").css("width","0%")
})
$(".item2").mouseleave(function(){
  $(".line").css("width","0%")
})
$(".item3").mouseleave(function(){
  $(".line").css("width","0%")
})
$(".item4").mouseleave(function(){
  $(".line").css("width","0%")
})

$(".port-left-slider").slick({
  slidesToShow: 1,
  fade: true,
  arrows: false,
  asNavFor: ".port-right-slider,.img-slider",
});

$(".port-right-slider").slick({
  slidesToShow: 1,
  fade: true,
  arrows: false,
  asNavFor: ".port-left-slider,.img-slider",
});

$(".img-slider").slick({
  slidesToShow: 3,
  arrows: true,
  asNavFor: ".port-right-slider,.port-left-slider",
  centerMode: true,
  centerPadding: '0',
  prevArrow: '<i class="fas fa-long-arrow-alt-left prev"></i>',
  nextArrow: '<i class="fas fa-long-arrow-alt-right next"></i>',
});

$(".main-slider").slick({
  slidesToShow: 1,
  arrows: false,
  fade: true,
  asNavFor: ".img2-slider",
});


$(".img2-slider").slick({
  slidesToShow: 5,
  arrows: true,
  centerMode: true,
  centerPadding: '0',
  slidesToShow: 5,
  asNavFor: ".main-slider",
  prevArrow: '<h6 class="testi-slider-button1"><i class="fas fa-long-arrow-alt-left"></i> See Previous</h6>',
  nextArrow: '<h6 class="testi-slider-button1"><i class="fas fa-long-arrow-alt-right"></i> See Previous</h6>',
});

