import "./css/clients.css";

const Clients = () => {
    const cards = [
        { id: 1, image: "./assets/images/cl1.png" },
        { id: 2, image: "./assets/images/cl2.png" },
        { id: 3, image: "./assets/images/cl3.png" },
        { id: 4, image: "./assets/images/cl4.png" },
        { id: 5, image: "./assets/images/cl5.png" },
        { id: 6, image: "./assets/images/cl6.png" },
        { id: 7, image: "./assets/images/cl7.png" },
        { id: 8, image: "./assets/images/cl8.png" },
        { id: 9, image: "./assets/images/cl9.png" },
        { id: 10, image: "./assets/images/cl10.png" },
        { id: 11, image: "./assets/images/cl11.png" },
        { id: 12, image: "./assets/images/cl12.png" }
    ];
  return (
    <section className="clients relative">
        {/* Start Absolute Images */}
        <div className="line1">
            <img src="./assets/images/Line 7.png" alt="line1" />
        </div>
        <div className="line2">
            <img src="./assets/images/Line 8.png" alt="line2" />
        </div>
        {/* End Absolute Images */}
        <div className="container">
            <h3>OUR CLIENTS</h3>
            <div className="rect">
                <img src="./assets/images/Rectangle 2.png" alt="rect"/>
            </div>
            <div className="cards">
                {
                    cards.map((elem) => {
                        return (
                            <img src={elem.image} alt="card" key={elem.id}/>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Clients