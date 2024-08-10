import "dotenv/config";
import { CommandInteraction, Events, GatewayIntentBits } from "discord.js";
import { Bot } from "./core/client";
import { deployCommands } from "./utils/deploy-commands";
import { Command } from "./core/commands";

const client = new Bot({ intents: [GatewayIntentBits.Guilds] });
client.init();

// When the client is ready, run this code (only once).
client.once(Events.ClientReady, async (readyClient: Bot) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
  await deployCommands(readyClient);
});

// Handle interactionCreate event from client
client.on(Events.InteractionCreate, async (interaction: CommandInteraction) => {
  try {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;
    const command = client.commands.get(commandName) as Command;

    await command.execute(interaction);
  } catch (err: unknown) {
    console.log(`Failed to execute command: ${(err as Error).message}`);
  }
});
