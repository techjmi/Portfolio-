import React from 'react'
import Images from '../components/Images'
import Src from '../components/Src'

export const News = () => {
  return (
    <>
    <div className="container-fluid prjct">
        <div className="row">
         <Images src="./image/news.png" />
          <div className="col-md-7 text-center mt-3 heading_Accordion">
            <h1>Short-News Application</h1>
            <div className="about_prjct p-2 ms-0">
            <strong>About</strong>
            <p className="ms-0">
    Excited to present my Short News Website—a dynamic platform developed using React.js and styled with Material-UI. This project leverages the News API and showcases my adeptness in fetching real-time news data.

Key Features:<br />
    <strong className="text-success">1. News Categories:</strong> Users can explore news from various categories like sports, technology, health, entertainment, and general.<br/>
    <strong className="text-success">2. Real-time Updates:</strong> Fetches latest news using Axios and the News API, providing up-to-date information.<br/>
    <strong className="text-success">3. Read Full News:</strong> Users can read the full news by visiting external links for detailed coverage.<br/>
    <strong className="text-success">4. Material-UI Design:</strong> Utilizes Material-UI for an intuitive and visually appealing user interface.<br/>
    <strong className="text-success">5. Responsive Design:</strong> Ensures a seamless reading experience across devices, from desktops to mobile devices.<br/>

    This project underscores my expertise in fetching and presenting real-time data from external APIs, enhancing the user experience with a clean and modern design.
</p>

              </div>
            <div className="src">
              <p>Experience the project firsthand by clicking the <strong>Button</strong> below ,To view the source code and further details you can access the project documentation and resources by following the provided <strong>Link</strong></p>
             <Src link ="https://github.com/techjmi/ShortNews-Website" target="_blank" rel="noopener noreferrer" />
            </div>
            <div className="more_about">
              <button className="button_cv" onClick={() => window.open("https://65d65c82277573fe197e7b06--deft-pika-947716.netlify.app/", "_blank")} rel="noopener noreferrer">
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
