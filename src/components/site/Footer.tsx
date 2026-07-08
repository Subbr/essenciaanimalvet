import { Instagram, Facebook, MapPin, Clock, PawPrint, Phone } from "lucide-react";
import { Bamboo } from "./Bamboo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest text-cream/85 pt-24 pb-10">
      <Bamboo className="-top-10 -left-16 w-[300px]" opacity={0.12} rotate={-10} />
      <Bamboo className="bottom-0 -right-16 w-[320px]" opacity={0.1} rotate={15} flip />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-cream text-forest font-display text-lg italic">
              e
            </span>
            <div className="font-display text-xl text-cream">
              Essência <span className="italic text-mustard">Animal Vet</span>
            </div>
          </div>
          <p className="mt-4 text-sm text-cream/70 leading-relaxed">
            Saúde e amor para a essência de cada vida.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://www.instagram.com/essencia.animal.vet/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-cream/25 hover:bg-mustard hover:text-forest hover:border-mustard transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full border border-cream/25 hover:bg-mustard hover:text-forest hover:border-mustard transition-colors"
            >
              <Facebook size={16} />
            </a>
            <a
              href="tel:+5561998135153"
              aria-label="Telefone"
              className="grid h-10 w-10 place-items-center rounded-full border border-cream/25 hover:bg-mustard hover:text-forest hover:border-mustard transition-colors"
            >
              <Phone size={16} />
            </a>
          </div>
          <a
            href="tel:+5561998135153"
            className="mt-4 inline-flex items-center gap-2 text-sm text-cream/80 hover:text-mustard transition-colors"
          >
            <Phone size={14} className="text-mustard" />
            (61) 99813-5153
          </a>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-mustard">Serviços</div>
          <ul className="mt-4 space-y-2 text-sm text-cream/75">
            <li>Consulta veterinária</li>
            <li>Exames laboratoriais e imagem</li>
            <li>Vacinação</li>
            <li>Banho e tosa</li>
            <li>Cromoterapia</li>
            <li>Petshop e farmácia</li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-mustard">Endereço</div>
          <p className="mt-4 text-sm text-cream/75 flex gap-2">
            <MapPin size={16} className="mt-0.5 shrink-0 text-mustard" />
            QSA 22, Lote 1 — Taguatinga Sul, Brasília/DF
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-mustard">Horários</div>
          <ul className="mt-4 space-y-1 text-sm text-cream/75">
            <li className="flex gap-2 items-start">
              <Clock size={16} className="mt-0.5 shrink-0 text-mustard" />
              <div>
                Seg. a sex. 8h–19h<br />
                Sábado 8h–18h<br />
                Domingo fechado
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 mt-14 pt-6 border-t border-cream/15 flex flex-col sm:flex-row justify-between gap-3 text-xs text-cream/55">
        <div className="flex items-center gap-2">
          <PawPrint size={14} className="text-mustard" />
          © {new Date().getFullYear()} Essência Animal Vet. Todos os direitos reservados.
        </div>
        <div>Feito com cuidado natural em Taguatinga.</div>
      </div>
    </footer>
  );
}
