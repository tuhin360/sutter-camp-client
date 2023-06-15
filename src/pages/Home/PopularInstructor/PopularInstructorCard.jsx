const PopularInstructorCard = ({ popularInstructor }) => {
  const { image, instructorName, category } = popularInstructor;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl" data-aos="fade-up">
        <figure>
          <img className=""  src={image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold"> </h2>
          <div className="card-actions flex justify-between ">
            <p className="text-justify ">
              <h4 className="text-3xl font-bold text-center" data-aos="zoom-in-up">
                {instructorName}
              </h4>
              <p className="text-center">{category}</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructorCard;
