import Modules from "../Modules/ index";
import CourseStatus from "./Status";
import { Link } from "react-router-dom";  // 新增导入Link

export default function Home() {
  return (
    <div>

      <div className="d-flex" id="wd-home">
        <div className="flex-fill">
          <Modules />
        </div>

        <div className="d-none d-md-block">
          <CourseStatus />
        </div>
      </div>




    </div>
  );
}

