let slideIndex = 0;
let timeout

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("image-to-show");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    timeout= setTimeout(showSlides, 3000);

}
showSlides();
function stopSliding() {
    clearTimeout(timeout)
}
function resumeSliding() {
    setTimeout(showSlides,3000)
}