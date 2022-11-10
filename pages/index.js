import React from "react";
import config from "../config.json";
import styled from "styled-components";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {   
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");
    
      return (
        <>
        
        <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
                {/* Prop Drilling*/ }
        <Menu valorDoFiltro ={valorDoFiltro} setValorDoFiltro ={setValorDoFiltro}/>
        <Header />
        <TimeLine searchValue={valorDoFiltro} playlists={config.playlists}>
            Conteúdo
            </TimeLine>
        </div>
        </>
    );
  }
  
  export default HomePage

    // function Menu(){
    //   return(
    //     <div>
    //       Menu
    // </div>
    //  )
    //}

  const StyleHeader = styled.div`
        background-color: ${(theme)=> theme.backgroundLevel1 };
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
        }
        .user-info{
            
            display: flex;
            align-items: center;
            width: 100%;
            padding: 16px 32px;
            gap: 16px;
        }
    `;

    const StyledBanner = styled.div`
    background-color: blue;
    background-image: url(${({bg})=> bg});
   /* background-image: url(${config.bg});*/
    height: 230px;
    `;

  function Header(){
    return(
        <StyleHeader>
           <StyledBanner bg={config.bg}/>
           <section className="user-info">
                <img src={`https://github.com/${config.github}.png`}/>
                <div>
                    <h2>
                    {config.name}
                    </h2>
                    <p>
                    {config.job}
                    </p>
                </div>
           </section>
        </StyleHeader>
    )
  }
  function TimeLine({searchValue, ...propriedades}){
   // console.log("Dentro do componente", propriedades.playlists);
    const playlistNames = Object.keys(propriedades.playlists);
    return(
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = propriedades.playlists [playlistName];
               // console.log(playlistName);
              //  console.log(videos);
                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                        {videos.filter((video) =>{
                            const titleNormalized = video.title.toLowerCase();
                            const searchValueNormalized = searchValue.toLowerCase();
                            return titleNormalized.includes(searchValueNormalized)
                        }) 
                        .map ((video) => {
                    return (
                        <a key ={video.url} href={video.url}>
                            <img src={video.thumb}/>
                            <span>
                                {video.title}
                            </span>
                        </a>
                    )
                })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
  }