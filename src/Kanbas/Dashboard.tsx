import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
            <img src="images/react.png" width={200} alt="React Course" />
            <div>
              <h5>CS1234</h5>
              <p className="wd-dashboard-course-title">Full Stack Software Developer</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/2345/Home">
            <img src="images/sql.png" width={200} alt="SQL Course" />
            <div>
              <h5>CS2345</h5>
              <p className="wd-dashboard-course-title">Database Management</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/3456/Home">
            <img src="images/algo.png" width={200} alt="Algorithms Course" />
            <div>
              <h5>CS3456</h5>
              <p className="wd-dashboard-course-title">Algorithms</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1000/Home">
            <img src="images/ai.png" width={200} alt="Artificial Intelligence Course" />
            <div>
              <h5>CS1000</h5>
              <p className="wd-dashboard-course-title">Artificial Intelligence</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5299/Home">
            <img src="images/ml.png" width={200} alt="Machine Learning Course" />
            <div>
              <h5>CS5299</h5>
              <p className="wd-dashboard-course-title">Introduction to Machine Learning</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5004/Home">
            <img src="images/oop.jpg" width={200} alt="Object-Oriented Programming Course" />
            <div>
              <h5>CS5004</h5>
              <p className="wd-dashboard-course-title">Object-Oriented Programming</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5690/Home">
            <img src="images/security.jpg" width={200} alt="Cybersecurity Course" />
            <div>
              <h5>CS5690</h5>
              <p className="wd-dashboard-course-title">Cybersecurity</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5001/Home">
            <img src="images/python.png" width={200} alt="Introduction to Programming Course" />
            <div>
              <h5>CS5001</h5>
              <p className="wd-dashboard-course-title">Introduction to Programming</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
