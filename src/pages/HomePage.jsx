import Header from "../MainPageComponenets/Header";
import Footer from "../MainPageComponenets/Footer";
import AnimeSlider from "../MainPageComponenets/AnimeSlider";
import MainContent from "../MainPageComponenets/MainContent";
// import "../homepage.css";
const HomePage = () => {
  return( 
  
    <div>
      <Header />
      <div id="home--body">
      {/* <AnimeSlider /> */}
      <MainContent />
      </div>
      <Footer />
    </div>


  );
};

export default HomePage;
