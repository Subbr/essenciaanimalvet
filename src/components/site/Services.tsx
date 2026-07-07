import { motion } from "framer-motion";
import {
  Stethoscope,
  Microscope,
  ScanLine,
  Syringe,
  Award,
  Bath,
  Sparkles,
  PawPrint,
  Pill,
  ShoppingBag,
} from "lucide-react";
import consulta from "@/assets/img/consulta.png";
import banho from "@/assets/img/banho.png";
import exames from "@/assets/img/exames.png";
import petshop from "@/assets/img/petshop.png";
import vacina from "@/assets/img/vacina.png";
import { Bamboo } from "./Bamboo";

type Service = { icon: any; title: string; text: string; image?: string; span?: boolean };

const groups: { title: string; kicker: string; services: Service[] }[] = [
  {
    kicker: "01 · Clínica",
    title: "Saúde veterinária",
    services: [
      {
        icon: Stethoscope,
        title: "Consulta veterinária",
        text: "Avaliação completa, escuta atenta e plano de cuidado individualizado.",
        image: consulta,
        span: true,
      },
      { icon: Award, title: "Especialistas", text: "Cardiologia, dermatologia, ortopedia e mais." },
      {
        icon: Microscope,
        title: "Exames laboratoriais",
        text: "Coleta acolhedora e resultados ágeis.",
        image: exames,
      },
      { icon: ScanLine, title: "Exames de imagem", text: "Raio-x e ultrassom com equipamentos modernos." },
      { icon: Syringe, title: "Vacinação", text: "Protocolos atualizados para cada fase da vida.", image: vacina },
    ],
  },
  {
    kicker: "02 · Bem-estar",
    title: "Estética & terapias",
    services: [
      {
        icon: Bath,
        title: "Banho e tosa",
        text: "Produtos suaves, secagem sem barulho e muito carinho.",
        image: banho,
        span: true,
      },
      {
        icon: Sparkles,
        title: "Cromoterapia",
        text: "Sessões de luz e cor para relaxamento e equilíbrio.",
      },
    ],
  },
  {
    kicker: "03 · Petshop",
    title: "Nutrição & essenciais",
    services: [
      {
        icon: ShoppingBag,
        title: "Venda de rações",
        text: "Linhas premium e naturais, selecionadas por veterinários.",
        image: petshop,
        span: true,
      },
      { icon: Pill, title: "Venda de medicamentos", text: "Farmácia veterinária com orientação profissional." },
      { icon: PawPrint, title: "PetStore", text: "Acessórios, brinquedos e conforto para o dia a dia." },
    ],
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-24 md:py-32 overflow-hidden">
      <Bamboo className="top-20 -left-20 w-[320px]" opacity={0.08} rotate={-15} />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.22em] text-terracotta">O que oferecemos</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
            Um jardim de <em className="text-green-brand">serviços</em> para cada pet.
          </h2>
          <p className="mt-5 text-forest/70">
            Da consulta preventiva à cromoterapia, tudo pensado para deixar o seu companheiro
            saudável, tranquilo e amado.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-20">
          {groups.map((group) => (
            <div key={group.title}>
              <div className="flex items-end justify-between gap-6 mb-8 border-b border-border/60 pb-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-mustard">{group.kicker}</div>
                  <h3 className="font-display text-2xl md:text-3xl mt-1">{group.title}</h3>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.services.map((s) => (
                  <ServiceCard key={s.title} {...s} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon: Icon, title, text, image, span }: Service) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className={`group card-lift relative overflow-hidden rounded-3xl border border-border/70 bg-card ${
        span ? "md:col-span-2 lg:row-span-2" : ""
      }`}
    >
      {image && (
        <div className={`relative overflow-hidden ${span ? "h-64 md:h-80" : "h-40"}`}>
          <img
            src={image}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" />
        </div>
      )}
      <div className="p-6">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-sage/35 text-forest">
          <Icon size={20} />
        </span>
        <h4 className="mt-4 font-display text-xl">{title}</h4>
        <p className="mt-2 text-sm text-forest/70 leading-relaxed">{text}</p>
      </div>
    </motion.article>
  );
}
