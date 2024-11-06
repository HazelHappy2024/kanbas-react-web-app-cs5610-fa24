import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";  // 引入加号图标
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";


export default function ModuleControlButtons({ moduleId, deleteModule }: { moduleId: string; deleteModule: (moduleId: string) => void; }) {
    return (
        <div className="float-end">
            <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteModule(moduleId)}/>
            <GreenCheckmark />
            <FaPlus className="fs-4 me-2" />  {/* 显示加号图标 */}
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}
