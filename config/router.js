const { pokimon } = require("../router");

const router = ({ app }) => {
  app.use(pokimon);
};

module.exports = router;