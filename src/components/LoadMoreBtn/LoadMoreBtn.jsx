import { Link } from "react-scroll";
import css from "./LoadMoreBtn.module.css";

const LoadMore = ({ loadMore }) => {
  return (
    <div>
      <Link
        to="load-more-button"
        spy={true}
        smooth={true}
        offset={950}
        duration={2000}
      >
        <button className={css.loadBtn} onClick={loadMore}>Load More</button>
      </Link>
    </div>
  );
};

export default LoadMore;