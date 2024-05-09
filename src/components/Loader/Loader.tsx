import css from "./Loader.module.css";
import { Hourglass } from "react-loader-spinner";
import { FC } from "react";

const Loader: FC = () => {
  return (
    <div className={css.Loader}>
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#6b4b4b', '#b17a7a']}
      />
    </div>
  );
}

export default Loader;