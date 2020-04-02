import { expect } from 'chai';
import { Bot } from '../Bot';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

describe('Check instance of Bot', () => {
    it('should return instance of Bot', () => {
        expect(() => Bot.getInstance()).to.not.throw();
        expect(Bot.getInstance()).to.be.a.instanceOf(Bot);
    });
    it('should return the client', () => {
        expect(Bot.getInstance().getClient()).to.be.a('object');
    });
});
