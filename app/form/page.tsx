"use client"

import "./form.css"
import Footer from '@/components/footer/footer';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function Form() {
    return (
        <>
            <div className="form">
                {/**トップ画像 */}
                <div className="toppers">
                                <picture className="roller">
                                    <source
                                        type="image/png"
                                        media="(min-width: 768px)"
                                        srcSet="/header/header-for-pc.png"
                                    />
                                    <Image
                                        className="roller-sp"
                                        src="/header/header-for-sp.png"
                                        alt=""
                                        width={3000}
                                        height={1000}
                                        priority
                                    />
                                </picture>
                                <header className="header">
                                    <h1 className="title">
                                        FORM
                                    </h1>
                                </header>
                            </div>
                {/**翠翔祭グランプリ */}
                <div className="form_back">
                    <Image
                        className="form_topper"
                        src="/about/form.png"
                        alt="グランプリ"
                        width={2000}
                        height={1000}
                        priority
                    />
                </div>
                <div className="form_content">
                    <div className="formabout">
                        <h2>《概要》</h2>
                        <p>各部門でのグランプリを決めます。</p>
                        <p>生徒と来場者の皆さんに投票を行ってもらい、各部門で最も票を得た団体がグランプリ獲得です。</p>
                    </div>

                    <div className="formhow">
                        <h2>《投票方法》</h2>
                        <p>下記の投票フォームから投票お願いします。</p>
                        <p>校内にあるパンフレットからも投票可能です。</p>
                        <p>1人1回、各部門1団体投票してください。ただし、自分が所属する団体には投票できません。</p>
                        <h3 className="bumon">〈各種投票フォーム〉</h3>
                        <p className="bumons">校内イベント部門</p>
                        <p className="bumons">食品販売部門</p>
                        <p className="bumons">ステージ部門</p>
                        <p className="bumons">立て看板部門</p>
                    </div>
                </div>
                {/**<div className="form_tap">
                    <a href="#_" className="relative inline-block text-lg group">
                        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                            <span className="relative">投票フォーム</span>
                        </span>
                        <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </a>
                </div> */}

                {/**来場者アンケート */}
                <div className="questionnaire">
                    <h2 className="q-title">《来場者アンケート》</h2>
                    <p>来場者向けのアンケートフォームです。回答にご協力お願いします。</p>
                    <p className="bumons">アンケートフォーム（googl form）</p>
                </div>

                <Footer />
            </div>
        </>
    );
}