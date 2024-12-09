import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import TitleButtons from "./TitleButtons";
import { BsGripVertical, BsPencilSquare } from "react-icons/bs";
import { FaCaretDown } from "react-icons/fa";
import { deleteAssignment, setAssignments } from "./reducer";
import AssignmentControl from "./Controls";
import AssignmentIcons from "./Icons";
import * as assignmentsClient from "./client";

// Define Assignment interface
interface Assignment {
    _id: string;
    title: string;
    availabilityDate: string;
    dueDate: string;
    points: number;
    link: string;
}

// Helper function to format dates
const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
};

// Individual Assignment Item Component
const AssignmentItem: React.FC<Assignment> = ({ _id, title, availabilityDate, dueDate, points, link }) => {
    const dispatch = useDispatch();

    const handleDelete = async () => {
        await assignmentsClient.deleteAssignment(_id);
        dispatch(deleteAssignment(_id));
    };

    return (
        <li className="wd-lesson list-group-item p-3 ps-1" style={{ borderLeft: "4px solid green" }}>
            <a
                href={link}
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
                                <div style={{ color: "red" }}>
                                    <strong>Multiple Modules</strong>
                                </div>
                                <div style={{ marginLeft: "10px" }}>
                                    | <strong>Not available until</strong> {formatDate(availabilityDate)}
                                </div>
                                <div style={{ marginLeft: "10px" }}>|</div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <div>
                                    <strong>Due</strong> {formatDate(dueDate)}
                                </div>
                                <div style={{ marginLeft: "10px" }}>|</div>
                                <div style={{ marginLeft: "10px" }}>{points} pts</div>
                            </div>
                        </div>
                    </span>
                    <div style={{ marginLeft: "auto" }}>
                        <AssignmentIcons onDelete={handleDelete} />
                    </div>
                </div>
            </a>
        </li>
    );
};

// Main Assignments Component
const Assignments: React.FC = () => {
    const { cid } = useParams();
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);

    const fetchAssignments = async () => {
        const fetchedAssignments = await assignmentsClient.fetchAssignmentsForCourse(cid as string);
        dispatch(setAssignments(fetchedAssignments));
    };

    useEffect(() => {
        fetchAssignments();
    }, [cid, dispatch]);

    return (
        <div id="wd-assignments">
            <AssignmentControl />
            <br />
            <br />
            <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
                        <BsGripVertical className="me-2 fs-3" />
                        <FaCaretDown className="me-1 fs-3" />
                        ASSIGNMENTS
                        <TitleButtons />
                    </div>
                    {assignments.map((assignment: Assignment) => (
                        <AssignmentItem
                            key={assignment._id}
                            _id={assignment._id}
                            title={assignment.title}
                            availabilityDate={assignment.availabilityDate}
                            dueDate={assignment.dueDate}
                            points={assignment.points}
                            link={
                                currentUser.role === "FACULTY" || currentUser.role === "ADMIN"
                                    ? `#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`
                                    : `#/Kanbas/Courses/${cid}/Assignments`
                            }
                        />
                    ))}
                </li>
            </ul>
        </div>
    );
};

export default Assignments;
