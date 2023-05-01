 <?php
//    Variable en PHP
    $branding = 350;
    $organic_growth = 18;
    $total_growth = 50;
    $seo_level = 42;
    $sales = 80;
    $projected_earnings = 120000;
    $countries_list = json_encode(array('US', 'CA', 'MX', 'CO', 'ES'));
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/style.css">
    <title>Title</title>
</head>
<body>
    <div class="dashboard">
        <div class="left-container">
        <div class="left-up-left-container">
            <div class="brand-chart-container">
                <div class="brand-chart-parent">
                    <canvas id="brand-chart"></canvas>
                </div>
                <div class="brand-chart-text-container">
                    <p>Reconocimiento de marca</p>
                    <!-- Aqui se lee de PHP para el porcentaje -->
                    <p class="percentage-number"><?= $branding ?>%</p>
                </div>
            </div>
            <div class="organic-growth-container">
                <div class="organic-growth-doughnut-container">
                    <div class="organic-growth-doughnut-parent">
                        <canvas id="organic-growth-doughnut-chart"></canvas>
                    </div>
                    <div class="organic-growth-doughnut-text-container">
                        <p>Crecimiento organico</p>
                        <p class="percentage-number"><?= $organic_growth ?>%</p>
                    </div>
                </div>
                <div class="organic-growth-linear-parent">
                    <canvas id="organic-growth-linear-chart"></canvas>
                </div>
            </div>
        </div>
        <!--     Map PLACEHOLDER       -->
        <div class="world-map-container">
                <div id="chartdiv"></div>
        </div>
        <div class="left-down-container">
            <div class="total-growth-container">
                <div class="total-growth-doughnut-container">
                    <div class="total-growth-doughnut-parent">
                        <canvas id="total-growth-doughnut-chart"></canvas>
                    </div>
                    <div class="total-growth-text-container">
                        <p>Crecimiento Total en Redes Sociales</p>
                        <p class="percentage-number"><?= $total_growth ?>%</p>
                    </div>
                </div>
                <div class="total-growth-linear-parent">
                    <canvas id="total-growth-linear-chart"></canvas>
                </div>
            </div>
            <div class="seo-container">
                <div class="seo-parent">
                    <canvas id="seo-chart"></canvas>
                </div>
                <div class="seo-text-container">
                    <p>Nivel de SEO</p>
                    <p><?= $seo_level ?>%</p>
                </div>
            </div>
        </div>
    </div>
        <div class="right-container">
        <div class="right-up">
            <div class="socials-container">
                <div class="socials-polar-parent">
                    <canvas id="socials-polar"></canvas>
                </div>
                <div class="socials-text-container"></div>
            </div>
            <div class="bounce-rate-container">
                <p>Tasa de Rebote</p>
                <div class="bounce-rate-parent">
                    <canvas id="bounce-rate"></canvas>
                </div>
            </div>
        </div>
        <div class="right-down">
            <div class="sales-container">
                <div class="sales-text-container">
                    <p>Ventas 1er Trimestre</p>
                    <p class="percentage-number"><?= $sales?>%</p>
                </div>
                <div class="sales-polar-parent">
                    <canvas id="sales-polar"></canvas>
                </div>
                <div class="sales-bar-parent">
                    <canvas id="sales-bar"></canvas>
                </div>
                <p>Ultimos 5 dias</p>
            </div>
            <div class="projected-earnings-container">
                <div class="projected-earnings-box">
                    <p>Ganancias Proyectadas</p>
                    <p class="percentage-number">$<?= $projected_earnings ?></p>
                </div>
                <div class="projected-earnings-linear-parent">
                    <canvas id="projected-earnings"></canvas>
                </div>
            </div>
        </div>
    </div>
    </div>

    <script>
        // Se declara variable en JS para leerla en js/main.js
        let branding = <?= $branding ?>;
        let organicGrowth = <?= $organic_growth ?>;
        let totalGrowth = <?= $total_growth ?>;
        let seoLevel = <?= $seo_level ?>;
        let countriesList = <?= $countries_list ?>;
    </script>
    <script src="https://cdn.amcharts.com/lib/5/index.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/map.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/geodata/worldLow.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="js/map-chart.js"></script>
    <script src="js/main.js"></script>
</body>
</html>