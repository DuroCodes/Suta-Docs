---
sidebar_position: 3
---

# Adding to Suta

Let's add some stuff to our bot.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.
- Suta already installed:
  - Follow the instructions [here](./intro.md) to install it.

## Adding Commands

To add a command, you need to:

- Create a new file in the `src/commands` directory.
  - You can create a new directory in the `src/commands` directory if you wish to group commands.

### Creating a Command

When creating a new file, you can use the following template:

```ts
import { type CommandOptions, Command } from '@sapphire/framework';
import { ApplyOptions } from '@sapphire/decorators';
import { CommandInteraction } from 'discord.js';

@ApplyOptions<CommandOptions>({
  name: '', // The name of the command.
  description: '', // The description of the command.
  fullCategory: [''], // The full category of the command. You can have multiple categories.
  chatInputCommand: { register: true }, // Whether the command should be registered automatically when the bot is started.
  enabled: true, // Whether the command is enabled.
})

export class UserCommand extends Command {
  public override async chatInputRun(interaction: CommandInteraction): Promise<void> {
    // Your code here
  }
}
```

### Adding Options

Use the following template to add options to your command and register your command:

```ts
import { type ApplicationCommandRegistry } from '@sapphire/framework';

public override registerApplicationCommands(registry: ApplicationCommandRegistry) {
  registry.registerChatInputCommand({
    name: this.name, // The name of the command.
    description: this.description, // The description of the command.
    options: []
  });
}
```

### Options

The options in the command have the following structure:

```ts
import { ApplicationCommandOptionTypes } from 'discord.js/typings/enums';

options: [
  { 
    type: ApplicationCommandOptionTypes.SUB_COMMAND,
    name: '', // The name of the option.
    description: '', // The description of the option.
    required: true, // Whether the option is required.
  }
]
```

You can add multiple options to the command. Just add more options to the array.

You can also use [builders](https://discord.js.org/#/docs/builders/stable/class/SlashCommandBuilder) to create your command.

## Adding Listeners/Events

To add a listener, you need to:

- Create a new file in the `src/listeners` directory.
  - You can create a new directory in the `src/listeners` directory if you wish to group listeners.

### Creating a Listener

When creating a new listener, you can use the following template:

```ts
import { Listener, type ListenerOptions } from '@sapphire/framework';
import { ApplyOptions } from '@sapphire/decorators';

@ApplyOptions<ListenerOptions>({
  name: '', // The name of the event.
  once: false, // Whether the event should only be called once.
})

export class UserListener extends Listener {
  public run(/* arguments for your event */): void {
    // Your code here
  }
}
```

- Insure the name of your event is a valid Discord event.
  - You can find a list of events [here](https://discord.js.org/#/docs/main/stable/class/Client) under the `events` dropdown.

