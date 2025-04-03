"use client";

import "./about.css"
import Image from 'next/image';

export default function Stuff() {

    //cssの設定方法 同じディレクトリにabout.cssがあるからそこで指定してほしい
    //設定方法はhtmlと同じ
    //htmlではclass=""だけどそれがclassName=""になったくらいで特にあとは変更はない
    //注意！nextjsは<h3>とか<h2>とかの区別がないからスタイルでfont-sizeを指定して大きさを調整してね
    //注意！css設定するときにh1とかで丸ごとの指定できないからクラス名で一括管理して(about.css見て)
    //例としてタイトル部分のスタイルを設定してみたよ

    return (
        <main className="main">
            <picture className='roller'>
                <source
                    type="image/webp"
                    media="(min-width:768px)"
                    srcSet="/roller/roller_orange_pc.png"
                />
                <Image
                    className="roller_sp"
                    src="/roller/roller_orange_sp.png"
                    alt=""
                    width={3000}
                    height={1000}
                    priority
                />
            </picture>
            <header className="header">
                <h1 className="e-title">
                    ABOUT
                </h1>
            </header>

            <section className="absui">
                <h2 className="text-xl mb-2">翠翔祭について</h2>
                <a className="h3">翠翔祭とは毎年6月末に行われる神奈川県立横浜翠嵐高校の文化祭です。コロナの年度は一般公開できなかったものの、去年から一般公開を再開し、約１万人の方々に来場いただきました。来場お待ちしております。</a>
            </section>

            <section className="zenniti">
                <h2 className="text-xl mb-2">2025年度全日制翠翔祭実行委員長　池田晴彦</h2>
                <a className="h3">ありがたいお言葉</a>
            </section>

            <section className="teiji">
                <h2 className="text-xl mb-2">2025年度定時制翠翔祭実行委員長　？？？？</h2>
                <a className="h3">ありがたいお言葉</a>
            </section>



            <section className="member">
                <h2 className="text-xl mb-2">翠翔祭実行委員会総務部紹介</h2>
                <h3 className="h3">| 実行委員長</h3>
                <a className="member-name">　池田晴彦</a>
                <h3 className="h3">| 副委員長兼会計長</h3>
                <a className="member-name">　山口理緒</a>
                <h3 className="h3">| 会場長</h3>
                <a className="member-name">　深堀絢心</a>
                <h3 className="h3">| 調理食販部統括責任者</h3>
                <a className="member-name">　東城英寿</a>
                <h3 className="h3">| プログラム部統括責任者</h3>
                <a className="member-name">　水谷駿佑</a>
                <h3 className="h3">| アーチ・広報部統括責任者</h3>
                <a className="member-name">　浅井心遙</a>
                <h3 className="h3">| SP部統括責任者</h3>
                <a className="member-name">　𠮷岡太郎</a>
                <h3 className="h3">| 後夜祭・ステージ部統括責任者</h3>
                <a className="member-name">　富永恵未</a>
            </section>

            <section className="editor">
                <h2 className="text-xl mb-2" >ウェブサイト開発</h2>
                <a className="member-name">Pent &#40;横浜翠嵐所属&#41;</a>
                <a className="member-name">水谷駿佑 &#40;横浜翠嵐所属&#41;</a>
            </section>


        </main>
    );
}
