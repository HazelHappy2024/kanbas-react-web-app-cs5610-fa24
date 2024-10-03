import { FaSearch, FaCheckCircle, FaEllipsisV, FaPlus } from "react-icons/fa";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { MdGroupAdd } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="container mt-4">
      {/* 顶部搜索框和按钮 */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group" style={{ maxWidth: "250px" }}>
          <span className="input-group-text" id="search-icon">
            <FaSearch />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search for Assignments"
            aria-label="Search"
            aria-describedby="search-icon"
          />
        </div>
        <div>
          <button className="btn btn-outline-secondary me-2">
            <MdGroupAdd className="me-1" />
            +Group
          </button>
          <button className="btn btn-danger">
            +Assignment
          </button>
        </div>
      </div>

      {/* 40% of Total + 图标和更多选项 */}
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h5 className="fw-bold">ASSIGNMENTS</h5>
        <div className="d-flex align-items-center">
          <div className="badge bg-light text-dark d-flex align-items-center">
            40% of Total
            <FaPlus className="ms-2" />
          </div>
          <FaEllipsisV className="ms-2" />
        </div>
      </div>

      {/* 作业列表 */}
      <ul className="list-group">
        <li className="list-group-item d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <div className="border-start border-3 border-success me-2"></div>
            <BsGrid3X3GapFill className="me-2" />
            <div>
              <Link to="/Kanbas/Courses/1234/Assignments/1234" className="text-decoration-none">
                <h6 className="mb-0">A1</h6>
              </Link>
              <p className="mb-0 text-muted small">
                <span className="text-danger">Multiple Modules</span> |
                Not available until May 6 at 12:00am |
                Due May 13 at 11:59pm | 100 pts
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <FaCheckCircle className="text-success me-2" />
            <FaEllipsisV />
          </div>
        </li>

        <li className="list-group-item d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <div className="border-start border-3 border-success me-2"></div>
            <BsGrid3X3GapFill className="me-2" />
            <div>
            <Link to="/Kanbas/Courses/1234/Assignments/1234" className="text-decoration-none">
                <h6 className="mb-0">A2</h6>
              </Link>
              <p className="mb-0 text-muted small">
                <span className="text-danger">Multiple Modules</span> |
                Not available until May 13 at 12:00am |
                Due May 20 at 11:59pm | 100 pts
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <FaCheckCircle className="text-success me-2" />
            <FaEllipsisV />
          </div>
        </li>

        <li className="list-group-item d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <div className="border-start border-3 border-success me-2"></div>
            <BsGrid3X3GapFill className="me-2" />
            <div>
            <Link to="/Kanbas/Courses/1234/Assignments/1234" className="text-decoration-none">
                <h6 className="mb-0">A3</h6>
              </Link>
              <p className="mb-0 text-muted small">
                <span className="text-danger">Multiple Modules</span> |
                Not available until May 20 at 12:00am |
                Due May 27 at 11:59pm | 100 pts
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <FaCheckCircle className="text-success me-2" />
            <FaEllipsisV />
          </div>
        </li>
      </ul>
    </div>
  );
}




