import React from 'react'
import HomeInput from "./HomeInput"
import SearchBox from "./SearchBox"
const Top = () => {

    let [animeData, setAnimeData] = React.useState({
        animeName:"",
        
    })
    let handleChange = (event) => {

        let {name, value} = event.target
        setAnimeData(prevState => {
            return {...prevState, [name]: value}
    
        })
    }

    let clearInput = () => {

        setAnimeData(prevState => {
            return {...prevState, animeName: ""}
    
        })
    }

    return (
        <div>
        <div className="top-logo"></div>
        <ul className="navbar">
            <li><a href="#">Home</a></li>
            <li><a href="#">Trending</a></li>
            <li><a href="#">New Release</a></li>
            <li><a href="#8">Recent Update</a></li>
        </ul>
         <HomeInput clearInput = {clearInput} /> 
        <SearchBox
         handleChange = {handleChange}
         animeName = {animeData.animeName} 
        />
        </div>

    )
}

export default Top