import Courses from './components/Course/Courses';
import CourseCalculator from './components/CourseCalculator/CourseCalculator';
import './App.css';
import { useState } from 'react';

function App() {
  const [selecteCourse, setSelecteCourse] = useState({});

  function handleSetSelectedCourse(course) {
    setSelecteCourse(course);
  }

  return (
    <div className='bg-coursesBg p-12'>
      <h3 className="text-tittle text-3xl font-bold mb-8 text-center">
        Course Registration
      </h3>

      <div className="grid xl:grid-cols-4 md:grid-cols-3 gap-4 ">
        <Courses handleSetSelectedCourse={handleSetSelectedCourse}></Courses>

        <CourseCalculator selectedCourse={selecteCourse}></CourseCalculator>
      </div>
    </div>
  );
}

export default App;
