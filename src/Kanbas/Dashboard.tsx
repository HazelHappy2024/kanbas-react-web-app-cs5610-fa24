import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';  // 确保引入了 Bootstrap 样式

export default function Dashboard() {
  const courses = [
    { id: 1, title: "CS5610 React JS", description: "Full Stack Software Development", year: "2024fall", imgSrc: "/images/reactjs.jpg", link: "/Kanbas/Courses/CS5610/Home" },
    { id: 2, title: "CS5200 Database Management", description: "Introduction to SQL", year: "2024fall", imgSrc: "/images/sql.jpg", link: "/Kanbas/Courses/CS5200/Home" },
    { id: 3, title: "CS5500 Software Engineering", description: "Agile Development", year: "2024fall", imgSrc: "/images/agile.jpg", link: "/Kanbas/Courses/CS5500/Home" },
    { id: 4, title: "CS6510 Artificial Intelligence", description: "AI and Machine Learning", year: "2024fall", imgSrc: "/images/ai.jpg", link: "/Kanbas/Courses/CS6510/Home" },
    { id: 5, title: "CS5800 Algorithms", description: "Data Structures and Algorithms", year: "2024fall", imgSrc: "/images/algorithms.jpg", link: "/Kanbas/Courses/CS5800/Home" },
    { id: 6, title: "CS6200 Operating Systems", description: "Memory Management", year: "2024fall", imgSrc: "/images/os.jpg", link: "/Kanbas/Courses/CS6200/Home" },
    { id: 7, title: "CS6650 Distributed Systems", description: "Scalable Systems Design", year: "2024fall", imgSrc: "/images/distributed.jpg", link: "/Kanbas/Courses/CS6650/Home" },
  ];

  return (
    <div id="wd-dashboard" className="container">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {/* 课程卡片 */}
        {courses.map((course) => (
          <div className="col" key={course.id}>
            <div className="card h-100" style={{ width: "250px" }}>
              <Link className="text-decoration-none text-dark" to={course.link}>
                <img src={course.imgSrc} className="card-img-top" alt={course.title} style={{ height: "160px", objectFit: "cover" }} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text">{course.description}</p>
                  <p className="text-muted">{course.year}</p>
                  <button className="btn btn-primary mt-auto">Go</button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}




