import { useState } from 'react';
import {
    createAuthUserWithEmail,
    createUserDocumentFromAuth
} from '../../utils/firebaase/firebase.utils';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmail(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user. Email already in use.');
            } else {
                console.error('user creation failed!', error.code);
            }
        }
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input
                    type='text'
                    onChange={handleChange}
                    required
                    name='displayName'
                    value={displayName}
                />

                <label>Email</label>
                <input
                    type='email'
                    onChange={handleChange}
                    required
                    name='email'
                    value={email}
                />

                <label>Password</label>
                <input
                    type='password'
                    onChange={handleChange}
                    required
                    name='password'
                    value={password}
                />

                <label>Confirm Password</label>
                <input
                    type='password'
                    onChange={handleChange}
                    required
                    name='confirmPassword'
                    value={confirmPassword}
                />

                <button type='submit'>Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpForm;
