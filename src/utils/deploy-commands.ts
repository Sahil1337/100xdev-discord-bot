import { REST } from "@discordjs/rest";
import { Bot } from "../core/client";
import { Routes } from "discord-api-types/v9";
import { Command } from "../core/commands";

export async function deployCommands(client: Bot): Promise<void> {
  const rest = new REST({ version: "9" }).setToken(client.token as string);
  const { commands } = client;

  if (!commands.size || commands.size < 1) return;

  try {
    await rest.put(Routes.applicationCommands(client.user.id), {
      body: commands?.map((command: Command) => command),
    });
  } catch (err: any) {
    console.log(`Failed while deploying commands: ${err.message}`);
  }
}
