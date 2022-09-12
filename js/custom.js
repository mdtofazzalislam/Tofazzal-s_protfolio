$(function(){


// $(window).on("load",function(){
//   $(".preloader").delay(100).fadeOut(10000)
// })



    var typed3 = new Typed('.type', {
        strings: [
         'Web Designer', 
         'Web Developer',
         'Freelancer'],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true
      });

    $(window).scroll(function(){
      var scrolling = $(window).scrollTop()
      if(scrolling > 20){
        $(".back2tp i ").fadeIn()
      }
      else{
        $(".back2tp i").fadeOut()
      }
      if(scrolling > 50){
        $(".main_menu").addClass("bg")
      }else{
        $(".main_menu").removeClass("bg")
      }
    })

    $(".back2tp i").click(function(){
      $("html,boby").animate({
        scrollTop:0
      },1000)
    })

    $('.testimoni_slick').slick({
     
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      dots:true
    });
     
    new WOW().init();
    var mixer = mixitup('.prot_mix');
        
})
