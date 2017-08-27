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
$('.menu-link').click(function(e){
   var offsetVal = -41.5;
   var attr = $(this).attr('href');
   console.log(attr);
   console.log($(attr));
    e.preventDefault();

    $("body, html").animate({
        scrollTop: $( attr ).offset().top + offsetVal
    }, 800);

})
