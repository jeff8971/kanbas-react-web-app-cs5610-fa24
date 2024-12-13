import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { AiOutlineHome } from "react-icons/ai";
import { RiSurveyLine } from "react-icons/ri";
import { MdNotifications } from "react-icons/md";
import { FaBullhorn } from "react-icons/fa";
import { AiOutlineLineChart } from "react-icons/ai";
import { useSelector } from "react-redux";

export default function CourseStatus() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div id="wd-course-status" style={{ width: "300px" }}>
      {currentUser.role === 'FACULTY' && (
        <>
          <h2>Course Status</h2>
          <div className="d-flex">
            <div className="w-50 pe-1">
              <button className="btn btn-lg btn-secondary w-100 text-nowrap">
                <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish
              </button>
            </div>
            <div className="w-50">
              <button className="btn btn-lg btn-success w-100">
                <FaCheckCircle className="me-2 fs-5" /> Publish
              </button>
            </div>
          </div>
          <br />
        </>
      )}

      {/* Buttons visible to all users */}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" /> Import Existing Content
      </button>

      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons
      </button>

      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <AiOutlineHome className="me-2 fs-5" /> Choose Home Page
      </button>

      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <RiSurveyLine className="me-2 fs-5" /> View Course Stream
      </button>

      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaBullhorn className="me-2 fs-5" /> New Announcement
      </button>

      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <AiOutlineLineChart className="me-2 fs-5" /> New Analytics
      </button>

      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <MdNotifications className="me-2 fs-5" /> View Course Notifications
      </button>
    </div>
  );
}
