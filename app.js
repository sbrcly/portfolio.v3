// NAV SELECTORS
const mainNav = document.querySelector('#mainNav');
const navRight = document.querySelector('.nav-right');

// HEADER SELECTORS
const headerIntro = document.querySelector('#headerIntro');
const myCompany = document.querySelector('#myCompany');

const sectionLinks = ['About', 'Projects', 'Contact', 'Resume'];
const introductions = [
    'Hi, my name is',
    'ሰላም ስሜ ነው',
    'مرحبا، اسمي',
    '你好，我的名字是',
    'Hallo, mijn naam is',
    'Bonjour, je m\'appelle',
    'Hallo, mein Name ist',
    'Γεια σας, το όνομά μου είναι',
    'שלום, קוראים לי.',
    'Halló, ég heiti',
    'Dia duit, is é m\'ainm',
    'Ciao, mi chiamo',
    'こんにちは、私の名前は',
    '안녕하세요, 제 이름은',
    'Olá, meu nome é.',
    'नमस्कार, मेरो नाम हो',
    'Bună ziua, numele meu este',
    'Hola, mi nombre es',
    'Hej, jag heter'
];
const pageSections = document.querySelectorAll('.section');

class CreatePage {
    constructor(sectionLinks, pageSections) {
        this.sectionLinks = sectionLinks,
        this.pageSections = pageSections

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
        setTimeout(() => {
            for (let section of this.pageSections) {
                section.classList.add('showSection');
            }
        }, 4000);
    }
    createNav = () => {
        let linkNum = 1;
        this.sectionLinks.forEach(section => {
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

const page = new CreatePage(sectionLinks, pageSections);