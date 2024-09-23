import TimelineDot from "./timeline/TimelineDot";
import TimelineBar from "./timeline/TimelineBar";
import WorkExperienceCard from "./WorkExperienceCard";

export default function WorkExperience() {
    return (
        <>
        <div className="container d-flex justify-content-center">
            <div className="d-flex flex-column align-items-center mx-3">
                <div className="d-flex flex-row align-items-center" style={{marginRight: "295px"}}>
                    <WorkExperienceCard />
                    <TimelineDot />
                </div>
                <TimelineBar />
                <div className="d-flex flex-row align-items-center" style={{marginLeft: "295px"}}>
                    <TimelineDot />
                    <WorkExperienceCard /> 
                </div>
                <TimelineBar />
                <div className="d-flex flex-row align-items-center" style={{marginRight: "295px"}}>
                    <WorkExperienceCard />
                    <TimelineDot />
                </div>
            </div>
        </div>
        </>
    );
}



