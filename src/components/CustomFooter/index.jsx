import { Flex, Row, Col } from 'antd';
import './style.css'

function Footer () {
    return (
        <>
            <div className='footer'>
                    <Row className='footer-row'> 
                        <Col className='copyright'>
                        <p className="copy-right-text">2024 © All Rights Reserved.</p>
                        </Col>
                        <Col>
                        <a href="https://github.com/jennysiu" className="link">Jenny Siu</a>
                        <a href="https://github.com/adriannaderkacz" className="link">Adrianna Derkacz</a>
                        <a href="https://github.com/ahmed-ibrahim20560" className="link">Ahmed Ibrahim</a>
                        <a href="https://github.com/DavouJ" className="link">Davou Jobi</a>
                        <a href="https://github.com/kauralane" className="link">Laura Kane</a>
                        </Col>
                    </Row>
            </div>
        </>
    );
}

export default Footer;