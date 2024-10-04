import '../app/globals.css'

export default function WorkExperienceCard({companyName, role, experience }) {
    return (
        <div className="work-experience-card mx-5 col-sm-6 col-md-10">
            <div className="card-body">
                <h5 className="card-title">{role}</h5>
                <div className=" d-flex flex-row justify-content-between">
                <p className="card-text">{companyName}</p>
                <p className="card-text fw-semibold">{experience}</p>
                </div>
                
            </div>
        </div>
    );
}
