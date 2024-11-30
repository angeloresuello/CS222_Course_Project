/* Chords Progression Slide */
let slideIndex1 = 1;
showSlides(slideIndex1, 'slideshow1');

// Next/previous controls for the Chords Progression Slide
function plusSlides(n, slideshow) {
  if (slideshow === 'slideshow1') {
    showSlides(slideIndex1 += n, 'slideshow1');
  } else if (slideshow === 'slideshow2') {
    showNewSlides(slideIndex2 += n, 'slideshow2');
  }
}

// Thumbnail image controls for the Chords Progression Slide
function currentSlide(n, slideshow) {
  if (slideshow === 'slideshow1') {
    showSlides(slideIndex1 = n, 'slideshow1');
  } else if (slideshow === 'slideshow2') {
    showNewSlides(slideIndex2 = n, 'slideshow2');
  }
}

function showSlides(n, slideshow) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex1 = 1 }
  if (n < 1) { slideIndex1 = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex1 - 1].style.display = "block";
  dots[slideIndex1 - 1].className += " active";
}