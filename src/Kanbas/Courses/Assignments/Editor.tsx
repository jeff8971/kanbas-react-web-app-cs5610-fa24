import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { addAssignment, updateAssignment } from "./reducer"; // Assuming you've created this in reducer.ts
import * as assignmentsClient from "./client";

interface Assignment {
  _id: string;
  title: string;
  course: string | undefined;
  description: string;
  points: number;
  due: string;
  availableFrom: string;
}

export default function AssignmentEditor() {
  const { cid, aid } = useParams(); // Get course ID and assignment ID from the URL
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  const existingAssignment = assignments.find(
    (assignment: Assignment) => assignment._id === aid && assignment.course === cid
  );

  const defaultAssignment: Assignment = {
    _id: "A" + Math.floor(100 + Math.random() * 900),
    title: "New Assignment",
    course: cid,
    description: "New Assignment Description",
    points: 100,
    due: "2024-12-31",
    availableFrom: "2024-01-01",
  };

  const [assignment, setAssignment] = useState<Assignment>(existingAssignment || defaultAssignment);

  const handleSave = async () => {
    const savedAssignment = await assignmentsClient.upsertAssignment(assignment);
    if (existingAssignment) {
        dispatch(updateAssignment(savedAssignment));
    } else {
        dispatch(addAssignment(savedAssignment));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };




  if (!assignment) {
    return <div>Assignment not found</div>; // Fallback if assignment doesn't exist
  }

  return (
    <div className="form-group" id="assignment-editor">
      <div className="w-100">
        <label className="form-label" htmlFor="assignment-name">
          <h3>Assignment Name</h3>
        </label>
        <input
          type="text"
          id="assignment-name"
          value={assignment.title}
          className="form-control mb-4"
          onChange={(e) =>
            setAssignment((prev: Assignment) => ({ ...prev, title: e.target.value }))
          }
        />
        <textarea
          id="assignment-description"
          rows={14}
          cols={50}
          className="form-control w-100"
          value={assignment.description}
          onChange={(e) =>
            setAssignment((prev: Assignment) => ({ ...prev, description: e.target.value }))
          }
        />
      </div>

      <div className="mt-3 container-fluid">
        <div className="row mb-3">
          <div className="col-2 d-flex justify-content-end">
            <label className="form-label" htmlFor="points">
              Points
            </label>
          </div>
          <div className="col-10 m-0 p-0">
            <input
              id="points"
              type="number"
              className="form-control"
              value={assignment.points}
              onChange={(e) =>
                setAssignment((prev: Assignment) => ({ ...prev, points: Number(e.target.value) }))
              }
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-2 d-flex justify-content-end">
            <label className="form-label" htmlFor="group">
              Assignment Group
            </label>
          </div>
          <div className="col-10 m-0 p-0">
            <select id="group" className="form-select py-2 w-100" defaultValue="ASSIGNMENTS">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="PROJECTS">PROJECTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-2 d-flex justify-content-end">
            <label className="form-label" htmlFor="grade-display">
              Display Grade as
            </label>
          </div>
          <div className="col-10 m-0 p-0">
            <select id="grade-display" className="form-select py-2 w-100" defaultValue="Percentage">
              <option value="Percentage">Percentage</option>
              <option value="Decimal">Decimal</option>
              <option value="Letter">Letter</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-2 d-flex justify-content-end">
            <label className="form-label" htmlFor="submission-type">
              Submission Type
            </label>
          </div>
          <div className="col-10 border rounded p-3">
            <select
              id="submission-type"
              className="form-select p-2 w-100"
              defaultValue="Online"
            >
              <option value="Online">Online</option>
              <option value="In-Person">In-Person</option>
            </select>

            <div className="mt-4">
              <p className="form-label fs-5 fw-bold">Online Entry Options</p>
              <div className="form-check">
                <input type="checkbox" id="text-entry" className="form-check-input" />
                <label className="form-label" htmlFor="text-entry">
                  Text Entry
                </label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="website-url" className="form-check-input" />
                <label className="form-label" htmlFor="website-url">
                  Website URL
                </label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="media-recordings" className="form-check-input" />
                <label className="form-label" htmlFor="media-recordings">
                  Media Recordings
                </label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="student-annotation" className="form-check-input" />
                <label className="form-label" htmlFor="student-annotation">
                  Student Annotation
                </label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="file-upload" className="form-check-input" />
                <label className="form-label" htmlFor="file-upload">
                  File Uploads
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-2 d-flex justify-content-end">
            <label className="form-label" htmlFor="assign-to">
              Assign to
            </label>
          </div>
          <div className="col-10 border rounded p-3">
            <div className="d-flex justify-content-between align-items-center bg-custom-gray" style={{ width: "120px" }}>
              <p className="m-0 px-2">Everyone</p>
              <RxCross2 className="me-2 fs-6 text-dark" />
            </div>

            <label className="form-label mt-3 fw-bold" htmlFor="due-date">
              Due
            </label>
            <input
              type="date"
              id="due-date"
              value={assignment.due}
              className="form-control"
              onChange={(e) =>
                setAssignment((prev: Assignment) => ({ ...prev, due: e.target.value }))
              }
            />

            <div className="d-flex gap-3 mt-3 w-100">
              <div className="d-flex flex-column w-100">
                <label className="form-label fw-bold" htmlFor="available-from">
                  Available from
                </label>
                <input
                  type="date"
                  id="available-from"
                  value={assignment.availableFrom}
                  className="form-control"
                  onChange={(e) =>
                    setAssignment((prev: Assignment) => ({ ...prev, availableFrom: e.target.value }))
                  }
                />
              </div>

              <div className="d-flex flex-column w-100">
                <label className="form-label fw-bold" htmlFor="available-until">
                  Until
                </label>
                <input
                  type="date"
                  id="available-until"
                  value={assignment.due}
                  className="form-control"
                  onChange={(e) =>
                    setAssignment((prev: Assignment) => ({ ...prev, due: e.target.value }))
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="d-flex justify-content-end gap-2">
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary">
          Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-danger">
          Save
        </button>
      </div>
    </div>
  );
}
