import * as Discord from 'discord.js';
import { EventManager } from './Core/EventManager';
import { Events } from './Events';

export class Bot {
    private static instance: Bot;
    private readonly client: Discord.Client;

    private constructor(client: Discord.Client) {
        this.client = client;

        const manager = EventManager.getInstance(this.client);
        const event = new Events();
        manager.defineOn('ready', event.onReady).defineOn('message', event.onMessage);

        this.client.login(process.env.TOKEN);
    }

    public static getInstance(): Bot {
        if (!this.instance) {
            this.instance = new Bot(new Discord.Client());
        }
        return this.instance;
    }
}
