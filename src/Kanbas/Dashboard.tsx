import { Link } from 'react-router-dom';
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/5610/Home">
            CS5610 React JS
          </Link>
          <p className="wd-dashboard-course-title">
            Full Stack software developer
          </p>
          <Link to="/Kanbas/Courses/5610/Home"> Go </Link>
        </div>
      </div>
      <div className="wd-dashboard-course"> ... </div>
      <div className="wd-dashboard-course"> ... </div>
    </div>
  </div>
  );
}