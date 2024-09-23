import TimelineDot from "./timeline/TimelineDot";
import TimelineBar from "./timeline/TimelineBar";
import WorkExperienceCard from "./WorkExperienceCard";

export default function WorkExperience() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 d-flex align-items-center mb-4 mb-md-0 px-4 py-5">
                    <h1 className="display-6 fw-bold text-body-emphasis lh-1 mb-3">Work Experience</h1>
                    </div>
                    <div className="col-md-8">
                        <div className="d-flex flex-column">
                            <div className="d-flex flex-row align-items-center mb-3">
                                <TimelineDot />
                                <WorkExperienceCard
                                    companyName={"Yuze"}
                                    role={"Software Developer"}
                                />
                            </div>
                            <TimelineBar />
                            <div className="d-flex flex-row align-items-center mb-3">
                                <TimelineDot />
                                <WorkExperienceCard
                                    companyName={"Tata Consultancy Services"}
                                    role={"Assistant System Engineer"}
                                />
                            </div>
                            <TimelineBar />
                            <div className="d-flex flex-row align-items-center">
                                <TimelineDot />
                                <WorkExperienceCard
                                    companyName={"Smart Bridge"}
                                    role={"Software Developer Intern"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
