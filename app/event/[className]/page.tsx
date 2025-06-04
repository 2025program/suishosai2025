// /app/event/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { festivalItems } from "@/utils/festival";
import { FestivalDetail, festivalDetail } from "@/utils/festivaldetail";
import { FestivalItem } from "@/types/festival";
// 料金情報のインポート
import { festivalPricing } from "@/utils/festivalPrice";

//開発者モード
import { DevOnly } from "@/components/DevOnly";

export default function ClassPage() {
    const router = useRouter();
    const params = useParams();
    const { className } = params;
    const [event, setEvent] = useState<FestivalItem | null>(null);
    const [detail, setDetail] = useState<FestivalDetail | null>(null);

    useEffect(() => {
        if (className) {
            const decodedClassName = decodeURIComponent(className as string);
            // className に基づいてイベントを検索
            const foundEvent = festivalItems.find(
                (item) => item.title === decodedClassName
            );
            const foundDetail = festivalDetail.find(
                (item) => item.title === decodedClassName
            );
            if (foundEvent) {
                setEvent(foundEvent);
            } else {
                // イベントが見つからない場合は404ページへリダイレクト
                router.push("/404");
            }
            if (foundDetail) {
                setDetail(foundDetail);
            }
        }
    }, [className, router]);

    // イベントに対応する料金情報を取得
    const pricingInfo = festivalPricing.find(
        (item) => event && item.title === event.title
    );

    if (!event) {
        return <div>読み込み中...</div>;
    }

    return (
        <DevOnly>
            <div className="">
                {/* ヘッダー：サンプル画像 */}
                <header className="">
                    <Image
                        src="/event/event.png"
                        alt=""
                        width={100}
                        height={100}
                        className=""
                    />
                </header>

                {/* イベントタイトル */}
                <h1 className="">{event.title}</h1>

                <div className="">
                    <p className="">内容</p>
                    <p className="" style={{ whiteSpace: 'pre-line' }}>
                        {detail?.detail}
                    </p>
                </div>

                {/* 料金情報の表示 */}
                {pricingInfo &&
                    pricingInfo.categories.map((category, index) => (
                        <div key={index} className="" style={{ width: "100%" }}>
                            <h2 className="">{category.category}</h2>
                            <table className="" style={{ width: "100%", maxWidth: "800px" }}>
                                <thead>
                                    <tr>
                                        <th className="" style={{ width: "70%" }}>品目</th>
                                        <th className="" style={{ width: "30%" }}>料金</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {category.items.map((item, idx) => (
                                        <tr key={idx} className="">
                                            <td className="" style={{ width: "70%" }}>{item.label}</td>
                                            <td className="" style={{ width: "30%" }}>{item.price}円</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ))
                }

                {/* マップページへ飛ぶリンク */}
                <Link href={`/map?id=${encodeURIComponent(event.title)}`}>
                    <div className="">
                        マップ
                    </div>
                </Link>
            </div>
        </DevOnly>
    );
}
