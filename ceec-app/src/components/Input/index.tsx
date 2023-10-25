import { Text,  View, StyleSheet } from 'react-native'
import { Controller, Control } from 'react-hook-form'
import { LoginRequest } from '../../types/payload/request/AuthRequest'
import { colors } from '../../constants/color'
import { TextInput } from 'react-native-paper';

interface Props {
    control: Control<LoginRequest>
    name: "email" | "password"
    rules?: {}
    placeholder?: string
    securetextEntry: boolean
}

export default function Input({
    control,
    name,
    rules,
    placeholder,
    securetextEntry
}: Props) {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <View style={styles.container}>
                    <TextInput
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        label={placeholder}
                        secureTextEntry={securetextEntry} 
                        textColor={colors.white}
                        mode="outlined"
                        style={styles.input}
                        outlineStyle={styles.outline}
                        />
                    {error && (
                        <Text style={styles.span}>{error.message ?? 'Error'}</Text>
                    )}
                </View>
            )}
        />
    )
}

const styles = StyleSheet.create({
    container:{
    },
    span: {
        color: colors.red,
        fontWeight: 'bold'
    },
    input:{
        color: colors.red,
        width: "100%",
        backgroundColor: colors.primary,
    },
    outline: {
        borderRadius: 25,
        backgroundColor: 'rgba(0, 0, 0, 0.26)',

    }
})