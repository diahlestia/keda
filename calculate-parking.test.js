const calculateParkingFee = require('./calculate-parking.js');

test('1 hour 1 minute car parking', () => {
  expect(
    calculateParkingFee('mobil', '2022-11-18 20:30:00', '2022-11-18 21:31:00')
  ).toBe(10000);
});

test('1 hour 1 minute motorcycle parking', () => {
  expect(
    calculateParkingFee('motor', '2022-11-18 20:30:00', '2022-11-18 21:31:00')
  ).toBe(4000);
});

test('1 hour 0 minute 56 second car parking', () => {
  expect(
    calculateParkingFee('mobil', '2022-11-18 20:30:00', '2022-11-18 21:30:56')
  ).toBe(5000);
});

test('1 hour 0 minute 56 second motorcycle parking', () => {
  expect(
    calculateParkingFee('motor', '2022-11-18 20:30:00', '2022-11-18 21:30:56')
  ).toBe(2000);
});

test('1 day 6 hour 0 minute 56 second car parking', () => {
  expect(
    calculateParkingFee('mobil', '2022-11-17 15:30:00', '2022-11-18 21:30:56')
  ).toBe(110000);
});

test('1 day 6 hour 0 minute 56 second motorcycle parking', () => {
  expect(
    calculateParkingFee('motor', '2022-11-17 15:30:00', '2022-11-18 21:30:56')
  ).toBe(52000);
});

test('1 day 6 hour 1 minute 2 second car parking', () => {
  expect(
    calculateParkingFee('mobil', '2022-11-17 15:30:00', '2022-11-18 21:31:02')
  ).toBe(115000);
});

test('1 day 6 hour 1 minute 02 second motorcycle parking', () => {
  expect(
    calculateParkingFee('motor', '2022-11-17 15:30:00', '2022-11-18 21:31:02')
  ).toBe(54000);
});
