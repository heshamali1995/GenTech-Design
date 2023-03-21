import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import "./css/navbar.css";

const Navbar = ({ setShowSettings }) => {
    // Show Burger Menu
    const [menu, setMenu] = useState(false);
    const handleMenu = () => {
        setMenu(!menu)
    };
    // Show Languages List
    const [toggle, setToggle] = useState(false);
    const showLanguage = () => {
        setToggle(!toggle)
    };
    // Active Language
    const [lang, setLang] = useState({
        targetedLang: "EN",
        items: [
            {id: 1, name: "EN"},
            {id: 2, name: "RU"},
            {id: 3, name: "UK"},
            {id: 4, name: "PL"}
        ]
    });
    const handleActiveLang = (e) => {
        setLang({
            ...lang,
            targetedLang: e.target.innerHTML
        });
    }
    // Active List
    const [active, setActive] = useState({
        activeObject: "About us",
        items: [
            {id: 1, name: "About us"},
            {id: 2, name: "Portfolio"},
            {id: 3, name: "Order site"},
            {id: 4, name: "Design"},
            {id: 5, name: "Services"},
            {id: 6, name: "Contacts"}
        ]
    });
    const handleActiveObject = (e) => {
        setActive({
            ...active,
            activeObject: e.target.innerHTML
        });
        if (active.activeObject === "Services") {
            setShowSettings(true)
        }
    }

    // useEffect to check the active object value
    useEffect(() => {
        if (active.activeObject === "Services") {
            setShowSettings(true)
        }
        else {
            setShowSettings(false)
        }
    }, [active.activeObject]);
  return (
    <nav className="relative">
        <div className="container flex between center">
            <ul className={`burger-menu ${menu ? "show": "hide"}`}>
                {
                    active.items.map((item) => {
                        return (
                            <li key={item.id} onClick={handleActiveObject}
                                className={`${active.activeObject === item.name ? "active" : ""}`}>{item.name}</li>
                        )
                    })
                }
            </ul>
            <img src="./assets/images/logo.png" alt="logo" className="logo" />
            <div className="settings flex relative center">
                <AiOutlineMenu className="burger" onClick={handleMenu}/>
                {/* Lists Section */}
                <ul className="lists flex">
                    {
                        active.items.map((item) => {
                            return (
                                <li key={item.id} onClick={handleActiveObject}
                                className={`${active.activeObject === item.name ? "active" : ""}`}>{item.name}</li>
                            )
                        })
                    }
                </ul>
                {/* Languages Section */}
                <div className="lang flex center" onClick={showLanguage}>
                    <ul>
                        {
                            lang.items.map((item) => {
                                return (
                                    <li key={item.id} onClick={handleActiveLang}
                                    className={`${lang.targetedLang === item.name ? "active" : ""} ${toggle ? "show": ""}`}>
                                        {item.name}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div>
                        <img src="./assets/images/arrow.png" alt="arrow"/>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;