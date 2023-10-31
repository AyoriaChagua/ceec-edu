import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Table, Rating, Progress, StudentCard, Button } from '../../../components'

function ListComponents() {
    const state = {
        tableHead: ['Nombre', 'F. creación', 'Nro estudiantes', 'Duración'],
        tableData: [
            ['Recursos humanos', 'Feb 12, 2023', '3', '2 semanas'],
            ['Atención al cliente', 'Feb 12, 2023', '10', '2 semanas'],
        ],
        widthArr: [200, 100, 100, 100]
    };
    return (
        <View style={styles.container}>
            <Button text='test'/>
            <Table tableData={state.tableData} tableHead={state.tableHead} widthArr={state.widthArr}/>
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