var slideIndex = 0;
    showSlides();

    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("navbar_3_middle_image_slider");
      var dots = document.getElementsByClassName("navbar_3_middle_dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1 }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" navbar_3_middle_active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " navbar_3_middle_active";
      setTimeout(showSlides, 2000); // Change image every 2 seconds
    }