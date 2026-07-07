import { motion } from "framer-motion";
import recepcao from "@/assets/img/recepcao.png";
import { Bamboo } from "./Bamboo";

export function Gallery() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <Bamboo className="top-0 -right-16 w-[300px]" opacity={0.09} rotate={15} />
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.22em] text-terracotta">Ambiente</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
            Um espaço que <em className="text-green-brand">respira</em> calma.
          </h2>
          <p className="mt-6 text-forest/70 leading-relaxed">
            Cada canto da Essência Animal Vet foi pensado para tornar a visita leve. Recepção
            aconchegante, materiais naturais, luz difusa e aromas suaves — para que pets e tutores
            se sintam em casa desde a porta de entrada.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
            {[
              { n: "01", t: "Recepção sem estresse" },
              { n: "02", t: "Consultórios acolhedores" },
              { n: "03", t: "Sala de terapia integrativa" },
            ].map((x) => (
              <div key={x.n} className="rounded-2xl border border-border/70 bg-card p-4">
                <div className="font-display italic text-mustard">{x.n}</div>
                <div className="text-xs text-forest/75 mt-2">{x.t}</div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[3rem] bg-sage/30 blur-2xl" />
          <div className="relative rounded-[2rem] overflow-hidden border border-border/60 shadow-[0_40px_70px_-40px_rgba(30,81,40,0.45)]">
            <img src={recepcao} alt="Recepção da clínica" className="w-full h-[520px] object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
