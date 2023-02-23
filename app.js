// LOAD SELECTORS
const initials = document.querySelector('#initials');

setTimeout(() => {
    initials.style.display = 'none';
}, 2500);

// BODY
const body = document.querySelector('body');
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
const myJob = document.querySelector('#myJob span');

// ALL SECTIONS
const sections = document.querySelectorAll('.section');

// SECTION 1 SELECTORS
const section1 = document.querySelector('#About');
const skills1 = document.querySelector('#skills-list-1');
const skills2 = document.querySelector('#skills-list-2');
const skills3 = document.querySelector('#skills-list-3');

const skills = ['JavaScript', 'Node.js', 'Python', 'HTML & CSS', 'MySQL', 'Firebase', 'MongoDB', 'GCP', 'React', 'Bootstrap', 'Express', 'Socket.io'];

// SECTION 2 SELECTORS
const section2 = document.querySelector('#Projects');

const mainProjects = [
    {
        name: 'Betting Odds Table',
        gh_link: 'https://github.com/sbrcly/Odds-Display-Public',
        img: '/odds_table.jpg',
        alt: 'Photo of Betting Odds Table Project',
        pub_priv: '(Private)',
        description: 'A sports trading tool that displays second by second odds from an assortment of books on a variety of markets and sports.',
        skills_used: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'Express', 'Socket.io', 'MySQL', 'GCP', 'BigQuery'],
        disabled: true
    },
    {
        name: 'Arbitrage Calculator',
        gh_link: 'https://github.com/sbrcly/Arbitrage-Public',
        img: '/with_arbs3.png',
        alt: 'Photo of Arbitrage Project',
        pub_priv: '(Private)',
        description: 'A sports trading tool that compares Caesars odds against other books to find any potential arbitrage betting opportunities. Updates every minute.',
        skills_used: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'Express', 'Socket.io', 'API', 'MySQL', 'GCP'],
        disabled: true
    },
    {
        name: 'Sports Trading Schedule',
        gh_link: 'https://github.com/sbrcly/Trading-Schedule-Public',
        img: '/trade_sched.png',
        alt: 'Photo of Trading Schedule',
        pub_priv: '(Private)',
        description: 'A scheduling application for sports traders. Pulls in game data and assigns traders to those games.',
        skills_used: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'Express', 'Socket.io', 'API', 'MySQL', 'GCP'],
        disabled: true
    },
    {
        name: 'In-Game Odds Tracker',
        gh_link: 'https://github.com/sbrcly/Odds-Tracker-Public',
        img: '/odds_visual.png',
        alt: 'Photo of In-Game Odds Tracker',
        pub_priv: '(Private)',
        description: 'A sports trading tool that tracks, stores and graphs the in-game odds for Caesars and their competitors on a second by second basis.',
        skills_used: ['Node.js', 'MySQL', 'GCP', 'Express', 'API', 'Python', 'Excel'],
        disabled: true
    },
];

const pastProjects = [
    {
        name: 'Personal Portfolio V1',
        description: `This is the first portfolio I ever made. I no longer maintain this project so it's likely some features will no longer function as intended.`,
        skills_used: ['JavaScript', 'HTML', 'CSS'],
        liveLink: 'http://smbarclay.com',
        gh_link: `https://github.com/sbrcly`,
    },
    {
        name: 'Personal Portfolio V2',
        description: `This is the second iteration of my portfolio. I no longer maintain this project so it's likely some features will no longer function as intended.`,
        skills_used: ['JavaScript', 'HTML', 'CSS', 'API'],
        liveLink: 'http://sbrcly.com',
        gh_link: `https://github.com/sbrcly`,
    }
]

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
    'web_developer.',
    'webDeveloper.'
];

