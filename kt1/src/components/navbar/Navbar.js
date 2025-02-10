import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/about">О нас</Link></li>
                <li><Link to="/services">Услуги</Link></li>
                <li><Link to="/rent">Аренда</Link></li>
            </ul>
        </nav>
    )
}