"use client";

import { useRouter } from "next/navigation";

export default function PeriodicTable() {
    const router = useRouter();

    return (
        <div style={{
            backgroundImage: 'url("periodicTable.png")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: 'black',
            height: '100vh',
            width: '100vw',
        }}>

        </div>
    )
}       