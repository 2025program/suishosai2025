// /app/event/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { festivalItems } from "@/utils/festival";
import { FestivalDetail, festivalDetail } from "@/utils/festivaldetail";
import { FestivalItem } from "@/types/festival";
import { supabase } from "@/utils/supabase/supabase";
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
    // 混雑状況ではなくステータスメッセージを扱う
    const [statusMessage, setStatusMessage] = useState<string | null>(null);

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

    // イベントが取得できたら、Supabase からステータスメッセージを取得
    useEffect(() => {
        async function fetchStatusMessage() {
            if (event) {
                const { data, error } = await supabase
                    .from("status")
                    .select("status")
                    .eq("name", event.title)
                    .single();
                if (error) {
                    console.error("ステータスメッセージの取得エラー", error);
                    return;
                }
                if (data) {
                    setStatusMessage(data.status);
                }
            }
        }
        fetchStatusMessage();
    }, [event]);

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

                {/* ステータスメッセージの表示 */}
                <div className="">
                    <p className="">お知らせ</p>
                    <p className="">
                        {statusMessage !== null
                            ? statusMessage
                            : "現在お知らせはありません。"}
                    </p>
                </div>

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
