import { ClientOptions } from "discord.js";
import { loadCommands } from "../utils/load-commands";

const { Client, Collection } = require("discord.js");

export class Bot extends Client {
  public commands = new Collection();

  constructor(props: ClientOptions) {
    super(props);
  }

  async init() {
    try {
      loadCommands(this);
      await this.login(process.env.DISCORD_BOT_TOKEN);
    } catch (error) {
      console.log(`Failed to init:`, error?.message);
    }
  }
}
