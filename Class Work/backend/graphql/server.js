const { ApolloServer, gql } = require('apollo-server');
const axios = require('axios');

// Sample JSON API URL
const API_URL = 'https://jsonplaceholder.typicode.com';

// GraphQL schema definition
const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
    body: String!
    userId: Int!
  }

  type Query {
    posts: [Post]
    post(id: ID!): Post
  }

  input PostInput {
    title: String!
    body: String!
    userId: Int!
  }

  type Mutation {
    addPost(input: PostInput): Post
    updatePost(id: ID!, input: PostInput): Post
    deletePost(id: ID!): String
  }
`;

// Resolvers to handle GraphQL queries and mutations
const resolvers = {
  Query: {
    // Fetch all posts
    posts: async () => {
      try {
        const response = await axios.get(`${API_URL}/posts`);
        return response.data;
      } catch (error) {
        throw new Error('Failed to fetch posts');
      }
    },
    // Fetch a single post by ID
    post: async (_, { id }) => {
      try {
        const response = await axios.get(`${API_URL}/posts/${id}`);
        return response.data;
      } catch (error) {
        throw new Error(`Failed to fetch post with id ${id}`);
      }
    },
  },

  Mutation: {
    // Add a new post (Create)
    addPost: async (_, { input }) => {
      try {
        const response = await axios.post(`${API_URL}/posts`, input);
        return response.data;
      } catch (error) {
        throw new Error('Failed to add post');
      }
    },
    // Update an existing post (Update)
    updatePost: async (_, { id, input }) => {
      try {
        const response = await axios.put(`${API_URL}/posts/${id}`, input);
        return response.data;
      } catch (error) {
        throw new Error(`Failed to update post with id ${id}`);
      }
    },
    // Delete a post (Delete)
    deletePost: async (_, { id }) => {
      try {
        await axios.delete(`${API_URL}/posts/${id}`);
        return `Post with id ${id} was deleted successfully`;
      } catch (error) {
        throw new Error(`Failed to delete post with id ${id}`);
      }
    },
  },
};

// Create Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});