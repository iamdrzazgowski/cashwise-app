export interface SignUpFormValues {
    fullName: string;
    email: string;
    password: string;
    passwordConfirm?: string;
}

export interface LoginFormValues {
    email: string;
    password: string;
}
