"use clinent";
import React from "react";
import Image from 'next/image'
import Link from "next/link";
import { useState } from "react";
import styles from '@/styles/Home.module.css'

const Header = () => {
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    const [isOpen, setOpen] = useState<boolean>(false);
    const handleMenuOpen = () => {
      setOpen(!isOpen);
    };
    const handleMenuClose = () => {
      setOpen(false);
    };

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
        <div className={styles.for_pc}>
            <a href="http://localhost:3000/">Home</a>
        </div>
        <div className={styles.for_pc}>
            <a href="about/">About</a>
        </div>
        <div className={styles.for_pc}>
            <a href="contents/">Contents</a>
        </div>
        <div className={styles.for_pc}>
            <a href="contact">Contact</a>
        </div>
        <div className={styles.for_pc}>
            <a href="https://twitter.com/omunazotoki" target="_blank">
            <Image src="/logo-white.png" alt="X" width={40} height={40} style={{ width: '80%', height: 'auto' }}/></a>
        </div>
      <nav
        className={
          isOpen
            ? "z-40 bg-blue-100 fixed top-0 right-0 bottom-0 left-0 h-screen flex flex-col"
            : "fixed right-[-100%] md:right-4"
        }
      >
        <ul
          className={
            isOpen
              ? "flex h-screen justify-center items-center flex-col gap-6 text-xl"
              : "block md:flex md:gap-8"
          }
        >
          <li className={styles.for_sp}>
            <Link onClick={handleMenuClose} href="/about">
              About
            </Link>
          </li>
          <li className={styles.for_sp}>
            <Link onClick={handleMenuClose} href="/contents">
              Contents
            </Link>
          </li>
          <li className={styles.for_sp}>
            <Link onClick={handleMenuClose} href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <button className={"z-50 space-y-2 md:hidden"} onClick={handleMenuOpen}>
        <span
          className={
            /* ×についての記述 */
            isOpen
              ? "block w-8 h-0.5 mr-4 bg-gray-600 translate-y-2.5 rotate-45 duration-300"
              : "block w-8 h-0.5 mr-4 bg-gray-600 duration-300"
          }
        />
        <span
          className={
            isOpen ? "block opacity-0 duration-300" : "block w-8 h-0.5 bg-gray-600 duration-300"
          }
        />
        <span
          className={
            isOpen
              ? "block w-8 h-0.5 bg-gray-600 -rotate-45 duration-300"
              : "block w-8 h-0.5 bg-gray-600 duration-300"
          }
        />
      </button>
    </header>
};

export default Header;