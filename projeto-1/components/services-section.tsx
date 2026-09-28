import { SectionHeading } from "@/components/section-heading";

const services = [
  {
    icon: "🛁",
    title: "Banho",
    description: "Produtos hipoalergênicos, secagem cuidadosa e perfume suave.",
  },
  {
    icon: "✂️",
    title: "Tosa",
    description: "Tosa higiênica, na tesoura ou na máquina, respeitando cada raça.",
  },
  {
    icon: "🩺",
    title: "Veterinário",
    description: "Consultas, vacinas e check-ups com veterinários experientes.",
  },
  {
    icon: "🦴",
    title: "Pet shop",
    description: "Rações, petiscos, brinquedos e acessórios das melhores marcas.",
  },
  {
    icon: "🏡",
    title: "Hotelzinho",
    description: "Hospedagem segura e divertida enquanto você viaja tranquilo.",
  },
  {
    icon: "🚐",
    title: "Leva e traz",
    description: "Buscamos e entregamos seu pet em casa, com todo conforto.",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="scroll-mt-16 bg-surface py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Nossos serviços"
          title="Tudo o que seu pet precisa"
          description="Do banho semanal à consulta de rotina, cuidamos de cada detalhe."
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li
              key={service.title}
              className="rounded-3xl border border-border bg-background p-6 transition-transform hover:-translate-y-1"
            >
              <span
                aria-hidden
                className="flex size-14 items-center justify-center rounded-2xl bg-brand-soft text-3xl"
              >
                {service.icon}
              </span>
              <h3 className="mt-5 text-xl font-bold">{service.title}</h3>
              <p className="mt-2 text-muted">{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
