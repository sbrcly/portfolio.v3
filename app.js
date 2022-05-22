// NAV SELECTORS
const mainNav = document.querySelector('#mainNav');
const navRight = document.querySelector('.nav-right');
const logo = document.querySelector('#logo');

// HEADER SELECTORS
const header = document.querySelector('header');
const headerIntro = document.querySelector('#headerIntro');
const myCompany = document.querySelector('#myCompany');
const myJob = document.querySelector('#myJob span');

// SECTION 1 SELECTORS
const section1 = document.querySelector('#About');

const sectionLinks = ['About', 'Projects', 'Archives', 'Contact', 'Resume'];
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
const jobs = ['software_engineer.', 'softwareEngineer.', 'software_developer.', 'softwareDeveloper.', 'programmer.', 'developer.', '<p>coder</p>.', 'computer_programmer.', 'computerProgrammer.', 'web_developer.', 'webDeveloper.', 'computer_geek.', 'computerGeek.', 'computer_nerd.', 'computerNerd.'];

// JOB ANIMATION
setInterval(() => {
    myJob.classList.remove('runJobAnim');
        let randomNum = Math.floor(Math.random() * jobs.length);
        myJob.setAttribute('data-text', jobs[randomNum]);
        myJob.innerText = jobs[randomNum];
        myJob.classList.add('runJobAnim');
}, 5000);

class CreatePage {
    constructor(sectionLinks, pageSections) {
        this.sectionLinks = sectionLinks,
        this.pageSections = pageSections,
        this.lastScrollTop;

        this.originalPosition = header.getBoundingClientRect().top;

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
        window.addEventListener('scroll', (e) => {
            this.scrollActions(e);
        });

        this.createNav();
        setTimeout(() => {
            for (let section of this.pageSections) {
                section.classList.add('showSection');
            }
        }, 4500);
    }
    createNav = () => {
        let linkNum = 1;
        this.sectionLinks.forEach(section => {
            const newNavLink = document.createElement('a');
            newNavLink.setAttribute('href', `#${section}`);
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
            }   else if (linkNum === 6) {
                newNavLink.innerHTML = `<span>VI.</span> ${section}`;
            }
            navRight.append(newNavLink);
            linkNum++;
        });
    }
    scrollActions = (e) => {
        if (header.getBoundingClientRect().top > this.lastScrollTop &&
            header.getBoundingClientRect().top <= logo.getBoundingClientRect().top) {
            mainNav.classList.remove('hideNav');
            mainNav.classList.add('navShadow');
        }   else if (header.getBoundingClientRect().top <= logo.getBoundingClientRect().top) {
            mainNav.classList.add('hideNav');
        };
        if (header.getBoundingClientRect().top >= this.originalPosition) {
            mainNav.classList.remove('navShadow');
            mainNav.classList.remove('hideNav');
        };
        this.lastScrollTop = header.getBoundingClientRect().top;

        if (section1.getBoundingClientRect().top <= 500) {
            section1.classList.add('unhideSection');
        }   else {
            section1.classList.remove('unhideSection');
        }
    }
}

const page = new CreatePage(sectionLinks, pageSections);