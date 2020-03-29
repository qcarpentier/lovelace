import { Client } from 'discord.js';
import { EventManager } from './Core/EventManager';
import { Events } from './Events';

export class Bot {
    private static instance: Bot;
    private readonly client: Client;

    private constructor(client: Client) {
        this.client = client;
        this.client.login(process.env.TOKEN);

        const eventManager = EventManager.getInstance(this.client);
        const event = new Events();
        eventManager
            .defineOn('ready', event.onReady)
            .defineOn('error', event.onError)
            .defineOn('message', event.onMessage);
    }

    public static getInstance(): Bot {
        if (!this.instance) {
            this.instance = new Bot(new Client());
        }
        return this.instance;
    }
}
