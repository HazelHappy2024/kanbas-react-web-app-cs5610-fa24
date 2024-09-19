import Lab1 from "./Lab1";
import { Route, Routes} from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
//import Lab3 from "./Lab3";
import Link from "react-router"

export default function Labs() {
  return (
    <div>
      <ul>
        <li>Shurui Liu 002697084</li>
        <li>Fall2024 CS5610 Section02</li>
        <li>
          Please Visit My GitHub a1 Branch at{" "}
          <a 
            href="https://github.com/your-repo-link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            GitHub
          </a>.
        </li>
      </ul>

      <h1>Labs</h1>
      <TOC />
      <Routes>
        {/*<Route path="/" element={<Navigate to="Lab1" />} />*/}
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<h2>Lab3</h2>} />
      </Routes>
    </div>
  );
}

