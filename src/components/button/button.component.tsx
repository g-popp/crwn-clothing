import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from './button.styles';

export const BUTTON_STYLES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};

const getButton = (buttonStyle = BUTTON_STYLES.base) =>
  ({
    [BUTTON_STYLES.base]: BaseButton,
    [BUTTON_STYLES.google]: GoogleSignInButton,
    [BUTTON_STYLES.inverted]: InvertedButton,
  }[buttonStyle]);

interface buttonProps {
  children: string;
  buttonType?: keyof typeof BUTTON_STYLES;
  [key: string]: any;
}

const Button = ({ children, buttonType, ...props }: buttonProps) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...props}>{children}</CustomButton>;
};

export default Button;
