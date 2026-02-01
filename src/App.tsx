import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Deletion, Privacy, Terms } from './pages/Legal';
import { Support } from './pages/Support';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="deletion" element={<Deletion />} />
          <Route path="support" element={<Support />} />
          <Route path="contact" element={<Support />} /> {/* Reusing Support page for Contact link */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
