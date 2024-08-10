import { CommandInteraction, PermissionsString } from "discord.js";
import { Command as command } from "../core/commands";

export class Command implements command {
  name = "ping";
  description = "Ping command.";
  requireClientPerms: PermissionsString[] = ["SendMessages"];

  async execute(interaction: CommandInteraction): Promise<void> {
    await interaction.deferReply();
    await interaction.editReply("Pong!");
    return Promise.resolve();
  }
}
