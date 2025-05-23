import { LightningElement, track } from 'lwc';

// chaitanya147-dev-ed.develop.lightning.force.com/resource/PortfolioAssets/SkillsLogos/html-logo.png
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'
import Pictures from '@salesforce/resourceUrl/Pictures'
import sendContactEmail from '@salesforce/apex/MyPortfolioController.sendContactEmail'

export default class MyPortfolio extends LightningElement {

    // Defaults
    animationDisplay = [ false, false, false, false ]
    titleDisplay = false
    @track isValid = {error: false, copied: false, mail: false}
    toastMessage = { errorMsg: 'Enter Valid Email', mailsentMsg: 'Please fill the details'}
    messageDetails = { name: '', email: '', message: ''}

    // Assets
    hollowCircle = PortfolioAssets + '/DesignIcons/hollow-circle.png'
    fillTriangle = PortfolioAssets + '/DesignIcons/fill-round-triangle.png'
    slashLines = PortfolioAssets + '/DesignIcons/slash-lines.png'
    dottedLine = PortfolioAssets + '/DesignIcons/dotted-line.png'
    blurDots = PortfolioAssets + '/DesignIcons/blur-dots.png'

    darkMode = PortfolioAssets + '/DesignIcons/dark-mode.png'
    lightMode = PortfolioAssets + '/DesignIcons/light-mode.png'
    @track themeIcon = this.darkMode
    badge = PortfolioAssets + '/TrailheadBadges/mountaineer.png'
    pdevcert = PortfolioAssets + '/TrailheadBadges/platform-developer.png'
    admincert = PortfolioAssets + '/TrailheadBadges/administrator.png'

    profilePic = Pictures + '/profile.png'
    profileBackground = Pictures + '/background-pic.png'
    mountain = Pictures + '/mountain.png'
    resume = 'https://github.com/gudeychaitanya147/gudeychaitanya147/raw/main/Certificates/Chaitanya%20Gudey%20Resume.pdf'

    // user data 
    username = 'Chaitanya Gudey'
    designation = 'Worked as a System Administrator in Salesforce CRM and a Developer Enthusiast '
    @track gmail = {icon: 'utility:email', name: 'gudeychaitanya147@gmail.com'}
    @track phone = {icon: 'utility:call', name: '+91 6305161979'}
    @track locale = {icon: 'utility:checkin', name: 'Hyderabad, Telangana'}
    tallyCount = {badge: '25', point: '21K+', trail: '4'}
    yearsofexp = 3

    navData = [
        {id: 0, class: '.about-scroll', name: 'About'},
        {id: 1, class: '.project-scroll', name: 'Projects'},
        {id: 2, class: '.experience-scroll', name: 'Expertise'},
        {id: 3, class: '.education-scroll', name: 'Biodata'},
    ]

    aboutme = [
        [   {mark: '', text: 'I am well-regarded for my strong '},
            {mark: 'highlight', text: 'troubleshooting and R&D skills. '},
            {mark: '', text: "I have shown the ability to quickly adapt to new work environments and enjoy learning new technologies. I'm always eager to "},
            {mark: 'highlight', text: 'expand my knowledge and grow '},
            {mark: '', text: 'both personally and professionally.'}
        ],
        [   {mark: '', text: 'I like working on '},
            {mark: 'highlight', text: 'innovative and challenging projects. '},
            {mark: '', text: 'Being part of such projects helps me improve my skills and move forward in my programming career.'}
        ],
        [   {mark: '', text: 'Overcoming challenges and seeing the final results gives me a strong sense of accomplishment. For me, the true beauty of programming lies in '},
            {mark: 'highlight', text: 'turning difficult tasks into successful outcomes '},
            {mark: '', text: 'through patience, logic, and creativity.'}            
        ]
    ]

