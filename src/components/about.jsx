import '../assets/styles/about.css';

function About() {
    return (
        <div className="about">
            <div className="about-card">
                <div className="about-row">
                    <span className="label">Nom</span>
                    <span className="value">Florian</span>
                </div>

                <div className="about-row">
                    <span className="label">Spécialité</span>
                    <span className="value">Développeur Full Stack (Node.js)</span>
                </div>

                <div className="about-row">
                    <span className="label">Objectif</span>
                    <span className="value">
                        Concevoir des applications fiables, maintenables et
                        agréables à utiliser.
                    </span>
                </div>

                <div className="separator" />

                <div className="description">
                    <h3>Description</h3>

                    <p>
                        Passionné par le développement, j'aime créer des
                        applications complètes, du backend jusqu'à
                        l'interface utilisateur. J'accorde une importance
                        particulière à la qualité du code, à l'architecture
                        des projets et à l'expérience utilisateur.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;