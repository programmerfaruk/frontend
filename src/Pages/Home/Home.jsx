import BrandList from "../../components/BrandList/BrandList";
import Categories from "../../components/Categories/Categories";
import CategoryDetails2 from "../../components/CategoryDetails/CategoryDetails2";
import HomeBanner from "../../components/HomeBanner/HomeBanner";

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Categories></Categories>
            {/* <CategoryDetails2></CategoryDetails2> */}
            <BrandList></BrandList>
        </div>
    );
};

export default Home;