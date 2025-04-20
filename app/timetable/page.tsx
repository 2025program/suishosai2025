import { DevOnly } from "@/components/DevOnly";
import "./timetable.css";

export default function Timetable() {
    const LEAF_COUNT = 10; // ← 多すぎると不思議な感じになるよ

    const colors = ["#ffbf00", "#009926", "#c2704e"];
    const leaves = Array.from({ length: LEAF_COUNT });

    return (
        <DevOnly>
            <button className="payment-btn">お支払いについて</button>
        </DevOnly>
    );
}