// JOB ANIMATION
const runJobAnimation = setInterval(() => {
    myJob.classList.remove('runJobAnim');
    myJob.classList.remove('animationStopped');
    if (window.screen.availWidth > 1225) {
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

        this.createNav();
        this.createListeners();
        this.appendSkills();
        this.appendMainProjects();
        this.appendpastProjects();
        this.scrollOnLoad();
        
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
            };
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
            };
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
            };
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
            };
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
                fullSizeNav.classList.add('showNavLinks');
                hamburgerMenu.classList.remove('showNavLinks');
                burger.style.display = 'none';
            }   else {
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
        }, 2500);
    }
    createListeners = () => {
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
        window.addEventListener('scroll', (e) => {
            this.scrollActions(e);
        });
        this.burgerLinks = document.querySelectorAll('#hamburger-menu .nav-link');
        burger.addEventListener('click', () => {
                hamburgerMenu.classList.toggle('showBurgerLinks');
                burger.classList.toggle('showBurgerLinks');
                body.classList.toggle('showHamburgerMenu');
        });
        for (let link of this.burgerLinks) {
            link.addEventListener('click', () => {
                hamburgerMenu.classList.remove('showBurgerLinks');
                burger.classList.remove('showBurgerLinks');
                body.classList.remove('showHamburgerMenu');
            })
        };
    }
    appendSkills = () => {
        for (let i = 0; i < skills.length; i++) {
            const newSkill = document.createElement('li');
            newSkill.innerHTML = `<i class="fa-solid fa-angle-right"></i>${skills[i]}`;
            if (i <= 3) {
                skills1.append(newSkill);
            }   else if (i <= 7) {
                skills2.append(newSkill);
            }   else {
                skills3.append(newSkill);
            };
        };
    }
    appendMainProjects = () => {
        for (let i = 0; i < mainProjects.length; i++) {
            if (i % 2 === 0) {
                const projectDiv = document.createElement('div');
                projectDiv.classList.add('project');
                projectDiv.classList.add(`project-${i+1}`);
    
                const projectLeft = document.createElement('div');
                projectLeft.classList.add(`project-${i+1}-left`);
                projectDiv.append(projectLeft);
    
                const imgBacklay = document.createElement('div');
                imgBacklay.classList.add('image-backlay');
    
                const imgLink = document.createElement('a');
                imgLink.setAttribute('href', mainProjects[i].gh_link);
                imgLink.setAttribute('target', '_blank');
                imgLink.innerHTML = `<img src="${mainProjects[i].img}" alt="${mainProjects[i].alt}">`;
    
                const imgOverlay = document.createElement('div');
                imgOverlay.classList.add('image-overlay');
    
                projectLeft.append(imgBacklay, imgLink, imgOverlay);
    
                const projectRight = document.createElement('div');
                projectRight.classList.add(`project-${i+1}-right`);
                projectDiv.append(projectRight);
    
                const subHeading = document.createElement('p');
                subHeading.classList.add('sub-heading');
                subHeading.innerText = 'Latest Project';
    
                const projectHeading = document.createElement('h3');
                projectHeading.innerHTML = `${mainProjects[i].name} <span>${mainProjects[i].pub_priv}</span>`;
    
                const projectDescription = document.createElement('div');
                projectDescription.classList.add('project-description');
                projectDescription.innerHTML = `<p>${mainProjects[i].description}</p>`;
    
                const projectSkills = document.createElement('div');
                projectSkills.classList.add('tools-used');
                projectSkills.innerHTML = `<p><span>${mainProjects[i].skills_used.join('</span><span>')}</span></p>`;
    
                const projectLinks = document.createElement('div');
                projectLinks.classList.add('project-links');
    
                projectRight.append(subHeading, projectHeading, projectDescription, projectSkills, projectLinks);
    
                const gitHubLink = document.createElement('a');
                gitHubLink.setAttribute('href', mainProjects[i].gh_link);
                gitHubLink.setAttribute('target', '_blank');
                gitHubLink.classList.add('project-code');
                gitHubLink.innerHTML = `<i class="fa-brands fa-github-alt"></i>`;
    
                const liveLink = document.createElement('i');
                liveLink.classList.add('fa-solid');
                liveLink.classList.add('fa-arrow-up-right-from-square');
                liveLink.classList.add('project-link');
                if (mainProjects[i].disabled) liveLink.classList.add('disabled-link');
    
                projectLinks.append(gitHubLink, liveLink);
                section2.append(projectDiv);
            }   else {
                const projectDiv = document.createElement('div');
                projectDiv.classList.add('project');
                projectDiv.classList.add(`project-${i+1}`);
    
                const projectRight = document.createElement('div');
                projectRight.classList.add(`project-${i+1}-right`);
                
    
                const imgBacklay = document.createElement('div');
                imgBacklay.classList.add('image-backlay');
    
                const imgLink = document.createElement('a');
                imgLink.setAttribute('href', mainProjects[i].gh_link);
                imgLink.setAttribute('target', '_blank');
                imgLink.innerHTML = `<img src="${mainProjects[i].img}" alt="${mainProjects[i].alt}">`;
    
                const imgOverlay = document.createElement('div');
                imgOverlay.classList.add('image-overlay');
    
                projectRight.append(imgBacklay, imgLink, imgOverlay);
    
                const projectLeft = document.createElement('div');
                projectLeft.classList.add(`project-${i+1}-left`);
    
                const subHeading = document.createElement('p');
                subHeading.classList.add('sub-heading');
                subHeading.innerText = 'Latest Project';
    
                const projectHeading = document.createElement('h3');
                projectHeading.innerHTML = `${mainProjects[i].name} <span>${mainProjects[i].pub_priv}</span>`;
    
                const projectDescription = document.createElement('div');
                projectDescription.classList.add('project-description');
                projectDescription.innerHTML = `<p>${mainProjects[i].description}</p>`;
    
                const projectSkills = document.createElement('div');
                projectSkills.classList.add('tools-used');
                projectSkills.innerHTML = `<p><span>${mainProjects[i].skills_used.join('</span><span>')}</span></p>`;
    
                const projectLinks = document.createElement('div');
                projectLinks.classList.add('project-links');
    
                projectLeft.append(subHeading, projectHeading, projectDescription, projectSkills, projectLinks);
    
                const gitHubLink = document.createElement('a');
                gitHubLink.setAttribute('href', mainProjects[i].gh_link);
                gitHubLink.setAttribute('target', '_blank');
                gitHubLink.classList.add('project-code');
                gitHubLink.innerHTML = `<i class="fa-brands fa-github-alt"></i>`;
    
                const liveLink = document.createElement('i');
                liveLink.classList.add('fa-solid');
                liveLink.classList.add('fa-arrow-up-right-from-square');
                liveLink.classList.add('project-link');
                if (mainProjects[i].disabled) liveLink.classList.add('disabled-link');
    
                projectLinks.append(gitHubLink, liveLink);
                projectDiv.append(projectLeft, projectRight);
                section2.append(projectDiv);
            }
        }
    }
    appendpastProjects = () => {
        const otherProjects = document.createElement('div');
        otherProjects.classList.add('project');
        otherProjects.classList.add('other-projects');

        const otherProjectsHeader = document.createElement('h3');
        otherProjectsHeader.innerText = 'More Projects!';

        const otherProjectTiles = document.createElement('div');
        otherProjectTiles.classList.add('other-project-tiles');

        otherProjects.append(otherProjectsHeader, otherProjectTiles);

        for (let i = 0; i < pastProjects.length; i++) {
            const portfolioDiv = document.createElement('div');
            portfolioDiv.classList.add('other-project');
            portfolioDiv.classList.add(`other-project-${i+1}`);

            const portfolioHeader = document.createElement('div');
            portfolioHeader.classList.add('other-project-header');
            portfolioDiv.append(portfolioHeader);

            const gitHubLink = document.createElement('a');
            gitHubLink.setAttribute('href', pastProjects[i].gh_link);
            gitHubLink.setAttribute('target', '_blank');
            gitHubLink.classList.add('project-code');
            gitHubLink.innerHTML = `<i class="fa-brands fa-github-alt"></i>`;

            const liveLink = document.createElement('a');
            liveLink.setAttribute('href', pastProjects[i].liveLink);
            liveLink.setAttribute('target', '_blank');
            liveLink.innerHTML = `<i class="fa-solid fa-arrow-up-right-from-square project-link"></i>`;

            portfolioHeader.append(gitHubLink, liveLink);

            const portfolioBody = document.createElement('div');
            portfolioBody.classList.add('other-project-body');
            portfolioDiv.append(portfolioBody);

            const portfolioTitle = document.createElement('h4');
            portfolioTitle.innerText = pastProjects[i].name;

            const portfolioDescription = document.createElement('p');
            portfolioDescription.innerText = pastProjects[i].description;

            portfolioBody.append(portfolioTitle, portfolioDescription);

            const portfolioSkills = document.createElement('div');
            portfolioSkills.classList.add('other-project-tech');
            portfolioSkills.innerHTML = `<p><span>${pastProjects[i].skills_used.join('</span><span>')}</span></p>`;
            portfolioDiv.append(portfolioSkills);

            otherProjectTiles.append(portfolioDiv);            
        }

        section2.append(otherProjects);
    }
    scrollActions = (e) => {
        if (header.getBoundingClientRect().top > this.lastScrollTop &&
            header.getBoundingClientRect().top <= logo.getBoundingClientRect().top) {
            mainNav.classList.remove('hideNav');
            mainNav.classList.add('navShadow');
        }   else if (header.getBoundingClientRect().top <= logo.getBoundingClientRect().top) {
            mainNav.classList.add('hideNav');
            hamburgerMenu.classList.remove('showBurgerLinks');
            burger.classList.remove('showBurgerLinks');
            body.classList.remove('showHamburgerMenu');
        };
        if (header.getBoundingClientRect().top >= this.originalPosition) {
            mainNav.classList.remove('navShadow');
            mainNav.classList.remove('hideNav');
        };
        this.lastScrollTop = header.getBoundingClientRect().top;
        for (let section of sections) {
            if (window.innerWidth > 2000) {
                if (section.getBoundingClientRect().top <= 1000) {
                    section.classList.add('unhide');
                }   else {
                    section.classList.remove('unhide');
                };
            }   else {
                if (section.getBoundingClientRect().top <= 600) {
                    section.classList.add('unhide');
                }   else {
                    section.classList.remove('unhide');
                };
            }
        };
        const projects = document.querySelectorAll('.project');
        for (let project of projects) {
            if (window.innerWidth > 2000) {
                if (project.getBoundingClientRect().top <= 1200) {
                    project.classList.add('unhide');
                }   else {
                    project.classList.remove('unhide');
                };
            }   else {
                if (project.getBoundingClientRect().top <= 750) {
                    project.classList.add('unhide');
                }   else {
                    project.classList.remove('unhide');
                };
            };
        };
    }
}

const page = new CreatePage(sectionLinks, pageSections);
