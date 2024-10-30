import { Link, useParams, useLocation } from "react-router-dom";
import { courses } from "../Database";
import "../styles.css";

export default function CoursesNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();

  return (
    <div>
      {/* Navigation Links without Breadcrumb */}
      <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
        {links.map((link, index) => (
          <Link
            key={index}
            id={`wd-course-${link.toLowerCase()}-link`}
            className={`list-group-item border border-0 ${pathname.includes(link) ? "active" : "text-danger"}`}
            to={`/Kanbas/Courses/${course?._id}/${link}`}
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
}
