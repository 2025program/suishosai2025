// /app/event/page.tsx
"use client";
import Image from 'next/image';
import React, { useEffect, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { festivalItems } from "@/utils/festival";
import { normalizeSearchString } from "@/utils/normalizeKana";
import { LucideIcon, Drum, Sun, Moon, Soup } from "lucide-react";
import "./event.css"

// 固定の属性候補（フィルター表示用）
const fixedAttributes: { icon: LucideIcon; title: string }[] = [
    { icon: Sun, title: "全日" },
    { icon: Soup, title: "食販" },
    { icon: Drum, title: "ステージ" },
    { icon: Moon, title: "定時" },
];

const EventPage: React.FC = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    // 検索とフィルターの状態管理
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedAttributes, setSelectedAttributes] = useState<LucideIcon[]>([]);

    // 固定属性リストを利用するので、iconTypes は fixedAttributes から取得
    const iconTypes = fixedAttributes.map((attr) => attr.icon);

    // クエリパラメータに基づく初期フィルター設定（必要に応じて）
    useEffect(() => {
        if (id) {
            const matchedAttribute = fixedAttributes.find(
                (attr) => attr.title.toLowerCase() === id.toLowerCase()
            );
            if (matchedAttribute) {
                setSelectedAttributes([matchedAttribute.icon]);
            }
        }
    }, [id]);

    // ハンドラー
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const toggleIconFilter = (icon: LucideIcon) => {
        setSelectedAttributes((prev) =>
            prev.includes(icon)
                ? prev.filter((i) => i !== icon)
                : [...prev, icon]
        );
    };

    // 正規化した検索文字列
    const normalizedSearchTerm = useMemo(
        () => normalizeSearchString(searchTerm),
        [searchTerm]
    );

    // フィルタリング：選択されたすべての属性が item.attributes に含まれるかを判定（AND 判定）
    const filteredItems = useMemo(() => {
        return festivalItems.filter((item) => {
            const itemSearchString = normalizeSearchString(item.title, item.reading);
            const matchesSearch = itemSearchString.includes(normalizedSearchTerm);
            const matchesAttribute =
                selectedAttributes.length === 0 ||
                selectedAttributes.every((attr) => item.attributes.includes(attr));
            return matchesSearch && matchesAttribute;
        });
    }, [normalizedSearchTerm, selectedAttributes]);

    // 各属性に対応する固定のカテゴリ名を返す
    const getCategoryTitle = (icon: LucideIcon) => {
        const found = fixedAttributes.find((attr) => attr.icon === icon);
        return found ? found.title : "カテゴリ";
    };

    return (
        <main className="eventcontent">
            {/* ヘッダー */}
            <picture className="roller">
                <source
                    type="image/webp"
                    media="(min-width: 1400px)"
                    srcSet="/roller/roller_blue_biggest.png"
                />
                <source
                    type="image/webp"
                    media="(min-width: 768px)"
                    srcSet="/roller/roller_blue_pc.png"
                />
                <Image
                    className="roller_sp"
                    src="/roller/roller_blue_sp.png"
                    alt=""
                    width={3000}
                    height={1000}
                    priority
                />
            </picture>
            <header className="header">
                <h1 className="e-title">EVENT</h1>
            </header>

            {/* メインコンテンツ */}
            <section className="e-content">
                {/* 検索バー */}
                <div className="e-search">
                    <label htmlFor="search" className="sr-only">
                        イベント検索
                    </label>
                    <input
                        id="search"
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="イベントを検索..."
                        className="e-searchbox"
                    />
                </div>

                {/* アイコンフィルター */}
                <div className="e-iconbox">
                    {iconTypes.map((IconComponent, index) => (
                        <button
                            key={index}
                            onClick={() => toggleIconFilter(IconComponent)}
                            className={`e-iconnomal ${selectedAttributes.includes(IconComponent)
                                ? "e-iconclick"
                                : "e-iconunclick"
                                }`}
                            title={`フィルター: ${getCategoryTitle(IconComponent)}`}
                            aria-label={`フィルター: ${getCategoryTitle(IconComponent)}`}
                        >
                            <div className="e-icontitle">
                                {getCategoryTitle(IconComponent)}
                            </div>
                        </button>
                    ))}
                </div>

                {/* イベントリスト */}
                <div className="e-eventbox">
                    <div className="e-eventbox-f">
                        {filteredItems.length > 0 ? (
                            filteredItems.map((item, index) => (
                                <a className="container" href={`/event/${encodeURIComponent(item.title)}`} key={index}>
                                    <div className="card">
                                        <div className="card-all">
                                            <div className="pic">
                                                <Image
                                                    className=""
                                                    src="/event/event.png"
                                                    alt="画像を読み込めませんでした"
                                                    width={1000}
                                                    height={1000}
                                                    priority
                                                />
                                            </div>
                                            <div className='dot'>
                                                <div className="side-r"></div>
                                                <div className="side-l"></div>
                                                <ul className='ul'>
                                                    {Array.from({ length: 50 }).map((_, index) => (
                                                        <li key={index} className='li'></li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="card-right">
                                                <div className="card-item-box">
                                                    <h2>{item.title}</h2>
                                                </div>
                                                <div className="card-about">
                                                    <p>開催団体 : {item.class}</p>
                                                    <p>場所 : {item.location}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ))
                        ) : (
                            <p className="error-message">該当項目なし</p>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default EventPage;
