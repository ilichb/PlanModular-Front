<?php
    $branding = 32;
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
    <link rel="stylesheet" type="text/css" href="styles.css" />
</head>
<body>
    <div class="dashboard">
        <div class="left-container">
            <div class="branding-organic-growth-container">
                <div class="branding-container">
                    <p class="title">RECONOCMIENTO DE MARCA</p>
                    <div class="branding-chart-container">
                        <div id="branding-pie"></div>
                        <p class="branding-text"><?= $branding ?>%</p>
                    </div>

                </div>
                <div class="organic-growth-container">
                    <div id="organic-growth-pie"></div>
                    <div id="organic-growth-linear"></div>
                </div>
            </div>
            <div class="potential-reach-container"></div>
            <div class="total-growth-container">
                <div id="total-growth-pie"></div>
                <div id="total-growth-linear"></div>
            </div>
            <div class="seo-container">
                <div id="seo-pie"></div>
            </div>
        </div>
        <div class="right-panel">
            <div class="socials-container">
                <div id="socials-radar"></div>
            </div>
            <div class="bounce-container">
                <div id="bounce-bar"></div>
            </div>
            <div class="sales-container">
                <div id="sales-radar"></div>
                <div id="sales-bar"></div>
            </div>
            <div class="projected-earnings-container">
                <div class="projected-earnings-box"></div>
                <div class="projected-earnings-linear"></div>
            </div>
        </div>
    </div>
    <script>
        let branding = <?= $branding ?>;
        let organicGrowth = <?= $organic_growth ?>;
        let totalGrowth = <?= $total_growth ?>;
        let seoLevel = <?= $seo_level ?>;
        let countriesList = <?= $countries_list ?>;
    </script>
    <script src="https://cdn.amcharts.com/lib/5/index.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/percent.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>
    <script type="module" src="src/js/main.js"></script>
<!--    <script type="module" src="bundle.js"></script>-->
</body>
</html>