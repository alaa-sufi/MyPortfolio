var gallery, slider, cellWidth, slideWidth, sliderX = 0, elementNum;

document.addEventListener('DOMContentLoaded', init, false);
function init() {
  // select gallery & slider 
  gallery = document.querySelector('.gallery');
  slider = gallery.querySelector('.slider');

  // get num element 
  elementNum = slider.childElementCount;

  //add class cell for all element
  var ele3 = slider.children;
  for (var i = 0; i < elementNum; i++) {
    ele3[i].classList.add("cell")
  }

  //select first & last element
   var first_element = slider.firstChild.nextSibling;
  var last_element = slider.lastChild.previousSibling;
  
  //select elmentChild for loop
   var elmentChild=slider.children;
  
  //clone last childrens ,num is elementNum
  var lastCell=new Array();
  for(var i=0;i<elementNum;i++){
  lastCell[i] = document.createElement("div");
  lastCell[i].innerHTML = elmentChild[i].innerHTML;
  lastCell[i].classList.add("cell", "clone");
  slider.appendChild(lastCell[i]);
  }
  

  //add first child
  var lastCell = document.createElement("div");
  lastCell.innerHTML = last_element.innerHTML;
  lastCell.classList.add("cell", "clone","first");
  slider.insertBefore(lastCell, first_element);
    
  //calc cell width 
  function widthCell(x) {
    return 1.8*100 /x;
  }

  //set width of cell 
  var ele = gallery.getElementsByClassName('cell');
  for (var i = 0; i <= elementNum *2; i++) {
    ele[i].style.width = widthCell(elementNum) + "%";
  }

  //get cell & slider width 
  cellWidth = gallery.querySelector('.cell').offsetWidth;
  slideWidth = cellWidth * elementNum;

  //set left of cell
  var ele2 = gallery.getElementsByClassName('cell');
  //for first element -widthcell
    ele2[0].style.left = (-1) * widthCell(elementNum) + "%"
  for (var i = 1; i <= elementNum *2; i++) {
    ele2[i].style.left = (i-1) * widthCell(elementNum) + "%"
    console.log((i-1) * widthCell(elementNum) + "%");
  }
  gallery.addEventListener('mousedown', onMousedown, false);
}


// ----- mouse ----- //

var mousedownX, dragStartX;

function onMousedown(event) {
  event.preventDefault();
  mousedownX = event.pageX;
  dragStartX = sliderX;
  window.addEventListener('mousemove', onMousemove, false);
  window.addEventListener('mouseup', onMouseup, false);
}

var isDragging = false;

function onMousemove(event) {
  event.preventDefault();
  var moveX = event.pageX - mousedownX;
  sliderX = dragStartX + moveX;

  var sliderPosition = (((sliderX - cellWidth) % slideWidth) + slideWidth) % slideWidth;
  sliderPosition += -slideWidth + cellWidth;
  slider.style.left = sliderPosition + 'px';
}

function onMouseup(event) {
  window.removeEventListener('mousemove', onMousemove, false);
  window.removeEventListener('mouseup', onMouseup, false);
}
