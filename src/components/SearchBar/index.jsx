import "./index.css";
import SearchLogo from "../../assets/img/Loupe.svg";

const SearchBar = () => {
    return (
        <>

            <form action="submit">
                <input className="input-search-bar" type="text" placeholder="City..." />
                <button className="button-search-bar" type="button">
                    <img className="logo-search" src={SearchLogo} alt="search" />
                </button>
            </form>

        </>
    )
}

export default SearchBar;