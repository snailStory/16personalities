import { Routes, Route, BrowserRouter } from "react-router-dom";
import TypeTest from "../pages/TypeTest";
import TypeAnalysis from "../pages/TypeAnalysis";
import Header from "src/components/Header";
import App from "../App";
import Footer from "../components/Footer";

function Routing() {
  return (
    <BrowserRouter>
      <Header />
      <div style={{ marginTop: "60px", marginBottom: "60px" }}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/typeTest" element={<TypeTest />} />
          <Route path="/typeAnalysis" element={<TypeAnalysis />}>
            <Route path=":mbti" element={<TypeAnalysis />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default Routing;
