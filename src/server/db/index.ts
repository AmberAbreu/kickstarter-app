const db = require("../database");

const User = require("./models/user.model");
const Campaign = require("./models/campaign.model");

Campaign.belongsTo(User);
User.hasMany(Campaign);

module.exports = {
  db,
  models: {
    User,
    Campaign,
  },
};
