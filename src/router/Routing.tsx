import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import TypeTest from "../pages/TypeTest";
import TypeAnalysis from "../pages/TypeAnalysis";
import Header from "src/components/Header";
import App from "../App";

function Routing() {
  return (
    <BrowserRouter>
      <Header />
      <div style={{ marginTop: "50px" }}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/typeTest" element={<TypeTest />} />
          <Route path="/typeAnalysis" element={<TypeAnalysis />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Routing;
