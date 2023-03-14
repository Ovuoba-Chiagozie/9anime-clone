import HomeInput from "./HomeInput"
import SearchBox from "./SearchBox"
const Top = () => {

    return (
        <div>
        <div className="top-logo"></div>
        <ul className="navbar">
            <li><a href="#">Home</a></li>
            <li><a href="#">Trending</a></li>
            <li><a href="#">New Release</a></li>
            <li><a href="#8">Recent Update</a></li>
        </ul>
        {/* <HomeInput /> */}
        <SearchBox />
        </div>

    )
}

export default Top