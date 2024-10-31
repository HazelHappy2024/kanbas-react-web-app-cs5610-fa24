import { Navigate, Route, Routes, useParams, useLocation, Link } from "react-router-dom"; // 加入 Link
import CoursesNavigation from "./Navigation";
import Modules from "./Modules/ index";
import Home from "./Home";
import Assignments from "./Assignments";
import PeopleTable from "./People/Table";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa6";

export default function Courses ({ courses }: { courses: any[]; }) {
  const { cid } = useParams(); // 获取课程的 ID
  const course = courses.find((course) => course._id === cid);
  
  const { pathname } = useLocation(); // 获取当前路径



  // 获取当前页面的名称，如 Home, Modules 等
  const currentPage = pathname.split("/")[3]; // 例如: Home, Modules, Assignments...

  return (
    <div id="wd-courses">
      {/* 动态显示课程名称和当前页面 */}
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>

      {/* 页面布局，带有导航和内容区域 */}
      <div className="d-flex">
        {/* 课程导航 */}
        <div className="d-none d-md-block">
          <CoursesNavigation /> {/* 渲染导航 */}
        </div>

        {/* 动态渲染课程的不同部分（Modules, Assignments, People等） */}
        <div className="flex-fill">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable />} />
            <Route path="*" element={<Navigate to="Home" />} /> {/* 默认路由 */}
          </Routes>
        </div>
      </div>
    </div>
  );
}





