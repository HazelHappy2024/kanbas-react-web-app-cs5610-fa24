import Lab1 from "./Lab1";
import { Route, Routes } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";





export default function Labs() {
  return (
    <div>
      <ul>
        <li>Shurui Liu 002697084</li>
        <li>Fall2024 CS5610 Section02</li>
        <li>
          Please Visit My GitHub a2 Branch at{" "}
          <a 
            href="https://github.com/HazelHappy2024/kanbas-react-web-app-cs5610-fa24/tree/a2" 
            target="_blank" 
            rel="noopener noreferrer"
            id="wd-github" 
          >
            My GitHub Repository
          </a>.
        </li>
      </ul>

      <h1>Labs</h1>

      {/* Add full name */}
      <h2>Shurui Liu</h2>  

      <TOC />
      <Routes>
        {/*<Route path="/" element={<Navigate to="Lab1" />} />*/}
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3/*" element={<Lab3 />} />
        <Route path="Lab4" element={<Lab4 />} />
        
      </Routes>
    </div>
  );
}


