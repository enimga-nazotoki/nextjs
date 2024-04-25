import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useRef} from 'react'
import styles from '@/styles/Home.module.css'

export default function Success() {
    return (
        <>
        <main className={`${styles.main}`}>
        <div className='container mt-3'>
            <div className="p-0 mb-3 mt-5 bg-success text-white">
                <h2 className='ml-3'>
                メール送信が完了しました。
                </h2>
            </div>
            </div>
        </main>
        </>
    )
}