import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return  (
    <HashRouter>
      <div>
        <Routes>
          <Route path = "/" element={<Navigate to = "labs" />} />
          <Route path = "/Labs" element={<Labs />} />
          <Route path = "/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
