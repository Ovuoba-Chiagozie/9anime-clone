import React from 'react'
import HomeInput from "./HomeInput"
import SearchBox from "./SearchBox"
import Facebook from '../assets/facebook-icon.svg'
import Twitter from '../assets/Twiiter-icon.svg'
import Telegram from '../assets/Telegram-icon.svg'
import Messenger from '../assets/messenger-icon.svg'
import Pinterest from '../assets/Pinterest-icon.svg'
import Addthis from '../assets/Add-this-icon.svg'
const Top = () => {

    // let [animeData, setAnimeData] = React.useState({
    //     animeName:"",
        
    // })
    // let handleChange = (event) => {

    //     let searchinput = document.querySelector('.homeinput2')

    //     let {name, value} = event.target
    //     setAnimeData(prevState => {
    //         return {...prevState, [name]: value}
    
    //     })
    //     if(searchinput.value == ""){

    //         let footer = document.querySelector('.searchbox--footer')
    //         footer.classList.remove('display--footer')
    //         // console.log("footer")
    
    //       }
    // }

    // let clearInput = () => {

    //     setAnimeData(prevState => {
    //         return {...prevState, animeName: ""}
    
    //     })

    //     console.log('this',animeData.animeName)
    // }

    return (
        <div className='top--container'>
        <div className="top-logo"></div>
        <ul className="navbar">
            <li><a href="#">Home</a></li>
            <li><a href="#">Trending</a></li>
            <li><a href="#">New Release</a></li>
            <li><a href="#8">Recent Update</a></li>
        </ul>
         {/* <HomeInput clearInput = {clearInput} />  */}
        <SearchBox
        //  handleChange = {handleChange}
        //  animeName = {animeData.animeName}
        //  clearInput = {clearInput} 
        />
        <div className='go--to-homepage--btn'>
            <a href="">Go to homepage  <i className="fa-solid fa-circle-arrow-right"></i></a>
        </div>
        <div className='share--btn--wrapper'>
            <div className='facebook'>
                <a className='social-links' href="">
                <img className='social-icons' src={Facebook} alt="" />
                <span className='social'>Facebook</span>
                </a>
            </div>
            <div className='twitter'>
                <a className='social-links' href="">
                <img className='social-icons' src={Twitter} alt="" />
                <span className='social'>Twitter</span>
                </a>
            </div>
            <div className='telegram'>
                <a className='social-links' href="">
                <img className='social-icons' src={Telegram} alt="" />
                <span className='social'>Telegram</span>
                </a>
            </div>
            <div className='messenger'>
                <a className='social-links' href="">
                <img className='social-icons' src={Messenger} alt="" />
                <span className='social'>Messenger</span>
                </a>
            </div>
            <div className='pinterest'>
                <a className='social-links' href="">
                <img className='social-icons' src={Pinterest} alt="" />
                <span className='social'>Pinterest</span>
                </a>
            </div>
            <div className='add--this'>
                <a className='social-links' href="">
                <img className='social-icons' src={Addthis} alt="" />
                <span className='social'>More</span>
                <span className='social--count' >530K</span>
                </a>
                </div>
        </div>
        </div>

    )
}

export default Top