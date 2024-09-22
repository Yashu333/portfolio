    import TimelineDot from "./timeline/TimelineDot"
    import TimelineBar from "./timeline/TimelineBar"

    export default function WorkExperience() {

        return (
            <div className="container d-flex justify-content-center">
                <div className="flex-column gap-3">
                    <TimelineDot />
                    <TimelineBar />
                    <TimelineDot />
                </div>
            </div>

        )
    }