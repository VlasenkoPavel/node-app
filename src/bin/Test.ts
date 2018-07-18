import 'reflect-metadata';
import { Load } from './Load'
import { getRepository } from 'typeorm';
import Test from '../server/infrastructure/db-models/Test';

export class TestCass extends Load {
    public async load(): Promise<any> {
        await this.init();
        const test = new Test();
        test.name = 'name';
        test.description = 'desc';
        await getRepository(Test).save(test);
        const getedTest = await getRepository(Test).findOne(1);
        console.log('getTest=', getedTest);
        await this.close();
    };
}

/**
 * RUN
 */
(async function() {
    const loader = new TestCass();
    await loader.load();
})();
