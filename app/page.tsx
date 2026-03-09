"use client"
import { useLenis } from "@/hooks/useLenis"
import Navbar from "@/components/common/Navbar"
import Footer from "@/components/common/Footer"
import MatrixRain from "@/components/effects/MatrixRain"
import Hero from "@/components/sections/Hero"
import Services from "@/components/sections/Services"
import TechStack from "@/components/sections/TechStack"
import Portfolio from "@/components/sections/Portfolio"
import WhyUs from "@/components/sections/WhyUs"
import Process from "@/components/sections/Process"
import Testimonials from "@/components/sections/Testimonials"
import Contact from "@/components/sections/Contact"

export default function Home() {
  useLenis()

  return (
    <main className="relative w-full overflow-hidden">
      <MatrixRain />
      <Navbar />
      
      <div className="relative z-10 flex flex-col items-center w-full">
        <Hero />
        <Services />
        <TechStack />
        <Portfolio />
        <WhyUs />
        <Process />
        <Testimonials />
        <Contact />
      </div>

      <Footer />
    </main>
  )
}