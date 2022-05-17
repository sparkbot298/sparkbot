# sparkbot
Original source code for sparkbot on Discord

# Setup instructions 
**PLEASE READ THIS. SPARKBOT IS NOT FOR SELF HOSTING**
theres a guide anyway

## Step 1: Get a token
- Head over to the [Discord developer portal](https://discord.com/developers/applications), create an app and go over to Bot, reset the token then copy that.
- Go to `bot.login("token");` and replace `token` with what you just copied.

## Step 2: Setting up log channels
- sparkbot can log things, like starting, getting invited or removed. This is required. 
- Go to a server the bot is in, then copy the channel ID (turn developer mode on) then paste it in `ready`, `guildCreate` and `guildDelete` (where it says "channel id")

## Step 3: Starting the bot
- That's it! Just run `npm install discord.js` then run `node index.js` and it will start!

# Credits
- I made this bot entirely from scratch using Discord.js

# Things I might add in the future
- Fetching commands (to pull stuff from various APIs)
- NSFW commands
- Music
- Embeds

# Things I will never add
- Soundboard
- Rating machines (they are on sparkfirebot)
- DM commands

# Final
Any suggestions? Email them to me `sparkfire298@gmail.com`
Please be respecful when using the bot, nothing is hidden and what you see is what there is
