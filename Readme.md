# Projeto McSmart

**Um projeto full-stack leve feito com React + Vite + Tailwind + Radix UI no frontend e um servidor NodeJS/TypeScript compilado com esbuild no backend, gerenciado com PNPM.**

# 🧰 **Principais Tecnologias Utilizadas**

## **🔵 Frontend**

### ✔ **Vite (v7)**

Ferramenta de build rápida e moderna — usada para rodar o servidor de desenvolvimento e gerar o build.

### ✔ **React**

Com diversos componentes da Radix UI:

* `@radix-ui/react-accordion`
* `@radix-ui/react-alert-dialog`
* `@radix-ui/react-avatar`
* `@radix-ui/react-checkbox`
* ...e muitos outros.

Essas libs são focadas em **componentes acessíveis e altamente customizáveis**.

### ✔ **TailwindCSS (v4)**

Sistema utilitário de estilização, permitindo CSS moderno direto nas classes.
Também usa:

* `postcss`
* `autoprefixer`
* plugins de animação (`tw-animate-css`)

### ✔ **Lucide-react**

Conjunto de ícones minimalistas para React.

### ✔ **Zod**

Biblioteca para **validação de dados e schemas**, comum em formulários e integração com backend.

### ✔ **Framer Motion**

Usado para **animações fluidas** em React.

### ✔ **Shadcn/UI**

Indica o uso de componentes React estilizados com Tailwind (por causa dos Radix + libs típicas do ecossistema shadcn).

---

## 🟣 **Backend / Build Server**

O projeto possui uma pasta `server/` e scripts de build indicando um backend leve em TypeScript.

### ✔ **Esbuild**

Usado para:

* Compilar o servidor (`server/index.ts`)
* Amarrar dependências
* Gerar saída em ESM no diretório `/dist`

### ✔ **TypeScript**

Tipagem forte tanto no frontend quanto no backend.

### ✔ **TSX**

Ferramenta para rodar TS diretamente sem transpilar (útil em dev).

---

### Como testar

## **1️⃣ INSTALAR PNPM (caso não tenha)**

Execute:

```
npm install -g pnpm
```

ou, se estiver no PowerShell e tiver bloqueio:

```
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
npm install -g pnpm
```

---

## **2️⃣ Instalar as dependências do projeto**

Dentro da pasta onde os arquivos estão:

rode:

```
pnpm install
```

Isso vai instalar tudo corretamente, incluindo o Vite.

---

## **3️⃣ Rodar a aplicação**

Agora use:

```
pnpm dev
```

ou:

```
pnpm run dev
```

---



