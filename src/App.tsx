import { useState } from 'react';
import ApplicationForm from './components/ApplicationForm';
import ApplicationList from './components/ApplicationList';
import FilterBar from './components/FilterBar';
import type { Application, Status } from './types';

function App() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [filter, setFilter] = useState<Status | 'All'>('All');

  function addApplication(app: Application) {
    setApplications((prev) => [app, ...prev]);
  }

  function handleDelete(id: string) {
    setApplications((prev) => prev.filter((app) => app.id !== id));
  }

  function handleStatusChange(id: string, status: Status) {
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status } : app))
    );
  }

  const visibleApps =
    filter === 'All'
      ? applications
      : applications.filter((app) => app.status === filter);

  return (
    <main className="container">
      <h1>Job Tracker</h1>
      <ApplicationForm onAdd={addApplication} />
      <h2>My applications ({applications.length})</h2>
      <FilterBar value={filter} onChange={setFilter} />
      <ApplicationList
        applications={visibleApps}
        onDelete={handleDelete}
        onStatusChange={handleStatusChange}
      />
    </main>
  );
}

export default App;