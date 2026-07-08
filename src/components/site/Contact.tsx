import { motion } from "framer-motion";
import { MessageCircle, Phone, Clock, MapPin } from "lucide-react";
import { Bamboo } from "./Bamboo";

const WHATSAPP = "5561998135153";

export function Contact() {
  return (
    <section id="contato" className="relative py-24 md:py-32 overflow-hidden">
      <Bamboo className="-top-10 -right-20 w-[380px]" opacity={0.1} rotate={18} flip />
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2.5rem] border border-border/70 bg-card p-10 md:p-14 text-center shadow-[0_30px_60px_-40px_rgba(30,81,40,0.35)] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-sage/25 via-transparent to-mustard/15 pointer-events-none" />
          <div className="relative">
            <span className="text-xs uppercase tracking-[0.22em] text-terracotta">Agende agora</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
              Vamos cuidar da <em className="text-green-brand">essência</em> do seu pet?
            </h2>
            <p className="mt-6 text-forest/75 leading-relaxed max-w-xl mx-auto">
              Fale com a nossa equipe pelo WhatsApp — respondemos rápido e com todo carinho
              para encontrar o melhor horário para o seu pet.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-forest text-cream px-7 py-4 font-medium hover:bg-mustard hover:text-forest transition-colors"
              >
                <MessageCircle size={18} />
                Falar no WhatsApp
              </a>
              <a
                href="tel:+5561998135153"
                className="inline-flex items-center gap-3 rounded-full border border-forest/30 text-forest px-7 py-4 font-medium hover:bg-forest hover:text-cream transition-colors"
              >
                <Phone size={18} />
                (61) 99813-5153
              </a>
            </div>

            <div className="mt-12 grid sm:grid-cols-3 gap-6 text-sm text-forest/75 text-left sm:text-center">
              <div className="flex sm:flex-col items-start sm:items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-sage/40 text-forest shrink-0">
                  <Phone size={16} />
                </span>
                <div>
                  <div className="font-display text-forest">WhatsApp & Telefone</div>
                  <div>(61) 99813-5153</div>
                </div>
              </div>
              <div className="flex sm:flex-col items-start sm:items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-sage/40 text-forest shrink-0">
                  <Clock size={16} />
                </span>
                <div>
                  <div className="font-display text-forest">Horários</div>
                  <div>Seg–Sex 8h–19h · Sáb 8h–18h</div>
                </div>
              </div>
              <div className="flex sm:flex-col items-start sm:items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-sage/40 text-forest shrink-0">
                  <MapPin size={16} />
                </span>
                <div>
                  <div className="font-display text-forest">Endereço</div>
                  <div>QSA 22, Lote 1 — Taguatinga Sul</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
