import * as dotenv from 'dotenv'
import { Client, GatewayIntentBits  } from 'discord.js'

dotenv.config();

const KToken = process.env.TOKEN

const bot = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.MessageContent
] })


bot.on('ready', () => {
    console.log(`Connecté en tant que ${bot.user?.tag}`);
  });

bot.login(KToken)
