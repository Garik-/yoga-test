const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')

const PRISMA_ENDPOINT = 'http://localhost:4466'

const resolvers = {
  Query: {
    user: (_, args, context, info) => {
      return context.prisma.query.user(
        {
          where: {
            email: args.email,
          },
        },
        info,
      )
    }
  },
  Mutation: {
    signup: (_, args, context, info) => {
      return context.prisma.mutation.createUser(
        {
          data: {
            username: args.username,
            email: args.email
          },
        },
        info,
      )
    }
  }
}

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    prisma: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: PRISMA_ENDPOINT,
    }),
  }),
})
server.start(() => console.log(`GraphQL server is running on http://localhost:4000`))