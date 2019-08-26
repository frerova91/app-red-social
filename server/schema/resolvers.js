const { ApolloError, ForbiddenError, AuthenticationError } = require("apollo-server-express");

const Users = require("../models/users");
const resolvers = {
  Query: {
    allUsers: (_parent, _args, _context, _info) => {
      return Users.find({});
    }
  },

  Mutation: {
    addUser: async (_parent, args, _context, _info) => {
      try {
        const userExist = await Users.findOne({
          email: args.addUser_input.email
        });

        if (userExist) {
          throw new ApolloError("User exist already","Duplicate Email", {email:args.addUser_input.email});
        }
        const hashPassword = await console.log("falta");

        const User = new Users({
          firstname: args.addUser_input.firstname,
          lastname: args.addUser_input.lastname,
          nickname: args.addUser_input.nickname,
          password: args.addUser_input.password,
          email: args.addUser_input.email,
          image: args.addUser_input.image
        });

        const result = await User.save();
        return result;
      } catch (err) {
        throw err;
      }
    }
  }
};

module.exports = resolvers;
