const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let messageChannel = process.env.mesChannel;

console.log(parseInt(context.params.event.premium_since) < 60);
if (context.params.event.premium_since != null) {
  if (parseInt(context.params.event.premium_since) < 60) {
    await lib.discord.channels['@0.3.1'].messages.create({
      channel_id: messageChannel,
      content: `Thank you for boosting this server, <@!${context.params.event.user.id}>.`,
      tts: false,
    });
  }
}
