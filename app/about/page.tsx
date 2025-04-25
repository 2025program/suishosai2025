"use client"

import "./about.css"
import Image from 'next/image';
import { useEffect, useRef } from 'react';
export default function About() {
    // 背景画像ラッパーに ref を貼る
    const leafRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!leafRef.current) return;
            const offset = window.scrollY * 0.3;
            leafRef.current.style.transform =
                `translate(-50%, calc(-65% + ${offset}px))`;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <div className="about_toppers">
                <picture className="roller">
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
                    <h1 className="ab-title">
                        ABOUT
                    </h1>
                </header>
            </div>
            <div className="about-pc-box">
                <div className="about_main">

                    <div className="background_about_img" ref={leafRef}>
                        
                    </div>

                    <div className="about_suiran">
                        <h1>《翠翔祭について》</h1>
                        <p>翠翔祭とは毎年6月末に行われる神奈川県立横浜翠嵐高校の文化祭です。
                            コロナの年度は一般公開できなかったものの、去年から一般公開を再開し、約1万人の方々に来場いただきました。
                            来場お待ちしております。</p>
                    </div>
                    <div className="about_top_member">
                        <h1>《翠翔祭実行委員会紹介》</h1>
                        <h3>2025年度全日制翠翔祭実行委員長</h3>
                        <h3>池田晴彦</h3>
                        <p>なんかここにはコメントでも入れておいてください。</p>
                        <h3>2025年度定時制翠翔祭実行委員長</h3>
                        <h3>翠嵐太郎</h3>
                        <p>なんかここにはコメントでも入れておいてください。</p>
                        <h2>〈総務部紹介〉</h2>
                        <h3>-実行委員長-</h3>
                        <p>池田晴彦</p>
                        <h3>-副委員長兼会計長-</h3>
                        <p>山口理緒</p>
                        <h3>-会場長-</h3>
                        <p>深堀絢心</p>
                        <h3>-調理食販部統括責任者-</h3>
                        <p>東城英寿</p>
                        <h3>-プログラム部統括責任者-</h3>
                        <p>水谷駿佑</p>
                        <h3>-アーチ・広報部統括責任者-</h3>
                        <p>浅井心遙</p>
                        <h3>-SP部統括責任者-</h3>
                        <p>𠮷岡太郎</p>
                        <h3>-後夜祭・ステージ部統括責任者-</h3>
                        <p>富永恵未</p>
                    </div>
                    <div className="about_site">
                        <h2>〈サイト開発担当〉</h2>
                        <h3>サイト監修</h3>
                        <p>水谷駿佑</p>
                        <h3>システム・デザイン・設計</h3>
                        <p>pent</p>
                        <h3>ロゴ制作</h3>
                        <p>ああああ</p>

                        <p>協力してくださった皆さん、ありがとうございました</p>
                    </div>
                    <div className="member-picture">
                            <Image
                               src="/member.jpg"
                               alt=""
                               width={3000}
                               height={1000}
                            />
                        </div>
                    
                </div>
            </div>
        </div>
    );
}
