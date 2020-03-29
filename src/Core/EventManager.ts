import * as Discord from 'discord.js';

export class EventManager {
    private static instance: EventManager;
    private events: Array<object>;
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
     * @param {string} event - The Discord event which will be trigger the event
     * @param handler - This is the function which will be call when even is trigger
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public defineOn(event: any, handler: any): EventManager {
        // Todo : Change type of handler
        this.client.on(event, handler);
        return EventManager.getInstance(this.client);
    }
}
