// /app/map/page.tsx
"use client";
import { DevOnly } from "@/components/DevOnly";

import { Suspense } from "react";
import Three from "./Three";

export default function ThreePage() {
    return (
        <DevOnly>
            <Suspense fallback={<div>Loading...</div>}>
                <Three />
            </Suspense>
        </DevOnly>
    );
}
