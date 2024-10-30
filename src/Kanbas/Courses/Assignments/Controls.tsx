import { FaPlus } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import { useParams, useNavigate } from "react-router";
import { useSelector } from "react-redux";

export default function AssignmentsControls() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div
      id="wd-assignments-controls"
      className="text-nowrap d-flex justify-content-between align-items-center assignments-controls-container mb-4"
    >
      <div
        className="input-group wd-search-assignment me-1"
        style={{ width: "60%", position: "relative" }}
      >
        <input
          type="text"
          id="wd-search-assignment"
          placeholder="Search..."
          className="form-control"
          style={{ paddingLeft: "40px", backgroundColor: "transparent" }}
        />
        <span
          className="input-group-text"
          style={{
            position: "absolute",
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          <GoSearch />
        </span>
      </div>
      {currentUser?.role === "FACULTY" && (
        <div className="d-flex">
          <button
            id="wd-add-assignment-group"
            className="btn btn-lg btn-secondary me-2"
          >
            <FaPlus className="me-2 mb-1" />
            Group
          </button>
          <button
            className="btn btn-lg btn-danger"
            onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments/New`)}
          >
            <FaPlus className="me-2 mb-1" />
            Assignment
          </button>
        </div>
      )}
    </div>
  );
}
