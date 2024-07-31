import { AppService } from './currentAccount.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
}
