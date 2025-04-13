'use client'
import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnnouncementManager from './AnnouncementManager'
import StatusManager from './StatusManager'
import DevSwitch from "@/components/developer/developer";
import { supabase } from '@/utils/supabase/supabase'

// 既存のお知らせ型
export type Announcement = {
    id: number
    headline: string
    title: string
    content: string
    details: string
    link: string
    created_at: string
}

// ステータス型（status は string 型の場合）
export type StatusItem = {
    id: number
    name: string
    status: string
}

// プロフィール型（開発者判定で利用）
export type Developer = {
    id: string
    role: string | null
}

/** 前回の値を返すカスタムフック */
function usePrevious<T>(value: T): T {
    const ref = useRef<T>(value)
    useEffect(() => {
        ref.current = value
    }, [value])
    return ref.current
}

/**
 * ToggleSwitch コンポーネント
 * ※ コンテナの幅を w-48（192px）にして、テキストが収まるように調整
 */
function ToggleSwitch({
    activeTab,
    setActiveTab
}: {
    activeTab: 'announcement' | 'status'
    setActiveTab: (tab: 'announcement' | 'status') => void
}) {
    // コンテナ: w-48 (192px), 高さ: h-10, thumb: 横幅は1/2 (96px)
    return (
        <div
            className="relative w-48 h-10 bg-gray-200 rounded-full cursor-pointer select-none"
            onClick={() =>
                setActiveTab(activeTab === 'announcement' ? 'status' : 'announcement')
            }
        >
            {/* アニメーションするサークル（thumb） */}
            <motion.div
                className="absolute bg-blue-500 rounded-full w-1/2 h-10"
                animate={{ x: activeTab === 'announcement' ? 0 : 96 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
            {/* ラベル部分 */}
            <div className="relative z-10 flex justify-between items-center h-full px-4 text-sm font-medium text-gray-800">
                <span className={activeTab === 'announcement' ? 'font-bold' : ''}>
                    お知らせ
                </span>
                <span className={activeTab === 'status' ? 'font-bold' : ''}>
                    ステータス
                </span>
            </div>
        </div>
    )
}

/**
 * 新しいタブのアニメーション向きを決定する関数
 * @param current 新しく表示するタブ
 * @param previous 前に表示されていたタブ
 */
const getVariants = (
    current: 'announcement' | 'status',
    previous: 'announcement' | 'status'
) => {
    // ステータス → お知らせ の場合
    if (current === 'announcement' && previous === 'status') {
        return {
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: 20 }
        }
    }
    // お知らせ → ステータス の場合
    else if (current === 'status' && previous === 'announcement') {
        return {
            initial: { opacity: 0, x: -20 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -20 }
        }
    }
    // 同じ状態の場合（または初回表示）
    return {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 }
    }
}

export default function DashboardClient() {
    const [activeTab, setActiveTab] = useState<'announcement' | 'status'>('announcement')
    // 前回のタブ状態を保持するカスタムフック
    const prevTab = usePrevious(activeTab)

    // 現在のユーザーのプロファイルを取得
    const [developer, setDeveloper] = useState<Developer | null>(null)

    useEffect(() => {
        async function fetchDeveloper() {
            // supabase の認証から現在のユーザー情報を取得（利用している認証方法に合わせて調整）
            const { data: { user } } = await supabase.auth.getUser()

            if (!user?.id) return

            const { data, error } = await supabase
                .from('profiles')
                .select('id, role')
                .eq('id', user.id)
                .single()

            if (error) {
                console.error('Failed to fetch profile:', error)
            } else if (data) {
                setDeveloper(data as Developer)
            }
        }
        fetchDeveloper()
    }, [])

    return (
        <div className="p-6">
            {/* developer 権限のあるユーザーのみ、DevSwitch（開発者向けスイッチ）を表示 */}
            {developer?.role === 'developer' && (
                <div className="mb-6">
                    <DevSwitch />
                </div>
            )}
            <h1 className="text-3xl font-bold mb-6">ダッシュボード</h1>

            {/* タブ切り替え用スイッチ */}
            <div className="mb-6">
                <ToggleSwitch activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            {/* タブに応じた内容の表示（アニメーション付き） */}
            <AnimatePresence mode="wait">
                {activeTab === 'announcement' && (
                    <motion.div
                        key="announcement"
                        variants={getVariants('announcement', prevTab)}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                    >
                        <AnnouncementManager />
                    </motion.div>
                )}
                {activeTab === 'status' && (
                    <motion.div
                        key="status"
                        variants={getVariants('status', prevTab)}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                    >
                        <StatusManager />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
