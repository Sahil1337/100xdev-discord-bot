import path from "path";
import fs from "fs";
import { Bot } from "../core/client";
import { Command as coreCommand } from "../core/commands";

export const loadCommands = (client: Bot) => {
  const commandsDir = path.join(__dirname, "../", "commands");

  let files: string[] = fs
    .readdirSync(commandsDir)
    .filter((file: any) => file.endsWith(".js"));

  if (!files || !files.length)
    return console.log(`[ERROR]: "No" commands found!`);

  for (const file of files) {
    const { Command } = require(path.join(commandsDir, file));
    const command = new Command() as coreCommand;

    if (!command?.name) return;

    client.commands.set(command.name, command);
  }
};
