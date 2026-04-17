import style from "../Styles/animation.module.css"
import IntroductionOrg from "../Organism/IntroductionOrg";
import Header from "../Molecules/Header";
import EligenosOrg from "../Organism/EligenosOrg";
import OfrecemosOrg from "../Organism/OfrecemosOrg";
import GaleriaOrg from "../Organism/GaleriaOrg";
import LocationOrg from "../Organism/LocationOrg";
import ContactOrg from "../Organism/ContactOrg";
import Footer from "../Molecules/Footer";
function HomePage(){
    return(
<>
    <div className={style.mask}></div>

    <div>
        <Header />
        <IntroductionOrg />
        <EligenosOrg></EligenosOrg>
        <OfrecemosOrg></OfrecemosOrg>
        <GaleriaOrg></GaleriaOrg>
        <LocationOrg></LocationOrg>
        <ContactOrg></ContactOrg>
        <Footer></Footer>
    </div>
</>
    )
}

export default HomePage;