"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { getCookieConsent, getCookieValue, setSiteCookie } from '@/utils/cookieManager';
import './HamburgerMenu.css';

const SIDEBAR_COOKIE_MAX_AGE = 86400; // 例: 1日分の秒数

const HamburgerMenu: React.FC = () => {
    const [isActive, setIsActive] = useState(false);
    const [isMapDropdownOpen, setIsMapDropdownOpen] = useState(false);
    const [isEventDropdownOpen, setIsEventDropdownOpen] = useState(false);

    useEffect(() => {
        const consent = getCookieConsent();
        if (!consent) return;

        const mapVal = getCookieValue('collapsible_map');
        if (mapVal !== null) {
            setIsMapDropdownOpen(mapVal === 'true');
        }

        const eventVal = getCookieValue('collapsible_event');
        if (eventVal !== null) {
            setIsEventDropdownOpen(eventVal === 'true');
        }
    }, []);

    useEffect(() => {
        document.body.style.overflow = isActive ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isActive]);

    const toggleMenu = () => setIsActive(!isActive);

    const handleMapDropdownChange = (value: boolean) => {
        setIsMapDropdownOpen(value);
        if (getCookieConsent()) {
            setSiteCookie('collapsible_map', value.toString(), SIDEBAR_COOKIE_MAX_AGE);
        }
    };

    const handleEventDropdownChange = (value: boolean) => {
        setIsEventDropdownOpen(value);
        if (getCookieConsent()) {
            setSiteCookie('collapsible_event', value.toString(), SIDEBAR_COOKIE_MAX_AGE);
        }
    };

    const toggleMapDropdown = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        handleMapDropdownChange(!isMapDropdownOpen);
    };

    const toggleEventDropdown = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        handleEventDropdownChange(!isEventDropdownOpen);
    };

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
                                    <li className="fusion-item-expand">
                                        <div className="fusion-item">
                                            <a href="/map" onClick={toggleMapDropdown}>MAP</a>
                                        </div>
                                        <ul className={"fusion-dropdown" + (isMapDropdownOpen ? " fusion-open" : "")}>
                                            <li className="fusion-dropdown-item">
                                                <a href="/map/two">・2D MAP</a>
                                            </li>
                                            <li className="fusion-dropdown-item">
                                                <a href="/map/three">・3D MAP</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="fusion-item-expand">
                                        <div className="fusion-item">
                                            <a href="/event" onClick={toggleEventDropdown}>EVENT</a>
                                        </div>
                                        <ul className={"fusion-dropdown" + (isEventDropdownOpen ? " fusion-open" : "")}>
                                            <li className="fusion-dropdown-item">
                                                <a href="/event">・イベント一覧</a>
                                            </li>
                                            <li className="fusion-dropdown-item">
                                                <a href="/event?id=全日制">・全日制</a>
                                            </li>
                                            <li className="fusion-dropdown-item">
                                                <a href="/event?id=食品販売">・食品販売</a>
                                            </li>
                                            <li className="fusion-dropdown-item">
                                                <a href="/event?id=ステージ">・ステージ</a>
                                            </li>
                                            <li className="fusion-dropdown-item">
                                                <a href="/event?id=定時制">・定時制</a>
                                            </li>
                                        </ul>
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
                                    <li className="fusion-item">
                                        <a href="/setting">SETTING</a>
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
