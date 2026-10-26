import { useState } from 'react';
import ApplicationForm from './components/ApplicationForm';
import ApplicationList from './components/ApplicationList';
import FilterBar from './components/FilterBar';
import SearchBar from './components/SearchBar';
import type { Application, Status } from './types';

function App() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [filter, setFilter] = useState<Status | 'All'>('All');
  const [query, setQuery] = useState('');

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

 
  const q = query.trim().toLowerCase();

  const visibleApps = applications.filter((app) => {
    const matchesStatus = filter === 'All' || app.status === filter;

    const matchesQuery = app.company.toLowerCase().includes(q) || app.role.toLowerCase().includes(q);

    return matchesStatus && matchesQuery;
  });
  

  const emptyMessage = applications.length === 0 ? 'No applications yet. Add your first one above!' : 'No applications match your filters.';

  return (
    <main className="container">
      <h1>Job Tracker</h1>
      <ApplicationForm onAdd={addApplication} />
      <h2>My applications ({applications.length})</h2>
      <div className="toolbar">
        <FilterBar value={filter} onChange={setFilter} />
        <SearchBar value={query} onChange={setQuery}/>
      </div>
      <ApplicationList
        applications={visibleApps}
        onDelete={handleDelete}
        onStatusChange={handleStatusChange}
        emptyMessage={emptyMessage}
      />
    </main>
  );
}

export default App;