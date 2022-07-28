import { useRef } from 'react';
import pool from './assets/pool.png';
import backgroundmountains from './assets/backgroundmountains.png';
import background from './assets/background.png';
import finalhills from './assets/finalhills.png';


import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App(){
  return (
    <div>
      <Parallax pages={2}>
        

        <ParallaxLayer 
        offset={0} 
        speed={2.3}
        factor={0.9}
        style={{
          backgroundImage: `url(${background})`,
          height: '1080px',
          backgroundSize: 'cover',
        }}/>
        <ParallaxLayer 
        offset={0} 
        speed={3}
        factor={0.9}
        style={{
          backgroundImage: `url(${backgroundmountains})`,
          height: '1080px',
          backgroundSize: 'cover',
        }}/>
        <ParallaxLayer 
        offset={0} 
        speed={2.2}
        factor={1.5}
        style={{
          backgroundImage: `url(${pool})`,
          height: '1080px',
          backgroundSize: 'cover',
        }}/>
        <ParallaxLayer 
        offset={0} 
        speed={2.1}
        factor={2}
        style={{
          backgroundImage: `url(${finalhills})`,
          height: '1080px',
          backgroundSize: 'cover',
        }}/>

        <ParallaxLayer 
        speed={2}
        offset={0}
        factor = {2}>
          <h2> Welcome To Wolfi! </h2>
        </ParallaxLayer>
        <ParallaxLayer
        speed={2}
        offset={0.99}
        factor={1.9}>
          
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <p1>Im Wolfi, I make games, code, and post videos. </p1>
          <br></br>
          <p2>My games:
          <br></br>
          <iframe frameborder="0" src="https://itch.io/embed/1613218?bg_color=000000&amp;fg_color=ffffff&amp;link_color=e53b44" width="552" height="167"><a href="https://olfway.itch.io/rht">Run Hide Tag by Olfway</a></iframe>
          </p2>
          <h4>
            Links:
          </h4>
          <h3>
            Itch: <a href='https://olfway.itch.io'>Olfway</a>
            <br></br>
            Youtube: <a href='https://www.youtube.com/channel/UCFf0amGIMGvzulC148qRBMA'>Wolfi</a>
            <br></br>
            Twitter: <a href='https://twitter.com/OlfwayorWolfi'>@OlfwayorWolfi</a>
            <br></br>
            Github: <a href='https://github.com/wolfilive'>Wolfi Live (Olfway)</a>
            <br></br>
            Site Source: <a herf=''>Coming Soon</a>
            <br></br>
            This site: <a herf='https://www.wolfi.live'>www.wolfi.live</a>
          </h3>

          
        </ParallaxLayer>
        <ParallaxLayer
        offset={1.2}
        speed={1}>
          <h2> Fin </h2>
        </ParallaxLayer>
      </Parallax>

    </div>
  )

}

export default App;