import searchShortcut from "../assets/search-shortcut.svg"

let HomeInput = () => {

    return (
    <div className="searchbar">
        <form action="">
        <i class="fa-solid fa-magnifying-glass search-icon"></i>
            <input type="text" className="homeinput" placeholder="Search anime..." />
            <img src={searchShortcut} alt="" />
        </form>
    </div>

    )
}

export default HomeInput