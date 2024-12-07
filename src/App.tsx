import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Modules from "./Kanbas/Courses/Modules/ index";
import store from "./Kanbas/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <HashRouter>
      <Provider store={store}>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Kanbas" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/Kanbas/Courses/:cid/Modules" element={<Modules />} />

        </Routes>
      </div>
      </Provider>
    </HashRouter>
  );
}
