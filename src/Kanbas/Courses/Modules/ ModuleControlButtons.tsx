import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";  // 引入加号图标
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";



export default function ModuleControlButtons({ moduleId, deleteModule, editModule}:{ 
    moduleId: string; deleteModule: (moduleId: string) => void; 
    editModule: (moduleId: string) => void }) {
    return (
        <div className="float-end">
            <FaPencil onClick={() => editModule(moduleId)} className="text-primary me-3" />
            <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteModule(moduleId)}/>
            <GreenCheckmark />
            <FaPlus className="fs-4 me-2" />  {/* 显示加号图标 */}
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}
