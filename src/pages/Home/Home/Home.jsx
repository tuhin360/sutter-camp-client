 
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Sutter Camp | Home</title>
      </Helmet>
       <Banner></Banner>
       <PopularClass></PopularClass>
    </div>
  );
};

export default Home;
