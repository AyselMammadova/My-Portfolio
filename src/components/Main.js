import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';

function Main() {
    return (
        <main>
            <div className="container">
                <h1>Welcome to my Portfolio</h1>
                <div className="row justify-content-center info-wrap">
                    <div className="col-xl-8 col-lg-9">
                        <div className="row align-items-center">
                            <div className="col-md-8 order-2 order-md-1 mt-4 mt-md-0">
                                <div className="info text-center text-md-start">
                                    <h3>Aysel Mammadova</h3>

                                    <p className="mb-0">Hi, I'm Front-End Developer. I have more than 6 years of experience in this field. My goal is to constantly improve myself and increase my experience in real terms. I am eager to learn and in love with my field.</p>
                                    
                                    <div className="contact-info d-md-flex align-items-md-center">
                                        Contact me:
                                        <ul className="social-media justify-content-center justify-content-md-start mt-3 mt-md-0">
                                            <li className='ms-0 ms-md-4'>
                                                <a href="https://github.com/AyselMammadova" rel="noreferrer" target="_blank">
                                                    <FontAwesomeIcon icon={faGithub} />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com/in/ayselmammadova/" rel="noreferrer" target="_blank">
                                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="mailto: ayselmammadova9317@gmail.com">
                                                    <FontAwesomeIcon icon={faEnvelope} />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="tel: +994508099175">
                                                    <FontAwesomeIcon icon={faPhone} />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Aysel-Mammadova-Resume.pdf" target="_blank" rel="noopener noreferrer">
                                                    CV
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 order-1 order-md-2">
                                <div className="img-wrap mx-auto me-md-0">
                                    <img src="me.jpg" alt="me" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main> 
    )
}

export default Main
