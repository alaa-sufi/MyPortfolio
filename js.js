// var gallery, slider, cellWidth, slideWidth, sliderX = 0, elementNum;

// document.addEventListener('DOMContentLoaded', init, false);
// function init() {
//   // select gallery & slider 
//   gallery = document.querySelector('.gallery');
//   slider = gallery.querySelector('.slider');

//   // get num element 
//   elementNum = slider.childElementCount;

//   //add class cell for all element
//   var ele3 = slider.children;
//   for (var i = 0; i < elementNum; i++) {
//     ele3[i].classList.add("cell")
//   }

//   //select first & last element
//    var first_element = slider.firstChild.nextSibling;
//   var last_element = slider.lastChild.previousSibling;
  
//   //select elmentChild for loop
//    var elmentChild=slider.children;
  
//   //clone last childrens ,num is elementNum
//   var lastCell=new Array();
//   for(var i=0;i<elementNum;i++){
//   lastCell[i] = document.createElement("div");
//   lastCell[i].innerHTML = elmentChild[i].innerHTML;
//   lastCell[i].classList.add("cell", "clone");
//   slider.appendChild(lastCell[i]);
//   }
  

//   //add first child
//   var lastCell = document.createElement("div");
//   lastCell.innerHTML = last_element.innerHTML;
//   lastCell.classList.add("cell", "clone","first");
//   slider.insertBefore(lastCell, first_element);
    
//   //calc cell width 
//   function widthCell(x) {
//     return 1.8*100 /x;
//   }

//   //set width of cell 
//   var ele = gallery.getElementsByClassName('cell');
//   for (var i = 0; i <= elementNum *2; i++) {
//     ele[i].style.width = widthCell(elementNum) + "%";
//   }

//   //get cell & slider width 
//   cellWidth = gallery.querySelector('.cell').offsetWidth;
//   slideWidth = cellWidth * elementNum;

//   //set left of cell
//   var ele2 = gallery.getElementsByClassName('cell');
//   //for first element -widthcell
//     ele2[0].style.left = (-1) * widthCell(elementNum) + "%"
//   for (var i = 1; i <= elementNum *2; i++) {
//     ele2[i].style.left = (i-1) * widthCell(elementNum) + "%"
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
       console.log("window :",$(window).scrollTop() ,"div " + blockId +":",$(this).offset().top);
       $(".mynav li").removeClass("active");
       $(".mynav li[data-scroll="+ blockId +"]").addClass("active");
       //if  window.scrollY ==window.scrollMaxY- active contact
       if(window.scrollY==window.scrollMaxY){
         console.log("window.scrollY",window.scrollY,"window.scrollMaxY",window.scrollMaxY);
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