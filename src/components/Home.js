import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";


const Home = () => {
    return (
        <div className="App">
            <div className="container-fluid">
                <div className="row">
                <div className="headersection col-lg-12 col-sm-12">
                    <div className="container mt-5 mb-5">
                        <div className="row mt-5">
                            <div className="col-lg-6 mt-5 col-sm-12">
                                <h1 className="text-primary hearder-title mt-5">Opening A checking Account</h1>
                                <h5 className="text-warning mt-3 hearder-text">The Intercontinentals Advantage banking helps you stay sync with your needs today - tommorrow</h5>
                                <NavLink to="/Services" className="btn btn-success mt-3">Get Started</NavLink>
                            </div>
                            <div className="col-lg-4 mt-5 col-sm-12 bg-white ml-auto">
                                <form className="mt-5 mb-5">
                                    <h3 className="text-white text-center text-primary shadow-text login-text mb-4">Login here</h3>
                                    <div class="form-group">
                                        <input type="email" className="form-control w-75 mx-auto" id="email" placeholder="Online ID"/>
                                    </div>
                                    <div class="form-group">
                                        <input type="password" className="form-control w-75 mx-auto" id="pwd" placeholder="Passcode"/>
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-4 ml-5">Submit</button>
                                    
                                </form>
                            </div>
                        </div>
                        </div>
                </div>
                </div>
            </div>
            <div className="container mb-5">
                <div className="row mt-3 bg-secondary1">
                    <div className="col-lg-4 col-sm-12 mt-5 mb-5 text-center border-right">
                    <i class="fas fa-piggy-bank fa-5x mt-3 text-success"></i>
                        <h5 className="text-secondary text-center mt-3">About Intercontinentals</h5>
                        <p className="text-center mt-3 mb-3">state a brief into about your <br/>bank on the section then use<br/> the login box.
                        </p>
                        <button to="/About" className="btn btn-primary mt-3">Read more</button>
                    </div>
                    <div className="col-lg-4 col-sm-12 mt-5 mb-5  text-center border-right">
                    <i class="fas fa-credit-card fa-5x text-warning mt-3"></i>
                        <h5 className="text-secondary text-center mt-3">Credit Cards</h5>
                        <p className="text-center mt-3 mb-3">state a brief into about your <br/>bank on the section then use<br/> the login box.
                        </p>
                        <button to="/About" className="btn btn-primary mt-3">Read more</button>
                    </div>
                    <div className="col-lg-4 col-sm-12 mt-5 mb-5  text-center">
                    <i class="fas fa-snowman  fa-5x mt-3 text-primary"></i>
                        <h5 className="text-secondary text-center mt-3">About Intercontinentals</h5>
                        <p className="text-center mt-3 mb-3">state a brief into about your <br/>bank on the section then use<br/> the login box.
                        </p>
                        <button to="/About" className="btn btn-primary mt-3">Read more</button>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row mt-5 bg-primary">
                    <div className="container mt-5 mb-5">
                        <div className="row mx-auto">
                    <div className=" col-lg-5 col-sm-12 mb-5 mx-auto">
                        <h3 className="text-white new-mobile mt-5">Need an Online account, get in-touch with us today</h3>
                    </div>
                    <div className=" col-lg-5 col-sm-12 mb-5">
                        <form className="inline">
                            <h5 className="text-white">Need an Account??</h5>
                            <input type="email" className="form-control w-75" placeholder="Email"/><br/>
                            <textarea type="text" className="form-control w-75" placeholder="message"></textarea><br/>
                            <button type="submit" className="btn-success btn-lg border-0">Submit</button>
                        </form>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fliud bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 mt-3">
                            <p className="text-info mt-2">Online Banking Service Agreement</p>
                            <p className="text-secondary online-info">Investing in securities involves risks, and there is always the potential of losing money when you invest in securities. You should review any planned financial transactions that may have tax or legal implications with your personal tax or legal advisor.<br/><br/> Securities products are provided by Merrill Lynch, Pierce, Fenner & Smith Incorporated (also referred to as "MLPF&S", or "Merrill"), a registered broker-dealer, Member SIPC, and a wholly-owned subsidiary of The Intercontinentals Bank Corporation ("THIB Corp."). MLPF&S makes available certain investment products sponsored, managed, distributed or provided by companies that are affiliates of THIB Corp.<br/><br/>The Intercontinentals Private Bank operates through The Intercontinentals, N.A., and other subsidiaries of THIB Corp. Trust and fiduciary services are provided by The Intercontinentals Private Bank, a division of The Intercontinentals, N.A., Member FDIC, and a wholly-owned subsidiary of THIB Corp.<br/><br/>Insurance Products are offered through Merrill Lynch Life Agency Inc. (MLLA) and/or The Intercontinentals Insurance Services, Inc., both of which are licensed insurance agencies and wholly-owned subsidiaries of The Intercontinentals Corporation.<br/><br/>Banking, credit card, automobile loans, mortgage and home equity products are provided by The Intercontinentals, N.A. and affiliated banks, Members FDIC and wholly owned subsidiaries of The Intercontinentals Corporation. Credit and collateral are subject to approval. Terms and conditions apply. This is not a commitment to lend. Programs, rates, terms and conditions are subject to change without notice.</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="border-top"></p>
            <p className="copyright text-center"> ©2019 <span className="text-warning">The</span><strong className="text-info">Intercontinentals</strong> ALL RIGHT RESERVED</p>
        </div>
    );
};


export default Home;