import { FaPlus } from "react-icons/fa"; 
import { MdDoNotDisturbAlt } from "react-icons/md"; // Importing the unpublish icon
import GreenCheckmark from "./GreenCheckmark"; 
import { useState } from "react";

export default function ModulesControls() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div id="wd-modules-controls" className="d-flex justify-content-between align-items-center mb-3">
      <div>
        <button id="wd-collapse-all-btn" className="btn btn-lg btn-secondary me-1">Collapse All</button>
        <button id="wd-view-progress-btn" className="btn btn-lg btn-secondary me-1">View Progress</button>

        {/* Publish All dropdown */}
        <div className="dropdown d-inline">
          <button
            id="wd-publish-all-btn"
            className="btn btn-lg btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded={isDropdownOpen}
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            <GreenCheckmark /> Publish All
          </button>
          <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
            <li>
              <a className="dropdown-item" href="#">
                <GreenCheckmark /> Publish all modules and items
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <GreenCheckmark /> Publish modules only
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <MdDoNotDisturbAlt /> Unpublish all modules and items
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <MdDoNotDisturbAlt /> Unpublish modules only
              </a>
            </li>
          </ul>
        </div>
      </div>

      <button id="wd-add-module-btn" className="btn btn-lg btn-danger">
        <FaPlus /> Module
      </button>
    </div>
  );
}



