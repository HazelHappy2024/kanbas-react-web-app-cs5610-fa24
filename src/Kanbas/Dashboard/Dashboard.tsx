import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { enrollCourse, unenrollCourse } from "./reducer";
import { fetchAllCourses } from "../Courses/client";
import { findMyCourses } from "../Account/client";

export default function Dashboard({
  courses, course, setCourse, addNewCourse, deleteCourse, updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const dispatch = useDispatch();
  const [allCourses, setAllCourses] = useState<any[]>([]);
  const [showAllCourses, setShowAllCourses] = useState(false);

  useEffect(() => {
    if (showAllCourses) {
      fetchAllAvailableCourses();
    } else {
      fetchUserCourses();
    }
  }, [showAllCourses]);

  const fetchUserCourses = async () => {
    try {
      const userCourses = await findMyCourses();
      setCourse(userCourses);
    } catch (error) {
      console.error("Error fetching user courses:", error);
    }
  };

  const fetchAllAvailableCourses = async () => {
    try {
      const allAvailableCourses = await fetchAllCourses();
      setAllCourses(allAvailableCourses);
    } catch (error) {
      console.error("Error fetching all courses:", error);
    }
  };

  const isEnrolled = (courseId: any) =>
    enrollments.some((enrollment: any) => enrollment.user === currentUser._id && enrollment.course === courseId);

  return (
    <div className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

      {currentUser.role === "FACULTY" && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <input
            defaultValue={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            defaultValue={course.description}
            className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <hr />
        </>
      )}

      {currentUser.role === "STUDENT" && (
        <button
          className="btn btn-primary float-end"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          {showAllCourses ? "Show My Enrollments" : "Show All Courses"}
        </button>
      )}

      <h2 id="wd-dashboard-published">
        Published Courses ({showAllCourses ? allCourses.length : courses.length})
      </h2>
      <hr />
      <div className="row" id="wd-dashboard-courses">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {(showAllCourses ? allCourses : courses).map((course) => (
            <div key={course._id} className="col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <img
                    src={course.imgSrc || "default-image.jpg"}
                    alt={course.name}
                    width="100%"
                    height={160}
                  />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}
                    </p>
                    <button className="btn btn-primary">Go</button>

                    {currentUser.role === "FACULTY" && (
                      <>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                        <button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            console.log("Editing course:", course);
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>
                      </>
                    )}

                    {currentUser.role === "STUDENT" &&
                      (isEnrolled(course._id) ? (
                        <button
                          className="btn btn-danger float-end"
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(
                              unenrollCourse({ userId: currentUser._id, courseId: course._id })
                            );
                          }}
                        >
                          Unenroll
                        </button>
                      ) : (
                        <button
                          className="btn btn-success float-end"
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(
                              enrollCourse({ userId: currentUser._id, courseId: course._id })
                            );
                          }}
                        >
                          Enroll
                        </button>
                      ))}
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}