import type { Application } from '../types';

interface Props {
  applications: Application[];
  onDelete: (id: string) => void;
}

export default function ApplicationList({ applications, onDelete }: Props) {
  if (applications.length === 0) {
    return <p className="empty">No applications yet. Add your first one above!</p>;
  }

  return (
    <div className="table-wrap">
      <table className="app-table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Role</th>
            <th>Location</th>
            <th>Date applied</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id}>
              <td>{app.company}</td>
              <td>{app.role}</td>
              <td>{app.location || 'Location N/A'}</td>
              <td>{app.dateApplied}</td>
              <td>
                <span className={`badge badge-${app.status.toLowerCase()}`}>{app.status}</span>
              </td>
              <td>
                <button type="button" onClick={() => onDelete(app.id)} className="btn-delete">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}