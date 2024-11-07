import { FaSearch, FaCheckCircle, FaEllipsisV, FaPlus, FaRegEdit, FaTrashAlt} from "react-icons/fa";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { MdGroupAdd } from "react-icons/md";
import { Link, useParams, useNavigate } from "react-router-dom"; // 引入 useParams
import * as db from "../../Database"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch  } from "react-redux";
import { deleteAssignment } from "./reducer";


export default function Assignments() {
  const { cid } = useParams(); 
  const { currentUser } = useSelector((state: any) => state.accountReducer); 
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const handleDelete = (assignmentId: string) => {
    if (window.confirm("Are you sure you want to delete this assignment?")) {
      dispatch(deleteAssignment(assignmentId));
    }
  };

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
        {currentUser.role === "FACULTY" && (
        <div>
          <button className="btn btn-outline-secondary me-2">
            <MdGroupAdd className="me-1" />
            +Group
          </button>
          <Link to={`/Kanbas/Courses/${cid}/Assignments/new`}>
          <button className="btn btn-danger">
            +Assignment
          </button>
          </Link>
        </div>
        )}
      </div>

      {/* 40% of Total + 图标和更多选项 */}
      <div className="d-flex justify-content-between align-items-center mb-0 assignment-header" >
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
      {assignments.filter((a: any) => a.course === cid).map((assignment:any) => (
          <li key={assignment._id} className="list-group-item d-flex align-items-center justify-content-between wd-green-border">
            <div className="d-flex align-items-center">
              <div className="border-start border-3 border-success me-2"></div>
              <BsGrid3X3GapFill className="me-2" />

              {currentUser.role === "FACULTY" && (
              <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
               <FaRegEdit className="me-2 text-success" style={{ color: "green" }} />
              </Link>
            )}
              
              <div>
                  <h6 className="mb-0">{assignment.title}</h6>
              
                <p className="mb-0 text-muted small">
                  <span className="text-danger">Multiple Modules</span> |
                  Not available until {assignment.availableFrom} |
                  Due {assignment.dueDate} | {assignment.points} pts
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <FaCheckCircle className="text-success me-2" />
              {currentUser.role === "FACULTY" && (
                <FaTrashAlt 
                  className="text-danger me-2 cursor-pointer" 
                  onClick={() => handleDelete(assignment._id)}
                />
              )}
              <FaEllipsisV />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}





