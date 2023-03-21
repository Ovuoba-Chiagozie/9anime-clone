import React from 'react'

let Card = (prop) => {
 
  let styles = {

    backgroundColor: prop.color ? "#141414" : "#1c1c1c",

  }

  return (

    <div style={styles}>
      <a href="" className='searchCard'>
      <img  src={prop.image} alt="" />
      <div className='searchCard--info'>
        <div className='searchCard--title'>{prop.title}</div>
        <div className='searchCard--extrainfo'>
          {prop.rating !== "" && <span className='searchCard--rating'>{prop.rating}</span>}
          <span className='dot'>&bull;</span>
          <span className='searchCard--score'>
            <i className="fa-solid fa-star"></i>
            {prop.score}
          </span>
          <span className='dot'>&bull;</span>
          <span className='type--date'>
            {prop.type}
          </span>
          <span className='dot'>&bull;</span>
          <span className='type--date'>
          {prop.aired !=="" && <span>{prop.aired}</span>}
          </span>
          </div>
      </div>
      </a>
      </div>

  )

}

let NoResult = () => {

  return (

    <div id='no--result'>There is no result</div>

  )

}

let SuggestionDropdown = (prop) => {
      
    let [animeImages, setAnimeImages] = React.useState([])
    
   
    React.useEffect(() => {
      if(prop.anime.length > 1) {
      const url = `https://api.jikan.moe/v4/anime?q=*${prop.anime}&limit=5*`

      fetch(url)
      .then(response => response.json())
      .then(anime => {
        console.log(anime)
        if (anime.data.length > 0) {
        setAnimeImages(anime.data.map((dataArray,index) => {
          let id = dataArray.mal_id
          let poster = dataArray.images.jpg.image_url
          let title = dataArray.title
          let rating = dataArray.rating
          let score = dataArray.score
          let type = dataArray.type
          let aired = dataArray.aired.string
          let cards = <Card 
                         key={id}
                         image = {poster}
                         title = {title}
                         rating = {rating ? rating.split(' - ',1) : ""}
                         score = {score}
                         type = {type ? type.toUpperCase() : ""}
                         aired = {aired ? aired.split(' to',1) : ""}
                         color ={index % 2 === 0 ? true : false}
                         />
                      
          return cards

        }))
      }

      else {
        setAnimeImages(<NoResult />)
      }
      console.log('anime',prop.anime)
      

      let dropDownwrapper = document.getElementsByClassName('dropDown--wrapper')
      let footer = document.querySelector('.searchbox--footer')
      let viewAll = document.querySelector('.view--all')
      dropDownwrapper[0].classList.remove('display--height')
      footer.classList.add('display--footer')
      setTimeout(() => {
        dropDownwrapper[0].classList.add('display--height')
        viewAll.classList.add('display')
      },3 );
      })
     
    }
    },[prop.anime])
    
    

    return (
        
        <div className='dropDown--wrapper'>{animeImages}</div>
        

    )

  }

  export default SuggestionDropdown
