import { expect } from 'chai';
import { ConfigManager } from '../Core/ConfigManager';
describe('Check configManager', () => {
    it('should return instance of ConfigManager', () => {
        expect(ConfigManager.getInstance()).to.be.a('object');
    });
    it('should return config from botconfig.json', () => {});
});
