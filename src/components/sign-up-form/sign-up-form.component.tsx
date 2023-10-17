import { useState } from 'react';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = event => {
        const { name, value } = event.target;
        console.log(event.target.name, event.target.value);
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={() => {}}>
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
