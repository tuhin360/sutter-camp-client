 
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
import Featured from "../Featured/Featured";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Sutter Camp | Home</title>
      </Helmet>
       <Banner></Banner>
       <PopularClass></PopularClass>
       <Featured></Featured>
    </div>
  );
};

export default Home;
