/*==================== toggle icon navbar ====================*/
/*==================== scroll sections active link ====================*/

/*==================== sticky navbar ====================*/
/*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/

/*==================== scroll reveal ====================*/
/*==================== typed js ====================*/
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

header.append(logoA);
header.append(boxMenu);
header.append(navBar);

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

navBar.append(homeA);
navBar.append(aboutA);
navBar.append(servicesA);
navBar.append(portfolioA);
navBar.append(contactA);

document.querySelector('body').append(header);