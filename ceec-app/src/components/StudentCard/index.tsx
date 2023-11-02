import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Card, Avatar } from 'react-native-paper'

export default function index() {
    return (
        <View style={styles.container}>
            <Card.Title
                title="Edison Sanchez"
                subtitle="Atención al cliente"
                leftStyle={styles.left}
                left={(props) => <Avatar.Icon {...props} icon="account" style={styles.image} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    left: {
        width: 75,
        height: 75
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 100
    }
})