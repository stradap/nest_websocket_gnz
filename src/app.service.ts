import { Injectable } from '@nestjs/common';
import { IMessage } from './utils/interfaces';

@Injectable()
export class AppService {
  // 
  getSizeOfQueue(number: Number) {
    return { response: `Current size of queue! ${number}` }
  }

  getNextCall(callMsg: IMessage) {
    return callMsg;
  }

  getAllQueue(arrayMsg: IMessage[]) {
    return arrayMsg;
  }
}
