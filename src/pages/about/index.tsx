import 'bootstrap/dist/css/bootstrap.min.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'

import React from "react";

const inter = Inter({ subsets: ['latin'] })

const LikeB = {
  backgroundColor: '#94C9F7',
  color: 'white',
  padding: '0.8rem',
  borderRadius: '0.4rem 0.4rem 0.0rem 0.0rem',
  cursor: 'pointer',
};


export default function About() {
    return (
        <>  
            <Head>
            <title> F-enigma </title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Allura&family=Kalam:wght@300;400;700&display=swap" rel="stylesheet" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap" rel="stylesheet"></link>
            </Head>
            <main className={`${styles.main}`}>
              <div className='container mt-3'>
              <div style={LikeB}>
                <h2>〇活動内容</h2>
              </div>
              <div className="p-3 mb-10 bg-white text-dark-emphasis">
                <h3>
                謎解きを
                <mark>「遊ぶ」</mark><br></br>
                </h3>
                <h5>
                  ▶謎解きイベントに遊びに行ったり、持ち寄った謎解きで遊ぶ
                </h5>     
                <br></br>
                <h3>
                謎解きを
                <mark>「作る」</mark><br></br>
                </h3>
                <h5>
                  ▶学祭で謎解きイベントを実施したり、企業とコラボして外部に向けた謎解きの制作を行う
                </h5> 
                <br></br>
                <h3>
                  ◎定期活動
                </h3>
                <h5>
                  週に一回、中百舌鳥キャンパス部室(もしくはDiscord)で例会を行う。そこで謎解きを遊んだり制作をする。<br></br>
                  例会に加えて、必要に応じて不定期で集まる。
                </h5> 
                <br></br>
                <h5>
                  ▼部室の場所▼<br></br>
                  以下の地図にある部室棟の2F
                </h5>
                <img src="部室地図.png" alt="map" width="400" height="300" />    
              </div>

              <div style={LikeB}>
                <h2>〇部員募集について</h2>
              </div>       
              <div className="p-3 mb-10 bg-white text-dark-emphasis">
                <h3>
                  こんな人募集してます！
                </h3>
                <h5>
                  ・謎解きに少しでも興味がある人(初心者スタートの人も多くいます)<br></br>
                  ・音楽、イラスト、映像、演技に興味がある人、得意な人<br></br>
                  ・長く続けられる趣味を探している人<br></br>
                </h5>
                <br></br>
                <h3>
                  入部方法
                </h3>
                <h5>
                  X(旧Twitter)のDM、もしくは部員の知り合いに入部希望を伝える
                </h5> 
              
              </div>
              </div>

            </main>
        </>
    )
}

 
function LikeButton() {
    const count = 999;
    return <span style={LikeB}>♥ {count}</span>;
}
