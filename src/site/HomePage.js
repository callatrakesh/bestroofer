
import HomeBanner from "./HomeBanner";
import HomeIntro from "./HomeIntro";
import HomeServices from "./HomeServices";
import HomeWhyChooseUse from "./HomeWhyChooseUs";
import HomeRecentProject from "./HomeRecentProject";
import HomeTestimonials from "./HomeTestimonials";
function HomePage(){
    return(
        <>
            <HomeBanner/>
            <HomeIntro/>
            <HomeServices/>
            <HomeWhyChooseUse/>
            <HomeRecentProject/>
            <HomeTestimonials/>
        </>
    );
}

export default HomePage;