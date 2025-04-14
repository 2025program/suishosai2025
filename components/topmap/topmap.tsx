import "./topmap.css"
import Image from 'next/image';
import { Mochiy_Pop_One } from "next/font/google";
const mochiy = Mochiy_Pop_One({ weight: "400", subsets: ["latin"] });

export default function Topmap() {
    return (
        <>
            <div className="topsearch">
                <div className="topsearch_event">
                    <a href="/event" className="search_event">
                        <div className="title-top">
                            <p className={mochiy.className}>イベント検索</p>
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
                        <a href="/map" className="_search">
                            <div className="title-top">
                                <p className={mochiy.className}>学校マップ</p>
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
                        <a href="/timetable" className="_search">
                            <div className="title-top">
                                <p className={mochiy.className}>タイムテーブル</p>
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