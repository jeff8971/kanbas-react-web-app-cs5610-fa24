import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> 
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> 
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">

          {/* ReactJS Course */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img src="images/reactjs.jpg" width="100%" height={160} alt="ReactJS Course" />
                <hr />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack Software Developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Node.js Course */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1235/Home"
              >
                <img src="/images/nodejs.png" width="100%" height={160} alt="Node.js Course" />
                <hr />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1235 Node JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Backend Development
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Python Course */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1236/Home"
              >
                <img src="/images/python.png" width="100%" height={160} alt="Python Course" />
                <hr />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1236 Python
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Data Science
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Angular Course */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/3456/Home"
              >
                <img src="images/angular.png" width="100%" height={160} alt="Angular Course" />
                <hr />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS3456 Angular
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Frontend Development
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Java Course */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1237/Home"
              >
                <img src="/images/java.png" width="100%" height={160} alt="Java Course" />
                <hr />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1237 Java
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Object-Oriented Programming
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

 

          {/* MongoDB Course */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5678/Home"
              >
                <img src="images/mongodb.png" width="100%" height={160} alt="MongoDB Course" />
                <hr />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5678 MongoDB
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    NoSQL Databases with MongoDB
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Kotlin Course */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1241/Home"
              >
                <img src="/images/kotlin.png" width="100%" height={160} alt="Kotlin Course" />
                <hr />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1241 Kotlin
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Android Development
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
