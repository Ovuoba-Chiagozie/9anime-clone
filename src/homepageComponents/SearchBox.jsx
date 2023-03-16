import React from 'react'
import filter from "../assets/filter.svg"
import uptip from "../assets/uptip.svg"
import downtip from "../assets/downtip.svg"
import entertip  from "../assets/entertip.svg"
import escapetip from '../assets/escapetip.svg'
import SuggestionDropdown from "./SuggestionDropdown"

let SearchBox = (prop) => {

    // let [animeData, setAnimeData] = React.useState({
    //     animeName:"",
        
    // })

    // document.addEventListener('click', (event) => {

    //     let searchBoxContainer = document.querySelector('.searchbox--container')
    //     let homeinput = document.querySelector('.searchbar')
    //     let outsideclick = !searchBoxContainer.contains(event.target)
    //     console.log(event.target)
    //    if (outsideclick) {
    //     let searchbox = document.querySelector('.searchbox--container')
    //     searchbox.classList.remove('display--search')
    //     homeinput.classList.remove('display--search')
    //     console.log('something is wrong')
    //    }
    // })
      
    // let handleChange = (event) => {

    //     let {name, value} = event.target
    //     setAnimeData(prevState => {
    //         return {...prevState, [name]: value}
    
    //     })
    // }
   
 console.log(prop.animeName)
    return (
        <div className="searchbox--container">
            <div className="Main--searchbar">
        <form action="">
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input 
            type="text" 
            className="homeinput2" 
            placeholder="Search anime..."
            name="animeName"
            value={prop.animeName}
            onChange={prop.handleChange}
             />
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
       {prop.animeName.length > 1 && <SuggestionDropdown anime={prop.animeName}/>}
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
            <div className='view--all'>
                <a href="">View all 
                <i className="fas fa-long-arrow-right"></i>
                </a>
            </div>
        </div>
        </div>
    )
}

export default SearchBox