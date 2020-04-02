import { CommandContext } from '../Core/CommandContext';

export interface CommandInterface {
    names: string[];
    description?: string;
    permissions?: Array<string>;
    isEnabled?: boolean;
    typeEffect?: boolean;
    commandInterval?: number;

    execute(userCommand: CommandContext): Promise<void>;
}
