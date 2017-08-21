var headerPos = $('.work_header').position().top
$(window).bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 0) {
      $('.nav').removeClass('nav_hidden')
    }
    else {
      $('.nav').addClass('nav_hidden')
    }
   // if(this.scrollY === headerPos) {
   //    console.log('hello')
   //    headerPos = $('.work_header').position().top
   //    $('.work_header').addClass('header_fixed')
   // }else if(headerPos > $('.work_header').position().top) {
   //    console.log('waht')
   //    $('.work_header').removeClass('header_fixed')
   // }
});
console.log(window.scrollY, $('.work_header').position())
