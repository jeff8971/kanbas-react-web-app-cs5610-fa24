import { Link, useParams, useLocation } from "react-router-dom";

export default function CoursesNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  const { cid } = useParams();
  const { pathname } = useLocation();

  return (
    <div>
      <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
        {links.map((link, index) => (
          <Link
            key={index}
            id={`wd-course-${link.toLowerCase()}-link`}
            className={`list-group-item border border-0 ${
              pathname.includes(link) ? "active" : "text-danger"
            }`}
            to={`/Kanbas/Courses/${cid}/${link}`}
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
}
