import { StyleSheet, Text, TouchableOpacity, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'

interface ButtonGradientProps {
    onPress?: () => void;
}

function ButtonGradient({ onPress }: ButtonGradientProps) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <LinearGradient
                start={{ x: 0.1, y: 0.1 }}
                colors={["#7076FA", "#4951FF", "#2B32CE"]}
                style={styles.gradient}
            >
                <Pressable onPress={onPress}>
                    <Text style={styles.text}>Acceder</Text>
                </Pressable>
            </LinearGradient>
        </TouchableOpacity>
    )
}
export default ButtonGradient

const styles = StyleSheet.create({
    text: {
        fontSize: 23,
        color: 'white',
    },
    button: {
        height: 50,
        width: "65%",
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderColor: "#000",
        shadowColor: "#000",
        shadowOpacity: 0.99,
        elevation: 5,
    }
})