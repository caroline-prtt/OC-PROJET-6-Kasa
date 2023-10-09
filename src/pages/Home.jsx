import Banner from "../components/banner/Banner"
import imageBanner from "../assets/image-banner-home.jpg"

function Home() {
  return (
      <main>
        <Banner img={imageBanner} text="Chez-vous, partout et ailleurs"/>
        <p>ACCUEIL</p>
      </main>   
  );
}

export default Home;
