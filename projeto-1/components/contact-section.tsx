import { siteConfig } from "@/lib/site-config";

export function ContactSection() {
  return (
    <section id="contato" className="scroll-mt-16 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 rounded-[2rem] bg-brand p-8 text-white sm:p-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Vamos cuidar do seu melhor amigo?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Agende um horário em poucos minutos pelo WhatsApp. Primeira visita
              com 10% de desconto no banho!
            </p>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-white px-6 py-3 font-bold text-brand-strong transition-transform hover:scale-105"
            >
              Falar no WhatsApp
            </a>
          </div>

          <div className="grid gap-6 rounded-3xl bg-white/10 p-6 sm:grid-cols-2">
            <div>
              <h3 className="font-bold">Endereço</h3>
              <p className="mt-1 text-white/90">{siteConfig.address}</p>
            </div>
            <div>
              <h3 className="font-bold">Contato</h3>
              <p className="mt-1 text-white/90">
                {siteConfig.phone}
                <br />
                <a href={`mailto:${siteConfig.email}`} className="break-all underline">
                  {siteConfig.email}
                </a>
              </p>
            </div>
            <div className="sm:col-span-2">
              <h3 className="font-bold">Horário de funcionamento</h3>
              <dl className="mt-1 space-y-1 text-white/90">
                {siteConfig.hours.map((slot) => (
                  <div key={slot.days} className="flex justify-between gap-4">
                    <dt>{slot.days}</dt>
                    <dd className="font-semibold">{slot.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
