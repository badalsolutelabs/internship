const { prisma } = require("./generated/prisma-client");
const { GraphQLServer } = require("graphql-yoga");

/**
 * importing resolvers
 */
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const User = require("./resolvers/User");
const Link = require("./resolvers/Link");

let links = [
  {
    id: "link-0",
    url: "www.howtographql.com",
    description: "GraphQL from HowToGraphQL"
  }
];

let idCount = links.length;
const resolvers = {
  Query,
  Mutation,
  Link,
  User
};

const server = new GraphQLServer({
  typeDefs: "./schema.graphql",
  resolvers,
  context: request => {
    return {
      ...request,
      prisma
    };
  }
});

server.start(() => console.log("Server is running on: http://localhost:4000"));
