import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import TypeTest from '../pages/typeTest';
import TypeAnalysis from '../pages/typeAnalysis';

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
