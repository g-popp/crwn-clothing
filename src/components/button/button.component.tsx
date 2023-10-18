import './button.styles.scss';

const BUTTON_STYLES = {
    google: 'google-sign-in',
    inverted: 'inverted'
};

interface buttonProps {
    children: string;
    buttonType?: keyof typeof BUTTON_STYLES;
    [key: string]: any;
}

const Button = ({ children, buttonType, ...props }: buttonProps) => (
    <button
        className={`button-container ${
            buttonType && BUTTON_STYLES[buttonType]
        }`}
        {...props}
    >
        {children}
    </button>
);

export default Button;
