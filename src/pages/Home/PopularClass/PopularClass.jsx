import { useEffect, useState } from "react";
import PopularClassCard from "./PopularClassCard";
import { Zoom} from "react-awesome-reveal";

const PopularClass = () => {
  const [popularClasses, setPopularClass] = useState([]);

  useEffect(() => {
    fetch("https://sutter-camp-server.vercel.app/popularClass")
      .then((res) => res.json())
      .then((data) => setPopularClass(data));
  });

  return (
    <div>
      <div>
      <Zoom>
      <h2 className="text-center font-bold text-4xl mt-20 mb-8 text-slate-600">
          Popular Class
        </h2>
        <p className="text-center mb-8">
           
          Explore the beauty of the night sky and cityscapes in this class
          dedicated to night photography.
        </p>
      </Zoom>
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularClasses.map((popularClass) => (
          <PopularClassCard
            key={popularClass._id}
            popularClass={popularClass}
          ></PopularClassCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
