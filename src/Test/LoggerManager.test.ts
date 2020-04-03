import { expect } from 'chai';
import { Logger } from '../Core/LoggerManager';

describe('Check if LoggerManager work properly', () => {
    it('should return Logger object', () => {
        expect(Logger).to.be.a('object');
    });
    it('should log in console properly', () => {
        expect(() => Logger.info('Hello from unit test')).to.not.throw();
        expect(() => Logger.warn('Hello from unit test')).to.not.throw();
        expect(() => Logger.error('Hello from unit test')).to.not.throw();
    });
});
