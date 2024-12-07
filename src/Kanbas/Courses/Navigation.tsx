import { Link, useParams, useLocation } from "react-router-dom";
import "../styles.css"; 

export default function CoursesNavigation() {
  const { cid } = useParams(); // 获取当前课程的ID
  const { pathname } = useLocation(); // 获取当前路径

  // 定义导航链接的数组
  const links = [
    { label: "Home", path: `/Kanbas/Courses/${cid}/Home` },
    { label: "Modules", path: `/Kanbas/Courses/${cid}/Modules` },
    { label: "Piazza", path: `/Kanbas/Courses/${cid}/Piazza` },
    { label: "Zoom", path: `/Kanbas/Courses/${cid}/Zoom` },
    { label: "Assignments", path: `/Kanbas/Courses/${cid}/Assignments` },
    { label: "Quizzes", path: `/Kanbas/Courses/${cid}/Quizzes` },
    { label: "Grades", path: `/Kanbas/Courses/${cid}/Grades` },
    { label: "People", path: `/Kanbas/Courses/${cid}/People` },
  ];

  return (
    <ul className="wd list-group fs-5 rounded-0 d-none d-lg-block">
      {links.map((link) => (
        <Link
        key={link.path}
          to={link.path}
          className={`list-group-item bg-black text-center border-0 
            ${pathname.includes(link.path) ? "text-danger bg-white" : "text-red bg-white "}`}
        >
          {link.label}
        </Link>
        
      ))}
    </ul>
  );
}










