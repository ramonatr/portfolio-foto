import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import Navbar from './components/Navbar';
import CursorGlow from './components/CursorGlow';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import SmallProjectPage from './pages/SmallProjectPage';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <CursorGlow />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/small-project/:id" element={<SmallProjectPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
