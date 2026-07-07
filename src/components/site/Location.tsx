import { MapPin, Clock } from "lucide-react";
import { Bamboo } from "./Bamboo";

export function Location() {
  return (
    <section id="localizacao" className="relative py-24 md:py-32 overflow-hidden bg-cream-deep/60">
      <Bamboo className="-bottom-6 -left-20 w-[360px]" opacity={0.1} rotate={-14} />
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12">
        <div>
          <span className="text-xs uppercase tracking-[0.22em] text-terracotta">Horários & localização</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
            Estamos <em className="text-green-brand">pertinho</em> de você em Taguatinga.
          </h2>

          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-border/70 bg-card p-6">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-sage/40 text-forest">
                <MapPin size={20} />
              </span>
              <h3 className="mt-4 font-display text-xl">Endereço</h3>
              <p className="mt-2 text-sm text-forest/75">
                QSA 22, Lote 1<br />
                Taguatinga Sul<br />
                Brasília / DF
              </p>
            </div>
            <div className="rounded-2xl border border-border/70 bg-card p-6">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-mustard/30 text-forest">
                <Clock size={20} />
              </span>
              <h3 className="mt-4 font-display text-xl">Horários</h3>
              <ul className="mt-2 text-sm text-forest/75 space-y-1">
                <li>Seg. a sex. — 8h às 19h</li>
                <li>Sábado — 8h às 18h</li>
                <li className="text-forest/50">Domingo — fechado</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative rounded-[2rem] overflow-hidden border border-border/70 shadow-xl min-h-[420px]">
          <iframe
            title="Mapa Essência Animal Vet"
            src="https://www.google.com/maps?q=QSA+22+Lote+1,+Taguatinga+Sul,+Bras%C3%ADlia+-+DF&output=embed"
            className="absolute inset-0 w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
