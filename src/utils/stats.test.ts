import { describe, it, expect } from 'vitest';
import { getStats } from './stats';
import type { Application, Status } from '../types';


function makeApp(status: Status): Application {
  return {
    id: crypto.randomUUID(),
    company: 'Test',
    role: 'Dev',
    location: '',
    status,
    dateApplied: '2026-11-01',
  };
}

describe('getStats', () => {
  it('returns zeros when there are no applications', () => {
    const result = getStats([]);

    expect(result.total).toBe(0);
    expect(result.interviewRate).toBe(0);
    expect(result.offerRate).toBe(0);
  });

  it('calculates rates for a mix of statuses', () => {
    const apps = [
      makeApp('Applied'),
      makeApp('Applied'),
      makeApp('Interviewing'),
      makeApp('Offer'),
    ];
    const result = getStats(apps);

    expect(result.total).toBe(4);
    expect(result.interviews).toBe(2);
    expect(result.interviewRate).toBe(50);
    expect(result.offerRate).toBe(25);


  });

  it('returns 100% offer rate when every application is an offer', () => {
    const apps = [
        makeApp('Offer'),
        makeApp('Offer'),
        makeApp('Offer'),
    ];

    const result = getStats(apps);
    expect(result.interviewRate).toBe(100);
    expect(result.offerRate).toBe(100);

  });

  it('rounds rates to the nearest whole number', () => {
    const apps = [
      makeApp('Applied'),
      makeApp('Interviewing'),
      makeApp('Offer'),
    ];

    const result = getStats(apps);
    expect(result.interviewRate).toBe(67); // 2 / 3 = 66.67% → 67
    expect(result.offerRate).toBe(33);     // 1 / 3 = 33.33% → 33
  });
});