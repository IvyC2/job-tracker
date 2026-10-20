import ApplicationForm from './components/ApplicationForm';
import type { Application } from './types';

function App() {
  function addApplication(app: Application) {
    console.log('New application:', app);
  }

  return (
    <main className="container">
      <h1>Job Tracker</h1>
      <ApplicationForm onAdd={addApplication} />
    </main>
  );
}

export default App;