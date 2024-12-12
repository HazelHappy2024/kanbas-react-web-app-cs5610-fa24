import axios from "axios";
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER
const ENROLLMENTS_API = `${process.env.REACT_APP_REMOTE_SERVER}/api/enrollments`;

export const enrollCourse = async (userId: any, courseId: any) => {
  await axios.post(ENROLLMENTS_API, { userId, courseId });
};

export const unenrollCourse = async (userId: any, courseId: any) => {
  await axios.delete(ENROLLMENTS_API, { data: { userId, courseId } });
};

export const fetchUserEnrollments = async (userId: any) => {
  const { data } = await axios.get(`${ENROLLMENTS_API}/${userId}`);
  return data;
};
