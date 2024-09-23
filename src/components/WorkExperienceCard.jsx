
export default function WorkExperienceCard({companyName, role }) {
    return (
        <div className="card mx-5 col-sm-6 col-md-10">
            <div className="card-body">
                <h5 className="card-title">{companyName}</h5>
                <p className="card-text">{role}</p>
            </div>
        </div>
    );
}
