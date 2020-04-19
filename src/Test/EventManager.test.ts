import * as dotenv from 'dotenv';
import path from 'path';
import { expect } from 'chai';
import { EventManager } from '../Core/Manager/EventManager';
import { Bot } from '../Bot';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

describe('Check if EventManager work properly', () => {
    it('should define new event without error', () => {
        expect(() => {
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            EventManager.getInstance(Bot.getInstance().getClient()).define('ready', () => {});
        }).to.not.throw();
    });
    it('should return the instance of EventManager', () => {
        expect(EventManager.getInstance(Bot.getInstance().getClient())).to.be.a.instanceOf(EventManager);
    });
});
