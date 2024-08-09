import {
  ApplicationCommandOptionChoiceData,
  AutocompleteFocusedOption,
  AutocompleteInteraction,
  CommandInteraction,
  PermissionsString,
} from "discord.js";

export interface Command {
  names: string[];
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
