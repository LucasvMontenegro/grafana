const axios = require("axios");
require("dotenv/config");

const username = process.env.GRAFANA_USERNAME;
const password = process.env.GRAFANA_PASSWORD;
const url = `https://${username}:${password}@${process.env.GRAFANA_URL}`;

const getUsers = async () => {
  let users = await axios.get(`${url}/users`);
  console.log(users.data);
  return users.data;
};

//getUsers();

const getUserById = async id => {
  const users = await axios.get(`${url}/users/${id}`);
  console.log(users.data);
  return users.data;
};

//getUserById(2);

const getUsersByProperty = async (property, value) => {
  let users = await axios.get(`${url}/users`);
  users = users.data;
  for (i = 0; i <= 50; i++) {
    switch (property) {
      case "name":
        const { name } = users[i];
        if (name == value) {
          console.log(name);
          const { id } = users[i];
          console.log('ID: ',id);
          i = 50;
        }
        break;
      case "email":
        const { email } = users[i];
        if (email == value) {
          console.log(email);
          const { id } = users[i];
          console.log('ID: ',id);
          i = 50;
        }
        break;
    }
  }
};

getUsersByProperty("email", "lucas.montenegro@somosphi.com");
