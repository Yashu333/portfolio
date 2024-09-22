import EducationCard from "./EducationCard";

export default function Education() {
    return (
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row align-items-center g-5 py-5">
                <div className="col-lg-3">
                    <h1 className="display-6 fw-bold text-body-emphasis lh-1 mb-3">Education</h1>
                </div>
                <div className="col-12  col-lg-9 ps-6">
                    <div className="row g-3">
                        <div className=" col-12 col-md-6"> 
                            <EducationCard
                                cardHeader={"Masters"}
                                cardTitle = {"Teesside University"}
                                cardText={"Got distinction and 80% over all"}
                            />
                        </div>
                        <div className="col-12 col-md-6"> 
                            <EducationCard
                                cardHeader={"Bachelors"}
                                cardTitle = {"RGUKT RK Valley"}
                                cardText={"Got distinction and 89.5% over all"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
