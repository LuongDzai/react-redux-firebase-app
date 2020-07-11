import React from "react";

function ProjectDetails(props) {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <div className="card-title">Project Title - {id}</div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
            doloribus laboriosam ratione tempora magnam voluptates officia quae
            culpa nostrum odit aut, impedit accusantium? Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Fugiat fuga ut temporibus,
            reiciendis placeat delectus laboriosam sit aut maiores minus non,
            quis error doloremque corporis? Illum sit aut voluptatem totam?
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Xuan Luong</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
