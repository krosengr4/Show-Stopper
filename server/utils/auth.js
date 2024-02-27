//! This file contains code for authorization of users

// Import error message and JWT(token)
const {GraphQLError} = require('graphql');
const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '1h';

module.exports = {
    AuthenticationError: new GraphQLError('Could not authenticate user.', {
      extensions: {
        code: 'UNAUTHENTICATED',
      },
    }),
    signToken: function ({ email, name, _id }) {
      const payload = { email, name, _id };
      return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
  };