import React from "react";
import ProjectSummary from "./ProjectSummary";

function ProjectList() {
  return (
    <div>
      <div className="project-list section">
        <ProjectSummary />
        <ProjectSummary />
        <ProjectSummary />
        <ProjectSummary />
      </div>
    </div>
  );
}

export default ProjectList;
