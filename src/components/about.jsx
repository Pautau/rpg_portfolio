import '../assets/styles/about.css';

function About() {
    return (
        <div className="about">
            <div className="about-card">
                <div className="about-row">

                    <span className="about-label">
                        <i className="fas fa-user"></i> Nom
                    </span>
                    <span className="about-value">Florian</span>
                </div>

                <div className="about-row">
                    <span className="about-label">
                        <i className="fas fa-code"></i> Spécialité
                    </span>
                    <span className="about-value">Développeur Full Stack (Node.js)</span>
                </div>

                <div className="about-row">
                    <span className="about-label">
                        <i className="fas fa-bullseye"></i> Objectif
                    </span>
                    <span className="about-value">
                        Concevoir des applications fiables, maintenables et agréables à utiliser.
                    </span>
                </div>
            </div>
            <div className="about-separator" />
            <div className="about-card-description">
                <div className="about-description">
                    <h3><i className="fas fa-scroll"></i> Description</h3>

                    <p>
                        Je m'intéresse au développement depuis longtemps,
                        j'écrivais déjà de petits scripts pour mes propres
                        besoins bien avant de mettre les pieds à l'école.
                        C'est mon alternance chez MovingLab qui m'a ensuite
                        donner encore plus envie de continuer, en m'apprenant le
                        développement full stack sur un projet bien réel
                        plutôt que sur des tutoriels. Depuis, j'ai gardé
                        cette habitude de construire les choses de A à Z,
                        ce qui m'a naturellement mené à me lancer seul dans Gyroïde, 
                        un bot Discord que je façonne depuis un
                        an avec l'aide de mes alpha-testeurs. 
                        En parallèle, je suis à la recherche d'une entreprise pour parfaire mes compétences et en apprendre de nouvelles.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
