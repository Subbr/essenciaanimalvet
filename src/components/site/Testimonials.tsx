import { motion } from "framer-motion";
import { Star, Quote, ExternalLink } from "lucide-react";
import { Bamboo } from "./Bamboo";

const REVIEWS_URL =
  "https://www.google.com/search?q=Ess%C3%AAncia+Animal+Vet+Taguatinga";

const testimonials = [
  {
    name: "Fabiana Figuerêdo",
    text:
      "A Dra. Rafaela é atenciosa como poucas. Explicou cada detalhe do tratamento do meu pet com paciência e carinho — saímos da consulta com a sensação de estar em casa.",
  },
  {
    name: "Alice Ramos",
    text:
      "Clínica impecável, organizada e cheirosa. A equipe recebe cada bichinho pelo nome. Voltei para o petshop e encontrei tudo o que precisava, com curadoria de qualidade.",
  },
  {
    name: "Laila Kalsing",
    text:
      "Levei minha gatinha para uma emergência e fui acolhida com muito profissionalismo. A Dra. Raphaela transmite segurança e amor pelo que faz. Recomendo de olhos fechados.",
  },
  {
    name: "Ellen Ferreira",
    text:
      "O ambiente é lindo, calmo e realmente parece pensado para reduzir o estresse dos pets. O cuidado da equipe faz toda a diferença — meu cão adora ir.",
  },
  {
    name: "Fernanda Erika",
    text:
      "Atendimento humanizado do começo ao fim. A Dra. Rafaela é uma profissional excelente e o petshop tem produtos que eu não encontrava em outros lugares.",
  },
  {
    name: "Leonardo Souza Vieira",
    text:
      "Organização exemplar, pontualidade e um carinho genuíno com os animais. É a clínica veterinária mais completa que já frequentei em Taguatinga.",
  },
];

export function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="relative py-24 md:py-32 overflow-hidden bg-cream-deep/40"
    >
      <Bamboo className="-top-8 -right-16 w-[340px]" opacity={0.1} rotate={16} flip />
      <Bamboo className="-bottom-10 -left-20 w-[360px]" opacity={0.09} rotate={-12} />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.22em] text-terracotta">
            Depoimentos
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
            O que dizem <em className="text-green-brand">nossos tutores</em>
          </h2>

          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-border/70 bg-card px-5 py-2.5 shadow-sm">
            <div className="flex items-center gap-1 text-mustard">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="font-display text-lg text-forest">4.9</span>
            <span className="text-xs text-forest/60 uppercase tracking-widest">
              Avaliação no Google
            </span>
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="relative rounded-[1.75rem] border border-border/70 bg-card p-7 shadow-[0_20px_45px_-35px_rgba(30,81,40,0.5)] hover:-translate-y-1 transition-transform"
            >
              <Quote
                size={28}
                className="text-mustard/70 absolute top-5 right-5"
              />
              <div className="flex items-center gap-1 text-mustard">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-4 text-forest/80 leading-relaxed text-[0.98rem]">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-sage/50 text-forest font-display italic">
                  {t.name[0]}
                </span>
                <div>
                  <div className="font-display text-forest">{t.name}</div>
                  <div className="text-xs text-forest/55 uppercase tracking-widest">
                    Tutor(a)
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={REVIEWS_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost inline-flex"
          >
            <ExternalLink size={16} />
            Ver mais avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
