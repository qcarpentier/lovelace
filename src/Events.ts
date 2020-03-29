import * as Discord from 'discord.js';
import { Logger } from './Core/LoggerManager';
import { CommandHandler } from './Core/CommandHandler';

export class Events {
    public onReady = (): void => {
        Logger.info('The bot is now connected and ready!');
    };

    public onError = (): void => {
        console.log('Discord Error!');
    };

    public onMessage = (message: Discord.Message): void => {
        const prefix = process.env.PREFIX || '!';
        const commandHandler = CommandHandler.getInstance(prefix);

        commandHandler.handleMessage(message);

        Logger.info(
            `New message from ${message.author.username} with a lenght of ${message.content.length} characters`,
        );
    };
}
