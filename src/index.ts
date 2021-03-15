import { send } from 'micro';
import { get, post, router } from 'microrouter';
import { ApolloServer, gql } from 'apollo-server-micro';
import { makeExecutableSchema } from 'graphql-tools';
import { MovieInput } from './generated/graphql';

const mockData = [
  {
    director: 'オグシ洋介',
    title: '相模原の歴史近代',
  },
  {
    director: 'オグシ洋子',
    title: '相模原の遺跡',
  },
];

const typeDefs = gql(`
  type Movie {
    title: String
    director: String
  }
  input MovieInput{
    title:String!
    director:String!
  }  
  type Query {
    movies: [Movie]
  }
  type Mutation {
    createMovie(input:MovieInput):Movie
    updateMoive(input:MovieInput):Movie
  }

`);
const resolvers = {
  Query: { 
    movies: () => mockData 
  },
  Mutation:{
    createMovie:(_,{input}:{input:MovieInput})=>{
      mockData.push(input)
      return input
    }
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const apolloServer = new ApolloServer({ schema });
const graphqlPath = "/graphql";
const graphqlHandler = apolloServer.createHandler({ path: graphqlPath });

module.exports = router(
  get('/', (req, res) => 'Welcome!'),
  post(graphqlPath, graphqlHandler),
  get(graphqlPath, graphqlHandler),
  (_, res) => send(res, 404, 'Not Found'),
);
