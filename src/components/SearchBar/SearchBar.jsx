import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

function SearchBar({ onSearch }) {
    const handleSubmit = (evt) => {
        const form = evt.target;
        evt.preventDefault();
        const inputValue = form.elements.inputValue.value.toLowerCase();
        if (form.elements.inputValue.value.trim() === "") {
            const notify = () => toast.error("Please enter search query!");
            return notify();
        }
        onSearch(inputValue);
        form.reset();
    };

  return (
    <header className={css.header}>
          <form className={css.searchForm} onSubmit={handleSubmit}>
              <Toaster position="top-center"/>
              <button className={css.searchBtn} type="submit">Search</button>              
              <input className={css.searchInput} type="text" name="inputValue" placeholder="Search photos and images" />
          </form>
          </header>
    );
}

export default SearchBar;