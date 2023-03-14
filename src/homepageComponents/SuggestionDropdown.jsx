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

let SuggestionDropdown = () => {

    let [animeImages, setAnimeImages] = React.useState([])
    
    React.useEffect(() => {

      const url = 'https://api.jikan.moe/v4/anime?q="naruto"'

      fetch(url)
      .then(response => response.json())
      .then(anime => {
        console.log(anime)
        let test = true
        setAnimeImages(anime.data.map((dataArray,index) => {
          let be = !test
          console.log("this is test",be)
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

        
      })

    },[])

    return (
        
        <div>{animeImages}</div>

    )

  }

  export default SuggestionDropdown
