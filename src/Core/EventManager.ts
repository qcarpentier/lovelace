import * as Discord from 'discord.js';
import { ClientEvents } from 'discord.js';

export class EventManager {
    private static instance: EventManager;
    private readonly client: Discord.Client;

    private constructor(client: Discord.Client) {
        this.client = client;
    }

    public static getInstance(client: Discord.Client): EventManager {
        if (!this.instance) {
            this.instance = new EventManager(client);
        }
        return this.instance;
    }

    /**
     * Allows you to define a Discord event
     * @param event - The Discord event which will be trigger the event
     * @param listener - This is the function which will be call when even is trigger
     */
    public define<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => void): EventManager {
        this.client.on(event, listener);
        return EventManager.getInstance(this.client);
    }
}
