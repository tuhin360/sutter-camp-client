import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import banner1 from "../../../assets/Home/Banner/1.jpg";
import banner2 from "../../../assets/Home/Banner/2.jpg";
import banner3 from "../../../assets/Home/Banner/3.jpg";
import banner4 from "../../../assets/Home/Banner/4.jpg";
import banner5 from "../../../assets/Home/Banner/5.jpg";

const Banner = () => {
  return (
    <Carousel className="text-center">
      <div>
        <img src={banner1} />
        <div className="absolute rounded-lg flex items-center h-full top-0 left-0 transform bg-gradient-to-r from-[#1f2930] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white font-bold space-y-7 w-full pl-28 ">
            <h2 className="text-4xl ">
              "Discover Your Inner Photographer: Join Our Photographic
              Exploration"
            </h2>
            <p>
            <small>
            Capture the world around you through the lens of a camera and unlock your creativity with the art of photography. <br /> Whether you're drawn to stunning landscapes, expressive portraits, or captivating street scenes, photography  <br /> allows you to freeze moments in time and tell stories through visual imagery.
            </small>
            </p>
            <button className="btn btn-outline border-b-4 text-white " >
        Explore More
        </button>
          </div>
        </div>
        
      </div>
      <div>
        <img src={banner2} />
        <div className="absolute rounded-lg flex items-center h-full top-0 left-0 transform bg-gradient-to-r from-[#1f2930] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white font-bold space-y-7 w-full pl-28 ">
            <h2 className="text-4xl ">
              "Discover Your Inner Photographer: Join Our Photographic
              Exploration"
            </h2>
            <p>
            <small>
            Capture the world around you through the lens of a camera and unlock your creativity with the art of photography. <br /> Whether you're drawn to stunning landscapes, expressive portraits, or captivating street scenes, photography  <br /> allows you to freeze moments in time and tell stories through visual imagery.
            </small>
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src={banner3} />
        <div className="absolute rounded-lg flex items-center h-full top-0 left-0 transform bg-gradient-to-r from-[#1f2930] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white font-bold space-y-7 w-full pl-28 ">
            <h2 className="text-4xl ">
              "Discover Your Inner Photographer: Join Our Photographic
              Exploration"
            </h2>
            <p>
            <small>
            Capture the world around you through the lens of a camera and unlock your creativity with the art of photography. <br /> Whether you're drawn to stunning landscapes, expressive portraits, or captivating street scenes, photography  <br /> allows you to freeze moments in time and tell stories through visual imagery.
            </small>
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src={banner4} />
        <div className="absolute rounded-lg flex items-center h-full top-0 left-0 transform bg-gradient-to-r from-[#1f2930] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white font-bold space-y-7 w-full pl-28 ">
            <h2 className="text-4xl ">
              "Discover Your Inner Photographer: Join Our Photographic
              Exploration"
            </h2>
            <p>
            <small>
            Capture the world around you through the lens of a camera and unlock your creativity with the art of photography. <br /> Whether you're drawn to stunning landscapes, expressive portraits, or captivating street scenes, photography  <br /> allows you to freeze moments in time and tell stories through visual imagery.
            </small>
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src={banner5} />
        <div className="absolute rounded-lg flex items-center h-full top-0 left-0 transform bg-gradient-to-r from-[#1f2930] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white font-bold space-y-7 w-full pl-28 ">
            <h2 className="text-4xl ">
              "Discover Your Inner Photographer: Join Our Photographic
              Exploration"
            </h2>
            <p>
            <small>
            Capture the world around you through the lens of a camera and unlock your creativity with the art of photography. <br /> Whether you're drawn to stunning landscapes, expressive portraits, or captivating street scenes, photography  <br /> allows you to freeze moments in time and tell stories through visual imagery.
            </small>
            </p>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
