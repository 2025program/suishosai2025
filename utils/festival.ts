// /utils/festival.ts
import {
    Drum,
    Moon,
    Soup,
    Sun,
    type LucideIcon,
} from "lucide-react";

export type FestivalItem = {
    title: string;
    reading?: string;
    // 複数の属性を持たせるため、icon プロパティを attributes 配列に変更
    attributes: LucideIcon[];
    floor?: number;
    x?: number;
    y?: number;
    slug?: string;
    class?: string;
    location?: string;
}

// 属性の優先順位（サイドバー上で「主要な」属性として使う）
export const attributePriority: LucideIcon[] = [Sun, Moon, Drum, Soup];

export const festivalItems: FestivalItem[] = [
    //クラス　頑張ってね（小声）
    { title: '1-1', attributes: [Sun], floor: 4, x: 1165, y: 500, class: "1-1", location: "2棟4階" },
    { title: '謎解き縁日', attributes: [Sun], floor: 4, x: 1085, y: 500, class: "1-2", location: "sample" },
    { title: '1-3', attributes: [Sun], floor: 4, x: 935, y: 500, class: "1-3", location: "sample" },
    { title: '1-4', attributes: [Sun], floor: 4, x: 852, y: 500, class: "1-4", location: "sample" },
    { title: 'たこ焼きin翠嵐', attributes: [Sun], floor: 4, x: 768, y: 500, class: "1-5", location: "sample" },
    { title: '翠嵐病棟～覚悟を持って入院してください～', attributes: [Sun], floor: 4, x: 683, y: 500, class: "1-6", location: "sample" },
    { title: '込宮隆の失踪', attributes: [Sun], floor: 4, x: 533, y: 500, class: "1-7", location: "sample" },
    { title: 'SUPER SUITENDO WORLD', attributes: [Sun], floor: 4, x: 533, y: 500, class: "1-8", location: "sample" },
    { title: 'おばけたたき', attributes: [Sun], floor: 4, x: 533, y: 500, class: "1-9", location: "sample" },
    { title: 'をかしなお菓子', attributes: [Sun], floor: 1, x: 111, y: 111, class: "2-1", location: "sample"},
    { title: '純喫茶　翠嵐浪漫', attributes: [Sun], floor: 1, x: 111, y: 111, class: "2-2", location: "sample"},
    { title: 'パイレーツ呪われた島', attributes: [Sun], floor: 1, x: 111, y: 111, class: "2-3", location: "sample"},
    { title: '2-1', attributes: [Sun], floor: 1, x: 111, y: 111, class: "2-4", location: "sample"},
    { title: '2-1', attributes: [Sun], floor: 1, x: 111, y: 111, class: "2-5", location: "sample"},
    { title: '2-1', attributes: [Sun], floor: 1, x: 111, y: 111, class: "2-6", location: "sample"},
    { title: '翠嵐クレープ～モリヤの翠イーツ屋さん～', attributes: [Sun], floor: 1, x: 111, y: 111, class: "2-7", location: "sample"},
    { title: '翠涼祭', attributes: [Sun], floor: 1, x: 111, y: 111, class: "2-8", location: "sample"},
    { title: '閉鎖病棟', attributes: [Sun], floor: 1, x: 111, y: 111, class: "2-9", location: "sample"},
    { title: 'スナダン・ジョーンズ～宝を隠す山～', attributes: [Sun], floor: 1, x: 111, y: 111, class: "3-1,3-2", location: "sample"},
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "3-3,3-5", location: "sample"},
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "3-4", location: "sample"},
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "3-6", location: "sample"},
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "3-7", location: "sample"},
    { title: '2-1', attributes: [Sun], floor: 1, x: 111, y: 111, class: "3-8", location: "sample"},
    { title: '2-1', attributes: [Sun], floor: 1, x: 111, y: 111, class: "3-9", location: "sample"},
    //部活・委員会・有志
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "IT研", location: "sample"},
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "SHBC", location: "sample"},
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "イラスト・・写真部", location: ""},
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "クイズ研究部", location: ""},
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "サッカー部", location: ""},
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "バスケットボール部", location: ""},
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "バドミントン部", location: ""},
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "ハンドボール部", location: ""},
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "ベーゴマ愛好会", location: ""},
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "ポピュラーソング部", location: ""},
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "演劇", location: ""},
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "科学部", location: ""},
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "棋道部", location: ""},
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "協議かるた部", location: ""},
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "国際交流委員会", location: ""},
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "写真部", location: ""},
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "書道部", location: ""},
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "翠嵐時報", location: ""},
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "数学研究部", location: ""},
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "生徒会", location: ""},
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "生物部", location: ""},
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "茶道部", location: ""},
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "定時制", location: ""},
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "定時制　多文化共生研究会", location: ""},
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "定時制3,4年", location: ""},
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "鉄道研究同好会", location: ""},
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "天文部", location: ""},
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "美術部", location: ""},
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "文芸部", location: ""},
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "漫研", location: ""},
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "野球部", location: ""},
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "陸上競技部", location: ""},
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "", location: ""},
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "", location: ""},
    { title: '', attributes: [Sun], floor: 1, x: 111, y: 111, class: "", location: ""},

];
