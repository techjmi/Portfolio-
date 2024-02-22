import React from "react";
import Accordion from "../projects/Accordion";
import SpotifyClone from "../projects/SpotifyClone";
import Todo from "../projects/Todo";
import Blog from "../projects/Blog";
import { News } from "../projects/News";
import Crud from "../projects/Crud";


const Project = () => {
    const githubLink = 'https://github.com/techjmi';
  return (
    <>
    
     <SpotifyClone />
     <Todo />
     <Blog />
     <News />
     <Crud />
      <Accordion />
      
   <div className="more mx-auto ">
    <p>
I have included several projects here, but there are many more on my GitHub profile. Feel free to visit my GitHub to explore additional projects and applications.</p>
<p>Explore my GitHub: <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
   </div>
     
    </>
  );
};

export default Project;
