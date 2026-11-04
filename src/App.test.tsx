import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event'; 

describe('App', () => {
    it('shows the page title', () => {
        render(<App />);
        const title = screen.getByRole('heading', { level: 1, name: 'Job Tracker'});
        expect(title).toBeInTheDocument();
    });

    it('adds a new application to the table', async () => {
        const user = userEvent.setup();
        render(<App />);

        // empty state is shown before adding anything
        expect(screen.getByText(/no applications yet/i)).toBeInTheDocument();

        // add an application
        await user.type(screen.getByPlaceholderText('Company *'), 'Atlassian');
        await user.type(screen.getByPlaceholderText('Role *'), 'Frontend Developer');
        await user.click(screen.getByRole('button', { name: 'Add application' }));

        // the new application appears in the table
        expect(screen.getByText('Atlassian')).toBeInTheDocument();
        expect(screen.getByText('Frontend Developer')).toBeInTheDocument();

        // empty state is gone
        expect(screen.queryByText(/no applications yet/i)).not.toBeInTheDocument();
    });

});