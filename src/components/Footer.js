import React from 'react'
import './Footer.css'
import instagram from '../images/instagram-icon.png'
//import ball from '../images/ball-icon.png'
//import twitter from '../images/twitter-icon.png'
//import youtube from '../images/youtube-icon.png'
import fbbb from '../images/faceboook.png'
import { Link } from 'react-router-dom'


function Footer() {

    return (
        <div className="container-fluid footer-bg">
            <div className="container footer-color">
                <div className="row">

                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                        <h5 className="footer-title">Kontakt</h5>
                        <Link to="/" className="footer-link-style">
                            <p className="item-style">info@trebami.ba</p>
                        </Link>
                        <Link to="/" className="footer-link-style">
                            <p className="item-style">www.trebami.ba</p>
                        </Link>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                        <h5 className="footer-title">O nama</h5>
                        <ul className="list-style item-style">
                            <Link to={`/o-platformi`} className="footer-link-style">
                                <li className="footer-bottom-padd">O platformi</li>
                            </Link>
                            <Link to={`/za-tvrtke`} className="footer-link-style">
                                <li className="footer-bottom-padd">Za tvrtke</li>
                            </Link>
                            <Link to={`/za-korisnike`} className="footer-link-style">
                                <li className="footer-bottom-padd">Za korisnike</li>
                            </Link>
                            {/* <Link to="/" className="footer-link-style">
                                <li className="footer-bottom-padd">Contact Us</li>
                            </Link> */}
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                        <h5 className="footer-title">Podrška</h5>
                        <ul className="list-style item-style">
                            <Link to={`/marketing`} className="footer-link-style">
                                <li className="footer-bottom-padd">Marketing</li>
                            </Link>
                            <Link to={`/uvjeti-koristenja`} className="footer-link-style">
                                <li className="footer-bottom-padd">Uvjeti korištenja</li>
                            </Link>
                            <Link to={`/kontakt`} className="footer-link-style">
                                <li className="footer-bottom-padd">Kontakt</li>
                            </Link>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                        <h5 className="footer-title">Pratite nas</h5>
                        <a href="https://www.instagram.com/trebami.ba" target="_blank">
                            <span className="footer-right-padd item-style">
                                <img className="icons-bg" src={instagram} alt=""></img>
                            </span>
                        </a>
                        <a href="https://www.facebook.com/trebami.ba" target="_blank">
                            <span className="footer-right-padd item-style">
                                <img className="icons-bg fb" src={fbbb} alt=""></img>
                            </span>
                        </a>
                        {/* <Link to="/">
                            <span className="footer-right-padd item-style">
                                <img className="icons-bg" src={twitter} alt=""></img>
                            </span>
                        </Link>
                        <Link to="/">
                            <span className="item-style">
                                <img className="icons-bg" src={youtube} alt=""></img>
                            </span>
                        </Link> */}
                    </div>

                </div>
            </div>
            <hr className="hr"></hr>

            <div className="container ">
                <div className="row copy-right">

                    <div className="">
                        <span className="rights-reserved">© 2021 Sva prava pridržana</span>
                    </div>

                    {/* <div className="col-6">
                        <Link to="/" className="footer-link-style">
                            <span className="privacy-policy">Privacy policy | Terms and conditions</span>
                        </Link>
                    </div> */}

                </div>
            </div>
        </div>


    )
}

export default Footer
