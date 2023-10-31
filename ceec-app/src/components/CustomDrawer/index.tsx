import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { colors } from '../../constants/color'
import { Icon } from 'react-native-paper'
import { useAuth } from '../../context/AuthContext'


export default function CustomDrawer(props: any) {
    const { authState } = useAuth();

    return (
        <View style={styles.container}>
            <DrawerContentScrollView
                contentContainerStyle={{ backgroundColor: colors.primary }}
                {...props}>
                {authState?.authenticated ?
                    <View style={styles.header}>
                        <Image source={require('../../assets/profile.jpg')} style={styles.imageProfile} />
                        <Text style={styles.textTitle}>{props.fullname}</Text>
                        <Text style={styles.text}>{props.email}</Text>
                    </View>
                    :
                    <View style={styles.header}>
                        <Image source={require('../../assets/ceec-white.png')} style={styles.image} />
                        <Text style={styles.text}>{props.email}</Text>
                    </View>
                }
                <View style={styles.body}>
                    <DrawerItemList
                        {...props}
                    />
                </View>
            </DrawerContentScrollView>
            {authState?.authenticated &&
                <View style={styles.footer}>
                    <TouchableOpacity
                        onPress={props.onLogout}>
                        <View style={styles.button}>
                            <Icon source={'logout'} size={22} />
                            <Text style={{ marginLeft: 30 }}>Sign Out</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 12 }}>v. 1.0.0</Text>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: 20,
    },
    imageProfile: {
        height: 80,
        width: 80,
        borderRadius: 50,
        marginBottom: 10
    },
    image: {
        height: 80,
        width: 190,
        marginBottom: 10
    },
    textTitle: {
        color: colors.white,
        fontSize: 22,
        fontWeight: 'bold'
    },
    text: {
        color: colors.white,
        fontSize: 13
    },
    body: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: 10
    },
    footer: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: colors.gray
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    }
})