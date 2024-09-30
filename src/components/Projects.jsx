import ProjectCard from "./ProjectCard";
import { projects } from "@/app/data/projectsData";

export default function Projects() {
    return (
        <div className="container px-4 py-5" >
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 my-5 text-center" > Projects </h1>
            <div className="row">

            {console.log("image path is:", projects[0].imagePath)}

                {
                    projects.map((project) => (
                        <div className="col-md-6 mb-4" key={project.title}>
                            <ProjectCard
                                title={project.title}
                                imagePath={project?.imagePath}
                                description={project.description}
                                gitHubLink={project.gitHubLink}
                                livePreviewLink={project.livePreviewLink}
                            />
                        </div>
                    ))
                }

            </div>

        </div>
    )
}