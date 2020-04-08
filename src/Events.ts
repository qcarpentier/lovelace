import * as Discord from 'discord.js';
import { Logger } from './Core/Manager/LoggerManager';
import { CommandHandler } from './Core/Manager/CommandHandler';
import { Bot } from './Bot';
import { ConfigManager } from './Core/Manager/ConfigManager';

export class Events {
    public onReady = (): void => {
        const client = Bot.getInstance().getClient();
        Logger.info(`The bot is ready! Logged in as ${client.user.tag}`);
    };

    public onError = (eventError: Error): void => {
        Logger.error(eventError.message);
    };

    public onMessage = (message: Discord.Message): void => {
        const prefix = ConfigManager.getConfig().main.prefix;
        const commandHandler = CommandHandler.getInstance(prefix);
        commandHandler.handleMessage(message);
    };
}
