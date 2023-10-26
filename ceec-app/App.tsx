//import { Button } from 'react-native';
import { AuthProvider, useAuth } from './src/context/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import { Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/(auth)/student/Home';
import Login from './src/screens/(public)/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
}

export const Layout = () => {
  const { authState, onLogout } = useAuth();
  console.log(process.env.EXPO_PUBLIC_JWT_SECRET)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authState?.authenticated ? (
          <Stack.Screen name='Home'
            component={Home}
            options={{
              headerRight: () => <Button onPress={ onLogout } title='Sign out' />
            }} 
            />
        ) : (
          <Stack.Screen
            name='Login'
            component={Login} 
            options={{
              headerShown: false
            }}/>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
