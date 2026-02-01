import '../styles/App.scss';

export function Privacy() {
  return (
    <div className="app-container" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
        <h1 style={{ marginBottom: '2rem' }}>Privacy Policy</h1>
        <div style={{ color: '#94a3b8', lineHeight: '1.8' }}>
            <p style={{ marginBottom: '1.5rem' }}>Last updated: February 1, 2026</p>
            
            <h2 style={{ color: '#f8fafc', marginBottom: '1rem', marginTop: '2rem' }}>1. Introduction</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                VCPR ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how our VCPR mobile application uses your information.
            </p>

            <h2 style={{ color: '#f8fafc', marginBottom: '1rem', marginTop: '2rem' }}>2. Data Collection</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                **We do not collect personal data on external servers.**
                <br /><br />
                The VCPR app processes Bluetooth data from connected sensors in real-time. This processing happens entirely locally on your device.
            </p>

            <h2 style={{ color: '#f8fafc', marginBottom: '1rem', marginTop: '2rem' }}>3. Permissions</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                We require **Bluetooth** and **Location** permissions solely to discover and connect to your CPR training devices. Location data is never recorded, stored, or shared.
            </p>
        </div>
      </div>
    </div>
  );
}

export function Terms() {
    return (
      <div className="app-container" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <h1 style={{ marginBottom: '2rem' }}>Terms of Service</h1>
          <div style={{ color: '#94a3b8', lineHeight: '1.8' }}>
              <p style={{ marginBottom: '1.5rem' }}>Last updated: February 1, 2026</p>
              
              <h2 style={{ color: '#f8fafc', marginBottom: '1rem', marginTop: '2rem' }}>1. Usage License</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                  VCPR gives you a personal, non-exclusive license to use the app for training and educational purposes.
              </p>
  
              <h2 style={{ color: '#f8fafc', marginBottom: '1rem', marginTop: '2rem' }}>2. Disclaimer</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                  This app is a training tool. It should not be used as the sole diagnostic tool during actual medical emergencies. Always follow certified medical protocols.
              </p>
          </div>
        </div>
      </div>
    );
  }

  export function Deletion() {
    return (
      <div className="app-container" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <h1 style={{ marginBottom: '2rem' }}>Account Deletion</h1>
          <div style={{ color: '#94a3b8', lineHeight: '1.8' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                  Since VCPR does not create online accounts or store data on cloud servers, there is no "account" to delete.
              </p>
              
              <h2 style={{ color: '#f8fafc', marginBottom: '1rem', marginTop: '2rem' }}>How to clear your data</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                  To remove all local session history and settings:
              </p>
              <ol style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                  <li>Open **Android Settings**</li>
                  <li>Go to **Apps** &gt; **VCPR**</li>
                  <li>Select **Storage & Cache**</li>
                  <li>Tap **Clear Storage**</li>
              </ol>
              <p>
                  Uninstalling the app will also permanently remove all locally stored data.
              </p>
          </div>
        </div>
      </div>
    );
  }
