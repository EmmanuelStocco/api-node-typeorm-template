# Template-Generic-Backend-API
Template genérico de um backend moldado sobre API Rest com funcionalidades bases para diversas aplicações.  

# Funcionalidades:
- Autenticação JWT
- Relacionamento entre tabelas 
- Geração automática de migrations 
- Configurações de build para homologação
- Cors configurado
- Geração automática de seeds

# Stacks:
- TypeORM 
- PostgreSQL
- Node.js
- Express

# IMPORTANTE
Em tsconfig.json, as configurações estão setadas da seguinte forma:
compilerOptions => 
  - target versionado para o es2018 
  - lib setada para o es5, es6
  
casos especificos, pode ser necessário alterar essas configurações para deploy!
