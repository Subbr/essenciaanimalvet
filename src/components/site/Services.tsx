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
  type LucideIcon,
} from "lucide-react";
import consulta from "@/assets/img/consulta.png";
import banho from "@/assets/img/banho.png";
import exames from "@/assets/img/exames.png";
import petshop from "@/assets/img/petshop.png";
import vacina from "@/assets/img/vacina.png";
import cromo from "@/assets/img/cromo.png";
import { Bamboo } from "./Bamboo";

type Service = { icon: LucideIcon; title: string; text: string };
type Group = {
  id: string;
  kicker: string;
  title: string;
  description: string;
  images: string[];
  services: Service[];
};

const groups: Group[] = [
  {
    id: "clinica",
    kicker: "01 · Clínica",
    title: "Saúde veterinária",
    description:
      "Cuidado clínico completo, do preventivo ao especializado, com escuta atenta em cada consulta.",
    images: [consulta, exames, vacina],
    services: [
      { icon: Stethoscope, title: "Consulta veterinária", text: "Avaliação completa e plano individualizado." },
      { icon: Award, title: "Especialistas", text: "Cardiologia, dermatologia, ortopedia e mais." },
      { icon: Microscope, title: "Exames laboratoriais", text: "Coleta acolhedora e resultados ágeis." },
      { icon: ScanLine, title: "Exames de imagem", text: "Raio-x e ultrassom com equipamentos modernos." },
      { icon: Syringe, title: "Vacinação", text: "Protocolos atualizados para cada fase da vida." },
    ],
  },
  {
    id: "bem-estar",
    kicker: "02 · Bem-estar",
    title: "Estética & terapias",
    description:
      "Rituais de estética suave e terapias integrativas para relaxar corpo e mente do seu pet.",
    images: [banho, cromo],
    services: [
      { icon: Bath, title: "Banho e tosa", text: "Produtos suaves, secagem sem barulho e muito carinho." },
      { icon: Sparkles, title: "Cromoterapia", text: "Sessões de luz e cor para relaxamento e equilíbrio." },
    ],
  },
  {
    id: "petshop",
    kicker: "03 · Petshop",
    title: "Nutrição & essenciais",
    description:
      "Uma curadoria de rações, medicamentos e acessórios para o dia a dia com bem-estar.",
    images: [petshop],
    services: [
      { icon: ShoppingBag, title: "Venda de rações", text: "Linhas premium e naturais selecionadas por veterinários." },
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

        <div className="mt-16 flex flex-col gap-24">
          {groups.map((group, idx) => (
            <GroupBlock key={group.id} group={group} reverse={idx % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GroupBlock({ group, reverse }: { group: Group; reverse: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className={`grid lg:grid-cols-2 gap-10 lg:gap-14 items-center ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <ImageCollage images={group.images} title={group.title} />

      <div>
        <div className="text-xs uppercase tracking-[0.22em] text-mustard">{group.kicker}</div>
        <h3 className="font-display text-3xl md:text-4xl mt-2 leading-tight">{group.title}</h3>
        <p className="mt-4 text-forest/70 max-w-md">{group.description}</p>

        <ul className="mt-8 divide-y divide-border/60 border-y border-border/60">
          {group.services.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="flex items-start gap-4 py-4 group transition-colors hover:bg-sage/10 -mx-2 px-2 rounded-xl"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-sage/40 text-forest transition-transform group-hover:scale-105">
                <Icon size={18} />
              </span>
              <div className="min-w-0">
                <div className="font-display text-lg text-forest">{title}</div>
                <p className="text-sm text-forest/70 leading-relaxed">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function ImageCollage({ images, title }: { images: string[]; title: string }) {
  const [main, ...rest] = images;
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-[2.5rem] bg-sage/25 blur-2xl" />
      <div className="relative grid grid-cols-6 grid-rows-6 gap-3 h-[420px] md:h-[480px]">
        <div className="col-span-6 row-span-4 relative overflow-hidden rounded-[2rem] border border-border/60 group">
          <img
            src={main}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/35 via-transparent to-transparent" />
        </div>
        {rest.slice(0, 2).map((img, i) => (
          <div
            key={i}
            className={`row-span-2 relative overflow-hidden rounded-2xl border border-border/60 group ${
              rest.length === 1 ? "col-span-6" : "col-span-3"
            }`}
          >
            <img
              src={img}
              alt={`${title} ${i + 2}`}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/25 to-transparent" />
          </div>
        ))}
        {rest.length === 0 && (
          <div className="col-span-6 row-span-2 rounded-2xl border border-dashed border-border/60 bg-sage/10 grid place-items-center text-forest/50 text-sm italic">
            {title}
          </div>
        )}
      </div>
    </div>
  );
}
