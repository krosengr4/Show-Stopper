//! This file contains code to put seed data (/profileSeeds.json) in db

// Import db connection, Profile model, seed data, and cleanDB 
const db = require('../config/connection');
const { Profile } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const cleanDB = require('./cleanDB'); 

// function to seed data from json
db.once('open', async () => {
    try {
      await cleanDB('Profile', 'profiles');
      
      await Profile.create(profileSeeds);
  
      console.log('Success! Your data is seeded to the db!');
      process.exit(0);
    } catch (err) {
      throw err;
    }
  });
  