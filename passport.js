const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const passport = require("passport");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken,
  secretOrAccessKey: "accesskey",
};

passport.use(
  new JwtStrategy(options, (payload, done) => {
    const user = User.find((user) => user.id === payload.id);
    if (user) return done(null, user);
    return done(null, false);
  })
);
