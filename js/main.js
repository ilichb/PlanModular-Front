const brandChartCtx = document.getElementById('brand-chart');
const orgGrowthDoughnutCtx = document.getElementById('organic-growth-doughnut-chart');
const orgGrowthLinearCtx = document.getElementById('organic-growth-linear-chart');
const worldMapCtx = document.getElementById('world-map-chart');
const totalGrowthDoughnutCtx = document.getElementById('total-growth-doughnut-chart');
const totalGrowthLinearCtx = document.getElementById('total-growth-linear-chart');
const seoCtx = document.getElementById('seo-chart');
const socialsCtx = document.getElementById('socials-polar');
const bounceRateCtx = document.getElementById('bounce-rate');
const salesPolarCtx = document.getElementById('sales-polar');
const salesBarCtx = document.getElementById('sales-bar');
const projectedEarningsCtx = document.getElementById('projected-earnings');

new Chart(brandChartCtx, {
    type: 'doughnut',
    data: {
        labels: [
            'branding',
            'filler',
        ],
        datasets: [{
            // Aca se puede usar la variable branding que se declaro en el script de js desde index.php
            data: [branding, 100-branding],
            borderColor: 'rgb(0,0,0)',
            backgroundColor: [
                'rgb(0,0,0)',
                'rgba(0, 0, 0, 0)',
            ],
        }]
    },
    options: {
        events: [],
        plugins: {
            legend: {
                display:false
            }
        }
    },
});

new Chart(orgGrowthDoughnutCtx, {
    type: 'doughnut',
    data: {
        labels: [
            'branding',
            'filler',
        ],
        datasets: [{
            data: [organicGrowth, 100-organicGrowth],
            borderColor: 'rgb(0,0,0)',
            backgroundColor: [
                'rgb(0,0,0)',
                'rgba(0, 0, 0, 0)',
            ],
        }]
    },
    options: {
        events: [],
        plugins: {
            legend: {
                display:false
            }
        }
    },
});

new Chart(orgGrowthLinearCtx, {
    type: 'line',
    data: {
        labels: ['labels', 'labels', 'labels', 'labels', 'labels', 'labels', 'labels'],
        datasets: [{
            label: 'My First Dataset',
            data: [5, 12, 28, 51, 71, 87, 96],
            fill: {
                target: 'origin',
                above: 'rgba(98,167,182,0.4)',
            },
            borderColor: 'rgb(0,0,0)',
            tension: 0.1
        }]
    },
    options: {
        events: [],
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                display: false
            },
            y: {
                display: false
            }
        },
        plugins: {
            legend: {
                display:false,
            }
        }
    },
});

new Chart(worldMapCtx, {
    type: 'doughnut',
    data: {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
        }]
    },
})

new Chart(totalGrowthDoughnutCtx, {
    type: 'doughnut',
    data: {
        labels: [
            'branding',
            'filler',
        ],
        datasets: [{
            data: [totalGrowth, 100-totalGrowth],
            borderColor: 'rgb(0,0,0)',
            backgroundColor: [
                'rgb(0,0,0)',
                'rgba(0, 0, 0, 0)',
            ],
        }]
    },
    options: {
        events: [],
        plugins: {
            legend: {
                display:false
            }
        }
    },
});

new Chart(totalGrowthLinearCtx, {
    type: 'line',
    data: {
        labels: ['labels', 'labels', 'labels', 'labels', 'labels', 'labels', 'labels'],
        datasets: [{
            label: 'My First Dataset',
            data: [2, 9, 17, 36, 58, 69, 81],
            fill: {
                target: 'origin',
                above: 'rgba(98,167,182,0.4)',
            },
            borderColor: 'rgb(0,0,0)',
            tension: 0.1
        }]
    },
    options: {
        events: [],
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                display: false
            },
            y: {
                display: false
            }
        },
        plugins: {
            legend: {
                display:false,
            }
        }
    },
});

new Chart(seoCtx, {
    type: 'doughnut',
    data: {
        labels: [
            'branding',
            'filler',
        ],
        datasets: [{
            data: [seoLevel, 100-seoLevel],
            borderColor: 'rgb(0,0,0)',
            backgroundColor: [
                'rgb(0,0,0)',
                'rgba(0, 0, 0, 0)',
            ],
        }]
    },
    options: {
        events: [],
        plugins: {
            legend: {
                display:false
            }
        }
    },
});

new Chart(socialsCtx, {
    type: 'polarArea',
    data: {
        labels: [
            'Facebook',
            'Tiktok',
            'Youtube',
            'LinkedIn',
        ],
        datasets: [{
            label: 'Socials %',
            data: [11, 16, 7, 3],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(122,192,75)',
                'rgb(255, 205, 86)',
                'rgb(54, 162, 235)'
            ]
        }]
    },
    options: {
        scales: {
            r: {
                display: false
            }
        },
        plugins: {
            legend: {
                position: 'right'
            }
        }
    }
});

new Chart(bounceRateCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', "Feb", 'March', "April", "May", "June"],
        datasets: [{
            label: 'Bounce Rate',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false,
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
})

new Chart(salesPolarCtx, {
    type: 'polarArea',
    data: {
        labels: [
            'Service 1',
            'Service 2',
            'Service 3',
            'Service 4',
        ],
        datasets: [{
            label: 'Services %',
            data: [3, 11, 8, 14],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(122,192,75)',
                'rgb(255, 205, 86)',
                'rgb(54, 162, 235)'
            ]
        }]
    },
    options: {
        scales: {
            r: {
                display: false
            }
        },
        plugins: {
            legend: {
                position: 'right'
            }
        }
    }
});

new Chart(salesBarCtx, {
    type: 'bar',
    data: {
        labels: ['Mon', "Tue", 'Wed', "Thu", "Friday"],
        datasets: [{
            label: 'Sales',
            data: [17, 9, 26, 4, 31],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false,
            }
        },
        scales: {
            y: {
                display: false,
            },
            x: {
                display: false,
            }
        }
    },
})

new Chart(projectedEarningsCtx, {
    type: 'line',
    data: {
        labels: ['labels', 'labels', 'labels', 'labels', 'labels', 'labels', 'labels'],
        datasets: [{
            label: 'My First Dataset',
            data: [2, 9, 17, 36, 58, 69, 81],
            fill: {
                target: 'origin',
                above: 'rgba(98,167,182,0.4)',
            },
            borderColor: 'rgb(0,0,0)',
            tension: 0.1
        }]
    },
    options: {
        events: [],
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                display: false
            },
            y: {
                display: false
            }
        },
        plugins: {
            legend: {
                display:false,
            }
        }
    },
});