import { Client } from 'discord.js';
import { EventManager } from './Core/EventManager';
import { Events } from './Events';
import { ConfigManager } from './Core/ConfigManager';
import { Logger } from './Core/LoggerManager';

export class Bot {
    private static instance: Bot;
    private readonly client: Client;

    private constructor(client: Client) {
        this.client = client;
        this.client.login(process.env.TOKEN).catch((e: Error) => {
            Logger.warn(`Unable to log in, the token is probably wrong : ${e.message}`);
            throw e;
        });

        const eventManager = EventManager.getInstance(this.client);
        const event = new Events();

        eventManager.define('ready', event.onReady).define('error', event.onError).define('message', event.onMessage);
        ConfigManager.getInstance();
    }

    public static getInstance(): Bot {
        if (!this.instance) {
            this.instance = new Bot(new Client());
        }
        return this.instance;
    }

    public getClient(): Client {
        return this.client;
    }
}
