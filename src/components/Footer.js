import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footer-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-12">
                                <h4 className="footer-heading">ABOUT US</h4>
                                <ul>
                                    <li>
                                        <Link to='/'>
                                            Company
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/'>
                                            Careers
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/PrivacyPolicy'>
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/'>
                                            Cookies Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/TurmOfUse'>
                                            Terms of Use
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <h4 className="footer-heading">NEWSLETTER</h4>
                                <div className="col-lg-9 col-md-12 col-12 p-0">
                                    {/* <form className="Newsleter-form">
                                        <input className="form-control" placeholder="Enter email or newsletter" />
                                        <span className="nesletter-submit">Go</span>
                                    </form> */}
                                    <div className="social-media">
                                        <a href="https://www.facebook.com/androidaura" className="social-icon">
                                            <i class="fab fa-facebook"></i>
                                        </a>
                                        <a href="https://twitter.com/Androidaura1" className="social-icon">
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                        <a href="https://www.instagram.com/androidaura/" className="social-icon">
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <h4 className="footer-heading">CONTACT US</h4>
                                <p className="foo">
                                    Contact us on Social Media If you have any queries. We will happy to assist you.
                                </p>
                            </div>
                        </div>
                        <hr className="footer-hr" />
                        <div className="copyright">
                            <p>
                                2021 &copy; All Rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
