import { ScrollView, Text, TouchableHighlight, View } from 'react-native';
import React, { useState } from 'react';
import styles from '../assets/styles';
import { MatchProps } from './Match';
import RegisterForm from './RegisterForm';

export type TeamProps = {
    id: number;
    name: string;
    avatar: string;
    matchCurrent: MatchProps;
    scoreCurrent: number;
    numberOfWins: number;
}

export default function RegisterTeam({ navigation, route }: any) {
    const [teams, setTeams] = useState<TeamProps[]>([]);

    const items = [];
    for (let i = 0; i < route.params.matchCurrent?.numberOfTeams; i++) {
        items.push({ order: i, matchCurrent: route.params.matchCurrent, teams: teams, setTeams: setTeams });
    }

    return (
        <ScrollView style={styles.register}>
            {items.map((item, key) => <RegisterForm {...item} key={key} />)}
            <View style={styles.buttonContainer}>
                <TouchableHighlight onPress={() => {
                    navigation.navigate('Display', { teams: teams, setTeams: setTeams });
                }}>
                    <View style={[styles.button]}>
                        <Text style={[styles.textColor]}>Start</Text>
                    </View>
                </TouchableHighlight>
            </View>

        </ScrollView>
    )
}