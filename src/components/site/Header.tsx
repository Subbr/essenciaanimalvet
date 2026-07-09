import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, MessageCircle, Instagram } from "lucide-react";
import logoAsset from "@/assets/logo.svg";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#cromoterapia", label: "Cromoterapia" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/85 backdrop-blur-md border-b border-border/60 shadow-[0_10px_30px_-25px_rgba(30,81,40,0.35)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-18 py-4 flex items-center justify-between gap-6">
        <a href="#inicio" aria-label="Essência Animal Vet — Início" className="flex items-center min-w-0">
          <img
            src={logoAsset.url}
            alt="Essência Animal Vet"
            className="h-12 md:h-14 w-auto object-contain"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-forest/80 hover:text-forest transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-mustard after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://www.instagram.com/essencia.animal.vet/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram Essência Animal Vet"
            className="hidden sm:grid h-10 w-10 place-items-center rounded-full border border-border text-forest hover:bg-mustard hover:border-mustard transition-colors"
          >
            <Instagram size={16} />
          </a>
          <a
            href="https://wa.me/5561998135153"
            target="_blank"
            rel="noreferrer"
            className="btn-primary hidden sm:inline-flex text-sm"
          >
            <MessageCircle size={16} />
            Agendar
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-border text-forest"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-cream/95 backdrop-blur-md border-t border-border/60"
        >
          <div className="px-5 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-forest/85 py-2 border-b border-border/40"
              >
                {l.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
