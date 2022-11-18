function getTotalParking() {
  const vehicle = document.getElementById('vehicle').value;
  const parkingIn = document.getElementById('parkingIn').value;
  const parkingOut = document.getElementById('parkingOut').value;

  const result = calculateParkingFee(vehicle, parkingIn, parkingOut);

  document.getElementById('result').innerHTML = result.toLocaleString();
}

function load() {
  fetch('./data/parking-list.json')
    .then((response) => response.json())
    .then((data) => {
      for (var i = 0; i < data.length; i++) {
        let type = data[i].type;
        let timeIn = data[i].timeIn;
        let timeOut = data[i].timeOut;
        let total = data[i].total;
        document.querySelector('#myTable').innerHTML += `
          <tr>
              <td>${type}</td>
              <td>${timeIn}</td>
              <td>${timeOut}</td>
              <td>${total.toLocaleString()}</td>
          </tr>`;
      }
    });
}

function filterVehicle() {
  var input, filter, table, tr, td, i;
  input = document.getElementById('mylist');
  filter = input.value.toUpperCase();
  table = document.getElementById('myTable');
  tr = table.getElementsByTagName('tr');
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName('td')[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = '';
      } else {
        tr[i].style.display = 'none';
      }
    }
  }
}
