import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}
  compute(a: number, b:number){
    console.log('Drawing 10 watts power from power service');
    this.powerService.supplypower(10);
    return a + b;
  }
}
