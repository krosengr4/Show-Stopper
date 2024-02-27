//! This file contains the typeDefs for graphQL

const typeDefs = `
type Profile {
    _id: ID
    name: String
    password: String
    description: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }

  type Mutation {
    addProfile(name: String!, password: String!): Auth
    login(name: String!, password: String!): Auth
    removeProfile(profileId: ID!): Profile
  }
`;

module.exports = typeDefs;