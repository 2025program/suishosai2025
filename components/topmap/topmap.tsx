import Link from "next/link";
import "./topmap.css"
import Image from 'next/image';

/*
export default function Topmap() {
    return (
        <>
            <div className="topmap">
                マップコンテンツ ※画像未定
            </div>
        </>
    );
}
*/

export default function Topmap() {
    return (
        <>
            <div className="topsearch">
                <section className="to">
                    <img
                        className="imgs"
                        src="/topsearch/search-icon.jpg"
                        alt=""
                        width={100}
                        height={100}
                    />
                    <Link href="/event" className="way">団体検索</Link>
                </section>
                
                <section className="to">
                        <img 
                            className="imgs"
                            src="/mappin.png"
                            alt=""
                            width={100}
                            height={100}
                        />
                    <Link href="/event" className="way">校内マップ</Link>
                    </section>

                    <section className="to">
                        <img 
                            className="imgs"
                            src="/"
                            alt=""
                            width={100}
                            height={100}
                        />
                    <Link href="/timetable" className="way">タイムテーブル</Link>
                    </section>
                
            </div>
        </>
    );
}