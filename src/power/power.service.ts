import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
    supplypower(watts: number){
        console.log(`Supplying ${watts}`)
    }
}
