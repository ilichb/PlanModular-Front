<?php
//    Variable en PHP
    $branding = 25;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/style.css">
    <title>Title</title>
</head>
<body>
    <div class="chartContainer">
        <div class="brand-chart-container">
            <div class="brand-chart-parent">
                <canvas id="brand-chart"></canvas>
            </div>
            <div class="brand-chart-text-container">
                <p>Reconocimiento de marca</p>
                <!-- Aqui se lee de PHP para el porcentaje -->
                <p class="branding-percentage"><?= $branding ?>%</p>
            </div>
        </div>
        <div>
            <canvas id="secondChart"></canvas>
        </div>
    </div>

    <script>
        // Se declara variable en JS para leerla en js/main.js
        let branding = <?= $branding ?>;
    </script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="js/main.js"></script>
</body>
</html>