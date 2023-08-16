import 'react-native';
import React from 'react';
import { it, describe, expect } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react-native';
import SearchTeam from '../src/components/SearchTeam';

describe('SearchTeam', () => {
    it('should render correctly', () => {
        const { getByPlaceholderText, getByText } = render(<SearchTeam />);

        const input = getByPlaceholderText('Enter the name of team to find');
        const findButton = getByText('Find');

        expect(input).toBeDefined();
        expect(findButton).toBeDefined();
    });

    it('should display "Can\'t find the team to look for" message initially', () => {
        const { getByText } = render(<SearchTeam />);

        const message = getByText("Can't find the team to look for");

        expect(message).toBeDefined();
    });

    // it('should display team information when found', () => {
    //     const mockTeam = {
    //         name: 'Mock Team',
    //         avatar: 'https://mockavatar.com',
    //         numberOfWins: 5,
    //         scoreCurrent: 100,
    //         matchCurrent: { name: 'Mock Match' },
    //     };
    //     const { getByPlaceholderText, getByText, getByTestId } = render(<SearchTeam />);

    //     const input = getByPlaceholderText('Enter the name of team to find');
    //     const findButton = getByText('Find');

    //     fireEvent.changeText(input, 'Mock Team');
    //     fireEvent.press(findButton);

    //     // Use getByTestId to access elements with testID set
    //     const teamName = getByText('mockTeam.name');
    //     const teamAvatar = getByTestId('team-avatar');
    //     const numberOfWins = getByText(`Number of wins: ${mockTeam.numberOfWins}`);
    //     const scoreCurrent = getByText(`Score current: ${mockTeam.scoreCurrent}`);
    //     const matchCurrent = getByText(`Match current: ${mockTeam.matchCurrent.name}`);

    //     expect(teamName).toBeDefined();
    //     expect(teamAvatar).toBeDefined();
    //     expect(numberOfWins).toBeDefined();
    //     expect(scoreCurrent).toBeDefined();
    //     expect(matchCurrent).toBeDefined();
    // });

    it('should display "Can\'t find the team to look for" message if not found', () => {
        const { getByPlaceholderText, getByText } = render(<SearchTeam />);

        const input = getByPlaceholderText('Enter the name of team to find');
        const findButton = getByText('Find');

        fireEvent.changeText(input, 'Nonexistent Team');
        fireEvent.press(findButton);

        const message = getByText("Can't find the team to look for");

        expect(message).toBeDefined();
    });
});

