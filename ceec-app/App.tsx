//import { Button } from 'react-native';
import { AuthProvider, useAuth } from './src/context/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-paper';
import { colors } from './src/constants/color';
import { CustomDrawer } from './src/components';

import { Login } from './src/screens/(public)';
import { AdminUsers, AdminCourses, AdminDashboard, ListComponents } from './src/screens/(auth)/admin';
import { StudentHome } from './src/screens/(auth)/student';


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
  let fullName = 'Actualiza tu perfil'
  if (userData?.Profile) fullName = `${userData.Profile.first_name} ${userData.Profile.last_name}`
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} email={userData?.email} fullname={fullName} onLogout={onLogout} />}
        screenOptions={{
          drawerActiveBackgroundColor: colors.primary,
          drawerActiveTintColor: colors.white,
          headerTitleStyle: { fontSize: 18 }
        }}>
        {authState?.authenticated ? (
          <>
            {userData?.role_id === 1 ? (
              <>
                <Drawer.Screen
                  name='Home'
                  component={StudentHome} />
              </>
            ) :
              <>
                <Drawer.Screen
                  name='Tablero'
                  component={AdminDashboard}
                  options={{
                    drawerIcon: ({ color }) => (
                      <Icon source="collage" color={color} size={22} />
                    ),
                  }} />
                <Drawer.Screen
                  name='Cursos'
                  component={AdminCourses}
                  options={{
                    drawerIcon: ({ color }) => (
                      <Icon source="book-open" color={color} size={22} />
                    ),
                  }} />
                <Drawer.Screen
                  name='Usuarios'
                  component={AdminUsers}
                  options={{
                    drawerIcon: ({ color }) => (
                      <Icon source="account-group" color={color} size={22} />
                    ),
                  }} />
                <Drawer.Screen
                  name='Mi cuenta'
                  component={AdminUsers}
                  options={{
                    drawerIcon: ({ color }) => (
                      <Icon source="account-circle" color={color} size={22} />
                    ),
                  }} />
                <Drawer.Screen
                  name='Componentes'
                  component={ListComponents}
                  options={{
                    drawerIcon: ({ color }) => (
                      <Icon source="table-multiple" color={color} size={22} />
                    ),
                  }} />
              </>}
          </>
        ) : (
          <Drawer.Screen
            name='Login'
            component={Login}
            options={{
              headerShown: false,
            }} />
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
