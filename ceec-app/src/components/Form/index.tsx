import { SubmitHandler } from 'react-hook-form'
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { ReactNode } from 'react';
import ButtonGradient from '../ButtonGradient';
import { LoginRequest } from '../../types/payload/request/AuthRequest';

type Props = {
    onSubmit?: SubmitHandler<LoginRequest>;
    handleSubmit: any;
    children: ReactNode
}

export default function Form({ onSubmit, children, handleSubmit }: Props) {
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={styles.inputs}>
                {children}
            </View>
            <ButtonGradient onPress={handleSubmit(onSubmit)} />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        width: "90%",
       
    },
    inputs: {
        width: "100%",
    }
})

