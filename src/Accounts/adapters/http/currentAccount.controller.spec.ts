import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as supertest from 'supertest';
import { AppModule } from '../../../app.module';
describe('CurrentAccountController', () => {
    let app: INestApplication;
  
    beforeEach(async () => {
      const moduleRef: TestingModule = await Test.createTestingModule({
        imports: [AppModule],
      }).compile();
  
      app = moduleRef.createNestApplication();
      await app.init();
    });
  
    test('should create a current account', () => {
      const isBankManager = true
      const accountNumber = "3456"
      const amount = 2092;
      const initDate = '2023-09-20';
  
  
      return supertest(app.getHttpServer())
        .post('/currentAccounts')
        .send({
         isBankManager,
         amount,
         accountNumber,
         initDate,
        })
        .expect(201)
        .expect(({ body }) => {
          expect(body._balance).toBe(amount);
          expect(body._initDate).toBe(initDate);
          expect(body._accountNumber).toBe(accountNumber)
        });
    });
  
    // test('should return a current account', () => {
    //   const id = '408f683e-65dd-449b-b753-e019402ad645';
  
  
    //   return supertest(app.getHttpServer())
    //     .get(`/currentAccounts/${id}`)
    //     .expect(200)
    //     .expect(({ body }) => {
    //       body._amount = 2200
    //       body._initDate = "2023-5-25"
    //       body._isActive = false
    //     });
    // });
  
    // test('should update a current accounts', () => {
    //   const id = '7b440b1f-f786-4ae3-944f-878399ff00ce';
    //   const amount = 3498
    //   const initDate = "2023-2-12"
  
    //   return supertest(app.getHttpServer())
    //     .put(`/currentAccounts/${id}`)
    //     .send({
    //       id,
    //       amount,
    //       initDate,
    //     })
    //     .expect(200)
    //     .expect(({ body }) => {
    //       body._amount = amount
    //       body._initDate = initDate
    //       body._isActive = true
    //     });
    // });
  
    // test('should deactivate a current account', () => {
    //   const id = '2fda8739-ee48-4ea2-91e8-31b5ece8660d';
  
    //   return supertest(app.getHttpServer())
    //     .delete(`/currentAccounts/${id}`)
    //     .expect(200)
    //     .expect(({ body }) => {
    //       body._isActive = false
    //     });
    // });
  
  });