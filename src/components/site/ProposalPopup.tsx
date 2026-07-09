import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, LayoutTemplate, Link2, Server, Globe2, Mail, Sparkles } from "lucide-react";
import { Bamboo } from "./Bamboo";

// Para remover o popup depois: basta trocar para "false" nesta linha.
// Nenhuma outra alteração no repositório é necessária.
export const PROPOSAL_POPUP_ENABLED = true;

const SCROLL_THRESHOLD = 0.25; // 25% da página
const TIME_THRESHOLD_MS = 10000; // 10 segundos

export function ProposalPopup() {
  const [open, setOpen] = useState(false);
  const dismissedRef = useRef(false);

  useEffect(() => {
    if (!PROPOSAL_POPUP_ENABLED) return;

    const trigger = () => {
      if (dismissedRef.current) return;
      setOpen(true);
    };

    const timer = window.setTimeout(trigger, TIME_THRESHOLD_MS);

    const onScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;
      const progress = window.scrollY / scrollableHeight;
      if (progress >= SCROLL_THRESHOLD) {
        trigger();
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const close = () => {
    dismissedRef.current = true;
    setOpen(false);
  };

  if (!PROPOSAL_POPUP_ENABLED) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-forest/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          onClick={close}
        >
          <motion.div
            className="relative w-full max-w-lg max-h-[88vh] overflow-y-auto rounded-3xl bg-cream shadow-[0_30px_80px_-20px_rgba(30,81,40,0.55)] p-7 md:p-9"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Bamboo className="-top-8 -right-10 w-[180px] pointer-events-none" opacity={0.14} rotate={12} />

            <button
              onClick={close}
              aria-label="Fechar"
              className="absolute top-4 right-4 rounded-full p-2 text-forest/60 hover:text-forest hover:bg-forest/5 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sage/25 text-forest text-xs font-medium px-3 py-1">
                <Sparkles className="h-3.5 w-3.5" />
                Proposta de parceria
              </span>

              <h2 className="mt-4 font-display text-2xl md:text-3xl text-forest leading-tight">
                Essência Animal Vet
              </h2>
              <p className="font-display italic text-sage text-base mt-1">
                Preparado para a Dra. Raphaela
              </p>

              <ul className="mt-6 space-y-4">
                <li className="flex gap-3">
                  <LayoutTemplate className="h-5 w-5 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-forest text-sm">Site institucional (landing page)</p>
                    <p className="text-forest/70 text-sm mt-0.5">
                      Informações, contatos e serviços em um só lugar — com até 3 versões para validação junto à clínica.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Link2 className="h-5 w-5 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-forest text-sm">Página de links (estilo "linktree")</p>
                    <p className="text-forest/70 text-sm mt-0.5">
                      Para uso nas redes sociais, em domínio próprio da Essência Animal Vet — sem mensalidade de ferramentas de terceiros.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Server className="h-5 w-5 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-forest text-sm">Hospedagem e suporte</p>
                    <p className="text-forest/70 text-sm mt-0.5">
                      Suporte para manter o site publicado após a entrega — hospedagem e domínio ficam totalmente em posse da Essência Animal Vet.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Globe2 className="h-5 w-5 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-forest text-sm">Domínio próprio</p>
                    <p className="text-forest/70 text-sm mt-0.5">
                      Assistência completa na contratação e configuração do domínio da clínica.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Mail className="h-5 w-5 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-forest text-sm">E-mail profissional</p>
                    <p className="text-forest/70 text-sm mt-0.5">
                      Configuração de caixa de e-mail no domínio contratado.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-7 rounded-2xl bg-mustard/15 border border-mustard/30 p-4">
                <p className="text-forest/70 text-xs uppercase tracking-wide font-medium">Investimento</p>
                <p className="font-display text-2xl text-forest mt-1">
                  R$ 1.200 <span className="text-base font-sans font-normal text-forest/70">em até 3x sem juros</span>
                </p>
                <p className="text-sm text-terracotta font-medium mt-1">10% de desconto no pagamento via PIX</p>
              </div>

              <p className="mt-4 text-[11px] leading-relaxed text-forest/55">
                Custos atrelados (fora do investimento acima): registro do domínio via Registro.br, em nome da Essência Animal Vet — R$ 49/ano, com desconto progressivo ao contratar por período maior.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
