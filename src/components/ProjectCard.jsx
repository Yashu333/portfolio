import Image from "next/image";

export default function ProjectCard() {
    return (
        <div className="card mb-3 w-100 w-md-50">
            <div className="row g-0">
                <div className="col-md-4" style={{ position: 'relative', minHeight: '200px' }}>
                    {/* Wrap Image inside a div with height set */}
                    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                        <Image
                            src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-start"
                            alt="Picture of the author"
                        />
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex gap-3">
                            <a href="#" className="btn btn-primary">GitHub</a>
                            <a href="#" className="btn btn-light">Preview</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
