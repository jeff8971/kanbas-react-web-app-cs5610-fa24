import { FaPlus } from "react-icons/fa6";
import { GoSearch }  from "react-icons/go";

const AssignmentsControls = () => {
  return (
    <div id="wd-assignments-controls" className="text-nowrap d-flex justify-content-between align-items-center assignments-controls-container mb-4">
      <div className="h-100 border rounded d-flex flex-row justify-content-center align-items-center w-50">
        <GoSearch className="me-2 ms-3" />
        <input
          type="text"
          id="wd-search-assignment"
          placeholder="Search..."
          className="search-input"
        />
      </div>
      <div className="h-100">
        <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1">
          <FaPlus className="me-2 mb-1" />
          Group
        </button>
        <button id="wd-add-assignment" className="btn btn-lg btn-danger">
          <FaPlus className="me-2 mb-1" />
          Assignment
        </button>
      </div>
    </div>
  );
};

export default AssignmentsControls;
