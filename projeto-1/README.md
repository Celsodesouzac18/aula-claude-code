# Patas & Cia — Landing Page

Site institucional de uma petshop fictícia, desenvolvido como projeto prático do curso Claude AI (Udemy). A página apresenta os serviços da empresa, seção sobre, depoimentos e contato, com botão de agendamento direto via WhatsApp.

## Sobre o projeto

| Campo        | Detalhe                                           |
| ------------ | ------------------------------------------------- |
| Tipo         | Landing page institucional (single-page)          |
| Negócio      | Petshop — banho, tosa, veterinário e hospedagem   |
| Público-alvo | Donos de cães e gatos na região de São Paulo/SP   |
| Objetivo     | Converter visitantes em agendamentos via WhatsApp |

### Seções da página

- **Header** — logotipo, navegação âncora e CTA de contato
- **Hero** — headline, highlights (5 mil pets, 10 anos, 4,9 ★) e CTA WhatsApp
- **Serviços** — Banho, Tosa, Veterinário, Pet shop, Hotelzinho, Leva e traz
- **Sobre** — história e diferenciais da empresa
- **Depoimentos** — avaliações de clientes
- **Contato** — endereço, horários e formulário
- **Footer** — links e informações institucionais

## Stack

| Camada    | Tecnologia                                               |
| --------- | -------------------------------------------------------- |
| Framework | Next.js 16.3 (App Router)                               |
| UI        | React 19.2                                               |
| Linguagem | TypeScript 5 (`strict`)                                  |
| Estilos   | TailwindCSS 4 (via `@tailwindcss/postcss`)               |
| Lint      | ESLint 9 + `eslint-config-next` (core-web-vitals + ts)   |

## Primeiros passos

Pré-requisito: **Node.js 20+**.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando              | Descrição                                |
| -------------------- | ---------------------------------------- |
| `npm run dev`        | Servidor de desenvolvimento (porta 3000) |
| `npm run build`      | Build de produção                        |
| `npm run start`      | Sobe o build de produção                 |
| `npm run lint`       | Executa o ESLint                         |
| `npm run type-check` | Checagem de tipos (`tsc --noEmit`)       |

Após uma série de mudanças, rode:

```bash
npm run type-check && npm run lint
```

## Estrutura

```
projeto-1/
├── app/
│   ├── layout.tsx        # Layout raiz (fontes, metadata)
│   ├── page.tsx          # Página principal (monta todas as seções)
│   └── globals.css       # Tailwind + tokens de tema (claro/escuro)
├── components/
│   ├── hero-section.tsx
│   ├── services-section.tsx
│   ├── about-section.tsx
│   ├── testimonials-section.tsx
│   ├── contact-section.tsx
│   ├── site-header.tsx
│   ├── site-footer.tsx
│   ├── section-heading.tsx
│   └── ui/               # Primitivos reutilizáveis (shadcn/ui)
├── lib/
│   └── site-config.ts    # Nome, telefone, WhatsApp, endereço, horários
├── actions/              # Server Actions (mutações futuras)
├── types/                # Tipos globais compartilhados
└── public/               # Arquivos estáticos
```

### Configuração central

Todos os dados textuais do site (nome, telefone, e-mail, endereço, horários e links de navegação) ficam em `lib/site-config.ts`:

```ts
export const siteConfig = {
  name: "Patas & Cia",
  phone: "(11) 99999-9999",
  whatsappUrl: "https://wa.me/5511999999999",
  email: "contato@patasecia.com.br",
  address: "Rua dos Bichos, 123 — Centro, São Paulo/SP",
  // ...
};
```

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e ajuste os valores:

| Variável              | Descrição             | Padrão                  |
| --------------------- | --------------------- | ----------------------- |
| `NEXT_PUBLIC_APP_URL` | URL base da aplicação | `http://localhost:3000` |

Somente valores seguros usam o prefixo `NEXT_PUBLIC_` (expostos no browser). Segredos devem ser lidos apenas em Server Actions ou Route Handlers.

## Convenções

- **Server Components por padrão** — `'use client'` apenas para hooks, eventos ou APIs do browser.
- **Estilos exclusivamente via Tailwind** — sem CSS inline nem styled-components.
- **Sem `any` explícito** — prefira `unknown` com type guards.
- **Arquivos:** kebab-case. **Componentes:** PascalCase.
- **Imports:** use o alias `@/` (ex.: `import { siteConfig } from "@/lib/site-config"`).
