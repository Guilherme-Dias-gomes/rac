'use client';

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import dynamic from "next/dynamic";

const PainelMT = dynamic(() => import('@/components/products/PainelMT'), {
    ssr: false,
    loading: () => <p className="text-center mt-10">Carregando painel...</p>,
});

export default function PainelMtPage() {
    return(
        <main>
            <Header/>
            <PainelMT/>
            <Footer/>
        </main>
    )
}