import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Modules from "./Kanbas/Courses/Modules/ index";

export default function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Kanbas" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/Kanbas/Courses/:cid/Modules" element={<Modules />} />

        </Routes>
      </div>
    </HashRouter>
  );
}
