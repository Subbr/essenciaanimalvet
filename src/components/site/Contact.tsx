import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send } from "lucide-react";
import { Bamboo } from "./Bamboo";

// TODO: substituir pelo número real, ex.: 5561999999999
const WHATSAPP = "5561900000000";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nome: "", telefone: "", pet: "", mensagem: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá! Sou ${form.nome} (${form.telefone}). Tutor(a) de ${form.pet}.\n\n${form.mensagem}`,
    );
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <section id="contato" className="relative py-24 md:py-32 overflow-hidden">
      <Bamboo className="-top-10 -right-20 w-[380px]" opacity={0.1} rotate={18} flip />
      <div className="mx-auto max-w-6xl px-5 md:px-8 grid lg:grid-cols-[1fr_1.05fr] gap-12 items-start">
        <div>
          <span className="text-xs uppercase tracking-[0.22em] text-terracotta">Agende agora</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
            Vamos cuidar da <em className="text-green-brand">essência</em> do seu pet?
          </h2>
          <p className="mt-6 text-forest/75 leading-relaxed max-w-md">
            Envie uma mensagem e nossa equipe retorna com opções de horário. Preferimos o
            WhatsApp — assim conseguimos ser mais atenciosos com cada família.
          </p>

          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-forest text-cream px-6 py-4 font-medium hover:bg-mustard hover:text-forest transition-colors"
          >
            <MessageCircle size={18} />
            Falar no WhatsApp
          </a>

          <div className="mt-10 rounded-2xl border border-border/70 bg-card p-5 max-w-md">
            <div className="font-display text-lg">Precisa de urgência?</div>
            <p className="text-sm text-forest/70 mt-1">
              Ligue direto para a clínica durante o horário de atendimento e informe a situação
              do seu pet.
            </p>
          </div>
        </div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[2rem] border border-border/70 bg-card p-8 shadow-[0_30px_60px_-40px_rgba(30,81,40,0.35)]"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Seu nome" value={form.nome} onChange={(v) => setForm({ ...form, nome: v })} required />
            <Field
              label="Telefone"
              type="tel"
              value={form.telefone}
              onChange={(v) => setForm({ ...form, telefone: v })}
              required
            />
          </div>
          <div className="mt-4">
            <Field
              label="Tutor / nome do pet"
              value={form.pet}
              onChange={(v) => setForm({ ...form, pet: v })}
              required
            />
          </div>
          <div className="mt-4">
            <label className="text-xs uppercase tracking-widest text-forest/60">Mensagem</label>
            <textarea
              rows={5}
              required
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              className="mt-2 w-full rounded-2xl border border-input bg-background/60 px-4 py-3 text-forest focus:outline-none focus:ring-2 focus:ring-ring/40"
              placeholder="Conte um pouco sobre o seu pet e o que precisa..."
            />
          </div>
          <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
            <Send size={16} />
            {sent ? "Enviado! Abrindo WhatsApp..." : "Enviar mensagem"}
          </button>
          <p className="mt-4 text-xs text-forest/55">
            Ao enviar, você será direcionado ao WhatsApp com sua mensagem preenchida.
          </p>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-forest/60">{label}</span>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-full border border-input bg-background/60 px-4 py-3 text-forest focus:outline-none focus:ring-2 focus:ring-ring/40"
      />
    </label>
  );
}
