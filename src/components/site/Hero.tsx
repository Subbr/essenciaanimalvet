import { motion } from "framer-motion";
import { MessageCircle, CalendarHeart } from "lucide-react";
import hero from "@/assets/img/hero.png";
import { Bamboo } from "./Bamboo";

const tagline = ["Saúde", "e", "amor", "para", "a", "essência", "de", "cada", "vida."];

export function Hero() {
  return (
    <section id="inicio" className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      <Bamboo className="-top-10 -left-16 w-[380px]" opacity={0.14} rotate={-8} />
      <Bamboo className="top-40 -right-20 w-[420px]" opacity={0.12} rotate={12} flip />

      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="relative">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-terracotta"
          >
            <span className="h-px w-8 bg-terracotta/60" />
            Clínica veterinária & petshop
          </motion.span>

          <h1 className="mt-5 font-display text-[2.7rem] leading-[1.05] sm:text-6xl lg:text-[4.4rem] text-forest">
            Essência <em className="text-green-brand not-italic">Animal</em>{" "}
            <span className="italic text-mustard">Vet</span>
          </h1>

          <p className="mt-6 font-display text-xl sm:text-2xl lg:text-[1.7rem] leading-snug text-forest/85 max-w-xl">
            {tagline.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.08, duration: 0.55, ease: "easeOut" }}
                className="inline-block mr-[0.28em]"
              >
                {w === "essência" ? <em className="text-green-brand">{w}</em> : w}
              </motion.span>
            ))}
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="mt-6 max-w-lg text-forest/70 leading-relaxed"
          >
            Uma clínica veterinária e petshop em Taguatinga que une ciência, natureza e afeto.
            Cuidado integral, cromoterapia e produtos selecionados para cada fase da vida do seu pet.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a href="#contato" className="btn-primary">
              <CalendarHeart size={18} />
              Agendar consulta
            </a>
            <a
              href="https://wa.me/5561900000000"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              <MessageCircle size={18} />
              Fale no WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.7 }}
            className="mt-10 flex gap-6 text-xs text-forest/60"
          >
            <div>
              <div className="font-display text-2xl text-forest">+12</div>
              <div>anos cuidando</div>
            </div>
            <div className="w-px bg-border" />
            <div>
              <div className="font-display text-2xl text-forest">98%</div>
              <div>tutores satisfeitos</div>
            </div>
            <div className="w-px bg-border" />
            <div>
              <div className="font-display text-2xl text-forest">7 dias</div>
              <div>de atendimento*</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-sage/40 via-transparent to-mustard/25 blur-2xl" />
          <div className="relative rounded-[2.5rem] overflow-hidden border border-border/60 shadow-[0_40px_80px_-40px_rgba(30,81,40,0.45)]">
            <img src={hero} alt="Cão e gato serenos em ambiente natural" className="w-full h-[520px] md:h-[620px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/25 via-transparent to-transparent" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.7 }}
            className="absolute -bottom-6 -left-4 md:-left-10 bg-cream border border-border/60 rounded-2xl px-5 py-4 shadow-xl flex items-center gap-3 max-w-[260px]"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-sage/50 text-forest">🌿</span>
            <div>
              <div className="text-xs uppercase tracking-widest text-terracotta">Cuidado natural</div>
              <div className="font-display text-forest">Ciência com afeto</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
