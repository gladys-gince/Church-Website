document.getElementsByClassName('menu')[0].addEventListener('click',menuClicked);
const nav_item = document.querySelector('.nav-item');
function menuClicked(){
    nav_item.classList.toggle('active');
}