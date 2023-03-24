import { SearchBar, SearchBox } from "../homepageComponents/SearchBox";
import watch2gether from '../assets/watch2gether.svg'
import random from '../assets/random.svg'
import Facebook from '../assets/facebook-icon.svg'
import Twitter from '../assets/Twiiter-icon.svg'
import Addthis from '../assets/Add-this-icon.svg'
import {Watch2gether,Random} from "./svgfiles";
import React from "react";


const Header = () => {

  let [result, setResult] = React.useState(true)
  let [svgHover, setSvgResult] = React.useState('#aaaaaa')

  let changesvgcolor = () => {

    setSvgResult('#a885da')

  }

  let revertcolor = () => {

    setSvgResult('#aaaaaa')
  }

  React.useEffect(() => {
    
    let hamburger = document.querySelector('.hamburger')
    let menuList = document.querySelector('.menu--list')
    hamburger.addEventListener('click', () => {
    result ? hamburger.classList.add("active") : hamburger.classList.remove("active")
    result ? menuList.classList.add("active") : menuList.classList.remove("active")
    console.log(result)

  })


},[result])
  let hamburgerMenu = () => {
    setResult(prevState => !prevState )
  }

  return (
    <header>
      <div className="header--container">
        <div className="menu--searchbar">
        <div className="hamburger--menu">
            <ul className="menu--list">
              <li className="list--item"><a href="">HOME</a></li>
              <li className="list--item" ><a href="">GENRE</a></li>
              <li className="list--item"><a href="">TYPES</a></li>
              <li className="list--item"><a href="">NEWEST</a></li>
              <li className="list--item"><a href="">UPDATED</a></li>
              <li className="list--item"><a href="">ONGOING</a></li>
              <li className="list--item"><a href="">ADDED</a></li>
              <li className="list--item"><a href="">REQUEST</a></li>
            </ul>
          </div>
          <div className="hamburger" onClick={hamburgerMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="logo"><a href=""></a></div>
            <SearchBox />
        </div>
        <div className="btn--wrapper" >
            <div className="btn--container">
                <div className="btns">
                <a href=""><Watch2gether color={svgHover} change={changesvgcolor} revert={revertcolor}  /><span>Watch2gether</span></a>
                <a href=""><Random color={svgHover} change={changesvgcolor} revert={revertcolor} /><span>Random</span></a>
                <a href="" className="read--manga"><i className="fa-solid fa-book"></i><span>Read Manga</span></a>
                </div>
                <div>
                    <div className="lang">
                        <span className="english--switch">EN</span>
                        <span className="japanese--switch">JP</span>
                    </div>
                </div>
                <div className="social--wrapper">
                <div className='facebook'>
                <a className='social-links' href="">
                <img className='social-icons' src={Facebook} alt="" />
                </a>
            </div>
            <div className='twitter'>
                <a className='social-links' href="">
                <img className='social-icons' src={Twitter} alt="" />
                </a>
            </div>
            <div className='add--this'>
                <a className='social-links' href="">
                <img className='social-icons' src={Addthis} alt="" />
                <span className='social--count' >534K</span>
                </a>
            </div>
                </div>
            </div>
            <div>
              <div className="sign-in --wrapper">
                <a href="" className="sign-in--btn">
                  <span>Sign in</span>
                <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
