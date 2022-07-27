$(document).ready(function () {
  "use strict";
  //smooth scroll and active 
  $(".mynav li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $("html , body").animate({
      scrollTop: $("#" + $(this).data("scroll")).offset().top + 1
    }, 1000)
  })
  document.querySelectorAll("[data-src]").forEach((img)=>{
    img.src = img.dataset.src
  })
  document.querySelector(".loading").classList.add("d-none")

  $(window).scroll(function () {
    // active in scroll
    $(".about ,.skills ,.portfolio ,.contact").each(function () {
      var blockId = $(this).attr("id");
      if ($(window).scrollTop() > $(this).offset().top) {
        $(".mynav li").removeClass("active");
        $(".mynav li[data-scroll=" + blockId + "]").addClass("active");
        //if  window.scrollY ==window.scrollMaxY- active contact
        if (window.scrollY == window.scrollMaxY) {
          $(".mynav li").removeClass("active");
          $(".mynav li[data-scroll=contact]").addClass("active");
        }
        //  solve scroll to about

      }
    })

    //small nav in scroll
    //    if($(document).scrollTop() >= 50){
    //     $(".mynav").css({
    //       padding: 0,
    //       // opacity: 0.8
    //     }
    //     );

    //     $(".mynav .logo").css("font-size","1.5rem");
    //   }
    //   else{
    //     $(".mynav").css({
    //       padding: "0.5rem 1rem",
    //       // opacity: 1
    //     }
    //     );

    //     $(".mynav .logo").css({ 
    //     fontSize:"2rem"
    //     }
    //     );
    //   }
  })

  // margin top for body to be nav best
  // $("body").css("margin-top",$(".mynav").height())


  //project link in about
  $(".about .main p span").click(function () {
    $("html , body").animate({
      scrollTop: $("#projects").offset().top + 1
    }, 1000)
  })
})

// collps navigator in click 
$(".nav-item").click(function () {
  $(".navbar-toggler").toggleClass("collapsed");
  $("#navbarSupportedContent").removeClass("show");
  // $("#navbarSupportedContent").css("display","none")
})
var projects;
fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    projects = data.projects;
    console.log(projects)
    for(i=0;i<data.projects.length ;i++){
      $("#projects .container .swiper .swiper-wrapper").append(
          `<div class="swiper-slide">
        <div class="card " style="width: 18rem; --color:${projects[i].color}">  
         <img class="card-img-top" src="img/placeholder.png" data-src=${projects[i].image} />
            <div class="card-body">
              <h5 class="card-title">${projects[i].title}</h5>
              <div class="use">
               ${projects[i].use}
              </div>
              <p class="card-text">
               ${projects[i].desc}
              </p>
              ${projects[i].gitHub ?  `<a class=" btn get" href=${projects[i].gitHub}" target="_blank"><i
              class="fab fa-github"></i></a>` :""}
              ${projects[i].url ? `<a class="demo btn" href=${projects[i].url} target="blank"><i
              class="fa fa-external-link-alt"></i></a>` :  `<span class="btn demo soon">Soon</span>`}
             
        </div>
      </div>`)
      }
  });
var myFullpage = new fullpage("#fullpage", {});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
      spaceBetween: 10,
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
    });
var swiper = new Swiper(".swipper-page", {
  direction: "vertical",
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
    });

