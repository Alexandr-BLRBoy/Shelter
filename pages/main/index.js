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


// Pets Items //

const arrCards = [
    {
        name: 'Katrine',
        imgPath: '../main/img/our_pets_pics/pets-katrine.png',
        breed: 'Cat - British Shorthair',
        description: 'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.',
        age: '2 months',
        Inoculations: 'none',
        Diseases: 'none',
        Parasites: 'none'
    },

    {
       name: 'Jennifer',
       imgPath: '../main/img/our_pets_pics/pets-jennifer.png',
       breed: 'Dog - Labrador',
       description: 'Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won"t hesitate to play up a storm in the house if she has all of her favorite toys.',
       age: '2 months',
       Inoculations: 'none',
       Diseases: 'none',
       Parasites: 'none'
    },

    {
        name: 'Woody',
        imgPath: '../main/img/our_pets_pics/pets-woody.png',
        breed: 'Dog - Golden Retriever',
        description: 'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.',
        age: '2 months',
        Inoculations: 'none',
        Diseases: 'none',
        Parasites: 'none'
    }
]

const cardsContainerSlider = document.querySelector('.our--pets__slider');
const firstChild = document.querySelector('.pets--arrow__right');

for(let i = 0; i < arrCards.length; i++) {

    const cardItem = document.createElement('div');
    cardItem.classList.add('pets--items');
    cardItem.innerHTML = `

        <div class="pets--pics">
            <img src=${arrCards[i].imgPath} alt=${arrCards[i].name} class="pets--img">
        </div>
        <p class="pets--text">${arrCards[i].name}</p>
        <button class="pets--btn">Learn more</button>

    `;

    cardsContainerSlider.insertBefore(cardItem, firstChild);
}


