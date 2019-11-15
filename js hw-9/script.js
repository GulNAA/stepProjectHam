let tabs_title = document.querySelectorAll('.tabs-title');
let tabs_text = document.querySelectorAll('.tabs-text');

for (let i = 0; i < tabs_title.length; i++) {
    tabs_title[i].dataset.index = i;
    tabs_text[i].dataset.key = i;
    tabs_title[i].addEventListener('click', () => {
        tabs_title.forEach(x => {
            x.classList.remove('active');
        });
        tabs_text.forEach(x => {
            x.style.display = 'none';
        });
        tabs_text[i].style.display = 'block';
        tabs_title[i].classList.add('active');
    });
}

tabs_text.forEach(x => {
    if (x.dataset.key == 0) {
        return;
    }
    x.style.display = 'none';
});
