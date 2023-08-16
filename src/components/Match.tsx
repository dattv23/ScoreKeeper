import { View, Text, TextInput, TouchableHighlight } from 'react-native'
import React, { useEffect, useState } from 'react'

import styles from '../assets/styles'
import { MatchScreenProps } from '../navigator/type';

export type MatchProps = {
    name: string;
    numberOfTeams: number;
}

export default function Match({ navigation }: MatchScreenProps) {
    const [name, setName] = useState<string>();
    const [numberOfTeams, setNumberOfTeams] = useState<number>();
    const [matchCurrent, setMatchCurrent] = useState<MatchProps>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (matchCurrent !== undefined) {
            setIsLoading(false);
            navigation.navigate('Register', { matchCurrent: matchCurrent });
        }
    }, [matchCurrent]);


    const createMatch = () => {
        fetch("https://64d389ff67b2662bf3dc63e4.mockapi.io/keeper/matchs", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                numberOfTeams: numberOfTeams
            }),
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log(JSON.stringify(responseData));
                setMatchCurrent(responseData as MatchProps);
            })
            .catch((err) => {
                console.error(err);
            })
    }

    return (
        <View style={[styles.container]}>
            <Text style={[styles.title, styles.textColor]}>Start a new match!</Text>
            <TextInput style={[styles.input, styles.textColor]} placeholder='Match name' onChangeText={(val) => setName(val)} />
            <TextInput style={[styles.input, styles.textColor]} placeholder='Number of participating teams' keyboardType='numeric' onChangeText={(val) => setNumberOfTeams(parseInt(val))} />
            <TouchableHighlight onPress={() => {
                setIsLoading(true);
                createMatch();
            }}>
                <View style={[styles.button]}>
                    <Text style={[styles.textColor]}>Start{isLoading && "ing ..."}</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}