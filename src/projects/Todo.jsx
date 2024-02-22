import React from 'react'
import Images from '../components/Images'
import Src from '../components/Src'

const Todo = () => {
  return (
   <>
       <div className="container-fluid prjct">
        <div className="row">
         <Images src="./image/Todo.png" />
          <div className="col-md-7 text-center mt-3 heading_Accordion">
            <h1>Todo Application</h1>
            <div className="about_prjct p-2 ms-0">
            <strong>About</strong>
            <p className="ms-0">
    Delighted to share my To-Do List project—a responsive web application crafted with React and styled using Tailwind CSS. This feature-rich project empowers users to manage tasks effortlessly, offering a seamless and user-friendly experience.

Key Features:<br />
    <strong className="text-primary">1. Add Task:</strong> Users can easily add new tasks to their to-do list.<br/>
    <strong className="text-primary">2. Edit Task:</strong> Edit existing tasks to keep the list up-to-date.<br/>
    <strong className="text-primary">3. Mark as Done:</strong> Users can mark tasks as done for better organization.<br/>
    <strong className="text-primary">4. View All Tasks:</strong> A comprehensive view of all tasks or filter to see remaining tasks.<br/>
    <strong className="text-primary">5. Delete Task:</strong> Delete tasks with a confirmation prompt for added safety.<br/>
    <strong className="text-primary">6. Save Data:</strong> Utilizes local storage for data persistence, allowing users to save their to-do list.<br/>
    <strong className="text-primary">7. Responsive Design:</strong> Ensures optimal user experience across devices, maintaining functionality on desktops, tablets, and smartphones.<br/>

    This project reflects my commitment to delivering practical and responsive applications, showcasing proficiency in React and Tailwind CSS.
</p>


              </div>
            <div className="src">
              <p>Experience the project firsthand by clicking the <strong>Button</strong> below ,To view the source code and further details you can access the project documentation and resources by following the provided <strong>Link</strong></p>
             <Src link ="https://github.com/techjmi/Todo-Application" target="_blank" rel="noopener noreferrer" />
            </div>
            <div className="more_about">
              <button className="button_cv" onClick={() => window.open("https://astounding-pothos-9baa22.netlify.app/", "_blank")} rel="noopener noreferrer">
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

export default Todo