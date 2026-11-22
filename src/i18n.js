import { createI18n } from 'vue-i18n'

const savedLocale = window.localStorage.getItem('portfolio-locale')
const browserLocale = window.navigator.language.toLowerCase().startsWith('en') ? 'en' : 'nl'

export default createI18n({
  legacy: false,
  locale: savedLocale === 'en' || savedLocale === 'nl' ? savedLocale : browserLocale,
  fallbackLocale: 'nl',
  messages: {
    nl: {
      app: { title: 'Kristof Moons | Portfolio', language: 'Taalkeuze', duck: 'Rubberen eend als debugbuddy', socials: 'Sociale profielen' },
      nav: {
        home: 'Home', about: 'Over mij', skills: 'Vaardigheden', resume: 'Ervaring', contact: 'Contact',
        label: 'Navigatie', accessibility: 'Hoofdnavigatie', location: 'Duffel, België', email: 'Stuur een bericht', menu: 'Menu', close: 'Sluiten', scrollTop: 'Terug naar boven',
      },
      hero: {
        eyebrow: 'Portfolio', location: 'Duffel, België',
        introBefore: 'Ik ben een', role: 'software developer', introAfter: '. Ik leer graag bij en haal er plezier uit om ideeën om te zetten in iets dat werkt.',
        link: 'Bekijk mijn verhaal',
      },
      about: {
        eyebrow: 'Even voorstellen', title: 'Over mij',
        paragraphs: [
          'Ik ben een rustige en behulpzame softwareontwikkelaar met een grote nieuwsgierigheid naar technologie. Ik haal voldoening uit het doorgronden van problemen, het ontdekken van nieuwe dingen en het omzetten van ideeën in werkende oplossingen.',
          'Wat mij het meest aanspreekt in softwareontwikkeling, is de uitdaging. Wanneer ik na veel uitzoeken, experimenteren en proberen een complexe uitdaging tot een goed einde breng, geeft dat me enorm veel voldoening. De drang om bij te leren en mezelf te blijven uitdagen motiveert me om steeds verder te groeien als softwareontwikkelaar.',
          'Buiten het programmeren houd ik me graag creatief bezig. Of ik nu gitaar speel, teken of game, ik vind het leuk om mezelf op verschillende manieren uit te drukken en nieuwe dingen te ontdekken.',
        ],
        githubText: 'Bekijk mijn openbare projecten en code.', linkedinText: 'Bezoek mijn profiel voor meer informatie over mijn professionele ervaring.',
      },
      skills: {
        eyebrow: 'Waar ik mee werk', title: 'Vaardigheden',
        description: 'Technologieën waarmee ik ervaring heb opgedaan tijdens mijn opleiding, stages en werk.',
        listLabel: 'Vaardigheden, horizontaal bladerbaar', previous: 'Vorige vaardigheden', next: 'Volgende vaardigheden',
        pagination: 'Vaardighedenpagina kiezen', page: 'Pagina {page}',
        groups: {
          web: 'Webbasis', frontend: 'Front-end frameworks', languages: 'Programmeertalen', typescript: 'TypeScript',
          backend: 'Back-end en queries', data: 'Databases en data', tools: 'Ontwikkeltools', crossPlatform: 'Cross-platform',
        },
      },
      resume: {
        summary: 'Opleiding en stages', professional: 'Werkervaring', degree: 'Graduaat Programmeren',
        education: 'Tijdens mijn opleiding bouwde ik een stevige basis op in fullstackontwikkeling met Java en JavaScript. Ook werkte ik met frameworks zoals React en Java Spring en kreeg ik les in databases, netwerken, besturingssystemen en projectmanagement. Zo bereidde ik me voor op de praktijk.',
        cv: 'Bekijk mijn cv', cvLabel: 'Toekomst',
        peoplewareTitle: 'Stage bij PeopleWare',
        peopleware: 'Tijdens mijn stage bij PeopleWare werkte ik samen met een klasgenoot aan PPW Applicants, een applicatie ter vervanging van Google Sheets en Google Drive. Ik richtte me vooral op de backend en leerde werken met C#. Onze mentor gaf feedback op onze code, waardoor ik nieuwe inzichten opdeed.',
        xpTitle: 'Stage bij XP DAYS',
        xp: 'Tijdens mijn stage bij XP DAYS werkte ik met twee andere studenten aan een nieuwe versie van een conferentieapplicatie. We gebruikten React en Firebase. Zo deed ik ervaring op met beide technologieën en leerde ik hoe waardevol samenwerken is bij het ontwikkelen van software.',
        dad: 'DAD Think Marketing', role: 'Full-stack developer',
        dadIntro: 'Als fullstackdeveloper werkte ik aan de verdere ontwikkeling en het onderhoud van Folome, een platform voor eventmanagement en marketingautomatisering.',
        dadWork: 'Ik ontwikkelde zelfstandig nieuwe functionaliteiten, verbeterde bestaande onderdelen en zette registratiewebsites voor klanten live.',
        highlights: 'Mijn belangrijkste werkzaamheden en resultaten:',
        bulletFrontend: 'Frontend- en backendfunctionaliteiten binnen Folome ontwikkelen en onderhouden.',
        bulletTracking: 'Statistieken en tracking voor e-mailcampagnes implementeren.',
        bulletCampaigns: 'Functionaliteiten uitbreiden voor het versturen van EDM- en sms-campagnes.',
        bulletRegistration: 'Registratieplatformen op maat van klanten ontwikkelen en publiceren.',
        bulletData: 'Werken met databases, complexe queries en dataverwerking.',
        bulletIndependent: 'Zelfstandig ontwikkeltaken uitvoeren, met code reviews en begeleiding van een senior developer.',
        technologies: 'Technologieën:', technologyList: 'Vue 3, TypeScript, Prisma, Kysely, SQL en Docker.', next: 'Volgende uitdaging', nextTitle: 'undefined',
      },
      contact: {
        eyebrow: 'Stuur gerust een bericht', title: 'Contact',
        description: 'Heb je een vraag of opmerking? Neem gerust contact met me op. Ik reageer zo snel mogelijk.',
        email: 'E-mail', phone: 'Telefoon', address: 'Adres', map: 'Kaart van Beekaardstraat 20 in Duffel',
        name: 'Naam', subject: 'Onderwerp', message: 'Bericht', send: 'Bericht versturen',
        sent: 'Je e-mailprogramma wordt geopend om je bericht te versturen.',
        subjectDefault: 'Contact via mijn portfolio', bodyName: 'Naam', bodyEmail: 'E-mail', bodyPhone: 'Telefoon',
      },
    },
    en: {
      app: { title: 'Kristof Moons | Portfolio', language: 'Language', duck: 'Rubber duck debugging buddy', socials: 'Social profiles' },
      nav: {
        home: 'Home', about: 'About me', skills: 'Skills', resume: 'Experience', contact: 'Contact',
        label: 'Navigation', accessibility: 'Main navigation', location: 'Duffel, Belgium', email: 'Send a message', menu: 'Menu', close: 'Close', scrollTop: 'Back to top',
      },
      hero: {
        eyebrow: 'Portfolio', location: 'Duffel, Belgium',
        introBefore: 'I am a', role: 'software developer', introAfter: '. I enjoy learning and turning ideas into things that work.',
        link: 'Discover my story',
      },
      about: {
        eyebrow: 'A little introduction', title: 'About me',
        paragraphs: [
          'I am a calm and helpful software developer with a strong curiosity about technology. I enjoy understanding problems, discovering new things, and turning ideas into working solutions.',
          'What I enjoy most about software development is the challenge. Finding a way through research, experimentation, and persistence to solve a complex problem gives me a great sense of accomplishment. My drive to keep learning and challenging myself motivates me to continue growing as a developer.',
          'Outside programming, I enjoy creative activities. Whether I am playing guitar, drawing, or gaming, I like expressing myself in different ways and discovering new things.',
        ],
        githubText: 'Explore my public projects and code.', linkedinText: 'Visit my profile to learn more about my professional experience.',
      },
      skills: {
        eyebrow: 'What I work with', title: 'Skills',
        description: 'Technologies I have gained experience with during my studies, internships, and work.',
        listLabel: 'Skills, horizontally scrollable', previous: 'Previous skills', next: 'Next skills',
        pagination: 'Choose skills page', page: 'Page {page}',
        groups: {
          web: 'Web foundations', frontend: 'Front-end frameworks', languages: 'Programming languages', typescript: 'TypeScript',
          backend: 'Back end and queries', data: 'Databases and data', tools: 'Development tools', crossPlatform: 'Cross-platform',
        },
      },
      resume: {
        summary: 'Education and internships', professional: 'Work experience', degree: 'Associate degree in Programming',
        education: 'I built a solid foundation in full-stack development with Java and JavaScript and worked with frameworks such as React and Spring. I also studied databases, networking, operating systems, and project management, which prepared me well for professional practice.',
        cv: 'View my CV', cvLabel: 'Future',
        peoplewareTitle: 'Internship at PeopleWare',
        peopleware: 'During my internship at PeopleWare, I worked with a classmate on PPW Applicants, an application designed to replace Google Sheets and Google Drive. I focused mainly on the backend and learned to work with C#. Our mentor reviewed our code and helped me gain new insights.',
        xpTitle: 'Internship at XP DAYS',
        xp: 'During my internship at XP DAYS, I worked with two other students on a new version of a conference management application. We used React and Firebase. I gained experience with both technologies and learned how valuable collaboration is when building software.',
        dad: 'DAD Think Marketing', role: 'Full-stack developer',
        dadIntro: 'As a full-stack developer, I worked on the continued development and maintenance of Folome, an event management and marketing automation platform.',
        dadWork: 'I independently developed new features, improved existing functionality, and launched registration websites for clients.',
        highlights: 'Some of my key responsibilities and contributions:',
        bulletFrontend: 'Developing and maintaining frontend and backend features in Folome.',
        bulletTracking: 'Implementing analytics and tracking for email campaigns.',
        bulletCampaigns: 'Expanding functionality for sending EDM and SMS campaigns.',
        bulletRegistration: 'Developing and publishing custom registration platforms for clients.',
        bulletData: 'Working with databases, complex queries, and data processing.',
        bulletIndependent: 'Working independently on development tasks, with code reviews and guidance from a senior developer.',
        technologies: 'Technologies:', technologyList: 'Vue 3, TypeScript, Prisma, Kysely, SQL, and Docker.', next: 'Next challenge', nextTitle: 'undefined',
      },
      contact: {
        eyebrow: 'Feel free to get in touch', title: 'Contact',
        description: 'Have a question or comment? Feel free to get in touch. I will get back to you as soon as possible.',
        email: 'Email', phone: 'Phone', address: 'Address', map: 'Map of Beekaardstraat 20 in Duffel',
        name: 'Name', subject: 'Subject', message: 'Message', send: 'Send message',
        sent: 'Your email app will open so you can send your message.',
        subjectDefault: 'Contact via my portfolio', bodyName: 'Name', bodyEmail: 'Email', bodyPhone: 'Phone',
      },
    },
  },
})