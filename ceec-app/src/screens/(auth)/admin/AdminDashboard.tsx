import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function AdminDashboard() {
    return (
        <View style={styles.container}>
            <Text>AdminDashboard</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})