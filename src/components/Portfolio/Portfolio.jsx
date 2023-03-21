import "./css/portfolio.css";

const Portfolio = () => {
    const cards = [
        {
            id: 1,
            image: "./assets/images/port1.png"
        },
        {
            id: 2,
            image: "./assets/images/port2.png"
        },
        {
            id: 3,
            image: "./assets/images/port3.png"
        },
        {
            id: 4,
            image: "./assets/images/port4.png"
        },
        {
            id: 5,
            image: "./assets/images/port5.png"
        },
        {
            id: 6,
            image: "./assets/images/port6.png"
        }
    ]
  return (
    <section className="portfolio relative">
        <div className="effects">
            <img src="./assets/images/Effects.png" alt="effects" />
        </div>
        <div className="container">
            <h3>OUR PORTFOLIO</h3>
            <div className="rect">
                <img src="./assets/images/Rectangle 2.png" alt="rect"/>
            </div>
            <div className="cards relative">
                {
                    cards.map((elem) => {
                        return (
                            <div className="card" key={elem.id}>
                                <img src={elem.image} alt="card"/>
                            </div>
                        )
                    })
                }
            </div>
            <button className="btn relative">TO GET THE CONSULTATION</button>
        </div>
    </section>
  )
}

export default Portfolio;