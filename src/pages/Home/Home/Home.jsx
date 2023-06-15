 
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
import Featured from "../Featured/Featured";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Sutter Camp | Home</title>
      </Helmet>
       <Banner></Banner>
       <PopularClass></PopularClass>
       <PopularInstructor></PopularInstructor>
       <Featured></Featured>

    </div>
  );
};

export default Home;
