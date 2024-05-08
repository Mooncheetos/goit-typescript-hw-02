import css from "./ErrorMessage.module.css";

function ErrorMessage() {
    return (
        <div className={css.errorMessage}>
            Sorry, something went wrong! Try reloading the page!
        </div>
    );
}

export default ErrorMessage;