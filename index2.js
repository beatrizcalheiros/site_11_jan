
var slideIndex = 1;
showSlides(slideIndex, "mySlides", "dot");
showSlides(slideIndex, "container3", "next");


function plusSlides(n, divClass, nextClass) {
  slideIndex += n;
  showSlides(slideIndex, divClass, nextClass);
}

function currentSlide(n, divClass, dotClass) {
  showSlides(n, divClass, dotClass);
}

function showSlides(n, divClass, nextClass) {
  var i;
  var slides = document.getElementsByClassName(divClass);
  var x = n;
  if (n > slides.length) {slideIndex = 1;x=1;}
  if (n < 1) {slideIndex = slides.length;x=slides.length;}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[x-1].style.display = "block";

  if(dotClass, nextClass != null)
  {
	  var dots, next = document.getElementsByClassName(dotClass, nextClass);
	  for (i = 0; i < dots.length; i++) {
		  dots[i].className = dots[i].className.replace(" active", "");
      next[i].className = next[i].className.replace(" active", "");
	  }
	  dots[n-1].className += " active";
      next[n-1].className += " active";

  }
}



function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
