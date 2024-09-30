export default function ContactMe() {

    return (
        <div id="Contact" className="container-fluid">
            <div className="p-5 text-center bg-body-tertiary rounded-3">
                <h1 className="text-body-emphasis">Keep in Touch</h1>
                <p className="col-lg-8 mx-auto fs-5 text-muted">
                    Please feel free to send a message to contact me.
                </p>
                <div className="d-inline-flex gap-3">
                    <i className="bi bi-envelope-at-fill fs-4"></i>
                    <i className="bi bi-github fs-4"></i>
                    <i className="bi bi-linkedin fs-4"></i>
                    <i className="bi bi-youtube fs-4"></i>
                </div>
            </div>
        </div>
    )
}
