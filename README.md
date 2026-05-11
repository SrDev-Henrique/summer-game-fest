# Game Event · Summer Game Fest (SGF)

Site promocional e informativo inspirado em **Summer Game Fest** e grandes eventos de games. Projeto desenvolvido no contexto do curso **EBAC**, servindo como **portfólio front-end**: landing rica em UI, formulários validados e páginas de eventos com conteúdo gerado a partir dos assets.

**Público deste README:** colegas de turma (onboarding rápido), professores (avaliação técnica) e **entrevistadores** (visão do produto + stack).

---

### Executive summary (for interviewers — English)

A **marketing-style Next.js marketing site**: App Router home + dedicated `/events` hub + statically generated **`/events/[event]`** pages. The **schedule grid** is driven by **image files on disk** (`public/assets/images/eventos/`): filenames encode dates; the server parses them and builds metadata, slug routes, and a **live countdown**. UI uses **Tailwind v4**, **shadcn-style** primitives, **React Hook Form + Zod**, and **Portuguese-heavy** UX with glass morphism and gradient CTAs. Sign-up demos use **toast** feedback (mock submit, no backend in repo).

---

## Objetivos de aprendizado

- Montar uma landing **moderna** (layout responsivo, tipografia, componentes reutilizáveis).
- Praticar **Next.js App Router** (layouts, páginas, **SSG** com `generateStaticParams`).
- Integrar **formulários** com validação cliente (React Hook Form + Zod).
- Tratar **SSR/hidratação** em componentes cliente com valores que mudam no tempo (`EventCountdown`).
- Organizar projeto para **discussão em entrevistas** (rotas claras, separação UI / lib).

---

## Funcionalidades

| Área | O que faz |
|------|-----------|
| **Home** (`/`) | Seções em ordem: **Hero**, cadastro (**e-mail** e **telefone**), showcases, **Agenda** (grade de eventos), **Sobre**. |
| **Eventos** (`/events`) | Hero com vídeo/imagem destacada + bloco editorial (datas de exemplo para o SGF) + **`Schedule`** reutilizado logo abaixo. |
| **Detalhe do evento** (`/events/[event]`) | Página inspirada em sites de grandes keys: hero com arte, título, CTA **Adicionar ao calendário**, metadados (data / horários genéricos), **contagem regressiva**, texto descritivo, link **voltar à agenda**. |
| **Cabecçalho** | Navegação **Home** / **Eventos**, marca central, cadastro destacado (**ShinyButton**); menu mobile (`HamburgerMenu`) com variantes por rota. |
| **Rodapé** | Fundo fullscreen + cartões **glass** (assinatura de e-mail, marca SGF, links e ingressos estilo promo). |

> **Cadastro:** os formulários exibem sucesso via **Sonner** após uma simulação de rede (`setTimeout`). Não há API ou banco configurado neste repositório — ótimo ponto para discutir “como eu plugaria um backend”.

---

## Stack técnico

