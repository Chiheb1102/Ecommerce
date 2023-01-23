// Copy Menu For Mobile
function copyMenu() {
    let dptCategory = document.querySelector('.dpt-cat')
    let dptPlace = document.querySelector('.departments')
    dptPlace.innerHTML = dptCategory.innerHTML;

    let nav = document.querySelector('.header-nav nav')
    let navCopy = document.querySelector('aside nav')
    navCopy.innerHTML = nav.innerHTML;

    let headTop = document.querySelector('.header-top .wrapper')
    let headTopCopy = document.querySelector('aside .thetop-nav')
    headTopCopy.innerHTML = headTop.innerHTML;
}
copyMenu();

//Show Mobile Menu
let menuButton = document.querySelector('.trigger')
    closeMenu = document.querySelector('.t-close')
    menu = document.querySelector('.site')

menuButton.addEventListener(('click'), function() {
    menu.classList.toggle('showmenu')
})
closeMenu.addEventListener(('click'), function() {
    menu.classList.remove('showmenu')
})

// Show Sub Menu On Mobile
let subMenu = document.querySelectorAll('.has-child .icon-small')
subMenu.forEach((menu) => menu.addEventListener('click', toggle))

function toggle(e) {
    e.preventDefault();
    subMenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if(this.closest('.has-child').classList != 'expand')
    this.closest('.has-child').classList.toggle('expand');
}

// Swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
});

// Show Search
let searchButton = document.querySelector('.t-search')
    tClose = document.querySelector('.search-close')
    showClass = document.querySelector('.site')
searchButton.addEventListener('click', function() {
    showClass.classList.toggle('showsearch')
})
tClose.addEventListener('click', function() {
    showClass.classList.remove('showsearch')
})

// Show dpt Menu
let dptButton = document.querySelector('.dpt-cat .dpt-trigger')
    dptClass = document.querySelector('.site')
dptButton.addEventListener('click', function() {
    dptClass.classList.toggle('showdpt')
})

// Products Image Slide
let productThumb = new Swiper('.small-image', {
    loop:true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        481: {
            spaceBetween: 32,
        }
    }
})
let productBig = new Swiper('.big-image', {
    loop: true,
    autoHeight: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: productThumb,
    }
})

// Stock Bar Width
let stocks = document.querySelectorAll('.products .stock')
for(i=0; i<stocks.length; i++) {
    available = stocks[i].querySelector('.qty-available').innerHTML,
    sold = stocks[i].querySelector('.qty-sold').innerHTML;
    stocks[i].querySelector('.available').style.width = `${(+sold/(+sold + +available))*100}%`
}

// Show Cart On Click
const divToShow = '.mini-cart'
const divPopup = document.querySelector(divToShow)
const divTrigger = document.querySelector('.cart-trigger')

divTrigger.addEventListener('click', () => {
    setTimeout(() => {
        if(!divPopup.classList.contains('show')) {
            divPopup.classList.add('show')
        }
    }, 250);
})
document.addEventListener('click', (e) => {
    const isCloset = e.target.closest(divToShow)
    if(!isCloset && divPopup.classList.contains('show')) {
        divPopup.classList.remove('show')
    }
})

// Show Modal On Load
let closet = document.querySelector('.modalclose')
let modal = document.querySelector('.modal')

window.onload = setTimeout(function() {
    modal.classList.add('show')
},3000)
closet.onclick = () => modal.classList.remove('show')

// // Back To Top
let backToTop = document.querySelector('.backtotop a')

window.addEventListener('scroll', () => {
    if(window.scrollY >= 600) {
        backToTop.style.display = 'block'
    } else {
        backToTop.style.display = 'none'
    }
})
backToTop.onclick = () => document.documentElement.scrollTop = 0;