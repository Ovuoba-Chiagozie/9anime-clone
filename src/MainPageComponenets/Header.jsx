import { SearchBar, SearchBox } from "../homepageComponents/SearchBox";
import Language from "./Language";
import watch2gether from '../assets/watch2gether.svg'
import random from '../assets/random.svg'
import Facebook from '../assets/facebook-icon.svg'
import Twitter from '../assets/Twiiter-icon.svg'
import Addthis from '../assets/Add-this-icon.svg'
import {Watch2gether,Random} from "./svgfiles";
import React from "react";


const Header = () => {

  let [result, setResult] = React.useState(true)
  let [svgHover, setSvgResult] = React.useState({

    svgTogether: '#aaaaaa',
    svgRandom: '#aaaaaa'

  })
  let [lang, setLang] = React.useState(false)
  let [listpopup, setListPopup] = React.useState({

    type:false,
    genre:false

  })

  let togglelang = () => {

    setLang(prevState => !prevState)

  }

  let changeColor = () => {

    let watchSvg = document.querySelector('.togethericon--wrapper')
    let randomSvg = document.querySelector('.randomicon--wrapper')

    watchSvg.addEventListener('mouseenter',() => {

      setSvgResult(prevState => {

        return (
          {...prevState, svgTogether: '#a885da'}
        )
      })

      watchSvg.classList.add('active')

    } )

    randomSvg.addEventListener('mouseenter',() => {

      setSvgResult(prevState => {

        return (
          {...prevState, svgRandom: '#a885da'}
        )

      })

      randomSvg.classList.add('active')

    } )

  }

  let revertcolor = () => {

    let watchSvg = document.querySelector('.togethericon--wrapper')
    let randomSvg = document.querySelector('.randomicon--wrapper')

    watchSvg.addEventListener('mouseleave', () => {

      setSvgResult(prevState => {

        return (
          {...prevState,svgTogether:'#aaaaaa'}
        )

      })

      watchSvg.classList.remove('active')

    })

    randomSvg.addEventListener('mouseleave', () => {

      setSvgResult(prevState => {

        return (
          {...prevState,svgRandom:'#aaaaaa'}
        )

      })

      randomSvg.classList.remove('active')

    })

  }

  let toggleGenre = () => {

    let Genre = document.querySelector('.list--genre')
    let Type = document.querySelector('.list--type')

    Genre.addEventListener('click', () => {

      setListPopup(prevState => {

        return (
          {...!prevState, genre: !prevState.genre }
        )

      })
      console.log(listpopup.genre)
    })

    Type.addEventListener('click', () => {

      setListPopup(prevState => {

        return (
          {...!prevState, type: !prevState.type }
        )
       
      })
      console.log(listpopup.type)
    })
    

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

    let menuLists = document.querySelectorAll('.genre--list--items')
    menuLists.forEach(list => {

      list.addEventListener('click', () => {

        menuLists.forEach(menu => {
          menu.classList.remove('active')
        })

      })

    })

    setResult(prevState => !prevState )
  }

  return (
    <header>
      <div className="header--container">
        <div className="menu--searchbar">
        <div className="hamburger--menu">
            <ul className="menu--list">
              <li className="list--item"><a href="">HOME</a></li>
              <li className="list--item" >   
                <ul  className={`genre--list--items ${listpopup.genre ? 'active' : ""}`}> 
                <li><a href=""> <h3>Action</h3> </a></li> 
                <li><a href=""> <h3>Adventure</h3> </a></li> 
                <li><a href=""> <h3>Avant Garde</h3> </a></li>
                <li><a href=""> <h3>Boys Love</h3> </a></li>
                <li><a href=""> <h3>Comedy</h3> </a></li>
                <li><a href=""> <h3>Demons</h3> </a></li>
                <li><a href=""> <h3>Drama</h3> </a></li>
                <li><a href=""> <h3>Ecchi</h3> </a></li>
                <li><a href=""> <h3>Fantasy</h3> </a></li>
                <li><a href=""> <h3>Girls Love</h3> </a></li>
                <li><a href=""> <h3>Gourmet</h3> </a></li>
                <li><a href=""> <h3>Harem</h3> </a></li>
                <li><a href=""> <h3>Horror</h3> </a></li>
                <li><a href=""> <h3>Isekai</h3> </a></li>
                <li><a href=""> <h3>Iyashikei</h3> </a></li>
                <li><a href=""> <h3>Josei</h3> </a></li>
                <li><a href=""> <h3>Kids</h3> </a></li>
                <li><a href=""> <h3>Magic</h3> </a></li>
                <li><a href=""> <h3>Mahou Shoujo</h3> </a></li>
                <li><a href="" title="Martial Arts"> <h3>Martial Arts</h3> </a></li>
                <li><a href=""> <h3>Mecha</h3> </a></li>
                <li><a href=""> <h3>Military</h3> </a></li>
                <li><a href=""> <h3>Music</h3> </a></li>
                <li><a href=""> <h3>Mystery</h3> </a></li>
                <li><a href=""> <h3>Parody</h3> </a></li>
                <li><a href=""> <h3>Psychological</h3> </a></li>
                <li><a href=""> <h3>Reverse Harem</h3> </a></li>
                <li><a href=""> <h3>Romance</h3> </a></li>
                <li><a href=""> <h3>School</h3> </a></li>
                <li><a href=""> <h3>Sci-Fi</h3> </a></li>
                <li><a href=""> <h3>Seinen</h3> </a></li>
                <li><a href=""> <h3>Shoujo</h3> </a></li>
                <li><a href=""> <h3>Shounen</h3> </a></li>
                <li><a href=""> <h3>Slice of Life</h3> </a></li>
                <li><a href=""> <h3>Space</h3> </a></li>
                <li><a href=""> <h3>Sports</h3> </a></li>
                <li><a href=""> <h3>Super Power</h3> </a></li>
                <li><a href=""> <h3>Supernatural</h3> </a></li>
                <li><a href=""> <h3>Suspense</h3> </a></li>
                <li><a href=""> <h3>Thriller</h3> </a></li>
                <li><a href=""> <h3>Vampire</h3> </a></li>
              </ul>
                <a className={`list--genre ${listpopup.genre ? 'active' : ""}`} onClick={toggleGenre} href="#">GENRE</a>
              </li>
              <li className="list--item">
              <ul className={`genre--list--items types ${listpopup.type ? 'active' : ""}`}>
                <li><a href=""><h3>TV Series</h3></a></li>
                <li><a href=""><h3>Movies</h3></a></li>
                <li><a href=""><h3>OVAs</h3></a></li>
                <li><a href=""><h3>ONAs</h3></a></li>
                <li><a href=""><h3>Specials</h3></a></li>
                <li><a href=""><h3>Music</h3></a></li>
              </ul>
              <a href="#" className="list--type" onClick={toggleGenre}>TYPES</a>
              </li>
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
                <a href="" className="togethericon--wrapper" onMouseEnter={changeColor} onMouseLeave={revertcolor}><Watch2gether color={svgHover.svgTogether}   /><span>Watch2gether</span></a>
                <a href="" className="randomicon--wrapper" onMouseEnter={changeColor} onMouseLeave={revertcolor}><Random color={svgHover.svgRandom} /><span>Random</span></a>
                <a href="" className="read--manga"><i className="fa-solid fa-book"></i><span>Read Manga</span></a>
                </div>
                <Language lang={lang} toggle={togglelang} />
                <div className="social--wrapper">
                  <div className="share--btn--wrapper">
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
