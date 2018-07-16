import { Controller, Param, Body, Get, Post, Put, Delete, Res, UseBefore } from 'routing-controllers';
import { getRepository } from 'typeorm';
import * as path from 'path';

import * as express from 'express';
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
