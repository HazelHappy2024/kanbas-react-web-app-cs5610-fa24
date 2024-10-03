import { Link } from "react-router-dom";
import "../styles.css"; // 确保已导入正确的样式

export default function CoursesNavigation() {
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link to="Home" id="wd-course-home-link" className="list-group-item border border-0">
        Home
      </Link>
      <Link to="Modules" id="wd-course-modules-link" className="list-group-item text-danger border border-0">
        Modules
      </Link>
      <Link to="Piazza" id="wd-course-piazza-link" className="list-group-item text-danger border border-0">
        Piazza
      </Link>
      <Link to="Zoom" id="wd-course-zoom-link" className="list-group-item text-danger border border-0">
        Zoom
      </Link>
      <Link to="Assignments" id="wd-course-assignments-link" className="list-group-item text-danger border border-0">
        Assignments
      </Link>
      <Link to="Quizzes" id="wd-course-quizzes-link" className="list-group-item text-danger border border-0">
        Quizzes
      </Link>
      <Link to="People" id="wd-course-people-link" className="list-group-item text-danger border border-0">
        People
      </Link>
    </div>
  );
}








