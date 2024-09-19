import Lab1 from "./Lab1";
import { Route, Routes} from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
//import Lab3 from "./Lab3";
export default function Labs() {
  return (
    <div>
      <h1>Shurui Liu</h1>
      <h1>Fall2024 CS5610 Section02</h1>
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

