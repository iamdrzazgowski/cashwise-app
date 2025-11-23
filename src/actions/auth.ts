export async function signUpAction(formData: FormData) {
    const data = {
        name: formData.get('fullName'),
        email: formData.get('email'),
        password: formData.get('password'),
    };

    console.log(data);
}

export async function loginAction(formData: FormData) {
    const data = {
        email: formData.get('email'),
        password: formData.get('password'),
    };

    console.log(data);
}

export async function socialLoginAction() {}
