import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";  


export default function KanbasNavigation() {
  return (
    <div
      id="wd-kanbas-navigation"
      style={{ width: 110 }}  // 侧边栏宽度为110px
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      {/* Northeastern logo */}
      <a id="wd-neu-link" target="_blank" href="https://www.northeastern.edu/">
        <img src="/images/NEU.png" width="110px" alt="NEU Logo" />  {/* 设置图片宽度为110px，与侧边栏一致 */}
      </a>

      {/* Account link */}
      <NavLink
        to="/Kanbas/Account"
        id="wd-account-link"
        className={({ isActive }) =>
          `list-group-item text-center border-0 ${isActive ? "bg-white text-danger" : "bg-black text-white"}`
        }
      >
        <FaRegCircleUser className="fs-1 text-white" />
        <div>Account</div>  {/* 将文字放在图标下方 */}
      </NavLink>

      {/* Dashboard link */}
      <NavLink
        to="/Kanbas/Dashboard"
        id="wd-dashboard-link"
        className={({ isActive }) =>
          `list-group-item text-center border-0 ${isActive ? "bg-white text-danger" : "bg-black text-white"}`
        }
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <div>Dashboard</div>  {/* 将文字放在图标下方 */}
      </NavLink>

      {/* Courses link */}
      <NavLink
        to="/Kanbas/Courses"
        id="wd-course-link"
        className={({ isActive }) =>
          `list-group-item text-center border-0 ${isActive ? "bg-white text-danger" : "bg-black text-white"}`
        }
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <div>Courses</div>  {/* 将文字放在图标下方 */}
      </NavLink>

      {/* Calendar link */}
      <NavLink
        to="/Kanbas/Calendar"
        id="wd-calendar-link"
        className={({ isActive }) =>
          `list-group-item text-center border-0 ${isActive ? "bg-white text-danger" : "bg-black text-white"}`
        }
      >
        <IoCalendarOutline className="fs-1 text-danger" />
        <div>Calendar</div>  {/* 将文字放在图标下方 */}
      </NavLink>

      {/* Inbox link */}
      <NavLink
        to="/Kanbas/Inbox"
        id="wd-inbox-link"
        className={({ isActive }) =>
          `list-group-item text-center border-0 ${isActive ? "bg-white text-danger" : "bg-black text-white"}`
        }
      >
        <FaInbox className="fs-1 text-danger" />
        <div>Inbox</div>  {/* 将文字放在图标下方 */}
      </NavLink>

      {/* Labs link */}
      <NavLink
        to="/Kanbas/Labs"
        id="wd-labs-link"
        className={({ isActive }) =>
          `list-group-item text-center border-0 ${isActive ? "bg-white text-danger" : "bg-black text-white"}`
        }
      >
        <LiaCogSolid className="fs-1 text-danger" />
        <div>Labs</div>  {/* 将文字放在图标下方 */}
      </NavLink>
    </div>
  );
}




