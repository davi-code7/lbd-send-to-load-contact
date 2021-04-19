const fetch = require("node-fetch");

("use strict");

module.exports.sendToLoadContact = async (event) => {
  const body = JSON.parse(event.Records[0].body);
  const message = JSON.parse(body.Message);

  console.log("message:", message);

  const response = await fetch("http://34.207.221.248:5000/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
