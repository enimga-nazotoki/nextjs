import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useRef} from 'react'
import styles from '@/styles/Home.module.css'


export default function Contact() {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let data = {
            name: nameRef.current?.value,
            email: emailRef.current?.value,
            message: messageRef.current?.value,
        }

        await fetch("api/contact", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plan",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((res) => {
            if (res.status === 200) console.log("メール送信成功");
        });
    };

    return (
        <>
        <main className={`${styles.main}`}>
        <div className='container mt-5'>
            <h2 className='mb-3'>入部希望者募集</h2>
            <h4 className='mb-10'>
                F-enigmaでは随時新入部員を募集しています。大阪府立大学・大阪市立大学・大阪公立大学の学生であれば、どなたでも入部できます。もちろんどのキャンパスでもOK！お気軽にご連絡ください！
            </h4>
            <h2 className='mb-3'>制作依頼募集</h2>
            <h4 className='mb-10'>
                F-enigmaでは様々な形式・媒体での謎解き制作依頼を受け付けています。具体的な内容や納期、料金についてご相談させていただきたいので、まずはご連絡ください。
            </h4>            
            <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='name' className='form-label'>
                        お名前
                    </label>
                    <input type='text' className='form-control' id='name' required ref={nameRef}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>
                        メールアドレス
                    </label>
                    <input type='text' className='form-control' id='email' required ref={emailRef}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='message' className='form-label'>
                        メッセージ
                    </label>
                    <textarea name='message' className='form-control' id='message' ref={messageRef}/>
                </div>
                <button type='submit' className='btn btn-danger' >
                    メール送信
                </button>
            </form>
        </div>
        </main>
        </>
    )
}