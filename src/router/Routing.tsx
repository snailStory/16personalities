import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import TypeTest from '../pages/TypeTest';
import TypeAnalysis from '../pages/TypeAnalysis';

function Routing() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/typeTest" element={<TypeTest />} />
          <Route path="/typeAnalysis" element={<TypeAnalysis />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing;
