import * as Discord from 'discord.js';
import { Logger } from './Core/LoggerManager';

export class Events {
    public onReady = (): void => {
        Logger.info('The bot is now connected and ready!');
    };

    public onMessage = (message: Discord.Message): void => {
        Logger.info(
            `New message from ${message.author.username} with a lenght of ${message.content.length} characters`,
        );
    };
}
