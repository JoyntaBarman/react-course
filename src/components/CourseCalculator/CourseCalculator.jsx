import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

// Functions
// check dublicatee course data
function checkExistCourse(courses, course) {
  function isExist(value) {
    return value.id === course.id;
  }

  return typeof courses.find(isExist) === 'object';
}

const showToast = (text) => toast(text);

// Component Function
const CourseCalculator = ({ selectedCourse }) => {
  const [selectedCourses, setSelectedCourses] = useState([]);


    if (Object.keys(selectedCourse).length !== 0) {
      const isExistCourse = checkExistCourse(selectedCourses, selectedCourse);


      console.log(!isExistCourse);
      if (!isExistCourse) {
        const newSelectedCourses = [...selectedCourses, selectedCourse];
        setSelectedCourses(newSelectedCourses);
      } else {
        showToast('You can select one time.');
      }
    }



  return (
    <div className="bg-white p-3 rounded-lg">
      <h3 className="text-blueText text-lg font-bold leading-8">
        Credit Hour Remaining hr
      </h3>

      <hr className="bg-[#1c1b1b33] my-4" />

      <h3 className="text-tittle text-xl font-bold">Course Name</h3>
      <div className="text-details leading-8">
        {selectedCourses.map((course, idx) => (
          <p key={course.id}>
            {idx + 1}. {course.name}
          </p>
        ))}
      </div>
      <hr className="bg-[#1c1b1b33] my-4" />

      <p className="text-tittle0.8 font-medium">Total Credit Hour :</p>
      <hr className="bg-[#1c1b1b33] my-4" />

      <p className="text-tittle0.8 font-semibold">Total Price : USD</p>
      <Toaster />
    </div>
  );
};

CourseCalculator.propTypes = {
  selectedCourse: PropTypes.object.isRequired,
};

export default CourseCalculator;
