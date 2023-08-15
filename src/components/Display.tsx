import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../assets/styles'
import DisplayItem from './DisplayItem';
import { TeamProps } from './RegisterTeam';
import Dashboard from './Dashboard';

export default function Display({ navigation, route }: any) {
    const teams = route.params.teams as TeamProps[];
    const setTeams = route.params.setTeams as (newTeams: TeamProps[]) => void;

    return (
        <View style={styles.container}>
            <Text style={[styles.title, styles.textColor]}>Match current: {teams[0].matchCurrent.name}</Text>
            <View style={styles.boxTeams}>
                {teams.map((item, key) => <DisplayItem {...item} key={key} />)}
            </View>
            <Dashboard teams={teams} setTeams={setTeams} />
        </View>
    )
}