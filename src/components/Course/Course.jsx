import PropTypes from 'prop-types';
import { BsCurrencyDollar } from 'react-icons/bs';
import { HiOutlineBookOpen } from 'react-icons/hi';

const Course = ({ course, handleSetSelectedCourse }) => {
  function showDetails(detail) {
    const courseDetails = detail.length > 250 ? detail.slice(0, 250) : detail;

    return courseDetails + '...';
  }

  return (
    <div className="bg-white p-3 rounded-lg">
      <div className="h-full flex flex-col justify-between">
        <img className="rounded " src={course.img} alt={course.name} />

        <p className="py-4 text-cardTittle text-lg font-semibold">
          {course.name}
        </p>

        <p className="text-details text-sm leading-6 w-full overflow-ellipsis">
          {showDetails(course.details)}
        </p>

        <div>
          <div className="flex gap-2 items-center mt-4 justify-between text-details font-medium">
            <BsCurrencyDollar className="text-tittle text-2xl" />
            <p>Price: {course.price}</p>
            <HiOutlineBookOpen className="text-tittle text-2xl" />
            <p>Credit: {course.credit}hr</p>
          </div>

          <button
            onClick={() => handleSetSelectedCourse(course)}
            className="w-full bg-blueButton text-white rounded font-semibold py-2 mt-6"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleSetSelectedCourse: PropTypes.func.isRequired
};

export default Course;
