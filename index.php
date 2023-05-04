<?php
    $branding = 35;
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
    <title>Andromeda</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="styles.css" />
</head>
<body>
    <div class="dashboard">
        <div class="left-container">
            <div class="branding-organic-growth-container">
                <div class="branding-container">
                    <p class="container-title">RECONOCMIENTO DE MARCA</p>
                    <div class="branding-chart-container">
                        <div id="branding-pie"></div>
                        <p class="branding-text"><?= $branding ?>%</p>
                    </div>
                </div>
                <div class="organic-growth-container">
                    <div class="organic-growth-title-pie-container">
                        <p class="container-title">CRECIMIENTO ORGANICO</p>
                        <div class="organic-growth-pie-chart-container">
                            <div id="organic-growth-pie"></div>
                            <p class="branding-text"><?= $organic_growth ?>%</p>
                        </div>
                    </div>
                    <div id="organic-growth-linear"></div>
                </div>
            </div>
            <div class="potential-reach-container">
                <p class="container-title">ALCANCE POTENCIAL</p>
                <div id="potential-reach-map"></div>
            </div>
            <div class="total-growth-container">
                <div class="total-growth-title-pie-container">
                    <p class="container-title">CRECIMIENTO TOTAL</p>
                    <div class="total-growth-pie-chart-container">
                        <div id="total-growth-pie"></div>
                        <p class="branding-text"><?= $total_growth ?>%</p>
                    </div>
                </div>
                <div id="total-growth-linear"></div>
            </div>
            <div class="seo-container">
                <p class="container-title">SEO</p>
                <div class="seo-pie-chart-container">
                    <div id="seo-pie"></div>
                    <p class="branding-text"><?= $seo_level ?>%</p>
                </div>
            </div>
        </div>
        <div class="right-panel">
            <div class="socials-container">
                <p class="container-title">PLATAFORMAS SUGERIDAS</p>
                <div id="socials-radar"></div>
            </div>
            <div class="bounce-container">
                <p class="container-title">TASA DE REBOTE</p>
                <div id="bounce-bar"></div>
            </div>
            <div class="sales-container">
                <p class="container-title">VENTAS 1er TRIMESTRE</p>
                <div class="sales-pie-chart-container">
                    <div id="sales-pie"></div>
                    <p class="sales-block-percentage"><?= $sales ?>%</p>
                </div>
                <div id="sales-bar"></div>
            </div>
            <div class="projected-earnings-container">
                <div class="projected-earnings-box">
                    <p class="container-title">GANANCIAS PROYECTADAS</p>
                    <p class="projected-earnings-amount">$<?= $projected_earnings ?></p>
                </div>
                <div id="projected-earnings-linear"></div>
            </div>
        </div>
    </div>
    <script>
        let branding = <?= $branding ?>;
        let organicGrowth = <?= $organic_growth ?>;
        let totalGrowth = <?= $total_growth ?>;
        let seoLevel = <?= $seo_level ?>;
        let countriesList = <?= $countries_list ?>;
        let sales = <?= $sales ?>;
    </script>
    <script src="https://cdn.amcharts.com/lib/5/index.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/xy.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/percent.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/map.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/geodata/worldLow.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/radar.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>
    <script src="bundle.js"></script>
</body>
</html>