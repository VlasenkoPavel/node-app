import { Controller, Get } from 'routing-controllers';
import { getRepository } from 'typeorm';

// import { SendIndexHtml } from '../components/middlewares/sendIndexHtml';
import Test from '@infrastructure/db-models/Test'

@Controller()
// @UseBefore(SendIndexHtml)
export class SiteController {

    // @Get(/^\/[\w(\/)]+$/)
    // getIndex(@Res() response:any) {}

    @Get('/test')
    public getНome() {
        const test = new Test();
        test.name = 'test';
        test.description = 'test';
        getRepository(Test).save(test);

        return test;
    }


    @Get('/about')
    public getAbout() {
        return 'about';
    }
}
