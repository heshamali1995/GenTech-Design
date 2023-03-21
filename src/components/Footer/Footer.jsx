import "./css/footer.css";

const Footer = () => {
  return (
    <footer className="relative">
        {/* Start Absolute Images */}
        <div className="group1">
            <img src="./assets/images/footer-group1.png" alt="circles"/>
        </div>
        <div className="group2">
            <img src="./assets/images/footer-group2.png" alt="circles"/>
        </div>
        {/* End Absolute Images */}
        <div className="container">
            <div className="footer-container flex between">
                {/* Footer Logo */}
                <div className="footer-logo relative">
                    <div className="logo">
                        <img src="./assets/images/logo.png" alt="logo"/>
                    </div>
                    <div>
                        <p>&copy; 2023 CAD. All rights reserved</p>
                    </div>
                </div>
                {/* Footer Middle */}
                <div className="footer-mid flex relative">
                    <div>
                        <h4>ORDER WEBSITE</h4>
                        <ul>
                            <li>Framework</li>
                            <li>Online store</li>
                            <li>Business card site</li>
                            <li>Corporate website</li>
                            <li>Landing page</li>
                        </ul>
                    </div>
                    <div>
                        <h4>MARKETING</h4>
                        <ul>
                            <li>Framework</li>
                            <li>Online store</li>
                            <li>Business card site</li>
                            <li>Corporate website</li>
                            <li>Landing page</li>
                        </ul>
                    </div>
                    <div>
                        <h4>SERVICES</h4>
                        <ul>
                            <li>Framework</li>
                            <li>Online store</li>
                            <li>Business card site</li>
                            <li>Corporate website</li>
                            <li>Landing page</li>
                        </ul>
                    </div>
                </div>
                {/* Footer Right Side ( Links ) */}
                <div className="footer-links relative">
                    <h4>OUR CONTACTS</h4>
                    <ul>
                        <li>Schedule:</li>
                        <li>Mon-Fri: 09:00 - 21:00</li>
                        <li>Sat-Sun: 10:00 - 18:00</li>
                    </ul>
                    <div>
                        <p>SOCIAL NETWORKS</p>
                        <div className="flex links">
                            <div>
                                <img src="./assets/images/linkedin.png" alt="linkedin"/>
                            </div>
                            <div>
                                <img src="./assets/images/facebook.png" alt="facebook"/>
                            </div>
                            <div>
                                <img src="./assets/images/instagram.png" alt="instagram"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer