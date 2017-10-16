//modules
const express = require('expnress');
const app = express();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;



passport.use(new GoogleStrategy());


//port
const PORT = process.env.PORT || 5000;
app.listen(PORT);



