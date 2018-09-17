# Yoga GraphQL server with Prisma & PostgreSQL database

Сервер по туториалу [Build a GraphQL server with Prisma](https://www.prisma.io/docs/tutorials/build-graphql-servers/development/build-a-graphql-server-with-prisma-ohdaiyoo6c)

## Что установить
Нужен docker, yarn, глобально установленный пакет prisma и graphql
### docker
Linux Mint
```
# First import the GPG key

sudo apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 \
      --recv-keys 58118E89F3A912897C070ADBF76221572C52609D

# Next, point the package manager to the official Docker repository

sudo apt-add-repository 'deb https://apt.dockerproject.org/repo ubuntu-xenial main'

# Update the package database

sudo apt update
sudo apt install docker-engine
```
Возможно понадобиться усатновить пакеты linux-image-generic и linux-image-extra-virtual
```
# Installing both packages will eliminate an unmet dependencies error when you try to install the
# linux-image-extra-virtual by itself

sudo apt install linux-image-generic linux-image-extra-virtual

# Reboot the system so it would be running on the newly installed kernel image

sudo reboot
```

Далее надо будет установить docker-composer, последнюю версию смотрите на github-e
```
curl -L https://github.com/docker/compose/releases/download/1.22.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```

### yarn
```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
```
### Prisma CLI
```
yarn global add prisma
```
### GraphQL CLI
```
yarn global add graphql-cli
```

## Как запустить
1. Установить зависимости `yarn`
2. Запустить докер контейнер с сервером призмы `cd prisma && docker-compose up -d`
3. Если нужно внести изменения в prisma.graphql или инициализировать сервак нужно сделать `prisma deploy`
4. Там настроено так что сразу после деплоя запустится обновление схемы `graphql get-schema --project prisma`
5. Запустить сам сервер GraphQL  `node /src/index.js`