import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './TabNavigation';

export default function Navigator() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}