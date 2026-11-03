import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
    it('shows the page title', () => {
        render(<App />);
        const title = screen.getByRole('heading', { level: 1, name: 'Job Tracker'});
        expect(title).toBeInTheDocument();
    });
});