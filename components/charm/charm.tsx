import "./charm.css"
import Image from 'next/image';

export default function Charm() {
    return (
        <>
            <div className="charm_box">
                <a href="/map" className="charm_a_box">
                    <div className="charm_header">
                        <Image
                            className="charm_img"
                            src="/topad/mapad.png"
                            alt=""
                            width={2640}
                            height={1640}
                            priority
                        />
                    </div>
                    <div className="charm_desc">
                        <h1>MAP誘導</h1>
                        <p>立体でより分かりやすく</p>
                    </div>
                </a>
                <a href="/event" className="charm_a_box">
                    <div className="charm_header">
                        <Image
                            className="charm_img"
                            src="/topad/searchad.png"
                            alt=""
                            width={2360}
                            height={1640}
                            priority
                        />
                    </div>
                    <div className="charm_desc">
                        <h1>検索誘導</h1>
                        <p>今までにない便利さを追求しました</p>
                    </div>
                </a>
                <a href="/timetable" className="charm_a_box">
                    <div className="charm_header">
                        <Image
                            className="charm_img"
                            src="/topad/timead.png"
                            alt=""
                            width={2360}
                            height={1640}
                            priority
                        />
                    </div>
                    <div className="charm_desc">
                        <h1>タイムテーブル誘導</h1>
                        <p>ステージで今やってるものを確認</p>
                    </div>
                </a>
                <div className="charm_sp">
                    <div className="charm_header_sp">
                        <Image
                            className="charm_img_sp"
                            src="/welcome/logosp.png"
                            alt=""
                            width={831}
                            height={714}
                            priority
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
