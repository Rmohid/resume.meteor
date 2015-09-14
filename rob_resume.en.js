var workExperience = [{
    title: "Senior Software Developer",
    employer: "Alcatel-Lucent",
    date: " 2006 - 2015",
    location: "Ottawa, Canada Area",
    jobs: [{
        title: "Development of automated, web based metrics. ",
        text: "Designed automated, web based metrics for code quality using PHP and Javascript to monitor code quality metrics. Generated reports directly to high level management  to track release wide memory leaks using valgrind and code coverage information using GCOV. ",
    }, {
        title: "Multi-Site test automation",
        text: "Implemented automated unit test report generation, from scratch, using Jenkins in a multi-site platform for hundreds of designers. "+
              "Provided training and supporting documentation to design teams on using in-house code coverage and memory leak tools."
    }, {
        title: "Lead designer for the RBOM high performance metrics collections system.",
        text: "Lead designer of a high performance metrics collection system used in Alcatel-Lucent radio network controllers (RNCs) and a key resource for critical technical customer issues involving user plane metrics. "+
              "Provided oversight on all design content submissions into the user plane on the RNC as part of the gatekeeping review team. "
    }, {
        title: "User Plane development work for UMTS and LTE technologies.",
        text: "Feature development done for various projects in the user plane. " +
               "Provided analysis tools, in python, to analyse and detect potential conflicts for  the XML encoded configuration parameters in large customer networks.",
    }]
}, {
    title: "Software Developer",
    employer: "Nortel Networks ",
    date: "1996 - 2006",
    location: "Ottawa, Canada Area",
    jobs: [{
        title: "Team leader for PORS",
        text: "Team leader and lead designer for a highly reliable mutli-protocol routing system designed to cover large geographical topologies. "+
              "Key technical prime for the support, testing and technical training for the customer. Coordinated multi-national field deployment with Orange France on-site. ",
    }, {
        title: "Cross platform porting from VxWorks to Linux",
        text: "Ported existing code bases from a VxWorks based environment to a new Linux bases hardware platform." +
              "Adapted existing codebase to new shared memory and fixed issues related to migration from little-endian to big-endian"
    }, {
        title: "Development for various 3G and UMTS technologies",
        text: "Software development for configuration management on 3G and UMTS technologies for base, user plane and OAM domains. "+
              "Low level flash memory driver development for DPN access devices."
    }]
}, ];

var references = [{
    name: "Holger Lambeth",
    title: "Senior Software Designer",
    employer: "Alcatel-Lucent Canada",
    picture: "images/holger1.jpg",
    link: "https://www.linkedin.com/contacts/view?id=li_2103586&trk=contacts-contacts-list-contact_name-0",
}, {
    name: "Ioannis Apostolakos",
    title: "Senior Network Support Specialist",
    employer: "Bank of Canada",
    picture: "images/ioannis1.jpg",
    link: "https://www.linkedin.com/contacts/view?id=li_10691873&trk=contacts-contacts-list-contact_name-0",
}, {
    name: "Chantal Boucher",
    title: "Project Owner",
    employer: "Alcatel-Lucent Canada",
    picture: "images/cboucher1.jpg",
    link: "https://www.linkedin.com/contacts/view?id=li_97812854&trk=contacts-contacts-list-contact_name-0",
}];

var skillData = [{
   text: "C/C++, Python, Javascript, shell scripting and Golang."
},{
   text: "Knowledge of TCP/IP, UMTS and LTE networking."
},{
   text: "Good grasp of linux system administration, PHP,  HTML and CSS."
},{
   text: "Familiar with REST APIs with XML or JSON."
},{
   text: "Familiar with jQuery, Bootstrap.js, SASS/LESS and Meteor.js."
},{
   text: "Comfortable with Git and clearcase as well as scrum/agile methodologies"
},{
   text: "Basic knowledge of SQL and MongoDb."
}];


englishVars = {
    language: "EN",
    job1: workExperience[0],
    job2: workExperience[1],
    summary: "Versatile and adaptive software development professional bringing more than 15 years in software design, development and integration. ",
    email: "rmohid@gmail.com",
    phone: "(613) 565-1794",
    education: "Education",
    address1: "393 Grey Seal Circle",
    address2: "Ottawa, On",
    experience: "Experience",
    references: "References",
    degree: "Technical degree",
    school: "Cégep de l'Outaouais",
    major: "Technologie de systèmes ordinés - Technical Computer systems",
    gradDate: "1990 - 1996",
    reference1: references[0],
    reference2: references[1],
    reference3: references[2],
    skills: "Skills",
    skillData: skillData,
}
