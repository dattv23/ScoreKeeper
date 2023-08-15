import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../assets/styles';
import { TeamProps } from './RegisterTeam';

export default function DisplayItem({ name, avatar, scoreCurrent, id }: TeamProps) {
    return (
        <View key={id} style={styles.box}>
            <View style={[styles.box, styles.boxName]}>
                <Text style={{ color: '#000', fontSize: 18 }}>{name}</Text>
            </View>
            <Image source={{ uri: avatar }} style={{ width: 50, height: 50 }}></Image>
            <View style={[styles.box, styles.boxScore]}>
                <Text style={{ color: '#000', fontSize: 32 }}>{scoreCurrent}</Text>
            </View>
        </View>
    );
}