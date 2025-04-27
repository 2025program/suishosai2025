import Image from 'next/image';
import "./homepage.css"
import Form from '@/components/form/form';
import Announce from '@/components/announce/announce';
import Access from '@/components/access/access';
import TopSelect from '@/components/topselect/topselect';
import Footer from '@/components/footer/footer';
import { DevOnly } from '@/components/DevOnly';


// Homeコンポーネント
export default function Home() {
  return (
    <>
      <div className="body">
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
                  media="(min-width:1024px)"
                  srcSet="/welcome/rightpc.png"
                />
                <source
                  media="(min-width:660px)"
                  srcSet="/welcome/rightpd.png"
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

            <a href="/attention" className='payment-btn'>お支払いについて</a>

          </section>


          <DevOnly>
            <>
              {/** マップ */}
              <section className='headbox mapbox-up'>
                <Image
                  className="top_index"
                  src="/welcome/index_search.png"
                  alt=""
                  width={800}
                  height={300}
                  priority
                />
                {/** <TopSelect /> */}
                <div className="test-content"></div>
              </section>

              {/** フォーム */}
              <section className='headbox formbox-up '>
                <Image
                  className="top_index"
                  src="/welcome/index_form.png"
                  alt=""
                  width={800}
                  height={300}
                  priority
                />
                {/** <Form /> */}
                <div className="test-content"></div>
              </section>

              {/** ニュース */}
              <section className="headbox newsbox-up">
                <Image
                  className="top_index"
                  src="/welcome/index_news.png"
                  alt=""
                  width={800}
                  height={300}
                  priority
                />
                {/** <Announce /> */}
                <div className="test-content"></div>
              </section>

              {/** アクセス */}
              <section className='headbox accessbox-up'>
                <Image
                  className="top_index"
                  src="/welcome/index_access.png"
                  alt=""
                  width={800}
                  height={300}
                  priority
                />
                {/** <Access /> */}
                <div className="test-content"></div>
              </section>

              {/** フッターコンテンツ */}
              {/** <Footer /> */}
            </>
          </DevOnly>
        </div>
      </div>
    </>
  );
};