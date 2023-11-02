import { Text, View, StyleSheet } from 'react-native'
import { Controller, Control } from 'react-hook-form'
import { LoginRequest } from '../../types/payload/request/AuthRequest'
import { colors } from '../../constants/color'
import { Icon, TextInput } from 'react-native-paper';


interface Props {
    control: Control<LoginRequest>
    name: "email" | "password"
    rules?: {}
    placeholder?: string
    securetextEntry: boolean,
    icon: string
}

export default function Input({
    control,
    name,
    rules,
    placeholder,
    securetextEntry,
    icon
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
                        mode="outlined"
                        outlineColor={colors.primary}
                        style={styles.input}
                        activeOutlineColor={colors.primary}
                        outlineStyle={styles.outline}
                        right={< TextInput.Icon icon={icon} />}
                       
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
    container: {
        marginVertical: 5
    },
    span: {
        color: colors.red,
        fontWeight: 'bold'
    },
    outline: {
        borderRadius: 50
    },
    input: {
        width: "100%",
    }
})