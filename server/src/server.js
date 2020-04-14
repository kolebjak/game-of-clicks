import mongoose from 'mongoose';
import { ApolloServer, gql } from 'apollo-server';
import leaderboard from './modules/leaderboard';
import addClick from './modules/addClick';
import getClick from './modules/getClick';

const typeDefs = gql`
  type Leaderboard {
    id: ID
    team: String
    teamCount: Int
  }
  
  type Click {
    id: ID
    team: String
    sessionCount: Int
    teamCount: Int
  }
  
  type Query {
    leaderboard: [Leaderboard]
    click(session: String, team: String): Click
  }
  
  type Mutation {
    addClick(session: String, team: String): Click
  }
`;

const resolvers = {
  Query: {
    leaderboard,
    click: async (_, { session, team }) => getClick({ session, team }),
  },
  Mutation: {
    addClick: async (_, { session, team }) => addClick({ session, team })
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
const port = Number(process.env.PORT || 3000);

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/stfuandclick');
});

