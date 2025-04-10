import Link from "next/link";
import "./topmap.css"
import Image from 'next/image';

export default function Topmap() {
    return (
        <>
            <div className="topsearch">
                <div className="topsearch_event">
                    <a href="/event" className="search_event">
                        イベント検索
                        <Image
                            className="top_event_icon"
                            src="/topsearch/search.svg"
                            alt=""
                            width={1000}
                            height={1000}
                            priority
                        />
                    </a>
                </div>

                <div className="bottom_search">
                    <div className="bottom_grid">
                        <a href="/map" className="first_search">
                            学校マップ
                            <Image
                                className="top_map_icon"
                                src="/topsearch/map.svg"
                                alt=""
                                width={1000}
                                height={1000}
                                priority
                            />
                        </a>
                        <a href="/timetable" className="second_search">
                            タイムテーブル
                            <Image
                                className="top_time_icon"
                                src="/topsearch/calendar.svg"
                                alt=""
                                width={1000}
                                height={1000}
                                priority
                            />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}