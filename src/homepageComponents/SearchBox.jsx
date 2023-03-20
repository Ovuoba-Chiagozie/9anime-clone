import React from 'react'
import filter from "../assets/filter.svg"
import uptip from "../assets/uptip.svg"
import downtip from "../assets/downtip.svg"
import entertip  from "../assets/entertip.svg"
import escapetip from '../assets/escapetip.svg'
import SuggestionDropdown from "./SuggestionDropdown"
import searchShortcut from "../assets/search-shortcut.svg"

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

    let releaseDropdown = () => {

        showClear()
        let searchBoxDrop = document.querySelector('.searchbox--dropdown')
        let searchBoxContainer = document.querySelector('.searchbox--container')
        searchBoxDrop.classList.add('drop')
        searchBoxContainer.classList.add('border')
        hideSeacrhDisplay()

    }

    let showClear = () => {

        let ClearBtn = document.querySelector('.clearbtn')
        let formImg = document.querySelector('.form--img')
        ClearBtn.classList.add('showclear')
        formImg.classList.add('showclear')

    }

    let hideSeacrhDisplay = () => {
        let ClearBtn = document.querySelector('.clearbtn')
        let formImg = document.querySelector('.form--img')
        let searchBoxContainer = document.querySelector('.searchbox--container')
        let searchBoxDrop = document.querySelector('.searchbox--dropdown')
        document.addEventListener('click', (event) => {
        let outsideclick = !searchBoxContainer.contains(event.target)
       if (outsideclick) {

        searchBoxDrop.classList.remove('drop')
        // searchBoxContainer.classList.remove('border')
        ClearBtn.classList.remove('showclear')
        formImg.classList.remove('showclear')

       }
        }) 
        console.log('something is wrong')  
    }
   
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
            onFocus = {releaseDropdown}
             />
             <img className='form--img' src={searchShortcut} alt="" />
            <span className='clearbtn'>Clear</span>
        </form>
        </div>
        <div className='searchbox--dropdown'>
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
        </div>
    )
}

export default SearchBox