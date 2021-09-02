let sliderIndex = 1;
showSldes(sliderIndex);
function plusSlides(n) {
    showSldes(sliderIndex += n);
}

function currentSlides(n) {
    showSldes(sliderIndex = n);
}

function showSldes(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('dot');
    if (n > slides.length) { 
        sliderIndex = 1;
    }

    if (n < 1) {
        sliderIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for ( i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace('active', '');
    }

    slides[sliderIndex - 1].style.display = 'block';
    dots[sliderIndex - 1].style.display = 'active';
}