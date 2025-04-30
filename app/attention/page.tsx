"use client"

import React from "react";
import "./attention.css"
import Image from 'next/image';
import Footer from '@/components/footer/footer';
import { useEffect, useRef } from 'react';

export default function attention () {
    const leafRef = useRef<HTMLDivElement>(null);
    return(
        <div>
            {/**ヘッダー */}
            <div className="at-toppers">
                <picture className="roller">
                    <source
                        type=""
                        media="(min-width: 1400px)"
                        srcSet="/roller/roller_orange_biggest.png"
                    />
                    <source
                        type=""
                        media="(min-width: 768px)"
                        srcSet="/roller/roller_orange_pc.png"
                    />
                    <Image
                        className="roller_sp"
                        src="/welcome/newscoversp.png"
                        alt=""
                        width={3000}
                        height={1000}
                        priority
                    />
                </picture>
                <header className="header">
                    <h1 className="at-title">Attention</h1>
                </header>  
            </div>
            <div className="at-pc-box">
                <div className="at_main">
                <div className="background_about_img" ref={leafRef}>
                        
                        </div>
                    <div className="payment">
                        <h1>《お支払いについて》</h1>
                        <p>調理食販企画でのお支払いは電子マネーのみとなります。校内でのチャージはできませんので、駅などで事前に十分にチャージをしたうえでお越しください。</p>
                        {/**電子マネーの画像を置く */}
                        <Image className="el-money"
                            src="/og-image.jpg"
                            alt="対応電子マネー一覧"
                            width={3000}
                            height={1000}
                        />
                    </div>
                    <div className="guide">
                        <h1>《お困りの時は》</h1>
                        <p>翠翔祭総務部またはSP部に声をかけてください。</p>
                        {/**総務Tと法被の画像を置く */}
                        <div className="clothes">
                            <div>
                                <p>総務T</p>
                                <Image
                                    src="/mappin.png"
                                    alt="総務の人が来ている服"
                                    width={3000}
                                    height={1000}
                                />
                            </div>
                            <div>
                                <p>SP法被</p>
                                <Image
                                    src="/mappin.png"
                                    alt="巡回中のSPが羽織ってる服"
                                    width={3000}
                                    height={1000}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}