// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = (drivers) => {
    return [...drivers.slice(0,2)];
}

const returnLastTwoDrivers = drivers => {
    return [...drivers.slice(2)];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers ]; 

function createFareMultiplier(multiplier) {
    return function (fare) {
        return multiplier * fare;
    }
}

const fareMulti = createFareMultiplier(2);
function fareDoubler(fare) {
    return fareMulti(fare);
}

const fareMulti2 = createFareMultiplier(3);
function fareTripler(fare) {
    return fareMulti2(fare);
}

function selectDifferentDrivers(arrayOfDrivers, funct) {
    return funct(arrayOfDrivers);
}
