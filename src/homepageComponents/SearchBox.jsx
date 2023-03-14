import filter from "../assets/filter.svg"
import uptip from "../assets/uptip.svg"
import downtip from "../assets/downtip.svg"
import entertip  from "../assets/entertip.svg"
import escapetip from '../assets/escapetip.svg'
import SuggestionDropdown from "./SuggestionDropdown"

let SearchBox = () => {

    return (
        <div className="searchbox--container">
            <div className="searchbar">
        <form action="">
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input type="text" className="homeinput" placeholder="Search anime..." />
            <span>Clear</span>
        </form>
        </div>
        <div className="filter--section">
            <div className="filter--section--anime">Anime</div>
            <div className="filter--div">
                <img src={filter} alt="" />
                <span>Filter</span>
            </div>
        </div>
        <SuggestionDropdown />
        <div className="searchbox--footer">
            <div className="searchbox--footer--navtip">
            <span>
                <img src={uptip} alt="" />
                <img src={downtip} alt="" />
                <span>to navigate</span>
            </span>
            <span>
                <img src={entertip} alt="" />
                <span>to select</span>
            </span>
            <span>
                <img src={escapetip} alt="" />
                <span>to exit</span>
            </span>
            </div>
        </div>
        </div>
    )
}

export default SearchBox