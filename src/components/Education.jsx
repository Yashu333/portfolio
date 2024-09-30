import EducationCard from "./EducationCard";

export default function Education() {
    return (
        <div id="Education" className="container px-4 py-5">
            <div className="row flex-lg-row align-items-center g-5 py-5">
                <div className="col-lg-3">
                    <h1 className="display-6 fw-bold text-body-emphasis lh-1 mb-3">Education</h1>
                </div>
                <div className="col-12  col-lg-9 ps-6">
                    <div className="row g-3">
                        <div className=" col-12 col-md-6"> 
                            <EducationCard
                                cardHeader={"Master of Science"}
                                cardTitle = {"Teesside University"}
                                cardText={"Major in Computer Science"}
                            />
                        </div>
                        <div className="col-12 col-md-6"> 
                            <EducationCard
                                cardHeader={"Bachelor of Technology"}
                                cardTitle = {"RGUKT RK Valley"}
                                cardText={"Major in Electronics and Communication Engineering"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
