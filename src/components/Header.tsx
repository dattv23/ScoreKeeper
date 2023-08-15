import { View, Text } from 'react-native'
import React from 'react'
import styles from '../assets/styles'

export default function () {
    return (
        <View>
            <Text style={[styles.heading, styles.textColor]}>Score Keeper</Text>
        </View>
    )
}