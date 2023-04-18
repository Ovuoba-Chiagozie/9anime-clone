import React, {ChangeEvent} from 'react'
import filter from "../assets/filter.svg"
import uptip from "../assets/uptip.svg"
import downtip from "../assets/downtip.svg"
import entertip  from "../assets/entertip.svg"
import escapetip from '../assets/escapetip.svg'
import SuggestionDropdown from "./SuggestionDropdown"
import searchShortcut from "../assets/search-shortcut.svg"

interface Barsearch  {
    value: string,
    handleChange(event:ChangeEvent<HTMLInputElement>):void,
    Focus(): void,
}

let SearchBar = (prop: Barsearch) => {

    return (

        <div className="Main--searchbar">
    <form  className='searchbox--form' >
        <div className='form--container'>
        <button>
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </button>
        <input 
        type="text" 
        className="homeinput2" 
        placeholder="Search anime..."
        name="animeName"
        value={prop.value}
        onChange={prop.handleChange}
        onFocus = {prop.Focus}
         />
         <img className='form--img' src={searchShortcut} alt="" />
        <span className='clearbtn'>Clear</span>
        </div>
    </form>
    </div>

    )

}

let SearchBox = () => {

    type dataAnime = {
        animeName: string,
    }

    type Handlelements = HTMLElement | null

    let [animeData, setAnimeData] = React.useState<dataAnime>({
        animeName:"",
        
    })
    let handleChange = (event:ChangeEvent<HTMLInputElement>) => {

        let searchinput = document.querySelector('.homeinput2') as HTMLInputElement | null

        let {name, value} = event.target
        setAnimeData(prevState => {
            return {...prevState, [name]: value}
    
        })

        if (searchinput != null) {
        
        if(searchinput.value === ""){

            let footer = document.querySelector('.searchbox--footer') as Handlelements
            if (footer != null) {
            footer.classList.remove('display--footer')
            }
          }

          if (searchinput.value.length <= 1) {

            let viewAll = document.querySelector('.view--all') as Handlelements
            if (viewAll != null) {
            viewAll.classList.remove("display")
            }

          }

        }

        
    }

    let clearInput = () => {

        setAnimeData(prevState => {

            return {...prevState, animeName: ""}
    
        })

        console.log('this',animeData.animeName)
    }

    let releaseDropdown = () => {

        showClear()
        let searchBoxDrop = document.querySelector('.searchbox--dropdown') as Handlelements
        let searchBoxContainer = document.querySelector('.searchbox--container') as Handlelements
        let homeinput = document.querySelector('.homeinput2') as HTMLInputElement | null

        if (homeinput && searchBoxDrop && searchBoxContainer != null) {

        homeinput.classList.add('showclear')
        searchBoxDrop.classList.add('drop')
        searchBoxContainer.classList.add('border')

        }

        hideSeacrhDisplay()
       

    }

    let showClear = () => {

        let ClearBtn = document.querySelector('.clearbtn') as HTMLButtonElement | null
        let formImg = document.querySelector('.form--img') as HTMLImageElement | null
        let form = document.querySelector('.searchbox--form') as HTMLFormElement | null

        if (form && ClearBtn && formImg != null) {

        form.classList.add('showclear')
        ClearBtn.classList.add('showclear')
        formImg.classList.add('showclear')

        }

    }

    let hideSeacrhDisplay = () => {
        let ClearBtn = document.querySelector('.clearbtn') as HTMLButtonElement | null
        let formImg = document.querySelector('.form--img') as HTMLImageElement | null
        let form = document.querySelector('.searchbox--form') as HTMLFormElement | null
        let searchBoxContainer = document.querySelector('.searchbox--container') as HTMLDivElement | null
        let searchBoxDrop = document.querySelector('.searchbox--dropdown') as HTMLDivElement | null
        let searchinput = document.querySelector('.homeinput2') as HTMLInputElement | null
        
       
        
        document.addEventListener('click', (event:MouseEvent) => {
            
     if (searchBoxDrop && searchBoxContainer && ClearBtn && formImg && form && searchinput != null ) {
        let outsideclick: boolean = !searchBoxContainer.contains(event.target as Node)
       if (outsideclick) {

        searchBoxDrop.classList.remove('drop')
        ClearBtn.classList.remove('showclear')
        formImg.classList.remove('showclear')
        form.classList.remove('showclear')
        searchinput.classList.remove('showclear')
        console.log('idiot')
        clearInput()
        searchinput.value = animeData.animeName

       }}
        }) 
        console.log('something is wrong')  

   

    }
   
    return (
        <div className="searchbox--container">
            <SearchBar
                value={animeData.animeName}
                handleChange={handleChange}
                Focus = {releaseDropdown} 
            />
        <div className='searchbox--dropdown'>
        <div className="filter--section">
            <div className="filter--section--anime">Anime</div>
            <div className="filter--div">
                <img src={filter} alt="" />
                <span>Filter</span>
            </div>
        </div>
       {animeData.animeName.length > 1 && <SuggestionDropdown anime={animeData.animeName}/>  }
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

export {SearchBox, SearchBar}