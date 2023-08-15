import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import styles from '../assets/styles';
import { TeamProps } from './RegisterTeam';

type ItemProps = {
    item: TeamProps;
    teams: TeamProps[];
    setTeams: (newTeams: TeamProps[]) => void;
}

export default function DashboardItem({ item, teams, setTeams }: ItemProps) {
    const handleSubScore = (name: string, scoreCurrent: number) => {
        const updatedTeams = teams.map((team) =>
            team.name === name ? { ...team, scoreCurrent: scoreCurrent - 1 } : team
        );
        setTeams(updatedTeams);
    }

    const handleAddScore = (name: string, scoreCurrent: number) => {
        const updatedTeams = teams.map((team) =>
            team.name === name ? { ...team, scoreCurrent: scoreCurrent + 1 } : team
        );
        setTeams(updatedTeams);
    }

    return (
        <View key={item.id} style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 16
        }}>
            <Text>{item.name}</Text>
            <TouchableHighlight onPress={() => {
                handleSubScore(item.name, item.scoreCurrent);
            }}>
                <View style={[styles.button, { width: 50, height: 50 }]}>
                    <Text>-</Text>
                </View>
            </TouchableHighlight>
            <Text>{item.scoreCurrent}</Text>
            <TouchableHighlight onPress={() => {
                handleAddScore(item.name, item.scoreCurrent);
            }}>
                <View style={[styles.button, { width: 50, height: 50 }]}>
                    <Text>+</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
}