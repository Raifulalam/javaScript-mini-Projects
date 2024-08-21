

const slides = document.querySelectorAll('.slides img');
let sildeIndex = 0;
let intervalId = null;



document.addEventListener("DOMContentLoaded", initializeSlider);
function initializeSlider() {
    if (slides.length > 0) {
        slides[sildeIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);

    }


}

function showslide(index) {
    if (index >= 0) {
        sildeIndex = 0;
    }
    else if (index < 0) {
        sildeIndex = slides.length - 1;
    }

    slides.forEach((slide) => slide.classList.remove("displaySlide"));
    slides[index].classList.add("displaySlide");
    sildeIndex = index;

}
function prevSlide() {

    sildeIndex--;
    showslide(sildeIndex);

}
function nextSlide() {
    showslide((sildeIndex + 1) % slides.length);
}