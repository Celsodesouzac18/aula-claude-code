import { SectionHeading } from "@/components/section-heading";

const testimonials = [
  {
    quote: "A Mel volta do banho cheirosa e super tranquila. Atendimento impecável!",
    author: "Ana Paula",
    pet: "tutora da Mel 🐩",
  },
  {
    quote: "Adoro receber as fotinhas durante a tosa. Dá muita segurança.",
    author: "Ricardo",
    pet: "tutor do Thor 🐕",
  },
  {
    quote: "O Frajola odeia sair de casa, mas com o leva e traz ficou tudo fácil.",
    author: "Juliana",
    pet: "tutora do Frajola 🐈",
  },
];

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="scroll-mt-16 bg-surface py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Depoimentos" title="Quem ama, recomenda" />

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <li key={item.author}>
              <figure className="flex h-full flex-col rounded-3xl border border-border bg-background p-6">
                <p aria-label="5 de 5 estrelas" className="text-brand">
                  ★★★★★
                </p>
                <blockquote className="mt-4 flex-1 text-lg">“{item.quote}”</blockquote>
                <figcaption className="mt-6">
                  <span className="font-bold">{item.author}</span>
                  <span className="block text-sm text-muted">{item.pet}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
