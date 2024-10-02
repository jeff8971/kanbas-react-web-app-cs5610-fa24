import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons"; // assuming this component exists
import LessonControlButtons from "./LessonControlButtons"; // assuming this component exists

export default function Modules() {
  return (
    <div>
      {/* Modules Controls */}
      <ModulesControls />
      <br />
      <br />
      <br />
      <br />

      {/* Additional Controls */}
      <ModulesControls />
      <br />
      <br />
      <br />

      {/* Modules List */}
      <ul id="wd-modules" className="list-group rounded-0">

        {/* Week 1 Module */}
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 1
            <ModuleControlButtons />
          </div>

          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LEARNING OBJECTIVES
              <LessonControlButtons />
            </li>

            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Introduction to the course
              <LessonControlButtons />
            </li>

            {/* Additional Lessons */}
            ...
          </ul>
        </li>

        {/* Week 2 Module */}
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            Week 2
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">LEARNING OBJECTIVES</li>
            <li className="wd-lesson list-group-item p-3 ps-1">LESSON 1</li>
            <li className="wd-lesson list-group-item p-3 ps-1">LESSON 2</li>
          </ul>
        </li>

        {/* Additional Weeks (from the original component) */}
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">LEARNING OBJECTIVES</li>
            <ul className="wd-content list-group">
              <li className="wd-content-item list-group-item">Introduction to the course</li>
              <li className="wd-content-item list-group-item">Learn what is Web Development</li>
            </ul>
            <li className="wd-lesson list-group-item p-3 ps-1">READING</li>
            <ul className="wd-content list-group">
              <li className="wd-content-item list-group-item">Full Stack Developer - Chapter 1 - Introduction</li>
              <li className="wd-content-item list-group-item">Full Stack Developer - Chapter 2 - Creating User</li>
            </ul>
            <li className="wd-lesson list-group-item p-3 ps-1">SLIDES</li>
            <ul className="wd-content list-group">
              <li className="wd-content-item list-group-item">Introduction to Web Development</li>
              <li className="wd-content-item list-group-item">Creating an HTTP server with Node.js</li>
              <li className="wd-content-item list-group-item">Creating a React Application</li>
            </ul>
          </ul>
        </li>

        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            Week 1, Lecture 2 - Formatting User Interfaces with HTML
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">LEARNING OBJECTIVES</li>
            <ul className="wd-content list-group">
              <li className="wd-content-item list-group-item">Learn how to create user interfaces with HTML</li>
              <li className="wd-content-item list-group-item">Deploy the assignment to Netilify</li>
            </ul>
            <li className="wd-lesson list-group-item p-3 ps-1">SLIDES</li>
            <ul className="wd-content list-group">
              <li className="wd-content-item list-group-item">Introduction to HTML and the DOM</li>
              <li className="wd-content-item list-group-item">Formatting Web content with Headings and</li>
              <li className="wd-content-item list-group-item">Formatting content with Lists and Tables</li>
            </ul>
          </ul>
        </li>

      </ul>
    </div>
  );
}
