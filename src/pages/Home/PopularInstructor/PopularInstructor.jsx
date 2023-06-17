import { useEffect, useState } from "react";
import PopularInstructorCard from "./PopularInstructorCard";
import { Zoom} from "react-awesome-reveal";

const PopularInstructor = () => {

    const [popularInstructors, setPopularInstructors] = useState([]);

    useEffect(() => {
      fetch("https://sutter-camp-server.vercel.app/popularInstructor")
        .then((res) => res.json())
        .then((data) => {
          // Sort the instructors based on the number of students in descending order
          const sortedInstructors = data.sort(
            (a, b) => b.numberOfStudents - a.numberOfStudents
          );
  
          // Set the top three instructors to the state
          setPopularInstructors(sortedInstructors.slice(0, 6));
        });
    }, []);

 
  return (
    <div>
   <Zoom>
   <div>
      <h2 className="text-center font-bold text-4xl mt-20 mb-8 text-slate-600 ">
        Our Popular Instructor
      </h2>
      <p className="text-center mb-8">Discover how to capture authentic moments and tell stories of everyday life in urban environments. </p>
    </div>
   </Zoom>
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
