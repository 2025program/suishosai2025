"use client"

import Image from 'next/image';
import "./homepage.css"
import Form from '@/components/form/form';
import Announce from '@/components/announce/announce';
import Access from '@/components/access/access';
import TopSelect from '@/components/topselect/topselect';
import Footer from '@/components/footer/footer';
import { DevOnly } from '@/components/DevOnly';
import { useRef, useState, useLayoutEffect } from 'react';


// Homeコンポーネント
export default function Home() {
  const headerRef = useRef<HTMLElement>(null)
  const [spacerHeight, setSpacerHeight] = useState(0)
  const [isOverflowing, setIsOverflowing] = useState(true)  // 初期 true でも OK（layoutEffect で描画前に更新されます）

  useLayoutEffect(() => {
    const updateSizes = () => {
      if (!headerRef.current) return
      const height = headerRef.current.offsetHeight

      // スマホ判定: 767px以下なら buffer=100、それ以上は0
      const isMobile = window.innerWidth <= 767
      const buffer = isMobile ? 100 : 0

      setIsOverflowing(height > window.innerHeight + buffer)
      setSpacerHeight(height)
    }

    updateSizes()
    window.addEventListener('resize', updateSizes)
    return () => window.removeEventListener('resize', updateSizes)
  }, [])

  return (
    <>
      <div className="body">
        <div className="hidden-x-side">

          {/** ヘッダー */}
          <section
            className={`headtop ${isOverflowing ? 'relative' : 'fixed'}`}
            ref={headerRef}
          >
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

          <div
            className=""
            style={{ height: isOverflowing ? 0 : `${spacerHeight}px` }}
          />

          <DevOnly>
            <div className="mid_header">
              <div className="ahfkdaksjhfds"></div>
            </div>
          </DevOnly>
        </div>
      </div>
    </>
  );
};