# 🎓 Gerador de Certificados Profissional

Uma aplicação robusta desenvolvida com **Angular 21** e **Bootstrap 5** para criação, gestão e exportação de certificados personalizados. O sistema oferece uma experiência fluida de Single Page Application (SPA) com persistência de dados local.

## 🌟 Diferenciais desta Versão

*   **Arquitetura Angular Moderna:** Uso de componentes funcionais, tipagem rigorosa com TypeScript 5.9 e roteamento avançado.
*   **Interface com Bootstrap 5:** Layout responsivo, componentes de UI elegantes e sistema de grid para uma visualização perfeita em qualquer dispositivo.
*   **Exportação de Alta Fidelidade:** Integração com a biblioteca `html-to-image` para converter o layout HTML em imagens `.png` prontas para impressão.

## 📋 Funcionalidades

*   **Emissão Inteligente:**
    *   Formulário dinâmico com validação em tempo real.
    *   Adição/Remoção dinâmica de atividades.
    *   Geração automática de UUID e data de emissão.
*   **Gestão e Visualização:**
    *   Dashboard com listagem completa dos certificados gerados.
    *   Visualização detalhada com layout de certificado profissional.
    *   Download direto em formato de imagem.
*   **Persistência Offline:**
    *   Armazenamento automático no `localStorage` do navegador, garantindo que seus dados não sejam perdidos ao fechar a aba.

## 🛠️ Tecnologias e Bibliotecas

*   **Core:** Angular 21 & TypeScript 5.9.
*   **Estilização:** Bootstrap 5 (CSS/Componentes).
*   **Utilitários:** 
    *   `uuid`: Para identificação única de registros.
    *   `html-to-image`: Para processamento de imagem no lado do cliente.

## 🛣️ Estrutura de Rotas

A aplicação utiliza um sistema de rotas organizado e compatível com versões anteriores:

| Rota | Descrição |
| :--- | :--- |
| `/certificados` | Dashboard principal e listagem |
| `/certificados/novo` | Formulário de criação de novo certificado |
| `/certificados/:id` | Visualização e download de um certificado específico |

> **Nota:** Rotas legadas como `/certificado/novo` são automaticamente redirecionadas para manter a compatibilidade.

## 📂 Organização do Projeto

```text
src/app
├── Interfaces/        # Contratos de dados (Certificado.ts)
├── _services/         # Lógica de negócio e acesso ao localStorage
├── _components/       # UI Reutilizável (Buttons, Navbar, UI-Base)
├── pages/             # Páginas principais da aplicação
└── app.routes.ts      # Definição centralizada de navegação
```

**Link:** https://gitanpf.github.io/gerador-de-certificado_Angular/
