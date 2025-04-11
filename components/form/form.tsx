import "./form.css"
import Image from 'next/image';

export default function Form() {
    return (
        <>
            <div className="form">
                <div className="form_back">
                    <Image
                        className="form_topper"
                        src="/about/form.png"
                        alt=""
                        width={2000}
                        height={1000}
                        priority
                    />
                    <h1>
                        翠翔祭グランプリ
                    </h1>
                </div>
                <div className="form_content">
                    <div className="formabout">
                        <h2>《概要》</h2>
                        <p>「<span className="form_bold">総合部門</span>」「<span className="form_bold">ステージ部門</span>」の各部門でグランプリを決めます。</p>
                        <p>生徒と保護者の皆さんに投票を行ってもらい、各部門で最も票を得た団体がグランプリ獲得です。</p>
                    </div>

                    <div className="formhow">
                        <h2>《投票方法》</h2>
                        <p>下記の投票フォームから投票お願いします。</p>
                        <p>1人1回、各部門1団体投票してください。ただし、自分が所属する団体には投票できません。</p>
                    </div>
                </div>
                <div className="form_tap">
                    <a className="container">
                        <div className="card">
                            <div className="card-all">
                                <div className='dot'>
                                    <div className="side-r"></div>
                                    <div className="side-l"></div>
                                    <ul className='ul'>
                                        {Array.from({ length: 13 }).map((_, index) => (
                                            <li key={index} className='li'></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="card-right">
                                    <div className="card-item-box">
                                        <h2>投票する</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
}
