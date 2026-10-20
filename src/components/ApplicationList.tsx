import type { Application } from '../types';

interface Props {
  applications: Application[];
}

export default function ApplicationList({ applications }: Props) {
  if (applications.length === 0) {
    return <p className="empty">No applications yet. Add your first one above!</p>;
  }

  return (
    <ul className="app-list">
      {applications.map((app) => (
        <li key={app.id} className="app-card">
          <div>
            <strong>{app.role}</strong> · {app.company}
            <div className="meta">
              {app.location || 'Location N/A'} · Applied {app.dateApplied}
            </div>
          </div>
          <span className={`badge badge-${app.status.toLowerCase()}`}>{app.status}</span>
        </li>
      ))}
    </ul>
  );
}