import { LightningElement } from 'lwc';

// br4ck3ts-dev-ed.develop.lightning.force.com/resource/PortfolioAssets/SkillsLogos/html-logo.png
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'
//import retriveUser from '@salesforce/apex/MyPortfolioController.retriveUser'

export default class MyPortfolio extends LightningElement {

    navigate = false

    username = 'Chaitanya Gudey'
    designation = 'System Administrator in Peoplesoft and Salesforce CRM, TCS'
    resume = 'https://github.com/gudeychaitanya147/Salesforce/raw/main/Assets/PortfolioAssets/Chaitanya%20Gudey%20Resume.pdf'
    aboutme = [
        'I am highly regarded for my <span>troubleshooting and R&D skills.</span> Additionally I have demonstrated the <span>ability in adapting</span> to new work environment and keen intrest in expanding my knowledge. I am eager to join a dynamic team that tackles challenging projects to further enhance my programming career.',
        'I enjoy overcoming the challenges of complex programming and achieving the desired outcomes is immensely satisfying. The sense of accomplishment from successfully completing a difficult task is the true beauty of programming.' 
    ]
    yearsofexp = 2
    peoplesoftexp = [
        '<span>For 2 years,</span> I worked as a PeopleSoft Administrator for Onelink Application. This application is an integration of diverse set of functionalities like faxing documents, generating checks, calculating taxes, and storing billing information.',
        'As I support the application, my primary responsibility is to ensure <span>zero downtime.</span> While I may have encountered some challenges, Still i promptly <span>resolve the issues</span> that arise as soon as possible. Additionally, I oversee monitoring alerts, executing deployments, and addressing user inquiries related to the production environment.' 
    ]
    salesforceexp = [
        '<span>For 2 years,</span> I worked as a Salesforce Administrator for HRConnect Application. The application has a broad range of features, including data migrations, payroll generation, billing component calculations, and maintaining batch jobs.',
        'As I support the application, Maintaining environments with zero downtime is a key focus, along with the management of smooth operation of processes. Additionally, I have performed <span>maintanance and deployments</span> on sandboxes and production environment. Embarkation, disembarkation and <span>change in permissions</span> has done to new or existing users.'
    ]
    automationexp = 'I have created several <span>PowerShell and Bash script automations</span> that have significantly reduced the man hours required for daily sanity checks, weekly recycles, report pulling, and report generation.'

    badge = PortfolioAssets + '/TrailheadBadges/mountaineer.png'
    tallyCount = {badge: '2+', point: '20,000+', trail: '3+'}
    pdevcert = PortfolioAssets + '/TrailheadBadges/Platform-Developer-I.png'
    admincert = PortfolioAssets + '/TrailheadBadges/Administrator.png'
    btech = {year: '2022', type: 'Graduation (B-Tech)', detail: 'I graduated from Sir <span>C.R.Reddy College of Engineering</span> in the stream of <span>Computer science</span> with a CGPA of <span>7.6</span>'}
    hsc = {year: '2018', type: 'HSC (12th class)', detail: 'I Completed my HSC at <span>Sri Chaitanya Junior College</span> in the stream of <span>MPC</span> with a percentage of <span>93.4%</span>'}
    ssc = {year: '2016', type: 'SSC (10th class)', detail: 'I Completed my SSC at <span>Dr.KKR Gowtham Concept EM School</span> with a cumulative CGPA of <span>8.5</span>'}
    hobbies = [
        'I find great enjoyment in playing <span>Video Games</span>, which offer immersive storytelling and the opportunity to explore virtual worlds. I enjoy the thrill of competitive multiplayer games and Problem solving puzzle games.',
        '<span>Music</span> plays a huge role in my life. Whenever I am listening to music, it helps me stay grounded and keeps me motivated. I have a pretty broad taste in music, and I enjoy exploring different genres.',
        'Working out at the <span>Gym</span> is a big part of my routine. Whether it is weightlifting, cardio, or trying out new exercises, I always feel more energized and accomplished after a good workout. Which helps me stay fit and focused.'
    ]

