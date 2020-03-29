import * as Discord from 'discord.js';
import { CommandHandler } from './Core/CommandHandler';

export class Events {
    public onReady = (): void => {
        console.log('Bot is started');
    };

    public onError = (): void => {
        console.log('Discord Error!');
    };

    public onMessage = (message: Discord.Message): void => {
        const prefix = process.env.PREFIX || '!';
        const commandHandler = CommandHandler.getInstance(prefix);

        commandHandler.handleMessage(message);

        console.log(
            `New message from ${message.author.username} with a lenght of ${message.content.length} characters`,
        );
    };
}
