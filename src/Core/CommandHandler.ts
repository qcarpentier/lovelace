import { Message } from 'discord.js';
import { CommandInterface } from '../Interface/CommandInterface';
import { CommandContext } from './CommandContext';
import { Ping } from '../Commands/Ping';

export class CommandHandler {
    private static instance: CommandHandler;
    private commands: CommandInterface[];
    private readonly prefix: string;

    private constructor(prefix: string) {
        const commandClasses = [Ping];
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

        const commandContext = new CommandContext(message, this.prefix);
        // console.log(`Command Context: ${message} et ${commandContext.command}`);

        const foundCommand = this.commands.find((command) => command.names.includes(commandContext.command));

        if (!foundCommand) {
            await message.reply(
                `La commande n'a pas été trouvée. Essayez ${this.prefix}help pour voir les commandes possibles!`,
            );
        } else {
            await foundCommand.execute(commandContext);
        }
    }

    private isCommand(message: Message): boolean {
        return message.content.startsWith(this.prefix) && !message.author.bot && message.channel.type !== 'dm';
    }
}
