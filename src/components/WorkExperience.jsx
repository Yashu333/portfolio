import TimelineDot from "./timeline/TimelineDot";
import TimelineBar from "./timeline/TimelineBar";
import WorkExperienceCard from "./WorkExperienceCard";

export default function WorkExperience() {
    return (
        <>
            <div id="Experience" className="container">
                <div className="row">
                    <div className="col-md-4 d-flex align-items-center mb-4 mb-md-0 px-4 py-5">
                    <h1 className="display-6 fw-bold text-body-emphasis lh-1 mb-3 titleColor" >Work Experience</h1>
                    </div>
                    <div className="col-md-8">
                        <div className="d-flex flex-column">
                            <div className="d-flex flex-row align-items-center mb-3">
                                <TimelineDot />
                                <WorkExperienceCard
                                    companyName={"Yuze | Darlington, UK"}
                                    role={"Software Developer"}
                                    experience = {"01/2024 - Present"}
                                />
                            </div>
                            <TimelineBar />
                            <div className="d-flex flex-row align-items-center mb-3">
                                <TimelineDot />
                                <WorkExperienceCard
                                    role={"Assistant System Engineer"}
                                    companyName={"TCS | Bangalore, India"}
                                    experience={"10/2021 - 08/2022"}
                                />
                            </div>
                            <TimelineBar />
                            <div className="d-flex flex-row align-items-center">
                                <TimelineDot />
                                <WorkExperienceCard
                                    companyName={"Smart Bridge | India"}
                                    role={"Software Developer Intern"}
                                    experience={"05/2020 - 06/2020"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
