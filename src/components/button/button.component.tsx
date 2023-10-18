import './button.styles.scss';

const BUTTON_STYLES = {
    google: 'button-google',
    inverted: 'button-inverted'
};

const Button = ({ children, buttonType, ...props }) => (
    <button
        className={`button-container ${BUTTON_STYLES[buttonType]}`}
        {...props}
    >
        {children}
    </button>
);

export default Button;
