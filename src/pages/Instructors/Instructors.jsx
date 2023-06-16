import { useEffect, useState } from "react";
import InstructorsCard from "./InstructorsCard";
import { Helmet } from "react-helmet-async";
import { Zoom } from "react-awesome-reveal";

const PopularInstructor = () => {
  const [allInstructors, setAllInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/popularInstructor")
      .then((res) => res.json())
      .then((data) => setAllInstructors(data));
  });

  return (
    <div>
      <Helmet>
        <title>Sutter Camp | Instructors</title>
      </Helmet>
      <Zoom>
        <div>
          <h2 className="text-center font-bold text-4xl pt-32 mb-8 text-slate-600 ">
            All Instructors
          </h2>
          <p className="text-center mb-8">
            Discover how to capture authentic moments and tell stories of
            everyday life in urban environments.{" "}
          </p>
        </div>
      </Zoom>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allInstructors.map((allInstructor) => (
          <InstructorsCard
            key={allInstructors._id}
            allInstructor={allInstructor}
          ></InstructorsCard>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
