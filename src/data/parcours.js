export const parcours = [
    {
        date: "2020 – 2021",
        title: "BAC +2 Développement Web / Web Mobile — AFPA",
        description: "Une année de formation intensive pour apprendre les bases du développement web et mobile.",
        status: "completed",
        info: {
            intro: "Une formation d'un an à l'AFPA qui m'a permis de poser les bases du développement web et mobile, entre intégration, algorithmique et bases de données, avant de continuer en alternance.",
            features: [],
            stack: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "React Native", "SQL", "PHP", "Symfony"]
        }
    },
    {
        date: "2021 – 2023",
        title: "BAC+4, Alternance Dév. Full-Stack — MovingLab",
        description: "Deux ans en alternance à travailler avec React / Node.js, BAC +4 obtenu auprès de l'école ENI.",
        status: "completed",
        info: {
            intro: "Mobilio est une application SaaS de gestion de déménagement pour professionnels, elle permet aux déménageurs de gérer leur emplois du temps, créer des devis, suivre l'état d'un déménagement et optimiser leurs trajets.",
            features: [
                {
                    icon: "fab fa-react",
                    title: "Application SaaS",
                    text: "Développement d'une application SaaS de gestion de déménagement pour professionnels en React/Node.js, avec algorithme d'optimisation grâce à Google Maps API."
                },
                {
                    icon: "fas fa-route",
                    title: "API Rest sécurisée",
                    text: "Utilisation d'Express.js avec des middlewares d'authentification."
                },
                {
                    icon: "fas fa-list-check",
                    title: "Création de formulaires sécurisés",
                    text: "Mise en place de formulaires complexes avec validation front/back à l'aide de Yup et Validator."
                },
                {
                    icon: "fab fa-atlassian",
                    title: "Gestion de projet",
                    text: "Travail en méthodologie Agile (SCRUM et Kanban), suivi, création et mise à jour de tickets à l'aide de Jira, rédaction et mise à jour de la documentation avec Confluence."
                },
                {
                    icon: "fas fa-mobile-screen",
                    title: "Interface responsive",
                    text: "Intégration d'un interface responsive à l'aide de Material UI, UX multi étapes, steppers et modals."
                },
                {
                    icon: "fas fa-language",
                    title: "Internationalisation",
                    text: "Utilisation de i18n pour l'internationalisation de l'application (anglais, français et allemand)."
                },
                {
                    icon: "fab fa-git-alt",
                    title: "Git",
                    text: "Gestion de versions de code, création de branche spéciale pour chaque ticket Jira pour une meilleure organisation et code review pour les pull requests depuis Gitlab."
                },
                {
                    icon: "fas fa-vial-circle-check",
                    title: "Tests unitaires et fonctionnels",
                    text: "Mise en place de tests unitaires et fonctionnels avec Jest et Cypress."
                },
            ],
            stack: ["Node.js", "TypeScript", "React", "MongoDB", "Express.js", "Material UI", "Jest", "Cypress", "Gitlab"]
        }
    },
    {
        date: "Il y a quelques mois",
        title: "Ce portfolio",
        description: "Ce portfolio a été développé avec React.",
        status: "completed",
        info: {
            intro: "Ce portfolio est pensé comme une fiche de présentation de personnage plutôt qu'un CV classique.",
            features: [
                {
                    icon: "fab fa-react",
                    title: "React",
                    text: "Un composant par onglet, données séparées de l'affichage."
                },
                {
                    icon: "fas fa-folder",
                    title: "Organisation",
                    text: "Arborescence des dossiers clairement organisée (voir sur mon repo Github)."
                },
                {
                    icon: "fas fa-mobile-screen",
                    title: "Responsive",
                    text: "Mise en page adaptée du desktop au mobile, avec des ajustements spécifiques par taille d'écran."
                },
                {
                    icon: "fas fa-palette",
                    title: "Design sur mesure",
                    text: "Thème fait main en CSS pur : dégradés or, ombres portées, police médiévale, sans librairie de composants (les icônes viennent de FontAwesome)."
                }
            ],
            stack: ["React", "CSS", "Font Awesome"]
        }
    },
    {
        date: "Depuis environ 1 an",
        title: "Développement de Gyroïde",
        description: "Bot Discord de pêche en Node.js / Discord.js, backend Supabase / PostgreSQL, appris en autodidacte.",
        status: "ongoing",
        info: {
            intro: "Gyroïde est un bot Discord de pêche inspiré d'Animal Crossing, où chaque joueur fait vivre son personnage sur une île partagée avec le reste du serveur.",
            features: [
                {
                    icon: "fas fa-fish",
                    title: "Pêche",
                    text: "112 poissons collectionnables répartis en 8 rangs de rareté, avec variantes selon la météo du jour."
                },
                {
                    icon: "fas fa-medal",
                    title: "Concours de pêche",
                    text: "Compétitions ponctuelles avec une canne à pêche imposée à tous les participants, lots à gagner."
                },
                {
                    icon: "fas fa-ship",
                    title: "Expéditions",
                    text: "Sorties en mer solo ou coopératives, avec améliorations de bateau et ressources d'amélioration."
                },
                {
                    icon: "fas fa-hammer",
                    title: "Améliorations",
                    text: "Améliorations de bateau et de canne à pêche pour pêcher de meilleurs poissons et aller encore plus loin en mer."
                },
                {
                    icon: "fas fa-crown",
                    title: "Île du serveur",
                    text: "Un maire de l'île du serveur est élu par la communauté, qui décide des bâtiments à construire et des concours à organiser."
                },
                {
                    icon: "fas fa-dice",
                    title: "Casino",
                    text: "Mini-jeux semblable au blackjack pour miser la monnaie du jeu gagnée lors d'expéditions."
                },
                {
                    icon: "fas fa-trophy",
                    title: "Classements",
                    text: "Classements par catégorie pour comparer les prises, l'avancée et les richesses des joueurs ou du serveur."
                },
                {
                    icon: "fas fa-award",
                    title: "Titres",
                    text: "Des titres à débloquer selon les accomplissements du joueur, affichables sur son profil."
                }
            ],
            stack: ["Node.js", "Discord.js", "PostgreSQL", "Hetzner (VPS Linux)"]
        }
    }
]
