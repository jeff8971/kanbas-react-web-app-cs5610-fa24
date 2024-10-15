import { Route, Routes, Navigate } from "react-router";
import Lab1 from "./Lab1";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3"
export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>CS5610</h1>

      <h2 id="wd-fullname">Yuan Zhao</h2>
      <a id="wd-github" href="https://github.com/jeff8971/kanbas-react-web-app-cs5610-fa24">
        https://github.com/jeff8971/kanbas-react-web-app-cs5610-fa24
      </a>

      <h1>Labs</h1>
      <TOC />

      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>
    </div>
  );
}