import { useState } from 'react';
import ApplicationForm from './components/ApplicationForm';
import ApplicationList from './components/ApplicationList';
import type { Application, Status } from './types';

function App() {
  const [applications, setApplications] = useState<Application[]>([]);

  function addApplication(app: Application) {
    setApplications((prev) => [app, ...prev]);
  }

  function handleDelete(id: string){
   setApplications((prev) => prev.filter((app) => app.id !== id ));
  }

  function handleStatusChange(id: string, status : Status) {
    setApplications((prev) => prev.map((app) => app.id === id ? {...app, status} : app))
  }

  return (
    <main className="container">
      <h1>Job Tracker</h1>
      <ApplicationForm onAdd={addApplication} />
      <h2>My applications ({applications.length})</h2>
      <ApplicationList applications={applications} onDelete={handleDelete} onStatusChange={handleStatusChange}/>
    </main>
  );
}

export default App;