import { Message } from 'discord.js';

export class CommandContext {
    public message: Message;
    public readonly prefix: string;
    public readonly command: string;
    public args: Array<string>;

    public constructor(message: Message, prefix: string) {
        this.message = message;
        this.prefix = prefix;
        this.args = message.content.split(' ');
        this.command = this.args[0].slice(prefix.length);
        this.args.shift();
    }
}
