import { View, Text, TextInput, TouchableHighlight } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../assets/styles';
import { MatchProps } from './Match';
import { TeamProps } from './RegisterTeam';

type RegisterFormProps = {
    order: number;
    matchCurrent: MatchProps;
    teams: TeamProps[];
    setTeams: (newTeams: TeamProps[]) => void;
}

export default function RegisterForm({ order, matchCurrent, teams, setTeams }: RegisterFormProps) {
    const [name, setName] = useState<string>();
    const [avatar, setAvatar] = useState<string>();
    const [isLoading, setIsLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const createTeam = () => {
        fetch("https://64d389ff67b2662bf3dc63e4.mockapi.io/keeper/teams", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                avatar: avatar,
                matchCurrent: matchCurrent,
                scoreCurrent: 0,
                numberOfWins: 0,
            }),
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log(JSON.stringify(responseData));
                setTeams([...teams, responseData]);
                setIsLoading(false);
            })
    }

    return (
        <View style={styles.formRegister}>
            <TextInput style={styles.input} placeholder='Name of the team' onChangeText={(val) => setName(val)}></TextInput>
            <TextInput style={styles.input} placeholder='Url avatar of the team' onChangeText={(val) => setAvatar(val)}></TextInput>
            <TouchableHighlight
                onPress={() => {
                    setIsLoading(true);
                    createTeam();
                    setDisabled(true);
                }}
                disabled={disabled}
            >
                <View style={styles.button}>
                    {isLoading ? <Text>Adding...</Text> : <Text>Add Team {order + 1}</Text>}
                </View>
            </TouchableHighlight>
        </View >
    );
}