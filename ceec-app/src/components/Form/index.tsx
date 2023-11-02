import { SubmitHandler } from 'react-hook-form'
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { ReactNode } from 'react';
import ButtonGradient from '../ButtonGradient';
import { LoginRequest } from '../../types/payload/request/AuthRequest';
import { Divider } from '@rneui/themed';

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
            <View style={styles.button}>
                <ButtonGradient onPress={handleSubmit(onSubmit)} />
            </View>
            <Divider style={styles.divider} width={1}/>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 30,
        width: "90%",
    },
    inputs: {
        width: "100%",
        marginVertical: 25,

    },
    divider: {
        marginVertical: 30
    },
    button:{
        alignItems: "center",
        width: "100%"
    }
})

