"use client"
import { motion } from "motion/react"
import { useForm } from "react-hook-form" // Fix import as we requested hook-form
import { useForm as useHookForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { toast } from "sonner"
import NeonGlitchCTA from "../common/NeonGlitchCTA"
import { SITE_CONFIG } from "@/lib/constants"

const contactSchema = z.object({
  email: z.string().email("Invalid format."),
  message: z.string().min(10, "Min 10 chars required."),
})

type ContactFormValues = z.infer<typeof contactSchema>

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useHookForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormValues) => {
    try {
      // Prawdziwe strzelenie do Twojego nowego pliku API (Nodemailer)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("API Error");

      // Komunikat o sukcesie
      toast.success("TRANSMISSION_SUCCESSFUL. Będziemy w kontakcie.");
      reset(); 
      
    } catch (error) {
      // Komunikat o błędzie (np. jak podasz złe hasło w .env)
      toast.error("ERROR: CONNECTION_LOST. Sprawdź konsole.");
      console.error(error);
    }
  }

  return (
    <section id="contact" className="w-full py-32 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-matrix/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto border border-matrix/30 bg-[#050505] p-8 md:p-12 shadow-2xl">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="font-mono text-3xl font-black text-white mb-2 uppercase">USTANÓW POŁĄCZENIE</h2>
            <p className="font-mono text-gray-500 text-sm">Zainicjuj połączenie. Odpowiemy w 24h.</p>
            <p className="font-mono text-matrix text-xs mt-4">DIRECT: {SITE_CONFIG.email}</p>
          </motion.div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block font-mono text-xs text-gray-400 mb-2">ADRES_POCZTOWY</label>
              <input 
                {...register("email")}
                className="w-full bg-black border border-gray-800 focus:border-matrix focus:ring-1 focus:ring-matrix outline-none p-3 font-mono text-sm text-white transition-all"
                placeholder="you@domain.com"
              />
              {errors.email && <p className="text-red-500 font-mono text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block font-mono text-xs text-gray-400 mb-2">WIADOMOŚĆ</label>
              <textarea 
                {...register("message")}
                rows={4}
                className="w-full bg-black border border-gray-800 focus:border-matrix focus:ring-1 focus:ring-matrix outline-none p-3 font-mono text-sm text-white transition-all resize-none"
                placeholder="Describe your architecture needs..."
              />
              {errors.message && <p className="text-red-500 font-mono text-xs mt-1">{errors.message.message}</p>}
            </div>

            <div className="pt-4 w-full flex justify-center">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-4 font-mono font-bold uppercase tracking-widest transition-all ${isSubmitting ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'border border-matrix text-matrix hover:bg-matrix hover:text-black shadow-[0_0_15px_rgba(0,255,159,0.2)]'}`}
              >
                {isSubmitting ? 'ENCRYPTING_DATA...' : 'WYŚLIJ_WIADOMOŚĆ'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}