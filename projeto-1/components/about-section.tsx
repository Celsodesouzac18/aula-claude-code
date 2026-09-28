const reasons = [
  {
    title: "Profissionais certificados",
    description: "Equipe treinada em manejo gentil, sem estresse para o pet.",
  },
  {
    title: "Ambiente climatizado",
    description: "Espaço limpo, seguro e separado por porte e espécie.",
  },
  {
    title: "Acompanhamento em tempo real",
    description: "Receba fotos e atualizações do seu pet pelo WhatsApp.",
  },
];

export function AboutSection() {
  return (
    <section id="sobre" className="scroll-mt-16 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
        <div
          aria-hidden
          className="grid grid-cols-2 gap-4 text-6xl sm:text-7xl [&>div]:flex [&>div]:aspect-square [&>div]:items-center [&>div]:justify-center [&>div]:rounded-3xl"
        >
          <div className="bg-accent-soft">🐕</div>
          <div className="translate-y-8 bg-brand-soft">🐈</div>
          <div className="bg-brand-soft">🐇</div>
          <div className="translate-y-8 bg-accent-soft">🦜</div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-brand">
            Por que a Patas & Cia?
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Carinho de verdade, cuidado de profissional
          </h2>
          <p className="mt-4 text-lg text-muted">
            Nascemos da paixão por animais. Aqui, cada pet é recebido pelo nome e
            tratado com a paciência e o respeito que merece.
          </p>

          <ul className="mt-8 space-y-5">
            {reasons.map((reason) => (
              <li key={reason.title} className="flex gap-4">
                <span
                  aria-hidden
                  className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent font-bold text-white"
                >
                  ✓
                </span>
                <div>
                  <h3 className="font-bold">{reason.title}</h3>
                  <p className="text-muted">{reason.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
