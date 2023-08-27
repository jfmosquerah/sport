import React from 'react'
import Nike from "../../images/Nike.jpg"

export const Header = () => {
    return (
        <header>
            <div className="menu">
                <box-icon name="menu"></box-icon>
            </div>
            <a href="#">
                <div className="logo">
                    <img src={Nike} alt=""/>
                </div>
            </a>
            <ul>
                <li>
                    <a href="#">INICIO</a>
                </li>
                <li>
                    <a href="#">PRODUCTOS</a>
                </li>
            </ul>
        </header>
    )
}