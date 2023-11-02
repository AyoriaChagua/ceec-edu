import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function AdminDashboard() {
    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Todos los cursos</Text>
            <Text style={styles.h3}>Tienes n cursos creados</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F3FF',
        padding: 20
    },
    h1: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    h3: {
        fontSize: 14,
        fontWeight: '100',
    }
})