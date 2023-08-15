import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import styles from '../assets/styles'
import DashboardItem from './DashboardItem';
import { TeamProps } from './RegisterTeam';

type DashboardProps = {
    teams: TeamProps[];
    setTeams: (newTeams: TeamProps[]) => void;
}

export default function Dashboard({ teams, setTeams }: DashboardProps) {
    const findTheWinners = () => {
        let Winners = teams[0];
        for (let index = 1; index < teams.length; index++) {
            if (teams[index].scoreCurrent > Winners.scoreCurrent) {
                Winners = teams[index];
            }
        }
        return Winners;
    }

    const handleFinishMatch = () => {
        const Winners = findTheWinners();
        const url = "https://64d389ff67b2662bf3dc63e4.mockapi.io/keeper/teams/" + Winners.id;
        const updateWinners = { ...Winners, numberOfWins: Winners.numberOfWins + 1 };

        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateWinners),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((responseData) => {
                console.log(JSON.stringify(responseData));
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <View style={styles.dashboard}>
            <Text style={[styles.title, styles.textColor]}>Dashboard</Text>
            <View>
                {teams.map((item, key) => <DashboardItem key={key} item={item} teams={teams} setTeams={setTeams} />)}
            </View>
            <TouchableHighlight style={[styles.button, { margin: 8, width: 100 }]} onPress={() => {
                handleFinishMatch();
            }}>
                <View>
                    <Text>Finish</Text>
                </View>
            </TouchableHighlight>
        </View >
    )
}