"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import "./homepage.css"
import { supabase } from '@/utils/supabase/supabase';
import { Database } from '@/types/database';

function formatDate(dateStr: string | null): string {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

type Announcement = Database["public"]["Tables"]["announce"]["Row"];

// Homeコンポーネント
const Home: React.FC = () => {

  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAnnouncements() {
      setLoading(true);
      const { data, error } = await supabase
        .from("announce")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching announcements:", error);
      } else {
        setAnnouncements(data ?? []);
      }
      setLoading(false);
    }
    fetchAnnouncements();
  }, []);

  return (
    <>
      <div className="body">
        <main>
          <div className="hidden-x-side">
            <section className="headtop">
              <div className="headtop-leftarea">
                <div className="headtop-left">
                  <div className="headtop-textanimation">
                    <div className="imageanimation vertical">
                      <div className="imageanimation-image">
                        <Image
                          className="imageanimation-png img"
                          src="/welcome/title.png"
                          alt=""
                          width={800}
                          height={200}
                          priority
                        />
                      </div>
                      <div className="imageanimation-image">
                        <Image
                          className="imageanimation-png img"
                          src="/welcome/title.png"
                          alt=""
                          width={800}
                          height={200}
                          priority
                        />
                      </div>
                    </div>
                  </div>
                  <h1 className="headtop-themelogo">
                    <picture>
                      <source
                        media="(min-width:768px)"
                        srcSet="/welcome/logopc.png"
                      />
                      <Image
                        className="headtop-logo-sp img"
                        src="/welcome/logosp.png"
                        alt=""
                        width={497}
                        height={427}
                        priority
                      />
                    </picture>
                  </h1>
                  <p className="headtop-change">
                    <picture>
                      <source
                        media="(min-width:768px)"
                        srcSet="/welcome/themepc.png"
                      />
                      <Image
                        className="headtop-change-sp img"
                        src="/welcome/themesp.png"
                        alt="neo"
                        width={594}
                        height={197}
                        priority
                      />
                    </picture>
                  </p>
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
                    width={750}
                    height={991}
                    priority
                  />
                </picture>
              </div>
            </section>

            <section className="newsbox">
              <div className="newsbox-up">
                <picture>
                  <source
                    media="(min-width:768px)"
                    srcSet="/welcome/footer_mask_pc.png"
                  />
                  <Image
                    className="newsbox-up-sp img"
                    src="/welcome/footer_mask_sp.png"
                    alt=""
                    width={2000}
                    height={500}
                    priority
                  />
                </picture>

                <Image
                  className="newsbox-newstag img"
                  src="/welcome/newstag.png"
                  alt=""
                  width={400}
                  height={200}
                  priority
                />

                <div className="newsbox-animation">
                  <div className="imageanimation hgt reverse">
                    <div className="imageanimation-image">
                      <picture>
                        <source
                          srcSet="/welcome/title_news.png"
                        />
                        <Image
                          className="imageanimation-png"
                          src="/welcome/title_news.png"
                          alt=""
                          width={2384}
                          height={150}
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
                          width={2384}
                          height={150}
                          loading="lazy"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>

              <div className="newsbox-content">
                <div className="news-scroll-container">
                  {loading && <p>お知らせを取得中</p>}
                  {!loading && announcements.length === 0 && <p>お知らせはありませんでした</p>}
                  {announcements.map((announcement) => (
                    <div key={announcement.id} className="boxkey">
                      <div className="news-item">
                        <h3 className="news-item-title">{announcement.title}</h3>
                        <div className="news-item-row">
                          <div className="news-item-time">
                            {formatDate(announcement.created_at)}
                          </div>
                          <div className="news-item-body">
                            <p>{announcement.content}</p>
                          </div>
                        </div>
                      </div>
                      <div className="news-divider"></div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className='map'>
              <div className="mapbox-up">

                <div className='titlecover'>
                  <picture>
                    <source
                      media="(min-width:768px)"
                      srcSet="/welcome/mapcover.png"
                    />
                    <Image
                      className="mapbox-up-sp img"
                      src="/welcome/mapcoversp.png"
                      alt=""
                      width={3000}
                      height={1000}
                      priority
                    />
                  </picture>
                </div>

                <Image
                  className="charmbox-charmtag img"
                  src="/welcome/charmtag.png"
                  alt=""
                  width={400}
                  height={200}
                  priority
                />

                <div className="mapbox-animation">
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
                          width={2384}
                          height={150}
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
                          width={2384}
                          height={150}
                          loading="lazy"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>
              <div className="itemcharm">
                魅力的なコンテンツ
                <p>ここに迫力のあるコンテンツを配置</p>
              </div>
            </section>

            <section className='foot'>
              <div className="footbox-up">

                <div className='titlecover'>
                  <picture>
                    <source
                      media="(min-width:768px)"
                      srcSet="/welcome/footercover.png"
                    />
                    <Image
                      className="footbox-up-sp img"
                      src="/welcome/footercoversp.png"
                      alt=""
                      width={3000}
                      height={1000}
                      priority
                    />
                  </picture>
                </div>

                <Image
                  className="footbox-foottag img"
                  src="/welcome/abouttag.png"
                  alt=""
                  width={400}
                  height={200}
                  priority
                />

                <div className="footbox-animation">
                  <div className="imageanimation hgt">
                    <div className="imageanimation-image">
                      <picture>
                        <source
                          srcSet="/welcome/title_about.png"
                        />
                        <Image
                          className="imageanimation-png"
                          src="/welcome/title_about.png"
                          alt=""
                          width={2384}
                          height={150}
                          loading="lazy"
                        />
                      </picture>
                    </div>
                    <div className="imageanimation-image">
                      <picture>
                        <source
                          srcSet="/welcome/title_about.png"
                        />
                        <Image
                          className="imageanimation-png"
                          src="/welcome/title_about.png"
                          alt=""
                          width={2384}
                          height={150}
                          loading="lazy"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>
              <div className="itemfoot">
                概要コンテンツ アクセスやシェアボタンなど
                <p>アンケートにご協力ください</p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
