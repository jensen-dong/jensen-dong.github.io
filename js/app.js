/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
/*==================== scroll sections active link ====================*/

/*==================== sticky navbar ====================*/
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

/*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
/*==================== scroll reveal ====================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 1500,
    delay: 100
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Engineer', 'Backend Engineer', 'Fullstack Engineer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})


/* //------------- header design ----------------

const header = document.createElement('header');
header.setAttribute('class', 'header');

const logoA = document.createElement('a');
logoA.href = '#';
logoA.setAttribute('class', 'logo');
logoA.textContent = 'Portfolio';

const boxMenu = document.createElement('i');
boxMenu.setAttribute('class', 'bx bx-menu');
boxMenu.setAttribute('id', 'menu-icon');

const navBar = document.createElement('nav');
navBar.setAttribute('class', 'navbar');

header.append(logoA, boxMenu, navBar);

//create A tags under navbar and append to navbar
const homeA = document.createElement('a');
const aboutA = document.createElement('a');
const servicesA = document.createElement('a');
const portfolioA = document.createElement('a');
const contactA = document.createElement('a');

homeA.href = '#home';
aboutA.href = '#about';
servicesA.href = '#services';
portfolioA.href = '#portfolio';
contactA.href = '#contact';

homeA.setAttribute('class', 'active');

homeA.textContent = 'Home';
aboutA.textContent = 'About';
servicesA.textContent = 'Services';
portfolioA.textContent = 'Portfolio';
contactA.textContent = 'Contact';

navBar.append(homeA, aboutA, servicesA, portfolioA, contactA);

document.querySelector('body').append(header);

//------------ home section design ------------

const homeSect = document.createElement('section');
homeSect.setAttribute('class', 'home');
homeSect.setAttribute('id', 'home');

const homeContentDiv = document.createElement('div');
homeContentDiv.setAttribute('class', 'home-content');

const homeImgDiv = document.createElement('div');
homeImgDiv.setAttribute('class', 'home-img');

homeSect.append(homeContentDiv, homeImgDiv);

//create and append tags under home content
const textLineOne = document.createElement('h3');
textLineOne.textContent = "Hello, It's Me";

const textLineTwo = document.createElement('h1');
textLineTwo.textContent = 'Jensen Dong';

const textLineThree = document.createElement('h3');
textLineThree.textContent = "And I'm a ";

//insert span tag into second h3 in home section
const jobTitleSpan = document.createElement('span');
jobTitleSpan.textContent = 'Frontend Engineer';
textLineThree.appendChild(jobTitleSpan);

const textLineFour = document.createElement('p');
textLineFour.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque odit vitae eveniet consequuntur qui, accusamus minus!'

const socialDiv = document.createElement('div');
socialDiv.setAttribute('class', 'social-media');

const resumeButton = document.createElement('a');
resumeButton.textContent = 'Download Resume';
resumeButton.href = '#';
resumeButton.setAttribute('class', 'btn');

homeContentDiv.append(textLineOne, textLineTwo, textLineThree, textLineFour, socialDiv, resumeButton);

//create box menu a tags under social-media
const facebookA = document.createElement('a');
facebookA.href = '#';
const facebookBox = document.createElement('i');
facebookBox.setAttribute('class', 'bx bxl-facebook');
facebookA.append(facebookBox);

const twitterA = document.createElement('a');
twitterA.href = '#';
const twitterBox = document.createElement('i');
twitterBox.setAttribute('class', 'bx bxl-twitter');
twitterA.append(twitterBox);

const instagramA = document.createElement('a');
instagramA.href = '#';
const instagramBox = document.createElement('i');
instagramBox.setAttribute('class', 'bx bxl-instagram');
instagramA.append(instagramBox);

const linkedinA = document.createElement('a');
linkedinA.href = '#';
const linkedinBox = document.createElement('i');
linkedinBox.setAttribute('class', 'bx bxl-linkedin');
linkedinA.append(linkedinBox);

socialDiv.append(facebookA, twitterA, instagramA, linkedinA);

//create profile img tag and append to home-img
const profileImg = document.createElement('img');
profileImg.src = './images/personal-portfolio-pic.png';
profileImg.alt = '';
homeImgDiv.append(profileImg);

//append section home to body
document.querySelector('body').append(homeSect); */