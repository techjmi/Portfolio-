import React from 'react'
import Src from '../components/Src'
import Images from '../components/Images'

const Crud = () => {
  return (
    <>
    <div className="container-fluid prjct">
        <div className="row">
         <Images src="./image/crud.jpg" />
          <div className="col-md-7 text-center mt-3 heading_Accordion">
            <h1>CRUD-APPLICATION</h1>
            <div className="about_prjct p-2 ms-0">
            <strong>About</strong>
            <p className="ms-0">
    Delighted to showcase my CRUD Application—an advanced platform built with the MERN (MongoDB, Express.js, React.js, Node.js) stack, featuring a fully authenticated system and a robust admin panel.

Key Features: <br />
    <strong className="text-primary">1. User Authentication:</strong> Secure and authenticated user system with login and registration functionalities.<br/>
    <strong className="text-primary">2. Admin Panel:</strong> Exclusive admin section for managing users, with capabilities to edit, delete, and view user details.<br/>
    <strong className="text-primary">3. CRUD Operations:</strong> Comprehensive CRUD functionality for creating, reading, updating, and deleting data.<br/>
    <strong className="text-primary">4. Material-UI Design:</strong> Utilizes Material-UI for an intuitive and visually appealing user interface.<br/>
    <strong className="text-primary">5. Responsive Design:</strong> Ensures a seamless user experience across various devices, maintaining functionality on desktops, tablets, and mobile devices.<br/>

    This project showcases my expertise in developing a secure and feature-rich application, emphasizing proficiency in the MERN stack and delivering a clean and modern design for a superior user experience.
</p>


              </div>
            <div className="src">
              <p>Experience the project firsthand by clicking the <strong>Button</strong> below ,To view the source code and further details you can access the project documentation and resources by following the provided <strong>Link</strong></p>
             <Src link ="https://github.com/techjmi/CRUD-Operation" target="_blank" rel="noopener noreferrer" />
            </div>
            {/* <div className="more_about">
              <button className="button_cv" onClick={() => window.open("https://symphonious-quokka-7ec10b.netlify.app/", "_blank")} rel="noopener noreferrer">
                Click Here
              </button>

            </div> */}
            <hr />
          </div>
        </div>
      </div>
    </>
  )
}

export default Crud
