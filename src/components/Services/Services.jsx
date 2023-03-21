import "./css/services.css";

const Services = () => {
    const cards = [
        {
            id: 1,
            text: "WEB",
            image: "./assets/images/card1.png"
        },
        {
            id: 2,
            text: "DESIGN",
            image: "./assets/images/card2.png"
        },
        {
            id: 3,
            text: "DEV",
            image: "./assets/images/card3.png"
        },
        {
            id: 4,
            text: "MARKETING",
            image: "./assets/images/card4.png"
        },
        {
            id: 5,
            text: "SEO",
            image: "./assets/images/card5.png"
        },
        {
            id: 6,
            text: "ADVERTISING",
            image: "./assets/images/card6.png"
        }
    ];
  return (
    <section className="services relative">
        <div className="pen">
            <img src="./assets/images/pen.png" alt="pen" />
        </div>
        <div className="container">
            <h3>OUR SERVICES</h3>
            <div className="rect">
                <img src="./assets/images/Rectangle 2.png" alt="rect"/>
            </div>
            <div className="cards">
                {
                    cards.map((card) => {
                        return (
                            <div className="card" key={card.id}>
                                <p>{card.text}</p>
                                <div>
                                    <img src={card.image} alt={card.text} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="boxes flex">
                <div>
                    <img src="./assets/images/box1.png" alt="box" />
                </div>
                <div>
                    <img src="./assets/images/box1.png" alt="box" />
                </div>
                <div>
                    <img src="./assets/images/box1.png" alt="box" />
                </div>
                <div>
                    <img src="./assets/images/box2.png" alt="box" className="active" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services;