import Image from "next/image"
import '../app/globals.css'

export default function Hero(){

    return(
        <div id="Home" className="container px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <Image
              src="/My_Sketch.gif"
              className="d-block mx-lg-auto img-fluid"
              width={500}
              height={700}
              alt="Picture of the author"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 titleColor" > Hi, I am Yash </h1>
            <p className="lead"> 
              Master’s Student at Teesside University, Software Developer Intern at Yuze. 
              Love coding and cracking challanges, and have a deep passion for Web Development and Data Science.
              </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn custom-primary-button btn-lg px-4 me-md-2">Resume</button>
              <button type="button" className="btn custom-secondary-button btn-lg px-4">LinkedIn</button>
            </div>
          </div>
        </div>
      </div>
    )
}