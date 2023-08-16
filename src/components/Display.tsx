import { View, Text, TouchableHighlight, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from '../assets/styles'
import DisplayItem from './DisplayItem';
import { TeamProps } from './RegisterTeam';
import Dashboard from './Dashboard';
import { DisplayScreenProps } from '../navigator/type';

export default function Display({ navigation, route }: DisplayScreenProps) {
    const teams = route.params.teams;
    const [listTeam, setListTeam] = useState<TeamProps[]>(teams);

    const findTheWinners = () => {
        let Winners = listTeam[0];
        for (let index = 1; index < listTeam.length; index++) {
            if (listTeam[index].scoreCurrent > Winners.scoreCurrent) {
                Winners = listTeam[index];
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
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Text style={[styles.title, styles.textColor]}>Match current: {teams[0].matchCurrent.name}</Text>
                <View style={styles.boxTeams}>
                    {listTeam.map((item, key) => <DisplayItem {...item} key={key} />)}
                </View>
                <Dashboard listTeam={listTeam} setListTeam={setListTeam} />
                <TouchableHighlight style={[styles.button, { margin: 8, width: 100 }]} onPress={() => {
                    handleFinishMatch();
                    navigation.navigate('Keeper')
                }}>
                    <View>
                        <Text>Finish</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </ScrollView>
    )
}