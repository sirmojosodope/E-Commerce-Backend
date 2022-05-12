const sequelize = require("./config/connection");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}.`);
  });
});


