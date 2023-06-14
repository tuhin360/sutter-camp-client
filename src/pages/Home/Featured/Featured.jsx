import '../Featured/Featured.css';
import featuredImg from '../../../assets/Home/featured.jpg'


const Featured = () => {
  return (
    <div className="md:flex justify-center items-center bg-gradient-to-r from-gray-700 to-black bg-opacity-60 pb-20 pt-12 px-36 my-20" >
      <div className='' data-aos="zoom-in-right">
        <img src={featuredImg} alt="" />
      </div>
      <div className="md:ml-10 text-white" data-aos="zoom-in-left">
        <p >June 15, 2023</p>
        <p className="uppercase font-bold my-4">About Us</p>
        <p>
        Explore the beauty of nature and learn how to capture breathtaking landscapes. This class focuses on composition, lighting, and techniques specific to landscape photography. Capture the world around you through the lens of a camera and unlock your creativity with the art of photography.
        </p>
        <button className="btn btn-outline border-b-4 mt-4 text-white">
        Explore Us
        </button>
      </div>
    </div>
  );
};

export default Featured;
