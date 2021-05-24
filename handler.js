const fetch = require('node-fetch');

('use strict');

module.exports.sendToLoadContact = async (event) => {
  const body = JSON.parse(event.Records[0].body);
  const message = JSON.parse(body.Message);

  console.log('INTERNAL ERROR TEST');

  const response = await fetch('ip-172-31-24-84.ec2.internal:5003/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
