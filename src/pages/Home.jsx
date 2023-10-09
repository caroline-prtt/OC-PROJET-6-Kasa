import Banner from "../components/banner/Banner"
import imageBannerHome from "../assets/image-banner-home.jpg"
import Gallery from "../components/gallery/Gallery";

function Home() {
  return (
      <main>
        <Banner img={imageBannerHome} text="Chez-vous, partout et ailleurs"/>
        <Gallery/>
      </main>   
  );
}

export default Home;
