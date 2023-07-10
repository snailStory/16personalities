import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import TypeTest from '../pages/TypeTest';
import TypeAnalysis from '../pages/TypeAnalysis';
import Header from 'src/components/Header';

function Routing() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/typeTest" element={<TypeTest />} />
        <Route path="/typeAnalysis" element={<TypeAnalysis />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
