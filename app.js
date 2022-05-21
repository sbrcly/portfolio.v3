// NAV SELECTORS
const mainNav = document.querySelector('#mainNav');
const navRight = document.querySelector('.nav-right');

// HEADER SELECTORS
const headerIntro = document.querySelector('#headerIntro');
const myCompany = document.querySelector('#myCompany');

const pageSections = ['About', 'Experience', 'Projects', 'Contact', 'Resume'];
const introductions = ['Hi, my name is', 'Greetings, my name is', 'Welcome, my name is', 'Hello visitor, I\'m', 'Is your name also'];

class CreatePage {
    constructor(pageSections) {
        this.pageSections = pageSections;

        headerIntro.addEventListener('click', () => {
            headerIntro.classList.add('runAnimation');
            setTimeout(() => {
                let randomNum = Math.floor(Math.random() * introductions.length);
                headerIntro.innerText = introductions[randomNum];
            },510);
            setTimeout(() => {
                headerIntro.classList.remove('runAnimation');
            },1100);
        });

        myCompany.addEventListener('mouseover', () => {
            myCompany.firstElementChild.classList.add('removeOverlay');
        });
        myCompany.addEventListener('mouseout', () => {
            myCompany.firstElementChild.classList.remove('removeOverlay');
        });

        this.createNav();
    }
    createNav = () => {
        let linkNum = 1;
        this.pageSections.forEach(section => {
            const newNavLink = document.createElement('a');
            newNavLink.setAttribute('href', `/#${section}`);
            newNavLink.classList.add('nav-link');
            if (linkNum === 1) {
                newNavLink.innerHTML = `<span>I.</span> ${section}`;
            }   else if (linkNum === 2) {
                newNavLink.innerHTML = `<span>II.</span> ${section}`;
            }   else if (linkNum === 3) {
                newNavLink.innerHTML = `<span>III.</span> ${section}`;
            }   else if (linkNum === 4) {
                newNavLink.innerHTML = `<span>IV.</span> ${section}`;
            }   else if (linkNum === 5) {
                newNavLink.innerHTML = `<span>V.</span> ${section}`;
            }
            navRight.append(newNavLink);
            linkNum++;
        });
    }
}

const page = new CreatePage(pageSections);