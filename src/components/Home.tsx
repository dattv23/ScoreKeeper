import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import styles from '../assets/styles'

export default function Home({ navigation }: any) {
    return (
        <View style={styles.container}>
            <TouchableHighlight
                style={styles.marginBottom8}
                onPress={() => {
                    navigation.navigate('Match');
                }}
            >
                <View style={[styles.button]}>
                    <Text>New match</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {
                navigation.navigate('Search');
            }}>
                <View style={[styles.button]}>
                    <Text>Search team</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}