import { BsGripVertical } from "react-icons/bs";
import Controls from "./Controls";
import TitleButtons from "./TitleButtons";
import "./index.css";
import LessonControlButtons from "../Modules/LessonControlButtons";
import LeftControls from "./LeftControls";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database"; // Import the database

export default function Assignments() {
  const { cid } = useParams(); // Get the course ID from the URL parameters
  const assignments = db.assignments; // Access assignments from the database

  // Filter assignments based on the current course ID
  const filteredAssignments = assignments.filter((assignment) => assignment.course === cid);

  return (
    <div id="wd-assignments" className="container mt-4">
      {/* Assignment Control Buttons */}
      <Controls />

      <ul id="wd-container" className="list-group rounded-0">
        {/* Assignment Group Title */}
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div
            id="wd-assignments-title"
            className="d-flex justify-content-between align-items-center bg-secondary p-2 py-3"
          >
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-4" />
              <p className="m-0 fw-bold">ASSIGNMENTS</p>
            </div>
            <TitleButtons />
          </div>

          {/* List of Assignments */}
          <ul className="wd-assignment-list list-group rounded-0">
            {filteredAssignments.map((assignment) => (
              <li
                key={assignment._id}
                className="wd-assignment-list-item list-group-item p-2 d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">
                  <LeftControls />
                  <div className="my-2 mx-4">
                    <Link
                      to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                      className="wd-assignment-link text-decoration-none"
                    >
                      {assignment.title}
                    </Link>
                    <p className="m-0 fs-6">
                      {assignment.multipleModules && (
                        <>
                          <span className="text-danger">Multiple Modules</span> |{' '}
                        </>
                      )}
                      <strong> Not available until </strong>
                      {new Date(assignment.availableFrom).toLocaleDateString()} | <br />
                      <strong> Due </strong>
                      {new Date(assignment.due).toLocaleDateString()} | {assignment.points} pts
                    </p>
                  </div>
                </div>
                <LessonControlButtons />
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
