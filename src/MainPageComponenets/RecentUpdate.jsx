  import React from "react"


  let Card = (prop) => {

    return (

        <div className="recent--card--item">
            <div className="recent--card--item--poster">
                <a href="">
                    <img src={prop.image} alt="" />
                    <div className="recent--card--item-poster--info">
                        <div>
                            <div className="poster--info--left">
                                <span className="sub episodes"><span>{prop.status === 'Currently Airing' ? 3 : prop.episodes}</span></span>
                                <span className="dub episodes"><span>{prop.status === 'Currently Airing' ? 3 : prop.episodes}</span></span>
                                <span className="total episodes"><span>{prop.episodes}</span></span>
                            </div>
                            <div className="poster--info--right">{prop.type}</div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="recent--card--item--name">
                <a href="">{prop.title}</a>
            </div>
        </div>

    )

  }

  let RecentUpdate = () => {

    let [update, setUpdate] = React.useState([])
    let [test,setTest] = React.useState(0)
    let [year,setYear] = React.useState(2)
    let seasons = ['fall','summer','spring','winter']
    let timeout = (ms) => {
        console.log('timeout')
    return new Promise(resolve => setTimeout(resolve, ms));
}

let handleNextClick = () => {
    let example
    let head
      setTest( prevState => { 
           

            if (prevState < seasons.length - 1 ) {

                example =  prevState + 1

                }

                 else {

                example = 0
                head = 0
                console.log('test', example)

                    }
                    
                                
                                // console.log(test)
                    return example
                                 }
                        )

        if (example === 2) {
  console.log(example)
            setYear(prevState => {
                let whatever = prevState > 0 ? prevState - 1 : prevState = 0
                console.log('animeyear', whatever)
                return whatever
                      })

        }

}

    let fetchData = async () => {
       
        console.log('fetch')
        // let years = []
        // for (let i= 3; i > -1; i--) {
        //     years.push(i)
        //     // console.log('what')
        // }
        // console.log( 'idiot',years)

        // let anime = await  Promise.all (

            let response = await fetch(`https://api.jikan.moe/v4/seasons/202${year}/${seasons[test]}`)
            console.log(seasons[test], '202',year)
            const seasonAnime = await response.json()
            let idiot = seasonAnime.data
                    console.log(seasonAnime.data)

                    setUpdate(

                        idiot.map(idi => {

                            return <Card 
                                    image = {idi.images.jpg.image_url}
                                    status = {idi.status}
                                    episodes = {idi.episodes}
                                    type = {idi.type}
                                    title ={idi.title_english}
                                     />
                            
                        })

                    )
                    // return (seasonAnime.data)

            // years.map( async (year) => {

            //  let Yearlyanime = await Promise.all(
                
            //     seasons.map(async (season) => {

            //         const response = await fetch(`https://api.jikan.moe/v4/seasons/202${year}/${season}`) 
            //         // await timeout(600)
            //         const seasonAnime = await response.json()
            //         console.log(seasonAnime.data)
            //         return (seasonAnime.data)
                    
            //     })
            //  )          

            //             return Yearlyanime
            // })

        // )

        // let newArray = []
        // setUpdate( prevState => {
        //     anime.forEach(ani => {

        //         ani.forEach(seasonsArray => {

        //             seasonsArray.forEach(recentAnimeObject => {
        //                 if(recentAnimeObject.airing == false && recentAnimeObject.year == 2023) {
        //                     console.log(recentAnimeObject.airing,recentAnimeObject.year)
        //                 }

        //                 else {
        //                     newArray.push(recentAnimeObject)
        //                 }
                        
        //             })

        //         })

        //        })

        //        let unique = [...new Set(newArray)]

        //        let recentAnimeDiv = unique.map(un => {
        //         console.log(un)
        //         return <Card 
        //                  image = {un.images.jpg.image_url}
        //                  status = {un.status}
        //                  episodes = {un.episodes}
        //                  type = {un.type}
        //                  title ={un.title_english}
        //                 />

        //        })

        //        return recentAnimeDiv

        //     })

    }

    React.useEffect(()=> {

        fetchData()

    },[test])

    React.useEffect(() => {

        console.log('who',update)
    }, [update])

    return (

        <div>
            <div className="updated--tab">
                <div className="updated--tab--text">Recently Updated</div>
                <div className="updated--tab--tabs--container">
                    <div className="updated--tab--tabs">
                        <div>All</div>
                        <div>Sub</div>
                        <div>Dub</div>
                        <div>Chinese</div>
                        <div className="active">Trending</div>
                        <div>Random</div>
                    </div>
                    <div className="paging--nav">
                        <span className="paging--prev inactive"><i class="fa-solid fa-angle-left"></i></span>
                        <span className="paging--next" onClick={handleNextClick}><i class="fa-solid fa-angle-right"></i></span>
                    </div>
                </div>
            </div>
            <div className="recent--anime--container">{update}</div>
        </div>

    )

  }

  export default RecentUpdate