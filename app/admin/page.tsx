import Image from 'next/image';
import Form from '@/components/form/form';
import Announce from '@/components/announce/announce';
import Access from '@/components/access/access';
import TopSelect from '@/components/topselect/topselect';
import Footer from '@/components/footer/footer';
import { DevOnly } from '@/components/DevOnly';
import "./admin.css"

// Homeコンポーネント
export default function Develop() {

    return (
        <>
            <div className="testbox"></div>
            <div className="headerbox_top">
                <div className="headerbox_left"></div>
                <div className="headerbox_right"></div>
                <div className="headerbox_titlearea">
                    <h1>Test Title</h1>
                </div>
            </div>
            <div className="testbox"></div>
        </>
    );
};