import React from 'react';
import styles from './Home.module.css';

import bg from '../../img/bg.jpg';
import iwash from '../../img/i.jpg';
import share from '../../img/s.jpg';
import get from '../../img/g.jpg';
import gew from '../../img/gew.png';

import bootstrap from '../../img/skills/bootstrap.png';
import flask from '../../img/skills/flask.png';
import google from '../../img/skills/google.jpg';
import html from '../../img/skills/html.png';
import jquery from '../../img/skills/jquery.png';
import js from '../../img/skills/js.png';
import linux from '../../img/skills/linux.png';
import mysql from '../../img/skills/mysql.png';
import node from '../../img/skills/node.png';
import paypal from '../../img/skills/paypal.png';
import php from '../../img/skills/php.png';
import phpmyadmin from '../../img/skills/phpmyadmin.png';
import python from '../../img/skills/python.png';
import raspberry from '../../img/skills/raspberry.png';
import react from '../../img/skills/react.png';
import ubuntu from '../../img/skills/ubuntu.png';
import wordpress from '../../img/skills/wordpress.png';



const Home = () => {
    return (
        <div className="container-fluid">
            <div className="row mt-5">
                <div className="col-sm-12 col-md-3 col-lg-3" >
                    <h4 className="ml-4"><i class="fas fa-code"></i> SAMIR BENZADA</h4>
                    <div className={["nav flex-column nav-pills", styles.leftNav].join(' ')} id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                        <a id="v-pills-project-tab" data-toggle="pill" href="#v-pills-project" role="tab" aria-controls="v-pills-messages" aria-selected="false">Project</a>
                        <a id="v-pills-skills-tab" data-toggle="pill" href="#v-pills-skills" role="tab" aria-controls="v-pills-profile" aria-selected="false">Skills</a>
                        <a id="v-pills-about-tab" data-toggle="pill" href="#v-pills-about" role="tab" aria-controls="v-pills-settings" aria-selected="false">About</a>
                        <a id="v-pills-contact-tab" data-toggle="pill" href="#v-pills-contact" role="tab" aria-controls="v-pills-settings" aria-selected="false">Contact</a>
                        <a id="v-pills-resume-tab" data-toggle="pill" href="#v-pills-resume" role="tab" aria-controls="v-pills-resume" aria-selected="false">Resume</a>
                    </div>
                </div>
                <div className="col-sm-12 col-md-9 col-lg-9">
                    <div className="tab-content" id="v-pills-tabContent">

                        <div className="tab-pane fade show active text-center" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <img src={bg} alt="bg" width="80%" />
                        </div>

                        <div className="tab-pane fade" id="v-pills-project" role="tabpanel" aria-labelledby="v-pills-project-tab">
                            <div className="row">

                                <div className="col-sm-12 col-md-4 col-lg-4">
                                    <a href="https://iwash-react.herokuapp.com/">
                                        <img src={iwash} alt="iwash" width="100%" min-height="100%" />
                                        <p className="text-center">iWash</p>
                                    </a>
                                </div>

                                <div className="col-sm-12 col-md-4 col-lg-4">
                                    <a href="https://sharesensation.herokuapp.com/">
                                        <img src={share} alt="share" width="100%" height="200px" />
                                        <p className="text-center">Sharesensation</p>
                                    </a>
                                </div>

                                <div className="col-sm-12 col-md-4 col-lg-4">
                                    <a href="https://get-details.herokuapp.com/">
                                        <img src={get} alt="get" width="100%" height="200px" />
                                        <p className="text-center">Get-Details</p>
                                    </a>
                                </div>

                                <div className="col-sm-12 col-md-4 col-lg-4">
                                    <a href="https://gewjots.herokuapp.com/">
                                        <img src={gew} alt="gew" width="100%" height="200px" />
                                        <p className="text-center">GewJots</p>
                                    </a>
                                </div>
                                
                            </div>
                        </div>

                        <div className="tab-pane fade" id="v-pills-skills" role="tabpanel" aria-labelledby="v-pills-skills-tab">
                            <div className="row">
                                <div className="col-2">
                                    <img src={html} alt="html" width="100%"/>
                                </div>
                                <div className="col-3">
                                    <img src={bootstrap} alt="bootstrap" width="100%" />
                                </div>
                                <div className="col-2">
                                    <img src={flask} alt="flask" width="100%"/>
                                </div>
                                <div className="col-2">
                                    <img src={google} alt="google" width="100%"/>
                                </div>
                                <div className="col-2">
                                    <img src={js} alt="js" width="100%"/>
                                </div>
                                <div className="col-2">
                                    <img src={mysql} alt="mysql" width="100%"/>
                                </div>
                                <div className="col-2">
                                    <img src={paypal} alt="paypal" width="100%"/>
                                </div>
                                <div className="col-2">
                                    <img src={python} alt="python" width="100%"/>
                                </div>
                                <div className="col-2">
                                    <img src={raspberry} alt="raspberry" width="100%"/>
                                </div>
                                <div className="col-2">
                                    <img src={react} alt="react" width="100%"/>
                                </div>
                                <div className="col-2">
                                    <img src={jquery} alt="jquery" width="100%"/>
                                </div>
                                <div className="col-2">
                                    <img src={linux} alt="linux" width="100%"/>
                                </div>
                                <div className="col-2">
                                    <img src={node} alt="node" width="100%"/>
                                </div>
                                <div className="col-2">
                                    <img src={php} alt="php" width="100%"/>
                                </div>
                                <div className="col-2">
                                    <img src={phpmyadmin} alt="phpmyadmin" width="100%"/>
                                </div>
                                <div className="col-2">
                                    <img src={ubuntu} alt="ubuntu" width="100%"/>
                                </div>
                                <div className="col-2">
                                    <img src={wordpress} alt="wordpress" width="100%"/>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="v-pills-about" role="tabpanel" aria-labelledby="v-pills-about-tab">
                        Just once I'd like to eat dinner with a celebrity who isn't bound and gagged. I haven't felt much of anything since my guinea pig died. And so we say goodbye to our beloved pet, Nibbler, who's gone to a place where I, too, hope one day to go. The toilet.
                        </div>

                        <div className="tab-pane fade" id="v-pills-contact" role="tabpanel" aria-labelledby="v-pills-contact-tab">
                            <div className="text-center my-5">
                                <h4>Contact me</h4>
                            </div>


                            <div className={styles.form}>
                                <input type="text" name="name" placeholder="Full Name *" />
                                <input type="email" name="email" placeholder="Email *" />
                                <select name="subject" >
                                    <option >select subject *</option>
                                    <option value="Technical support" >Technical support</option>
                                    <option value="Reservation" >Reservation</option>
                                    <option value="Press" >Press</option>
                                    <option value="Other.." >Other..</option>
                            </select>
                                <textarea name="message" id="message" placeholder="Enter Your Message Here..."></textarea>
                                <button className={styles.inputSubmit} >Send Your Message</button>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="v-pills-resume" role="tabpanel" aria-labelledby="v-pills-resume-tab">
                        resume  Just once I'd like to eat dinner with a celebrity who isn't bound and gagged. I haven't felt much of anything since my guinea pig died. And so we say goodbye to our beloved pet, Nibbler, who's gone to a place where I, too, hope one day to go. The toilet.
                        </div>
                    </div>



                    
                </div>
            </div>
        </div>
    );
};

export default Home;
