import React from 'react'
import Images from '../components/Images'
import Src from '../components/Src'

const Blog = () => {
  return (
   <>
    <div className="container-fluid prjct">
        <div className="row">
         <Images src="./image/accordion.png" />
          <div className="col-md-7 text-center mt-3 heading_Accordion">
            <h1>Blog Application</h1>
            <div className="about_prjct p-2 ms-0">
            <strong>About</strong>
            <p className="ms-0">
    Proud to introduce my Blog App—a comprehensive web application developed with Node.js, React, Express, MongoDB, Mongoose, and styled using Material-UI. This feature-rich project empowers users to share, edit, and engage with blog posts seamlessly.

Key Features:<br />
    <strong className="text-primary">1. Post Creation:</strong> Users can create engaging posts with text content and image uploads.<br/>
    <strong className="text-primary">2. Edit Posts:</strong> Easy post editing functionality to keep content up-to-date.<br/>
    <strong className="text-primary">3. Image Upload:</strong> Seamless image uploading to enhance post visual appeal.<br/>
    <strong className="text-primary">4. Comments:</strong> Users can comment on posts, fostering interaction and engagement.<br/>
    <strong className="text-primary">5. View All Posts:</strong> Comprehensive filtering options to view posts based on various criteria.<br/>
    <strong className="text-primary">6. Responsive Design:</strong> Ensures optimal user experience across devices, from desktops to smartphones.<br/>
    <strong className="text-primary">7. External Libraries:</strong> Utilizes external libraries such as React Router for seamless navigation.<br/>

    This project showcases my proficiency in full-stack development, combining the power of Node, React, Express, MongoDB, and Material-UI to deliver a robust and user-friendly blogging experience.
</p>

              </div>
            <div className="src">
              <p>Experience the project firsthand by clicking the <strong>Button</strong> below ,To view the source code and further details you can access the project documentation and resources by following the provided <strong>Link</strong></p>
             <Src link ="https://github.com/techjmi/BlogApp" target="_blank" rel="noopener noreferrer" />
            </div>
            <div className="more_about">
              <button className="button_cv" onClick={() => window.open("...", "_blank")} rel="noopener noreferrer">
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

export default Blog