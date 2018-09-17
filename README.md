# Yoga GraphQL server -> prisma server && postgres DB

Сервер по туториалу https://www.prisma.io/docs/tutorials/build-graphql-servers/development/build-a-graphql-server-with-prisma-ohdaiyoo6c

## Как запустить
1. Запустить докер контейнер с сервером призмы `cd prisma && docker-compose up -d`
2. Если нужно внести изменения в prisma.graphql или инициализировать сервак нужно сделать `prisma deploy`
3. Там настроено так что сразу после деплоя запустится обновление схемы `graphql get-schema --project prisma`
4. Запустить сам сервер GraphQL  `node /src/index.js`