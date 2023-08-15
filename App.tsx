import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/components/Home';
import Match from './src/components/Match';
import TeamRegistration from './src/components/RegisterTeam';
import SearchTeam from './src/components/SearchTeam';
import Display from './src/components/Display';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#322653' } }}>
        <Stack.Screen options={{ headerTitleStyle: { color: '#FFD2D7' }, headerTitleAlign: 'center' }} name="Keeper" component={Home} />
        <Stack.Screen options={{ headerTitleStyle: { color: '#FFD2D7' }, headerTitleAlign: 'center' }} name="Match" component={Match} />
        <Stack.Screen options={{ headerTitleStyle: { color: '#FFD2D7' }, headerTitleAlign: 'center' }} name="Register" component={TeamRegistration} />
        <Stack.Screen options={{ headerTitleStyle: { color: '#FFD2D7' }, headerTitleAlign: 'center' }} name="Search" component={SearchTeam} />
        <Stack.Screen options={{ headerTitleStyle: { color: '#FFD2D7' }, headerTitleAlign: 'center' }} name="Display" component={Display} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}