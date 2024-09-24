import Image from "next/image"

export default function Hero(){

    return(
        <div className="container px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <Image
              src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
              className="d-block mx-lg-auto img-fluid"
              width={500}
              height={700}
              alt="Picture of the author"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3" > Hi, I am Yash </h1>
            <p className="lead"> 
              Master’s Student at Teesside University, Software Developer Intern at Yuze. 
              Love coding and cracking challanges, and have a deep passion for Web Development and Data Science.
              </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Resume</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">LinkedIn</button>
            </div>
          </div>
        </div>
      </div>
    )
}