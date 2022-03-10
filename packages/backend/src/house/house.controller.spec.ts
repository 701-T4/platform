import { Test, TestingModule } from '@nestjs/testing';
import { UserStoreService } from '../db/user/userStore.service';
import { HouseStoreService } from '../db/house/houseStore.service';
import { HouseController } from './house.controller';

describe('HouseController', () => {
  let controller: HouseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HouseController],
      providers: [
        { provide: HouseStoreService, useValue: {} },
        { provide: UserStoreService, useValue: {} },
      ],
    }).compile();

    controller = module.get<HouseController>(HouseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
