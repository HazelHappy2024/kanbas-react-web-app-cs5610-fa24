import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";  // 假设数据库在这个路径

export default function AssignmentEditor() {
  // 获取作业ID (aid) 和 课程ID (cid) 从URL参数
  const { aid, cid } = useParams();

  // 从数据库中获取所有的作业
  const assignments = db.assignments;

  // 过滤并获取当前选择的作业
  const assignment = assignments.find((assignment: any) => assignment._id === aid);

  // 渲染页面
  return (
    <div className="container mt-4">
      <h3>Assignment Editor</h3>

      {/* Assignment Name */}
      <div className="mb-3">
        <label htmlFor="assignmentName" className="form-label">
          Assignment Name
        </label>
        <input
          type="text"
          className="form-control"
          id="assignmentName"
          value={assignment?.title || ''}  // 如果 assignment 存在，则显示 title
          readOnly
        />
      </div>

      {/* Description */}
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="description"
          rows={4}
          value={assignment?.description || ''}  // 如果 assignment 存在，则显示 description
          readOnly
        />
      </div>

      {/* Points */}
      <div className="row mb-3">
        <div className="col-md-4">
          <label htmlFor="points" className="form-label">
            Points
          </label>
          <input
            type="number"
            className="form-control"
            id="points"
            value={assignment?.points || 100}  // 如果 assignment 存在，则显示 points
            readOnly
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="assignmentGroup" className="form-label">
            Assignment Group
          </label>
          <input
            type="text"
            className="form-control"
            id="assignmentGroup"
            value="ASSIGNMENTS"  // 假设为默认组 ASSIGNMENTS
            readOnly
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="displayGradeAs" className="form-label">
            Display Grade as
          </label>
          <input
            type="text"
            className="form-control"
            id="displayGradeAs"
            value="Percentage"  // 假设为默认显示 Percentage
            readOnly
          />
        </div>
      </div>

      {/* Submission Type */}
      <div className="mb-3">
        <label htmlFor="submissionType" className="form-label">
          Submission Type
        </label>
        <input
          type="text"
          className="form-control"
          id="submissionType"
          value="Online"  // 假设默认类型为 Online
          readOnly
        />
      </div>

      {/* Assign to, Due Date, Available Dates */}
      <div className="row mb-3">
        <div className="col-md-4">
          <label htmlFor="assignTo" className="form-label">
            Assign to
          </label>
          <input
            type="text"
            className="form-control"
            id="assignTo"
            value="Everyone"  // 假设默认指派给 Everyone
            readOnly
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="dueDate" className="form-label">
            Due
          </label>
          <input
            type="date"
            className="form-control"
            id="dueDate"
            value={assignment?.dueDate || ''}  // 如果 assignment 存在，则显示 dueDate
            readOnly
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="availableFrom" className="form-label">
            Available from
          </label>
          <input
            type="date"
            className="form-control"
            id="availableFrom"
            value={assignment?.availableFrom || ''}  // 如果 assignment 存在，则显示 availableFrom
            readOnly
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="availableUntil" className="form-label">
            Until
          </label>
          <input
            type="date"
            className="form-control"
            id="availableUntil"
            value={assignment?.availableUntil || ''}  // 如果 assignment 存在，则显示 availableUntil
            readOnly
          />
        </div>
      </div>

      {/* Cancel 和 Save 按钮 */}
      <div className="d-flex justify-content-end">
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">
          Cancel
        </Link>
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-danger">
          Save
        </Link>
      </div>
    </div>
  );
}

