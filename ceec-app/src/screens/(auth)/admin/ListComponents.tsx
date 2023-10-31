import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Table, Rating, Progress, StudentCard, Button } from '../../../components'

function ListComponents() {
    
    return (
        <View style={styles.container}>
            <Button text='test'/>
            <Table />
            <Progress />
            <Rating  rating={3}/>
            <StudentCard />
        </View>
    )
}

export default ListComponents

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        height: "100%",
        padding: 15,
    }
})