| Camada | Escolhas |
|--------|-----------|
| **Framework** | [Next.js 16](https://nextjs.org) (App Router) |
| **UI** | [React 19](https://react.dev) |
| **Estilo** | [Tailwind CSS v4](https://tailwindcss.com), utilitários em `globals.css` (`bg-blue-cta`, `glass-pill-*`, `shiny-cta`, …) |
| **Componentes** | [radix-ui](https://www.radix-ui.com/), padrões [shadcn](https://ui.shadcn.com/) (Button, Form, Tooltip, Dialog, …) |
| **Formularios** | [react-hook-form](https://react-hook-form.com/) + [@hookform/resolvers](https://github.com/react-hook-form/resolvers) + [zod](https://zod.dev/) |
| **Feedback** | [sonner](https://sonner.emilkowal.ski/) (toasts) |
| **Ícones** | [lucide-react](https://lucide.dev/) |
| **Animações** | [motion](https://motion.dev/) (onde aplicável) |
| **Qualidade de código** | TypeScript · ESLint (`eslint-config-next`) · [Biome](https://biomejs.dev/) (formatação / regras, ex.: classes Tailwind ordenadas) |

---

## Estrutura de pastas (visão rápida)

```
src/app/
  layout.tsx           # Shell global: fonts, Header, Footer, TooltipProvider, Toaster
  page.tsx             # Landing (Hero → Sign-up → Shows → Schedule → About)
  globals.css          # Design tokens (+ utilitários Tailwind layer)
  (sections)/          # Fatias da home (about, Hero, schedule, sign-up, show-announced)
  events/
    page.tsx           # Hub /events + Agenda
    [event]/page.tsx   # SSG por slug; countdown + metadados

src/components/
  header/ footer/ hero/ promo/ sign-up/ icons/ ...
  schedule/            # ScheduleEventCard, EventCountdown, EventAddToCalendarCta, …
  ui/                  # Primitivos (button, form, input, shiny-button, …)

src/lib/
  schedule-event-images.ts   # Leitura de `public/.../eventos`, parsing de stems, metadados, datas
  utils.ts                   # `cn()` (clsx + tailwind-merge)

public/assets/images/        # Artes, hero, fundos, pasta `eventos/` (fonte da agenda dinâmica)
```

---

## Agenda dinâmica e rotas `[event]`

1. Imagens em `public/assets/images/eventos/` (webp, png, jpg).
2. O **nome do arquivo sem extensão** vira **slug** da rota (`/events/bitsummit-25-feb`).
3. `schedule-event-images.ts`:
   - lista arquivos com `fs` no servidor;
   - infere **título legível** e **data textual** por regex no stem (ex.: `20-jul` → Julho 20);
   - calcula **`parseEventStartDate`** para contagem regressiva (ano **2026**; casos especiais como GDC).
4. **`generateStaticParams`** gera todas as páginas estáticas no build.

Para **professores / entrevistas:** isso é um exemplo de “**conteúdo como dados**” sem CMS: trocar ou adicionar uma imagem na pasta altera o site após rebuild.

---

## Como rodar o projeto

**Requisitos:** Node.js compatível com Next 16 (recomenda-se LTS recente) e `npm`.

```bash
# instalar dependências
npm install

# desenvolvimento (http://localhost:3000)
npm run dev

# build de produção
npm run build

# servidor após build
npm run start

# apenas ESLint
npm run lint
```

Para checagem rápida de estilo com Biome:

```bash
npx biome check .
npx biome check --write .   # aplica fixes seguros
```

---

## Destaques para portfólio e entrevistas

- **App Router + SSG**: páginas de evento pré-renderizadas com `generateStaticParams` + `generateMetadata`.
- **Acessibilidade / HTML**: cartão da agenda usa **overlay de link + `pointer-events`** para não Aninhar `<button>` dentro de `<a>` no HTML.
- **Hidratação**: `EventCountdown` atualiza cada segundo no cliente; **mismatch servidor/cliente** em números de tempo é tratado com **`suppressHydrationWarning`** nos nós dos dígitos (padrão documentado para relógios).
- **Forms**: schemas Zod, mensagens em PT-BR, estados de envio (“Cadastrando…”).
- **Design system light**: cores primárias, gradientes CTA (`bg-blue-cta`), glass/footer coerentes.

---

## Limitações conscientes & ideias de evolução

| Hoje | Próximo passo possível |
|------|----------------------|
| Sem backend real para cadastro | Route Handlers `/api/sign-up` + DB ou serviço (Resend, etc.) |
| “Adicionar ao calendário” sem ICS/Google URL | Gerar links `*.ics` ou Google Calendar por evento usando `parseEventStartDate` |
| `metadata` genérica em `layout` | Substituir título/description por marca SGF e OG images |
| Datas inferidas pelo nome do arquivo | CMS, JSON ou headless CMS se o catálogo crescer |
| Lang `en` em `<html>` com copy em PT em partes | Ajustar `lang="pt-BR"` e revisar cópias para consistência |

---

## Licença e contexto acadêmico

Projeto **privado / educacional** (`"private": true` no `package.json`). Arte e naming inspiram festivais da indústria de games; uso didático EBAC — respeitar direitos das marcas ao publicar forks.

---

## Contato no material de entrevista

Sugestão ao candidato: mencionar **esta pasta** ao vivo no editor (`schedule-event-images.ts`, `events/[event]/page.tsx`, `EventCountdown`) e executar **`npm run build`** para demonstrar SSG funcionando na linha de comando.