    skills = [ 
        {id: 1, image: PortfolioAssets + '/SkillsLogos/html-logo.png', name: 'HTML', rate: '8', progress: '80%', done: false },
        {id: 2, image: PortfolioAssets + '/SkillsLogos/css-logo.png', name: 'CSS', rate: '7', progress: '70%', done: false },
        {id: 3, image: PortfolioAssets + '/SkillsLogos/javascript-logo.png', name: 'JavaScript', rate: '6', progress: '60%', done: false },
        {id: 4, image: PortfolioAssets + '/SkillsLogos/salesforce-logo.png', name: 'Salesforce', rate: '9', progress: '90%', done: false },
        {id: 5, image: PortfolioAssets + '/SkillsLogos/apex-logo.png', name: 'Apex', rate: '7', progress: '70%', done: false },
        {id: 6, image: PortfolioAssets + '/SkillsLogos/office-logo.png', name: 'Microsoft', rate: '9', progress: '90%', done: false },
        {id: 7, image: PortfolioAssets + '/SkillsLogos/shell-script-logo.png', name: 'Shell Script', rate: '8', progress: '80%', done: false },
        {id: 8, image: PortfolioAssets + '/SkillsLogos/mysql-logo.png', name: 'MySQL', rate: '7', progress: '70%' },
        //{image: PortfolioAssets + '/SkillsLogos/java-logo.png', name: 'JAVA', rate: '7', progress: '70%' },
    ]

    projects = [
        {id: 0, type: 'LWC', image: PortfolioAssets + '/Projects/bmi.png', name: 'BMI Calculator', desc: 'Calculate your Body Mass Index', link: 'https://chaitanya147-dev-ed.develop.my.site.com/bmi-calculator'}, 
        {id: 1, type: 'LWC', image: PortfolioAssets + '/Projects/clock.png', name: 'Alarm Clock', desc: 'Set Alarm for any specific time', link: 'https://chaitanya147-dev-ed.develop.my.site.com/alarm-clock'}, 
        {id: 2, type: 'API', image: PortfolioAssets + '/Projects/currency.png', name: 'Currency Converter', desc: 'Compare and convert currency values', link: 'https://chaitanya147-dev-ed.develop.my.site.com/currency-converter'}, 
        {id: 3, type: 'API', image: PortfolioAssets + '/Projects/weather.png', name: 'Weather', desc: 'Get the weather report of a city', link: 'https://chaitanya147-dev-ed.develop.my.site.com/weatherapp'}, 
        {id: 4, type: 'LWC', image: PortfolioAssets + '/Projects/employee.png', name: 'Employee Survey', desc: 'Fill your employee satisfaction survey', link: 'https://chaitanya147-dev-ed.develop.my.site.com/employeesurvey/survey/runtimeApp.app?invitationId=0KidL0000000h4z&surveyName=employeesurvey&UUID=dab56a79-768d-4542-b33b-824c3e819981'}, 
        {id: 5, type: 'APP', image: PortfolioAssets + '/Projects/notes.png', name: 'Notes', desc: 'Use this notepad for taking notes', link: 'https://chaitanya147-dev-ed.develop.my.site.com/notetakingapp'}
    ]
    filteredProjects = this.projects

    salesforceexp = [
        [   {mark: '', text: 'Worked as Salesforce Developer for a duration of 1 year after joining the organization, Contributing to the development and customization of applications as per the Client Requirements. My responsibilities involve implementing, optimizing and innovating business processes through '},
            {mark: 'highlight2', text: 'Apex programming and Flow automation.'}
        ],
        [   {mark: 'highlight2', text: 'For 2 years, '},
            {mark: '', text: 'I worked as a Salesforce Administrator for Salesforce integrating with Onelink ERP Application. The application has a broad range of features, including Data Migrations, Invoice management, Purchasing Orders, and maintaining Batch jobs.'}
        ],
        [   {mark: '', text: 'As I support the application, Maintaining environments is a key focus, along with the management of smooth operation of processes. Additionally, I have performed '},
            {mark: 'highlight2', text: 'maintenance and deployments '},
            {mark: '', text: 'on sandboxes and production environment. Along with Embarkation, disembarkation and '},
            {mark: 'highlight2', text: 'changing permissions '},
            {mark: '', text: 'has done to new or existing users.'}
        ]
    ]

