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
          <section
            className="headtop"
          >
            <div className="headtop-leftarea">
              <div className="headtop-left">

                <div className="headtop-themelogo">
                  <picture>
                    <source
                      media="(min-width:768px)"
                      srcSet="/welcome/logo.png"
                    />
                    <Image
                      className="headtop-sp img"
                      src="/welcome/logo.png"
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

          
          <div className="mid_header">
            <h2>SEARCH</h2>
            <TopSelect />
            <h2>NEWS</h2>
            <Announce />
            <h2>ACCEEE</h2>
            <Access />
          </div>
          
        </div>
        <Footer />
      </div>
    </>
  );
};