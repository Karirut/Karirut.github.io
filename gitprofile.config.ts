// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Karirut', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['Karirut/Evidencia2_analisisR', 'Karirut/evidencia1_analisisR', 'Karirut/capstone_proyect_phyton', 'Karirut/prehack-web' ], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['Karirut/ImplementacionRoboticaInteligente', 'AlgoLozano/Lingua_Rescue_THALES', 'AlogoZano/Stress-level-recognition', 'Karirut/IRI-ROS2'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Peer Program',
          description:
            ' shared knowledge and experience with students in their freshman year to help them adapt to the school’s campus and system, in order to be accepted, applicants must participate in psychologic tests and different interviews.',
          imageUrl:
            '',
        },
        
        {
          title: 'Beautiful Patterns',
          description:
            'I taught web design lessons to girls between ages 12 to 17 in a one weeklong camp where they learned computational development in the languages of HTML, CSS and Java. The second objective of women teaching girls was to inspire them to be interested in STEM areas.',
          imageUrl:
            '',
        },
        {
          title: 'Concurso Iberoamericano de Satélites Enlatados - Semi Finalist',
          description:
            'I worked alongside other 4 teammates in the fabrication of a canned satellite that needed to send signals to the ground computer and to arrive safely protecting an egg in its interior.',
          imageUrl:
            '',
          link: 'http://peu.unam.mx/cansat2023.html',
        },
        {
          title: 'First EDS Student Meeting: climate change, problems and perspectives',
          description:
            'I participated in dialog tables with students in different careers and different campuses about climate change. There were also participating expertise in the field.',
          imageUrl:
            '',
        },
        {
          title: 'HACKMTY',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            '',
          link: 'https://hackmty.com/',
        },
        {
          title: 'HACKMX5 - Third Place Winner',
          description:
            'Interpretation and transcription of 911 calls with the objective of classifying those who may be prank calls or the ones that require immediate attention. Apart from the software part, it also contains a display which showed who was calling and the location of the incident, plus an integrated alarm to inform the police or firefighters of the emergency.',
          imageUrl:
            '',
          link: 'https://www.instagram.com/techackmx/',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Karina Ruiz Tron',
    description: 'Hello there! Get to know me :D',
    imageURL: '',
  },
  social: {
    linkedin: 'karina-ruiz-tron',
    //twitter: 'arif_szn',
    //mastodon: 'arifszn@mastodon.social',
    //researchGate: '',
    //facebook: '',
    //instagram: '',
    //reddit: '',
    //threads: '',
    //youtube: '', // example: 'pewdiepie'
    //udemy: '',
    //dribbble: '',
    //behance: '',
    //medium: 'arifszn',
    //dev: 'arifszn',
    //stackoverflow: '', // example: '1/jeff-atwood'
    //skype: '',
    //telegram: '',
    //website: 'https://www.arifszn.com',
    phone: '+52 5572121753',
    email: 'karina.rtron@hotmail.com',
  },
  resume: {
    fileUrl:
      'https://www.dropbox.com/scl/fi/gvym3faty0hg0zs3iayma/KarinaRuizTron-CV.pdf?rlkey=1nwvljc080ydndah9cbqwvljf&st=ckevtg9m&dl=0', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'C',
    'C++',
    'HTML/CSS',
    'JavaScript',
    'AVR Assembly',
    'ROS2',
    'MATLAB/Simulink',
    'Microcontrollers',
    'Microsoft Office',
  ],
  experiences: [
    {
//      company: 'Company Name',
//      position: 'Position',
//      from: 'September 2021',
//      to: 'Present',
//      companyLink: 'https://example.com',
    },
  ],
  certifications: [
//    {
//      name: 'Lorem ipsum',
//      body: 'Lorem ipsum dolor sit amet',
//      year: 'March 2022',
//      link: 'https://example.com',
//    },
  ],
  educations: [
    {
      institution: 'Instituto Tecnológico de Estudios Superiores Monterrey',
      degree: 'Robotics and Digital Systems Engineer Student',
      from: '2021',
      to: '2025 (Projected)',
    },
  ],
  publications: [
//    {
//      title: 'Publication Title',
//      conferenceName: '',
//      journalName: 'Journal Name',
//      authors: 'John Doe, Jane Smith',
//      link: 'https://example.com',
//      description:
//        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//    },
//    {
//      title: 'Publication Title',
//      conferenceName: 'Conference Name',
//      journalName: '',
//      authors: 'John Doe, Jane Smith',
//      link: 'https://example.com',
//      description:
//        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
//    source: 'dev', // medium | dev
//    username: 'arifszn', // to hide blog section, keep it empty
//    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
//    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/Karirut"
      target="_blank"
      rel="noreferrer"
    >Karirut</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
