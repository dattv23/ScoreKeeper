import React from 'react';

import { fireEvent, render, screen } from "@testing-library/react-native";

import { it, jest, expect } from '@jest/globals';
import SearchTeam from '../src/components/SearchTeam';

it('renders correctly after in/decrement action', () => {
    render(<SearchTeam />);

    expect(screen.getByText(/Search team/i)).toBeDefined();
})
