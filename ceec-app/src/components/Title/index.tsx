import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../constants/color'

type Props = {
    text: string
}
export default function Title({ text }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      marginBottom: 2,
    },
    text: {
      fontSize: 35,
      fontWeight: 'bold',
      color: colors.primary,
    },
  })