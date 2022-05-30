// LOAD SELECTORS
const initialBorder = document.querySelector('.loadAnimation');

// NAV SELECTORS
const mainNav = document.querySelector('#mainNav');
const navRight = document.querySelector('.nav-right');
const logo = document.querySelector('#logo');
const hamburgerMenu = document.querySelector('#hamburger-menu');
const burger = document.querySelector('.burger');
const fullSizeNav = document.querySelector('#full-size-nav');

// HEADER SELECTORS
const header = document.querySelector('header');
const headerIntro = document.querySelector('#headerIntro');
const myCompany = document.querySelector('#myCompany');
const myJob = document.querySelector('#myJob span');

// ALL SECTIONS
const sections = document.querySelectorAll('.section');

// SECTION 1 SELECTORS
const section1 = document.querySelector('#About');

// SECTION 2 SELECTORS
const section2 = document.querySelector('#Projects');
const projects = document.querySelectorAll('.project');
const otherProjects = document.querySelector('.other-projects');
const imgOverlay = document.querySelectorAll('.image-overlay');

// FOOTER SELECTORS
const footer = document.querySelector('footer');

const sectionLinks = ['Home', 'About', 'Projects', 'Contact', 'Resume'];
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
const home = document.querySelector('#home');
const pageSections = document.querySelectorAll('.section');
const jobs = [
    'software_engineer.',
    'softwareEngineer.',
    'software_developer.',
    'softwareDeveloper.',
    'programmer.',
    'developer.',
    'computer_programmer.',
    'computerProgrammer.',
    'web_developer.',
    'webDeveloper.'
];


// LOAD ANIMATION
if (window.screen.availWidth > 900) {
    initialBorder.style.animation = 'borderLoad 4s .5s forwards;'
}   else {
    initialBorder.style.animation = 'borderLoadSmall 4s .5s forwards;'
};

// JOB ANIMATION
const runJobAnimation = setInterval(() => {
    myJob.classList.remove('runJobAnim');
    myJob.classList.remove('animationStopped');
    if (window.screen.availWidth > 1225) {
        // console.log(window.innerWidth);
        let randomNum = Math.floor(Math.random() * jobs.length);
        myJob.setAttribute('data-text', jobs[randomNum]);
        myJob.innerText = jobs[randomNum];
        myJob.classList.add('runJobAnim');
    }   else {
        myJob.classList.add('animationStopped');
    }
    
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
        for (let img of imgOverlay) {
            img.addEventListener('mouseover', () => {
                img.parentElement.firstElementChild.classList.add('animateBg');
            });
            img.addEventListener('mouseout', () => {
                img.parentElement.firstElementChild.classList.remove('animateBg');
            })
        }
        this.createNav();
        this.scrollOnLoad();
        this.burgerLinks = document.querySelectorAll('#hamburger-menu .nav-link')
        burger.addEventListener('click', () => {
            for (let link of this.burgerLinks) {
                link.classList.toggle('showBurgerLink');
            }
        })
    }
    createNav = () => {
        let linkNum = 1;
        this.sectionLinks.forEach(section => {
            const newNavLink = document.createElement('a');
            if (section !== 'Resume') {
                newNavLink.setAttribute('href', `#${section}`);
            }   else {
                newNavLink.setAttribute('href', `/resume.PDF`);
                newNavLink.setAttribute('target', '_blank');
            }
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
            fullSizeNav.append(newNavLink);
            linkNum++;
            if (newNavLink.innerHTML === `<span>I.</span> Home`) {
                newNavLink.addEventListener('click', () => {
                    window.scrollTo(0,0);
                });
            };
        });

        linkNum = 1;
        this.sectionLinks.forEach(section => {
            const newNavLink = document.createElement('a');
            if (section !== 'Resume') {
                newNavLink.setAttribute('href', `#${section}`);
            }   else {
                newNavLink.setAttribute('href', `/resume.PDF`);
                newNavLink.setAttribute('target', '_blank');
            }
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
            hamburgerMenu.append(newNavLink);
            linkNum++;
            if (newNavLink.innerHTML === `<span>I.</span> Home`) {
                newNavLink.addEventListener('click', () => {
                    window.scrollTo(0,0);
                });
            };
        });
        this.showCorrectNav();
    }
    showCorrectNav = () => {
        if (window.innerWidth > 900) {
            fullSizeNav.classList.add('showNavLinks');
            hamburgerMenu.classList.remove('showNavLinks');
            burger.style.display = 'none';
        }   else {
            fullSizeNav.classList.remove('showNavLinks');
            hamburgerMenu.classList.add('showNavLinks');
            burger.style.display = 'block';
        };
        window.addEventListener('resize', () => {
            if (window.innerWidth > 900) {
                console.log('over 900');
                fullSizeNav.classList.add('showNavLinks');
                hamburgerMenu.classList.remove('showNavLinks');
                burger.style.display = 'none';
            }   else {
                console.log('under 900');
                fullSizeNav.classList.remove('showNavLinks');
                hamburgerMenu.classList.add('showNavLinks');
                burger.style.display = 'block';
            };
        })
    }
    scrollOnLoad = () => {
        const scrollLoad = setTimeout(() => {
            for (let section of this.pageSections) {
                section.classList.add('showSection');
            }
            home.classList.add('showSection');
            footer.classList.add('showSection');
            window.scrollTo(0, section2.getBoundingClientRect().top);
        }, 5000);
    }
    scrollActions = (e) => {
        if (header.getBoundingClientRect().top > this.lastScrollTop &&
            header.getBoundingClientRect().top <= logo.getBoundingClientRect().top) {
            mainNav.classList.remove('hideNav');
            mainNav.classList.add('navShadow');
        }   else if (header.getBoundingClientRect().top <= logo.getBoundingClientRect().top) {
            mainNav.classList.add('hideNav');
            for (let link of this.burgerLinks) {
                link.classList.remove('showBurgerLink');
            }
        };
        if (header.getBoundingClientRect().top >= this.originalPosition) {
            mainNav.classList.remove('navShadow');
            mainNav.classList.remove('hideNav');
        };
        this.lastScrollTop = header.getBoundingClientRect().top;
        // if (window.screen.availWidth > 900) {
            for (let section of sections) {
                if (section.getBoundingClientRect().top <= 600) {
                    section.classList.add('unhide');
                }   else {
                    section.classList.remove('unhide');
                };
            };
    
            for (let project of projects) {
                if (project.getBoundingClientRect().top <= 600) {
                    project.classList.add('unhide');
                }   else {
                    project.classList.remove('unhide');
                };
            }
        // }   else {
        //     for (let section of sections) {
        //         section.classList.add('unhide');
        //     };
        //     for (let project of projects) {
        //         project.classList.add('unhide');
        //     };
        // };
    }
}

const page = new CreatePage(sectionLinks, pageSections);
