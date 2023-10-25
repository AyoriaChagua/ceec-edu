export interface LoginResponse {
    code: number; 
    msg?: string; 
    token?: string; 
    possibleAttemps?: number
  }