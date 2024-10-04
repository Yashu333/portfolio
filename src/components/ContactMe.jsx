import '../app/globals.css'
export default function ContactMe() {

    return (
        <div id="Contact" className="container-fluid">
            <div className="p-5 text-center bg-contact rounded-3">
                <h1 className="text-title">Keep in Touch</h1>
                <p className="col-lg-8 mx-auto fs-5" style={{ color: '#E0C097' }}>
                    Please feel free to send a message to contact me.
                </p>
                <div className="d-inline-flex gap-3">
                    
                    <a href="mailto: saichintakayala4@gmail.com" className="icon-link">
                        <i className="bi bi-envelope-at-fill fs-4"></i>
                    </a>

                    <a href="https://github.com/yashu333" target="_blank" className="icon-link">
                        <i className="bi bi-github fs-4"></i>
                    </a>

                    <a href="https://www.youtube.com/@CodeWithYash333" target="_blank" className="icon-link">
                        <i className="bi bi-youtube fs-4"></i>
                    </a>
                    
                </div>
            </div>
        </div>
    )
}
