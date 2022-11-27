# Template-Generic-Backend-API
Template genérico de um backend moldado sobre API Rest com funcionalidades bases para diversas aplicações.  

# Funcionalidades:
- Autenticação JWT
- Relacionamento entre tabelas 
- Geração automática de migrations 
- Configurações de build para homologação
- Cors configurado
- Geração automática de seeds
- Typescript build configurado para deploy

# Stacks:
- TypeORM 
- PostgreSQL
- Node.js
- Express

# Comandos 
Npm run || Yarn
-  dev => utilize "npm run dev || yarn dev" para executar o servidor node atravéz do nodemon em modo de desenvolvimento, assim alterações no código resultarão instantaneman no reload da aplicação 
- migration:generate => após criar modelos e entities para o banco de dados, utilize esse comando para gerar as migrations referentes ao modelo estruturado (cada nova entitie criada, ao rodar este comando vai atualizar as migrations anteriores)
- migration:run => utilize este comando para "rodar" as migrations já geradas
- build => utilize para buildar o código em typescript para javascript otimizado 
- start => com start o build gerado será startado (servidores utilizam para startar a aplicação)

# IMPORTANTE
Em tsconfig.json, as configurações estão setadas da seguinte forma:
compilerOptions => 
  - target versionado para o es2018 
  - lib setada para o es5, es6
  
casos especificos, pode ser necessário alterar essas configurações para deploy!
