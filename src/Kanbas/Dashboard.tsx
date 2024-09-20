import { Link } from "react-router-dom";

export default function Dashboard() {
  const courses = [
    { id: 1, title: "CS5610 React JS", description: "Full Stack Software Development", imgSrc: "/images/reactjs.jpg", link: "/Kanbas/Courses/CS5610/Home" },
    { id: 2, title: "CS5200 Database Management", description: "Introduction to SQL", imgSrc: "/images/sql.jpg", link: "/Kanbas/Courses/CS5200/Home" },
    { id: 3, title: "CS5500 Software Engineering", description: "Agile Development", imgSrc: "/images/agile.jpg", link: "/Kanbas/Courses/CS5500/Home" },
    { id: 4, title: "CS6510 Artificial Intelligence", description: "AI and Machine Learning", imgSrc: "/images/ai.jpg", link: "/Kanbas/Courses/CS6510/Home" },
    { id: 5, title: "CS5800 Algorithms", description: "Data Structures and Algorithms", imgSrc: "/images/algorithms.jpg", link: "/Kanbas/Courses/CS5800/Home" },
    { id: 6, title: "CS6200 Operating Systems", description: "Multithreading, Memory Management", imgSrc: "/images/os.jpg", link: "/Kanbas/Courses/CS6200/Home" },
    { id: 7, title: "CS6650 Distributed Systems", description: "Scalable Systems Design", imgSrc: "/images/distributed.jpg", link: "/Kanbas/Courses/CS6650/Home" },
  ];

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        {courses.map(course => (
          <div className="wd-dashboard-course" key={course.id}>
            <Link className="wd-dashboard-course-link" to={course.link}>
              <img src={course.imgSrc} alt={course.title} width={200} />
              <div>
                <h5>{course.title}</h5>
                <p className="wd-dashboard-course-title">{course.description}</p>
                <button> Go </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}