    gmail = {icon: 'utility:email', name: 'gudeychaitanya147@gamil.com'}
    phone = {icon: 'utility:call', name: '7330876670'}
    locale = {icon: 'utility:checkin', name: 'Hyderabad, Telangana'}

    socialMediaLinks = [
        {image: PortfolioAssets + '/SocialMedia/facebook-logo.png', name: 'Facebook', link: 'https://www.facebook.com/share/5C64dGkBk2suRxDM/'},
        {image: PortfolioAssets + '/SocialMedia/linkedin-logo.png', name: 'Linkedin', link: 'https://www.linkedin.com/in/chaitanya-gudey-745889219/'},
        {image: PortfolioAssets + '/SocialMedia/whatsapp-logo.png', name: 'Whatsapp', link: 'https://wa.me/7330876670/'},
        {image: PortfolioAssets + '/SocialMedia/github-logo.png', name: 'Github', link: 'https://github.com/gudeychaitanya147/'},
        //{image: PortfolioAssets + '/SocialMedia/trailhead-logo.png', name: 'Trailhead', link: 'https://www.salesforce.com/trailblazer/cg147/'}
    ]

    projects = [
        {image: PortfolioAssets + '/Projects/bmi.png', name: 'BMI Calculator', link: 'https://br4ck3ts-dev-ed.develop.my.site.com/bmi-calculator'}, 
        {image: PortfolioAssets + '/Projects/clock.png', name: 'Alarm Clock', link: 'https://br4ck3ts-dev-ed.develop.my.site.com/alarm-clock'}, 
        {image: PortfolioAssets + '/Projects/currency.png', name: 'Currency Converter', link: 'https://br4ck3ts-dev-ed.develop.my.site.com/currency-converter'}, 
        {image: PortfolioAssets + '/Projects/weather.png', name: 'Weather', link: 'https://br4ck3ts-dev-ed.develop.my.site.com/weatherapp'}, 
        {image: PortfolioAssets + '/Projects/employee.png', name: 'Employee Survey', link: 'https://br4ck3ts-dev-ed.develop.my.site.com/employeesurvey/survey/runtimeApp.app?invitationId=0KidL0000000h4z&surveyName=employeesurvey&UUID=dab56a79-768d-4542-b33b-824c3e819981'}, 
        {image: PortfolioAssets + '/Projects/notes.png', name: 'Notes', link: 'https://br4ck3ts-dev-ed.develop.my.site.com/notetakingapp'}
    ]

    logos = [ 
        {image: PortfolioAssets + '/SkillsLogos/html-logo.png', name: 'HTML' },
        {image: PortfolioAssets + '/SkillsLogos/css-logo.png', name: 'CSS' },
        {image: PortfolioAssets + '/SkillsLogos/javascript-logo.png', name: 'JavaScript' },
        {image: PortfolioAssets + '/SkillsLogos/salesforce-logo.png', name: 'Salesforce' },
        {image: PortfolioAssets + '/SkillsLogos/apex-logo.png', name: 'Apex' },
        {image: PortfolioAssets + '/SkillsLogos/peoplesoft-logo.png', name: 'Peoplesoft' },
        //{image: PortfolioAssets + '/SkillsLogos/mysql-logo.png', name: 'MySQL' },
        {image: PortfolioAssets + '/SkillsLogos/java-logo.png', name: 'JAVA' },
        // {image: PortfolioAssets + '/SkillsLogos/python-logo.png', name: 'Python' },
        {image: PortfolioAssets + '/SkillsLogos/office-logo.png', name: 'Microsoft' },
        {image: PortfolioAssets + '/SkillsLogos/shell-script-logo.png', name: 'Shell Script' }
    ]
    
    renderedCallback() {
        this.assignDetails()
        if(window.innerWidth < 850) {  
            this.navigate = true
        }
        else {
            this.navigate = false
        }
    }

