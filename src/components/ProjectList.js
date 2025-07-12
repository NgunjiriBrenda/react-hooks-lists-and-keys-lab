import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div>
        {projects.map((projects)=>(
          <ProjectItem
          key={projects.id}
          name={projects.name}
          about={projects.about}
          technologies={projects.technologies}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
