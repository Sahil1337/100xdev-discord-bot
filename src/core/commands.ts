import {
  ApplicationCommandOptionChoiceData,
  AutocompleteFocusedOption,
  AutocompleteInteraction,
  CommandInteraction,
  PermissionsString,
} from "discord.js";

export interface Command {
  name: string;
  description: string;
  requireClientPerms: PermissionsString[];
  autocomplete?(
    intr: AutocompleteInteraction,
    option: AutocompleteFocusedOption
  ): Promise<ApplicationCommandOptionChoiceData[]>;
  execute(intr: CommandInteraction): Promise<void>;
}

export enum CommandDeferType {
  PUBLIC = "PUBLIC",
  HIDDEN = "HIDDEN",
  NONE = "NONE",
}
