import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/common/Navbar"
import Footer from "@/components/common/Footer"

export const metadata: Metadata = {
  title: "Polityka prywatnosci | sitexe",
  description: "Strona polityki prywatnosci serwisu sitexe.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <Navbar />

      <section className="relative z-10 w-full pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-8 font-mono text-xs text-gray-500 uppercase tracking-[0.3em]">
            <Link href="/" className="transition-colors hover:text-cyan">
              Start
            </Link>
            <span className="mx-3 text-gray-700">/</span>
            <span className="text-matrix">Polityka prywatnosci</span>
          </div>

          <div className="border border-matrix/20 bg-[#050505] p-8 md:p-12 shadow-[0_0_50px_rgba(0,255,159,0.08)]">
            <div className="mb-10">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-cyan mb-4">Dokument</p>
              <h1 className="font-mono text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
                Polityka prywatnosci
              </h1>
              <p className="mt-4 max-w-2xl font-mono text-sm leading-relaxed text-gray-400">
                Tutaj wkleisz finalna tresc polityki prywatnosci. Mozesz bezposrednio podmienic ponizszy blok tekstu.
              </p>
            </div>

            <article className="space-y-8 font-mono text-sm leading-7 text-gray-300">
              <section>
                <h2 className="mb-3 text-lg font-bold uppercase tracking-wide text-white">[ Wklej tresc ]</h2>
                <p>
                  W tym miejscu wklej gotowa polityke prywatnosci. Najprosciej zastapic cala zawartosc elementu article
                  wlasnym tekstem, naglowkami i listami.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-lg font-bold uppercase tracking-wide text-white">[ Przykladowa sekcja ]</h2>
                <p>
                  To jest tymczasowy placeholder. Po otrzymaniu finalnej tresci mozesz wkleic ja tutaj 1:1 albo moge Ci
                  potem sformatowac dokument na gotowo.
                </p>
              </section>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}