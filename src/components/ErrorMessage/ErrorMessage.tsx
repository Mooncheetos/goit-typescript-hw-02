import css from "./ErrorMessage.module.css";
import { FC } from "react";

const ErrorMessage: FC = () => {
    return (
        <div className={css.errorMessage}>
            Sorry, something went wrong! Try reloading the page!
        </div>
    );
}

export default ErrorMessage;