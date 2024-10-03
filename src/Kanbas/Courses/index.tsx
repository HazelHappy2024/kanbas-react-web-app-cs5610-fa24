import CoursesNavigation from "./Navigation";
import { Route, Routes } from "react-router";
import Modules from "./Modules/ index";
import Home from "./Home";
import Assignments from "./Assignments";
import PeopleTable from "./People/Table";
import AssignmentEditor from "./Assignments/Editor";

export default function Courses() {
  return (
    <div id="wd-courses">
      <h2 className="text-danger">Course 1234</h2> 
      <hr />

      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>

        <div className="flex-fill">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:" element={<AssignmentEditor />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable />} />
            {/* Add other routes here as needed */}
          </Routes>
        </div>
      </div>
    </div>
  );
}



