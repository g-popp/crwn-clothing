import { signInWithGooglePopup } from '../../utils/firebaase/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async () => {
        const res = await signInWithGooglePopup();
        console.log(res.user);
    };

    return (
        <div>
            <h1>SignIn</h1>
            <button onClick={logGoogleUser}>Sign In With Google</button>
        </div>
    );
};

export default SignIn;
