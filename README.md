# Gerador de Certificados

Aplicacao Angular para criar, listar, visualizar e baixar certificados personalizados.

## Visao geral

O sistema permite:

- cadastrar certificados com nome do aluno e lista de atividades;
- armazenar os certificados localmente no navegador (`localStorage`);
- listar todos os certificados gerados;
- abrir os detalhes de um certificado;
- baixar o certificado como imagem (`.png`).

## Funcionalidades principais

- **Cadastro de certificado**
  - formulario com validacao de nome e atividades;
  - adicao e remocao de atividades;
  - geracao de `id` unico com `uuid`;
  - data de emissao preenchida automaticamente.
- **Lista de certificados**
  - exibicao dos certificados salvos;
  - estado vazio com CTA para criar novo certificado.
- **Visualizacao de certificado**
  - renderizacao de layout visual de certificado;
  - botao para download do certificado como imagem.
- **Persistencia local**
  - leitura automatica de dados do `localStorage` ao iniciar;
  - salvamento automatico ao adicionar novo certificado.

## Rotas da aplicacao

Rotas principais:

- `/` -> lista de certificados
- `/certificados` -> lista de certificados
- `/certificados/novo` -> formulario de geracao
- `/certificados/:id` -> detalhe do certificado

Compatibilidade (redirecionamento legado):

- `/certificado/novo` -> `/certificados/novo`
- `/certificado/:id` -> `/certificados/:id`

## Estrutura do projeto (resumo)

```text
src/app
|- Interfaces/
|  |- certificado.ts
|- _services/
|  |- certificado.ts
|- _components/
|  |- navbar/
|  |- primary-button/
|  |- secundary-button/
|  |- item-certificado/
|  |- ui-base/
|- pages/
|  |- certificados/
|  |- certificado-form/
|  |- certificado/
|- app.routes.ts
```

## Tecnologias e bibliotecas

- Angular 21
- TypeScript 5.9
- Bootstrap 5
- `uuid` (ids unicos)
- `html-to-image` (exportacao para PNG)

## Como executar localmente

### 1) Instalar dependencias

```bash
npm install
```

### 2) Rodar em desenvolvimento

```bash
npm start
```

Depois acesse a URL exibida no terminal (normalmente `http://localhost:4200/`).

## Build de producao

```bash
npm run build
```

Arquivos gerados em:

`dist/gerador-certificado`

## Scripts disponiveis

- `npm start` -> inicia `ng serve`
- `npm run build` -> gera build de producao
- `npm run watch` -> build em modo watch
- `npm test` -> executa testes

## Modelo de dados

Interface principal:

```ts
export interface Certificado {
  id: string;
  nome: string;
  atividades: string[];
  dataEmissao: string;
}
```

## Fluxo funcional

1. Usuario abre a tela de geracao.
2. Preenche nome e atividades.
3. Sistema gera `id` e `dataEmissao`.
4. Certificado e salvo no `localStorage`.
5. Usuario e redirecionado para os detalhes.
6. Opcionalmente, baixa o certificado em PNG.

## Observacoes

- Os dados sao locais ao navegador/dispositivo (nao ha backend).
- Existe um warning de budget no build quando o bundle inicial ultrapassa 500 kB; isso nao impede o funcionamento do app.

## Melhorias futuras sugeridas

- integrar backend/API para persistencia remota;
- adicionar edicao e exclusao de certificados;
- criar testes unitarios e e2e para os fluxos principais;
- internacionalizacao e ajustes de acessibilidade.
