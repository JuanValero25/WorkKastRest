import * as configs from '../../enviroment/enviroment.json';

const stage: string = process.env.stage || 'DEV';

// this class can be used for more fancy configuration loading
export default class ConfigLoader {
    public static getConfigsByEnv(): any {
        // @ts-ignore
        return configs[stage];
    }

}
