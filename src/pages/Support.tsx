import { HelpCircle, Mail } from 'lucide-react';
import '../styles/App.scss';

export function Support() {
  return (
    <div className="app-container" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
        <h1 style={{ marginBottom: '1rem' }}>Help Center & Support</h1>
        <p style={{ color: '#94a3b8', marginBottom: '3rem', fontSize: '1.25rem' }}>
          Find answers to common questions about connecting your manikin, viewing analytics, and more.
        </p>

        <div style={{ display: 'grid', gap: '2rem' }}>
            {/* FAQ Section */}
            <section>
                <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                    <HelpCircle className="text-blue-500" /> 
                    <span>Frequently Asked Questions</span>
                </h2>
                
                <div style={{ display: 'grid', gap: '1rem' }}>
                    <FaqItem 
                        question="How do I connect my Bluetooth Manikin?" 
                        answer="Open VCPR and ensure Bluetooth is enabled on your phone. Turn on your manikin/sensor. It should appear in the 'Available Devices' list automatically. Tap to connect."
                    />
                    <FaqItem 
                        question="What devices are supported?" 
                        answer="VCPR supports most generic HC-05 based pressure sensors and standard Bluetooth Low Energy (BLE) CPR manikins that output raw pressure data."
                    />
                    <FaqItem 
                        question="Why is the graph not moving?" 
                        answer="Ensure you are compressing deep enough to register a value. The sensor might need calibration. Try disconnecting and reconnecting."
                    />
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" style={{ marginTop: '2rem', padding: '2rem', borderRadius: '1rem', background: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(51, 65, 85, 0.5)' }}>
                <h2 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Mail className="text-purple-500" />
                    <span>Contact Us</span>
                </h2>
                <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>
                    Need further assistance? Our support team is here to help medical professionals and students.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <strong style={{ color: '#f8fafc' }}>Email Support:</strong>
                    <a href="mailto:support@vcpr.app" style={{ color: '#60a5fa' }}>support@vcpr.app</a>
                </div>
            </section>
        </div>
      </div>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string, answer: string }) {
    return (
        <div style={{ padding: '1.5rem', background: 'rgba(15, 23, 42, 0.5)', borderRadius: '0.75rem', border: '1px solid #1e293b' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem', color: '#f8fafc' }}>{question}</h3>
            <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>{answer}</p>
        </div>
    );
}
