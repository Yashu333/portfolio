
import '../app/globals.css'
export default function EducationCard({cardHeader,cardTitle, cardText}) {

    return (
        <div className="education-card card">
            <div className="card-header">
                {cardHeader}
            </div>
            <div className="card-body">
                <h5 className="card-title">{cardTitle}</h5>
                <p className="card-text">{cardText}</p>
            </div>
        </div>
    )
}