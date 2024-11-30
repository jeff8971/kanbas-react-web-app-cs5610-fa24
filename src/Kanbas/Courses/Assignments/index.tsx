import { useState, useEffect } from "react";
import { BsGripVertical, BsPencilSquare, BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete, MdCheckCircle } from "react-icons/md";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment, setAssignments } from "./reducer";
import Controls from "./Controls";
import TitleButtons from "./TitleButtons";
import AssignmentIcons from "./Icons";
import * as assignmentsClient from "./client";
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

const AssignmentItem: React.FC<Assignment & { onDelete: (id: string) => void }> = ({
  _id,
  title,
  course,
  availableFrom,
  due,
  points,
  multipleModules,
  onDelete,
}) => {
  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <li className="wd-lesson list-group-item p-3 ps-1" style={{ borderLeft: "4px solid green" }}>
      <Link
        to={`/Kanbas/Courses/${course}/Assignments/${_id}`}
        className="d-flex align-items-center flex-grow-1 text-decoration-none"
        style={{ color: "inherit" }}
      >
        <div className="d-flex align-items-center flex-grow-1">
          <BsGripVertical className="me-2 fs-3" />
          <BsPencilSquare className="me-3" />
          <span className="d-inline-block">
            <b>{title}</b>
            <div style={{ marginLeft: "0", fontSize: "0.8em" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                {multipleModules && (
                  <div style={{ color: "red" }}>
                    <strong>Multiple Modules</strong>
                  </div>
                )}
                <div style={{ marginLeft: "10px" }}>
                  | <strong>Not available until</strong> {formatDate(availableFrom)}
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div>
                  <strong>Due</strong> {formatDate(due)}
                </div>
                <div style={{ marginLeft: "10px" }}>|</div>
                <div style={{ marginLeft: "10px" }}>{points} pts</div>
              </div>
            </div>
          </span>
          <div style={{ marginLeft: "auto" }}>
            <AssignmentIcons
              onDelete={async () => {
                onDelete(_id);
              }}
            />
          </div>
        </div>
      </Link>
    </li>
  );
};

export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const fetchAssignments = async () => {
    const courseAssignments = await assignmentsClient.fetchAssignmentsForCourse(cid as string);
    dispatch(setAssignments(courseAssignments));
  };

  useEffect(() => {
    fetchAssignments();
  }, [cid]);

  const handleDelete = (assignmentId: string) => {
    if (window.confirm("Are you sure you want to delete this assignment?")) {
      dispatch(deleteAssignment(assignmentId));
    }
  };

  return (
    <div id="wd-assignments">
      <Controls />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <p className="m-0 fw-bold">ASSIGNMENTS</p>
            <TitleButtons />
          </div>
          <ul className="wd-assignment-list list-group rounded-0">
            {assignments.map((assignment: Assignment) => (
              <AssignmentItem
                key={assignment._id}
                {...assignment}
                onDelete={handleDelete}
              />
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
