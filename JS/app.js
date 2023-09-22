'use strict';
console.log('js is connected');
//global var
let storeTable = document.getElementById('cookieTable');

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Locations(locationName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale){
  this.locationName = locationName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.totalDailyCookies = 0;
  this.cookiesEachHour = [];
}

let seattle = new Locations('Seattle',23,65,6.3);
let tokyo = new Locations('Tokyo', 3, 24, 1.2);
let dubai = new Locations('Dubai', 11, 38, 3.7);
let paris = new Locations('Paris', 20, 38, 2.3);
let lima = new Locations('Lima', 2, 16, 4.6);
//  [{name: 'seattle,  min, max}]
let allStores = [seattle, tokyo, dubai, paris, lima];

Locations.prototype.cookiesSold = function(){
  for(let i = 0; i < hours.length; i++){
    //
    this.cookiesEachHour[i] = Math.floor(randomCustomer(23, 65) * this.avgCookiesPerSale);
  }
};
//       randomCustomer(           23,             65)
function randomCustomer(minCustomersPerHour, maxCustomersPerHour) {

  return Math.floor(Math.random() * (maxCustomersPerHour - minCustomersPerHour) + minCustomersPerHour);
}

/// Create table
let tableHead = document.createElement('tr');
let tableStoreHead = document.createElement('th');
tableStoreHead.textContent = 'Locations';
tableHead.appendChild(tableStoreHead);
storeTable.appendChild(tableHead);

for(let i = 0; i < hours.length; i++){
  let tableHours = document.createElement('th');
  tableHours.textContent = hours[i];
  tableHead.appendChild(tableHours);
}

Locations.prototype.storeInformation = function(){
  this.cookiesSold();
  let locationRow = document.createElement('tr');
  storeTable.appendChild(locationRow);
  let locationHead = document.createElement('th');
  locationHead.textContent = this.locationName;
  locationRow.appendChild(locationHead);

  for(let i = 0; i < hours.length; i++){
    this.totalDailyCookies += this.cookiesEachHour[i];
    let locationCube = document.createElement('td');
    locationCube.textContent = this.cookiesEachHour[i];
    locationRow.appendChild(locationCube);
  }

  /// Add store totals for each store

  let headTotal = document.createElement('td');
  headTotal.textContent = this.totalDailyCookies;
  locationRow.appendChild(headTotal);
};

let headTotalTop = document.createElement('th');
headTotalTop.textContent = ('Total');
tableHead.appendChild(headTotalTop);

Locations.prototype.render = function () {
  let parentElement = document.getElementById('footerTotals');

  let footerRow = document.createElement('tr');
  let totalTitle = document.createElement('th');
  totalTitle.textContent = 'Total';
  footerRow.appendChild(totalTitle);

  let grandTotal = 0;

  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;

    for (let j = 0; j < allStores.length; j++) {
      hourlyTotal = hourlyTotal + allStores[j].cookiesPerHour[i];
    }
    grandTotal += hourlyTotal;
    let hourlyTotalTd = document.createElement('td');
    hourlyTotalTd.textContent = hourlyTotal;
    footerRow.appendChild(hourlyTotalTd);
  }
  let grandTotalRow = document.createElement('td');
  grandTotalRow.textContent = grandTotal;
  footerRow.appendChild(grandTotalRow);
  parentElement.appendChild(footerRow);
};




for (let i = 0; i < allStores.length; i++){
  allStores[i].storeInformation();
}

Locations.prototype.render();
