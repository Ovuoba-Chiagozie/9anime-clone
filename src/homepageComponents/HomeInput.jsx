import searchShortcut from "../assets/search-shortcut.svg"

let HomeInput = () => {

    

    let searchbarDisplay = () => {
        hide()
      setTimeout(() => {hideSeacrhDisplay()}, 300);
    }

    let hide = () => {

        let homeinput = document.querySelector('.searchbar')
        let searchbox = document.querySelector('.searchbox--container')
        let searchInputField = document.querySelector('.homeinput2')
       setTimeout(() => { 
        searchbox.classList.add('display--search')
        homeinput.classList.add('display--search')
        searchInputField.focus()
    }, 170);


    }

    let trigger = (event) => {

        document.removeEventListener('click', ()=>trigger,false)
        let searchBoxContainer = document.querySelector('.searchbox--container')
        let homeinput = document.querySelector('.searchbar')
        let outsideclick = !searchBoxContainer.contains(event.target)
        let test = !homeinput.contains(event.target)
        console.log(event.target)
       if (outsideclick && test) {
        let searchbox = document.querySelector('.searchbox--container')
        searchbox.classList.remove('display--search')
        homeinput.classList.remove('display--search')
       }

    }


    let hideSeacrhDisplay = () => {
        console.log('something is wrong')
        document.addEventListener('click', (event) => {
            trigger(event)
        })   
    }

    return (
    <div className="searchbar" >
        <form action="">
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input 
            type="text" 
            className="homeinput" 
            placeholder="Search anime..."
            onFocus={searchbarDisplay} 
             />
            <img src={searchShortcut} alt="" />
        </form>
    </div>

    )
}

export default HomeInput