import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

export default function About() {
    return (
        <>
        <main className={`${styles.main}`}>
            <div className={styles.cards}>
            <div className={styles.card_contents}>
                <img src="REALIZE_tokyo.jpg" height={225} width={400}/>
                <div className={styles.card_contents_textbox}>
                    <div className={styles.card_contents_overviewtext}>
                    2023/01/14-15
                    </div>
                    <div className={styles.card_contents_titletext}>
                    <a href="https://twitter.com/omunazotoki/status/1596111466217631744">REALIZE（東京）</a>
                    </div>
                    <div className={styles.card_contents_overviewtext}>
                    <a href="https://nazonosono.com/">上方謎の園</a>と白鷺祭で実施した「REALIZE」を東京で再演
                    </div>
                </div>
            </div>
            <div className={styles.card_contents}>
                <img src="REALIZE_shirasagi.jpg" height={225} width={400}/>    
                <div className={styles.card_contents_textbox}>
                    <div className={styles.card_contents_overviewtext}>
                    2022/11/04-06
                    </div>
                    <div className={styles.card_contents_titletext}>
                    <a href="https://twitter.com/omunazotoki/status/1581204739605159937">REALIZE（白鷺祭）</a>
                    </div>
                    <div className={styles.card_contents_overviewtext}>
                    <a href="https://nazonosono.com/">上方謎の園</a>で実施した「REALIZE」を白鷺祭にて再演
                    </div>
                </div>
            </div>
            <div className={styles.card_contents}>
                <img src="REALIZE_shirasagi.jpg" height={225} width={400}/>    
                <div className={styles.card_contents_textbox}>
                    <div className={styles.card_contents_overviewtext}>
                    2022/10/08-11/06
                    </div>
                    <div className={styles.card_contents_titletext}>
                    <a href="https://twitter.com/omunazotoki/status/1581204739605159937">謎解きMISSION～天空ミュージアムの謎～</a>
                    </div>
                    <div className={styles.card_contents_overviewtext}>
                    <a href="https://nazonosono.com/">ゴルゴ13×堺市「さいとう・たかを劇画の世界2022」</a>にて開催された子供用謎解きイベント
                    </div>
                </div>
            </div>
            <div className={styles.card_contents}>
                <img src="REALIZE_shirasagi.jpg" height={225} width={400}/>    
                <div className={styles.card_contents_textbox}>
                    <div className={styles.card_contents_overviewtext}>
                    2022/10/08-11/06
                    </div>
                    <div className={styles.card_contents_titletext}>
                    <a href="https://twitter.com/omunazotoki/status/1581204739605159937">謎解きMISSION～GET BACK THE DIAMOND～</a>
                    </div>
                    <div className={styles.card_contents_overviewtext}>
                    <a href="https://nazonosono.com/">ゴルゴ13×堺市「さいとう・たかを劇画の世界2022」</a>にて開催された周遊型謎解きイベント
                    </div>
                </div>
            </div>
            <div className={styles.card_contents}>
                <img src="REALIZE_shirasagi.jpg" height={225} width={400}/>    
                <div className={styles.card_contents_textbox}>
                    <div className={styles.card_contents_overviewtext}>
                    2022/08/20
                    </div>
                    <div className={styles.card_contents_titletext}>
                    <a href="https://twitter.com/omunazotoki/status/1581204739605159937">REALIZE</a>
                    </div>
                    <div className={styles.card_contents_overviewtext}>
                    <a href="https://nazonosono.com/">上方謎の園</a>で3年ぶりの新作公演を実施
                    </div>
                </div>
            </div>
            <div className={styles.card_contents}>
                <img src="REALIZE_shirasagi.jpg" height={225} width={400}/>    
                <div className={styles.card_contents_textbox}>
                    <div className={styles.card_contents_overviewtext}>
                    2022/03/26-27
                    </div>
                    <div className={styles.card_contents_titletext}>
                    <a href="https://twitter.com/omunazotoki/status/1581204739605159937">KANSAI食FES</a>
                    </div>
                    <div className={styles.card_contents_overviewtext}>
                    KANSAI食FESにて開催された謎解きイベント
                    </div>
                </div>
            </div>
            <div className={styles.card_contents}>
                <img src="REALIZE_shirasagi.jpg" height={225} width={400}/>    
                <div className={styles.card_contents_textbox}>
                    <div className={styles.card_contents_overviewtext}>
                    2021/11/28
                    </div>
                    <div className={styles.card_contents_titletext}>
                    <a href="https://twitter.com/omunazotoki/status/1581204739605159937">謎解きイベント～西島園芸団地編～隠された謎を解き明かせ</a>
                    </div>
                    <div className={styles.card_contents_overviewtext}>
                    高知大学地域協働学部、まほろばクラブ南国、西島園芸団地との共同企画のイベント
                    </div>
                </div>
            </div>
            </div>
        </main>
        </>
    )
}