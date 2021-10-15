import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getSize', () => {
    it('should return "{ "response": "Current size of queue! 0", }"', () => {
      const appController = app.get<AppController>(AppController);

      expect(appController.getSize()).toStrictEqual({
        response: "Current size of queue! 0"
      });
    });
  });


  describe('getSize2', () => {
    it('should return "{ data: "test", priority: 100 }"', () => {
      const appController = app.get<AppController>(AppController);

      appController.pairwiseQueue.push({ data: 'test', priority: 0 });
      appController.pairwiseQueue.push({ data: 'test', priority: 100 });
      appController.pairwiseQueue.push({ data: 'test', priority: 99 });
      appController.pairwiseQueue.push({ data: 'test', priority: 5 });
      expect(appController.pairwiseQueue.pop()).toEqual({ data: 'test', priority: 100 });
    });
  });
});
