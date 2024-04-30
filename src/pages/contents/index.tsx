import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useRef} from 'react'
import styles from '@/styles/Home.module.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Contents () {
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
        <main className={`${styles.main} ${inter.className}`}>
        <div className='container mt-3'>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                <div className="shadow card h-100">
                    <img src="Shinkan2024_MV.png" className="card-img-top"/>
                    <div className="card-body">
                    <div className="card-text mb-2">2024.04.10</div>
                    <a href="https://twitter.com/omunazotoki/status/1778030166616264745">
                        <h4>新歓映像謎</h4></a>
                    <div className="card-text">新歓用に映像謎を作成</div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="shadow card h-100">
                    <img src="BombPanic.jpg" className="card-img-top"/>
                    <div className="card-body">
                    <div className="card-text mb-2">2024.02.23-25</div>
                    <a href="https://twitter.com/banquetest_fes/status/1748691852222435740">
                        <h4>ボムボムパニック（再演）</h4></a>
                    <div className="card-text">学祭「白鷺祭」で行われた「ボムボムパニック」を<a href="https://sites.google.com/view/osakabanquetestfes9">大阪最宴祭９</a>にて再演</div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="shadow card h-100">
                    <img src="Hicity.jpg" className="card-img-top"/>
                    <div className="card-body">
                    <div className="card-text mb-2">2023.11.17-19</div>
                    <a href="https://haneda-innovation-city-gop.com/event/438">
                        <h4>羽田謎解きストーリー 天空の橋の謎を解け！</h4></a>
                    <div className="card-text">羽田イノベーションシティ&quot;Grand Opening Event ∅&quot;にて開催された周遊型謎解きイベント</div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="shadow card h-100">
                    <img src="BombPanic.jpg" className="card-img-top"/>
                    <div className="card-body">
                    <div className="card-text mb-2">2023.11.04-05</div>
                    <a href="https://twitter.com/omunazotoki/status/1713396779641610707">
                        <h4>ボムボムパニック</h4></a>
                    <div className="card-text">学祭「白鷺祭」で開催された新作謎解き公演</div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="shadow card h-100">
                    <img src="Golgo2023_Easy.png" className="card-img-top"/>
                    <div className="card-body">
                    <div className="card-text mb-2">2023.10.08-11.06</div>
                    <a href="https://sakai-gekiga.com/tour">
                        <h4>謎解きMISSION 21階に潜む謎!!</h4></a>
                    <div className="card-text">ゴルゴ13×堺市「さいとう・たかを劇画の世界2023」にて開催された子供用謎解きイベント</div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="shadow card h-100">
                    <img src="Golgo2023_Hard.png" className="card-img-top"/>
                    <div className="card-body">
                    <div className="card-text mb-2">2023.10.08-11.06</div>
                    <a href="https://sakai-gekiga.com/tour">
                        <h4>謎解きMISSION STOP THE &quot;JAMMER&quot;</h4></a>
                    <div className="card-text">ゴルゴ13×堺市「さいとう・たかを劇画の世界2023」にて開催された周遊型謎解きイベント</div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="shadow card h-100">
                    <img src="Lawyer_Kyoto.jpg" className="card-img-top"/>
                    <div className="card-body">
                    <div className="card-text mb-2">2023.10.07</div>
                    <a href="https://t.co/W1Dthn2Pye">
                        <h4>ナゾトキ検察官の事件ファイル</h4></a>
                    <div className="card-text">京都弁護士会などが開催した「法の日」週刊イベントにて実施された謎解きイベント</div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="shadow card h-100">
                    <img src="Dissolve_Sono.jpg" className="card-img-top"/>
                    <div className="card-body">
                    <div className="card-text mb-2">2023.08.19</div>
                    <a href="https://t.co/iTszboXDo3">
                        <h4>Dissolve</h4></a>
                    <div className="card-text"><a href="https://twitter.com/nazonosono">上方謎の園２</a>で新作公演を実施</div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="shadow card h-100">
                    <img src="Shinkan2023_MV.jpg" className="card-img-top"/>
                    <div className="card-body">
                    <div className="card-text mb-2">2023.04.15</div>
                    <a href="https://t.co/k6fK1xTwpk">
                        <h4>新歓映像謎</h4></a>
                    <div className="card-text">新歓用に映像謎を作成</div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="shadow card h-100">
                    <img src="Shinkan2023.png" className="card-img-top"/>
                    <div className="card-body">
                    <div className="card-text mb-2">2023.04.12,17,21</div>
                    <a href="https://t.co/ciI8jnIZ1R">
                        <h4>新歓用公演"色々な謎"</h4></a>
                    <div className="card-text">新歓向けに過去の公演をリメイク</div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="shadow card h-100">
                    <img src="REALIZE_tokyo.jpg" className="card-img-top"/>
                    <div className="card-body">
                    <div className="card-text mb-2">2023.01.14-15</div>
                    <a href="https://www.google.com/url?q=https%3A%2F%2Ftwitter.com%2Fomunazotoki%2Fstatus%2F1581204739605159937&sa=D&sntz=1&usg=AOvVaw24bPPPGC-11phGoW7rFdYL">
                        <h4>REALIZE（東京）</h4></a>
                    <div className="card-text"><a href="https://www.google.com/url?q=https%3A%2F%2Fnazonosono.com%2F&sa=D&sntz=1&usg=AOvVaw0rQWnFYcGaw1lcpmIVrxQZ">上方謎の園</a>で実施した「REALIZE」を東京にて再演</div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="shadow card h-100">
                    <img src="REALIZE_shirasagi.jpg" className="card-img-top"/>
                    <div className="card-body">
                    <div className="card-text mb-2">2022.11.04-06</div>
                    <a href="https://www.google.com/url?q=https%3A%2F%2Ftwitter.com%2Fomunazotoki%2Fstatus%2F1581204739605159937&sa=D&sntz=1&usg=AOvVaw24bPPPGC-11phGoW7rFdYL">
                        <h4>REALIZE（白鷺祭）</h4></a>
                    <div className="card-text">上方謎の園で実施した「REALIZE」を白鷺祭にて再演</div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="shadow card h-100">
                    <img src="Golgo2022_Easy.jpg" className="card-img-top"/>
                    <div className="card-body">
                    <div className="card-text mb-2">2022.10.08-11.06</div>
                    <a href="https://www.google.com/url?q=https%3A%2F%2Fsakai-gekiga.com%2Ftour%2F%23nazo-1&sa=D&sntz=1&usg=AOvVaw1X9q5GnZx3hUFSNn1jUuGm">
                        <h4>謎解きMISSION～天空ミュージアムの謎～</h4></a>
                    <div className="card-text"><a href="https://www.google.com/url?q=https%3A%2F%2Fsakai-gekiga.com%2Fnews%2F&sa=D&sntz=1&usg=AOvVaw3vlBfBKZNqaTO0vTEhZWv6">ゴルゴ13×堺市「さいとう・たかを劇画の世界2022」</a>にて開催された子供用謎解きイベント</div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="shadow card h-100">
                    <img src="Golgo2022_Hard.jpg" className="card-img-top"/>
                    <div className="card-body">
                    <div className="card-text mb-2">2022.10.08-11.06</div>
                    <a href="https://www.google.com/url?q=https%3A%2F%2Fsakai-gekiga.com%2Ftour%2F%23nazo-1&sa=D&sntz=1&usg=AOvVaw1X9q5GnZx3hUFSNn1jUuGm">
                        <h4>謎解きMISSION～GET BACK THE DIAMOND～</h4></a>
                    <div className="card-text"><a href="https://www.google.com/url?q=https%3A%2F%2Fsakai-gekiga.com%2Fnews%2F&sa=D&sntz=1&usg=AOvVaw3vlBfBKZNqaTO0vTEhZWv6">ゴルゴ13×堺市「さいとう・たかを劇画の世界2022」</a>にて開催された周遊型謎解きイベント</div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="shadow card h-100">
                    <img src="REALIZE_sono.jpg" className="card-img-top"/>
                    <div className="card-body">
                    <div className="card-text mb-2">2022.08.20</div>
                    <a href="https://www.google.com/url?q=https%3A%2F%2Ftwitter.com%2Fomunazotoki%2Fstatus%2F1560657584993890304&sa=D&sntz=1&usg=AOvVaw22kEVAb4eUKrD4HWSypcbJ">
                        <h4>REALIZE</h4></a>
                    <div className="card-text"><a href="https://www.google.com/url?q=https%3A%2F%2Fnazonosono.com%2F&sa=D&sntz=1&usg=AOvVaw0rQWnFYcGaw1lcpmIVrxQZ">上方謎の園</a>で3年ぶりの新作公演を実施</div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="shadow card h-100">
                    <img src="KansaiShokuFes2022.jpg" className="card-img-top"/>
                    <div className="card-body">
                    <div className="card-text mb-2">2022.03.26-27</div>
                    <a href="https://www.google.com/url?q=https%3A%2F%2Ftwitter.com%2Ffoodfes_jp%2Fstatus%2F1494838772646645761&sa=D&sntz=1&usg=AOvVaw2U-Tm8bJtp9GTGBhpGPTlB">
                        <h4>KANSAI食FES</h4></a>
                    <div className="card-text">KANSAI食FESにて開催された謎解きイベント</div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="shadow card h-100">
                    <img src="NishijimaEngei.jpg" className="card-img-top"/>
                    <div className="card-body">
                    <div className="card-text mb-2">2021.11.28</div>
                    <a href="https://www.google.com/url?q=https%3A%2F%2Fwww.nankoku-kankou.jp%2Flife%2Fdtl.php%3FhdnKey%3D1296&sa=D&sntz=1&usg=AOvVaw1L8QnAcujxenH-_Uy7EFqO">
                        <h4>謎解きイベント～西島園芸団地編～隠された謎を解き明かせ</h4></a>
                    <div className="card-text">高知大学地域協働学部、まほろばクラブ南国、西島園芸団地との共同企画のイベント</div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="shadow card h-100">
                    <img src="Golgo2021.jpg" className="card-img-top"/>
                    <div className="card-body">
                    <div className="card-text mb-2">2021.11.03-12.05</div>
                    <a href="https://www.google.com/url?q=https%3A%2F%2Ftwitter.com%2Fsakai_gekiga%2Fstatus%2F1450344262101471233&sa=D&sntz=1&usg=AOvVaw2ve2WsB_ozRS4xWmjS2lDz">
                        <h4>謎解きMISSION～特別任務を遂行せよ～</h4></a>
                    <div className="card-text"><a href="https://www.google.com/url?q=https%3A%2F%2Fsakai-gekiga.com%2Fnews%2F&sa=D&sntz=1&usg=AOvVaw3vlBfBKZNqaTO0vTEhZWv6">ゴルゴ13×堺市「さいとう・たかを劇画の世界」</a>にて開催された周遊型謎解きイベント</div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="shadow card h-100">
                    <img src="Hervest_Halloween.jpg" className="card-img-top"/>
                    <div className="card-body">
                    <div className="card-text mb-2">2021.10.09-31</div>
                    <a href="https://www.google.com/url?q=https%3A%2F%2Ftwitter.com%2Fharvest_no_oka%2Fstatus%2F1446334374710964226&sa=D&sntz=1&usg=AOvVaw2ctGprSsjvQXcI5zLkXrDa">
                        <h4>ENIGMAからの挑戦状</h4></a>
                    <div className="card-text"><a href="https://www.google.com/url?q=https%3A%2F%2Ffarm.or.jp%2F&sa=D&sntz=1&usg=AOvVaw3SWXnMbMzBdbL8rsomi0Dy">ハーベストの丘</a>で開催された周遊型謎解きイベント</div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="shadow card h-100">
                    <img src="Ibaraki_Adventure.jpg" className="card-img-top"/>
                    <div className="card-body">
                    <div className="card-text mb-2">2021.09</div>
                    <a href="https://www.google.com/url?q=https%3A%2F%2Finfeel3150.wixsite.com%2Fsmile-infeel%2Fpost%2F%25E5%2591%25A8%25E9%2581%258A%25E5%259E%258B%25E3%2581%25AA%25E3%2581%259E%25E3%2581%25A8%25E3%2581%258D%25E3%2582%25B2%25E3%2583%25BC%25E3%2583%25A0%25E3%2582%2592%25E7%2584%25A1%25E6%2596%2599%25E9%2585%258D%25E5%25B8%2583%25E3%2581%2597%25E3%2581%25BE%25E3%2581%2599%25EF%25BC%2581&sa=D&sntz=1&usg=AOvVaw3gNDbuMCnCNP5GyAvGMR1-">
                        <h4>なぞときアドベンチャー</h4></a>
                    <div className="card-text">大阪府茨木市で開催された周遊型謎解きイベント</div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="shadow card h-100">
                    <img src="Hervest_Easter.jpg" className="card-img-top"/>
                    <div className="card-body">
                    <div className="card-text mb-2">2021.04.03-25</div>
                    <a href="https://www.google.com/url?q=https%3A%2F%2Ftwitter.com%2Fomunazotoki%2Fstatus%2F1375784235605237760&sa=D&sntz=1&usg=AOvVaw2pvIPi-fdGJeeKnKENhA-u">
                        <h4>イースターエッグハント謎解き</h4></a>
                    <div className="card-text"><a href="https://www.google.com/url?q=https%3A%2F%2Ffarm.or.jp%2F&sa=D&sntz=1&usg=AOvVaw3SWXnMbMzBdbL8rsomi0Dy">ハーベストの丘</a>で開催された周遊型謎解きイベント</div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="shadow card h-100">
                    <img src="KansaiShokuFes.jpg" className="card-img-top"/>
                    <div className="card-body">
                    <div className="card-text mb-2">2021.03.13-14</div>
                    <a href="https://www.google.com/url?q=https%3A%2F%2Ftwitter.com%2FOUtfoX_handai%2Fstatus%2F1366372702668296192&sa=D&sntz=1&usg=AOvVaw2wA4vZIpH8YtLCdam6CH-g">
                        <h4>KANSAI食FES</h4></a>
                    <div className="card-text">KANSAI食FESにて開催された謎解きイベント（<a href="https://twitter.com/OUtfoX_handai">阪大謎解きサークルOUtfoX</a>と共同制作）</div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="shadow card h-100">
                    <img src="Hervest_Xmas.jpg" className="card-img-top"/>
                    <div className="card-body">
                    <div className="card-text mb-2">2020.12.12-18</div>
                    <a href="https://www.google.com/url?q=https%3A%2F%2Ftwitter.com%2Fosmharvest_pr%2Fstatus%2F1333017876857384960&sa=D&sntz=1&usg=AOvVaw08sPi3PeGi_ZzzmL4QXUBL">
                        <h4>クリスマスの落とし物</h4></a>
                    <div className="card-text"><a href="https://www.google.com/url?q=https%3A%2F%2Ffarm.or.jp%2F&sa=D&sntz=1&usg=AOvVaw3SWXnMbMzBdbL8rsomi0Dy">ハーベストの丘</a>で開催された謎解きイベント（大阪スクールオブミュージック専門学校と共同制作）</div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="shadow card h-100">
                    <img src="Expo1970_50y.jpg" className="card-img-top"/>
                    <div className="card-body">
                    <div className="card-text mb-2">2020.11.07-12.06</div>
                    <a href="https://www.google.com/url?q=https%3A%2F%2Fmobile.twitter.com%2Fexpo70_50th%2Fstatus%2F1331764094286721025&sa=D&sntz=1&usg=AOvVaw2RCm3yfHHBaiv6DsOxEUdR">
                        <h4>EXPO’70謎解き in 万博の森</h4></a>
                    <div className="card-text">1970年大阪万博50周年記念プログラムの一環で開催された周遊型謎解きイベント</div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="shadow card h-100">
                    <img src="Loop.jpg" className="card-img-top"/>
                    <div className="card-body">
                    <div className="card-text mb-2">2020.05.01</div>
                    <a href="https://www.google.com/url?q=https%3A%2F%2Ftwitter.com%2Fomunazotoki%2Fstatus%2F1256176560219906050&sa=D&sntz=1&usg=AOvVaw2MhNESq8IaNhmP934NHLDa">
                        <h4>LINE謎「Loop」</h4></a>
                    <div className="card-text">新入生歓迎会の代わりに自宅でできるLINE謎を制作</div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="shadow card h-100">
                    <img src="Saien2.jpg" className="card-img-top"/>
                    <div className="card-body">
                    <div className="card-text mb-2">2020.02.24</div>
                    <a href="https://www.google.com/url?q=https%3A%2F%2Fosakarevivalfestival2.jimdofree.com%2F&sa=D&sntz=1&usg=AOvVaw3IgkqRKnyOSZr70HOdSQZq">
                        <h4>大阪最宴祭２</h4></a>
                    <div className="card-text">2017年5月に友好祭で開催した『ENIGMA PARK』を一部リメイクし「大阪最宴祭２」で再演</div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="shadow card h-100">
                    <img src="Ainouta.jpg" className="card-img-top"/>
                    <div className="card-body">
                    <div className="card-text mb-2">2019.11.01-03</div>
                    <a href="https://www.google.com/url?q=https%3A%2F%2Ftwitter.com%2Fomunazotoki%2Fstatus%2F1185527715836727296&sa=D&sntz=1&usg=AOvVaw0TLPYTKklvDkkEr4n4YyAe">
                        <h4>哀のうた〜呪われた屋敷からの脱出〜</h4></a>
                    <div className="card-text">学祭「白鷺祭」で開催された謎解き公演</div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="shadow card h-100">
                    <img src="Newtown.jpg" className="card-img-top"/>
                    <div className="card-body">
                    <div className="card-text mb-2">2019.09.23-10.31</div>
                    <a href="https://www.google.com/url?q=https%3A%2F%2Ftwitter.com%2Fsrw_sembokun%2Fstatus%2F1173740718247952384&sa=D&sntz=1&usg=AOvVaw0y8lhBTEm0EiHOwtZL_oe_">
                        <h4>ニュータウンに隠れた青い鳥の秘密</h4></a>
                    <div className="card-text">泉北高速鉄道各駅および周辺で開催された周遊型謎解きイベント</div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="shadow card h-100">
                    <img src="Hervest.jpg" className="card-img-top"/>
                    <div className="card-body">
                    <div className="card-text mb-2">2019.09.14-16</div>
                    <a href="https://www.google.com/url?q=https%3A%2F%2Ftwitter.com%2Fharvest_no_oka%2Fstatus%2F1171642133855506432&sa=D&sntz=1&usg=AOvVaw0YZcroGfYqT-zIJxMj_TD6">
                        <h4>ENIGMAからの挑戦状</h4></a>
                    <div className="card-text"><a href="https://www.google.com/url?q=https%3A%2F%2Ffarm.or.jp%2F&sa=D&sntz=1&usg=AOvVaw3SWXnMbMzBdbL8rsomi0Dy">
                        ハーベストの丘</a>で開催された周遊型謎解きイベント</div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="shadow card h-100">
                    <img src="Traveler.jpg" className="card-img-top"/>
                    <div className="card-body">
                    <div className="card-text mb-2">2019.05.25-26</div>
                    <a href="https://www.google.com/url?q=https%3A%2F%2Ftwitter.com%2Fomunazotoki%2Fstatus%2F1122788106854223872&sa=D&sntz=1&usg=AOvVaw2fRtMy83zYNaUDDqz9rgZA">
                        <h4>未来旅行社</h4></a>
                    <div className="card-text">学祭「友好祭」で開催された謎解き公演</div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="shadow card h-100">
                    <img src="FudaiLibrary.jpg" className="card-img-top"/>
                    <div className="card-body">
                    <div className="card-text mb-2">2019.04.02-05.31</div>
                    <a href="https://www.google.com/url?q=https%3A%2F%2Ftwitter.com%2Fomunazotoki%2Fstatus%2F1112921655838310402&sa=D&sntz=1&usg=AOvVaw2_58Pdsx-3_jhv4HQQLBrq">
                        <h4>府大図書館に届いた謎の本</h4></a>
                    <div className="card-text">大阪府立大学の図書館で開催された周遊型謎解きイベント</div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="shadow card h-100">
                    <img src="Arbida.jpg" className="card-img-top"/>
                    <div className="card-body">
                    <div className="card-text mb-2">2018.11.02-04</div>
                    <a href="https://www.google.com/url?q=https%3A%2F%2Ftwitter.com%2Fomunazotoki%2Fstatus%2F1054356975406919680&sa=D&sntz=1&usg=AOvVaw3jq4nDRdcWSTkT30Sdd_9E">
                        <h4>海底洞窟～アルビダの秘宝～</h4></a>
                    <div className="card-text">学祭「白鷺祭」で開催された謎解き公演</div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="shadow card h-100">
                    <img src="DarkManorStory.jpg" className="card-img-top"/>
                    <div className="card-body">
                    <div className="card-text mb-2">2017.11.04-05</div>
                    <a href="https://www.google.com/url?q=https%3A%2F%2Ftwitter.com%2Fomunazotoki%2Fstatus%2F919172519684325376&sa=D&sntz=1&usg=AOvVaw38wdZCpXSwa1Z2x-fQj1J6">
                        <h4>DARK MANOR STORY</h4></a>
                    <div className="card-text">学祭「白鷺祭」で開催された謎解き公演</div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="shadow card h-100">
                    <img src="EnigmaPark.jpg" className="card-img-top"/>
                    <div className="card-body">
                    <div className="card-text mb-2">2017.05.20-21</div>
                    <a href="https://www.google.com/url?q=https%3A%2F%2Ftwitter.com%2Fomunazotoki%2Fstatus%2F861543679999188993&sa=D&sntz=1&usg=AOvVaw1SifL-iFAOb2RVu7dpC9BI">
                        <h4>ENIGMA PARK</h4></a>
                    <div className="card-text">学祭「友好祭」で開催された謎解き公演</div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="shadow card h-100">
                    <img src="AgentGame.jpg" className="card-img-top"/>
                    <div className="card-body">
                    <div className="card-text mb-2">2016.11.04-05</div>
                    <a href="https://www.google.com/url?q=https%3A%2F%2Ftwitter.com%2Fomunazotoki%2Fstatus%2F783281539052298240&sa=D&sntz=1&usg=AOvVaw0zq8cj3JzCcMAzx4Ut_T_h">
                        <h4>エージェント・ゲーム～表裏の要塞～</h4></a>
                    <div className="card-text">学祭「白鷺祭」で開催された謎解き公演</div>
                    </div>
                </div>
                </div>
            </div>
      </div>
      </main>
      </>
    )
}