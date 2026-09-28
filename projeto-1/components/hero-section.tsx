import { siteConfig } from "@/lib/site-config";

const highlights = [
  { value: "+5 mil", label: "pets atendidos" },
  { value: "10 anos", label: "de experiência" },
  { value: "4,9 ★", label: "no Google" },
];

export function HeroSection() {
  return (
    <section id="inicio" className="overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div>
          <span className="inline-block rounded-full bg-accent-soft px-3 py-1 text-sm font-bold text-accent">
            Cuidado com amor desde 2016
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Seu pet feliz, <span className="text-brand">limpinho</span> e saudável
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
            Banho, tosa, consultas veterinárias e os melhores produtos para cães e
            gatos — tudo em um só lugar, com profissionais que tratam seu pet como
            família.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand px-6 py-3 text-center font-bold text-white shadow-lg shadow-brand/25 transition-colors hover:bg-brand-strong"
            >
              Agendar pelo WhatsApp
            </a>
            <a
              href="#servicos"
              className="rounded-full border-2 border-border px-6 py-3 text-center font-bold transition-colors hover:border-brand hover:text-brand"
            >
              Ver serviços
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {highlights.map((item) => (
              <div key={item.label}>
                <dt className="sr-only">{item.label}</dt>
                <dd className="text-2xl font-extrabold">{item.value}</dd>
                <dd className="text-sm text-muted">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div aria-hidden className="relative mx-auto aspect-square w-full max-w-md">
          <div className="absolute inset-0 rounded-full bg-brand-soft" />
          <div className="absolute inset-8 flex items-center justify-center rounded-full bg-brand text-[9rem] leading-none sm:text-[11rem]">
            🐶
          </div>
          <div className="absolute right-0 top-6 flex size-24 items-center justify-center rounded-3xl bg-surface text-5xl shadow-xl">
            🐱
          </div>
          <div className="absolute bottom-6 left-0 flex items-center gap-3 rounded-2xl bg-surface px-4 py-3 shadow-xl">
            <span className="text-3xl">🛁</span>
            <span className="text-sm font-bold text-foreground">
              Banho agendado!
              <span className="block font-semibold text-muted">Hoje, 14h</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
