import { useState } from 'react';
import {
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebaase/firebase.utils';
import Button, { BUTTON_STYLES } from '../button/button.component';
import FormInput from '../form-input/form-input.component';

import { ButtonPair, SignInContainer } from './sign-in-form.styles';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/invalid-login-credentials') {
        alert('Invalid login credentials');
      }

      console.error('user login failed!', error);
    }
  };

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your E-Mail and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          required
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          required
          name="password"
          value={password}
        />
        <ButtonPair>
          <Button type="submit">Sign In </Button>
          <Button
            type="button"
            buttonType={BUTTON_STYLES.google}
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </Button>
        </ButtonPair>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
