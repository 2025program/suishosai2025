"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faXTwitter,
    faInstagram,
    faLine,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";
import Image from 'next/image';

export default function Footer() {
    const [currentUrl, setCurrentUrl] = useState("");

    // クライアントサイドで現在のページ URL を取得
    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, []);

    const shareData = {
        title: "翠翔祭2025公式サイト",
        text: "横浜翠嵐高校の文化祭の特設サイトです！",
        url: currentUrl,
    };

    const handleShare = async (
        provider: "twitter" | "line" | "instagram"
    ) => {
        // ネイティブ共有が使えるなら優先
        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.error("Share failed:", err);
            }
            return;
        }

        // フォールバック：SNSごとのシェア URL を開く
        let shareUrl = "";
        switch (provider) {
            case "twitter":
                shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    shareData.url
                )}&text=${encodeURIComponent(shareData.text)}`;
                break;
            case "line":
                shareUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(
                    shareData.url
                )}`;
                break;
            case "instagram":
                // Instagram は Web からのプリフィルシェアが無いため、URL をコピー
                if (navigator.clipboard) {
                    await navigator.clipboard.writeText(shareData.url);
                    alert("URL をコピーしました。Instagram アプリでペーストして共有してください。");
                }
                return;
        }
        window.open(shareUrl, "_blank", "noopener,noreferrer");
    };

    return (
        <div className="_fot_">
            <div>
                <Image
                    src="/welcome/logo.png"
                    alt="logo"
                    width={3000}
                    height={1000}
                />
            </div>
            <h1>〈 SHARE 〉</h1>
            <div className="footer-icon">
                <button
                    className="x-icon"
                    onClick={() => handleShare("twitter")}
                    aria-label="Twitter で共有"
                >
                    <FontAwesomeIcon icon={faXTwitter} />
                </button>
                <button
                    className="instagram-icon"
                    onClick={() => handleShare("instagram")}
                    aria-label="Instagram で共有"
                >
                    <FontAwesomeIcon icon={faInstagram} />
                </button>
                <button
                    className="line-icon"
                    onClick={() => handleShare("line")}
                    aria-label="LINE で共有"
                >
                    <FontAwesomeIcon icon={faLine} />
                </button>
            </div>
            <p>翠翔祭2025</p>
            <p>@神奈川県立横浜翠嵐高等学校</p>
            <a href="/about" className="showabout">翠翔祭2025について詳しく</a>
        </div>
    );
}
