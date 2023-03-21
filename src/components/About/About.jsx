import "./css/about.css";

const About = () => {
  return (
    <section className="about relative">
        {/* Start Absolute Divs */}
        <img src="./assets/images/Line 9.png" alt="line" className="line9"/>
        <div className="arrow">
            <img src="./assets/images/arrow-group.png" alt="arrow"/>
        </div>
        {/* End Absolute Divs */}
        <div className="container relative">
            <div className="line1">
                <img src="./assets/images/line1.png" alt="line"/>
            </div>
            <div className="line2">
                <img src="./assets/images/line1.png" alt="line"/>
            </div>
            <div className="line3">
                <img src="./assets/images/line2.png" alt="line"/>
            </div>
            <div className="line4">
                <img src="./assets/images/line2.png" alt="line"/>
            </div>
            <h3>WHY WE</h3>
            <div className="rect">
                <img src="./assets/images/Rectangle 2.png" alt="rect"/>
            </div>
            <p>We are a experienced team of professionals for whom website development is not just a job, but a favorite thing. Each project is a separate story that we live with our client. We delve into the roots of the company, study its pros and cons. And only after that we begin to create what is really necessary for a successful existence.</p>
            <div className="cards">
                <div className="card flex center">
                    <div>
                        <img src="./assets/images/client1.png" alt="client"/>
                    </div>
                    <div>
                        <p>We are a experienced team of professionals for whom website development is not just a job, but a favorite thing.</p>
                    </div>
                </div>
                <div className="card flex center">
                    <div>
                        <img src="./assets/images/client2.png" alt="client"/>
                    </div>
                    <div>
                        <p>We are a experienced team of professionals for whom website development is not just a job, but a favorite thing.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About;