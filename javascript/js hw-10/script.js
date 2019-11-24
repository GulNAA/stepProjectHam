const firstInput= document.querySelector('.first-input');
const secondInput= document.querySelector('.second-input');
const eyeIcon=document.querySelector('.fas.fa-eye.icon-password');
const eyeIconSlash=document.querySelector('.fas.fa-eye-slash.icon-password');
const eyeIconClone=eyeIcon.cloneNode(true);
const eyeIconSlashClone=eyeIconSlash.cloneNode(true);
let newSpan=document.createElement('span');
newSpan.classList.add('red-text');

eyeIcon.addEventListener('click',function () {
    firstInput.type='text';
    eyeIcon.replaceWith(eyeIconSlashClone);
});
eyeIconSlashClone.addEventListener('click',function () {
    firstInput.type='password';
    eyeIconSlashClone.replaceWith(eyeIcon);
});
eyeIconSlash.addEventListener('click',function () {
    secondInput.type='password';
    eyeIconSlash.replaceWith(eyeIconClone);
});
eyeIconClone.addEventListener('click',function () {
    secondInput.type='text';
    eyeIconClone.replaceWith(eyeIconSlash);
});
const btn=document.querySelector('.btn');
btn.before(newSpan);
btn.addEventListener('click',function (event) {
    event.preventDefault();
    if(firstInput.value!==''&& secondInput.value !=='' && firstInput.value===secondInput.value){
        if(newSpan.textContent!==''){
            newSpan.textContent='';
        }
        setTimeout(function () { alert('You are welcome'); }, 0);
    } else{
        newSpan.textContent='You need to enter the identical values';
    }
});
