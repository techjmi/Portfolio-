import React from 'react'
import Images from '../components/Images'
import Src from '../components/Src'

const SpotifyClone = () => {
  return (
    <>
    <div className="container-fluid prjct">
        <div className="row">
         <Images src="./image/Spotify.png" />
          <div className="col-md-7 text-center mt-3 heading_Accordion">
            <h1>Spotify-Clone</h1>
            <div className="about_prjct p-2 ms-0">
            <strong>About</strong>
            <p className="ms-0">
    Excited to present my Spotify clone project—a dynamic web application built with HTML, CSS, and JavaScript, focusing on the DOM. This project replicates Spotify's functionality, offering users an <strong className="text-primary">interactive</strong> and <strong className="text-primary">responsive</strong> music streaming experience.
Key Features:<br />
    <strong className="text-success">1. Playback Controls:</strong> Play, pause, next, and previous track functionalities for seamless music control.<br/>
    <strong className="text-success">2. Sound Control:</strong> Adjustable volume for a personalized listening experience.<br/>
    <strong className="text-success">3. Playlist Selection:</strong> Users can easily choose playlists from a curated list.<br/>
    <strong className="text-success">4. Mute Functionality:</strong> Toggle sound on and off for added convenience.<br/>
    <strong className="text-success">5. Playback Speed Adjustment:</strong> Customize playback speed based on user preferences.<br/>
    <strong className="text-success">6. Responsive Design:</strong> Consistent and visually appealing across devices—desktop, tablet, and smartphone.<br/>

    This project reflects my commitment to creating engaging and user-friendly applications, showcasing proficiency in modern web technologies.
</p>

              </div>
            <div className="src">
              <p>Experience the project firsthand by clicking the <strong>Button</strong> below ,To view the source code and further details you can access the project documentation and resources by following the provided <strong>Link</strong></p>
             <Src link ="https://github.com/techjmi/Spotify-Clone" target="_blank" rel="noopener noreferrer" />
            </div>
            <div className="more_about">
              <button className="button_cv" onClick={() => window.open("https://symphonious-quokka-7ec10b.netlify.app/", "_blank")} rel="noopener noreferrer">
                Click Here
              </button>

            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  )
}

export default SpotifyClone