    gotoAbout() {
        this.template.querySelector('.about-scrol').scrollIntoView({ behavior: 'smooth' });
    }
    gotoProjects() {
        this.template.querySelector('.project-scrol').scrollIntoView({ behavior: 'smooth' });
    }
    gotoExperience() {
        this.template.querySelector('.experience-scrol').scrollIntoView({ behavior: 'smooth' });
    }
    gotoEducation() {
        this.template.querySelector('.education-scrol').scrollIntoView({ behavior: 'smooth' });
    }
    copyGmail() {
        this.copyCotent(this.template.querySelector('.gmail h5').textContent)
    }
    copyPhone() {
        this.copyCotent(this.template.querySelector('.phone h5').textContent)
    }
    copyLocale() {
        this.copyCotent(this.template.querySelector('.locale h5').textContent)
    }

    openProject(event) {
        const temp = String(event.target.src)
        if(temp.match('bmi')) {
            window.open(this.projects[0].link, '_blank')
        }
        else if(temp.match('clock')) {
            window.open(this.projects[1].link, '_blank')
        }
        else if(temp.match('currency')) {
            window.open(this.projects[2].link, '_blank')
        }
        else if(temp.match('weather')) {
            window.open(this.projects[3].link, '_blank')
        }
        else if(temp.match('employee')) {
            window.open(this.projects[4].link, '_blank')
        }
        else if(temp.match('notes')) {
            window.open(this.projects[5].link, '_blank')
        }
    }

    downloadResume() {
        window.open(this.resume, '_blank')
    }

    openProfile(event) {
        window.open(event.target.title, '_blank')
    }

    copyCotent(content) {
        navigator.clipboard.writeText(content).then(() => {
            console.log('Content copied to clipboard!');
        }).catch((error) => { console.error('Failed to copy content: ', error) });
    }

    openNavi() {
        if(this.navigate && this.openedNavi) {
            this.openedNavi = false
        }
        else {
            this.openedNavi = true
        }
    }

    assignDetails() {
        if(!this.openedNavi) {
            this.template.querySelectorAll('.aboutme ul li p')[0].innerHTML = this.aboutme[0].replace(/<span>/g, '<span style="color: var(--yellow);">')
            this.template.querySelectorAll('.aboutme ul li p')[1].innerHTML = this.aboutme[1].replace(/<span>/g, '<span style="color: var(--yellow);">')

            this.template.querySelectorAll('.pslist div p')[0].innerHTML = this.peoplesoftexp[0].replace(/<span>/g, '<span style="color: var(--yellow);">')
            this.template.querySelectorAll('.pslist div p')[1].innerHTML = this.peoplesoftexp[1].replace(/<span>/g, '<span style="color: var(--yellow);">')

            this.template.querySelectorAll('.sflist div p')[0].innerHTML = this.salesforceexp[0].replace(/<span>/g, '<span style="color: var(--yellow);">')
            this.template.querySelectorAll('.sflist div p')[1].innerHTML = this.salesforceexp[1].replace(/<span>/g, '<span style="color: var(--yellow);">')

            this.template.querySelector('.autolist div p').innerHTML = this.automationexp.replace(/<span>/g, '<span style="color: var(--yellow);">')

            this.template.querySelector('.btech p').innerHTML = this.btech.detail.replace(/<span>/g, '<span style="color: var(--yellow);">')
            this.template.querySelector('.hsc p').innerHTML = this.hsc.detail.replace(/<span>/g, '<span style="color: var(--yellow);">')
            this.template.querySelector('.ssc p').innerHTML = this.ssc.detail.replace(/<span>/g, '<span style="color: var(--yellow);">')

            this.template.querySelectorAll('.hobbies ul li p')[0].innerHTML = this.hobbies[0].replace(/<span>/g, '<span style="color: var(--yellow);">')
            this.template.querySelectorAll('.hobbies ul li p')[1].innerHTML = this.hobbies[1].replace(/<span>/g, '<span style="color: var(--yellow);">')
            this.template.querySelectorAll('.hobbies ul li p')[2].innerHTML = this.hobbies[2].replace(/<span>/g, '<span style="color: var(--yellow);">')
        }
    }
}