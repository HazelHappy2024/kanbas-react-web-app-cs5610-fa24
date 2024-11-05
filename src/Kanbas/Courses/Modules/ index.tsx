import { useParams } from "react-router";
import * as db from "../../Database";  // Import the database where modules are stored
import ModuleControlButtons from "./ ModuleControlButtons";  // Import the module control buttons
import LessonControlButtons from "./LessonControlButtons";  // Import lesson control buttons
import { BsGripVertical } from "react-icons/bs";  // Import icon for drag handle
import ModulesControls from "./ModulesControls";


export default function Modules() {
  const { cid } = useParams();  // Get the course ID from the URL
  const modules = db.modules;  // Get all the modules from the database

  return (
    <div>
      <ModulesControls /><br /><br /><br />
      <ul  className="mt-2 list-group rounded-0 w-100">
        <li 
        className="wd-module list-group-item p-0 
        mb-5 fs-5 border-gray"
        >
          <div className="wd-title p-3 ps-2 bg-secondary"> 
          <BsGripVertical className="me-2 fs-3" />
          Week 1 
          <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0" >
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LEARNING OBJECTIVES 
              <LessonControlButtons />
              </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Introduction to the course 
              <LessonControlButtons />
              </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Learn what is Web Development 
              <LessonControlButtons />
              </li>
            <li className="wd-lesson list-group-item p-3 ps-1"> 
            <BsGripVertical className="me-2 fs-3" />
            LESSON 1 
            <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1"> 
            <BsGripVertical className="me-2 fs-3" />
            LESSON 2 
            <LessonControlButtons />
            </li>
          </ul>
        </li>
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary"> 
          <BsGripVertical className="me-2 fs-3" />
          Week 2 
          <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
            LEARNING OBJECTIVES 
            <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1"> 
            <BsGripVertical className="me-2 fs-3" />
            LESSON 1 
            <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1"> 
            <BsGripVertical className="me-2 fs-3" />
            LESSON 2 
            <LessonControlButtons />
            </li>
          </ul>
        </li>
      </ul> 
    </div>)

}
