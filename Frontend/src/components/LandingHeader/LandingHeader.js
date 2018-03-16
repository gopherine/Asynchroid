import React from 'react';
import "./LandingHeader.css";
import GoLightBulb from 'react-icons/lib/go/light-bulb';
import TiEdit from 'react-icons/lib/ti/edit';
import FaPaintBrush from 'react-icons/lib/fa/paint-brush';
import FaCode from 'react-icons/lib/fa/code';
import FaCloudUpload from 'react-icons/lib/fa/cloud-upload';
import GoCircuitBoard from 'react-icons/lib/go/circuit-board';
import FaBook from 'react-icons/lib/fa/book';
import FaVideoCamera from 'react-icons/lib/fa/video-camera';
import MdChat from 'react-icons/lib/md/chat';
import { Container, Row, Col } from 'reactstrap';

const LandingHeader= (props) =>{
    return(
        <div style={{marginBottom:100}}>
            <div className="header">
                <div className="info">
                    <h1 className="headertext">ASYNCHROID</h1>
                    <h4 className="headertextsub">LEARN. GAIN. SHARE</h4>
                </div>
            </div>
            <section className="content">
                    <h1 className="contentHeader">I am a Nomad Developer</h1>
                   <p>Let's be honest, you want some one to take care of your work and I want to take care of someones's work.
                        Then why not meet up, talk about it and start to build up on it no matter which
                        stage of work you are in I am there to help you. You wont regret if you really want
                        clean ,amazing ,readable and mainatainable code.
                   </p>
                   <div className="freelanceicons">
                   <Container>
                        <Row>
                            <Col>
                                <GoLightBulb style={{color:"orange"}}/>
                                <h4>IDEA</h4>
                            </Col>
                            <Col>
                                <TiEdit style={{color:"#0288D1"}}/>
                                <h4>DOCUMENT</h4>
                            </Col>
                            <Col>
                                <FaPaintBrush style={{color:"pink"}}/>
                                <h4>DESIGN</h4>
                            </Col>
                            <Col>
                                <FaCode style={{color:"#009688"}}/>
                                <h4>DEVELOP</h4>
                            </Col>
                            <Col>
                                <FaCloudUpload style={{color:"lightblue"}}/>
                                <h4>DEPLOY</h4>
                            </Col>
                            <Col>
                                <GoCircuitBoard style={{color:"#EF5350"}}/>
                                <h4>MAINTAIN</h4>
                            </Col>
                        </Row>
                    </Container>
                    </div>
             </section>
             <section className="content">
                    <h1 className="contentHeader">What else do I do? </h1>
                    <p>Not everyone was born genius and its never late to become one.
                        If you are new to programming, If you fear problem solving.Do not fear
                        , I have your back. I will guide you throughout the process and make 
                        you confident enough to self learn things on your own.
                    </p>
                  
                   <div className="freelanceicons">
                   <Container>
                        <Row>
                            <Col>
                                <FaBook style={{color:"#9E9E9E"}}/>
                                <h4>TUTORIALS</h4>
                            </Col>
                            <Col>
                                <FaVideoCamera style={{color:"#9E9E9E"}}/>
                                <h4>VIDEOS</h4>
                            </Col>
                            <Col>
                                <MdChat style={{color:"#9E9E9E"}}/>
                                <h4>BLOGS</h4>
                            </Col>
                           
                        </Row>
                    </Container>
                    </div>
             </section>
        </div>
    )
}

export default LandingHeader;