import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({
    providedIn:'root'
})
export class AuthService {
    
    constructor( private http: HttpClient) {}

    signUp(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDHwtK7d01P4NtLKXLDTuc-nfFknma18lg', {email, password, returnSecureToken: true});
    }

    login(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDHwtK7d01P4NtLKXLDTuc-nfFknma18lg', {email, password, returnSecureToken: true});
    }
}