require("dotenv");
const fetch = require("node-fetch");

("use strict");

module.exports.sendToLoadContact = async (event) => {
  const body = JSON.parse(event.Records[0].body);
  const message = JSON.parse(body.Message);

  const response = await fetch("http://localhost:5002", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
