import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import styles from '../assets/styles';
import { TeamProps } from './RegisterTeam';

type ItemProps = {
    item: TeamProps;
    listTeam: TeamProps[];
    setListTeam: (newList: TeamProps[]) => void;
}

export default function DashboardItem({ item, listTeam, setListTeam }: ItemProps) {
    const handleSubScore = (name: string, scoreCurrent: number) => {
        const updatedTeams = listTeam.map((team) =>
            team.name === name ? { ...team, scoreCurrent: scoreCurrent - 1 } : team
        );
        setListTeam(updatedTeams);
    }

    const handleAddScore = (name: string, scoreCurrent: number) => {
        const updatedTeams = listTeam.map((team) =>
            team.name === name ? { ...team, scoreCurrent: scoreCurrent + 1 } : team
        );
        setListTeam(updatedTeams);
    }

    return (
        <View key={item.id} style={styles.dashboardItem}>
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