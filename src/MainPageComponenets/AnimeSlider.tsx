import React,{ReactNode} from "react";

type sliderCard = {

    title: string
    rating: string | string[],
    aired: string | string[]
    synopsis: string,
    image: string

}

let CardSlider = (prop: sliderCard) => {

    // let styles = {
    //     backgroundImage: `url(${prop.image})`,
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center center',

    // }

    return (
         
        <div className="slider--wrapper">
            <div className="slider--info">
                <h2>{prop.title}</h2>
                <div className="slider--info--icons">
                    <div className="icons--rating">{prop.rating}</div>
                    <div className="icons--film--quality">HD</div>
                    <i className="fas fa-closed-captioning"></i>
                    <i className="fas fa-microphone"></i>
                    <div>{prop.aired}</div>
                </div>
                <div className="slider--info--synopsis">{prop.synopsis}</div>
                <div className="play--container">
                    <a href="">
                    <i className="fas fa-play"></i>
                    PLAY NOW
                    </a>
                </div>
            </div>
            <div className="slider--image"><img src={prop.image} alt="" /></div>
        </div>

    )

} 

let AnimeSlider = () => {

    type Globalset = {

        isDragStart: boolean,
        prevPageX?: number,
        prevscrollLeft?: number

    }

    const delay = 3000;
    let [cardContent,setCardContent] = React.useState<ReactNode[]>([])
    const [index, setIndex] = React.useState<number | void>(0);
    let carousel = document.querySelector('.slider--container') as HTMLDivElement | null
    let [global,setGlobal] = React.useState<Globalset | undefined>({

        isDragStart : true,
        prevPageX:0 ,
        prevscrollLeft:0

    })


    let fetchData = async () => {
        let arr = [16498,41457,39535,42249,51535,48316,40748,18153,31240]
       let animes = await Promise.all(

         arr.map(async (id) => {   

            interface objectAnime {

                data: {
                    title_english: string,
                    rating: string ,
                    aired: {
                        string: string 
                    }
                    synopsis: string,
                    images: {
                        jpg: {                           
                            large_image_url: string
                        }
                    }
                }

            }
          
                const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
                const animeObject: objectAnime = await response.json()
                // console.log(animeObject.data)
                if(animeObject.data) {
                let title = animeObject.data.title_english
                let rating = animeObject.data.rating
                let aired = animeObject.data.aired.string
                let synopsis = animeObject.data.synopsis
                let image = animeObject.data.images.jpg.large_image_url
                return <CardSlider 
                         title ={title}
                         rating ={rating ? rating.split(' - ',1) : ""}
                         aired = {aired ? aired.split(' to',1) : ""}
                         synopsis = {synopsis}
                         image = {image}
                        />
                }

            }))

            setCardContent(animes.filter((anime):boolean => {

                if (anime) {
                    return true
                }
                return false

            }))

        }
    React.useEffect( ()=> {

            fetchData()    
    },[])

    React.useEffect(() => {
        console.log(cardContent)
    },[cardContent])

    React.useEffect(() => {
    setTimeout(() => 
        setIndex((prevIndex) => {
        if((prevIndex != null)  ) {

          prevIndex === cardContent.length - 1 ? 0 : prevIndex + 1

        }}
        ),
      delay
    );
console.log('what',index)
    return () => {};
  }, [index]);

    let dragStart = (e:React.MouseEvent<HTMLDivElement>) => {
    
       setGlobal(prevState => {
        if(carousel != null) {
        return (
            {...prevState, isDragStart:true,prevPageX:e.pageX,prevscrollLeft:carousel.scrollLeft}
        )
        }
       })
    }

    let dragging = (e:React.MouseEvent<HTMLDivElement>) => {

        if(typeof global != 'undefined' && carousel) {

        if(!global.isDragStart) return;
        e.preventDefault()

        if(global.prevPageX && global.prevscrollLeft) {

        let positionDiff = e.pageX - global.prevPageX
        carousel.scrollLeft = global.prevscrollLeft - positionDiff

        }}

    }

    let dragStop = () => {

       setGlobal(prevState => {

        return (
            {...prevState, isDragStart:false}
        )
       })

    }

 
    return (

        <div className="slider--container" 
         onMouseDown={dragStart}
         onMouseMove={dragging}
         onMouseUp={dragStop}
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
         >
            {cardContent}
        </div>

    )
}

export default AnimeSlider