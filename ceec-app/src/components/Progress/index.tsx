import { StyleSheet, View } from 'react-native'
import React from 'react'
import CircularProgress from 'react-native-circular-progress-indicator'

function Progress() {
    return (
        <View style={styles.container}>
            <CircularProgress
                value={90}
                inActiveStrokeColor={'#4951FF'}
                activeStrokeColor='#2A61F0'
                inActiveStrokeOpacity={0.2}
                progressValueColor={'#000'}
                valueSuffix={'%'}
                
            />
        </View>
    )
}
//onAnimationComplete={() => { alert('Al 90%') }}
export default Progress

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        height: "100%",
        padding: 15,
        alignItems: "center"
    }
})