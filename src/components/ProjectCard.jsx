import Image from "next/image";
import '../app/globals.css'

export default function ProjectCard({title, description, gitHubLink, livePreviewLink, imagePath}) {
    return (
        <div className="project-card card mb-3 w-100 w-md-50">
            <div className="row g-0">
                <div className="col-md-4" style={{ position: 'relative', minHeight: '200px' }}>
                    {/* Wrap Image inside a div with height set */}
                    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                        <Image
                            src={imagePath}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-start"
                            alt="Picture of the author"
                        />
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <div className="d-flex gap-3">
                            <a href={gitHubLink} target="_blank" className="btn btn-primary">GitHub</a>
                            {/* <a href={livePreviewLink} className="btn btn-secondary">Preview</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
