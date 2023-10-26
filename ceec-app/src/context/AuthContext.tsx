import { createContext, useContext, useEffect, useState, useMemo } from "react";
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { loginService } from "../services/auth.service";
import jwtDecode from "jwt-decode";

interface AuthProps {
    authState?: { token: string | null; authenticated: boolean | null }
    onLogin?: (email: string, password: string) => Promise<any>;
    onLogout?: () => Promise<any>;
    errorMessage?: string | null
}

const TOKEN_KEY = process.env.EXPO_PUBLIC_JWT_KEY ?? "my-jwt"
const JWT_SECRET = process.env.EXPO_PUBLIC_JWT_SECRET ?? 'jwt-secret'

const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }: any) => {

    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const [authState, setAuthState] = useState<{
        token: string | null;
        authenticated: boolean | null;
    }>({
        token: null,
        authenticated: null
    });

    useEffect(() => {
        const loadToken = async () => {
            try {
                const token = await SecureStore.getItemAsync(TOKEN_KEY);
                if (token) {
                    const decodedToken: {exp: number, iat: number, id: number} = jwtDecode(token);
                    const expirationDate = new Date(decodedToken.exp * 1000);
                    const currentDate = new Date();
                    if (currentDate > expirationDate) {
                        await SecureStore.deleteItemAsync(TOKEN_KEY);
                        setAuthState({
                            token: null,
                            authenticated: false
                        });
                    } 
                    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
                    setAuthState({
                        token: token,
                        authenticated: true
                    });
                }
            } catch (error) {
                setErrorMessage(`[${error}]`)
            }
        }
        loadToken();
    }, [])


    useEffect(() => {
        if (errorMessage) {
            console.error(errorMessage);
        }
    }, [errorMessage]);

    const login = async (email: string, password: string) => {
        try {
            const result = await loginService({ email, password })
            if (result.code === 401) {
                return result
            } else if (result.token) {
                setAuthState({
                    token: result.token,
                    authenticated: true
                });
                await SecureStore.setItemAsync(TOKEN_KEY, result.token)
                axios.defaults.headers.common['Authorization'] = `Bearer ${result.token}`
                const updatedAutrhState = {
                    token: result.token,
                    authenticated: true
                }
                setAuthState(updatedAutrhState)
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
    }

    const value = useMemo(() => {
        return {
            onLogin: login,
            onLogout: logout,
            authState,
            errorMessage
        };
    }, [login, logout, authState, errorMessage]);
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}



//separate functions 