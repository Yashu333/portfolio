import ProjectCard from "./ProjectCard";

export default function Projects(){
    return(
        <div className="container px-4 py-5" >
            <div className="row">

               <div className="col-md-6 mb-4">
                    <ProjectCard />
                </div>
                <div className="col-md-6 mb-4">
                    <ProjectCard />
                </div>
                <div className="col-md-6 mb-4">
                    <ProjectCard />
                </div>
                <div className="col-md-6 mb-4">
                    <ProjectCard />
                </div>

            </div>

        </div>
    )
}