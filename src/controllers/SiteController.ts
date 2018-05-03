import { Controller, Param, Body, Get, Post, Put, Delete, Res, UseBefore } from "routing-controllers";
import * as path from "path";

import * as express from 'express';
import { SendIndehHtml } from '../components/sendIndexHtml'

@Controller()
@UseBefore(SendIndehHtml)
export class SiteController {

    // @Get(/^\/[\w(\/)]+$/)
    // getIndex(@Res() response:any) {}

    @Get("/")
    getНome() {
        return "home"
    }


    @Get("/about")
    getAbout() {
        return "about";
    }
}
