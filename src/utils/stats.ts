import type { Application } from '../types';

function percent(count: number, total: number) {
        return total === 0 ? 0 : Math.round((count / total) * 100);
    }

export function getStats(applications: Application[]) {
    const total = applications.length;
    const interviews = applications.filter(
        (app) => app.status === 'Interviewing' || app.status === 'Offer').length;

    const offers = applications.filter(
        (app) => app.status === 'Offer').length;


  return {
    total,
    interviews,
    interviewRate: percent(interviews, total),
    offerRate: percent(offers, total),
  };
}