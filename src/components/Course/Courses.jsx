import { useEffect, useState } from 'react';
import Course from './Course';
import PropTypes from 'prop-types';

const Courses = ({ handleSetSelectedCourse }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/JoyntaBarman/fake-json-data/main/courseData.json'
    )
      .then((response) => response.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="grid xl:grid-cols-3 xl:col-span-3 lg:grid-cols-2 gap-4 col-span-3 md:col-span-2 lg:col-span-2">
      {courses.map((course, idx) => {
        return (
          <Course
            handleSetSelectedCourse={handleSetSelectedCourse}
            key={idx}
            course={course}
          ></Course>
        );
      })}
    </div>
  );
};

Courses.propTypes = {
  handleSetSelectedCourse: PropTypes.func.isRequired,
};

export default Courses;
