import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../components/Home';
import Match from '../components/Match';
import SearchTeam from '../components/SearchTeam';
import Display from '../components/Display';
import RegisterTeam from '../components/RegisterTeam';
import { MainStackParamList } from './type';

const Stack = createNativeStackNavigator<MainStackParamList>();

export default function MyStack() {
    return (
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#322653' } }}>
            <Stack.Screen options={{ title: 'Score Keeper', headerTitleStyle: { color: '#FFD2D7' }, headerTitleAlign: 'center' }} name="Keeper" component={Home} />
            <Stack.Screen options={{ headerTitleStyle: { color: '#FFD2D7' }, headerTitleAlign: 'center' }} name="Match" component={Match} />
            <Stack.Screen options={{ headerTitleStyle: { color: '#FFD2D7' }, headerTitleAlign: 'center' }} name="Register" component={RegisterTeam} />
            <Stack.Screen options={{ title: 'Search Team', headerTitleStyle: { color: '#FFD2D7' }, headerTitleAlign: 'center' }} name="Search" component={SearchTeam} />
            <Stack.Screen options={{ headerTitleStyle: { color: '#FFD2D7' }, headerTitleAlign: 'center' }} name="Display" component={Display} />
        </Stack.Navigator>
    )
}