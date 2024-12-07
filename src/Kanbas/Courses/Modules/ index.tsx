import React, { useState } from "react";
import { useParams } from "react-router";
import * as db from "../../Database";  // Import the database where modules are stored
import ModuleControlButtons from "./ ModuleControlButtons";  // Import the module control buttons
import LessonControlButtons from "./LessonControlButtons";  // Import lesson control buttons
import { BsGripVertical } from "react-icons/bs";  // Import icon for drag handle
import ModulesControls from "./ModulesControls";
import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as coursesClient from "../client";
import * as moduleClient from "./client";



export default function Modules() {
  const { cid } = useParams();  // Get the course ID from the URL
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);  // 获取当前用户
  const dispatch = useDispatch();


  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  },[]);

  const createModuleForCourse = async() => {
    if (!cid) return;
    const newModule = { name : moduleName, course : cid};
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModule(module));
  }
  const removeModule = async (moduleId: string) => {
    await moduleClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  const saveModule = async (module : any) => {
    await moduleClient.updateModule(module);
    dispatch(updateModule(module));
  }

  


  return (
    <div className="wd-modules">
      <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={createModuleForCourse} />
      {currentUser.role === "FACULTY" && ( <ModulesControls moduleName={moduleName} setModuleName={setModuleName}
        addModule={() => {
          dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");
        }} />)}
      <br /><br /><br />
      <ul  className="mt-2 list-group rounded-0 w-100">
        
      {modules.map((module: any) => (
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
           
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> 
              {!module.editing && module.name} 
              { module.editing && (
        <input 
          className="form-control w-50 d-inline-block"
               onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
               onKeyDown={(e) => {
                 if (e.key === "Enter") {
                  saveModule({ ...module, editing: false });
                 }
               }}
               defaultValue={module.name}/>
      )} 
              
              <ModuleControlButtons moduleId={module._id}
              deleteModule={(moduleId) => removeModule(moduleId)}
              editModule={(moduleId) => dispatch(editModule(moduleId))} />
            </div>
            {module.lessons && (
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson: any) => (
                  <li className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                  </li>
                ))}</ul>)}</li>))}</ul>
    </div>)

}
