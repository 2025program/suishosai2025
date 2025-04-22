import { DevOnly } from "@/components/DevOnly";
import "./timetable.css";

export default function Timetable() {

    return (
        <DevOnly>
            <button className="payment-btn">お支払いについて</button>
        </DevOnly>
    );
}
