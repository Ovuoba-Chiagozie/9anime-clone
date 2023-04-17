  import React,{ReactNode} from "react"

  type cardProp = {

    key: number
    image: string
    status: string
    episodes: number
    type: string
    title: string

  } 


  let Card = (prop: cardProp) => {

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

    let [update, setUpdate] = React.useState<ReactNode>([])
    let [test,setTest] = React.useState(0)
    let [year,setYear] = React.useState(2)
    let seasons = ['fall','summer','spring','winter']
//     let timeout = (ms) => {
//         console.log('timeout')
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

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

        type animeSeason = {
            data:{
                mal_id: number,
                images: {
                    jpg: {
                        image_url: string
                    }
                },
                status: string,
                episodes: number,
                type: string,
                title_english: string
            }[]
        }

            let response = await fetch(`https://api.jikan.moe/v4/seasons/202${year}/${seasons[test]}`)
            console.log(seasons[test], '202',year)
            const seasonAnime: animeSeason = await response.json()
            let idiot = seasonAnime.data
                    console.log(seasonAnime, 'are')

                    setUpdate(

                        idiot.map(idi => {

                            return <Card 
                                    key= {idi.mal_id}
                                    image = {idi.images.jpg.image_url}
                                    status = {idi.status}
                                    episodes = {idi.episodes}
                                    type = {idi.type}
                                    title ={idi.title_english}
                                     />
                            
                        })

                    )


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
                        <span className="paging--prev inactive"><i className="fa-solid fa-angle-left"></i></span>
                        <span className="paging--next" onClick={handleNextClick}><i className="fa-solid fa-angle-right"></i></span>
                    </div>
                </div>
            </div>
            <div className="recent--anime--container">{update}</div>
        </div>

    )

  }

  export default RecentUpdate