    automationexp = [
        [   {mark: '', text: 'As a secondary initiative, I was assigned to develop automation scripts using both '},
            {mark: 'highlight2', text: 'PowerShell and Bash, '},
            {mark: '', text: 'for several routine operational tasks. These automations have significantly minimized manual effort by handling daily sanity checks, automating weekly application and server recycles, and efficiently pulling and generating various performance and compliance reports.'}
        ]
    ]

    btech = {year: '2022', type: 'Graduation (B-Tech)', detail: 
            [   {mark: '', text: 'Graduated from Sir '}, 
                {mark: 'highlight', text: 'C.R.Reddy College of Engineering'}, 
                {mark: '', text: 'in the stream of '}, 
                {mark: 'highlight', text: 'Computer science '},
                {mark: '', text: 'with a CGPA of 7.6'}
            ] }
    hsc = {year: '2018', type: 'HSC (12th class)', detail: 
            [   {mark: '', text: 'Completed my HSC at '},
                {mark: 'highlight', text: 'Sri Chaitanya Junior College '},
                {mark: '', text: 'in the stream of '},
                {mark: 'highlight', text: 'MPC '},
                {mark: '', text: 'with a percentage of 93.7%'}
            ] }
    ssc = {year: '2016', type: 'SSC (10th class)', detail: 
            [   {mark: '', text: 'Completed my SSC at '},
                {mark: 'highlight', text: 'Dr.KKR Gowtham Concept EM School '},
                {mark: '', text: 'with a cumulative CGPA of 8.5'}
            ] }

    hobbies = [
        [   {mark: '', text: 'I find great enjoyment in playing '},
            {mark: 'highlight', text: 'Video Games'},
            {mark: '', text: ', which offer immersive storytelling and the opportunity to explore virtual worlds. I enjoy the thrill of competitive multiplayer games and Problem solving puzzle games.'}
        ],
        [   {mark: 'highlight', text: 'Music '},
            {mark: '', text: 'plays a huge role in my life. Whenever I am listening to music, it helps me stay grounded and keeps me motivated. I have a pretty broad taste in music, and I enjoy exploring different genres.'}
        ],
        [   {mark: '', text: 'Working out at the '},
            {mark: 'highlight', text: 'Gym '},
            {mark: '', text: 'is a big part of my routine. Whether it is weightlifting, cardio, or trying out new exercises, I always feel more energized and accomplished after a good workout. Which helps me stay fit and focused.'}
        ]
    ]

    socialMediaLinks = [
        //{image: PortfolioAssets + '/SocialMedia/facebook-logo.png', name: 'Facebook', link: 'https://www.facebook.com/share/5C64dGkBk2suRxDM/'},
        {image: PortfolioAssets + '/SocialMedia/linkedin-logo.png', name: 'Linkedin', link: 'https://www.linkedin.com/in/chaitanya-gudey-745889219/'},
        {image: PortfolioAssets + '/SocialMedia/whatsapp-logo.png', name: 'Whatsapp', link: 'https://wa.me/6305161979/'},
        {image: PortfolioAssets + '/SocialMedia/github-logo.png', name: 'Github', link: 'https://github.com/gudeychaitanya147/'},
        {image: PortfolioAssets + '/SocialMedia/trailhead-logo.png', name: 'Trailhead', link: 'https://www.salesforce.com/trailblazer/cg147/'}
    ]

    // Callback methods
    connectedCallback() {
        window.addEventListener('scroll', this.showNav);
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('scroll', this.animateEducation);
        window.addEventListener('scroll', this.animateSkills);
    }

    disconnectedCallback() {
        window.removeEventListener('scroll', this.showNav);
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('scroll', this.animateEducation);
        window.removeEventListener('scroll', this.animateSkills);
    }

