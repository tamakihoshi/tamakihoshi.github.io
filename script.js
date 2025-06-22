"use strict";

const sticky = document.querySelector('.sticky');
const stickyParent = document.querySelector('.sticky-parent');
const sections = document.querySelectorAll('.scrolly-text');

const scrollWidth = sticky.scrollWidth;
const verticalScrollHeight = stickyParent.getBoundingClientRect().height - sticky.getBoundingClientRect().height -1500;

function horizontalScroll() {
  //Checking whether the sticky element has entered into view or not
  let stickyPosition = sections[2].getBoundingClientRect().top;
  if(stickyPosition > 0){
      return;
  }else{
      let scrolled = sections[2].getBoundingClientRect().top; //how much is scrolled?
      sticky.scrollLeft =(scrollWidth/verticalScrollHeight)*(-scrolled)*0.85;
  }
}

function updateVisibleSections() {
  const scrollY = window.scrollY;
  const sectionHeight = window.innerHeight;
  const offset = 0;
  const index = Math.floor((scrollY + offset) / sectionHeight);

  sections.forEach((section, i) => {
    if (i === index) {
      section.classList.add('visible');
    } else if( i === 2 &&  index > 2 ){
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
}



// Single scroll event listener calls both handlers
window.addEventListener('scroll', () => {
  if (window.innerWidth > 620) {
    // If not a mobile screen size, call the function
    horizontalScroll();
  }
  updateVisibleSections();
});



function openPDFPopup(url) {
    document.getElementById('frame').src = url;
    document.getElementById('pdfModal').style.display='block';
  }




