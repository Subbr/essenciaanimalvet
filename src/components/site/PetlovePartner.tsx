import { HeartHandshake, ExternalLink } from "lucide-react";

export function PetlovePartner() {
  return (
    <section className="relative py-14 bg-cream">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <a
          href="https://saude.petlove.com.br/rede-credenciada/df/brasilia/essencia-animal-vet"
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col sm:flex-row items-center gap-5 rounded-[2rem] border border-border/70 bg-card p-6 md:p-7 shadow-[0_20px_45px_-35px_rgba(30,81,40,0.45)] hover:-translate-y-0.5 transition-transform"
        >
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-terracotta/15 text-terracotta">
            <HeartHandshake size={26} />
          </span>
          <div className="flex-1 text-center sm:text-left">
            <div className="text-xs uppercase tracking-[0.22em] text-terracotta">
              Parceria
            </div>
            <div className="mt-1 font-display text-xl md:text-2xl text-forest">
              Credenciados <em className="text-green-brand">Petlove Saúde</em>
            </div>
            <p className="mt-1 text-sm text-forest/70">
              Atendemos tutores com plano de saúde pet da Petlove. Consulte a rede
              credenciada.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-forest text-cream px-5 py-2.5 text-sm group-hover:bg-mustard group-hover:text-forest transition-colors">
            Ver credenciamento
            <ExternalLink size={14} />
          </span>
        </a>
      </div>
    </section>
  );
}
