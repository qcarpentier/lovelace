import { expect } from 'chai';
import { Bot } from '../Bot';
import * as dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

describe('Check instance of Bot', () => {
    it('should return instance of Bot', () => {
        expect(Bot.getInstance()).to.be.a('object');
    });
});
