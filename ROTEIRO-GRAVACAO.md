# Roteiro de gravação — MW-05 Framework Angular

Repositório: fork de `professorthiagoxavier/fiap-angular` em `josercf/fiap-angular`.

Cada vídeo da disciplina tem sua própria branch, empilhada na ordem do capítulo. O código de cada branch já inclui tudo o que foi construído nos vídeos anteriores, então basta dar checkout na branch do vídeo do dia e o projeto já está no estado certo para gravar.

## Como usar

1. `git checkout <branch-do-video>`
2. `npm install` (só na primeira vez, ou se o `package.json` mudou)
3. `ng serve` e navegue para `http://localhost:4200`
4. A partir do vídeo 13, rode também `npm run server` em um segundo terminal (sobe o json-server em `http://localhost:3000`) antes de testar as chamadas HTTP. Sem isso, a lista de produtos aparece vazia e o console mostra erro de conexão recusada — não impede a gravação, mas o dado não carrega.

## Mapa de branches

| Branch | Vídeo | O que muda | Observações |
|---|---|---|---|
| video-01-introducao-ciclo-vida | 1. Introdução e Ciclo de Vida do Componente | Nenhuma (projeto base) | Conteúdo conceitual, sem código para mostrar |
| video-02-roteamento-formularios-http | 2. Roteamento, Formulários e Requisições HTTP | Nenhuma | Conceitual (visão geral do Angular Router, forms e HttpClient) |
| video-03-data-binding-cli-novidades | 3. Data Binding, CLI e Novidades das Versões | Nenhuma | Conceitual |
| video-04-por-que-angular-repositorio-git | 4. Por Que Usar o Framework e Repositório Git | Nenhuma | Conceitual, mencionar o repositório do capítulo |
| video-05-instalacao-configuracao-projeto | 5. Instalação, Configuração e Primeiro Projeto | Nenhuma | É o próprio `ng new` — mostrar a estrutura de pastas já existente |
| video-06-componentes-importacao-dados | 6. Componentes, Importação e Dados Compartilhados | Cria first-component e into-component, @Input | — |
| video-07-interpolacao-property-binding | 7. Interpolação de Dados e Property Binding | Estende first-component (interpolação, @for, *ngIf) e app.component (property binding) | Falta a imagem `src/assets/angular.png` (não versionada) — adicione um PNG qualquer antes de gravar ou a tag `<img>` aparece quebrada |
| video-08-control-flow | 8. Control Flow | Nenhum arquivo novo | @for e *ngIf já estão em first-component.html (vídeo 7). Para @switch, use este snippet ao vivo sem precisar salvar em arquivo: `@switch (status) { @case ('sucesso') { <p>Sucesso!</p> } @default { <p>Status desconhecido.</p> } }` |
| video-09-diretivas-ngclass-ngstyle | 9. Diretivas NgClass e NgStyle | Cria diretivas.component (ngClass + ngStyle) | — |
| video-10-eventos-output | 10. Eventos e Emissão com @Output | Cria evento.component, botao-filho.component, componente-pai.component | — |
| video-11-interfaces-services | 11. Interfaces e Services | Cria produto.interface.ts, produtos.service.ts (lista em memória) e produto.component | — |
| video-12-rotas-angular | 12. Rotas no Angular | Cria home.component, sobre.component e app.routes.ts | Primeira vez que o app usa router-outlet e nav |
| video-13-http-api-get | 13. Requisição HTTP: Criando a API e Método GET | Adiciona json-server (db.json, package.json), provideHttpClient, produtos.service passa a usar HttpClient (GET) | Lembrar de rodar `npm run server` |
| video-14-http-post-delete-put | 14. Requisição HTTP: POST, DELETE e PUT | Cria produto-form.component (criar/editar), completa produtos.service (POST, PUT, DELETE) e as rotas de produtos | Estado final = branch main |

## Fluxo de trabalho durante a gravação

As branches estão empilhadas (`video-02` nasce de `video-01`, e assim por diante), mas cada uma já tem o código completo do vídeo correspondente — não é necessário fazer merge para gravar. Se durante a gravação você alterar o código de um vídeo anterior e quiser propagar a mudança para os vídeos seguintes, use `git rebase` ou `git merge` a partir da branch alterada.

Vídeos sem código novo (1, 2, 3, 4, 5, 8) podem ser gravados só com slides/fala. Se decidir criar algum exemplo ao vivo mesmo assim, é só commitar direto na branch correspondente.
