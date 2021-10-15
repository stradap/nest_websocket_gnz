import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IMessage } from './utils/interfaces';
import { PriorityQueueClass } from './utils/queue';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  pairwiseQueue = new PriorityQueueClass((a, b) => a[1] > b[1]);

  @Get()
  getHello(): {} {
    return this.appService.getSizeOfQueue(this.pairwiseQueue.size());
  }

  @Get('getNextItem')
  getQueue(): IMessage {
    console.log(this.pairwiseQueue.getAllArray());
    return this.appService.getNextCall(this.pairwiseQueue.pop());
  }

  @Get('getAllQueue')
  getAllQueue(): IMessage[] {
    const allQueue: IMessage[] = this.pairwiseQueue.getAllArray();
    return this.appService.getAllQueue(allQueue);
  }

}
