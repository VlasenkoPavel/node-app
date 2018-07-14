import { Controller, Param, Body, Get, Post, Put, Delete, Res, UseBefore } from 'routing-controllers';
import * as path from 'path';

import * as express from 'express';
import { SendIndexHtml } from '../components/middlewares/sendIndexHtml';

@Controller()
@UseBefore(SendIndexHtml)
export class SiteController {

    // @Get(/^\/[\w(\/)]+$/)
    // getIndex(@Res() response:any) {}

    @Get('/')
    public getНome() {
        return 'home';
    }


    @Get('/about')
    public getAbout() {
        return 'about';
    }
}
