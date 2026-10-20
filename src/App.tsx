import { useState } from 'react';
import ApplicationForm from './components/ApplicationForm';
import ApplicationList from './components/ApplicationList';
import type { Application } from './types';

function App() {
  const [applications, setApplications] = useState<Application[]>([]);

  function addApplication(app: Application) {
    setApplications((prev) => [app, ...prev]);
  }

  return (
    <main className="container">
      <h1>Job Tracker</h1>
      <ApplicationForm onAdd={addApplication} />
      <h2>My applications ({applications.length})</h2>
      <ApplicationList applications={applications} />
    </main>
  );
}

export default App;