    // navigation Behaviour
    openNav() {
        this.template.querySelector('.banner').classList.add('scroll-stop')
        this.template.querySelector('.navigation-slide').classList.add('openNav')
    }
    closeNav() {
        this.template.querySelector('.banner').classList.remove('scroll-stop')
        this.template.querySelector('.navigation-slide').classList.remove('openNav')
    }
    showNav = () => {
        const element = this.template.querySelector('.about-scroll')
        const nav = this.template.querySelector('.navigation-fixed')
        const rect = element.getBoundingClientRect();

        if(rect.top <= nav.offsetHeight) {
            nav.classList.remove('animate-title-out')
            nav.classList.add('animate-title-in')
            this.titleDisplay = true
        }
        else {
            if(this.titleDisplay) {
                nav.classList.remove('animate-title-in')
                nav.classList.add('animate-title-out')
            }
        }
    }

    // Animate exp on scroll
    animateEducation = () => {
        if(this.animationDisplay.every(x => x)) return;

        const right = this.template.querySelectorAll('.right');
        const left = this.template.querySelectorAll('.left');
        this.checkAnimation(right[0], 'animate-left', 0)
        this.checkAnimation(right[1], 'animate-left', 1)
        this.checkAnimation(left[0], 'animate-right', 2)
        this.checkAnimation(left[1], 'animate-right', 3)
    }
    checkAnimation(element, animate, num) {
        if(element) {
            const rect = element.getBoundingClientRect();
            if(window.innerHeight >= rect.top + element.offsetHeight) {
                element.classList.add(animate)
                this.animationDisplay[num] = true
            }
        }
    }

    // Animate skills on scroll 
    animateSkills = () => {
        if(this.skills[this.skills.length - 1].done) return;

        this.skills.forEach(skill => {
            const progressBar = this.template.querySelector(`.progress div[data-id="${skill.id}"]`);
            const skillName = this.template.querySelector(`.skill-name[data-id="${skill.id}"]`);
            if (progressBar && skillName) {
                const rect = progressBar.getBoundingClientRect();
                if(window.innerHeight >= rect.top + skillName.offsetHeight) {
                    progressBar.style.width = skill.progress;
                    skillName.style.width = skill.progress;
                    skill.done = true;
                }
            }
        });
    }

    // Animate Image on scroll 
    handleScroll = () => {
        const mountainSection = this.template.querySelector('.mountain');
        const image = this.template.querySelector('.mountain img');

        if (mountainSection && image) {
            const rect = mountainSection.getBoundingClientRect();
            if(window.innerHeight >= rect.top) {
                const offset = (rect.top * 0.3) - 200;
                image.style.transform = `translateY(${offset}px)`;
            }
        }
    };

    // Switch between dark and light theme
    changeTheme(event) {
        event.preventDefault();
        const element = event.target
        const banner = this.template.querySelector('.application')

        if(this.themeIcon === this.lightMode) {
            this.themeIcon = this.darkMode
            banner.classList.remove('light-mode')
            banner.classList.add('dark-mode')
            this.socialMediaLinks.forEach(item => {
                item.image.replace('.png', '-og.png')
            })
        }
        else if(this.themeIcon === this.darkMode) {
            this.themeIcon = this.lightMode
            banner.classList.remove('dark-mode')
            banner.classList.add('light-mode')
        }
    }

    // Select Project Category
    selectProjectCategory(event) {
        event.preventDefault();
        const element = event.target;
        const selectedCategory = element.dataset.category;
        const projectAnchors = this.template.querySelector('.projects .btn');
        if(element === projectAnchors) return;

        element.classList.add('btn');
        projectAnchors.classList.remove('btn');

        if (selectedCategory === 'ALL') {
            this.filteredProjects = this.projects;
        } else {
            this.filteredProjects = this.projects.filter(
                project => project.type === selectedCategory
            );
        }
        requestAnimationFrame(() => {
            const tiles = this.template.querySelectorAll('.project-items');
            tiles.forEach(tile => {
                tile.classList.remove('animate-up');
                void tile.offsetWidth;
                tile.classList.add('animate-up');
            });
        });
    }

