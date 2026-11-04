import type { Application } from '../types';
import { getStats } from '../utils/stats';

interface Props {
    applications: Application[];
}

export default function StatsPanel({ applications }: Props) {
    
    const { total, interviews, interviewRate, offerRate } = getStats(applications);

    return (
        <section className="stats" aria-label="Application statistics">
            <div className="stat-card">
                <span className="stat-value">{total}</span>
                <span className="stat-label">Total</span>
            </div>
            <div className="stat-card">
                <span className="stat-value">{interviews}</span>
                <span className="stat-label">Interviews</span>
            </div>
            <div className="stat-card">
                <span className="stat-value">{interviewRate}%</span>
                <span className="stat-label">Interview rate</span>
            </div>
            <div className="stat-card">
                <span className="stat-value">{offerRate}%</span>
                <span className="stat-label">Offer rate</span>
            </div>
        </section>
    );
}