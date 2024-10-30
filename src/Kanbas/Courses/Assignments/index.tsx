import { useState } from "react";
import { BsGripVertical } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { MdCheckCircle } from "react-icons/md";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Controls from "./Controls";
import TitleButtons from "./TitleButtons";
import LeftControls from "./LeftControls";
import { deleteAssignment } from "./reducer";
import "./index.css";

interface Assignment {
  _id: string;
  title: string;
  course: string;
  description: string;
  points: number;
  due: string;
  availableFrom: string;
  multipleModules?: boolean;
}

export default function Assignments() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [filteredAssignments, setFilteredAssignments] = useState<Assignment[]>(
    assignments.filter((assignment: Assignment) => assignment.course === cid)
  );

  // Handle delete action with confirmation
  const handleDelete = (assignmentId: string) => {
    if (window.confirm("Are you sure you want to delete this assignment?")) {
      dispatch(deleteAssignment(assignmentId));
      setFilteredAssignments(filteredAssignments.filter((a) => a._id !== assignmentId));
    }
  };

  return (
    <div id="wd-assignments" className="container mt-4">
      <Controls />
      <ul id="wd-container" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-4 border-gray">
          <div
            id="wd-assignments-title"
            className="d-flex justify-content-between align-items-center bg-secondary p-2"
          >
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-4" />
              <p className="m-0 fw-bold">ASSIGNMENTS</p>
            </div>
            <TitleButtons />
          </div>
          <ul className="wd-assignment-list list-group rounded-0">
            {filteredAssignments.map((assignment: Assignment) => (
              <li
                key={assignment._id}
                className="wd-assignment-list-item list-group-item p-2 d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-start">
                  <LeftControls />
                  <div className="my-2 mx-3">
                    <Link
                      to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                      className="wd-assignment-link text-decoration-none fw-bold"
                    >
                      {assignment.title}
                    </Link>
                    <p className="m-0 fs-6 text-muted">
                      {assignment.multipleModules && (
                        <>
                          <span className="text-danger">Multiple Modules</span> |{" "}
                        </>
                      )}
                      <strong>Not available until</strong>{" "}
                      {new Date(assignment.availableFrom).toLocaleDateString()} |{" "}
                      <br />
                      <strong>Due</strong>{" "}
                      {new Date(assignment.due).toLocaleDateString()} |{" "}
                      {assignment.points} pts
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <MdCheckCircle className="fs-4 text-success" />
                  <BsThreeDotsVertical className="fs-4 text-muted" />
                  <MdDelete
                    className="fs-4 text-danger"
                    onClick={() => handleDelete(assignment._id)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
