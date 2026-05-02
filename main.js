/*-------------toggle icon navbar------------------------------*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*-------------scroll section active link------------------------------*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(link => link.classList.remove('active'));
            let activeLink = document.querySelector('header nav a[href="#' + id + '"]');
            if(activeLink) activeLink.classList.add('active');
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);


    /*--------------remove toggle icon and navbat------------*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*-------------------scroll reveal----------------*/
ScrollReveal({
    distance: '30px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading',{origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{origin: 'button'});
ScrollReveal().reveal('.home-contact h1, .about-img' ,{origin: 'left'});
ScrollReveal().reveal('.home-contact p, .about-content',{origin: 'right'});


const typed = new Typed('.multiple-text', {
    strings: ['Graphic Designer','UI/UX Designer','SEO Specialist','Digital Marketing Executive','Video Editor','Frontend Developer','Business & Content Executive'],
    typedSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card');

const filterByCategory = category => {
    filterButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.filter === category));
    portfolioCards.forEach(card => {
        card.style.display = card.dataset.category === category ? 'flex' : 'none';
    });
};

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterByCategory(button.dataset.filter);
    });
});

filterByCategory('websites');

