export interface Login {
    email: string;
    password: string;
}

export interface Signup extends Login {
    password_repeat: string;
}