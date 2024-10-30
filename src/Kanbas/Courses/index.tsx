import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./People/Table";
import { FaAlignJustify } from "react-icons/fa";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";

export default function Courses({ courses }: { courses: any[] }) {
  const { cid } = useParams();
  const location = useLocation();
  const course = courses.find((course) => course._id === cid);

  // Determine the section name based on the current route path
  const section = location.pathname.split("/").pop();
  const sectionName = section ? section.charAt(0).toUpperCase() + section.slice(1) : "Course";

  return (
    <div id="wd-courses">
      {/* Top breadcrumb header */}
      <div className="d-flex align-items-center mb-2">
        <FaAlignJustify className="me-3 fs-4 text-danger" />
        <h4 className="m-0 text-danger">
          {course ? (
            <>
              <span>{course.name}</span> &gt; <span>{sectionName}</span>
            </>
          ) : (
            "Course not found"
          )}
        </h4>
      </div>
      <hr />

      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
