import "./access.css"
import Image from 'next/image';

export default function Access() {
    return (
        <>
            <div className="access">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.2947119623113!2d139.60723897622412!3d35.47225144142478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185c00a49b3861%3A0xf105a9d61ccd44fc!2z56We5aWI5bed55yM56uL5qiq5rWc57-g5bWQ6auY562J5a2m5qCh!5e0!3m2!1sja!2sjp!4v1744112148595!5m2!1sja!2sjp"
                    width="600"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="map-ab"
                ></iframe>
            </div>
        </>
    );
}