    //Change icon on hover
    handleMouseEnter(event) {
        if(this.isValid.copied) return;

       const icon = event.target.name
        if(icon === 'mail') {
            this.gmail.icon = 'utility:copy';
        }
        else if(icon === 'phone') {
            this.phone.icon = 'utility:copy';
        }
        else if (icon === 'locale') {
            this.locale.icon = 'utility:copy';
        }
    }

    //Change back icon after hover
    handleMouseLeave(event) {        
        const icon = event.target.name
        if(icon === 'mail') {
            this.gmail.icon = 'utility:email';
        }
        else if(icon === 'phone') {
            this.phone.icon = 'utility:call';
        }
        else if(icon === 'locale') {
            this.locale.icon = 'utility:checkin';
        }
    }

    // Copy to Clipboard
    copyData(event) {
        this.isValid.copied = true;
        const element = event.target.name;

        if (element === 'mail') {
            this.copyContent(this.gmail.name);
            this.gmail.icon = 'utility:check';

            setTimeout(() => {
                this.isValid.copied = false;
                this.gmail.icon = 'utility:email';
            }, 1000);
        } 
        else if (element === 'phone') {
            this.copyContent(this.phone.name);
            this.phone.icon = 'utility:check';

            setTimeout(() => {
                this.isValid.copied = false;
                this.phone.icon = 'utility:call';
            }, 1000);
        } 
        else if (element === 'locale') {
            this.copyContent(this.locale.name);
            this.locale.icon = 'utility:check';

            setTimeout(() => {
                this.isValid.copied = false;
                this.locale.icon = 'utility:checkin';
            }, 1000);
        }
    }

    // Copy to Clipboard
    copyContent(content) {
        navigator.clipboard.writeText(content);
    }

    // goto Heading Page
    gotoPage(event) {
        event.preventDefault();
        this.closeNav()        
        const index = event.target.dataset.id;
        const block = this.template.querySelector(this.navData[index].class)
        const y = block.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }

    // open selected Project
    openProject(event) {
        event.preventDefault();
        const index = event.target.dataset.id
        window.open(this.projects[index].link, '_blank')
    }

    downloadResume(event) {
        event.preventDefault();
        window.open(this.resume, '_blank')
    }

    openProfile(event) {
        window.open(event.target.dataset.link, '_blank')
    }

    // update Textarea variables
    updateTextarea(event) {
        const element = event.target
        const content = element.value

        if(element.name === 'fullname') {
            this.messageDetails.name = content
        } 
        else if(element.name === 'email') {
            this.messageDetails.email = content
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            if (emailRegex.test(this.messageDetails.email) || this.messageDetails.email === '') {
                this.isValid.error = false
            } else {
                this.isValid.error = true
            }
        }
        else if(element.name === 'message') {
            this.messageDetails.message = content
        }
    }

    //send Mail
    sendMail(event) {
        event.preventDefault();
        if(this.isValid.error || this.messageDetails.name === '' || this.messageDetails.message === '' || this.messageDetails.email === '') {
            this.toastMessage.mailsentMsg = 'Please fill the details'
            this.isValid.mail = true
        }
        else {
            this.toastMessage.mailsentMsg = 'Mail Sent'
            this.isValid.mail = true
            sendContactEmail({ userName: this.messageDetails.name, userEmail: this.messageDetails.email, userMessage: this.messageDetails.message})
            this.messageDetails.name = ''
            this.messageDetails.email = ''
            this.messageDetails.message = ''
            this.template.querySelector('.name').value = '';
            this.template.querySelector('.email').value = '';
            this.template.querySelector('.message').value = '';
        }
        setTimeout(() => {
            this.isValid.mail = false;
        }, 3000);
    }
}
