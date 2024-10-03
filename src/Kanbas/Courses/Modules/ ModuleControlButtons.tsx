import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";  // 引入加号图标
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons() {
    return (
        <div className="float-end">
            <GreenCheckmark />
            <FaPlus className="fs-4 me-2" />  {/* 显示加号图标 */}
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}
