const usersRouter = require("../modules/users/route");

function configureRoutes(app) {
  app.use("/users", usersRouter);
}

module.exports = { configureRoutes };
