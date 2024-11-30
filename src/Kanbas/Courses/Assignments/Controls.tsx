import { FaPlus } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

export default function AssignmentsControls() {
  const { cid } = useParams();
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
          style={{ paddingLeft: "50px", backgroundColor: "transparent" }}
        />
        <span
          className="input-group-text"
          style={{
            position: "absolute",
            left: "5px",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          <GoSearch />
        </span>
      </div>
      {currentUser.role === 'FACULTY' && (
                <>
                    <div className="d-line me-1" style={{ marginLeft: "auto" }}>
                        <button id="wd-collepse-all" className="btn btn-lg btn-secondary">
                            <FaPlus className="position-relative me-1" style={{ bottom: "1px" }} />
                            Group
                        </button>
                    </div>
                    <div className="d-line me-1">
                        <a href={`#/Kanbas/Courses/${cid}/Assignments/New`} style={{ color: 'inherit', textDecoration: 'none' }}>
                            <button id="wd-view-progress" className="btn btn-lg btn-danger">
                                <FaPlus className="position-relative me-1" style={{ bottom: "1px" }} />
                                Assignment
                            </button>
                        </a>
                    </div>
                </>
            )}
    </div>
  );
}
