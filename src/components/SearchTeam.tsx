import { View, Text, TextInput, TouchableHighlight, Image } from 'react-native'
import React, { useState } from 'react'
import styles from '../assets/styles'
import { useFetch } from '../hook/useFetch';
import { TeamProps } from './RegisterTeam';

export default function SearchTeam() {
    const [input, setInput] = useState("");
    const [isFound, setIsFound] = useState(false);
    const [team, setTeam] = useState<TeamProps>();

    const data = useFetch<TeamProps[]>("https://64d389ff67b2662bf3dc63e4.mockapi.io/keeper/teams");

    const search = (name: string) => {
        if (data === undefined) return;
        const result = data.filter((item) => item.name === name);
        if (result.length != 0) {
            setIsFound(true);
            setTeam(result[0]);
        }
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder='Enter the name of team to find' onChangeText={(val) => setInput(val)}></TextInput>
            <TouchableHighlight onPress={() => search(input)}>
                <View style={[styles.button]}>
                    <Text>Find</Text>
                </View>
            </TouchableHighlight>
            {isFound ? (
                <View style={[styles.box, { padding: 8 }]}>
                    <Text>{team?.name}</Text>
                    <Image testID='team-avatar' source={{ uri: team?.avatar }} style={{ width: 150, height: 150 }}></Image>
                    <Text>Number of wins: {team?.numberOfWins}</Text>
                    <Text>Score current: {team?.scoreCurrent}</Text>
                    <Text>Match current: {team?.matchCurrent.name}</Text>
                </View>
            ) : <Text>Can't find the team to look for</Text>}
        </View>
    )
}