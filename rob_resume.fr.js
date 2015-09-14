var workExperience = [{
    title: "Dévelopeur Logiciel Sénior",
    employer: "Alcatel-Lucent",
    date: " 2006 - 2015",
    location: "Ottawa, Canada",
    jobs: [{
        title: "Automatisation et collection de métriques par le web.",
        text: "Automatisation de tests sur plusieurs differents produits pour suivre la qualité du code soumis par différents groupes. " +
              "Collation des donnés pour produire des tableux interactifs pour permettre de comparer les soumissions de code parmi les équipes. "+
              "Responsable de l'instruction technique de différents équipes pour l'utilisation d'outils tels Valgrind et GCOV."
    }, {
        title: "Développeur en chef du système de collection de métriques et mesures RBOM",
        text: "Travail en profondeur avec les optimisations en pré-compilation. Ce système a significativement réduit l'utlisation CPU d'un produit WAN a haute débit. "+
              "Expérience significative en matière de maximiser la couverture de unités de test."
    }, {
        title: "Développment sur les technologies UMTS et LTE.",
        text: "Travail effectué sur différents projects variés dans le User Plane. Production d'outils d'analyse, en python, pour la vérification sémantique de la configuration "+
              "du réseaux des clients. ",
    }]
}, {
    title: "Dévelopeur Logiciel",
    employer: "Nortel Networks ",
    date: "1996 - 2006",
    location: "Ottawa, Canada",
    jobs: [{
        title: "PORS, chef d'équipe",
        text: "Chef d'équipe pour un service de routage pour les topologies étendues. Responsable "+
              "du développement et de la vérification en plus d'être le coordonnateur de l'instruction pour "+
              "la configuration et l'utilisation du service. Personne clef pour le déploiment et l'activation du service avec Orange France.",
    }, {
        title: "Refactorisation logiciel de VxWorks a Linux",
        text: "Conversion du code source conçu pour VxWorks pour une nouvelle platforme sur Linux. "+
              "Adaptation du logiciel pour utiliser la nouvelle gestion de mémoire en plus de faire les préparatifs nécessaires pour l'"+
              "échange d'un CPU PowerPC à Intel.",

    }, {
        title: "Développment sur les technologies UMTS et 3G.",
        text: "Travail effectué dans les domaines de l'OAM et le logiciel de base. Développement de firmware pour les unités de stockage en flash."
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
   text: "C/C++, Python, Javascript, shell scripting et Golang."
},{
   text: "Réseaux TCP/IP, UMTS et LTE."
},{
   text: "Bonne connaissance de l'administration de système avec linux."
},{
   text: "Confortable avec le PHP, l'HTML et le CSS."
},{
   text: "Connaissance des interfaces REST avec XML ou JSON."
},{
   text: "jQuery, Bootstrap.js, SASS/LESS et Meteor.js."
},{
   text: "Comfortable avec Git et clearcase, connaît les méthodologies scrum/agile."
},{
   text: "Connaissance de base du SQL et de MongoDb."
}];

frenchVars = {
    language: "FR",
    job1: workExperience[0],
    job2: workExperience[1],
    summary: "Un professionnel du développment logiciel avec plus de 15 ans d'expérience qui fait preuve de versatilité dans tous les environements.", 
    email: "rmohid@gmail.com",
    phone: "(613) 565-1794",
    education: "Éducation",
    address1: "393 Grey Seal Circle",
    address2: "Ottawa, On",
    experience: "Expérience",
    references: "Références",
    degree: "Diplôme d'étude collégiale (DEC)",
    school: "Cégep de l'Outaouais",
    major: "Technologie des systèmes ordinés",
    gradDate: "1990 - 1996",
    reference1: references[0],
    reference2: references[1],
    reference3: references[2],
    skills: "Habiletés",
    skillData: skillData,
}
