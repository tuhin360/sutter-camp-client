import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import banner1 from '../../../assets/Home/Banner/1.jpg'
import banner2 from '../../../assets/Home/Banner/2.jpg'
import banner3 from '../../../assets/Home/Banner/3.jpg'
import banner4 from '../../../assets/Home/Banner/4.jpg'
import banner5 from '../../../assets/Home/Banner/5.jpg'

const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src={banner1} />
        <p className="legend">"Discover Your Inner Photographer: Join Our Photographic Exploration"</p>
      </div>
      <div>
        <img src={banner2}  />
        <p className="legend">"From Beginner to Pro: Unlock Your Potential at our Photography Camp"</p>
      </div>
      <div>
        <img src={banner3}  />
        <p className="legend">"Discover Your Inner Photographer: Join Our Photographic Exploration"</p>
      </div>
      <div>
        <img src={banner4}  />
        <p className="legend">"Shutter Senses: Explore the World through Your Camera Lens"</p>
      </div>
      <div>
        <img src={banner5}  />
        <p className="legend">"Capture the Moment: Immersive Photography Experience for Enthusiasts"</p>
      </div>
    </Carousel>
  );
};

export default Banner;
