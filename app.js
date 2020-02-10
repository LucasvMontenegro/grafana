const axios = require("axios");

const username = "";
const password = "";
const url = `https://${username}:${password}@grafana.tooling.internal.phipagamentos.com/api/users`;

const getUsers = async () => {
  const res = await axios.get(url);
  console.log(typeof(lug))
  return res.data;
};

const getUsersById = async () => {
  users = await getUsers();
  userInfo = [];
  for (i = 0; i <= 5; i++) {
    userInfo[i] = { id: users[i].id, name: users[i].name };
  }
  console.log(userInfo);
};

getUsersById();
