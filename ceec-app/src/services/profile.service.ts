import axios from "axios";
import { Platform } from "react-native";

import jwtDecode from "jwt-decode";
import * as SecureStore from 'expo-secure-store';
import {  UserProfile } from "../types/payload/response/UserProfileResponse";

export const GetDataService = async (): Promise<UserProfile  | null> => {
    const USER_API_BASE_URL = Platform.OS === 'ios' ?
        'http://localhost:4500/profiles/alldata' :
        'http://192.168.0.11:4500/profiles/alldata';

    const TOKEN_KEY = process.env.EXPO_PUBLIC_JWT_KEY ?? "my-jwt"
    const token = await SecureStore.getItemAsync(TOKEN_KEY);
    try {
        if (token) {
            const decodedToken: { exp: number, iat: number, id: number } = jwtDecode(token);
            const configObject = {
                method: 'GET',
                url: `${USER_API_BASE_URL}/${decodedToken.id}`
            }
            const userProfile = await axios<UserProfile>(configObject)
            return userProfile.data;
        }
        return null
    } catch (error) {
        console.error(error);
        throw error
    }
}

