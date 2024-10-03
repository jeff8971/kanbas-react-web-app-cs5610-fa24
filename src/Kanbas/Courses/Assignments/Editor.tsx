import { RxCross2 } from "react-icons/rx";
import "./index.css";

export default function AssignmentEditor() {
  const assignmentDescription = `
  This assignment is available online.
  
  Submit a link to the landing page of your web application hosted on Netlify.
  
  The landing page should feature the following:
  
  • Your full name and section
  • Links to each of the lab assignments
  • Link to the Kanban application
  • Links to all the relevant source code repositories
  
  The Kanban application should include a link to navigate back to the landing page.
  `;

  return (
    <div className="form-group" id="assignment-editor">
      <div className="w-100">
        <label className="form-label" htmlFor="assignment-name">
          <h3>Assignment Name</h3>
        </label>
        <input
          type="text"
          id="assignment-name"
          defaultValue="A1 - ENV + HTML"
          className="form-control mb-4"
        />
        <textarea
          id="assignment-description"
          rows={14}
          cols={50}
          className="form-control w-100"
          defaultValue={assignmentDescription}
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
            <input id="points" className="form-control" defaultValue={100} />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-2 d-flex justify-content-end">
            <label className="form-label" htmlFor="group">
              Assignment Group
            </label>
          </div>
          <div className="col-10 m-0 p-0">
            <select
              id="group"
              className="form-select py-2 w-100"
              defaultValue="ASSIGNMENTS"
            >
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="OPTION 1">OPTION 1</option>
              <option value="OPTION 2">OPTION 2</option>
              <option value="OPTION 3">OPTION 3</option>
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
            <select
              id="grade-display"
              className="form-select py-2 w-100"
            >
              <option value="Percentage">Percentage</option>
              <option value="OPTION 1">OPTION 1</option>
              <option value="OPTION 2">OPTION 2</option>
              <option value="OPTION 3">OPTION 3</option>
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
            <select id="submission-type" className="form-select p-2 w-100">
              <option value="Online">Online</option>
              <option value="OPTION 1">OPTION 1</option>
              <option value="OPTION 2">OPTION 2</option>
              <option value="OPTION 3">OPTION 3</option>
            </select>

            <div className="mt-4">
              <p className="form-label fs-5 fw-bold">Online Entry Options</p>

              <div className="form-check">
                <input
                  type="checkbox"
                  id="text-entry"
                  className="form-check-input"
                />
                <label className="form-label" htmlFor="text-entry">
                  Text Entry
                </label>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  id="website-url"
                  className="form-check-input"
                />
                <label className="form-label" htmlFor="website-url">
                  Website URL
                </label>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  id="media-recordings"
                  className="form-check-input"
                />
                <label className="form-label" htmlFor="media-recordings">
                  Media Recordings
                </label>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  id="student-annotation"
                  className="form-check-input"
                />
                <label className="form-label" htmlFor="student-annotation">
                  Student Annotation
                </label>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  id="file-upload"
                  className="form-check-input"
                />
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
              type="datetime-local"
              id="due-date"
              defaultValue="2024-09-15T17:30"
              className="form-control"
            />

            <div className="d-flex gap-3 mt-3 w-100">
              <div className="d-flex flex-column w-100">
                <label className="form-label fw-bold" htmlFor="available-from">
                  Available from
                </label>
                <input
                  type="datetime-local"
                  id="available-from"
                  defaultValue="2024-09-01T17:30"
                  className="form-control"
                />
              </div>

              <div className="d-flex flex-column w-100">
                <label className="form-label fw-bold" htmlFor="available-until">
                  Until
                </label>
                <input
                  type="datetime-local"
                  id="available-until"
                  defaultValue="2024-09-19T17:30"
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="d-flex justify-content-end gap-2">
        <button className="btn btn-lg btn-secondary">Cancel</button>
        <button className="btn btn-lg btn-danger">Save</button>
      </div>
    </div>
  );
};

