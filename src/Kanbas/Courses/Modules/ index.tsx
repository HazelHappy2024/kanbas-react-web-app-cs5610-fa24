import { useParams } from "react-router";
import * as db from "../../Database";  // Import the database where modules are stored
import ModuleControlButtons from "./ ModuleControlButtons";  // Import the module control buttons
import LessonControlButtons from "./LessonControlButtons";  // Import lesson control buttons
import { BsGripVertical } from "react-icons/bs";  // Import icon for drag handle

export default function Modules() {
  const { cid } = useParams();  // Get the course ID from the URL
  const modules = db.modules;  // Get all the modules from the database

  return (
    <ul id="wd-modules" className="list-group rounded-0">
      {modules
        .filter((module: any) => module.course === cid)  // Filter modules by course ID
        .map((module: any) => (
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray" key={module._id}>
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />  {/* Drag icon */}
              {module.name}  {/* Module name */}
              <ModuleControlButtons />  {/* Control buttons for the module */}
            </div>
            {/* Render the lessons associated with the module */}
            {module.lessons && (
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson: any) => (
                  <li className="wd-lesson list-group-item p-3 ps-1" key={lesson._id}>
                    <BsGripVertical className="me-2 fs-3" />  {/* Drag icon */}
                    {lesson.name}  {/* Lesson name */}
                    <LessonControlButtons />  {/* Control buttons for the lesson */}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
    </ul>
  );
}



