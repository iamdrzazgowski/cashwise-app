export type SignUpFormValues = {
    fullName: string;
    email: string;
    password: string;
    passwordConfirm?: string;
};

export type LoginFormValues = {
    email: string;
    password: string;
};
