import { BrowserRouter, Routes, Route } from 'react-router';
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import ResearchPage from './components/ResearchPage';
import DesignPage from './components/DesignPage';
import DesignMRPage from './components/DesignMRPage';
import DesignUXPage from './components/DesignUXPage';
import Design3DMotionPage from './components/Design3DMotionPage';
import AboutPage from './components/AboutPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/design" element={<DesignPage />} />
          <Route path="/design/mr" element={<DesignMRPage />} />
          <Route path="/design/ux" element={<DesignUXPage />} />
          <Route path="/design/3d-motion" element={<Design3DMotionPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}