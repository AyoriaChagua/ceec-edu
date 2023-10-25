import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAuth } from '../../context/AuthContext';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginRequest } from '../../types/payload/request/AuthRequest';
import { Form, Input, Title } from '../../components';
import { SafeAreaView } from 'react-native-safe-area-context';

function Login() {
  const { control, handleSubmit } = useForm<LoginRequest>();
  const { onLogin } = useAuth()

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

  return (
    <SafeAreaView style={styles.area}>
      <ImageBackground source={require('../../assets/bg-login.png')} resizeMode='cover' style={styles.imageBg}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image source={require('../../assets/ceec-blue.png')} style={styles.image} />
            <Title text='BIENVENIDO!' />
          </View>
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
          <View>
            <Text >¿Olvidaste tu contraseña?</Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>

  );
}

export default Login

const styles = StyleSheet.create({
  area: {
    flex: 1,
    
  },
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header:{
    justifyContent: "center",
    alignItems: "center",
  },
  imageBg: {
    flex: 1,
    resizeMode: 'cover',
  },
  image: {
    width: 150,
    height: 70,
  }
})