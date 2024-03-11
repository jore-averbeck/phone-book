import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from "./schema.js";
import { phoneNumbers } from "./db.js";

const resolvers = {
  Query: {
    phoneNumbers() {
      return phoneNumbers;
    },
    phoneNumber(_, args) {
      return phoneNumbers.find((phoneNumber) => phoneNumber.id === args.id);
    },
    searchContacts: (_, { search }) => {
      if (!search) {
        return phoneNumbers;
      }
      
      const filteredContacts = phoneNumbers.filter((phoneNumber) =>
        phoneNumber.name.toLowerCase().includes(search.toLowerCase()) ||
        phoneNumber.phone.includes(search)
      );
      return filteredContacts;
    },
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: {
    origin: 'http://localhost:3000', 
    methods: 'GET, POST', 
    allowedHeaders: 'http://localhost:3000' 
  }
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 }
});

console.log("Server ready at port", 4000);
