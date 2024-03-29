import { Flex, Row, Col } from 'antd';
import '@fortawesome/fontawesome-free/css/all.css';


import './style.css'

function Footer () {
    return (
        <>
            <div className='footer'>
                    <Row className='footer-row'> 
                        <Col className='social-links'>
                            <a href="https://github.com/jennysiu">
                            <i className="fa-brands fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/jenny-siu-534576156/">
                            <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a href="mailto:jenny.siu79@gmail.com">
                            <i className="fa-solid fa-envelope"></i>
                            </a>
                        </Col>

                        <Col className='team-names'>
                        <a href="https://github.com/jennysiu" className="team-link">Jenny Siu</a>
                        <a href="https://github.com/adriannaderkacz" className="team-link">Adrianna Derkacz</a>
                        <a href="https://github.com/ahmed-ibrahim20560" className="team-link">Ahmed Ibrahim</a>
                        <a href="https://github.com/DavouJ" className="team-link">Davou Jobi</a>
                        <a href="https://github.com/kauralane" className="team-link">Laura Kane</a>
                        <p className="copy-right-text">2024 © All Rights Reserved.</p>
                        </Col>
                    </Row>
            </div>
        </>
    );
}

export default Footer;