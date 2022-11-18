// /**
//  * ada pilihan kendaraan (mobil, motor)
// ada inputan waktu masuk dan waktu keluar
// tiap 1 jam kalau mobil 5000 motor 2000, untuk jam dibulatkan ke atas klo lebih
// dari 1 menit, misal mobil parkir 1 jam 1 menit 2 detik berarti bayarnya 10000,
// tetapi kalau 1 jam 56 detik bayarnya 5000
// kalau 1 hari mobil 80000 motor 40000, untuk hari ndak dibulatkan ke atas
// jadi misal mobil 1 hari 6 jam = (1 x 80000) + (6 x 5000) = 110.000 , motor jg sama
// perhitungannya
//  */

// timeInFormat YYYY-MM-DD hh:mm:ss

function calculateParkingFee(vehicle, parkIn, parkOut) {
  const baseHourFee = {
    motor: 2000,
    mobil: 5000,
  };

  const baseDayFee = {
    motor: 40000,
    mobil: 80000,
  };

  let totalAmount = 0;
  const timeIn = new Date(parkIn);
  const timeOut = new Date(parkOut);

  const diffTime = Math.abs(timeOut - timeIn) / 1000;

  let getTime = getHourMinutesSecond(diffTime);
  if (getTime.year >= 1) {
    totalAmount += getTime.year * 365 * baseDayFee[vehicle];
  }
  if (getTime.month >= 1) {
    totalAmount += getTime.month * 30 * baseDayFee[vehicle];
  }
  if (getTime.week >= 1) {
    totalAmount += getTime.week * 7 * baseDayFee[vehicle];
  }
  if (getTime.day >= 1) {
    totalAmount += getTime.day * baseDayFee[vehicle];
  }
  if (getTime.minute >= 1) {
    totalAmount += (getTime.hour + 1) * baseHourFee[vehicle];
  } else {
    totalAmount += getTime.hour * baseHourFee[vehicle];
  }
  return totalAmount;
}

function getHourMinutesSecond(diffTime) {
  var result = {}; // result
  var structure = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  Object.keys(structure).forEach(function (key) {
    result[key] = Math.floor(diffTime / structure[key]);
    diffTime -= result[key] * structure[key];
  });

  return result;
}

function getTotalParking() {
  const vehicle = document.getElementById('vehicle').value;
  const parkingIn = document.getElementById('parkingIn').value;
  const parkingOut = document.getElementById('parkingOut').value;

  const result = calculateParkingFee(vehicle, parkingIn, parkingOut);

  document.getElementById('result').innerHTML = result.toLocaleString();
}

if (typeof exports !== 'undefined') {
  module.exports = calculateParkingFee;
}
