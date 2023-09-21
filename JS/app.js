'use strict';
console.log('js is connected');

let parentElement = document.getElementById('cookieTable');

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const seattle = {
  locationName: 'Seattle',
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  hourlyTotal: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  avgCookiesPerSale: 6.3,
  // here and below reuse code for different locations
  calcCustomerEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesEachHour[i] = hours[i] + ' ' + Math.floor(this.avgCookiesPerSale * randomCustomer(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
  },
  calcCookiesEachHour: function () {
    let article = document.createElement('article');
    parentElement.appendChild(article);
    let storeComment = document.createElement('p');
    storeComment.textContent = 'Cookie Sales in Seattle';
    article.appendChild(storeComment);
    let storeList = document.createElement('ul');
    for (let i = 0; i < hours.length; i++) {
      let storeL = document.createElement('li');
      seattle.totalDailyCookies += parseInt(seattle.cookiesEachHour[i].split(' ')[1]);
      storeList.textContent = seattle.cookiesEachHour[i];
      storeL.appendChild(storeList);
    }
    article.appendChild(storeList);
    let listItem = document.createElement('li');
    listItem.textContent = 'total ' + seattle.totalDailyCookies + ' cookies';
    article.appendChild(listItem);
  }
};


const tokyo = {
  locationName: 'Tokyo',
  minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  hourlyTotal: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  avgCookiesPerSale: 1.2,

  calcCustomerEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesEachHour[i] = hours[i] + ' ' + Math.floor(this.avgCookiesPerSale * randomCustomer(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
  },
  calcCookiesEachHour: function () {
    let article = document.createElement('article');
    parentElement.appendChild(article);
    let storeComment = document.createElement('p');
    storeComment.textContent = 'Cookie Sales in Tokyo';
    article.appendChild(storeComment);
    let storeList = document.createElement('ul');
    for (let i = 0; i < hours.length; i++) {
      let storeL = document.createElement('li');
      tokyo.totalDailyCookies += parseInt(tokyo.cookiesEachHour[i].split(' ')[1]);
      storeList.textContent = tokyo.cookiesEachHour[i];
      storeL.appendChild(storeList);
    }
    article.appendChild(storeList);
    let listItem = document.createElement('li');
    listItem.textContent = 'total ' + tokyo.totalDailyCookies + ' cookies';
    article.appendChild(listItem);
  }
};


const dubai = {
  locationName: 'Dubai',
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  hourlyTotal: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  avgCookiesPerSale: 3.7,

  calcCustomerEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesEachHour[i] = hours[i] + ' ' + Math.floor(this.avgCookiesPerSale * randomCustomer(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
  },
  calcCookiesEachHour: function () {
    let article = document.createElement('article');
    parentElement.appendChild(article);
    let storeComment = document.createElement('p');
    storeComment.textContent = 'Cookie Sales in Dubai';
    article.appendChild(storeComment);
    let storeList = document.createElement('ul');
    for (let i = 0; i < hours.length; i++) {
      let storeL = document.createElement('li');
      dubai.totalDailyCookies += parseInt(dubai.cookiesEachHour[i].split(' ')[1]);
      storeList.textContent = dubai.cookiesEachHour[i];
      storeL.appendChild(storeList);
    }
    article.appendChild(storeList);
    let listItem = document.createElement('li');
    listItem.textContent = 'total ' + dubai.totalDailyCookies + ' cookies';
    article.appendChild(listItem);
  }
};


const paris = {
  locationName: 'Paris',
  minCustomersPerHour: 20,
  maxCustomersPerHour: 38,
  hourlyTotal: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  avgCookiesPerSale: 2.3,

  calcCustomerEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesEachHour[i] = hours[i] + ' ' + Math.floor(this.avgCookiesPerSale * randomCustomer(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
  },
  calcCookiesEachHour: function () {
    let article = document.createElement('article');
    parentElement.appendChild(article);
    let storeComment = document.createElement('p');
    storeComment.textContent = 'Cookie Sales in Paris';
    article.appendChild(storeComment);
    let storeList = document.createElement('ul');
    for (let i = 0; i < hours.length; i++) {
      let storeL = document.createElement('li');
      paris.totalDailyCookies += parseInt(paris.cookiesEachHour[i].split(' ')[1]);
      storeList.textContent = paris.cookiesEachHour[i];
      storeL.appendChild(storeList);
    }
    article.appendChild(storeList);
    let listItem = document.createElement('li');
    listItem.textContent = 'total ' + paris.totalDailyCookies + ' cookies';
    article.appendChild(listItem);
  }
};


const lima = {
  locationName: 'Lima',
  minCustomersPerHour: 2,
  maxCustomersPerHour: 16,
  hourlyTotal: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  avgCookiesPerSale: 4.6,

  calcCustomerEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesEachHour[i] = hours[i] + ' ' + Math.floor(this.avgCookiesPerSale * randomCustomer(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
  },
  calcCookiesEachHour: function () {
    let article = document.createElement('article');
    parentElement.appendChild(article);
    let storeComment = document.createElement('p');
    storeComment.textContent = 'Cookie Sales in Lima';
    article.appendChild(storeComment);
    let storeList = document.createElement('ul');
    for (let i = 0; i < hours.length; i++) {
      let storeL = document.createElement('li');
      lima.totalDailyCookies += parseInt(lima.cookiesEachHour[i].split(' ')[1]);
      storeList.textContent = lima.cookiesEachHour[i];
      storeL.appendChild(storeList);
    }
    article.appendChild(storeList);
    let listItem = document.createElement('li');
    listItem.textContent = 'total ' + lima.totalDailyCookies + ' cookies';
    article.appendChild(listItem);
  }
};


/// Do not copy below!
function randomCustomer(minCustomersPerHour, maxCustomersPerHour) {
  return Math.floor(Math.random() * (minCustomersPerHour - maxCustomersPerHour) + minCustomersPerHour);
}




let allShops = [seattle, lima, paris, dubai, tokyo];
function renderAllShops() {
  for (let i = 0; i < allShops.length; i++) {
    allShops[i].render();
  }
}

renderAllShops();
