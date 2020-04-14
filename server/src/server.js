import mongoose from 'mongoose';
import { ApolloServer, gql } from 'apollo-server';
import leaderboard from "./modules/leaderboard";
import click from "./modules/click";

const typeDefs = gql`
  type Leaderboard {
    team: String
    clicks: Int
  }
  
  type ClickCount {
    team: Int
    session: Int
  }
  
  type Click {
    team: String
    session: String
    count: ClickCount
  }
  
  type Query {
    leaderboard: [Leaderboard]
  }
  
  type Mutation {
    click(session: String, team: String): Click
  }
`;

const resolvers = {
  Query: {
    leaderboard,
  },
  Mutation: {
    click: async (_, { session, team }) => click({ session, team })
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
const port = Number(process.env.PORT || 3000);

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/stfuandclick');
});

