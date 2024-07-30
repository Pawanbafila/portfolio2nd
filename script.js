function openLightbox(img) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
}

function closeLightbox() {
    var lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}




const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp: 0.04,
   
});



//her our slider js

 // Configuration object for options
 var options = {
    autoPlay: true, // Or false
    autoPlayInterval: 3000, // Autoplay interval in milliseconds
    swipeThreshold: 50, // Minimum swipe distance in pixels
  };