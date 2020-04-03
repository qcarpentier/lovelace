import { Message } from 'discord.js';
import { CommandInterface } from '../Interface/CommandInterface';
import { CommandContext } from './CommandContext';
import { Ping } from '../Commands/Ping';
import { Uptime } from '../Commands/Uptime';

export class CommandHandler {
    private static instance: CommandHandler;
    private commands: CommandInterface[];
    private readonly prefix: string;

    private constructor(prefix: string) {
        // Todo : Class should be load dynamically from Commands folder (maybe with namespace ?)
        const commandClasses = [Ping, Uptime];
        this.commands = commandClasses.map((commandClass) => new commandClass());
        this.prefix = prefix;
    }

    public static getInstance(prefix: string): CommandHandler {
        if (!this.instance) {
            this.instance = new CommandHandler(prefix);
        }
        return this.instance;
    }

    async handleMessage(message: Message): Promise<void> {
        if (!this.isCommand(message)) return undefined;

        const commandContext: CommandContext = new CommandContext(message, this.prefix);
        const foundCommand: CommandInterface | undefined = this.commands.find((command) =>
            command.names.includes(commandContext.command),
        );

        foundCommand
            ? await foundCommand.execute(commandContext)
            : await message.reply(
                  `La commande n'a pas été trouvée. Essayez ${this.prefix}help pour voir les commandes possibles!`,
              );
    }

    private isCommand(message: Message): boolean {
        return message.content.startsWith(this.prefix) && !message.author.bot;
    }
}
