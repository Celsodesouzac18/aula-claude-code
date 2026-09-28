# projeto-1

Aplicação web em **Next.js 16 (App Router)** com React 19, TypeScript e TailwindCSS 4. O projeto está na fase inicial: a estrutura de pastas e as convenções já estão definidas, mas a página inicial ainda é a padrão do `create-next-app`.

## Stack

| Camada       | Tecnologia                                      | Status           |
| ------------ | ----------------------------------------------- | ---------------- |
| Framework    | Next.js 16.3 (App Router)                       | ✅ instalado     |
| UI           | React 19.2                                      | ✅ instalado     |
| Linguagem    | TypeScript 5 (`strict`)                         | ✅ instalado     |
| Estilos      | TailwindCSS 4 (via `@tailwindcss/postcss`)      | ✅ instalado     |
| Lint         | ESLint 9 + `eslint-config-next` (core-web-vitals + typescript) | ✅ instalado |
| Componentes  | shadcn/ui                                       | ⏳ planejado     |
| Formulários  | React Hook Form + Zod                           | ⏳ planejado     |

## Primeiros passos

Pré-requisito: Node.js 20+.

```bash
npm install
cp .env.example .env.local   # ajuste os valores se necessário
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando              | Descrição                                   |
| -------------------- | ------------------------------------------- |
| `npm run dev`        | Servidor de desenvolvimento (porta 3000)    |
| `npm run build`      | Build de produção                           |
| `npm run start`      | Sobe o build de produção                    |
| `npm run lint`       | Executa o ESLint                            |
| `npm run type-check` | Checagem de tipos (`tsc --noEmit`)          |

Após uma série de mudanças, rode `npm run type-check && npm run lint`.

## Estrutura

```
projeto-1/
├── app/              # Rotas (App Router); agrupar com (grupo)/
│   ├── layout.tsx    # Layout raiz (fontes Geist via next/font)
│   ├── page.tsx      # Página inicial
│   └── globals.css   # Tailwind + tokens de tema (claro/escuro)
├── actions/          # Server Actions (mutações)
├── components/       # Componentes de feature
│   └── ui/           # Primitivos reutilizáveis (shadcn)
├── lib/              # Helpers, clients e configurações
├── types/            # Tipos globais e schemas Zod compartilhados
├── public/           # Arquivos estáticos
├── next.config.ts
├── eslint.config.mjs
└── tsconfig.json     # Alias de import: @/* → raiz do projeto
```

## Convenções

- **Server Components por padrão** — use `'use client'` só quando precisar de hooks, eventos ou APIs do browser.
- **Mutações via Server Actions** em `actions/`; nunca acessar o banco a partir de Client Components.
- **Estilos só com Tailwind** — sem CSS inline ou styled-components. Tokens de design ficam em `app/globals.css` (bloco `@theme`).
- **Sem `any` explícito** — prefira `unknown` com type guards.
- **Nomes:** arquivos em kebab-case, componentes em PascalCase.
- **Imports:** ES modules; use o alias `@/` (ex.: `import { x } from "@/lib/x"`).

## Variáveis de ambiente

Defina em `.env.local` (modelo em [.env.example](.env.example)):

| Variável              | Descrição             | Padrão                  |
| --------------------- | --------------------- | ----------------------- |
| `NEXT_PUBLIC_APP_URL` | URL base da aplicação | `http://localhost:3000` |

Somente valores seguros podem usar o prefixo `NEXT_PUBLIC_` (ficam expostos no browser). Segredos devem ser lidos apenas em Server Actions ou Route Handlers.

## Git

- Branches: `feat/`, `fix/` ou `chore/` + descrição em kebab-case.
- Commits em inglês, no imperativo (ex.: `add OAuth callback handler`).

## Observações

- Esta versão do Next.js traz mudanças incompatíveis com versões anteriores. Consulte a documentação local em `node_modules/next/dist/docs/` antes de usar APIs novas (ver [AGENTS.md](AGENTS.md)).
- Imagens externas precisam de domínio autorizado em `next.config.ts` (`images.remotePatterns`).
- O middleware fica em `middleware.ts` na raiz, não dentro de `app/`.
