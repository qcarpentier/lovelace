import { Message } from 'discord.js';

export class CommandContext {
    public readonly command: string;
    public readonly prefix: string;
    public args: string;
    public message: Message;

    public constructor(message: Message, prefix: string) {
        const messageContent = message.content.toLowerCase();
        const args = messageContent.split(' ');
        this.command = args[0].slice(prefix.length);
        this.prefix = prefix;
        this.args = args.shift();
        this.message = message;
    }
}
