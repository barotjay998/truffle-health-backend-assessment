const request = require('supertest');
const app = require('../app');

describe('GET /items', () => {
  it('should return an array of medical bills', async () => {
    const res = await request(app)
      .get('/items')
      .expect(200)
      .expect('Content-Type', /json/);

    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe('POST /items', () => {
  it('should create a new medical bill', async () => {
    const bill = {
      patientName: 'Jay Barot',
      patientAddress: '2312 Elliston Pl, Nashville TN USA 12345',
      hospitalName: 'Vanderbilt Medical Center',
      dateOfService: '2023-02-12',
      amount: 10000
    };

    const res = await request(app)
      .post('/items')
      .send(bill)
      .expect(200)
      .expect('Content-Type', /json/);

    expect(res.body).toMatchObject(bill);
  });

  it('should return a 400 error for missing bill details', async () => {
    const bill = {};

    const res = await request(app)
      .post('/items')
      .send(bill)
      .expect(400)
      .expect('Content-Type', /json/);

    expect(res.body).toMatchObject({ error: 'Bad request. All bill details are required.' });
  });
});
