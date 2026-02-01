import { HeartPulse } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';
import '../styles/App.scss'; // Reusing App styles for layout

export function Layout() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="nav-content">
          <Link to="/" className="logo">
            <HeartPulse className="icon" />
            <span>VCPR</span>
          </Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/support">Support</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <button style={{ backgroundColor: '#2563eb', color: 'white', border: 'none', padding: '0.5rem 1.5rem', borderRadius: '9999px', fontWeight: 'bold' }}>
            Get App
          </button>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <HeartPulse size={20} />
            <span>VCPR</span>
          </div>
          <div className="footer-links">
            <Link to="/terms">Terms</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/deletion">Account Deletion</Link>
            <Link to="/support">Help Center</Link>
          </div>
          <div>
            © {new Date().getFullYear()} VCPR. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
