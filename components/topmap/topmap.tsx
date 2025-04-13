import Link from "next/link";
import "./topmap.css"
import Image from 'next/image';

export default function Topmap() {
    return (
        <>
            <div className="topsearch">
                <div className="topsearch_event">
                    <a href="/event" className="search_event">
                        <div className="title-top">
                            イベント検索
                        </div>

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
                            <div className="title-top">
                                学校マップ
                            </div>
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
                            <div className="title-top">
                                タイムテーブル
                            </div>
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