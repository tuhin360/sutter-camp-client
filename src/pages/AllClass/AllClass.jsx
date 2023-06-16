import { useEffect, useState } from "react";
import AllClassCard from "./AllClassCard";
import { Helmet } from "react-helmet-async";
import { Zoom } from "react-awesome-reveal";

const AllClass = () => {
  const [allClasses, setAllClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allClass")
      .then((res) => res.json())
      .then((data) => setAllClasses(data));
  });
  return (
    <div>
      <Helmet>
        <title>Sutter Camp | All Class</title>
      </Helmet>
      <Zoom>
        <div>
          <h2 className="text-center font-bold text-4xl pt-32 mb-8 text-slate-600">
            All Class
          </h2>
          <p className="text-center mb-8">
            Explore the beauty of the night sky and cityscapes in this class
            dedicated to night photography.
          </p>
        </div>
      </Zoom>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {allClasses.map((allClass) => (
          <AllClassCard key={allClass._id} allClass={allClass}></AllClassCard>
        ))}
      </div>
    </div>
  );
};

export default AllClass;
