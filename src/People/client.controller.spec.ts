import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as supertest from 'supertest';
import { AppModule } from '../app.module';

describe('ClientController', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test('should create a client', () => {
    const name = 'Eduardo Moura';
    const cpf = '41236587945';


    return supertest(app.getHttpServer())
      .post('/client')
      .send({
        name,
        cpf
      })
      .expect(201)
      .expect(({ body }) => {
        expect(body._name).toBe('Eduardo Moura');
        expect(body._cpf).toBe(cpf);
      });
  });

  test('should return a client', () => {
    const id = '5790402b-5faf-4990-8938-a8b38422e9f0';


    return supertest(app.getHttpServer())
      .get(`/client/${id}`)
      .expect(200)
      .expect(({ body }) => {
        body._name = "Luis"
        body._cpf = "32873298768"
        body._isActive = false
        body._bankManagerID = "5790402b-5faf-4990-8938-a8b38422e9f0"
        body._currentAccount = []
        body._poupancaAccount = []
      });
  });

  test('should update a client', () => {
    const id = '80ca9aae-5188-4fb0-ab24-8fd7758af571';
    const name = "Mariana Silva"
    const cpf = "76523498765"

    return supertest(app.getHttpServer())
      .put(`/client/${id}`)
      .send({
        name,
        cpf,
      })
      .expect(200)
      .expect(({ body }) => {
        body._name = name
        body._cpf = cpf
        body._isActive = true
        body._currentAccount = []
        body._poupancaAccount = []
      });
  });

  test('should deactivate a client', () => {
    const id = '507eba82-2b74-4b1a-b78b-e27161a5247a';

    return supertest(app.getHttpServer())
      .delete(`/client/${id}`)
      .expect(200)
      .expect(({ body }) => {
        body._isActive = false
      });
  });

});
