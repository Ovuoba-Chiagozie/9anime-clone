import React, { ReactElement, ReactNode } from "react";

type Cardprops = {
  key: number;
  image: string;
  title: string;
  rating: string | string[];
  score: number;
  type: string;
  aired: string | string[];
  color: boolean;
};

let Card = (prop: Cardprops) => {
  let styles = {
    backgroundColor: prop.color ? "#141414" : "#1c1c1c",
  };

  return (
    <div style={styles}>
      <a href="" className="searchCard">
        <img src={prop.image} alt="" />
        <div className="searchCard--info">
          <div className="searchCard--title">{prop.title}</div>
          <div className="searchCard--extrainfo">
            {prop.rating !== "" && (
              <span className="searchCard--rating">{prop.rating}</span>
            )}
            <span className="dot">&bull;</span>
            <span className="searchCard--score">
              <i className="fa-solid fa-star"></i>
              {prop.score}
            </span>
            <span className="dot">&bull;</span>
            <span className="type--date">{prop.type}</span>
            <span className="dot">&bull;</span>
            <span className="type--date">
              {prop.aired !== "" && <span>{prop.aired}</span>}
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};

let NoResult = () => {
  let viewAll = document.querySelector(".view--all") as HTMLDivElement | null;

  if (viewAll != null) {
    viewAll.classList.remove("display");
  }

  return <div id="no--result">There is no result</div>;
};

type dropdownSuggestion = {
  anime: string;
};

let SuggestionDropdown = (prop: dropdownSuggestion) => {
  // try {
  console.log('prop',prop)
  let [animeImages, setAnimeImages] = React.useState<ReactNode>([]);

  type Divelement = HTMLDivElement | null;

  React.useEffect(() => {
    try {
      if (prop.anime.length > 1) {
        const url: string = `https://api.jikan.moe/v4/anime?q=${prop.anime}&limit=5`;

        type Anime = {
          data: {
            mal_id: number;
            images: { jpg: { image_url: string } };
            title: string;
            rating: string;
            score: number;
            type: string;
            aired: { string: string };
          }[];
        };

        fetch(url)
          .then((response) => response.json())
          .then((anime: Anime) => {
            console.log(anime, "mad");
            if (anime.data.length > 0) {
              setAnimeImages(
                anime.data.map((dataArray, index: number) => {
                  let id = dataArray.mal_id;
                  let poster = dataArray.images.jpg.image_url;
                  let title = dataArray.title;
                  let rating = dataArray.rating;
                  let score = dataArray.score;
                  let type = dataArray.type;
                  let aired = dataArray.aired.string;
                  let cards = (
                    <Card
                      key={id}
                      image={poster}
                      title={title}
                      rating={rating ? rating.split(" - ", 1) : ""}
                      score={score}
                      type={type ? type.toUpperCase() : ""}
                      aired={aired ? aired.split(" to", 1) : ""}
                      color={index % 2 === 0 ? true : false}
                    />
                  );

                  if (anime.data.length == 0) {
                    let viewAll = document.querySelector(
                      ".view--all"
                    ) as Divelement;
                    if (viewAll != null) {
                      viewAll.classList.add("display");
                    }
                  }

                  return cards;
                })
              );
            } else {
              setAnimeImages(<NoResult />);
            }
            console.log("anime", prop.anime);

            let dropDownwrapper =
              document.getElementsByClassName("dropDown--wrapper");
            let footer = document.querySelector(
              ".searchbox--footer"
            ) as Divelement;

            dropDownwrapper[0].classList.remove("display--height");

            if (footer != null) {
              footer.classList.add("display--footer");
            }

            setTimeout(() => {
              dropDownwrapper[0].classList.add("display--height");
            }, 3);
          });
      }
    } catch (error: any) {
      console.log(error);
      console.log(error.message);
    }
  }, [prop.anime]);

  return <div className="dropDown--wrapper">{animeImages}</div>;
};

export default SuggestionDropdown;
