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

/**属性について　Drum→ステージ、Soup→調理食販、Sun→全日制団体、Moon→定時制団体 */

export const festivalItems: FestivalItem[] = [
    //クラス　頑張ってね（小声）
    { title: 'みぞぐちのみぞしる”ミゾベガス”～かけるなら今でしょ～', attributes: [Sun], floor: 4, x: 1165, y: 500, class: "1-1", location: "2-8" },
    { title: '謎解き縁日', attributes: [Sun], floor: 4, x: 1085, y: 500, class: "1-2", location: "1-2" },
    { title: 'やきとり', attributes: [Sun, Soup], floor: 4, x: 935, y: 500, class: "1-3", location: "屋外" },
    { title: '清水の国のアリス', attributes: [Sun], floor: 4, x: 852, y: 500, class: "1-4", location: "1-4" },
    { title: 'たこ焼きたべChina！！', attributes: [Sun, Soup], floor: 4, x: 768, y: 500, class: "1-5", location: "屋外" },
    { title: '翠嵐病棟～覚悟を持って入院してください～', attributes: [Sun], floor: 4, x: 683, y: 500, class: "1-6", location: "1-6" },
    { title: '込宮隆の失踪', attributes: [Sun], floor: 4, x: 533, y: 500, class: "1-7", location: "1-7" },
    { title: 'SUPER SUITENDO WORLD', attributes: [Sun], floor: 4, x: 533, y: 500, class: "1-8", location: "2-4" },
    { title: 'おばけたたき', attributes: [Sun], floor: 4, x: 533, y: 500, class: "1-9", location: "1-9" },
    { title: 'をかしなお菓子', attributes: [Sun, Soup], floor: 1, x: 111, y: 111, class: "2-1", location: "3-7"},
    { title: '純喫茶　翠嵐浪漫', attributes: [Sun, Soup], floor: 1, x: 111, y: 111, class: "2-2", location: "2-2"},
    { title: 'パイレーツ呪われた島', attributes: [Sun], floor: 1, x: 111, y: 111, class: "2-3", location: "2-3"},
    { title: 'HASEGAWAFFLE', attributes: [Sun, Soup], floor: 1, x: 111, y: 111, class: "2-4", location: "屋外"},
    { title: 'マッスルカフェ！', attributes: [Sun, Soup], floor: 1, x: 111, y: 111, class: "2-5", location: "屋外"},
    { title: 'トイ・ニイベ・マニア！', attributes: [Sun], floor: 1, x: 111, y: 111, class: "2-6", location: "2-6"},
    { title: '翠嵐クレープ～モリヤの翠イーツ屋さん～', attributes: [Sun, Soup], floor: 1, x: 111, y: 111, class: "2-7", location: "屋外"},
    { title: '翠涼祭', attributes: [Sun], floor: 1, x: 111, y: 111, class: "2-8", location: "2-7"},
    { title: '閉鎖病棟', attributes: [Sun], floor: 1, x: 111, y: 111, class: "2-9", location: "2-9"},
    { title: 'スナダン・ジョーンズ～宝を隠す山～', attributes: [Sun], floor: 1, x: 111, y: 111, class: "3-1,3-2", location: "多目的教室"},
    { title: '新世紀翠嵐シューティングコースター～翠嵐全授業数学化計画～', attributes: [Sun], floor: 1, x: 111, y: 111, class: "3-3,3-5", location: "みらい館"},
    { title: 'MOMI of Terror', attributes: [Sun], floor: 1, x: 111, y: 111, class: "3-4", location: "3-4"},
    { title: 'あつまれ！かとひろの森', attributes: [Sun], floor: 1, x: 111, y: 111, class: "3-6", location: "3-3"},
    { title: 'コマーツ魔法学校', attributes: [Sun], floor: 1, x: 111, y: 111, class: "3-7", location: "3-5"},
    { title: 'えじえじのはちみつのりハント', attributes: [Sun], floor: 1, x: 111, y: 111, class: "3-8", location: "3-6"},
    { title: 'DESCAFE Excella', attributes: [Sun], floor: 1, x: 111, y: 111, class: "3-9", location: "3-2"},
    
    //部活・委員会・有志 
    { title: '圧倒的IT研究部', attributes: [Sun], floor: 1, x: 111, y: 111, class: "IT研究部", location: "コンピュータ室"},
    { title: '横浜翠嵐高校 校歌うたうま選手権in翠翔祭', attributes: [Sun], floor: 1, x: 111, y: 111, class: "SHBC", location: "1-1"},
    { title: '翠嵐王', attributes: [Sun], floor: 1, x: 111, y: 111, class: "クイズ研究部", location: "化学実験室"},
    { title: '三苫の1mmゲーム', attributes: [Sun], floor: 1, x: 111, y: 111, class: "サッカー部", location: "3-1"},
    { title: 'わくわく！バスケットラックアウト', attributes: [Sun], floor: 1, x: 111, y: 111, class: "バスケットボール部", location: "3-8"},
    { title: 'みねとひあさのかみかくし', attributes: [Sun], floor: 1, x: 111, y: 111, class: "バドミントン部", location: "1-5"},
    { title: 'ハンドボール　水風船', attributes: [Sun], floor: 1, x: 111, y: 111, class: "ハンドボール部", location: "部室棟"},
    { title: 'ベーゴマ体験', attributes: [Sun], floor: 1, x: 111, y: 111, class: "ベーゴマ愛好会", location: "書道室"},
    { title: '翠翔祭ライブ', attributes: [Sun], floor: 1, x: 111, y: 111, class: "ポピュラーソング部", location: "テキサス"},
    { title: '九宝祭～翠嵐サラダボウル～', attributes: [Sun], floor: 1, x: 111, y: 111, class: "演劇", location: "1-8"},
    { title: '科学部LAB', attributes: [Sun], floor: 1, x: 111, y: 111, class: "科学部", location: "物理実験室"},
    { title: '王手！　盤上の祭典in翠嵐', attributes: [Sun], floor: 1, x: 111, y: 111, class: "棋道部", location: "生物室"},
    { title: '翠嵐かるた道場', attributes: [Sun], floor: 1, x: 111, y: 111, class: "競技かるた部", location: "書道室"},
    { title: '翠嵐 Global Connection', attributes: [Sun], floor: 1, x: 111, y: 111, class: "国際交流委員会", location: "2-1"},
    { title: '写真部作品展示', attributes: [Sun], floor: 1, x: 111, y: 111, class: "写真部", location: "2階渡り廊下"},
    { title: '翠嵐書道展', attributes: [Sun], floor: 1, x: 111, y: 111, class: "書道部", location: "3階渡り廊下"},
    { title: '新聞配布', attributes: [Sun], floor: 1, x: 111, y: 111, class: "翠嵐時報", location: "3階渡り廊下"},
    { title: 'あつまれすうがく村', attributes: [Sun], floor: 1, x: 111, y: 111, class: "数学研究部", location: "化学実験室"},
    { title: 'のびるくん本舗', attributes: [Sun], floor: 1, x: 111, y: 111, class: "生徒会", location: "1-3"},
    { title: '文化祭の情熱の半分でいいから生物部に分けて頂戴・', attributes: [Sun], floor: 1, x: 111, y: 111, class: "生物部", location: "生物室"},
    { title: '翠嵐茶会', attributes: [Sun, Soup], floor: 1, x: 111, y: 111, class: "茶道部", location: "被服室"},
    { title: '鉄道研究同好会', attributes: [Sun], floor: 1, x: 111, y: 111, class: "鉄道研究同好会", location: "社会科教室"},
    { title: 'プラネタリウムと展示', attributes: [Sun], floor: 1, x: 111, y: 111, class: "天文部", location: "2-5"},
    { title: '翠嵐万博～アートパビリオン～', attributes: [Sun], floor: 1, x: 111, y: 111, class: "美術部", location: "美術室"},
    { title: '文芸部の無料部誌配布', attributes: [Sun], floor: 1, x: 111, y: 111, class: "文芸部", location: "3階渡り廊下"},
    { title: 'まんけん2025', attributes: [Sun], floor: 1, x: 111, y: 111, class: "漫研", location: "1-5"},
    { title: '速球王', attributes: [Sun], floor: 1, x: 111, y: 111, class: "野球部", location: "グラウンド"},
    { title: 'ぴったり走れ！全力Q＆RUN！', attributes: [Sun], floor: 1, x: 111, y: 111, class: "陸上競技部", location: "3-8"},
    { title: 'entree', attributes: [Sun], floor: 1, x: 111, y: 111, class: "有志", location: "選択A"},
    { title: '3D空中構造ゼミ　探求発表', attributes: [Sun], floor: 1, x: 111, y: 111, class: "有志", location: "グラウンド"},
    { title: '［革命］学生一人で企画やってみたPt(n+1)', attributes: [Sun], floor: 1, x: 111, y: 111, class: "有志", location: "2階渡り廊下"},
    { title: 'アジアンダイニングスイランパラダイス', attributes: [Moon, Soup], floor: 1, x: 111, y: 111, class: "定時制", location: "屋外"},
    { title: '定時制　多文化共生研究会', attributes: [Moon], floor: 1, x: 111, y: 111, class: "定時制　多文化共生研究会", location: "2-1"},
    { title: 'アジアンスイーツパラダイス', attributes: [Moon, Soup], floor: 1, x: 111, y: 111, class: "定時制3,4年", location: "3-9"},
    { title: 'イラスト・写真部', attributes: [Moon], floor: 1, x: 111, y: 111, class: "イラスト・写真部", location: "1-3"},
    /**ステージ */
    { title: '演劇「ごくらの生徒会戦争」', attributes: [Sun, Drum], floor: 1, x: 111, y: 111, class: "生徒会", location: "野外ステージ"},
    { title: 'ミントブルー', attributes: [Sun, Drum], floor: 1, x: 111, y: 111, class: "吹奏楽部", location: "野外ステージ"},
    { title: 'Crown Quintet the 2nd', attributes: [Sun, Drum], floor: 1, x: 111, y: 111, class: "有志", location: "野外ステージ"},
    { title: '定時制', attributes: [Moon, Drum], floor: 1, x: 111, y: 111, class: "定時制", location: "野外ステージ"},
    { title: 'バスケットボール部', attributes: [Sun, Drum], floor: 1, x: 111, y: 111, class: "バスケットボール部", location: "野外ステージ"},
    { title: '翠嵐スター発掘', attributes: [Sun, Drum], floor: 1, x: 111, y: 111, class: "翠翔祭実行委員会総務部", location: "野外ステージ"},
    { title: 'すぱげてぃ', attributes: [Sun, Drum], floor: 1, x: 111, y: 111, class: "吹奏楽部", location: "野外ステージ"},
    { title: 'ミスミス・裏ミスミス', attributes: [Sun, Drum], floor: 1, x: 111, y: 111, class: "翠翔祭実行委員会総務部", location: "野外ステージ"},
    { title: 'スイラン・ブラバン・ビックバン！', attributes: [Sun, Drum], floor: 1, x: 111, y: 111, class: "吹奏楽部", location: "体育館ステージ"},
    { title: '弦楽部', attributes: [Sun, Drum], floor: 1, x: 111, y: 111, class: "弦楽部", location: "体育館ステージ"},
    { title: '書道部', attributes: [Sun, Drum], floor: 1, x: 111, y: 111, class: "書道部", location: "体育館ステージ"},
    { title: 'ダンス部', attributes: [Sun, Drum], floor: 1, x: 111, y: 111, class: "ダンス部", location: "体育館ステージ"},
    { title: '音楽部', attributes: [Sun, Drum], floor: 1, x: 111, y: 111, class: "音楽部", location: "体育館ステージ"},
    { title: '朝鮮学校舞踊部', attributes: [Sun, Drum], floor: 1, x: 111, y: 111, class: "有志", location: "体育館ステージ"},

];
