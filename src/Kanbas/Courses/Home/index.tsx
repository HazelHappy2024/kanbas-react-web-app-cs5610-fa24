import Modules from "../Modules/ index";
import CourseStatus from "./Status";
import { Link } from "react-router-dom";  // 新增导入Link

export default function Home() {
  return (
    <div id="wd-home">
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <Modules />
            </td>
            <td valign="top">
              <CourseStatus />
            </td>
          </tr>
        </tbody>
      </table>
      
      
      <Link id="wd-back-to-landing" to="/Labs">Back to Landing Page</Link>
    </div>
  );
}

