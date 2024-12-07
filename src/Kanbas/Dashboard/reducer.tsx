import { createSlice } from "@reduxjs/toolkit";
import { enrollments as initialDatabaseEnrollments} from "../Database"  // 假设 enrollments 初始数据在 Database 中

const loadEnrollments = () => {
    const savedEnrollments = localStorage.getItem("enrollments");
    const localEnrollments = savedEnrollments ? JSON.parse(savedEnrollments) : [];
    const mergedEnrollments = [...initialDatabaseEnrollments, ...localEnrollments];
    console.log("Loaded enrollments:", mergedEnrollments);
    return mergedEnrollments;
  };
  
  const saveEnrollments = (enrollments:any) => {
    localStorage.setItem("enrollments", JSON.stringify(enrollments));
  };


const initialState = {
  enrollments: loadEnrollments(),
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollCourse: (state, { payload: 
        { userId, courseId } }) => {
      const newEnrollment = {
        _id: new Date().getTime().toString(),
        user: userId,
        course: courseId,
      };
      state.enrollments.push(newEnrollment);
      saveEnrollments(state.enrollments);
    },
    unenrollCourse: (state, { payload: { userId, courseId } }) => {
      state.enrollments = state.enrollments.filter(
        (enrollment:any) =>
          !(enrollment.user === userId && enrollment.course === courseId)
      );
      saveEnrollments(state.enrollments);
    },
  },
});

export const { enrollCourse, unenrollCourse } = enrollmentsSlice.actions;

export default enrollmentsSlice.reducer;
