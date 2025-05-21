import { DevOnly } from "@/components/DevOnly";
import Image from "next/image";
import "./timetable.css";

export default function Timetable() {

    return (
        <div className="timetable">
            {/**トップ画像 */}
            <div className="toppers">
                <picture className="roller">
                    <source
                        type="image/png"
                        media="(min-width: 768px)"
                        srcSet="/header/header-for-pc.png"
                    />
                    <Image
                        className="roller-sp"
                        src="/header/header-for-sp.png"
                        alt=""
                        width={3000}
                        height={1000}
                        priority
                    />
                </picture>
                <header className="header">
                    <h1 className="title">
                        TIMETABLE
                    </h1>
                </header>
            </div>
        </div>
    );
}
