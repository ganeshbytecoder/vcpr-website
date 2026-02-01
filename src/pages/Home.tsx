import { motion } from 'framer-motion';
import { Activity, BarChart3, Bluetooth, Download, Shield } from 'lucide-react';
import '../styles/App.scss';

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="badge">
              For Medical Professionals & Students
            </div>
            <h1>
              Master CPR with <br />
              <span className="gradient-text">
                Real-time Feedback
              </span>
            </h1>
            <p className="subtitle">
              Connect to supported Bluetooth manikins to visualize compression depth, rate, and recoil. 
              The ultimate training tool for public safety and healthcare certification.
            </p>
            <div className="cta-group">
              <button className="btn-download">
                <Download size={20} />
                Download App
              </button>
              <button className="btn-learn">
                How it Works
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hero-preview"
          >
            <div className="glow" />
            <div className="preview-card">
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ marginBottom: '1rem' }}>Live Compression Data</h3>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'flex-end', height: '100px' }}>
                    {[4, 5, 5.5, 5, 4.5, 5.2, 5.8, 5.5].map((h, i) => (
                        <div key={i} style={{ 
                            width: '20px', 
                            height: `${h * 10}px`, 
                            backgroundColor: h >= 5 && h <= 6 ? '#22c55e' : '#eab308',
                            borderRadius: '4px'
                        }} />
                    ))}
                </div>
                <p style={{ marginTop: '1rem', fontSize: '0.875rem' }}>Simulated Real-time Graph</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="features">
        <div className="features-grid">
          <FeatureCard
            icon={<Bluetooth className="w-8 h-8 text-blue-400" />}
            title="Bluetooth Sensor Sync"
            description="Compatible with major smart manikins and generic HC-05 Bluetooth pressure sensors."
          />
          <FeatureCard
            icon={<Activity className="w-8 h-8 text-purple-400" />}
            title="Guideline Compliance"
            description="Visual indicators for standard 5-6cm compression depth. Instant feedback on shallow or deep compressions."
          />
          <FeatureCard
            icon={<BarChart3 className="w-8 h-8 text-emerald-400" />}
            title="Session Analytics"
            description="Review session performance with detailed history logs to track improvement over time."
          />
        </div>
      </section>

      {/* Privacy Teaser */}
      <section className="privacy">
        <div className="privacy-content">
            <Shield style={{ width: '3rem', height: '3rem', marginBottom: '1.5rem', color: '#64748b' }} />
            <h2>Training Data Stays Local</h2>
            <p>
            VCPR is designed for privacy. Training sessions are stored locally on your device for personal review.
            </p>
        </div>
      </section>
    </>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="feature-card"
    >
      <div className="icon-wrapper">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>
        {description}
      </p>
    </motion.div>
  );
}
