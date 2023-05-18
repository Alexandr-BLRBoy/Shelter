// Burger open //

const burgerIcon = document.querySelector('.burger_block');
if(burgerIcon) {
    const burgerMenu = document.querySelector('.burger_nav__menu');
    burgerIcon.addEventListener('click', function(e) {
        burgerIcon.classList.toggle('open');
        burgerMenu.classList.toggle('burger_nav__open');
    })
}

// Pop-app window //

const cardIcon = document.querySelector('.pets--items');
if(cardIcon) {
    const modalWindows = document.querySelector('.modal');
    cardIcon.addEventListener('click', function(e) {
    modalWindows.classList.toggle('open');
    })
}


