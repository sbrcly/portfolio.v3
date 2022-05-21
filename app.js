// NAV SELECTORS
const mainNav = document.querySelector('#mainNav');
const navRight = document.querySelector('.nav-right');

const pageSections = ['About', 'Experience', 'Projects', 'Contact', 'Resume'];

class CreatePage {
    constructor(pageSections) {
        this.pageSections = pageSections

        this.createNav();
    }
    createNav = () => {
        this.pageSections.forEach(section => {
            const newNavLink = document.createElement('a');
            newNavLink.setAttribute('href', `/#${section}`);
            newNavLink.classList.add('nav-link');
            newNavLink.innerText = section;
            navRight.append(newNavLink);
        });
    }
}

const page = new CreatePage(pageSections);