const axios = require("axios");
require('dotenv/config');

const username = process.env.GRAFANA_USERNAME;
const password = process.env.GRAFANA_PASSWORD;
const url = `https://${username}:${password}@${process.env.GRAFANA_URL}`;

const getUsers = async () => {
  const res = await axios.get(url);
  console.log(res.data)
  return res.data;
};

getUsers();

// const getUsersById = async () => {
//   users = await getUsers();
//   userInfo = [];
//   for (i = 0; i <= 5; i++) {
//     userInfo[i] = { id: users[i].id, name: users[i].name };
//   }
//   console.log(userInfo);
// };

// getUsersById();
