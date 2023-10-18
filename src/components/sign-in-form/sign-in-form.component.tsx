import { useState } from 'react';
import {
    createUserDocumentFromAuth,
    signInUserWithEmailAndPassword,
    signInWithGooglePopup
} from '../../utils/firebaase/firebase.utils';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';

import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: ''
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            const { user } = await signInUserWithEmailAndPassword(
                email,
                password
            );
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/invalid-login-credentials') {
                alert('Invalid login credentials');
            }

            console.error('user login failed!', error);
        }
    };

    return (
        <div className='sign-in-container'>
            <h2>I already have an account</h2>
            <span>Sign in with your E-Mail and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    type='email'
                    onChange={handleChange}
                    required
                    name='email'
                    value={email}
                />
                <FormInput
                    label='Password'
                    type='password'
                    onChange={handleChange}
                    required
                    name='password'
                    value={password}
                />
                <div className='button-pair'>
                    <Button type='submit'>Sign In </Button>
                    <Button buttonType='google' onClick={logGoogleUser}>
                        Sign In With Google
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
