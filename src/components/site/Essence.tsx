import { motion } from "framer-motion";
import essence from "@/assets/img/essence.png";
import { Leaf, Heart, Sparkles } from "lucide-react";
import { Bamboo } from "./Bamboo";

const pillars = [
  { icon: Leaf, title: "Natural", text: "Terapias integrativas e ambiente que acalma sentidos." },
  { icon: Heart, title: "Acolhedor", text: "Recepção sem estresse, tempo dedicado a cada tutor." },
  { icon: Sparkles, title: "Clínico", text: "Protocolos atualizados, equipe especializada." },
];

export function Essence() {
  return (
    <section id="sobre" className="relative py-24 md:py-32 overflow-hidden">
      <Bamboo className="top-10 -right-24 w-[360px]" opacity={0.1} rotate={20} />
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] bg-sage/25 blur-2xl" />
          <div className="relative rounded-[2rem] overflow-hidden border border-border/60">
            <img src={essence} alt="Nossa essência" className="w-full h-[500px] object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-4 bg-forest text-cream rounded-2xl px-5 py-4 shadow-xl">
            <div className="font-display italic text-2xl">essência</div>
            <div className="text-xs opacity-80">nossa filosofia</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.22em] text-terracotta">Nossa essência</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
            Cuidado que enxerga <em className="text-green-brand">a alma</em> de cada pet.
          </h2>
          <p className="mt-6 text-forest/75 leading-relaxed">
            Na Essência Animal Vet acreditamos que saúde vai além do físico. Unimos a medicina veterinária
            baseada em evidências a terapias integrativas e ao afeto que todo animal merece — para que
            cada visita seja um momento de bem-estar, não de medo.
          </p>
          <p className="mt-4 text-forest/75 leading-relaxed">
            Nosso espaço foi desenhado com luz suave, aromas naturais e materiais orgânicos, criando
            um ambiente que acolhe pets e tutores com a mesma delicadeza.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {pillars.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-border/70 bg-card/70 p-5 card-lift">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-sage/40 text-forest">
                  <Icon size={18} />
                </span>
                <div className="mt-3 font-display text-lg">{title}</div>
                <p className="text-sm text-forest/70 mt-1">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
