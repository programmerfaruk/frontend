import Accordion from "../../components/Accordion/Accordion ";
import Banner2 from "../../components/Banner2/Banner2";
import BrandList from "../../components/BrandList/BrandList";
import Categories from "../../components/Categories/Categories";
import CategoryDetails2 from "../../components/CategoryDetails/CategoryDetails2";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import LastComponents from "../../components/LastComponent/LastComponents";

const Home = () => {
    return (
        <div>
            {/* <HomeBanner></HomeBanner> */}
            <Banner2></Banner2>
            <BrandList></BrandList>
            <Accordion></Accordion>
            <LastComponents></LastComponents>
        </div>
    );
};

export default Home;