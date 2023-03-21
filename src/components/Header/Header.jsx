import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import "./css/header.css";

const Header = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [list, setList] = useState({
    activeList: "Calculator for the site",
    items: [
        {id: 1, name: "Calculator for the site"},
        {id: 2, name: "Integration"},
        {id: 3, name: "Site testing"},
        {id: 4, name: "Site layout"},
        {id: 5, name: "Parsing goods"},
        {id: 6, name: "Articles"},
        {id: 7, name: "Website improvement"}
    ]
});
const handleClick = (e) => {
  setList({
    ...list,
    activeList: e.target.innerHTML
  })
};
  return (
    <header className="relative">
      <Navbar setShowSettings={setShowSettings} />
      {/* Start Position Absoulte Divs */}
      <div className="group1">
        <img src="./assets/images/group1.png" alt="group" />
      </div>
      <div className="group2">
        <img src="./assets/images/group2.png" alt="group" />
      </div>
      <div className="serv-settings" style={{ "display": showSettings ? "block" : "none" }}>
        <ul>
          {
            list.items.map((item) => {
              return (
                <li key={item.id} onClick={handleClick} className={`${list.activeList === item.name ? "active" : ""}`}>{item.name}</li>
              )
            })
          }
        </ul>
      </div>
        {/* End Position Absoulte Divs */}
        
      <div className="header-container container flex">
        {/* Header Text */}
        <div className="header-text relative">
          <h1>WEB DEVELOPMENT <br />STUDIO</h1>
          <div className="header-info">
            <div className="boxes">
              <div className="box1 flex center">
                <p>QUESTION</p>
              </div>
              <div className="box2 flex center">
                <p>PRICE</p>
              </div>
              <div className="box3 flex center">
                <p>DISCOUNTS</p>
              </div>
              <div className="box4 flex center">
                <p>GUARANTEES</p>
              </div>
              <div className="box5 flex center">
                <p>GUARANTEES</p>
              </div>
            </div>
            <div className="text relative">
              <p className="relative">“ We are a experienced team of professionals for whom website development is not just a job, but a favorite thing. Each project is a separate story that we live with our client. We delve into the roots of the company, study its pros and cons.”</p>
              <div className="comma">
                <img src="./assets/images/Comma 1.png" alt="group" />
              </div>
            </div>
          </div>
          <div className="develop relative">
            <h2>WEBSITE <span>DEVELOPMENT</span></h2>
            <div className="develop-button">
              <button className="btn">TO GET THE CONSULTATION</button>
            </div>
          </div>
        </div>
        {/* Header Image */}
        <div className="header-img">
          <div className="img-container">
            <img src="./assets/images/Computer 1.png" alt="computer" />
          </div>
          <div className="img-text flex center relative">
            <h2 className="text-design relative">WEBSITE <span>DESIGN</span></h2>
            <div>
              <button className="btn">TO GET THE CONSULTATION</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;