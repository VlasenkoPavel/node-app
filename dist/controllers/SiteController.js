"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const sendIndexHtml_1 = require("../components/sendIndexHtml");
let SiteController = class SiteController {
    // @Get(/^\/[\w(\/)]+$/)
    // getIndex(@Res() response:any) {}
    getНome() {
        return "home";
    }
    getAbout() {
        return "about";
    }
};
__decorate([
    routing_controllers_1.Get("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SiteController.prototype, "get\u041Dome", null);
__decorate([
    routing_controllers_1.Get("/about"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SiteController.prototype, "getAbout", null);
SiteController = __decorate([
    routing_controllers_1.Controller(),
    routing_controllers_1.UseBefore(sendIndexHtml_1.SendIndehHtml)
], SiteController);
exports.SiteController = SiteController;
