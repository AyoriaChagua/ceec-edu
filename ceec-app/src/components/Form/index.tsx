import { SubmitHandler } from 'react-hook-form'
import { View, Pressable, Text, StyleSheet } from 'react-native';
import { ReactNode } from 'react';
import { LoginRequest } from '../../types/payload/request/AuthRequest';
import { colors } from '../../constants/color';

type Props = {
    onSubmit?: SubmitHandler<LoginRequest>;
    handleSubmit: any;
    children: ReactNode
}

export default function Form({ onSubmit, children, handleSubmit }: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                {children}
            </View>
            <View style={styles.button}>
                <Pressable
                    onPress={handleSubmit(onSubmit)} >
                    <Text style={styles.textButton}>Acceder</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "80%",
        alignItems: "center"
    },
    form: {
        marginBottom: 2,
        backgroundColor: colors.primary,
        padding: 20,
        borderRadius: 20,
        alignItems: "center",
        width: "100%"
    },
    text: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
    },
    button: {
        backgroundColor: colors.secondary,
        paddingHorizontal: 60,
        paddingVertical: 20,
        borderRadius: 20,
        width: "70%",
        alignItems: "center",
    },
    textButton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    }

})

