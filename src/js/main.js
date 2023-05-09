import {chart} from "./map.js"

import {
    seoPieChart,
    salesPieChart,
    totalGrowthPieChart,
    organicGrowthPieChart,
    brandingPieChart
} from "./pie";

import {
    totalGrowthLinearChart,
    organicGrowthLinearChart,
    projectedEarningsLinearChart
} from "./linear";

import {
    socialsRadarChart
} from "./radar";

import {
    bounceRateBarChart,
    salesBarChart,
} from "./column";

import { sectorComercialArray, countryArray } from "../data";

let selectedCommercialSector = null;
let selectedCountry = null;
let expenses = null;
let roi = null;

let testSector = document.getElementById('test-sector');
let testCountry = document.getElementById('test-country');
let testExpenses = document.getElementById('test-expenses');
let testRoi = document.getElementById('test-roi');
let errorMessage = document.getElementById('error-message');

let sectorButton = document.getElementById('sector');
let sectorContainer = document.getElementById('sector-container');

let serviceValueButton = document.getElementById('service-value');
let serviceValueContainer = document.getElementById('service-value-container');

let countryButton = document.getElementById('country');
let countryContainer = document.getElementById('country-container');

let expensesInput = document.getElementById('expenses-input');
let roiInput = document.getElementById('roi-input');

let submitButton = document.getElementById('submit-button');

function toggleActiveClass(element, className) {
    let buttonsContainer = document.getElementsByClassName(className);
    for (let i = 0; i < buttonsContainer.length; i++) {
        buttonsContainer[i].classList.remove('active');
    }
    element.classList.add('active');
}

function toggleVisibleClass(element) {
    let containers = document.getElementsByClassName('content');
    for (let i = 0; i < containers.length; i++) {
        containers[i].classList.add('hidden');
        element.classList.remove('visible');
    }
    element.classList.add('visible');
    element.classList.remove('hidden');

}

function generateOptions(data, context, target, finalVariable){
    for (let i = 0; i < data.length; i++) {
        let button = document.createElement('button');
        button.classList.add(`detailed-${context}-button`);
        button.id = data[i].toLowerCase().split(' ').join('-');
        button.innerHTML = data[i];
        button.addEventListener('click', function () {
            finalVariable = button.id;
            toggleActiveClass(button, `detailed-${context}-button`);
        });
        target.appendChild(button);
    }
}

function addListenersToButtons(button, container) {
    button.addEventListener('click', function () {
        toggleActiveClass(button, 'form-button');
        toggleVisibleClass(container);
    });
}

function addListenersToInputs(input, finalVariable) {
    input.addEventListener('input', function () {
        finalVariable = input.value;
    });
}

submitButton.addEventListener('click', function () {
    let actives = document.getElementsByClassName('active');
    for (let i = 0; i < actives.length; i++) {
        if(actives[i].classList.contains('detailed-sector-button')){
            selectedCommercialSector = actives[i].id;
        }
        if(actives[i].classList.contains('detailed-country-button')){
            selectedCountry = actives[i].id;
        }
    };

    expenses = expensesInput.value;
    roi = roiInput.value;
    if(selectedCommercialSector === null || selectedCountry === null || expenses === null || roi === null){
        errorMessage.innerHTML = 'Missing fields';
    } else {
        testSector.innerHTML = selectedCommercialSector;
        testCountry.innerHTML = selectedCountry;
        testExpenses.innerHTML = expenses;
        testRoi.innerHTML = roi;
        errorMessage.innerHTML = '';
    }
});

generateOptions(sectorComercialArray, 'sector', sectorContainer, selectedCommercialSector);
generateOptions(countryArray, 'country', countryContainer, selectedCountry);

addListenersToButtons(sectorButton, sectorContainer);
addListenersToButtons(countryButton, countryContainer);
addListenersToButtons(serviceValueButton, serviceValueContainer);

addListenersToInputs(expensesInput, expenses);
addListenersToInputs(roiInput, roi);