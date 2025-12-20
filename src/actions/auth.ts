'use server';

import { auth } from '@/lib/auth';

interface SignupData {
    fullName: string;
    email: string;
    password: string;
}

export async function signUpAction(data: SignupData) {
    // const data = {
    //     name: formData.get('fullName')?.toString(),
    //     email: formData.get('email')?.toString(),
    //     password: formData.get('password')?.toString(),
    // };

    if (!data.email || !data.password || !data.fullName) {
        throw new Error('Imię, email i hasło są wymagane');
    }

    const res = await auth.api.signUpEmail({
        body: {
            name: data.fullName,
            email: data.email,
            password: data.password,
        },
    });

    if (!res.token) {
        throw new Error(
            'Błąd rejestracji: Nie udało się zarejestrować użytkownika'
        );
    }

    return {
        success: true,
    };
}

interface LoginData {
    email: string;
    password: string;
}

export async function loginAction(data: LoginData) {
    // const data = {
    //     email: formData.get('email')?.toString(),
    //     password: formData.get('password')?.toString(),
    // };

    if (!data.email || !data.password) {
        throw new Error('Email i hasło są wymagane');
    }

    const res = await auth.api.signInEmail({
        body: { email: data.email, password: data.password },
    });

    if (!res.token) {
        throw new Error('Błąd logowania: niepoprawny email lub hasło');
    }

    return {
        success: true,
    };
}

export async function socialLoginAction() {}
