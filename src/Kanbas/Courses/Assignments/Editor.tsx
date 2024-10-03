import { useState } from "react";

export default function AssignmentEditor() {
  // 使用 useState 来管理表单数据
  const [assignmentName, setAssignmentName] = useState("A1");
  const [description, setDescription] = useState(
    "The assignment is available online. Submit a link to the landing page of your Web application running on Netlify."
  );
  const [points, setPoints] = useState(100);
  const [assignmentGroup, setAssignmentGroup] = useState("ASSIGNMENTS");
  const [displayGradeAs, setDisplayGradeAs] = useState("Percentage");
  const [submissionType, setSubmissionType] = useState("Online");
  const [entryOption, setEntryOption] = useState("Website URL");
  const [assignTo, setAssignTo] = useState("Everyone");
  const [dueDate, setDueDate] = useState("2024-05-13");
  const [availableFrom, setAvailableFrom] = useState("2024-05-06");
  const [availableUntil, setAvailableUntil] = useState("2024-05-20");

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
          value={assignmentName}
          onChange={(e) => setAssignmentName(e.target.value)}
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
          rows= {4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {/* Points, Assignment Group, Display Grade as */}
      <div className="row mb-3">
        <div className="col-md-4">
          <label htmlFor="points" className="form-label">
            Points
          </label>
          <input
            type="number"
            className="form-control"
            id="points"
            value={points}
            onChange={(e) => setPoints(Number(e.target.value))}

          />
        </div>
        <div className="col-md-4">
          <label htmlFor="assignmentGroup" className="form-label">
            Assignment Group
          </label>
          <select
            className="form-control"
            id="assignmentGroup"
            value={assignmentGroup}
            onChange={(e) => setAssignmentGroup(e.target.value)}
          >
            <option>ASSIGNMENTS</option>
            <option>QUIZZES</option>
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="displayGradeAs" className="form-label">
            Display Grade as
          </label>
          <select
            className="form-control"
            id="displayGradeAs"
            value={displayGradeAs}
            onChange={(e) => setDisplayGradeAs(e.target.value)}
          >
            <option>Percentage</option>
            <option>Letter Grade</option>
            <option>Pass/Fail</option>
          </select>
        </div>
      </div>

      {/* Submission Type */}
      <div className="mb-3">
        <label htmlFor="submissionType" className="form-label">
          Submission Type
        </label>
        <select
          className="form-control"
          id="submissionType"
          value={submissionType}
          onChange={(e) => setSubmissionType(e.target.value)}
        >
          <option>Online</option>
          <option>Oncampus</option>
        </select>
      </div>

      {/* Online Entry Options */}
      <div className="mb-3">
        <label className="form-label">Online Entry Options</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="textEntry"
            name="entryOption"
            value="Text Entry"
            checked={entryOption === "Text Entry"}
            onChange={(e) => setEntryOption(e.target.value)}
          />
          <label className="form-check-label" htmlFor="textEntry">
            Text Entry
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="websiteUrl"
            name="entryOption"
            value="Website URL"
            checked={entryOption === "Website URL"}
            onChange={(e) => setEntryOption(e.target.value)}
          />
          <label className="form-check-label" htmlFor="websiteUrl">
            Website URL
          </label>
        </div>
        {/* 其他选项 */}
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="mediaRecordings"
            name="entryOption"
            value="Media Recordings"
            onChange={(e) => setEntryOption(e.target.value)}
          />
          <label className="form-check-label" htmlFor="mediaRecordings">
            Media Recordings
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="fileUpload"
            name="entryOption"
            value="File Upload"
            onChange={(e) => setEntryOption(e.target.value)}
          />
          <label className="form-check-label" htmlFor="fileUpload">
            File Upload
          </label>
        </div>
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
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
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
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
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
            value={availableFrom}
            onChange={(e) => setAvailableFrom(e.target.value)}
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
            value={availableUntil}
            onChange={(e) => setAvailableUntil(e.target.value)}
          />
        </div>
      </div>

      {/* Cancel 和 Save 按钮 */}
      <div className="d-flex justify-content-end">
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}

