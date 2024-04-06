import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useRef} from 'react'
import styles from '@/styles/Home.module.css'

export default function Contents () {
    return (
        <>
        <main className={`${styles.main}`}>
        <div className='container mt-3'>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
            <div className="shadow card h-100">
                <img src="REALIZE_tokyo.jpg" className="card-img-top"/>
                <div className="card-body">
                <h5 className="card-title">2023/01/14-15</h5>
                <a href="https://twitter.com/omunazotoki/status/1596111466217631744">
                    <h4>REALIZE（東京）</h4>
                </a>
                <p className="card-text"><a href="https://nazonosono.com/">上方謎の園</a>と白鷺祭で実施した「REALIZE」を東京で再演</p>
                </div>
            </div>
            </div>
            <div className="col">
            <div className="shadow card h-100">
                <img src="REALIZE_shirasagi.jpg" className="card-img-top"/>
                <div className="card-body">
                <h5 className="card-title">2022/11/04-06</h5>
                <a href="https://twitter.com/omunazotoki/status/1581204739605159937">
                    <h4>REALIZE（白鷺祭）</h4>
                </a>
                <p className="card-text"><a href="https://nazonosono.com/">上方謎の園</a>で実施した「REALIZE」を白鷺祭にて再演</p>
                </div>
            </div>
            </div>
            <div className="col">
            <div className="shadow card h-100">
                <img src="REALIZE_shirasagi.jpg" className="card-img-top"/>
                <div className="card-body">
                <h5 className="card-title">2022/10/08-11/06</h5>
                <a href="https://twitter.com/omunazotoki/status/1581204739605159937">
                    <h4>謎解きMISSION～天空ミュージアムの謎～</h4>
                </a>
                <p className="card-text"><a href="https://nazonosono.com/">ゴルゴ13×堺市「さいとう・たかを劇画の世界2022」</a>にて開催された子供用謎解きイベント</p>
                </div>
            </div>
            </div>
            <div className="col">
            <div className="shadow card h-100">
                <img src="REALIZE_shirasagi.jpg" className="card-img-top"/>
                <div className="card-body">
                <h5 className="card-title">2022/10/08-11/06</h5>
                <a href="https://twitter.com/omunazotoki/status/1581204739605159937">
                    <h4>謎解きMISSION～GET BACK THE DIAMOND～</h4>
                </a>
                <p className="card-text"><a href="https://nazonosono.com/">ゴルゴ13×堺市「さいとう・たかを劇画の世界2022」</a>にて開催された周遊型謎解きイベント</p>
                </div>
            </div>
            </div>
            </div>
      </div>
      </main>
      </>
    )
}