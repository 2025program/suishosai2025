"use client";

import { useEffect, useState, FC } from "react";
import Image from "next/image";
import "./countdown.css";

const Countdown: FC = () => {
    const [daysLeft, setDaysLeft] = useState<number | null>(null);

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date();
            const currentYear = now.getFullYear();
            // 月は0始まりなので、5は6月を表します。
            let targetDate = new Date(currentYear, 5, 28);
            // 今日が6/28以降の場合、翌年の6/28をターゲットにする
            if (now > targetDate) {
                targetDate = new Date(currentYear + 1, 5, 28);
            }
            const diffTime = targetDate.getTime() - now.getTime();
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            setDaysLeft(diffDays);
        };

        updateCountdown();
        const timer = setInterval(updateCountdown, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="countdown">
            {/* 背景画像エリア */}
            <div className="background-image">
                <Image
                    src="/welcome/rightpc.png"
                    alt="背景"
                    fill
                    priority
                    style={{ objectFit: "cover", objectPosition: "right center" }}
                />
            </div>
            {/* コンテンツエリア */}
            <div className="content">
                <div className="time">
                    <p className="title">翠翔祭開催まで</p>
                    <p className="days">
                        {daysLeft !== null ? `${daysLeft}日` : "読み込み中..."}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Countdown;
