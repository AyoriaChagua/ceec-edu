import { Image, StyleSheet,  View, Alert } from 'react-native'
import React from 'react'
import { useAuth } from '../../context/AuthContext';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginRequest } from '../../types/payload/request/AuthRequest';
import { Form, Input } from '../../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../constants/color';

function Login() {
  const { control, handleSubmit } = useForm<LoginRequest>();
  const { onLogin, errorMessage } = useAuth()

  const onLoginPressed: SubmitHandler<LoginRequest> = async data => {
    try {
      const dataForm = { email: data.email, password: data.password }
      const result = await onLogin!(dataForm.email, dataForm.password)
      if (result?.msg) {
        alert(`${result.msg} \n${result?.possibleAttemps ? "Te quedan " + result.possibleAttemps + " intentos" : ""}`)
        return
      }
    } catch (error) {
      alert('Oops')
    }
  }
  if(errorMessage){
    Alert.alert("Error en el servidor", errorMessage) 
  }

  return (
    <SafeAreaView style={styles.area}>
      <Image source={require('../../assets/header-login.png')} style={styles.image} />
      <View style={styles.content}>
        <Form handleSubmit={handleSubmit} onSubmit={onLoginPressed}>
          <Input
            control={control}
            name='email'
            rules={{ required: 'El email es obligatorio' }}
            securetextEntry={false}
            placeholder='Correo electrónico' />
          <Input
            control={control}
            name='password'
            rules={{
              required: {
                value: true,
                message: 'La contraseña es obligatoria'
              },
              // minLength: {
              //     value: 3,
              //     message:  'La longitud de la entrada es muy corta'
              // }, 
            }}
            securetextEntry={true}
            placeholder='Contraseña' />
        </Form>
      </View>
    </SafeAreaView>

  );
}

export default Login

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: colors.white
  },

  image: {
    width: 380, 
    height: 270,
    left: 0 
  },
  content: {
    flex: 1,
    alignItems: "center",
    padding: 10, 
  },
})