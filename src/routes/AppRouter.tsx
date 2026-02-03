import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';
import CalculatorPage from '../pages/CalculatorPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/calculators" element={<CalculatorPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
