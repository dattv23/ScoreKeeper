import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import styles from '../assets/styles'
import DashboardItem from './DashboardItem';
import { TeamProps } from './RegisterTeam';

type DashboardProps = {
    listTeam: TeamProps[];
    setListTeam: (newlistTeam: TeamProps[]) => void;
}

export default function Dashboard({ listTeam, setListTeam }: DashboardProps) {


    return (
        <View style={styles.dashboard}>
            <Text style={[styles.title, styles.textColor]}>Dashboard</Text>
            <View>
                {listTeam.map((item, key) => <DashboardItem key={key} item={item} listTeam={listTeam} setListTeam={setListTeam} />)}
            </View>
        </View >
    )
}