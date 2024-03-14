import { useState } from "react";
import Course from "../course/Course";
import { useEffect } from "react";

function Courses() {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    const fetchCourses = async () => {
      let res = await fetch("course.json");
      let data = await res.json();
      setCourse(data);
    };
    fetchCourses();
  }, []);
  console.log(course);
  return (
    <div>
      {course.map((items, index) => (
        <Course key={index} />
      ))}
    </div>
  );
}

export default Courses;
