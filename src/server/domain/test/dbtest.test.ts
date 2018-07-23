import 'reflect-metadata';
import { Load } from '../../../bin/Load'
import { getRepository } from 'typeorm';
import Test from '../../infrastructure/db-models/Test';

export class TestCass extends Load {
    public async load(): Promise<any> {
        await this.init();
        await this.close();
    };
}

/**
 * RUN
 */
// (async function() {
//     const loader = new TestCass();
//     await loader.load();
// })();

// const dbTester = new TestCass;
// await dbTester.init()

describe('db test', () => {
    it("find test model", async() => {
        const loader = new TestCass();
        await loader.init();

        const data = await getRepository(Test).findOne(1);
        loader.close();
        // expect.assertions(1);
        expect(data).toEqual({ id: 1, name: 'name', description: 'desc' });
    });
});

// test('db test', async () => {
//     const loader = new TestCass();
//     await loader.init();

//     const data = await getRepository(Test).findOne(1);
//     loader.close();
//     // expect.assertions(1);
//     expect(data).toBe({ id: 1, name: 'name2', description: 'desc' });
// });


