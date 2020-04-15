import mongoose from 'mongoose';
import { ApolloServer, gql, PubSub } from 'apollo-server';
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
  
  type Subscription {
    clickAdded: Click
  }
  
  type Query {
    leaderboard: [Leaderboard]
    click(session: String, team: String): Click
  }
  
  type Mutation {
    addClick(session: String, team: String): Click
  }
`;

const pubsub = new PubSub();
const CLICK_ADDED = 'CLICK_ADDED';

const resolvers = {
  Subscription: {
    clickAdded: {
      subscribe: () => pubsub.asyncIterator([CLICK_ADDED]),
    },
  },
  Query: {
    leaderboard,
    click: async (_, { session, team }) => getClick({ session, team }),
  },
  Mutation: {
    addClick: async (_, { session, team }) => {
      const click = await addClick({ session, team });
      pubsub.publish(CLICK_ADDED, { clickAdded: click });
      return click;
    }
  }
};

const server = new ApolloServer({ cors: true, typeDefs, resolvers });
const port = Number(process.env.PORT || 3000);


server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/stfuandclick');
});

