const {
  create, 
  Client,
} = require('@open-wa/wa-automate');
const {help, sticker} = require('./message');

const app = () => {
  function start(client = new Client()) {
    client.onMessage(async (msg) => {
      if (msg.body === 'test') {
        await client.sendText(msg.from, 'testing bot');
      }

      if (msg.body === '/help') {
        await client.sendText(msg.from, help);
      }
  
      if (msg.caption === '/sticker') {
        await sticker({client, msg});
      }
    });
  }
  
  create()
    .then((client) => start(client))
    .catch((err) => console.log(err));
}

module.exports = app;
