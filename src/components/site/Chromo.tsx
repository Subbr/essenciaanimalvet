import { motion } from "framer-motion";
import cromo from "@/assets/img/cromo.png";
import { Sparkles, Sun, Waves, HeartHandshake } from "lucide-react";
import { Bamboo } from "./Bamboo";

const benefits = [
  { icon: Sun, title: "Luz que acalma", text: "Comprimentos de onda específicos reduzem estresse e ansiedade." },
  { icon: Waves, title: "Equilíbrio energético", text: "Estímulo suave à recuperação e ao bem-estar geral." },
  { icon: HeartHandshake, title: "Complementar", text: "Integra-se a tratamentos clínicos, sem contraindicações." },
];

export function Chromo() {
  return (
    <section
      id="cromoterapia"
      className="relative py-28 md:py-36 overflow-hidden text-cream"
      style={{
        backgroundImage:
          "linear-gradient(135deg, color-mix(in oklab, var(--forest) 92%, black) 0%, var(--forest) 45%, color-mix(in oklab, var(--green) 85%, var(--forest)) 100%)",
      }}
    >
      <Bamboo className="-top-10 -left-20 w-[440px]" opacity={0.14} rotate={-10} />
      <Bamboo className="bottom-0 -right-24 w-[500px]" opacity={0.12} rotate={20} flip />
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(600px 400px at 20% 20%, rgba(201,165,92,0.18), transparent 60%), radial-gradient(700px 500px at 85% 80%, rgba(129,199,132,0.22), transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative order-2 lg:order-1"
        >
          <div className="absolute -inset-6 rounded-[3rem] bg-mustard/25 blur-3xl" />
          <div className="relative rounded-[2.5rem] overflow-hidden border border-cream/15 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
            <img src={cromo} alt="Sessão de cromoterapia" className="w-full h-[560px] object-cover" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2"
        >
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-mustard">
            <Sparkles size={14} /> Diferencial da clínica
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight text-cream">
            Cromoterapia: <em className="text-mustard">a cor</em> como caminho de cura.
          </h2>
          <p className="mt-6 text-cream/80 leading-relaxed max-w-xl">
            Uma terapia suave e não invasiva que utiliza luz colorida para promover relaxamento,
            equilíbrio e apoio ao tratamento clínico. Cada cor tem uma intenção — do azul que
            acalma ao verde que restaura — cuidadosamente aplicada às necessidades do seu pet.
          </p>

          <div className="mt-10 space-y-4">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4 items-start rounded-2xl bg-cream/5 border border-cream/10 p-5 backdrop-blur">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-mustard/20 text-mustard shrink-0">
                  <Icon size={20} />
                </span>
                <div>
                  <div className="font-display text-lg text-cream">{title}</div>
                  <p className="text-sm text-cream/70 mt-1">{text}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/5561900000000"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-mustard text-forest px-6 py-3 font-medium hover:bg-cream transition-colors"
          >
            <Sparkles size={16} />
            Experimente uma sessão
          </a>
        </motion.div>
      </div>
    </section>
  );
}
