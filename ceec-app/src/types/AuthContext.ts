import { UserProfile } from "./payload/response/UserProfileResponse";

export interface AuthState {
    token: string | null;
    authenticated: boolean | null;
}


export interface AuthProps {
    authState?: AuthState
    onLogin?: (email: string, password: string) => Promise<any>;
    onLogout?: () => Promise<any>;
    errorMessage?: string | null;
    userData?: UserProfile | null;
}