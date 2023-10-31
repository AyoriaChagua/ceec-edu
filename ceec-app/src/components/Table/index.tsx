import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table as TableBase, Row } from 'react-native-reanimated-table';
import { colors } from '../../constants/color';

interface Props {
    tableHead?: string[];
    tableData?: Array<Array<number | string>>;
    widthArr?:  number[];
}

const Table = ({tableHead, tableData, widthArr}: Props) => {
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
            <ScrollView horizontal={true}>
                <View>
                    <TableBase borderStyle={styles.border}>
                        <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.textHeader} />
                    </TableBase>
                    <ScrollView style={styles.dataWrapper}>
                        <TableBase borderStyle={styles.border}>
                            {
                                state.tableData.map((rowData, index) => (
                                    <Row
                                        key={index}
                                        data={rowData}
                                        widthArr={state.widthArr}
                                        textStyle={styles.text}
                                        style={styles.row}
                                    />
                                ))
                            }
                        </TableBase>
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 30,
        backgroundColor: '#fff'
    },
    border: {
        borderWidth: 0,
        borderColor: "transparent"
    },
    header: {
        height: 50,
        backgroundColor: '#5E65FF'
    },
    text: {
        textAlign: 'center',
        fontWeight: '100',
        height: "auto",
    },
    textHeader: {
        color: colors.white,
        fontWeight: "bold",
        textAlign: "center"
    },
    dataWrapper: {
        marginTop: -1
    },
    row:{
        height: 40
    }
});

export default Table;
