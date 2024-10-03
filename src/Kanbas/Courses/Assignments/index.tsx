import { BsGripVertical } from "react-icons/bs";
import Controls from "./Controls";
import TitleButtons from "./TitleButtons";
import "./index.css";
import LessonControlButtons from "../Modules/LessonControlButtons";
import LeftControls from "./LeftControls";

export default function Assignments() {
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
            <div className="d-flex justify-content-center align-items-center">
              <BsGripVertical className="me-2 fs-4" />
              <p className="m-0 fw-bold">ASSIGNMENTS</p>
            </div>
            <TitleButtons />
          </div>

          {/* List of Assignments */}
          <ul className="wd-assignment-list list-group rounded-0">
            {/* Assignment 1 */}
            <li className="wd-assignment-list-item list-group-item p-2 d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-center align-items-center">
                <LeftControls />
                <div className="my-2 mx-4">
                  <a
                    href="#/Kanbas/Courses/1234/Assignments/A1"
                    className="wd-assignment-link text-decoration-none"
                  >
                    A1 - ENV + HTML
                  </a>
                  <p className="m-0 fs-6">
                    <span className="text-danger">Multiple Modules</span> | 
                    <strong> Not available until </strong> 
                    May 6 at 12:00am | <br />
                    <strong> Due </strong> 
                    May 13 at 11:59pm | 100 pts
                  </p>
                </div>
              </div>
              <LessonControlButtons />
            </li>

            {/* Assignment 2 */}
            <li className="wd-assignment-list-item list-group-item p-2 d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-center align-items-center">
                <LeftControls />
                <div className="my-2 mx-4">
                  <a
                    href="#/Kanbas/Courses/1234/Assignments/A2"
                    className="wd-assignment-link text-decoration-none"
                  >
                    A2 - CSS + BOOTSTRAP
                  </a>
                  <p className="m-0 fs-6">
                    <span className="text-danger">Multiple Modules</span> | 
                    <strong> Not available until </strong> 
                    May 13 at 12:00am | <br />
                    <strong> Due </strong> 
                    May 20 at 11:59pm | 100 pts
                  </p>
                </div>
              </div>
              <LessonControlButtons />
            </li>

            {/* Assignment 3 */}
            <li className="wd-assignment-list-item list-group-item p-2 d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-center align-items-center">
                <LeftControls />
                <div className="my-2 mx-4">
                  <a
                    href="#/Kanbas/Courses/1234/Assignments/A3"
                    className="wd-assignment-link text-decoration-none"
                  >
                    A3 - JAVASCRIPT + REACT
                  </a>
                  <p className="m-0 fs-6">
                    <span className="text-danger">Multiple Modules</span> | 
                    <strong> Not available until </strong> 
                    May 20 at 12:00am | <br />
                    <strong> Due </strong> 
                    May 27 at 11:59pm | 100 pts
                  </p>
                </div>
              </div>
              <LessonControlButtons />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
