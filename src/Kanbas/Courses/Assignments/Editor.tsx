import { useParams, Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  

  const [assignment, setAssignment] = useState<any>({
    title: "",
    description: "",
    points: 0,
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
    course: cid,
  });

  useEffect(() => {
    if (aid) {
      const existingAssignment = assignments.find(
        (a: any) => a._id === aid && a.course === cid
      );
      if (existingAssignment) {
        setAssignment(existingAssignment);
      }
    }
  }, [aid, assignments, cid]);

  const handleSave = () => {
    if (aid) {
      dispatch(updateAssignment(assignment));
      console.log("Update assignment:", assignment);
    } else {
      dispatch(addAssignment(assignment));
      console.log("Add assignment:", assignment);
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div className="container mt-3">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label ">Assignment Name</label>
        <input
          type="text"
          className="form-control"
          id="wd-name"
          placeholder="Enter assignment name"
          value={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label">Assignment Description</label>
        <textarea
          className="form-control"
          id="wd-description"
          rows={10}
          value={assignment.description}
          onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
        />
      </div>

      <div className="mb-3 row align-items-start">
        <div className="col-3 text-end">
          <label htmlFor="wd-points" className="form-label pt-1">Points</label>
        </div>
        <div className="col">
          <input
            type="number"
            className="form-control"
            id="wd-points"
            value={assignment.points}
            onChange={(e) => setAssignment({ ...assignment, points: Number(e.target.value) })}
          />
        </div>
      </div>

      <div className="mb-3 row">
        <div className="col-md-6">
          <label htmlFor="wd-available-from" className="form-label">Available From</label>
          <input
            type="date"
            className="form-control"
            id="wd-available-from"
            value={assignment.availableFrom}
            onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="wd-available-until" className="form-label">Available Until</label>
          <input
            type="date"
            className="form-control"
            id="wd-available-until"
            value={assignment.availableUntil}
            onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })}
          />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="wd-due-date" className="form-label">Due Date</label>
        <input
          type="date"
          className="form-control"
          id="wd-due-date"
          value={assignment.dueDate}
          onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
        />
      </div>

      <div className="text-end mt-3">
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
        <button onClick={handleSave} className="btn btn-success">Save</button>
      </div>
    </div>
  );
}



