//smooth scroll and active 
$(".mynav li").click(function(){
$(this).addClass("active").siblings().removeClass("active");
$("html , body").animate({
  scrollTop:$("#" + $(this).data("scroll")).offset().top + 1
},1000) 
})
// active in scroll
$(window).scroll(function(){
  $(".about ,.skills ,.portfolio ,.contact").each(function(){
    var blockId= $(this).attr("id");
    if($(window).scrollTop()>$(this).offset().top){
       $(".mynav li").removeClass("active");
       $(".mynav li[data-scroll="+ blockId +"]").addClass("active");
       //if  window.scrollY ==window.scrollMaxY- active contact
       if(window.scrollY==window.scrollMaxY){
        $(".mynav li").removeClass("active");
       $(".mynav li[data-scroll=contact]").addClass("active");
       }
     }
   })
})

//project link in about
$(".about .main p span").click(function(){
  $("html , body").animate({
    scrollTop:$("#projects").offset().top + 1
  },1000) 
})