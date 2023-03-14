import React from 'react'

let Card = (prop) => {

  let styles = {
    width: "50px",
    height: "50px"
  }

  return (
    <div ><img style={styles} src={prop.image} alt="" /></div>

  )

} 

let SuggestionDropdown = () => {

    let [animeImages, setAnimeImages] = React.useState([])
    
    React.useEffect(() => {

      const url = 'https://api.jikan.moe/v4/anime?q=score:>=9"'

      fetch(url)
      .then(response => response.json())
      .then(anime => {
        console.log(anime)
        setAnimeImages(anime.data.map(data => {
          let info = data.images.jpg.image_url
          let cards = <Card image = {info} />

          return cards

        }))

        
      })

    },[])

    return (
        
        <div>{animeImages}</div>

    )

  }

  export default SuggestionDropdown