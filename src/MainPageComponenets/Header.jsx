import { SearchBar, SearchBox } from "../homepageComponents/SearchBox";
import watch2gether from '../assets/watch2gether.svg'
import random from '../assets/random.svg'
import Facebook from '../assets/facebook-icon.svg'
import Twitter from '../assets/Twiiter-icon.svg'
import Addthis from '../assets/Add-this-icon.svg'

const Header = () => {
  return (
    <div>
      <div className="header--container">
        <div className="menu--searchbar">
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="logo"><a href=""></a></div>
          <div>
            <SearchBar />
          </div>
        </div>
        <div>
            <div className="btn--container">
                <div className="btns">
                <a href=""><img src={watch2gether} className="watch--icon" alt="" /><span>Watch2gether</span></a>
                <a href=""><img src={random} className="random--icon" alt="" /><span>Random</span></a>
                <a href="" className="read--manga"><i class="fa-solid fa-book"></i><span>Read Manga</span></a>
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
                <span className='social--count' >533K</span>
                </a>
            </div>
                </div>
            </div>
            <div></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
