import Modules from "../Modules/ index";
import CourseStatus from "./Status";
import { Link } from "react-router-dom";  // 新增导入Link


export default function Home() {
  return (
    <div className="d-flex" id="wd-home">
      <div className="flex-fill">
        <Modules />
        <Link id="wd-back-to-landing" to="/Labs">Back to Landing Page</Link>
      </div>
      <div className="d-none d-xl-block">
        <CourseStatus />
      </div>
    </div>
  );
}


