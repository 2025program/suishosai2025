import Image from 'next/image';
import "./nowedit.css"

export default function Nowedit() {
    return (
        <div className="now_edit">

            <h1 className="now_edit_text">お楽しみに</h1>
            <Image
                className="now_edit_png"
                src="/nowedit.png"
                alt=""
                width={1000}
                height={1000}
                priority
            />
        </div>
    )
}
