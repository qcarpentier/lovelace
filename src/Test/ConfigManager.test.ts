import { expect } from 'chai';
import { ConfigManager } from '../Core/ConfigManager';

describe('Check configManager', () => {
    it('should return instance of ConfigManager', () => {
        expect(ConfigManager.getInstance()).to.be.a.instanceOf(ConfigManager);
    });
    it('should get config of botconfig.json', () => {
        expect(ConfigManager.getConfig()).to.be.a('object');
    });
    it('Botconfig should have some property and right type', () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const expectTo = (name: any, type: string): void => {
            expect(name).to.be.a(type);
        };
        const config = ConfigManager.getConfig();
        expectTo(config.roles, 'object');
        expectTo(config.main, 'object');
        expectTo(config.main.prefix, 'string');
        expectTo(config.roles.administrator, 'array');
        expectTo(config.roles.moderator, 'array');
    });
    it('should get config of loggerConfig', () => {
        expect(ConfigManager.getInstance().getLoggerConfig()).to.be.a('object');
    });
    it('loggerConfig should have tho property', () => {
        expect(ConfigManager.getInstance().getLoggerConfig()).to.have.any.keys('saveInFile', 'saveFilename');
    });
    it('loggerConfig should have the the right type', () => {
        const loggerConfig = ConfigManager.getInstance().getLoggerConfig();
        expect(loggerConfig.saveInFile).to.be.a('boolean');
        expect(loggerConfig.saveFilename).to.be.a('string');
    });
});
