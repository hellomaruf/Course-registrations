import { useState } from "react";
import Course from "../course/Course";
import { useEffect } from "react";

function Courses({ handleSelectBtn }) {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    const fetchCourses = async () => {
      let res = await fetch("course.json");
      let data = await res.json();
      setCourse(data);
    };
    fetchCourses();
  }, []);

  return (
    <div className="">
      <div className="grid grid-cols-3 gap-6">
        {course.map((items, index) => (
          <Course
            handleSelectBtn={handleSelectBtn}
            courses={items}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Courses;
