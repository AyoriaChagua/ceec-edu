import { createContext, useContext, useEffect, useState, useMemo } from "react";
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { loginService } from "../services/auth.service";
import jwtDecode from "jwt-decode";
import { GetDataService } from "../services/profile.service";
import { TOKEN_KEY } from "../config/authConfig";
import { AuthProps, AuthState } from "../types/AuthContext";
import { handleErrors } from "../utils/errorHandling";
import { UserProfile } from "../types/payload/response/UserProfileResponse";
import { io } from "socket.io-client";
import { Platform } from "react-native";


const AuthContext = createContext<AuthProps>({});
const server_url = Platform.OS === 'ios' ?
'http://localhost:4100' :
'http://192.168.0.11:4100';
const socket = io(server_url)

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }: any) => {

    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const [authState, setAuthState] = useState<AuthState>({
        token: null,
        authenticated: null
    });

    const [userData, setUserData] = useState<UserProfile | null>(null)

    useEffect(() => {
        const loadToken = async () => {
            try {
                const token = await SecureStore.getItemAsync(TOKEN_KEY);
                if (token) {
                    socket.emit('login', { token });
                    const decodedToken: { exp: number, iat: number, id: number } = jwtDecode(token);
                    const expirationDate = new Date(decodedToken.exp * 1000);
                    const currentDate = new Date();
                    if (currentDate > expirationDate) {
                        await SecureStore.deleteItemAsync(TOKEN_KEY);
                        setAuthState({
                            token: null,
                            authenticated: false
                        });
                    }
                    axios.defaults.headers.common['Authorization'] = `${token}`
                    setAuthState({
                        token: token,
                        authenticated: true
                    });
                    const userProfile = await GetDataService();
                    if (userProfile) {
                        setUserData(userProfile)
                    }
                }
            } catch (error) {
                setErrorMessage(`[${error}]`)
            }
        }
        loadToken();
    }, [])


    useEffect(() => {
        handleErrors(errorMessage);
    }, [errorMessage]);

    const login = async (email: string, password: string) => {
        try {
            const result = await loginService({ email, password })
            if (result.code === 401) {
                return result
            } else if (result.token) {
                socket.emit('login', { token: result.token });
                await SecureStore.setItemAsync(TOKEN_KEY, result.token)
                axios.defaults.headers.common['Authorization'] = `${result.token}`
                setAuthState({
                    token: result.token,
                    authenticated: true
                })
                const userProfile = await GetDataService();
                if (userProfile) {
                    setUserData(userProfile)
                }
            }
            return result;
        } catch (error) {
            return { error: true, msg: (error as any).response.data.msg }
        }
    }

    const logout = async () => {
        await SecureStore.deleteItemAsync(TOKEN_KEY);
        axios.defaults.headers.common['Authorization'] = '';
        setAuthState({
            token: null,
            authenticated: false
        });
        socket.emit('logout');
        setUserData(null)
    }

    const value = useMemo(() => {
        return {
            onLogin: login,
            onLogout: logout,
            authState,
            errorMessage,
            userData
        };
    }, [login, logout, authState, errorMessage, userData]);
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

//separate functions 