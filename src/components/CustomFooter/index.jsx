import { Flex, Row, Col } from 'antd';
import './style.css'

function Footer () {
    return (
        <>
            <div className='footer'>
                <Flex align="center" justify="center">
                    {/* <Row> */}
                    {/* </Row> */}
                        </Flex>
                        <Flex align="center" justify="center">
                    <Row>
                        <Col>
                        <a href="https://github.com/adriannaderkacz" className="link">Adrianna Derkacz</a>
                        <a href="https://github.com/ahmed-ibrahim20560" className="link">Ahmed Ibrahim</a>
                        <a href="https://github.com/DavouJ" className="link">Davou Jobi</a>
                        <a href="https://github.com/kauralane" className="link">Laura Kane</a>
                        <a href="https://github.com/jennysiu" className="link">Jenny Siu</a>
                        </Col>
                        <Col>
                        <p className="copy-right-text">2024 © All Rights Reserved.</p>
                        </Col>
                    </Row>
                </Flex >
            </div>
        </>
    );
}

export default Footer;