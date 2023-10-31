//import { Button } from 'react-native';
import { AuthProvider, useAuth } from './src/context/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import { View, Image, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import HomeStudent from './src/screens/(auth)/student/StudentHome';
import Login from './src/screens/(public)/Login';
import ListComponents from './src/screens/(auth)/admin/ListComponents';
import { Divider, Icon } from 'react-native-paper';
import { Button } from './src/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import AdminHome from './src/screens/(auth)/admin/AdminHome';


export default function App() {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
}

const Drawer = createDrawerNavigator();

export const Layout = () => {
  const { authState, onLogout, userData } = useAuth();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => {
          return (
            <SafeAreaView style={styles.container}>
              <View style={styles.drawerHeader}>
                <Image source={require('./src/assets/ceec-blue.png')} style={styles.image} />
                <Divider style={styles.divider} />
              </View>
              <View style={styles.drawerContent}>
                <DrawerItemList {...props} />
              </View>
              <View style={styles.drawerFooter}>
                <Divider />
                {authState?.authenticated && <Button onPress={onLogout} text='Cerrar sesión' />}
              </View>
            </SafeAreaView>
          )
        }}
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#fff",
            width: 250
          },
          headerStyle: {
            backgroundColor: "#f451e"
          },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          drawerActiveTintColor: "blue",
          drawerLabelStyle: {
            color: "#111"
          }

        }}>
        {authState?.authenticated ? (
          <Drawer.Group>
            {userData?.role_id === 1 ? (
              <>
                <Drawer.Screen
                  name='Home'
                  component={HomeStudent}
                  options={{
                    drawerIcon: () => (<Icon source={"home"} size={30} />),
                  }} />
              </>
            ) : <>
              <Drawer.Screen
                name='Home'
                component={AdminHome}
                options={{
                  drawerIcon: () => (<Icon source={"home"} size={30} />),
                }} />
              <Drawer.Screen
                name='Componentes'
                component={ListComponents}
                options={{
                  drawerIcon: () => (<Icon source={"layers"} size={30} />),
                }} />
            </>}
          </Drawer.Group>
        ) : (
          <Drawer.Screen
            name='Login'
            component={Login}
            options={{
              headerShown: false
            }} />
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    height: 200,
    width: "100%",
    justifyContent: "center",
    overflow: 'hidden',
    alignItems: 'center',
    padding: 10,
    rowGap: 20
  },
  drawerContent: {
    flex: 1
  },
  image: {
    width: "80%",
    height: "40%"
  },
  drawerFooter: {
    padding: 10,
    rowGap: 20
  },
  divider: {
    width: "100%"
  }
})