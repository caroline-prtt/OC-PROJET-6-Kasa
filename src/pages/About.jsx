import Banner from "../components/banner/Banner"
import Collapse from "../components/collapse/Collapse";
import imageBannerAbout from "../assets/image-banner-about.jpg"

let aboutFiability = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";
let aboutRespect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
let aboutService="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
let aboutSecurity="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

function About (){
    return (
        <main>
          <Banner img={imageBannerAbout}/>
          <Collapse title="Fiabilité" content={aboutFiability}/>
          <Collapse title="Respect" content={aboutRespect}/>
          <Collapse title="Service" content={aboutService}/>
          <Collapse title="Sécurité" content={aboutSecurity}/>
        </main>   
    );
}

export default About;