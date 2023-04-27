const brandChartCtx = document.getElementById('brand-chart');
const secondChartCtx = document.getElementById('secondChart');

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
            hoverOffset: 4
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
new Chart(secondChartCtx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});