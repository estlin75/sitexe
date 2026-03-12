import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/common/Navbar"
import Footer from "@/components/common/Footer"

export const metadata: Metadata = {
  title: "Polityka prywatności | sitexe",
  description: "Strona polityki prywatności serwisu sitexe.",
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
            <span className="text-matrix">Polityka prywatności</span>
          </div>

          <div className="border border-matrix/20 bg-[#050505] p-8 md:p-12 shadow-[0_0_50px_rgba(0,255,159,0.08)]">
            <div className="mb-10">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-cyan mb-4">Dokument</p>
              <h1 className="font-mono text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
                Polityka prywatności
              </h1>
              <p className="mt-4 font-mono text-sm text-gray-400">Data aktualizacji: 12.03.2026</p>
            </div>

            <article className="font-mono text-sm leading-7 text-gray-300 space-y-10">
              <section>
                <h2 className="text-xl font-bold text-white mb-3">1. Informacje ogólne</h2>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Polityka dotyczy serwisu dostępnego pod adresem: https://www.sitexe.dev/</li>
                  <li>Administratorem danych osobowych jest: Aleksander Pustkowski, Eugeniusza Romera 37/5, 71-246 Szczecin.</li>
                  <li>Kontakt w sprawach prywatności: estlin20@gmail.com</li>
                  <li>Serwis przetwarza dane podane dobrowolnie przez użytkownika, głównie przez formularz kontaktowy.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">2. Wybrane metody ochrony danych stosowane przez Operatora</h2>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Połączenie z serwisem jest szyfrowane (HTTPS/SSL), co ogranicza ryzyko przechwycenia danych w transmisji.</li>
                  <li>Dane z formularza są przesyłane po zabezpieczonym połączeniu i trafiają do skrzynki operatora przez konfigurację SMTP.</li>
                  <li>Operator dba o aktualność używanego oprogramowania i komponentów, co wpływa na poziom bezpieczeństwa.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">3. Hosting</h2>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Serwis jest hostowany na platformie Vercel (vercel.com).</li>
                  <li>
                    Infrastruktura hostingowa może zapisywać logi techniczne, w szczególności:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>adresy żądanych zasobów (URL),</li>
                      <li>czas zapytania i odpowiedzi,</li>
                      <li>adres IP użytkownika,</li>
                      <li>informacje o przeglądarce i urządzeniu,</li>
                      <li>informacje o błędach technicznych.</li>
                    </ul>
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">4. Zakres i cel przetwarzania danych</h2>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    W formularzu kontaktowym zbierane są:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>adres e-mail,</li>
                      <li>treść wiadomości.</li>
                    </ul>
                  </li>
                  <li>
                    Dane są przetwarzane w celu:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>udzielenia odpowiedzi na zapytanie,</li>
                      <li>prowadzenia korespondencji związanej z usługą,</li>
                      <li>zapewnienia bezpieczeństwa i stabilności serwisu.</li>
                    </ul>
                  </li>
                  <li>Podstawą prawną jest art. 6 ust. 1 lit. b i lit. f RODO.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">5. Odbiorcy danych i przekazywanie poza EOG</h2>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Dane mogą być przetwarzane przez podmioty dostarczające hosting i infrastrukturę pocztową.</li>
                  <li>Ze względu na charakter usług chmurowych część danych technicznych może być przetwarzana poza EOG, z zastosowaniem mechanizmów zgodnych z RODO.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">6. Okres przechowywania danych</h2>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Dane z formularza przechowujemy przez czas niezbędny do obsługi zapytania i dalszej korespondencji.</li>
                  <li>Dane techniczne z logów mogą być przechowywane przez okres wymagany do bezpieczeństwa i diagnostyki.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">7. Twoje prawa</h2>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Masz prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania oraz sprzeciwu.</li>
                  <li>Masz prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">8. Pliki cookies</h2>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Serwis nie korzysta z własnych narzędzi analitycznych i marketingowych wymagających osobnej zgody cookies.</li>
                  <li>Mogą występować techniczne pliki cookies niezbędne do działania platformy hostingowej i przeglądarki.</li>
                  <li>Użytkownik może zarządzać cookies z poziomu swojej przeglądarki.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">9. Linki zewnętrzne</h2>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Serwis zawiera odnośniki do zewnętrznych stron (np. realizacje w portfolio).</li>
                  <li>Po przejściu na zewnętrzną stronę obowiązuje polityka prywatności jej operatora.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">10. Zmiany polityki prywatności</h2>
                <p>Polityka może być aktualizowana w przypadku zmian prawnych, technicznych lub organizacyjnych. Aktualna wersja jest zawsze publikowana na tej podstronie.</p>
              </section>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}