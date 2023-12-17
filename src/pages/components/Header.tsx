import React from "react";

const Header = () => {
    return <header>
        <div className="logo">
            <h3>大阪公立大学謎解きイベント制作団体 F-enigma</h3>
        </div>

        <nav>
            <ul>
                <li>
                    <a href="http://localhost:3000/">Home</a>
                </li>
                <li>
                    <a href="about/">About</a>
                </li>
                <li>
                    <a href="#">Content</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
    </header>
};

export default Header;