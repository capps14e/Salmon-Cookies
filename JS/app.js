'use strict';


const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const seattle = {
    locationName: 'Seattle',
    minCustomersPerHour: 23,
    maxCustomersPerHour: 65,
    customersEachHour: [],
    cookiesEachHour: [],
    totalDailyCookies: 0,
    avgCookiesPerSale: 4.6,
    calcCustomerEachHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.customersEachHour.push(random(this.maxCustomersPerHour, this.minCustomersPerHour));
        }
    },
    calcCookiesEachHour: function () {
        this.calcCustomerEachHour();
        for (let i = 0; i < hours.length; i++) {
            console.log();
            let oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
            console.log('for each hour', oneHour);
            this.cookiesEachHour.push(oneHour);
            this.totalDailyCookies = this.totalDailyCookies + oneHour;
        }
    },
    render() {
        this.calcCookiesEachHour();
        const unorderedList = document.getElementById('city');
        for (let i = 0; i < hours.length; i++) {
            const listItem = document.createElement('li');
            listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
            unorderedList.appendChild(listItem);
        }
        const listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
        unorderedList.appendChild(listItem);
    }
};


function random(max, min) {
    return Math.round(Math.random() * (max - min + 1)) + min;
}
//                0
let allShops = [seattle];
function renderAllShops() {
    for (let i = 0; i < allShops.length; i++) {
        allShops[i].render();
    }
}

renderAllShops();
}