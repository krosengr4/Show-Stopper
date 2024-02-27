//! This file contains code for how user data is stored (Model)

// import schema, model, and bcrypt
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// schmema/model for user profile

const profileSchema = new Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
  });

// pre-save middlewear to create password and compare with hashed password
profileSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });

profileSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

  // Make profileSchema into model and export
const Profile = model('Profile', profileSchema);
module.exports = Profile;