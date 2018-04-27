import { Controller, Param, Body, Get, Post, Put, Delete } from "routing-controllers";

@Controller()
export class UserController {

    @Get("/")
    getНome() {
       return "home page";
    }

    @Get("/about")
    getAbout() {
        return "about";
    }
}
