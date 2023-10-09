import Banner from "../components/banner/Banner"
import imageBannerAbout from "../assets/image-banner-about.jpg"

function About (){
    return (
        <main>
          <Banner img={imageBannerAbout}/>
          <p>PAGE A PROPOS !</p>
        </main>   
    );
}

export default About;