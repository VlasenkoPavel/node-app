import * as stream  from 'stream';
import * as Chance from 'chance';
import { ReadableOptions } from 'stream';

const chance = new Chance();

export class RandomStream extends stream.Readable {
    constructor(options?: ReadableOptions) {
        super(options);
    }

_read(size: number) {
        const chunk = chance.string();
        console.log(`Pushing chunk of size: ${chunk.length}`);
        this.push(chunk, 'utf8');

        if (chance.bool({ likelihood: 5 })) {
            this.push(null);
        }
    }
}
