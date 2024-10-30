import { Link } from "react-router-dom";
import * as db from "../Database";
import React, { useState } from "react";
import { addEnrollment, removeEnrollment } from "./reducer";
import { useDispatch, useSelector } from "react-redux";

export default function Dashboard(
  { courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }: {
      courses: any[];
      course: any;
      setCourse: (course: any) => void;
      addNewCourse: (courseId: string) => void;
      deleteCourse: (course: any) => void;
      updateCourse: () => void;
  }) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

  const [showAllCourses, setShowAllCourses] = useState(false);
  const courseIdsEnrolled = enrollments
      .filter((enrollment: any) => enrollment.user === currentUser._id)
      .map((enrollment: any) => enrollment.course);
  const coursesToShow = showAllCourses ? courses : courses.filter(course => courseIdsEnrolled.includes(course._id));

  function truncateText(text: string, maxLength: number) {
      if (text.length > maxLength) {
          return text.substring(0, maxLength) + '...';
      }

      return text;
  }

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title" className="float-start">Dashboard</h1> <br/><br/><hr />
      <h2 id="wd-dashboard-published" className="float-start">

        Published Courses ({courses.length})
      </h2>{" "}
      <br/><br/>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <img src={course.imageurl} width='auto' style={{maxWidth:'100%'}} height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}
                    </p>
                    <button className="btn btn-primary float-start"> Go </button>
                    <br/>
                    <br/>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}