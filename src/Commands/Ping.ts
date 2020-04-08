import { CommandInterface } from '../Interface/CommandInterface';
import { CommandContext } from '../Core/Manager/CommandContext';

export class Ping implements CommandInterface {
    names = ['ping'];

    async execute(userCommand: CommandContext): Promise<void> {
        await userCommand.message.channel.send('Pong!');
    }
}
