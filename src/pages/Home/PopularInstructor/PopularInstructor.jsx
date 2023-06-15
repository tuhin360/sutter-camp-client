import { useEffect, useState } from "react";
import PopularInstructorCard from "./PopularInstructorCard";

const PopularInstructor = () => {

    const [popularInstructors, setPopularInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/popularInstructor")
      .then((res) => res.json())
      .then((data) =>  setPopularInstructors(data));
  });

  return (
    <div>
    <div>
      <h2 className="text-center font-bold text-4xl mt-20 mb-8 text-slate-600">
        Our Popular Instructor
      </h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {popularInstructors.map((popularInstructor) => (
          <PopularInstructorCard
          key={popularInstructor._id}
          popularInstructor={popularInstructor}
        ></PopularInstructorCard>
      ))}
    </div>
  </div>
  );
};

export default PopularInstructor;
