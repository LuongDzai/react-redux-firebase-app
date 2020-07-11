import React from "react";
import ProjectSummary from "./ProjectSummary";

function ProjectList({projects}) {
  return (
    <div>
      <div className="project-list section">
        {projects.map((project)=>{
          return(
            <ProjectSummary project={project} key={project.id}/>
          )
        })}
      </div>
    </div>
  );
}

export default ProjectList;
