const passport = require("passport");
//it gives express idea on to handle google auth
//google strategy instruct passport on authentication with google
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

//model class to create model instance to save or persist it to the database
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  //callback after completion of task
  //remember that user.id is different from profile.id
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  //callback after the request is sent
  //remember that user.id is different from profile.id,using model class:User
  User.findById(id).then((user) => {
    done(null, user);
  });
  //as these are aynchronous requests,so we have a apromise
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        done(null, existingUser);
        //we already have the record with given profile ID
      }
      //we don't have user id,so make a new id and save it to the database
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
  //console.log("Access Token:\n", accessToken);
  //console.log("Refresh Token Generated Successfully:\n", refreshToken);
  //console.log("Profile:\n", profile);
);
