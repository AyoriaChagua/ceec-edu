import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface Props {
    text: string
    onPress?: () => void;
}
export default function Button({ onPress, text }: Props) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 20,
        padding: 10,
        backgroundColor: 'transparent',
    },
    buttonText: {
        color: 'blue',
        textAlign: 'center',
    },
});