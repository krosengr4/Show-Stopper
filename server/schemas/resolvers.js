//! This file contains the resolvers for graphQL

//Import Profile model, token(JWT), and authentification
const { Profile } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

// Resolvers function for graphQL
const resolvers = {

    // Query function to find and return all profiles/ single profile
    Query: {
        profiles: async () => {
          return Profile.find();
        },
    
        profile: async (parent, { profileId }) => {
          return Profile.findOne({ _id: profileId });
        },
    },

    // Mutations function to add/remove a profile and login
    Mutation: {
        addProfile: async (parent, { name, email, password }) => {
          const profile = await Profile.create({ name, email, password });
          const token = signToken(profile);
    
          return { token, profile };
        },
        removeProfile: async (parent, { profileId }) => {
          return Profile.findOneAndDelete({ _id: profileId });
        },
        login: async (parent, { email, password }) => {
          const profile = await Profile.findOne({ email });
    
          if (!profile) {
            throw AuthenticationError;
          }
          const correctPw = await profile.isCorrectPassword(password);
          if (!correctPw) {
            throw AuthenticationError;
          }
          const token = signToken(profile);
          return { token, profile };
        },
      },
};

//export resolvers
module.exports = resolvers;