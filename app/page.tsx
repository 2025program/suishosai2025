import Image from 'next/image';
import "./homepage.css"
import Form from '@/components/form/form';
import Announce from '@/components/announce/announce';
import Access from '@/components/access/access';
import TopSelect from '@/components/topselect/topselect';
import Footer from '@/components/footer/footer';


// Homeコンポーネント
export default function Home() {
  return (
    <>
      <div className="body">
        <main>
          <div className="hidden-x-side">

            {/** ヘッダー */}
            <section className="headtop">
              <div className="headtop-leftarea">
                <div className="headtop-left">

                  <div className="headtop-themelogo">
                    <picture>
                      <source
                        media="(min-width:768px)"
                        srcSet="/welcome/logopc.png"
                      />
                      <Image
                        className="headtop-sp img"
                        src="/welcome/logosp.png"
                        alt=""
                        width={900}
                        height={850}
                        priority
                      />
                    </picture>
                  </div>

                  <div className="headtop-change">
                    <picture>
                      <source
                        media="(min-width:768px)"
                        srcSet="/welcome/themepc.png"
                      />
                      <Image
                        className="headtop-sp img"
                        src="/welcome/themesp.png"
                        alt="neo"
                        width={180}
                        height={1164}
                        priority
                      />
                    </picture>
                  </div>

                </div>
              </div>
              <div className="headtop-right">
                <picture>
                  <source
                    media="(min-width:768px)"
                    srcSet="/welcome/rightpc.png"
                  />
                  <Image
                    className="headtop-right-sp img"
                    src="/welcome/rightsp.png"
                    alt=""
                    width={3000}
                    height={2000}
                    priority
                  />
                </picture>
              </div>
            </section>

            {/** マップ */}
            <section className='headbox'>
              <div className="mapbox-up box-up">

                <div className='titlecover'>
                  <picture>
                    <source
                      media="(min-width:768px)"
                      srcSet="/welcome/mapcover.png"
                    />
                    <Image
                      className="box-up-sp img"
                      src="/welcome/mapcoversp.png"
                      alt=""
                      width={3000}
                      height={1000}
                      priority
                    />
                  </picture>
                </div>

                <Image
                  className="box-tag img"
                  src="/welcome/maptag.png"
                  alt=""
                  width={800}
                  height={400}
                  priority
                />

                <div className="slidebox-animation">
                  <div className="imageanimation hgt reverse">
                    <div className="imageanimation-image">
                      <picture>
                        <source
                          srcSet="/welcome/title_map.png"
                        />
                        <Image
                          className="imageanimation-png"
                          src="/welcome/title_map.png"
                          alt=""
                          width={4790}
                          height={300}
                          loading="lazy"
                        />
                      </picture>
                    </div>
                    <div className="imageanimation-image">
                      <picture>
                        <source
                          srcSet="/welcome/title_map.png"
                        />
                        <Image
                          className="imageanimation-png"
                          src="/welcome/title_map.png"
                          alt=""
                          width={4790}
                          height={300}
                          loading="lazy"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>

              {/** セレクトコンテンツ */}
              <TopSelect />
            </section>

            {/** フォーム */}
            <section className='headbox'>
              <div className="formbox-up box-up">

                <div className='titlecover'>
                  <picture>
                    <source
                      media="(min-width:768px)"
                      srcSet="/welcome/footercover.png"
                    />
                    <Image
                      className="box-up-sp img"
                      src="/welcome/footercoversp.png"
                      alt=""
                      width={3000}
                      height={1000}
                      priority
                    />
                  </picture>
                </div>

                <Image
                  className="box-tag img"
                  src="/welcome/formtag.png"
                  alt=""
                  width={800}
                  height={400}
                  priority
                />

                <div className="slidebox-animation">
                  <div className="imageanimation hgt">
                    <div className="imageanimation-image">
                      <picture>
                        <source
                          srcSet="/welcome/title_form.png"
                        />
                        <Image
                          className="imageanimation-png"
                          src="/welcome/title_form.png"
                          alt=""
                          width={4790}
                          height={300}
                          loading="lazy"
                        />
                      </picture>
                    </div>
                    <div className="imageanimation-image">
                      <picture>
                        <source
                          srcSet="/welcome/title_form.png"
                        />
                        <Image
                          className="imageanimation-png"
                          src="/welcome/title_form.png"
                          alt=""
                          width={4790}
                          height={300}
                          loading="lazy"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>

              {/** フォームコンテンツ */}
              <Form />
            </section>

            {/** ニュース */}
            <section className="headbox">
              <div className="newsbox-up box-up">

                <div className='titlecover'>
                  <picture>
                    <source
                      media="(min-width:768px)"
                      srcSet="/welcome/newscover.png"
                    />
                    <Image
                      className="box-up-sp img"
                      src="/welcome/newscoversp.png"
                      alt=""
                      width={3000}
                      height={1000}
                      priority
                    />
                  </picture>
                </div>

                <Image
                  className="box-tag img"
                  src="/welcome/newstag.png"
                  alt=""
                  width={800}
                  height={400}
                  priority
                />

                <div className="slidebox-animation">
                  <div className="imageanimation hgt">
                    <div className="imageanimation-image">
                      <picture>
                        <source
                          srcSet="/welcome/title_news.png"
                        />
                        <Image
                          className="imageanimation-png"
                          src="/welcome/title_news.png"
                          alt=""
                          width={4790}
                          height={300}
                          loading="lazy"
                        />
                      </picture>
                    </div>
                    <div className="imageanimation-image">
                      <picture>
                        <source
                          srcSet="/welcome/title_news.png"
                        />
                        <Image
                          className="imageanimation-png"
                          src="/welcome/title_news.png"
                          alt=""
                          width={4790}
                          height={300}
                          loading="lazy"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>

              {/** ニュースコンテンツ */}
              <Announce />
            </section>

            {/** アクセス */}
            <section className='headbox'>
              <div className="accessbox-up box-up">

                <div className='titlecover'>
                  <picture>
                    <source
                      media="(min-width:768px)"
                      srcSet="/welcome/accesscover.png"
                    />
                    <Image
                      className="box-up-sp img"
                      src="/welcome/accesscoversp.png"
                      alt=""
                      width={3000}
                      height={1000}
                      priority
                    />
                  </picture>
                </div>

                <Image
                  className="box-tag img"
                  src="/welcome/accesstag.png"
                  alt=""
                  width={800}
                  height={400}
                  priority
                />

                <div className="slidebox-animation">
                  <div className="imageanimation hgt">
                    <div className="imageanimation-image">
                      <picture>
                        <source
                          srcSet="/welcome/title_access.png"
                        />
                        <Image
                          className="imageanimation-png"
                          src="/welcome/title_access.png"
                          alt=""
                          width={4790}
                          height={300}
                          loading="lazy"
                        />
                      </picture>
                    </div>
                    <div className="imageanimation-image">
                      <picture>
                        <source
                          srcSet="/welcome/title_access.png"
                        />
                        <Image
                          className="imageanimation-png"
                          src="/welcome/title_access.png"
                          alt=""
                          width={4790}
                          height={300}
                          loading="lazy"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>

              {/** アクセスコンテンツ */}
              <Access />
            </section>

            {/** フッターコンテンツ */}
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
};