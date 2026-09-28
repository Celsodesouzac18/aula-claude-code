export const siteConfig = {
  name: "Patas & Cia",
  phone: "(11) 99999-9999",
  whatsappUrl: "https://wa.me/5511999999999",
  email: "contato@patasecia.com.br",
  address: "Rua dos Bichos, 123 — Centro, São Paulo/SP",
  hours: [
    { days: "Segunda a sexta", time: "8h às 19h" },
    { days: "Sábado", time: "8h às 16h" },
    { days: "Domingo", time: "Fechado" },
  ],
  nav: [
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ],
} as const;
