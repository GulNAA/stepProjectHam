//services//
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

$('.slick-bigger').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slick-smaller'
});
$('.slick-smaller').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slick-bigger',
});

function SingleTab(imgUrl, text, category = 'no category') {
    this.imgUrl = imgUrl;
    this.text = text;
    this.category = category;
    this.showTab = function () {
        //implement creating all elements for tab and placing them on the page
    };
    this.deleteTab = function () {
        //implement deleting the tab with this content from the page
    }
}

const CATEGORIES = [
    'app design',
    'graphic design',
    'web design',
    'photoshop',
    'online support',
    'online marketing',
    'seo service'
];

const TABS_CONTENT = [
    new SingleTab('https://via.placeholder.com/100x50/228',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur, delectus explicabo ipsam laudantium maiores minus, nam quidem quis quisquam ratione saepe similique tempora? Accusamus iusto nemo numquam sint soluta.',
        CATEGORIES[0]
    ),
    new SingleTab('https://via.placeholder.com/200x150/228',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur, delectus explicabo ipsam laudantium maiores minus, nam quidem quis quisquam ratione saepe similique tempora? Accusamus iusto nemo numquam sint soluta.',
        CATEGORIES[1]
    ),
    new SingleTab('https://via.placeholder.com/200x150/228',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur, delectus explicabo ipsam laudantium maiores minus, nam quidem quis quisquam ratione saepe similique tempora? Accusamus iusto nemo numquam sint soluta.',
        CATEGORIES[2]
    ),
    new SingleTab('https://via.placeholder.com/200x150/228',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur, delectus explicabo ipsam laudantium maiores minus, nam quidem quis quisquam ratione saepe similique tempora? Accusamus iusto nemo numquam sint soluta.',
        CATEGORIES[3]
    ),
    new SingleTab('https://via.placeholder.com/200x150/228',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur, delectus explicabo ipsam laudantium maiores minus, nam quidem quis quisquam ratione saepe similique tempora? Accusamus iusto nemo numquam sint soluta.',
        CATEGORIES[4]
    ),

    new SingleTab('https://via.placeholder.com/200x150/228',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur, delectus explicabo ipsam laudantium maiores minus, nam quidem quis quisquam ratione saepe similique tempora? Accusamus iusto nemo numquam sint soluta.',
        CATEGORIES[5]
    ),
    new SingleTab('https://via.placeholder.com/200x150/228',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur, delectus explicabo ipsam laudantium maiores minus, nam quidem quis quisquam ratione saepe similique tempora? Accusamus iusto nemo numquam sint soluta.',
        CATEGORIES[6]
    ),
];

const $tabsBtns = $('.tabs-btns-wrapper');
const $tabsContent = $('.tabs-content-wrapper');
/*** Creating a tab buttons ***/
CATEGORIES.forEach((tabName) => {
    //peace of code that will create tab btn and place it on the page
    const $tabBtn = $(`<button class="tabs-button">${tabName}</button>`);
    $tabsBtns.append($tabBtn);
});

$tabsBtns.click(event => [
//    finding the tab to be shown
// TABS_CONTENT.find((tab) => event.target.textContent === tab.category).showTab();
]);
