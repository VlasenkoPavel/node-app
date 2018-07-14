import { Controller, Param, Body, Get, Post, Put, Delete } from 'routing-controllers';

@Controller()
export class UserController {

    @Get('/users')
    public getAll() {
        return 'This action returns all users';
    }

    @Get('/users/:id')
    public getOne(@Param('id') id: number) {
        return 'This action returns user #' + id;
    }

    @Post('/users')
    public post(@Body() user: any) {
        return 'Saving user...';
    }

    @Put('/users/:id')
    public put(@Param('id') id: number, @Body() user: any) {
        return 'Updating a user...';
    }

    @Delete('/users/:id')
    public remove(@Param('id') id: number) {
        return 'Removing user...';
    }

}
