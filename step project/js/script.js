/*------------------------------Our Services----------------------------------*/

const titles=document.querySelectorAll('.our-services-menu>li');
const content=document.querySelectorAll('.our-services-menu-block-of-content>div');
function removeClasses(){
    titles.forEach(function (title) {
        title.classList.remove('active');
    });
    content.forEach(function (item) {
        item.classList.remove('active');
    });
}
titles.forEach(function (title) {
    title.addEventListener('click',function (event) {
        if(event.target.classList.contains('our-services-menu-item')){
            removeClasses();
            event.target.classList.add('active');
            const attrValue= event.target.getAttribute('data-title');
            document.querySelector(`[data-content="${attrValue}"]`).classList.add('active');
        } else{
           removeClasses();
            event.target.parentElement.classList.add('active');
            const attrValue= event.target.parentElement.getAttribute('data-title');
            document.querySelector(`[data-content="${attrValue}"]`).classList.add('active');
            event.preventDefault();
        }


    })
});
/*-----------------------------------------------Our amazing work-------------------------------------------------*/
/*--------------------------Load More Button------------------------------------------------------*/

const $loadBtn=$('<button class="load-more-btn"><i class="fas fa-plus"></i>  Load More</button>');
$('.our-amazing-work').append($loadBtn);
const $imageBlocksToShow=$('.our-amazing-work-images-block.hidden');
function secondClick(){
    for(let item=12;item<24;item++){
        $($imageBlocksToShow[item]).removeClass('hidden');
    }
    $loadBtn.remove();
}
function firstClick(){
           for(let item=0;item<12;item++){
               $($imageBlocksToShow[item]).removeClass('hidden');
           }
       $loadBtn.off('click',firstClick);
       $loadBtn.on('click',secondClick);
   }

   $loadBtn.on('click',firstClick);
/*-------------------------------------------------Tabs---------------------------------------------*/
const menuItems=document.querySelectorAll('.our-amazing-work-menu-item');
menuItems.forEach(function (item) {
        item.addEventListener('click',function (event) {
        menuItems.forEach(function (item) {
            item.classList.remove('our-amazing-work-menu-item-active');
        });
        if(item===menuItems[0]){
            const blocks= document.querySelectorAll('.our-amazing-work-images-block');
            blocks.forEach(function (block) {
                block.classList.add('hidden');
            });
            for(let i=0;i<12;i++){
                blocks[i].classList.remove('hidden');
            }
            $('.our-amazing-work').append($loadBtn);
            $loadBtn.on('click',firstClick);
        }else {
            document.querySelectorAll('.our-amazing-work-images-block').forEach(function (block) {
            block.classList.add('hidden');
        });
            event.target.classList.add('our-amazing-work-menu-item-active');
            const attrValue= event.target.getAttribute('data-tab');
            document.querySelectorAll(`[data-category="${attrValue}"]`).forEach(function (item) {
                item.parentElement.classList.remove('hidden');
            });
            $loadBtn.remove();
        }
    })
});

/*********************************************************************************************************************/

$('.slick-bigger').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slick-smaller',
    speed: 1000
});
$('.slick-smaller').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slick-bigger',
    focusOnSelect:true,
    speed: 1000
});