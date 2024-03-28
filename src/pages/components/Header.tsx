import React from "react";
import Image from 'next/image'

const Header = () => {
    return <header>
        <div>
            <Image
                src="/logo透過.png"
                alt="Vercel Logo"
                width={150}
                height={50}
                style={{ width: '80%', height: 'auto' }}
            />
        </div>
        <div>
            <a href="http://localhost:3000/">Home</a>
        </div>
        <div>
            <a href="about/">About</a>
        </div>
        <div>
            <a href="contents/">Contents</a>
        </div>
        <div>
            <a href="contact">Contact</a>
        </div>
        <div>
            <a href="https://twitter.com/omunazotoki" target="_blank">
            <Image src="/logo-white.png" alt="X" width={40} height={40} style={{ width: '80%', height: 'auto' }}/></a>
        </div>
    </header>
};

export default Header;