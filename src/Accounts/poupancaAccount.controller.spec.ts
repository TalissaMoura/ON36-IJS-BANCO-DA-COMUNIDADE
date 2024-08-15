import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as supertest from 'supertest';
import { AppModule } from '../app.module';
describe('poupancaAccountController', () => {
    let app: INestApplication;
  
    beforeEach(async () => {
      const moduleRef: TestingModule = await Test.createTestingModule({
        imports: [AppModule],
      }).compile();
  
      app = moduleRef.createNestApplication();
      await app.init();
    });
  
    test('should create a poupanca account', () => {
      const isBankManager = true
      const amount = 2076;
      const initDate = '2022-09-10';
  
  
      return supertest(app.getHttpServer())
        .post('/poupancaAccounts')
        .send({
         isBankManager,
         amount,
         initDate,
        })
        .expect(201)
        .expect(({ body }) => {
          expect(body._isActive).toBe(true);
          expect(body._amount).toBe(amount);
          expect(body._initDate).toBe(initDate);
        });
    });
  
    test('should return a poupanca account', () => {
      const id = '2c6c8f26-36cd-446b-951c-0e039cbfad14';
  
  
      return supertest(app.getHttpServer())
        .get(`/poupancaAccounts/${id}`)
        .expect(200)
        .expect(({ body }) => {
          body._amount = 250
          body._initDate = "2024-5-8"
          body._isActive = true
        });
    });
  
    test('should update a poupanca accounts', () => {
      const id = '6ce73870-ead1-4807-907e-73d1f6fed7fa';
      const amount = 2250
      const initDate = "2022-8-16"
  
      return supertest(app.getHttpServer())
        .put(`/poupancaAccounts/${id}`)
        .send({
          id,
          amount,
          initDate,
        })
        .expect(200)
        .expect(({ body }) => {
          body._amount = amount
          body._initDate = initDate
          body._isActive = true
        });
    });
  
    test('should deactivate a current account', () => {
      const id = '797bc9f0-f344-47c4-9b45-96b42233a764';
  
      return supertest(app.getHttpServer())
        .delete(`/poupancaAccounts/${id}`)
        .expect(200)
        .expect(({ body }) => {
          body._isActive = false
        });
    });
  
  });
