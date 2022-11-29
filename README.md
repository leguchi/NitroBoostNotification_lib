# NitroBoostNotification_lib
Getting a thank you message sent to the Discord server for a user Nitro boosting.

## Introduction
This build is using [`lib`](https://www.npmjs.com/package/lib), which is an npm package for easily accessing API's listed [here](https://autocode.com/lib/). If you'd like to work on this locally rather than on [Autocode](https://autocode.com/), read [the docs](https://docs.autocode.com/online-ide/can-i-work-locally/).

## Setup
A message will automatically be sent when a user in the guild provides a boost. You can later change whether the mention will be by their nickname or their original username, and the message content itself. 

If you install this snippet through [Autocode](https://autocode.com/leguchi/snippets/cachsnpt_v9YFdfmkCxDqjMK1fdFn5iSXKt9wvpYgNVis/), you will also be asked to provide a channel id when you add this snippet. If you'd ever like to change the channel, you can do so by going to the editor >> the bottom left corner where it says Environment variables >> change the value of the one with key "mesChannel".

If not, you may remove `process.env.mesChannel` and instead place the channel ID as a string in quotes. 
