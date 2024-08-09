import { CommandInteraction, PermissionsString } from "discord.js";
import { Command } from "../core/commands";

export class PingCommand implements Command {
  names = ["ping"];
  requireClientPerms: PermissionsString[] = ["SendMessages"];

  execute(intr: CommandInteraction): Promise<void> {
    intr.reply("Pong!");
    return Promise.resolve();
  }
}
