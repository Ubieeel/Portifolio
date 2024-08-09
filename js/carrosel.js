let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


function projectsoption() {
    var x = document.getElementById("projects");

    var z = x.options[x.selectedIndex].value;
    
    if (z == "3d") {
        section1.style.display='inline-block';
    } 
    else{
        section1.style.display='none';
    }

       
    if (z == "2") {
      section2.style.display='inline-block';
  } 
  else{
      section2.style.display='none';
  }

  if (z == "3") {
    section3.style.display='inline-block';
} 
else{
    section3.style.display='none';
}
 
}
