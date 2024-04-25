import React from "react";
import Image from 'next/image'

const Header = () => {
    return <header>
        <Image
            src="/logo透過png.png"
            alt="Vercel Logo"
            width={216}
            height={72}
            priority
        />

        <nav>
            <ul>
                <li>
                    <a href="http://localhost:3000/">Home</a>
                </li>
                <li>
                    <a href="about/">About</a>
                </li>
                <li>
                    <a href="contents/">Contents</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
                <li>
                    <a href="https://twitter.com/" target="_blank"><Image src="/logo-white.png" alt="X" width={40} height={40}/></a>
                </li>
            </ul>
        </nav>
    </header>
};

export default Header;