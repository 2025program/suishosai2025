"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import './HamburgerMenu.css';

const HamburgerMenu: React.FC = () => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isActive ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isActive]);

    const toggleMenu = () => setIsActive(!isActive);

    return (
        <div className="fusion-container">
            <nav className="fusion-nav">
                <div className={"fusion-main" + (isActive ? " fusion-active" : "")}>
                    <div className="fusion-main-inner">
                        <div className={"fusion-left" + (isActive ? " fusion-active" : "")} onClick={toggleMenu}>
                            <Image
                                className="fusion-logo"
                                src="/welcome/logopc.png"
                                alt="logo"
                                width={594}
                                height={197}
                                loading="eager"
                            />
                        </div>
                        <div className={"fusion-right" + (isActive ? " fusion-active" : "")}>
                            <div className="fusion-right-inner">
                                <div className="fusion-bg fusion-bg-one"></div>
                                <div className="fusion-bg fusion-bg-two"></div>
                                <div className="fusion-bg fusion-bg-three"></div>
                                <div className="fusion-bg fusion-bg-four"></div>
                                <div className="fusion-bg fusion-bg-five"></div>
                                <ul className="fusion-list">
                                    <li className="fusion-item">
                                        <a href="/">TOP</a>
                                    </li>
                                    <li className="fusion-item">
                                        <a href="/map">MAP</a>
                                    </li>
                                    <li className="fusion-item">
                                        <a href="/event">EVENT</a>
                                    </li>
                                    <li className="fusion-item">
                                        <a href="/timetable">TIMETABLE</a>
                                    </li>
                                    <li className="fusion-item">
                                        <a href="/about">ABOUT</a>
                                    </li>
                                    <li className="fusion-item">
                                        <a href="/attention">RULE</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"fusion-button" + (isActive ? " fusion-active" : "")} onClick={toggleMenu}>
                    <div className="fusion-button-inner">
                        <span className="fusion-bar-top"></span>
                        <span className="fusion-bar-bottom"></span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default HamburgerMenu;
